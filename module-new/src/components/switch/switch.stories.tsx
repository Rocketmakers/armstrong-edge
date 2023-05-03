import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import * as React from 'react';

import { useForm } from '../../hooks/form/form.hooks';
import { Switch } from './switch.component';

export default {
  title: 'Controls/Switch',
  component: Switch,
} as Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Airplane mode',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchInput = await canvas.getByRole('switch');
    await switchInput.click();
    const checked = await switchInput.getAttribute('aria-checked');
    expect(checked).toBe('true');
  },
};

export const Disabled: Story = {
  args: {
    label: 'Switch is disabled',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.getByRole('switch');
    expect(checkbox.getAttribute('data-disabled'));
    userEvent.click(checkbox);
    expect(checkbox.getAttribute('aria-checked')).toBe('false');
  },
};

export const ValidationError: Story = {
  args: {
    label: 'Check',
    validationErrorMessages: ['An error has occurred'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const errorContainer = await canvas.getByTestId('switch-validation-errors');
    expect(errorContainer).toHaveTextContent('An error has occurred');
  },
};

export const Bound: Story = {
  args: {
    label: 'Bound label',
  },
  render: () => {
    const { formProp, formState } = useForm({ checked: false });
    return (
      <>
        <Switch bind={formProp('checked').bind()} />
        <p data-testid={'bound-result'}>Bound value is {formState?.checked ? 'checked' : 'not checked'}</p>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchInput = canvas.getByRole('switch');
    const boundResult = canvas.getByTestId('bound-result');
    await userEvent.click(switchInput);
    expect(boundResult).toHaveTextContent('Bound value is checked');
  },
};
