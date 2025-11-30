// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <section className="bg-qp-bg-soft min-h-screen border-b border-slate-800">
      <Container>
        <div className="py-section-y">
          <Link
            href="/"
            className="text-xs text-slate-300 hover:text-qp-primary"
          >
            ← Retour au portfolio
          </Link>

          <header className="mt-4">
            <p className="text-xs uppercase tracking-[0.2em] text-qp-primary">
              Projet
            </p>
            <h1 className="mt-2 text-3xl font-semibold">{project.title}</h1>
            <p className="mt-1 text-sm text-slate-300">{project.tagLine}</p>
          </header>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-sm text-slate-200">
            {project.shortDescription}
          </p>

          {project.highlights.length > 0 && (
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-slate-100">
                Ce que j&apos;ai fait
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 hover:border-qp-primary hover:text-qp-primary"
              >
                Voir le code sur GitHub
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 hover:border-qp-primary hover:text-qp-primary"
              >
                Voir la démo en ligne
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
