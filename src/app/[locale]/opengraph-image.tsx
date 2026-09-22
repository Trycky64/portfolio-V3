import { ImageResponse } from "next/og";

import { PERSON_NAME, ROLE } from "@/lib/site";

export const alt = "Quentin Perriere — Python & Backend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const language = locale === "en" ? "en" : "fr";

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#090d1b", color: "#f5f7ff", padding: 72, fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20, color: "#8d93ff", fontSize: 30, fontWeight: 700 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 72, height: 72, border: "2px solid #8d93ff", borderRadius: 18 }}>QP</div>
        <span>PORTFOLIO</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -3 }}>{PERSON_NAME}</div>
        <div style={{ fontSize: 37, color: "#c5cbdf" }}>{ROLE[language]}</div>
      </div>
      <div style={{ display: "flex", gap: 18, fontSize: 24, color: "#a9b1ce" }}>
        <span>Python</span><span>•</span><span>Backend</span><span>•</span><span>APIs</span><span>•</span><span>Tests</span>
      </div>
    </div>,
    size,
  );
}
