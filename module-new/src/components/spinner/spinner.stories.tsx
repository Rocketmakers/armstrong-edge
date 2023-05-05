import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import * as React from 'react';
import { BiMinusCircle } from 'react-icons/bi';

import { Spinner } from './spinner.component';

/** metadata */

export default {
  title: 'Spinners/Spinner',
  component: Spinner,
} as Meta<typeof Spinner>;

/** component template */

const Template: StoryObj<typeof Spinner> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- The type discriminator on Spinner prevents storybook from spreading pure props on here without a cast
  render: (props: any) => <Spinner {...props} />,
};

/** stories */

export const Default: StoryObj<typeof Spinner> = {
  ...Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByRole('status');

    expect(spinner).toBeInTheDocument();
  },
};

export const CustomIcon: StoryObj<typeof Spinner> = {
  ...Template,
  args: {
    icon: <BiMinusCircle />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByRole('status');

    expect(spinner).toBeInTheDocument();
  },
};

export const Labelled: StoryObj<typeof Spinner> = {
  ...Template,
  args: {
    label: 'Loading...',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByRole('status');

    expect(spinner).toBeInTheDocument();

    const label = canvas.getByText(args.label as string);
    expect(label).toBeVisible();
  },
};
