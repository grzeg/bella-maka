import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import { Badge } from "./badge";

const meta = {
  component: Badge,
  tags: ["ai-generated"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "wege" },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("wege")).toBeVisible();
  },
};

export const Destructive: Story = {
  args: { children: "ostre", variant: "destructive" },
};
export const Outline: Story = {
  args: { children: "outline", variant: "outline" },
};
export const Ghost: Story = { args: { children: "ghost", variant: "ghost" } };
export const Link: Story = { args: { children: "link", variant: "link" } };

// Only CssCheck story in the whole project — proves the shared preview actually
// loaded Tailwind/globals.css: Badge's `secondary` variant uses `bg-secondary`,
// which resolves to --secondary: #e7efe3 (rgb(231, 239, 227)) in :root.
export const CssCheck: Story = {
  args: { children: "wege", variant: "secondary" },
  play: async ({ canvas }) => {
    const badge = canvas.getByText("wege");
    await expect(getComputedStyle(badge).backgroundColor).toBe(
      "rgb(231, 239, 227)",
    );
  },
};
