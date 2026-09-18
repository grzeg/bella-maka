import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, waitFor, within } from "storybook/test";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./sheet";
import { Button } from "./button";

const meta = {
  component: Sheet,
  tags: ["ai-generated"],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button>Otwórz menu</Button>} />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Bella Mąka</SheetTitle>
          <SheetDescription>Nawigacja</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
  play: async ({ canvas, userEvent, canvasElement }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Otwórz menu" }));

    // Sheet content renders into a portal, outside the story's own canvas root,
    // and fades in via a CSS transition — wait for it to finish before asserting.
    const body = within(canvasElement.ownerDocument.body);
    await waitFor(async () => {
      await expect(await body.findByText("Bella Mąka")).toBeVisible();
    });
  },
};
