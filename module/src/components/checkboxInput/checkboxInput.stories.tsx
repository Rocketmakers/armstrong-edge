import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { action } from '@storybook/addon-actions';
import React from "react";
import { CheckboxInput } from "./checkboxInput.component";
import { IconUtils } from "../icon/icons.utils";
import { Form } from "../../hooks";

/** metadata */

export default {
  title: 'Form/Checkbox Input',
  component: CheckboxInput,
} as Meta<typeof CheckboxInput>;

/** component template */

const Template: StoryObj<typeof CheckboxInput> = {
  render: (args) => {
        return <CheckboxInput {...args} testId='checkbox' />
    }
};

/** stories */

export const Default: StoryObj<typeof CheckboxInput> = {
  ...Template,
  args: {
    content: 'Check me for cool fun time',
    onValueChange: action('onValueChange'),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByTestId('checkbox');
    expect(checkbox).toHaveTextContent(args.content as string);
    userEvent.click(within(checkbox).getByRole('checkbox'));
    await waitFor(() => expect(args.onValueChange).toHaveBeenCalled());
  }
};

export const Pending: StoryObj<typeof CheckboxInput> = {
  ...Template,
  args: {
    content: 'Include thing',
    pending: true
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByTestId('checkbox');
    expect(within(checkbox).getByTestId('status')).toHaveAttribute('data-pending', 'true');
  }
};

export const CustomIcons: StoryObj<typeof CheckboxInput> = {
  ...Template,
  args: {
    content: 'Use light theme?',
    checkedIcon: IconUtils.getIconDefinition('Icomoon', 'sun'),
    uncheckedIcon: IconUtils.getIconDefinition('Icomoon', 'moon'),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByTestId('checkbox');
    const unchecked = within(checkbox).getByTestId('unchecked-icon');
    expect(unchecked).toHaveAttribute('data-icon-set', args.uncheckedIcon?.iconSet);
    expect(unchecked).toHaveAttribute('data-i', args.uncheckedIcon?.icon);
    userEvent.click(within(checkbox).getByRole('checkbox'));
    const checked = within(checkbox).getByTestId('checked-icon');
    expect(checked).toHaveAttribute('data-icon-set', args.checkedIcon?.iconSet);
    expect(checked).toHaveAttribute('data-i', args.checkedIcon?.icon);
  }
};

const checkedText = 'Wow now it is cool fun time';
const uncheckedText = 'Check me for cool fun time';
export const DynamicLabel: StoryObj<typeof CheckboxInput> = {
  render: (args) => {
      const [checked, setChecked] = React.useState<boolean | null | undefined>(false);
      return <CheckboxInput {...args} checked={checked} onValueChange={setChecked} testId='checkbox' />
  },
  args: {
    content: (checked) => (checked ? checkedText : uncheckedText),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByTestId('checkbox');
    expect(checkbox).toHaveTextContent(uncheckedText);
    userEvent.click(within(checkbox).getByRole('checkbox'));
    expect(checkbox).toHaveTextContent(checkedText);
  }
};

export const BoundToState: StoryObj<typeof CheckboxInput> = {
  render: (args) => {
      const [checked, setChecked] = React.useState<boolean | null | undefined>(false);
      return <><CheckboxInput {...args} checked={checked} onValueChange={setChecked} testId='checkbox' /><br /><p data-testid="result">I am {checked ? 'checked' : 'unchecked'}.</p></>
  },
  args: {
    content: 'Click me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByTestId('checkbox');
    const result = canvas.getByTestId('result');
    expect(result).toHaveTextContent('I am unchecked.');
    userEvent.click(within(checkbox).getByRole('checkbox'));
    expect(result).toHaveTextContent('I am checked.');
  }
};

interface IFormData {
  thing: boolean | null;
}

export const BoundToForm: StoryObj<typeof CheckboxInput> = {
  render: (args) => {
    const { bind, ...props } = args;
    const formData: IFormData = { thing: false };
    const { formProp, formState } = Form.use(formData);
    return <><CheckboxInput {...props} bind={formProp('thing').bind()} testId='checkbox' /><br /><p data-testid="result">I am {formState?.thing ? 'checked' : 'unchecked'}.</p></>
  },
  args: {
    content: 'Click me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByTestId('checkbox');
    const result = canvas.getByTestId('result');
    expect(result).toHaveTextContent('I am unchecked.');
    userEvent.click(within(checkbox).getByRole('checkbox'));
    expect(result).toHaveTextContent('I am checked.');
  }
};