import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import React from "react";
import { Form } from "../../hooks";
import { IconUtils } from "../icon/icons.utils";
import { CodeInput } from "./codeInput.component";

/** metadata */

export default {
  title: 'Form/Code Input',
  component: CodeInput,
} as Meta<typeof CodeInput>;

/** template */

const Template: StoryObj<typeof CodeInput> = {
    render: (args) => { 
        interface IFormData {
            code: string | null | undefined;
        };
        const { formProp, formState } = Form.use<IFormData>({ code: '' });
        return <><CodeInput {...args} bind={formProp('code').bind()} /><br /><p>Value: {formState?.code}</p></>
    }
};
/** stories */

export const Default: StoryObj<typeof CodeInput> = {
  ...Template,
  args: {
    parts: [1, 1, 1]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const wrapper = canvas.getByTitle('Code input');
    const value = canvas.getByText('Value:');
    const inputs = within(wrapper).getAllByRole('textbox', { hidden: true });
    expect(inputs.length).toBe(3);
    userEvent.type(inputs[0], '123');
    expect(inputs[0]).toHaveValue('1');
    expect(inputs[1]).toHaveValue('2');
    expect(inputs[2]).toHaveValue('3');
    expect(value).toHaveTextContent('Value: 123');
    userEvent.clear(inputs[0]);
    expect(inputs[0]).toHaveValue('2');
    expect(inputs[1]).toHaveValue('3');
    expect(value).toHaveTextContent('Value: 23');
    userEvent.clear(inputs[0]);
    userEvent.clear(inputs[0]);
    userEvent.type(inputs[0], '4567');
    expect(inputs[0]).toHaveValue('4');
    expect(inputs[1]).toHaveValue('5');
    expect(inputs[2]).toHaveValue('6');
    expect(value).toHaveTextContent('Value: 456');
  }
};

export const DifferentLengths: StoryObj<typeof CodeInput> = {
  ...Template,
  args: {
    parts: [4, 3, 8]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const wrapper = canvas.getByTitle('Code input');
    const value = canvas.getByText('Value:');
    const inputs = within(wrapper).getAllByRole('textbox', { hidden: true });
    expect(inputs.length).toBe(3);
    userEvent.type(inputs[0], 'abcdefghijklmnop');
    expect(inputs[0]).toHaveValue('abcd');
    expect(inputs[1]).toHaveValue('efg');
    expect(inputs[2]).toHaveValue('hijklmno');
    expect(value).toHaveTextContent('Value: abcdefghijklmno');
  }
};

export const WithTextBetween: StoryObj<typeof CodeInput> = {
  ...Template,
  args: {
    parts: [4, '-', 4, '-', 4]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const wrapper = canvas.getByTitle('Code input');
    const value = canvas.getByText('Value:');
    const inputs = within(wrapper).getAllByRole('textbox', { hidden: true });
    expect(inputs.length).toBe(3);
    userEvent.type(inputs[0], 'abcdefghijklmnop');
    expect(inputs[0]).toHaveValue('abcd');
    expect(inputs[1]).toHaveValue('efgh');
    expect(inputs[2]).toHaveValue('ijkl');
    expect(value).toHaveTextContent('Value: abcdefghijkl');
    expect(inputs[0].parentElement?.parentElement?.nextSibling).toHaveTextContent('-');
    expect(inputs[1].parentElement?.parentElement?.nextSibling).toHaveTextContent('-');
  }
};

const icon = IconUtils.getIconDefinition('Icomoon', 'chess-king');
export const WithIcons: StoryObj<typeof CodeInput> = {
  ...Template,
  args: {
    parts: [1, { length: 1, rightIcon: IconUtils.getIconDefinition('Icomoon', 'chrome') }, 1],
    leftIcon: icon,
    rightIcon: icon
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const wrapper = canvas.getByTitle('Code input');
    const value = canvas.getByText('Value:');
    const inputs = within(wrapper).getAllByRole('textbox', { hidden: true });
    expect(inputs.length).toBe(3);
    userEvent.type(inputs[0], 'abc');
    expect(inputs[0]).toHaveValue('a');
    expect(inputs[1]).toHaveValue('b');
    expect(inputs[2]).toHaveValue('c');
    expect(value).toHaveTextContent('Value: abc');
    expect(inputs[1].nextSibling).toHaveAttribute('data-icon-set', 'Icomoon');
    expect(inputs[1].nextSibling).toHaveAttribute('data-i', 'chrome');
    expect(within(wrapper).getByTitle(`${icon.icon} icon on left`)).toHaveAttribute('data-i', icon.icon);
    expect(within(wrapper).getByTitle(`${icon.icon} icon on right`)).toHaveAttribute('data-i', icon.icon);
  }
};