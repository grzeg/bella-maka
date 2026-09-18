import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { usePathname } from "@storybook/nextjs-vite/navigation.mock";
import { expect } from "storybook/test";
import { Navbar } from "./navbar";

const meta = {
  component: Navbar,
  tags: ["ai-generated"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// The desktop nav links (`hidden md:flex`) and desktop order button
// (`hidden md:block`) are only in the accessibility tree at wider viewports
// than the default test viewport, so assert on chrome that's always visible:
// the brand link and the mobile menu trigger (both locale-driven).
export const Polish: Story = {
  args: { locale: "pl" },
  beforeEach: () => {
    usePathname.mockReturnValue("/pl");
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("link", { name: "Bella Mąka" }),
    ).toHaveAttribute("href", "/pl");
    await expect(
      canvas.getByRole("button", { name: "Otwórz menu" }),
    ).toBeVisible();
  },
};

export const English: Story = {
  args: { locale: "en" },
  beforeEach: () => {
    usePathname.mockReturnValue("/en");
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("link", { name: "Bella Mąka" }),
    ).toHaveAttribute("href", "/en");
    await expect(
      canvas.getByRole("button", { name: "Open menu" }),
    ).toBeVisible();
  },
};
