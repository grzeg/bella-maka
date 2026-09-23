import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, waitFor } from "storybook/test";
import { HeroMedia } from "./hero-media";

const meta = {
  component: HeroMedia,
  tags: ["ai-generated"],
  decorators: [
    (Story) => (
      <div className="relative h-[540px] overflow-hidden">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HeroMedia>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "/images/hero/loop-main.mp4",
    mobileSrc: "/images/hero/loop-main-mobile.mp4",
    poster: "/images/hero/poster.jpg",
  },
  play: async ({ canvasElement }) => {
    // The poster is a real high-priority <img> so it can be the LCP element.
    const img = canvasElement.querySelector("img");
    await expect(img).not.toBeNull();
    await expect(img).toHaveAttribute("fetchpriority", "high");
    await expect(img).not.toHaveAttribute("loading", "lazy");

    const video = canvasElement.querySelector("video");
    await expect(video).not.toBeNull();
    await expect(video).toHaveAttribute("preload", "none");
    await expect(video).toHaveAttribute("aria-hidden", "true");

    // No explicit prefers-reduced-motion emulation, so the browser's
    // no-preference default applies and the video source is attached once
    // the page is idle.
    await waitFor(() => expect(video).toHaveAttribute("src"), {
      timeout: 5000,
    });
  },
};
