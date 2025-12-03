import { redirect } from "next/navigation";

export default function LocaleProjectPage({ params }: { params: { slug: string } }) {
  // Redirect to canonical non-locale project route
  redirect(`/projects/${params.slug}`);
}
