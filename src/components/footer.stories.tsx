import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import { Footer } from "./footer";

const meta = {
  component: Footer,
  tags: ["ai-generated"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Polish: Story = {
  args: { locale: "pl" },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Godziny otwarcia")).toBeVisible();
    await expect(
      canvas.getByRole("link", { name: "Polityka prywatności" }),
    ).toHaveAttribute("href", "/pl/polityka-prywatnosci");
  },
};

export const English: Story = {
  args: { locale: "en" },
};
