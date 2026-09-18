import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import { HeroMedia } from "./hero-media";

const meta = {
  component: HeroMedia,
  tags: ["ai-generated"],
} satisfies Meta<typeof HeroMedia>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "/videos/hero.mp4",
    poster: "/images/hero/poster.jpg",
  },
  play: async ({ canvasElement }) => {
    const video = canvasElement.querySelector("video");
    await expect(video).not.toBeNull();
    await expect(video).toHaveAttribute("src", "/videos/hero.mp4");
    await expect(video).toHaveAttribute("poster", "/images/hero/poster.jpg");
    // No explicit prefers-reduced-motion emulation, so the browser's
    // no-preference default applies and the video autoplays.
    await expect(video).toHaveAttribute("autoplay");
  },
};
