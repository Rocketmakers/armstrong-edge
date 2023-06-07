import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import React from 'react';

import { useForm } from '../../../form';
import { SingleSelect } from './singleSelect.component';

const options = [
  {
    label: 'Colours',
    options: [
      { id: 1, content: 'ocean' },
      { id: 2, content: 'blue' },
      { id: 3, content: 'purple' },
      { id: 4, content: 'red' },
      { id: 5, content: 'orange' },
      { id: 6, content: 'yellow' },
      { id: 7, content: 'green' },
      { id: 8, content: 'forest' },
      { id: 9, content: 'slate' },
      { id: 10, content: 'silver' },
    ],
  },
  {
    label: 'Flavours',
    options: [
      { id: 11, content: 'vanilla' },
      { id: 12, content: 'chocolate' },
      { id: 13, content: 'strawberry' },
    ],
  },
];

/** meta  */

export default {
  title: 'Form/SingleSelect',
  component: SingleSelect,
} as Meta<typeof SingleSelect>;

/** component template */

const Template: StoryObj<typeof SingleSelect> = {
  args: { options, placeholder: 'Please select...' },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- The type discriminator on InputWrapper prevents storybook from spreading pure props on here without a cast
  render: (args: any) => {
    const { formProp, formState } = useForm<{ value?: number }>();
    return (
      <div style={{ height: '20rem' }}>
        <SingleSelect bind={formProp('value').bind()} {...args} />
        <div data-testid="result" style={{ marginTop: '10px' }}>
          Current value: {formState?.value}
        </div>
      </div>
    );
  },
};

/** stories */

export const Default: StoryObj<typeof SingleSelect> = {
  ...Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole<HTMLInputElement>('combobox');
    userEvent.click(input);

    const blue = await waitFor(() => canvas.getByText('blue'));
    userEvent.click(blue);

    const result = canvas.getByTestId('result');
    await waitFor(() => expect(result).toHaveTextContent(`Current value: 2`));
  },
};

export const Disabled: StoryObj<typeof SingleSelect> = {
  render: () => {
    return (
      <div
        style={{
          width: '100%',
          height: '20rem',
        }}
      >
        <SingleSelect options={options} disabled />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole<HTMLInputElement>('combobox');
    expect(input).toBeDisabled();
  },
};

export const Sizes: StoryObj<typeof SingleSelect> = {
  ...Template,
  render: args => {
    return (
      <div>
        <h2>Small</h2>
        <SingleSelect options={args.options} required label="Single select" displaySize="small" data-testId="wrapper" />
        <h2>Medium</h2>
        <SingleSelect
          options={args.options}
          required
          label="Single select"
          displaySize="medium"
          data-testId="wrapper"
        />
        <h2>Large</h2>
        <SingleSelect options={args.options} required label="Single select" displaySize="large" data-testId="wrapper" />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [small, medium, large] = canvas.getAllByTestId('wrapper');
    expect(small).toHaveAttribute('data-size', 'small');
    expect(medium).toHaveAttribute('data-size', 'medium');
    expect(large).toHaveAttribute('data-size', 'large');
  },
};

export const ValidationError: StoryObj<typeof SingleSelect> = {
  ...Template,
  render: () => {
    return (
      <div>
        <div data-testid="both">
          <h2>Validation mode - both</h2>
          <SingleSelect validationMode="both" errorMessages={['This field is required']} options={options} required />
        </div>
        <div data-testid="icon">
          <h2>Validation mode - icon only</h2>
          <SingleSelect validationMode="icon" errorMessages={['This field is required']} options={options} required />
        </div>
        <div data-testid="message">
          <h2>Validation mode - message only</h2>
          <SingleSelect
            validationMode="message"
            errorMessages={['This field is required']}
            options={options}
            required
          />
        </div>
        <div data-testid="left-icon">
          <h2>Icon on left</h2>
          <SingleSelect
            validationMode="icon"
            errorMessages={['This field is required']}
            options={options}
            required
            statusPosition="left"
          />
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const both = canvas.getByTestId('both');
    expect(within(both).getByRole('status')).toBeVisible();
    expect(within(both).getByLabelText('Error messages')).toBeVisible();

    const icon = canvas.getByTestId('icon');
    expect(within(icon).getByRole('status')).toBeVisible();

    const message = canvas.getByTestId('message');
    expect(within(message).getByLabelText('Error messages')).toBeVisible();

    const iconLeft = canvas.getByTestId('left-icon');
    const status = within(iconLeft).getByRole('status');
    expect(status).toBeVisible();
    expect(status).toHaveAttribute('data-position', 'left');
  },
};
