import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import * as React from 'react';

import { useForm } from '../../hooks/form/form.hooks';
import { TextArea } from './textArea.component';

export default {
  title: 'Inputs/TextArea',
  component: TextArea,
  args: {
    type: 'text',
  },
} as Meta<typeof TextArea>;

const Template: StoryObj<typeof TextArea> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- The type discriminator on Input prevents storybook from spreading pure props on here without a cast
  render: (props: any) => <TextArea {...props} />,
};

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  ...Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    expect(textArea).toBeInTheDocument();
  },
};

export const Labelled: Story = {
  ...Template,
  args: {
    placeholder: 'Placeholder content 🚀',
    label: 'Please write below',
    required: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox') as HTMLTextAreaElement;
    const label = canvas.getByRole(args.label) as HTMLLabelElement;

    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveAttribute('placeholder', args.placeholder as string);
    expect(label).toContain(args.label as string);
  },
};

// Write Test
export const Sizes: Story = {
  ...Template,
  args: {
    placeholder: 'Enter text here...',
    testId: 'text-area-wrapper',
  },
  render: args => {
    return (
      <>
        <TextArea label={'Small'} displaySize="small" {...args} />
        <TextArea label={'Medium (default)'} {...args} />
        <TextArea label={'Large'} displaySize="large" {...args} />
      </>
    );
  },
  play: async ({ canvasElement }) => {
    // const smallTextArea = canvas.getByAttribute()
  },
};

// Write Story
// Write tests
export const Pending: Story = {
  ...Template,
  args: {
    placeholder: 'Enter text here...',
    label: 'Text Area Label',
    pending: true,
  },
  play: async ({ canvasElement }) => {},
};

// Write Story
// Write tests
export const ValidationError: Story = {
  ...Template,
  args: {
    placeholder: 'Enter text here...',
    label: 'Text Area Label',
    required: true,
    validationErrorMessages: ['This field is required'],
  },
  play: async ({ canvasElement }) => {},
};

export const Disabled: Story = {
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

// Write test
export const Bound: Story = {
  ...Template,
  args: {
    placeholder: 'Enter text here...',
  },
  render: () => {
    const { formProp, formState } = useForm({ text: '', debounce: '' });
    return (
      <>
        <TextArea label="Bound text area" bind={formProp('text').bind()} />
        <p>Value: {formState?.text}</p>
        <TextArea label="Bound debounce text area (400ms)" bind={formProp('debounce').bind()} delay={400} />
        <p>Value: {formState?.debounce}</p>
      </>
    );
  },
  play: async ({ canvasElement }) => {},
};
