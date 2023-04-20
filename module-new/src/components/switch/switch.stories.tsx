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
  args: {},
  //   play: async ({ canvasElement }) => {
  //     const canvas = within(canvasElement);
  //     const checkbox = await canvas.getByRole('checkbox');
  //     await checkbox.click();
  //     const checked = await checkbox.getAttribute('aria-checked');
  //     expect(checked).toBe('true');
  //   },
};
