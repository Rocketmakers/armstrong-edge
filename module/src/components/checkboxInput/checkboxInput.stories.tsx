import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { action } from '@storybook/addon-actions';
import React from "react";
import { Form } from "../../hooks";
import { CheckboxInput } from "./checkboxInput.component";

/** metadata */

export default {
  title: 'Form/Checkbox Input',
  component: CheckboxInput,
  args: {
    onChange: action('onChange'),
  }
} as Meta<typeof CheckboxInput>;

/** component template */

interface IFormData {
  thing: boolean | null;
}

const Template: StoryObj<typeof CheckboxInput> = {
  render: (args) => {
        const { bind, ...props } = args;
        const formData: IFormData = { thing: false };
        const { formProp } = Form.use(formData);
        
        return <CheckboxInput bind={formProp('thing').bind()} {...props} testId='checkbox' />
    }
};

/** stories */

export const Default: StoryObj<typeof CheckboxInput> = {
  ...Template,
  args: {
    content: 'Check me for cool fun time'
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByTestId('checkbox');
    expect(checkbox).toHaveTextContent(args.content as string);
    expect(checkbox).toHaveAttribute('data-checked', 'false');
    await userEvent.click(within(checkbox).getByRole('checkbox'));
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    expect(checkbox).toHaveAttribute('data-checked', 'true');
  }
};

