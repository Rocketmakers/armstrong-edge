import { expect } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/test";
import * as React from "react";

import { Button } from "../button";
import { Expandable } from "./expandable.component";

/** metadata */

export default {
  title: "Components/Expandable",
  component: Expandable,
  parameters: {
    docs: {
      description: {
        component: "An region that can expand/contract with animation",
      },
    },
  },
} as Meta<typeof Expandable>;

/** stories */

export const Default: StoryObj<typeof Expandable> = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(!isOpen)}>Toggle content</Button>
        <Expandable isOpen={isOpen} data-testid="expandable">
          <div
            style={{
              height: "200px",
              backgroundColor: "#dbdbdb",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            Some inner content
          </div>
        </Expandable>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inner = canvas.getByTestId("expandable");
    expect(inner.offsetHeight).toBe(0);
    const button = canvas.getByRole("button");
    userEvent.click(button);
    await waitFor(() => expect(inner.offsetHeight).toBe(200));
    userEvent.click(button);
  },
};
