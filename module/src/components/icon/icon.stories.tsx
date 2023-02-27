import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import * as React from 'react';

import { IcomoonIcon, Icon, LinearIcon } from './icon.component';

/** metadata */

export default {
  title: 'Display/Icon',
} as Meta;

/** stories */

export const Default: StoryObj<typeof Icon> = {
  render: args => {
    return <Icon {...args} style={{ height: '40px' }} title="Icon" />;
  },
  args: {
    iconSet: 'Icomoon',
    icon: 'heart',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTitle('Icon')).toHaveAttribute('data-icon-set', args.iconSet);
    await expect(canvas.getByTitle('Icon')).toHaveAttribute('data-i', args.icon);
  },
};

export const IcomoonOnly: StoryObj<typeof IcomoonIcon> = {
  render: args => {
    return <IcomoonIcon {...args} style={{ height: '40px' }} title="Icon" />;
  },
  args: {
    icon: 'heart',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTitle('Icon')).toHaveAttribute('data-icon-set', 'Icomoon');
    await expect(canvas.getByTitle('Icon')).toHaveAttribute('data-i', args.icon);
  },
};

export const LinearIconOnly: StoryObj<typeof LinearIcon> = {
  render: args => {
    return <LinearIcon {...args} style={{ height: '40px' }} title="Icon" />;
  },
  args: {
    icon: 'heart',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTitle('Icon')).toHaveAttribute('data-icon-set', 'LinearIcons');
    await expect(canvas.getByTitle('Icon')).toHaveAttribute('data-i', args.icon);
  },
};
