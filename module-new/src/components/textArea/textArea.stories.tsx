import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import React from 'react';

import { useForm } from '../../hooks/form/form.hooks';
import { TextArea } from './textArea.component';

/** metadata */

export default {
  title: 'Inputs/Text Area',
  component: TextArea,
  args: {},
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

// Write Test
export const Labelled: StoryObj<typeof TextArea> = {
  ...Template,
  args: {
    placeholder: 'Placeholder content 🚀',
    label: 'Please write below',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    expect(textArea).toHaveAttribute('placeholder', args.placeholder as string);
  },
};

// Write Test
export const Sizes: StoryObj<typeof TextArea> = {
  ...Template,
  args: {
    placeholder: 'Enter text here...',
    label: 'Text Area Label',
  },
  render: args => {
    return (
      <div>
        <h2>Small</h2>
        <TextArea displaySize="small" {...args} />
        <h2>Medium (default)</h2>
        <TextArea {...args} />
        <h2>Large</h2>
        <TextArea displaySize="large" {...args} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {},
};

// Write Story
// Write tests
export const Pending: StoryObj<typeof TextArea> = {
  ...Template,
  args: {
    placeholder: 'Enter text here...',
    label: 'Text Area Label',
    pending: 'true',
  },
  play: async ({ canvasElement }) => {},
};

// Write Story
// Write tests
export const ValidationError: StoryObj<typeof TextArea> = {
  ...Template,
  args: {
    placeholder: 'Enter text here...',
    label: 'Text Area Label',
  },
  render: args => {
    return (
      <div>
        <h2>Validation error</h2>
        <TextArea
          required={true}
          validationMode="message"
          validationErrorMessages={['This field is required']}
          {...args}
        />
      </div>
    );
  },
  play: async ({ canvasElement }) => {},
};

export const Disabled: StoryObj<typeof TextArea> = {
  ...Template,
  args: {
    disabled: true,
    placeholder: 'This text area has been disabled',
    label: 'Text Area Label',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    expect(textArea).toBeDisabled();
  },
};

// Add bind
// Write test
export const Bound: StoryObj<typeof TextArea> = {
  ...Template,
  args: {
    label: 'Label text',
  },
  render: () => {
    const { formProp, formState } = useForm({ text: '', debounce: '' });
    return (
      <div>
        <h2>Bound</h2>
        <TextArea bind={formProp('text').bind()} />
        <p>Value: {formState?.text}</p>
        <h2>Bound - debounced text (200ms)</h2>
        <TextArea bind={formProp('debounce').bind()} delay={200} />
        <p>Value: {formState?.debounce}</p>
      </div>
    );
  },
  play: async ({ canvasElement }) => {},
};
