import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React from 'react';
import { ImCheckmark, ImCross } from 'react-icons/im';

import { useForm } from '../../hooks/form';
import { RadioGroup } from './radioGroup.component';

/** metadata */

export default {
  title: 'Form/Radio Group',
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
    const pink = canvas.getByText('pink').parentElement?.parentElement;
    const red = canvas.getByText('red').parentElement?.parentElement;
    userEvent.click(pink!.getElementsByTagName('input').item(0)!);
    expect(result).toHaveTextContent('Bound value: 3');
    userEvent.click(red!.getElementsByTagName('input').item(0)!);
    expect(result).toHaveTextContent('Bound value: 1');
    userEvent.click(pink!.getElementsByTagName('input').item(0)!);
    expect(result).toHaveTextContent('Bound value: 3');
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
    const radio = await canvas.getByRole('radio');
    expect(radio.getAttribute('data-disabled'));
    userEvent.click(radio);
    expect(radio.getAttribute('aria-checked')).toBe('false');
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
    expect(canvas.getByText('Invalid selection'));
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
          checkedIcon={<ImCheckmark />}
        />
        <br />
        <p>Bound value: {formState?.value}</p>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioChecked = await canvas.getByRole('radio', { checked: true });
    expect(radioChecked.getElementsByTagName('svg').length > 0);
    const radioUnchecked = await canvas.getAllByRole('radio', { checked: false })[0];
    expect(radioUnchecked.getElementsByTagName('svg').length === 0);
  },
};

export const CustomIconUnchecked: StoryObj<typeof RadioGroup> = {
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
          checkedIcon={<ImCheckmark />}
          uncheckedIcon={<ImCross />}
        />
        <br />
        <p>Bound value: {formState?.value}</p>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioUnchecked = await canvas.getAllByRole('radio', { checked: false })[0];
    expect(radioUnchecked.getElementsByTagName('svg').length > 0);
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
};
