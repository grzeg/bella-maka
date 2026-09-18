// No live Sanity project exists yet (see src/sanity/README.md) — these fall
// back to placeholders instead of throwing, so `next build`/`/studio` don't
// hard-fail before a real project ID is dropped into .env.local.
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const isSanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
);
