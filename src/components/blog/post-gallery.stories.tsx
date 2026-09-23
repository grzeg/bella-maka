import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import { PostGallery } from "./post-gallery";

const meta = {
  component: PostGallery,
  tags: ["ai-generated"],
  args: { locale: "pl" },
} satisfies Meta<typeof PostGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

const images = [
  "/images/gallery/678236393_122108356682946185_9087006221761922777_n.jpg",
  "/images/gallery/681172380_122109315758946185_5816188189101238378_n.jpg",
  "/images/gallery/690676977_122110435442946185_315487328596184958_n.jpg",
].map((src, i) => ({ src, alt: `Zdjęcie z galerii ${i + 1}` }));

export const Album: Story = {
  args: { images },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("heading", { name: "Zdjęcia" }),
    ).toBeVisible();
    const links = canvas.getAllByRole("link");
    await expect(links).toHaveLength(3);
    await expect(links[0]).toHaveAttribute("href", images[0].src);
    await expect(links[0]).toHaveAttribute("target", "_blank");
    await expect(canvas.getByAltText("Zdjęcie z galerii 1")).toBeVisible();
  },
};

export const SinglePhoto: Story = {
  args: { images: images.slice(0, 1), locale: "en" },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("heading", { name: "Photos" })).toBeVisible();
  },
};

export const Empty: Story = {
  args: { images: [] },
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector("section")).toBeNull();
  },
};
