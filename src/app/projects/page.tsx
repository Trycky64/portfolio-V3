// src/app/projects/page.tsx
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default function ProjectsListPage() {
  const projects = getAllProjects();

  return (
    <section className="bg-qp-bg border-b border-slate-800">
      <Container>
        <div className="py-section-y">
          <SectionTitle
            title="Tous les projets"
            description="Liste complète des projets présentés sur ce portfolio."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.slug}>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-qp-primary">
                  {project.tagLine}
                </p>
                <p className="mt-3 text-sm text-slate-200">
                  {project.shortDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm text-qp-primary hover:underline"
                  >
                    Voir le détail →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
