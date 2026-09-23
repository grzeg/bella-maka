# Blog posts

One file per post: `content/blog/<slug>.mdx`. The slug (file name) is the URL:
`/pl/blog/<slug>` and `/en/blog/<slug>`. Lowercase letters, digits and
hyphens only. Frontmatter is validated by `parsePost()` in
[`src/lib/blog.ts`](../../src/lib/blog.ts) — an invalid post fails the build
with the file name and the offending field.

Photos go in `public/images/blog/<slug>/` and are referenced as
`/images/blog/<slug>/<file>`.

## Frontmatter

| Field       | Required | Default                              | Notes                                                                 |
| ----------- | -------- | ------------------------------------ | --------------------------------------------------------------------- |
| `date`      | yes      | —                                    | `YYYY-MM-DD`; posts are listed newest first.                          |
| `title`     | no       | first sentence of the body (≤80 ch.) | Facebook posts have no title — set one when the first line is weak.   |
| `excerpt`   | no       | start of the body (≤240 ch.)         | Shown on the list and as the meta description.                        |
| `source`    | no       | `site`                               | `site` or `facebook`; `facebook` shows a “From Facebook” badge.       |
| `sourceUrl` | no       | —                                    | `https` permalink to the original Facebook post.                      |
| `lang`      | no       | `pl`                                 | `pl` or `en`. Posts show on both locales, with a notice when foreign. |
| `format`    | no       | `text` for Facebook, else `mdx`      | `text` = verbatim with line breaks and auto-linked URLs, no MDX.      |
| `cover`     | no       | —                                    | `{ src, alt }` — thumbnail on the list, hero image on the post.       |
| `gallery`   | no       | `[]`                                 | List of `{ src, alt }` — the remaining photos of the post.            |

`alt` is required for every image: describe what the photo shows.

## Example: a Facebook post

```mdx
---
date: "2026-09-01"
source: facebook
sourceUrl: "https://www.facebook.com/bellamakabrzegdolny/posts/..."
cover:
  src: /images/blog/nowa-pizza/01.jpg
  alt: Pizza z bazylią na drewnianej desce
gallery:
  - src: /images/blog/nowa-pizza/02.jpg
    alt: Pizza wyjmowana z pieca
---

Post copy pasted as-is from Facebook, emoji and line breaks included.
```
