import { expect } from "@storybook/jest";
import { expect } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/test";
import * as React from "react";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";

import { useForm } from "../../form";
import { RangeInput } from "./rangeInput.component";

/** metadata */

export default {
  title: "Components/RangeInput",
  component: RangeInput,
} as Meta<typeof RangeInput>;

/** component template */

const Template: StoryObj<typeof RangeInput> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- necessary because of the unknown bind generic
  render: (props: any) => {
    const { formProp, formState } = useForm({ value: 50 });

    return (
      <>
        <RangeInput bind={formProp("value").bind()} {...props} />
        <div style={{ marginTop: "10px" }} data-testid="result">
          Value: {formState?.value}
        </div>
      </>
    );
  },
};

/** stories */

export const Default: StoryObj<typeof RangeInput> = {
  ...Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");
    expect(slider).toHaveAttribute("aria-valuenow", "50");
  },
};

export const CustomMinAndMax: StoryObj<typeof RangeInput> = {
  ...Template,
  args: {
    min: 40,
    max: 60,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");
    expect(slider).toHaveAttribute("aria-valuemin", "40");
    expect(slider).toHaveAttribute("aria-valuemax", "60");
    expect(slider).toHaveAttribute("aria-valuenow", "50");
  },
};

export const CustomStep: StoryObj<typeof RangeInput> = {
  ...Template,
  args: {
    step: 10,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");
    expect(slider).toHaveAttribute("aria-valuenow", "50");
  },
};

export const Labelled: StoryObj<typeof RangeInput> = {
  ...Template,
  args: {
    label: "Label",
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Label");
    expect(label).toBeVisible();
  },
};

export const Sizes: StoryObj<typeof RangeInput> = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <RangeInput label={"Small Input"} displaySize="small" required={true} />
        <RangeInput label={"Medium Input"} required={true} />
        <RangeInput label={"Large Input"} displaySize="large" required={true} />
      </div>
    );
  },
};

export const ValidationError: StoryObj<typeof RangeInput> = {
  ...Template,
  args: {
    validationMode: "both",
    validationErrorMessages: ["Invalid selection"],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const error = canvas.getByText("Invalid selection");
    expect(error).toBeVisible();
  },
};

export const CustomThumb: StoryObj<typeof RangeInput> = {
  ...Template,
  args: { customThumb: <BsFillEmojiSunglassesFill /> },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const slider = canvas.getByRole("slider");
    const elements = slider.getElementsByTagName("svg");
    expect(elements).toHaveLength(1);
  },
};
