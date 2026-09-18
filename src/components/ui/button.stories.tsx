import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import { Button } from "./button";

const meta = {
  component: Button,
  tags: ["ai-generated"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Zamów online" },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("button", { name: "Zamów online" }),
    ).toBeVisible();
  },
};

export const Secondary: Story = {
  args: { children: "Anuluj", variant: "secondary" },
};
export const Outline: Story = {
  args: { children: "Zobacz menu", variant: "outline" },
};
export const Ghost: Story = { args: { children: "Ghost", variant: "ghost" } };
export const Destructive: Story = {
  args: { children: "Usuń", variant: "destructive" },
};
export const Link: Story = {
  args: { children: "Dowiedz się więcej", variant: "link" },
};

export const AsLink: Story = {
  args: {
    children: "Zamów na pyszne.pl",
    nativeButton: false,
    render: (
      <a
        href="https://www.pyszne.pl/menu/bella-maka"
        target="_blank"
        rel="noopener noreferrer"
      />
    ),
  },
  play: async ({ canvas }) => {
    // ButtonPrimitive renders a role="button" even on an <a> element.
    const link = canvas.getByRole("button", { name: "Zamów na pyszne.pl" });
    await expect(link).toHaveAttribute(
      "href",
      "https://www.pyszne.pl/menu/bella-maka",
    );
  },
};
