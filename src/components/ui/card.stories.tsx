import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";
import { Badge } from "./badge";

const meta = {
  component: Card,
  tags: ["ai-generated"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuItem: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Margherita</CardTitle>
        <CardDescription>Sos pomidorowy, mozzarella, bazylia</CardDescription>
        <Badge variant="secondary">wege</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">28 cm</p>
      </CardContent>
      <CardFooter>
        <span className="font-semibold">28 zł</span>
      </CardFooter>
    </Card>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Margherita")).toBeVisible();
    await expect(canvas.getByText("28 zł")).toBeVisible();
  },
};

export const Small: Story = {
  render: () => (
    <Card size="sm" className="max-w-sm">
      <CardHeader>
        <CardTitle>Capricciosa</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">Szynka, pieczarki, ser</p>
      </CardContent>
    </Card>
  ),
};
