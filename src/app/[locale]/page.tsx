import { redirect } from "next/navigation";

export default function LocaleIndexPage({ params }: { params: { locale: string } }) {
  // Redirect to root index (we use middleware to rewrite /en/* to /, but keep a hard redirect for safety)
  redirect("/");
}
