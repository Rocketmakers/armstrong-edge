import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import * as React from "react";
import { Button } from "../button";

import { AutoResizer } from "./autoResizer.component";

/** metadata */

export default {
  title: "Layout/Auto Resizer",
  component: AutoResizer,
} as Meta<typeof AutoResizer>;

/** stories */

export const Default: StoryObj<typeof AutoResizer> = {
  render: () => {
    const [bigger, setBigger] = React.useState(false);
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);

    const changeHandler = ({ width, height }) => {
      setWidth(width);
      setHeight(height);
    };

    return (
      <>
        <AutoResizer onSizeChange={changeHandler}>
          <div
            style={{
              width: bigger ? "200px" : "170px",
              height: bigger ? "150px" : "70px",
              border: "1px solid black",
              padding: "5px",
              boxSizing: "border-box",
            }}
          >
            <Button onClick={() => setBigger(!bigger)}>Change Size</Button>
          </div>
        </AutoResizer>
        <br />
        <p>Height: {height}</p>
        <p>Width: {width}</p>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await waitFor(() =>
      expect(canvas.getByText(/Width:/i)).toHaveTextContent("Width: 170")
    );
    await waitFor(() =>
      expect(canvas.getByText(/Height:/i)).toHaveTextContent("Height: 70")
    );
    await userEvent.click(button);
    await waitFor(() =>
      expect(canvas.getByText(/Width:/i)).toHaveTextContent("Width: 200")
    );
    await waitFor(() =>
      expect(canvas.getByText(/Height:/i)).toHaveTextContent("Height: 150")
    );
  },
};
