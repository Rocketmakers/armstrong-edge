import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import * as React from 'react';

import { InputWrapper } from './inputWrapper.component';

/** metadata */

export default {
  title: 'Components/InputWrapper',
  component: InputWrapper,
} as Meta<typeof InputWrapper>;

/** component template */

const Template: StoryObj<typeof InputWrapper> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- The type discriminator on InputWrapper prevents storybook from spreading pure props on here without a cast
  render: (props: any) => (
    <InputWrapper {...props}>
      <input type="text" />
    </InputWrapper>
  ),
};

/** stories */

export const Default: StoryObj<typeof InputWrapper> = {
  ...Template,
  args: {
    label: 'First Name',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // test input
    const input = canvas.getByRole('textbox') as HTMLInputElement;
    const testInputText = 'test input text';
    userEvent.type(input, testInputText);
    expect(input.value).toEqual(testInputText);

    // test input wrapper label

    expect(canvas.getByText(args.label as string));
  },
};

export const Required: StoryObj<typeof InputWrapper> = {
  ...Template,
  args: {
    label: 'First Name',
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText('*'));
  },
};

export const Disabled: StoryObj<typeof InputWrapper> = {
  ...Template,
  args: {
    label: 'First Name',
    disabled: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const label = await canvas.findByText(args.label as string);

    expect(label.parentElement).toHaveAttribute('data-disabled', 'true');
  },
};

export const WithOverlays: StoryObj<typeof InputWrapper> = {
  ...Template,
  args: {
    label: 'First Name',
    leftOverlay: 'Left',
    rightOverlay: 'Right',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText(args.leftOverlay as string));
    expect(canvas.getByText(args.rightOverlay as string));
  },
};

export const ValidationError: StoryObj<typeof InputWrapper> = {
  ...Template,
  args: {
    validationMode: 'both',
    validationErrorMessages: ['This field is required'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText('This field is required'));
  },
};
