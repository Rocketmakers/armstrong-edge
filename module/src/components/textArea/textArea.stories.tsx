import { expect } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import * as React from 'react';

import { useForm } from '../../form';
import { TextArea } from './textArea.component';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  args: {
    type: 'text',
  },
} as Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    expect(textArea).toBeInTheDocument();
  },
};

export const Labelled: Story = {
  args: {
    placeholder: 'Placeholder content 🚀',
    label: 'Please write below',
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox') as HTMLTextAreaElement;
    const label = canvas.getByLabelText('Please write below *');

    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveAttribute('placeholder', 'Placeholder content 🚀');
    expect(label).toBeInTheDocument();
  },
};

export const Sizes: Story = {
  args: {
    placeholder: 'Enter text here...',
  },
  render: args => {
    return (
      <>
        <TextArea testId={'small'} label={'Small'} displaySize="small" {...args} />
        <TextArea testId={'medium'} label={'Medium (default)'} {...args} />
        <TextArea testId={'large'} label={'Large'} displaySize="large" {...args} />
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const smallTextArea = canvas.getByTestId('small');
    const mediumTextArea = canvas.getByTestId('medium');
    const largeTextArea = canvas.getByTestId('large');

    expect(smallTextArea.getAttribute('data-size')).toEqual('small');
    expect(mediumTextArea.getAttribute('data-size')).toEqual('medium');
    expect(largeTextArea.getAttribute('data-size')).toEqual('large');
  },
};

export const Pending: Story = {
  args: {
    placeholder: 'Enter text here...',
    label: 'Text Area Label',
    pending: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByRole('status', { name: 'Loading...' });

    expect(spinner).toBeInTheDocument();
  },
};

export const ValidationError: Story = {
  args: {
    placeholder: 'Enter text here...',
    label: 'Text Area Label',
    required: true,
    validationErrorMessages: ['This field is required'],
    testId: 'text-area-wrapper',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textAreaWrapper = canvas.getByTestId('text-area-wrapper');

    expect(textAreaWrapper.getAttribute('data-error')).toBe('true');
  },
};

export const Disabled: Story = {
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

export const Bound: Story = {
  args: {
    placeholder: 'Enter text here...',
  },
  render: () => {
    const { formProp, formState } = useForm({ text: '', debounce: '' });
    return (
      <>
        <TextArea testId={'bound-text-area'} label="Bound text area" bind={formProp('text').bind()} />
        <p data-testid={'bound-result'}>Value: {formState?.text}</p>
        <TextArea label="Bound debounce text area (400ms)" bind={formProp('debounce').bind()} delay={400} />
        <p data-testid={'debounce-result'}>Value: {formState?.debounce}</p>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Get the text areas
    const boundTextArea = canvas.getByLabelText('Bound text area');
    const debounceTextArea = canvas.getByLabelText('Bound debounce text area (400ms)');
    const boundResult = canvas.getByTestId('bound-result');
    const debounceResult = canvas.getByTestId('debounce-result');
    // Test Bound Text Area
    await userEvent.type(boundTextArea, 'Hello, bound world');
    await userEvent.type(debounceTextArea, 'Hello, bound world (but slower)');

    // Check that the form state values match the typed input
    expect(boundResult.textContent).toBe('Value: Hello, bound world');
    setTimeout(() => {
      expect(debounceResult.textContent).toBe('Value: Hello, bound world (but slower)');
    }, 500);
  },
};
