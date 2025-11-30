"use client";

import Link from "next/link";
import { Container } from "./container";

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-qp-bg/80 backdrop-blur supports-[backdrop-filter]:bg-qp-bg/60 sticky top-0 z-40">
      <Container>
        <div className="flex h-14 items-center justify-between">

          {/* BOUTON HOME ALWAYS ABSOLUTE + VIOLET */}
          <Link
            href="https://quentinperriere.com"
            className="font-semibold text-qp-primary hover:text-qp-primary/80 transition focus-ring"
          >
            <span>&lt;Quentin Perriere/&gt;</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden sm:flex gap-6 text-sm">
            <Link href="/#projects" className="hover:text-qp-primary transition">
              Projets
            </Link>
            <Link href="/#timeline" className="hover:text-qp-primary transition">
              Parcours
            </Link>
            <Link href="/#skills" className="hover:text-qp-primary transition">
              Compétences
            </Link>
            <Link href="/#about" className="hover:text-qp-primary transition">
              À propos
            </Link>
            <Link href="/#contact" className="hover:text-qp-primary transition">
              Contact
            </Link>
          </nav>

        </div>
      </Container>
    </header>
  );
}
