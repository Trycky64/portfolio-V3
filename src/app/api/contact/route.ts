// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1, "Le nom est requis").max(100),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Le message est trop court").max(2000),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const data = ContactSchema.parse(json);

    // Pour l’instant, on log juste côté serveur
    console.log("Nouveau message de contact:", data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          ok: false,
          errors: error.flatten(),
        },
        { status: 400 },
      );
    }

    console.error("Erreur dans /api/contact:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
