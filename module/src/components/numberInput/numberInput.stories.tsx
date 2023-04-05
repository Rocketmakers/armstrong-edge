import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import React from 'react';

import { NumberInput } from './numberInput.component';

/** metadata */

export default {
  title: 'Form/Number Input',
  component: NumberInput,
  args: {
    placeholder: 'Enter number',
  },
} as Meta<typeof NumberInput>;

/** component template */

const Template: StoryObj<typeof NumberInput> = {
  render: args => {
    return <NumberInput {...args} />;
  },
};

export const Default: StoryObj<typeof NumberInput> = {
  ...Template,
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const numberInput = canvas.getByRole('spinbutton');
    expect(numberInput).toHaveAttribute('placeholder', args.placeholder as string);
  },
};

export const Disabled: StoryObj<typeof NumberInput> = {
  ...Template,
  args: {
    disabled: true,
    placeholder: 'Disabled',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const numberInput = canvas.getByRole('spinbutton');
    expect(numberInput).toBeDisabled();
  },
};
