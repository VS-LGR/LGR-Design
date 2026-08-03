import { redirect } from "next/navigation";

type Params = { slug: string };

export default function LegacyCaseRedirect({ params }: { params: Params }) {
  redirect(`/projetos/${params.slug}`);
}
