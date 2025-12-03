import ProjectPage from "@/components/projects/project-page";

export default function LocaleProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectPage slug={params.slug} />;
}
