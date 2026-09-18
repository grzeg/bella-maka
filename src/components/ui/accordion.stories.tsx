import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";

const meta = {
  component: Accordion,
  tags: ["ai-generated"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion className="max-w-md">
      <AccordionItem value="hours">
        <AccordionTrigger>Godziny otwarcia</AccordionTrigger>
        <AccordionContent>
          Poniedziałek – Czwartek: TODO – TODO
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="delivery">
        <AccordionTrigger>Dostawa</AccordionTrigger>
        <AccordionContent>Darmowa dostawa od 30 zł.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  play: async ({ canvas, userEvent }) => {
    const trigger = canvas.getByRole("button", { name: "Godziny otwarcia" });
    await expect(trigger).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(trigger);

    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await expect(
      canvas.getByText("Poniedziałek – Czwartek: TODO – TODO"),
    ).toBeInTheDocument();
  },
};
