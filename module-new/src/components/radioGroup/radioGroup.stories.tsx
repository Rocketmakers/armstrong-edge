import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import React from 'react';
import { ImCheckmark } from 'react-icons/im';

import { useForm } from '../../form';
import { RadioGroup } from './radioGroup.component';

/** metadata */

export default {
  title: 'Form/RadioGroup',
  component: RadioGroup,
} as Meta<typeof RadioGroup>;

/** stories */

export const Default: StoryObj<typeof RadioGroup> = {
  render: () => {
    interface IFormData {
      value?: string;
    }

    const data: IFormData = { value: undefined };

    const { formProp, formState } = useForm(data);

    return (
      <>
        <RadioGroup
          bind={formProp('value').bind()}
          options={[
            { id: '1', content: 'red' },
            { id: '2', content: 'blue' },
            { id: '3', content: 'pink' },
            { id: '4', content: 'brown' },
          ]}
        />
        <br />
        <p>Bound value: {formState?.value}</p>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const result = canvas.getByText('Bound value:');
    const [red, blue, pink, brown] = await canvas.findAllByRole('radio');
    userEvent.click(red);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 1'));
    userEvent.click(blue);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 2'));
    userEvent.click(pink);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 3'));
    userEvent.click(brown);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 4'));
  },
};

export const Disabled: StoryObj<typeof RadioGroup> = {
  render: () => {
    interface IFormData {
      value?: string;
    }

    const data: IFormData = { value: undefined };

    const { formProp, formState } = useForm(data);

    return (
      <>
        <RadioGroup
          bind={formProp('value').bind()}
          options={[
            { id: '1', content: 'red' },
            { id: '2', content: 'blue' },
            { id: '3', content: 'pink' },
            { id: '4', content: 'brown' },
          ]}
          label={'Radio group'}
          disabled
        />
        <br />
        <p>Bound value: {formState?.value}</p>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radios = await canvas.findAllByRole('radio');
    radios.forEach(r => expect(r).toHaveAttribute('data-disabled'));
  },
};

export const ValidationError: StoryObj<typeof RadioGroup> = {
  render: () => {
    interface IFormData {
      value?: string;
    }

    const data: IFormData = { value: undefined };

    const { formProp, formState } = useForm(data);

    return (
      <>
        <RadioGroup
          bind={formProp('value').bind()}
          options={[
            { id: '1', content: 'red' },
            { id: '2', content: 'blue' },
            { id: '3', content: 'pink' },
            { id: '4', content: 'brown' },
          ]}
          validationErrorMessages={['Invalid selection']}
          label={'Radio group'}
        />
        <br />
        <p>Bound value: {formState?.value}</p>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Invalid selection')).toBeVisible();
  },
};

export const CustomIcon: StoryObj<typeof RadioGroup> = {
  render: () => {
    interface IFormData {
      value?: string;
    }

    const data: IFormData = { value: '1' };

    const { formProp, formState } = useForm(data);

    return (
      <>
        <RadioGroup
          bind={formProp('value').bind()}
          options={[
            { id: '1', content: 'red' },
            { id: '2', content: 'blue' },
            { id: '3', content: 'pink' },
            { id: '4', content: 'brown' },
          ]}
          customIndicator={<ImCheckmark />}
        />
        <br />
        <p>Bound value: {formState?.value}</p>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioChecked = await canvas.findByRole('radio', { checked: true });
    expect(radioChecked.getElementsByTagName('svg').length).toBeGreaterThan(0);
    const radiosUnchecked = await canvas.findAllByRole('radio', { checked: false });
    radiosUnchecked.forEach(r => expect(r.getElementsByTagName('svg')).toHaveLength(0));
  },
};

export const Sizes: StoryObj<typeof RadioGroup> = {
  render: () => {
    return (
      <>
        <h2>Large</h2>
        <RadioGroup
          options={[
            { id: '1', content: 'red' },
            { id: '2', content: 'blue' },
            { id: '3', content: 'pink' },
            { id: '4', content: 'brown' },
          ]}
          displaySize="large"
          label="Large radio group"
          required
        />
        <h2>Medium</h2>
        <RadioGroup
          options={[
            { id: '1b', content: 'red' },
            { id: '2b', content: 'blue' },
            { id: '3b', content: 'pink' },
            { id: '4b', content: 'brown' },
          ]}
          displaySize="medium"
          label="Medium radio group"
          required
        />
        <h2>Small</h2>
        <RadioGroup
          options={[
            { id: '1c', content: 'red' },
            { id: '2c', content: 'blue' },
            { id: '3c', content: 'pink' },
            { id: '4c', content: 'brown' },
          ]}
          displaySize="small"
          label="Small radio group"
          required
        />
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [large, medium, small] = await canvas.findAllByRole('radiogroup');
    expect(large).toHaveAttribute('data-size', 'large');
    expect(medium).toHaveAttribute('data-size', 'medium');
    expect(small).toHaveAttribute('data-size', 'small');
  },
};
