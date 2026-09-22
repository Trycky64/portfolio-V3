import { describe, expect, it, vi } from "vitest";

vi.mock("next/font/google", () => ({ Geist: () => ({ variable: "font-sans" }), Geist_Mono: () => ({ variable: "font-mono" }) }));
vi.mock("@/app/globals.css", () => ({}));

import { generateMetadata } from "@/app/[locale]/layout";
import HomePage from "@/app/[locale]/page";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { getAllProjects } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

describe("SEO", () => {
  it("publie les metadata localisées de la homepage", async () => {
    for (const locale of ["fr", "en"] as const) {
      const metadata = await generateMetadata({ params: Promise.resolve({ locale }) });
      expect(metadata.title).toMatchObject({ default: expect.stringContaining("Quentin Perriere") });
      expect(metadata.description).toBeTruthy();
      expect(metadata.metadataBase?.toString()).toBe(`${SITE_URL}/`);
      expect(metadata.alternates).toEqual({ canonical: `/${locale}`, languages: { fr: "/fr", en: "/en", "x-default": "/fr" } });
      expect(metadata.openGraph).toMatchObject({ url: `${SITE_URL}/${locale}`, locale: locale === "fr" ? "fr_FR" : "en_GB", type: "website", images: [{ url: `${SITE_URL}/${locale}/opengraph-image`, width: 1200, height: 630 }] });
      expect(metadata.twitter).toMatchObject({ card: "summary_large_image", images: [`${SITE_URL}/${locale}/opengraph-image`] });
    }
  });

  it("publie exactement les douze URLs publiques sans doublon", () => {
    const urls = sitemap().map((entry) => entry.url);
    const paths = ["", "/projects", ...getAllProjects().map(({ slug }) => `/projects/${slug}`)];
    expect(urls.sort()).toEqual(paths.flatMap((path) => [`${SITE_URL}/fr${path}`, `${SITE_URL}/en${path}`]).sort());
    expect(new Set(urls).size).toBe(12);
    expect(urls.join(" ")).not.toContain("/api/");
  });

  it("autorise les pages publiques et exclut l’API", () => {
    expect(robots()).toEqual({ rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: `${SITE_URL}/sitemap.xml` });
  });

  it("publie Person et WebSite sans données personnelles inventées", async () => {
    for (const locale of ["fr", "en"] as const) {
      const page = await HomePage({ params: Promise.resolve({ locale }) });
      const script = (page.props.children as Array<{ props: { dangerouslySetInnerHTML?: { __html: string } } }>)[0];
      const [person, website] = JSON.parse(script.props.dangerouslySetInnerHTML!.__html);
      expect(person).toMatchObject({ "@type": "Person", name: "Quentin Perriere", url: SITE_URL, jobTitle: locale === "fr" ? "Développeur Python / Backend" : "Python / Backend Developer" });
      expect(person.sameAs).toHaveLength(2);
      expect(person.address).toEqual({ "@type": "PostalAddress", addressLocality: "Anglet", addressRegion: "Nouvelle-Aquitaine", addressCountry: "FR" });
      expect(person).not.toHaveProperty("telephone");
      expect(website).toEqual({ "@context": "https://schema.org", "@type": "WebSite", name: "Quentin Perriere", url: SITE_URL, inLanguage: locale });
    }
  });
});
