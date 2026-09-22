import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const ENDPOINT = "http://localhost/api/contact";

function jsonRequest(body: unknown, headers: Record<string, string> = {}) {
  return new Request(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  });
}

function rawRequest(body: string, headers: Record<string, string> = {}) {
  return new Request(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body,
  });
}

function setEnv(key: string, value: string | undefined) {
  if (value === undefined) {
    delete process.env[key];
  } else {
    process.env[key] = value;
  }
}

async function loadRoute(env: {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}) {
  vi.resetModules();
  setEnv("RESEND_API_KEY", env.RESEND_API_KEY);
  setEnv("CONTACT_TO_EMAIL", env.CONTACT_TO_EMAIL);
  setEnv("CONTACT_FROM_EMAIL", env.CONTACT_FROM_EMAIL);
  return import("./route");
}

const configuredEnv = {
  RESEND_API_KEY: "test-key",
  CONTACT_TO_EMAIL: "to@example.com",
  CONTACT_FROM_EMAIL: "from@example.com",
};

const validPayload = {
  name: "Jane Doe",
  email: "jane@example.com",
  message: "Bonjour, je recrute un développeur backend.",
};

describe("api/contact route", () => {
  let fetchMock: ReturnType<typeof vi.fn>;
  let logSpy: ReturnType<typeof vi.spyOn>;
  let warnSpy: ReturnType<typeof vi.spyOn>;
  let errorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    fetchMock = vi.fn().mockResolvedValue(new Response("{}", { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);
    logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("accepte un payload valide en FR et appelle Resend", async () => {
    const { POST } = await loadRoute(configuredEnv);

    const res = await POST(jsonRequest({ ...validPayload, locale: "fr" }, { "x-forwarded-for": "1.1.1.1" }));
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [, init] = fetchMock.mock.calls[0]!;
    const sentBody = JSON.parse(init.body as string);
    expect(sentBody.subject).toMatch(/^\[FR\]/);
    expect(sentBody).toMatchObject({
      from: configuredEnv.CONTACT_FROM_EMAIL,
      to: [configuredEnv.CONTACT_TO_EMAIL],
      reply_to: validPayload.email,
    });
  });

  it("accepte un payload valide en EN", async () => {
    const { POST } = await loadRoute(configuredEnv);

    const res = await POST(jsonRequest({ ...validPayload, locale: "en" }, { "x-forwarded-for": "1.1.1.2" }));
    expect(res.status).toBe(200);
    const [, init] = fetchMock.mock.calls[0]!;
    const sentBody = JSON.parse(init.body as string);
    expect(sentBody.subject).toMatch(/^\[EN\]/);
  });

  it("rejette un payload invalide (champs manquants)", async () => {
    const { POST } = await loadRoute(configuredEnv);

    const res = await POST(jsonRequest({ name: "", email: "", message: "" }, { "x-forwarded-for": "1.1.1.3" }));
    const body = await res.json();

    expect(res.status).toBe(400);
    expect(body.ok).toBe(false);
    expect(body.error).toBe("INVALID_DATA");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejette un email invalide", async () => {
    const { POST } = await loadRoute(configuredEnv);

    const res = await POST(
      jsonRequest({ ...validPayload, email: "not-an-email" }, { "x-forwarded-for": "1.1.1.4" }),
    );
    expect(res.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejette un champ trop long", async () => {
    const { POST } = await loadRoute(configuredEnv);

    const res = await POST(
      jsonRequest({ ...validPayload, name: "a".repeat(201) }, { "x-forwarded-for": "1.1.1.5" }),
    );
    expect(res.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejette un corps de requête trop volumineux (413)", async () => {
    const { POST } = await loadRoute(configuredEnv);

    const oversized = "a".repeat(20_000);
    const res = await POST(
      rawRequest(JSON.stringify({ ...validPayload, message: oversized }), {
        "x-forwarded-for": "1.1.1.6",
      }),
    );
    const body = await res.json();

    expect(res.status).toBe(413);
    expect(body.error).toBe("PAYLOAD_TOO_LARGE");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("ignore silencieusement une soumission avec honeypot rempli, sans appeler Resend", async () => {
    const { POST } = await loadRoute(configuredEnv);

    const res = await POST(
      jsonRequest({ ...validPayload, website: "http://spam.example" }, { "x-forwarded-for": "1.1.1.7" }),
    );
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body).toEqual({ ok: true });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("échappe le HTML utilisateur dans l’email et convertit les retours à la ligne", async () => {
    const { POST } = await loadRoute(configuredEnv);

    const maliciousName = "<b>Jane</b>";
    const multilineMessage = "Ligne 1\nLigne 2 <script>alert(1)</script>";

    await POST(
      jsonRequest(
        { ...validPayload, name: maliciousName, message: multilineMessage },
        { "x-forwarded-for": "1.1.1.8" },
      ),
    );

    const [, init] = fetchMock.mock.calls[0]!;
    const sentBody = JSON.parse(init.body as string);

    expect(sentBody.html).not.toContain("<b>Jane</b>");
    expect(sentBody.html).toContain("&lt;b&gt;Jane&lt;/b&gt;");
    expect(sentBody.html).not.toContain("<script>");
    expect(sentBody.html).toContain("Ligne 1<br />Ligne 2");
    expect(sentBody.text).toContain(maliciousName);
  });

  it("répond CONFIG_ERROR quand une variable serveur requise est absente", async () => {
    for (const missing of Object.keys(configuredEnv) as Array<keyof typeof configuredEnv>) {
      const { POST } = await loadRoute({ ...configuredEnv, [missing]: undefined });
      const res = await POST(jsonRequest(validPayload, { "x-forwarded-for": `missing-${missing}` }));
      const body = await res.json();

      expect(res.status).toBe(500);
      expect(body.error).toBe("CONFIG_ERROR");
      expect(fetchMock).not.toHaveBeenCalled();
    }
  });

  it("répond EMAIL_ERROR quand Resend échoue", async () => {
    fetchMock.mockResolvedValue(new Response("boom", { status: 500 }));
    const { POST } = await loadRoute(configuredEnv);

    const res = await POST(jsonRequest(validPayload, { "x-forwarded-for": "1.1.1.10" }));
    const body = await res.json();

    expect(res.status).toBe(500);
    expect(body.error).toBe("EMAIL_ERROR");
  });

  it("limite le débit à 5 requêtes / 10 minutes par IP (429 ensuite)", async () => {
    const { POST } = await loadRoute(configuredEnv);
    const ip = "2.2.2.2";

    for (let i = 0; i < 5; i += 1) {
      const res = await POST(jsonRequest(validPayload, { "x-forwarded-for": ip }));
      expect(res.status).toBe(200);
    }

    const limited = await POST(jsonRequest(validPayload, { "x-forwarded-for": ip }));
    const body = await limited.json();

    expect(limited.status).toBe(429);
    expect(body.error).toBe("RATE_LIMITED");
    expect(limited.headers.get("Retry-After")).toBeTruthy();
  });

  it("ne journalise aucune donnée personnelle (nom, email, message, IP)", async () => {
    const { POST } = await loadRoute(configuredEnv);

    await POST(jsonRequest(validPayload, { "x-forwarded-for": "3.3.3.3" }));

    const allLogArgs = [...logSpy.mock.calls, ...warnSpy.mock.calls, ...errorSpy.mock.calls]
      .flat()
      .map((arg) => JSON.stringify(arg));

    for (const entry of allLogArgs) {
      expect(entry).not.toContain(validPayload.email);
      expect(entry).not.toContain(validPayload.name);
      expect(entry).not.toContain(validPayload.message);
      expect(entry).not.toContain("3.3.3.3");
    }
  });
});
