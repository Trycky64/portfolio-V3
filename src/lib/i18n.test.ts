import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { getTranslations } from "./i18n";

function flatten(value: unknown, prefix = ""): Record<string, string> {
  if (typeof value === "string") return { [prefix]: value };
  return Object.fromEntries(Object.entries(value as Record<string, unknown>).flatMap(([key, child]) =>
    Object.entries(flatten(child, prefix ? `${prefix}.${key}` : key)),
  ));
}

function sourceFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? sourceFiles(path) : /\.tsx?$/.test(path) && !/\.test\.tsx?$/.test(path) ? [path] : [];
  });
}

describe("lib/i18n", () => {
  it("a les mêmes clés, valeurs non vides et placeholders dans les deux langues", async () => {
    const fr = flatten(await getTranslations("fr"));
    const en = flatten(await getTranslations("en"));
    expect(Object.keys(fr).sort()).toEqual(Object.keys(en).sort());
    for (const key of Object.keys(fr)) {
      expect(fr[key].trim(), key).not.toBe("");
      expect(en[key].trim(), key).not.toBe("");
      const placeholders = (value: string) => [...value.matchAll(/\{(\w+)\}/g)].map((match) => match[1]).sort();
      expect(placeholders(fr[key]), key).toEqual(placeholders(en[key]));
    }
  });

  it("couvre chaque clé statique passée à t et les clés déclarées pour ses appels dynamiques", async () => {
    const sources = sourceFiles(join(process.cwd(), "src"));
    const sourceText = sources.map((path) => readFileSync(path, "utf8")).join("\n");
    const staticCalls = [...sourceText.matchAll(/\bt\(\s*["']([^"']+)["']/g)].map((match) => match[1]);
    // NAV_ITEMS, FILTERS and errorKeyForResponse supply literals to t at runtime.
    const dynamicLiterals = [...sourceText.matchAll(/["']((?:nav|projects_list\.filters|projects_list\.result_count|contact\.errors)\.[\w.]+)["']/g)].map((match) => match[1]);
    const used = [...new Set([...staticCalls, ...dynamicLiterals])];
    expect(used.length).toBeGreaterThan(50);
    for (const locale of ["fr", "en"] as const) {
      const messages = flatten(await getTranslations(locale));
      expect(used.filter((key) => !(key in messages)), locale).toEqual([]);
    }
  });

  it("ne contient aucune ancienne clé ou mention commerciale freelance", async () => {
    for (const locale of ["fr", "en"] as const) {
      const messages = flatten(await getTranslations(locale));
      expect(Object.keys(messages).join(" ")).not.toMatch(/freelance|devis|quote|prestations?|deadline|budget|services/i);
      expect(Object.values(messages).join(" ")).not.toMatch(/freelance|devis|quote|prestations?|deadline|on travaille ensemble|let.s work together/i);
    }
  });
});
