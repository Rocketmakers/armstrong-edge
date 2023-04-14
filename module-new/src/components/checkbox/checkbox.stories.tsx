import { action } from '@storybook/addon-actions';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import React from 'react';
import { ImRocket } from 'react-icons/im';

import { Checkbox } from './checkbox.component';

/** metadata */

export default {
  title: 'Controls/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

/** component template */

const Template: StoryObj<typeof Checkbox> = {
  render: args => {
    return <Checkbox {...args} />;
  },
};

/** stories */

export const Default: StoryObj<typeof Checkbox> = {
  ...Template,
  args: {
    label: 'Here is label',
    onClick: action('onClick'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.getByRole('checkbox');
    await checkbox.click();
    const checked = await checkbox.getAttribute('aria-checked');
    expect(checked).toBe('true');
  },
};

export const Disabled: StoryObj<typeof Checkbox> = {
  ...Template,
  args: {
    label: 'Checkbox is disabled',
    disabled: true,
    testId: 'checkbox-container',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.getByTestId('checkbox-container');
    const isDisabled = await checkbox.getAttribute('data-disabled');
    expect(isDisabled).toBe('true');
  },
};

export const Vertical: StoryObj<typeof Checkbox> = {
  ...Template,
  args: {
    label: 'Check',
    direction: 'vertical',
    testId: 'checkbox-container',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkboxContainer = await canvas.getByTestId('checkbox-container');
    const direction = await checkboxContainer.getAttribute('data-direction');
    expect(direction).toBe('vertical');
  },
};

export const CustomIndicator: StoryObj<typeof Checkbox> = {
  ...Template,
  args: {
    label: 'Check for Custom Indicator',
    customIndicator: <ImRocket />,
  },
};
