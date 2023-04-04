import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import React from 'react';
import { TextArea } from './textArea.component';

/** metadata */

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    placeholder: 'Enter text here...',
  },
} as Meta<typeof TextArea>;

/** component template */

const Template: StoryObj<typeof TextArea> = {
  render: args => {
    return <TextArea {...args} />;
  },
};

export const Default: StoryObj<typeof TextArea> = {
  ...Template,
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    expect(textArea).toHaveAttribute('placeholder', args.placeholder as string);
  },
};

export const Disabled: StoryObj<typeof TextArea> = {
  ...Template,
  args: {
    disabled: true,
    placeholder: 'Disabled',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    expect(textArea).toBeDisabled();
  },
};
