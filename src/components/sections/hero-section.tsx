"use client";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { IconLink } from "@/components/ui/icon-link";
import { useI18n } from "@/lib/i18n/context";
import {
  AVAILABILITY,
  GITHUB_URL,
  LINKEDIN_URL,
  LOCATION,
  ROLE,
} from "@/lib/site";

const HERO_STACK = [
  "Python",
  "Backend",
  "API REST",
  "SQL",
  "Git",
  "Docker",
  "Linux",
  "TypeScript",
] as const;

export function HeroSection() {
  const { t, locale } = useI18n();
  const base = `/${locale}`;

  return (
    <section
      id="hero"
      className="border-b border-border bg-background"
      aria-labelledby="hero-title"
    >
      <Container>
        <div className="py-16 sm:py-24">
          <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_auto]">
            <div className="animate-fade-in-up">
              <p className="text-sm font-semibold text-primary">
                {ROLE[locale]}
              </p>

              <h1
                id="hero-title"
                className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-text-primary sm:text-5xl"
              >
                {t("hero.title")}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">
                {t("hero.subtitle")}
              </p>

              <div className="mt-7 flex flex-wrap gap-2" aria-label={t("hero.stackAria")}>
                {HERO_STACK.map((item) => (
                  <Badge key={item} variant="tech">
                    {item}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={`${base}#projects`}
                  className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition-colors hover:bg-primary-strong hover:text-white"
                >
                  {t("hero.ctaProjects")}
                </Link>

                <IconLink
                  href={GITHUB_URL}
                  icon="github"
                  label="GitHub"
                  external
                />

                {LINKEDIN_URL && (
                  <IconLink
                    href={LINKEDIN_URL}
                    icon="linkedin"
                    label="LinkedIn"
                    external
                  />
                )}
              </div>

              <div className="mt-7 flex flex-col gap-2 text-sm text-text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
                <p>
                  <span aria-hidden="true">📍 </span>
                  {LOCATION}
                </p>

                <p>{AVAILABILITY[locale]}</p>

                <p className="inline-flex items-center gap-2 font-medium text-success">
                  <span
                    className="h-2 w-2 rounded-full bg-success"
                    aria-hidden="true"
                  />
                  {t("hero.openToWork")}
                </p>
              </div>
            </div>

            <div className="flex animate-fade-in-up justify-center md:justify-end">
              <div className="relative h-48 w-48 sm:h-56 sm:w-56">
                <div
                  className="absolute inset-0 rounded-full bg-primary/15 blur-2xl"
                  aria-hidden="true"
                />
                <Image
                  src="/images/avatar.jpg"
                  alt={t("hero.avatarAlt")}
                  fill
                  priority
                  className="relative rounded-full border border-border object-cover"
                  sizes="(min-width: 768px) 224px, 192px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
