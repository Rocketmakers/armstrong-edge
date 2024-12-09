import { expect } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within, fn } from "@storybook/test";
import * as React from "react";
import { ImPlus } from "react-icons/im";

import { useForm } from "../../form";
import { ArmstrongId } from "../../types";
import { CheckboxList, ICheckboxListProps } from "./checkboxList.component";

export default {
  title: "Components/CheckboxList",
  component: CheckboxList,
} as Meta<typeof CheckboxList>;

interface IFormData {
  value?: ArmstrongId[];
}

/** stories */

const Template: StoryObj<typeof CheckboxList> = {
  args: {
    onChange: fn(),
  },
  render: (args: Partial<ICheckboxListProps<ArmstrongId>>) => {
    const { formProp, formState } = useForm<IFormData>();

    return (
      <>
        <CheckboxList
          label="Checkbox list"
          bind={formProp("value").bind()}
          options={[
            { id: "1", content: "red" },
            { id: "2", content: "blue" },
            { id: "3", content: "pink" },
            { id: "4", content: "brown" },
          ]}
          {...args}
        />
        <br />
        <p>Bound value: {formState?.value?.join(", ")}</p>
      </>
    );
  },
};

export const Default: StoryObj<typeof CheckboxList> = {
  ...Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const result = canvas.getByText("Bound value:");
    const [red, blue, pink, brown] = await canvas.findAllByRole("checkbox");
    userEvent.click(red);
    await waitFor(() => expect(result).toHaveTextContent("Bound value: 1"));
    userEvent.click(blue);
    await waitFor(() => expect(result).toHaveTextContent("Bound value: 1, 2"));
    userEvent.click(pink);
    await waitFor(() =>
      expect(result).toHaveTextContent("Bound value: 1, 2, 3")
    );
    userEvent.click(brown);
    await waitFor(() =>
      expect(result).toHaveTextContent("Bound value: 1, 2, 3, 4")
    );
    userEvent.click(blue);
    await waitFor(() =>
      expect(result).toHaveTextContent("Bound value: 1, 3, 4")
    );
  },
};

export const Disabled: StoryObj<typeof CheckboxList> = {
  ...Template,
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radios = await canvas.findAllByRole("checkbox");
    radios.forEach((r) => expect(r).toHaveAttribute("disabled"));
  },
};

export const ValidationError: StoryObj<typeof CheckboxList> = {
  ...Template,
  args: {
    validationErrorMessages: ["Invalid selection"],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Invalid selection")).toBeVisible();
  },
};

export const CustomIcon: StoryObj<typeof CheckboxList> = {
  ...Template,
  args: {
    customIndicator: <ImPlus />,
    onChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [red, ...rest] = await canvas.findAllByRole("checkbox");
    userEvent.click(red);
    await waitFor(() =>
      expect(red.getElementsByTagName("svg").length).toBeGreaterThan(0)
    );
    rest.forEach((r) => expect(r.getElementsByTagName("svg")).toHaveLength(0));
  },
};

export const Sizes: StoryObj<typeof CheckboxList> = {
  render: () => {
    return (
      <>
        <h2>Large</h2>
        <CheckboxList
          options={[
            { id: "1", content: "red" },
            { id: "2", content: "blue" },
            { id: "3", content: "pink" },
            { id: "4", content: "brown" },
          ]}
          displaySize="large"
          label="Large checkbox list"
          data-testid="checkbox-container"
          required
        />
        <h2>Medium</h2>
        <CheckboxList
          options={[
            { id: "1b", content: "red" },
            { id: "2b", content: "blue" },
            { id: "3b", content: "pink" },
            { id: "4b", content: "brown" },
          ]}
          displaySize="medium"
          label="Medium checkbox list"
          data-testid="checkbox-container"
          required
        />
        <h2>Small</h2>
        <CheckboxList
          options={[
            { id: "1c", content: "red" },
            { id: "2c", content: "blue" },
            { id: "3c", content: "pink" },
            { id: "4c", content: "brown" },
          ]}
          displaySize="small"
          label="Small checkbox list"
          data-testid="checkbox-container"
          required
        />
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [large, medium, small] = await canvas.findAllByTestId(
      "checkbox-container"
    );
    expect(large).toHaveAttribute("data-size", "large");
    expect(medium).toHaveAttribute("data-size", "medium");
    expect(small).toHaveAttribute("data-size", "small");
  },
};
