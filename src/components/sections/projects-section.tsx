import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects";

export function ProjectsSection() {
  const projects = getAllProjects();

  return (
    <section id="projects" className="border-b border-slate-800 bg-qp-bg">
      <Container>
        <div className="py-12 sm:py-section-y animate-fade-in-up">
          <SectionTitle
            title="Projets phares"
            description="Une sélection de projets qui représentent le mieux ma manière de travailler : du front au backend, jusqu’au déploiement."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.slug}>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-qp-primary">
                  {project.tagLine}
                </p>

                {project.image && (
                  <div className="relative mt-4 h-40 overflow-hidden rounded-lg border border-slate-800 bg-slate-900">
                    <Image
                      src={project.image}
                      alt={`Capture du projet ${project.title}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                )}

                <p className="mt-3 text-sm text-slate-200">{project.shortDescription}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-xs">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-qp-primary hover:underline focus-ring rounded-full px-2 py-1"
                  >
                    Voir le projet →
                  </Link>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full px-2 py-1 text-slate-300 hover:text-qp-primary focus-ring"
                    >
                      Code source
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full px-2 py-1 text-slate-300 hover:text-qp-primary focus-ring"
                    >
                      Démo
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
