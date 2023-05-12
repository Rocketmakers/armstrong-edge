import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { ProgressBar } from './progressBar.component';

/** metadata */

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  args: { progress: 70 },
} as Meta<typeof ProgressBar>;

/** component template */

const Template: StoryObj<typeof ProgressBar> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- The type discriminator on ProgressBar prevents storybook from spreading pure props on here without a cast
  render: (props: any) => <ProgressBar {...props} />,
};

/** stories */

export const Default: StoryObj<typeof ProgressBar> = {
  ...Template,
};

export const WithMaxValue: StoryObj<typeof ProgressBar> = {
  ...Template,
  args: {
    ...Template.args,
    max: 200,
  },
};

export const WithLabelValue: StoryObj<typeof ProgressBar> = {
  ...Template,
  args: {
    ...Template.args,
    label: '70%',
  },
};
