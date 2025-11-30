import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Le nom est requis").max(200),
  email: z.string().email("Email invalide").max(200),
  message: z.string().min(1, "Le message est requis").max(5000),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = contactSchema.parse(json);

    // Pour l’instant on loggue simplement côté serveur.
    // Tu pourras plus tard brancher ça sur un vrai envoi d’email.
    console.log("[CONTACT] Nouveau message :", {
      ...data,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[CONTACT] Erreur :", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          ok: false,
          error: "INVALID_DATA",
          issues: error.issues,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        ok: false,
        error: "SERVER_ERROR",
      },
      { status: 500 },
    );
  }
}
