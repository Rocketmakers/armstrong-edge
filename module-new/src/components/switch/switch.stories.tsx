import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import * as React from 'react';

import { useForm } from '../../form';
import { Switch } from './switch.component';

/** A toggle-able switch component with validation */

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
    const switchInput = canvas.getByRole('switch');
    userEvent.click(switchInput);
    await waitFor(() => expect(switchInput.getAttribute('aria-checked')).toBe('true'));
  },
};

export const Disabled: Story = {
  args: {
    label: 'Switch is disabled',
    disabled: true,
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('switch');
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
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const errorContainer = canvas.getByText('An error has occurred');
    expect(errorContainer).toBeVisible();
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
    userEvent.click(switchInput);
    await waitFor(() => expect(canvas.getByTestId('bound-result')).toHaveTextContent('Bound value is checked'));
  },
};
