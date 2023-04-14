import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ImRocket } from 'react-icons/im';

import { Checkbox } from './checkbox.component';

/** metadata */

export default {
  title: 'Controls/Checkbox Input',
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
  },
};

export const Disabled: StoryObj<typeof Checkbox> = {
  ...Template,
  args: {
    label: 'Input is disabled',
    disabled: true,
  },
};

export const CustomIndicator: StoryObj<typeof Checkbox> = {
  ...Template,
  args: {
    label: 'Check for Custom Indicator',
    customIndicator: <ImRocket />,
  },
};

export const Vertical: StoryObj<typeof Checkbox> = {
  ...Template,
  args: {
    label: 'Check',
    direction: 'vertical',
  },
};
