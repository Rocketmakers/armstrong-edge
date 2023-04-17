import { Meta, StoryObj } from '@storybook/react';
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
};

export const CustomIcon: StoryObj<typeof Spinner> = {
  ...Template,
  args: {
    icon: <BiMinusCircle />,
  },
};

export const Labelled: StoryObj<typeof Spinner> = {
  ...Template,
  args: {
    label: 'Loading...',
  },
};
