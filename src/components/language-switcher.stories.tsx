import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { usePathname } from "@storybook/nextjs-vite/navigation.mock";
import { expect } from "storybook/test";
import { LanguageSwitcher } from "./language-switcher";

const meta = {
  component: LanguageSwitcher,
  tags: ["ai-generated"],
} satisfies Meta<typeof LanguageSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnPolishMenuPage: Story = {
  args: { locale: "pl", label: "Zmień język" },
  beforeEach: () => {
    usePathname.mockReturnValue("/pl/menu");
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("PL")).toHaveAttribute(
      "aria-current",
      "page",
    );
    await expect(canvas.getByRole("link", { name: "EN" })).toHaveAttribute(
      "href",
      "/en/menu",
    );
  },
};

export const OnEnglishHomePage: Story = {
  args: { locale: "en", label: "Switch language" },
  beforeEach: () => {
    usePathname.mockReturnValue("/en");
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("EN")).toHaveAttribute(
      "aria-current",
      "page",
    );
    await expect(canvas.getByRole("link", { name: "PL" })).toHaveAttribute(
      "href",
      "/pl",
    );
  },
};
