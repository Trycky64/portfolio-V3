import ProjectPage from "@/components/projects/project-page";
import { getAllProjects } from "@/lib/projects";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export default async function DynamicProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;

  return <ProjectPage slug={slug} />;
}
