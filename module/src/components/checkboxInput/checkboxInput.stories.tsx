import { action } from '@storybook/addon-actions';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import React from 'react';

import { Form } from '../../hooks';
import { IconUtils } from '../icon/icons.utils';
import { CheckboxInput } from './checkboxInput.component';

/** metadata */

export default {
  title: 'Form/Checkbox Input',
  component: CheckboxInput,
} as Meta<typeof CheckboxInput>;

/** component template */

const Template: StoryObj<typeof CheckboxInput> = {
  render: args => {
    const [checked, setChecked] = React.useState<boolean | null | undefined>(false);
    return <CheckboxInput {...args} checked={checked} onValueChange={setChecked} />;
  },
};

/** stories */

export const Default: StoryObj<typeof CheckboxInput> = {
  ...Template,
  args: {
    content: 'Check me for cool fun time',
    onChange: action('onChange'),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', { hidden: true });
    expect(checkbox.nextSibling).toHaveTextContent(args.content as string);
    userEvent.click(checkbox);
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
  },
};

export const Pending: StoryObj<typeof CheckboxInput> = {
  ...Template,
  args: {
    content: 'Include thing',
    pending: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', { hidden: true });
    const label = checkbox.nextSibling as HTMLLabelElement;
    const status = within(label).getByRole('status');
    expect(status).toHaveAttribute('data-pending', 'true');
    expect(within(status).getByTitle('Active spinner icon')).toHaveAttribute('data-icon-set', 'Icomoon');
    expect(within(status).getByTitle('Active spinner icon')).toHaveAttribute('data-i', 'spinner2');
  },
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
    const checkbox = canvas.getByRole('checkbox', { hidden: true });
    const label = checkbox.nextSibling as HTMLLabelElement;
    const unchecked = within(label).getByTitle('Unchecked icon');
    expect(unchecked).toHaveAttribute('data-icon-set', args.uncheckedIcon?.iconSet);
    expect(unchecked).toHaveAttribute('data-i', args.uncheckedIcon?.icon);
    userEvent.click(checkbox);
    const checked = within(label).getByTitle('Checked icon');
    expect(checked).toHaveAttribute('data-icon-set', args.checkedIcon?.iconSet);
    expect(checked).toHaveAttribute('data-i', args.checkedIcon?.icon);
  },
};

const checkedText = 'Wow now it is cool fun time';
const uncheckedText = 'Check me for cool fun time';
export const DynamicLabel: StoryObj<typeof CheckboxInput> = {
  render: args => {
    const [checked, setChecked] = React.useState<boolean | null | undefined>(false);
    return <CheckboxInput {...args} checked={checked} onValueChange={setChecked} />;
  },
  args: {
    content: checked => (checked ? checkedText : uncheckedText),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', { hidden: true });
    const label = checkbox.nextSibling as HTMLLabelElement;
    expect(label).toHaveTextContent(uncheckedText);
    userEvent.click(checkbox);
    expect(label).toHaveTextContent(checkedText);
  },
};

export const BoundToState: StoryObj<typeof CheckboxInput> = {
  render: args => {
    const [checked, setChecked] = React.useState<boolean | null | undefined>(false);
    return (
      <>
        <CheckboxInput {...args} checked={checked} onValueChange={setChecked} />
        <br />
        <p data-testid="result">I am {checked ? 'checked' : 'unchecked'}.</p>
      </>
    );
  },
  args: {
    content: 'Click me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', { hidden: true });
    expect(canvas.getByText('I am unchecked.'));
    userEvent.click(checkbox);
    expect(canvas.getByText('I am checked.'));
  },
};

interface IFormData {
  thing: boolean | null;
}

export const BoundToForm: StoryObj<typeof CheckboxInput> = {
  render: args => {
    const { bind, ...props } = args;
    const formData: IFormData = { thing: false };
    const { formProp, formState } = Form.use(formData);
    return (
      <>
        <CheckboxInput {...props} bind={formProp('thing').bind()} />
        <br />
        <p>I am {formState?.thing ? 'checked' : 'unchecked'}.</p>
      </>
    );
  },
  args: {
    content: 'Click me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', { hidden: true });
    expect(canvas.getByText('I am unchecked.'));
    userEvent.click(checkbox);
    expect(canvas.getByText('I am checked.'));
  },
};
