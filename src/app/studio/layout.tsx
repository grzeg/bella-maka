// /studio is an admin tool, not user-facing content — intentionally outside
// [locale] and not translated (see AGENTS.md i18n section). It's its own
// Next.js "root layout" (see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#defining-multiple-root-layouts)
// since there is no shared src/app/layout.tsx above [locale] and /studio.
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
