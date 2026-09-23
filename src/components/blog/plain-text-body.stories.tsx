import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import { PlainTextBody } from "./plain-text-body";

const meta = {
  component: PlainTextBody,
  tags: ["ai-generated"],
} satisfies Meta<typeof PlainTextBody>;

export default meta;
type Story = StoryObj<typeof meta>;

// Shaped like a real Facebook post: emoji, single line breaks, a bare URL and
// characters ("<3", "{}") that would break MDX.
export const FacebookPost: Story = {
  args: {
    text: [
      "Nowa pizza w karcie 🍕",
      "Sos pomidorowy, mozzarella, świeża bazylia.",
      "",
      "Zamówienia: https://www.pyszne.pl/menu/bella-maka.",
      "Kochamy was <3 {serio}",
      "",
      "#bellamaka #brzegdolny",
    ].join("\n"),
  },
  play: async ({ canvasElement, canvas }) => {
    const paragraphs = canvasElement.querySelectorAll("p");
    await expect(paragraphs).toHaveLength(3);
    await expect(paragraphs[0].querySelectorAll("br")).toHaveLength(1);

    const link = canvas.getByRole("link", {
      name: "https://www.pyszne.pl/menu/bella-maka",
    });
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
    await expect(canvas.getByText(/Kochamy was <3 \{serio\}/)).toBeVisible();
  },
};
