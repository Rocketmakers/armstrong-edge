import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { IcomoonIcon } from '../icon';
import { CheckboxInput } from './checkboxInput.component';

/** metadata */

export default {
  title: 'Controls/Checkbox Input',
  component: CheckboxInput,
} as Meta<typeof CheckboxInput>;

/** component template */

const Template: StoryObj<typeof CheckboxInput> = {
  render: args => {
    return <CheckboxInput {...args} />;
  },
};

/** stories */

export const Default: StoryObj<typeof CheckboxInput> = {
  ...Template,
  args: {
    label: 'Here is label',
  },
};

export const Disabled: StoryObj<typeof CheckboxInput> = {
  ...Template,
  args: {
    label: 'Input is disabled',
    disabled: true,
  },
};

export const CustomIndicator: StoryObj<typeof CheckboxInput> = {
  ...Template,
  args: {
    label: 'Check for Custom Indicator',
    customIndicator: <IcomoonIcon icon={'planet'} />,
  },
};

export const Vertical: StoryObj<typeof CheckboxInput> = {
  ...Template,
  args: {
    label: 'Check',
    direction: 'vertical',
  },
};
