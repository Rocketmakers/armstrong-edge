import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { SwitchInput } from "./switchInput.component";
import { fireEvent, userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { IconUtils } from "../icon";

/** metadata */

export default {
  title: "Form/Switch Input",
  component: SwitchInput,
} as Meta<typeof SwitchInput>;

/** Template */

const Template: StoryObj<typeof SwitchInput> = {
  render: (args) => {
    const [checked, setChecked] = React.useState<boolean | null | undefined>(
      false
    );

    return (
      <>
        <SwitchInput {...args} checked={checked} onChange={setChecked} 
          checkedIcon={IconUtils.getIconDefinition("Icomoon", "circle2")} 
          uncheckedIcon={IconUtils.getIconDefinition("Icomoon", "circle2")} 
          iconStyle='static'
          testId="switch-input-test-id"
        />
      </>
    );
  },
};

/** stories */

export const Default: StoryObj<typeof SwitchInput> = {
  ...Template,
  args: {
    checked: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputWrapper = canvas.getByTestId("switch-input-test-id");
    expect(inputWrapper).toHaveAttribute("data-checked", "false")
    const checkbox = within(inputWrapper).getByRole("checkbox", { hidden: true });
    userEvent.click(checkbox);
    fireEvent.mouseMove(checkbox, { clientX: 100, clientY: 0 });
    await waitFor(() => expect(inputWrapper).toHaveAttribute("data-checked", "true"));
  },
};

export const Click: StoryObj<typeof SwitchInput> = {
  ...Template,
  args: {
    checked: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputWrapper = canvas.getByTestId("switch-input-test-id");
    expect(inputWrapper).toHaveAttribute("data-checked", "false")
    const checkbox = within(inputWrapper).getByRole("checkbox", { hidden: true });
    userEvent.click(checkbox);
    fireEvent.mouseDown(checkbox);
    fireEvent.mouseUp(checkbox);
    await waitFor(() => expect(inputWrapper).toHaveAttribute("data-checked", "true"));
  },
};