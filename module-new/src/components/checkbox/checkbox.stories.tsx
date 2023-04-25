import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import * as React from 'react';
import { ImRocket } from 'react-icons/im';

import { Checkbox } from './checkbox.component';

export default {
  title: 'Controls/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Here is label',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.getByRole('checkbox');
    await checkbox.click();
    const checked = await checkbox.getAttribute('aria-checked');
    expect(checked).toBe('true');
  },
};

export const Disabled: Story = {
  args: {
    label: 'Checkbox is disabled',
    disabled: true,
    testId: 'arm-checkbox-container',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.getByTestId('arm-checkbox-container');
    const isDisabled = await checkbox.getAttribute('data-disabled');
    expect(isDisabled).toBe('true');
  },
};

export const Vertical: Story = {
  args: {
    label: 'Check',
    direction: 'vertical',
    testId: 'arm-checkbox-container',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkboxContainer = await canvas.getByTestId('arm-checkbox-container');
    const direction = await checkboxContainer.getAttribute('data-direction');
    expect(direction).toBe('vertical');
  },
};

export const CustomIndicator: Story = {
  args: {
    label: 'Check for Custom Indicator',
    testId: 'arm-checkbox-container',
    customIndicator: <ImRocket data-testid={'rocket-indicator'} />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.getByRole('checkbox');
    await checkbox.click();
    const indicator = await canvas.getByTestId('rocket-indicator');
    expect(indicator);
  },
};

export const ValidationError: Story = {
  args: {
    label: 'Option 1',
    validationErrorMessages: ['This field is required'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = await canvas.getAllByText('This field is required');
    expect(label);
  },
};
