import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: "O nas",
    description: `Historia pizzerii ${site.name} w ${site.cityLocative}.`,
  };
}

export default async function ONasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-foreground text-3xl font-bold sm:text-4xl">
        {dict.about.title}
      </h1>
      <div className="prose-content text-muted-foreground mt-6 space-y-4 text-base leading-relaxed">
        <p>{dict.about.body}</p>
      </div>
    </section>
  );
}
