import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import React from "react";
import { RadioInputList } from "./radioInputList.component";
import { Form } from "../../hooks";

/** metadata */

export default {
  title: "Form/Radio Input List",
  component: RadioInputList,
} as Meta<typeof RadioInputList>;

/** stories */

export const Default: StoryObj<typeof RadioInputList> = {
  render: () => {
    interface IFormData {
      value?: number;
    }

    const data: IFormData = { value: undefined };

    const { formProp, formState } = Form.use(data);

    return (
      <>
        <RadioInputList
          bind={formProp("value").bind()}
          options={[
            { id: 1, content: "red" },
            { id: 2, content: "blue" },
            { id: 3, content: "pink" },
            { id: 4, content: "brown" },
          ]}
        />
        <br />
        <p>Bound value: {formState?.value}</p>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const result = canvas.getByText("Bound value:");
    const pink = canvas.getByText("pink").parentElement?.parentElement;
    const red = canvas.getByText("red").parentElement?.parentElement;
    userEvent.click(pink!.getElementsByTagName("input").item(0)!);
    expect(result).toHaveTextContent("Bound value: 3");
    userEvent.click(red!.getElementsByTagName("input").item(0)!);
    expect(result).toHaveTextContent("Bound value: 1");
    userEvent.click(pink!.getElementsByTagName("input").item(0)!);
    expect(result).toHaveTextContent("Bound value: 3");
  },
};

export const Horizontal: StoryObj<typeof RadioInputList> = {
  render: () => {
    interface IFormData {
      value?: number;
    }

    const data: IFormData = { value: undefined };

    const { formProp, formState } = Form.use(data);

    return (
      <>
        <RadioInputList
          bind={formProp("value").bind()}
          direction="horizontal"
          options={[
            { id: 1, content: "red" },
            { id: 2, content: "blue" },
            { id: 3, content: "pink" },
            { id: 4, content: "brown" },
          ]}
        />
        <br />
        <p>Bound value: {formState?.value}</p>
      </>
    );
  },
};
