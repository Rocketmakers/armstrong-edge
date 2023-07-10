import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import * as React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { TiStarburst, TiStarburstOutline } from 'react-icons/ti';

import { useForm } from '../../form';
import { NullOrUndefined } from '../../types';
import { Rating } from './rating.component';

/** meta  */

export default {
  title: 'Components/Rating',
  component: Rating,
} as Meta<typeof Rating>;

/** stories */

const Template: StoryObj<typeof Rating> = {
  render: args => {
    const { formProp, formState } = useForm<{ rating: NullOrUndefined<number> }>({ rating: 0 });

    return (
      <div>
        <Rating {...args} bind={formProp('rating').bind()} />
        <div data-testid="result" style={{ marginTop: '20px' }}>
          Bound value: {formState?.rating}
        </div>
      </div>
    );
  },
};

export const Default: StoryObj<typeof Rating> = {
  ...Template,
  play: async ({ canvasElement }) => {
    const radios = within(canvasElement).getAllByRole('radio');
    userEvent.click(radios[2]);
    const result = within(canvasElement).getByTestId('result');
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 3'));
  },
};

export const Half: StoryObj<typeof Rating> = {
  ...Template,
  args: {
    step: 0.5,
  },
  play: async ({ canvasElement }) => {
    const radios = within(canvasElement).getAllByRole('radio');
    userEvent.click(radios[4]);
    const result = within(canvasElement).getByTestId('result');
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 2.5'));
  },
};

export const Disabled: StoryObj<typeof Rating> = {
  ...Template,
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const radios = within(canvasElement).getAllByRole('radio');
    radios.forEach(r => expect(r).toBeDisabled());
  },
};

export const Labelled: StoryObj<typeof Rating> = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <Rating label="Default" />
        <Rating label="Required" required={true} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const defaultInput = canvas.getByLabelText('Default');
    const requiredInput = canvas.getByLabelText('Required *');

    expect(defaultInput).toBeInTheDocument();
    expect(requiredInput).toBeInTheDocument();
  },
};

export const Sizes: StoryObj<typeof Rating> = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Rating label={'Small Rating'} displaySize="small" required={true} />
        <Rating label={'Medium Rating'} required={true} />
        <Rating label={'Large Rating'} displaySize="large" required={true} />
      </div>
    );
  },
};

export const CustomMax: StoryObj<typeof Rating> = {
  ...Template,
  args: {
    maximum: 10,
  },
  play: async ({ canvasElement }) => {
    const radios = within(canvasElement).getAllByRole('radio');
    userEvent.click(radios[8]);
    const result = within(canvasElement).getByTestId('result');
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 9'));
  },
};

export const CustomIcons: StoryObj<typeof Rating> = {
  ...Template,
  args: {
    emptyIcon: <TiStarburstOutline data-testid="empty-custom" />,
    filledIcon: <TiStarburst />,
  },
  play: async ({ canvasElement }) => {
    const customs = within(canvasElement).getAllByTestId('empty-custom');
    expect(customs).toHaveLength(5);
    customs.forEach(c => expect(c).toBeVisible());
  },
};

export const CustomDOM: StoryObj<typeof Rating> = {
  ...Template,
  args: {
    emptyIcon: <div data-testid="empty-custom">X</div>,
    filledIcon: <div>X</div>,
  },
  play: async ({ canvasElement }) => {
    const customs = within(canvasElement).getAllByTestId('empty-custom');
    expect(customs).toHaveLength(5);
    customs.forEach(c => expect(c).toBeVisible());
  },
};

export const CustomDOMFromIndex: StoryObj<typeof Rating> = {
  ...Template,
  args: {
    emptyIcon: index => <div data-testid="empty-custom">{index + 1}</div>,
    filledIcon: index => <div>{index + 1}</div>,
  },
  play: async ({ canvasElement }) => {
    const customs = within(canvasElement).getAllByTestId('empty-custom');
    expect(customs).toHaveLength(5);
    customs.forEach((c, i) => {
      expect(c).toBeVisible();
      expect(c).toHaveTextContent(i + 1);
    });
  },
};

export const WithIconAndStatus: StoryObj<typeof Rating> = {
  ...Template,
  args: {
    leftOverlay: <AiFillEye data-testid="left-icon" />,
    pending: true,
  },
  play: async ({ canvasElement }) => {
    const leftIcon = within(canvasElement).getByTestId('left-icon');
    expect(leftIcon).toBeVisible();
    const spinner = within(canvasElement).getByRole('status', { name: 'Loading...' });
    expect(spinner).toBeVisible();
  },
};

export const WithError: StoryObj<typeof Rating> = {
  ...Template,
  args: {
    validationErrorMessages: ['Invalid rating'],
  },
  play: async ({ canvasElement }) => {
    const leftIcon = within(canvasElement).getByText('Invalid rating');
    expect(leftIcon).toBeVisible();
  },
};

export const Radio: StoryObj<typeof Rating> = {
  ...Template,
  args: { mode: 'radio' },
  play: async ({ canvasElement }) => {
    const radios = within(canvasElement).getAllByRole('radio');
    userEvent.click(radios[2]);
    const result = within(canvasElement).getByTestId('result');
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 3'));
  },
};

export const Range: StoryObj<typeof Rating> = {
  ...Template,
  args: { mode: 'range' },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole('slider');
    expect(input).toBeInTheDocument();
  },
};
