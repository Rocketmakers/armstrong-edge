import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { RadioInput } from "./radioInput.component";

/** metadata */

export default {
  title: "Form/Radio Input",
  component: RadioInput,
} as Meta<typeof RadioInput>;

/** stories */

export const Default: StoryObj<typeof RadioInput> = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    return (
      <>
        <RadioInput checked={checked} onChange={setChecked} name="Thing" />
        <br />
        <p>Value: {checked}</p>
      </>
    );
  },
};
