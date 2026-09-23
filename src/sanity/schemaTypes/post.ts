import { defineArrayMember, defineField, defineType } from "sanity";

// Mirrors the frontmatter shape of the interim MDX posts in content/blog/*.mdx
// (see src/lib/blog.ts) so a future migration to live Sanity data is a
// straight field-for-field swap, not a rewrite. Facebook posts have no title
// or excerpt, so both are optional here too and derived from the body.

const imageWithAlt = {
  type: "image" as const,
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "Alt text",
      type: "string",
      description: "Describe the photo (required for accessibility).",
      validation: (rule) => rule.required(),
    }),
  ],
};

export const post = defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Optional — defaults to the first sentence of the body.",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Optional — defaults to the start of the body.",
      validation: (rule) => rule.max(240),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "lang",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "Polski", value: "pl" },
          { title: "English", value: "en" },
        ],
        layout: "radio",
      },
      initialValue: "pl",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      options: {
        list: [
          { title: "Site", value: "site" },
          { title: "Facebook", value: "facebook" },
        ],
        layout: "radio",
      },
      initialValue: "site",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sourceUrl",
      title: "Original post URL",
      type: "url",
      description: "Facebook permalink, shown as a link under the post.",
      hidden: ({ document }) => document?.source !== "facebook",
      validation: (rule) => rule.uri({ scheme: ["https"] }),
    }),
    defineField({
      name: "cover",
      title: "Cover image",
      ...imageWithAlt,
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [defineArrayMember(imageWithAlt)],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "excerpt", media: "cover" },
  },
});
