import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import * as React from 'react';

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
    testId: 'switch-container',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.getByTestId('switch-container');
    const isDisabled = await checkbox.getAttribute('data-disabled');
    expect(isDisabled).toBe('true');
  },
};

export const Vertical: Story = {
  args: {
    label: 'Vertical switch box',
    direction: 'vertical',
    testId: 'switch-container',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkboxContainer = await canvas.getByTestId('switch-container');
    const direction = await checkboxContainer.getAttribute('data-direction');
    expect(direction).toBe('vertical');
  },
};

export const ValidationError: Story = {
  args: {
    label: 'Check',
  },
  render: () => {
    return <Switch label={'Option 1'} validationErrorMessages={['An error has occurred']} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const errorContainer = await canvas.getByTestId('switch-validation-errors');
    expect(errorContainer).toHaveTextContent('An error has occurred');
  },
};
