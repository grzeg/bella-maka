# Sanity — project created, not yet wired as content source

This directory (plus `/sanity.config.ts` and `src/app/studio/`) is a working
schema and Studio scaffold, but it is **not wired up as the site's live
content source**. The blog still reads from `content/blog/*.mdx` via
[`src/lib/blog.ts`](../lib/blog.ts).

Project ID `50agqnrt` (dataset `production`) is real, set in `.env.local`
and in `.mcp.json`'s Sanity MCP entry. Still to go live:

1. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in
   Vercel's dashboard too (Production/Preview), not just `.env.local`.
2. Visit `/studio` locally, add the schema (`post`, in
   [`schemaTypes/post.ts`](schemaTypes/post.ts)) — it mirrors the MDX
   frontmatter shape 1:1, so migrating existing posts is a copy job, not a
   rewrite.
3. Swap `src/lib/blog.ts`'s filesystem reads for a `next-sanity` client query
   (`src/sanity/env.ts` already exports `projectId`/`dataset`/`apiVersion`).
