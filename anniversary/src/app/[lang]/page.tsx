import PageContent from "../content";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang = raw === "en" ? "en" : "fr";
  return <PageContent lang={lang} />;
}
