import { expect } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within, fn } from '@storybook/test';
import React from 'react';

import { useForm } from '../../form';
import { NullOrUndefined } from '../../types';
import { CodeInput } from './codeInput.component';

/** metadata */

export default {
  title: 'Components/Code Input',
  component: CodeInput,
} as Meta<typeof CodeInput>;

/** template */

const Template: StoryObj<typeof CodeInput> = {
  render: args => {
    interface IFormData {
      code: NullOrUndefined<string>;
    }
    const { formProp, formState } = useForm<IFormData>({ code: '' });
    return (
      <>
        <CodeInput {...args} bind={formProp('code').bind()} />
        <br />
        <p>Value: {formState?.code}</p>
      </>
    );
  },
};
/** stories */

export const Default: StoryObj<typeof CodeInput> = {
  ...Template,
  args: {
    parts: [1, 1, 1],
    onChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const wrapper = canvas.getByTitle('Code input');
    const value = canvas.getByText('Value:');
    const inputs = within(wrapper).getAllByRole('textbox', { hidden: true });
    expect(inputs.length).toBe(3);
    await userEvent.type(inputs[0], '123');
    await userEvent.tab();
    expect(inputs[0]).toHaveValue('1');
    expect(inputs[1]).toHaveValue('2');
    expect(inputs[2]).toHaveValue('3');

    await waitFor(() => expect(value).toHaveTextContent('Value: 123'));
    await userEvent.clear(inputs[0]);
    await userEvent.tab();
    expect(inputs[0]).toHaveValue('2');
    expect(inputs[1]).toHaveValue('3');
    await waitFor(() => expect(value).toHaveTextContent('Value: 23'));
    await userEvent.clear(inputs[0]);
    await userEvent.clear(inputs[0]);
    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], '4567');
    await userEvent.tab();
    expect(inputs[0]).toHaveValue('4');
    expect(inputs[1]).toHaveValue('5');
    expect(inputs[2]).toHaveValue('6');
    await waitFor(() => expect(value).toHaveTextContent('Value: 456'));
  },
};

export const Sizes: StoryObj<typeof CodeInput> = {
  render: args => {
    interface IFormData {
      code: string | null | undefined;
    }
    const { formProp, formState } = useForm<IFormData>({ code: '' });
    return (
      <>
        <h2>Small</h2>
        <CodeInput {...args} bind={formProp('code').bind()} displaySize="small" />
        <h2>Medium</h2>
        <CodeInput {...args} bind={formProp('code').bind()} displaySize="medium" />
        <h2>Large</h2>
        <CodeInput {...args} bind={formProp('code').bind()} displaySize="large" />
        <br />
        <p>Value: {formState?.code}</p>
      </>
    );
  },
  args: {
    parts: [1, 1, 1, 1],
  },
};

export const ValidationError: StoryObj<typeof CodeInput> = {
  ...Template,
  args: {
    parts: [2, '-', 2, '-', 2],
    validationErrorMessages: ['Input is invalid'],
    label: 'Code input',
    required: true,
    onChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const label = canvas.getByText('Input is invalid');
    expect(label).toBeVisible();
  },
};

export const DifferentLengths: StoryObj<typeof CodeInput> = {
  ...Template,
  args: {
    parts: [4, 3, 8],
    onChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const wrapper = canvas.getByTitle('Code input');
    const value = canvas.getByText('Value:');
    const inputs = within(wrapper).getAllByRole('textbox', { hidden: true });
    expect(inputs.length).toBe(3);
    await userEvent.type(inputs[0], 'abcdefghijklmnop');
    expect(inputs[0]).toHaveValue('abcd');
    expect(inputs[1]).toHaveValue('efg');
    expect(inputs[2]).toHaveValue('hijklmno');
    await waitFor(() => expect(value).toHaveTextContent('Value: abcdefghijklmno'));
  },
};

export const WithTextBetween: StoryObj<typeof CodeInput> = {
  ...Template,
  args: {
    parts: [4, '-', 4, '-', 4],
    onChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const wrapper = canvas.getByTitle('Code input');
    const value = canvas.getByText('Value:');
    const inputs = within(wrapper).getAllByRole('textbox', { hidden: true });
    expect(inputs.length).toBe(3);
    await userEvent.type(inputs[0], 'abcdefghijklmnop');
    expect(inputs[0]).toHaveValue('abcd');
    expect(inputs[1]).toHaveValue('efgh');
    expect(inputs[2]).toHaveValue('ijkl');
    await waitFor(() => expect(value).toHaveTextContent('Value: abcdefghijkl'));
    expect(inputs[0].parentElement?.parentElement?.nextSibling).toHaveTextContent('-');
    expect(inputs[1].parentElement?.parentElement?.nextSibling).toHaveTextContent('-');
  },
};

export const WithOverlays: StoryObj<typeof CodeInput> = {
  ...Template,
  args: {
    onChange: fn(),
    parts: [
      1,
      {
        length: 1,
        rightOverlay: '+',
        leftOverlay: '+',
      },
      1,
    ],
    rightOverlay: '+',
    leftOverlay: '+',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const wrapper = canvas.getByTitle('Code input');
    const value = canvas.getByText('Value:');
    const inputs = within(wrapper).getAllByRole('textbox', { hidden: true });
    expect(inputs.length).toBe(3);
    await userEvent.type(inputs[0], 'abc');
    expect(inputs[0]).toHaveValue('a');
    expect(inputs[1]).toHaveValue('b');
    expect(inputs[2]).toHaveValue('c');
    await waitFor(() => expect(value).toHaveTextContent('Value: abc'));
    expect(inputs[1].nextSibling).toHaveTextContent('+');
  },
};
