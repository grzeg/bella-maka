import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, waitFor, within } from "storybook/test";
import { MobileNav } from "./mobile-nav";

const meta = {
  component: MobileNav,
  tags: ["ai-generated"],
} satisfies Meta<typeof MobileNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { href: "/pl/menu", label: "Menu" },
      { href: "/pl/galeria", label: "Galeria" },
      { href: "/pl/kontakt", label: "Kontakt" },
    ],
    orderLabel: "Zamów online",
    openLabel: "Otwórz menu",
    siteName: "Bella Mąka",
  },
  play: async ({ canvas, userEvent, canvasElement }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Otwórz menu" }));

    // Sheet content renders into a portal, outside the story's own canvas root,
    // and fades in via a CSS transition — wait for it to finish before asserting.
    const body = within(canvasElement.ownerDocument.body);
    await waitFor(async () => {
      await expect(
        await body.findByRole("link", { name: "Menu" }),
      ).toBeVisible();
      await expect(body.getByRole("link", { name: "Galeria" })).toBeVisible();
    });
  },
};
