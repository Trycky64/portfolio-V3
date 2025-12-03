import ProjectPage from "@/components/projects/project-page";
import { getAllProjects } from "@/lib/projects";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default function DynamicProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectPage slug={params.slug} />;
}
