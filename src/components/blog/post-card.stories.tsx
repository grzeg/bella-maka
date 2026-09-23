import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import type { PostMeta } from "@/lib/blog";
import { PostCard } from "./post-card";

const facebookPost: PostMeta = {
  slug: "nowa-pizza",
  title: "Nowa pizza w karcie!",
  date: "2026-09-01",
  excerpt: "Sos pomidorowy, mozzarella, świeża bazylia. #bellamaka",
  cover: {
    src: "/images/gallery/678236393_122108356682946185_9087006221761922777_n.jpg",
    alt: "Pizza prosto z pieca",
  },
  gallery: [],
  source: "facebook",
  sourceUrl: "https://www.facebook.com/bellamakabrzegdolny",
  lang: "pl",
  format: "text",
};

const meta = {
  component: PostCard,
  tags: ["ai-generated"],
  args: { post: facebookPost, locale: "pl" },
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FacebookPost: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("link", { name: "Nowa pizza w karcie!" }),
    ).toHaveAttribute("href", "/pl/blog/nowa-pizza");
    await expect(canvas.getByText("Z Facebooka")).toBeVisible();
    await expect(canvas.getByText("1 września 2026")).toHaveAttribute(
      "datetime",
      "2026-09-01",
    );
    await expect(canvas.getByAltText("Pizza prosto z pieca")).toBeVisible();
  },
};

export const SitePostWithoutCover: Story = {
  args: {
    post: { ...facebookPost, source: "site", cover: null, format: "mdx" },
  },
  play: async ({ canvas }) => {
    await expect(canvas.queryByText("Z Facebooka")).toBeNull();
    await expect(canvas.queryByRole("img")).toBeNull();
  },
};

export const PolishPostOnEnglishSite: Story = {
  args: { locale: "en" },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("link", { name: "Nowa pizza w karcie!" }),
    ).toHaveAttribute("href", "/en/blog/nowa-pizza");
    await expect(
      canvas.getByText("This post is available in Polish only."),
    ).toBeVisible();
    await expect(canvas.getByRole("heading", { level: 2 })).toHaveAttribute(
      "lang",
      "pl",
    );
  },
};
