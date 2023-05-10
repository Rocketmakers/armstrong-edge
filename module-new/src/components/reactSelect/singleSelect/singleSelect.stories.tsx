import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import React from 'react';

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
  title: 'Form/Single Select Input',
  component: SingleSelect,
} as Meta<typeof SingleSelect>;

/** component template */

const Template: StoryObj<typeof SingleSelect> = {
  render: args => {
    return (
      <div
        style={{
          width: '100%',
          height: '20rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <SingleSelect {...args} />
      </div>
    );
  },
};

/** stories */

export const Default: StoryObj<typeof SingleSelect> = {
  ...Template,
  args: {
    options,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvasElement.getElementsByTagName('input')[0];
    userEvent.click(input);

    const blue = await waitFor(() => canvas.getByText('blue'));
    userEvent.click(blue);

    await waitFor(() => {
      const valueElement = canvasElement.getElementsByClassName('arm-single-select__single-value')[0];
      expect(valueElement).toHaveTextContent('blue');
    });
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
        <SingleSelect options={options} isDisabled />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.getElementsByTagName('input')[0];

    expect(input).toBeDisabled();
  },
};

export const Sizes: StoryObj<typeof SingleSelect> = {
  ...Template,
  render: () => {
    return (
      <div>
        <h2>Small</h2>
        <SingleSelect options={options} required label={<>Single select</>} displaySize="small" />
        <h2>Medium</h2>
        <SingleSelect options={options} required label={<>Single select</>} displaySize="medium" />
        <h2>Large</h2>
        <SingleSelect options={options} required label={<>Single select</>} displaySize="large" />
      </div>
    );
  },
};

export const ValidationError: StoryObj<typeof SingleSelect> = {
  ...Template,
  render: () => {
    return (
      <div>
        <h2>Validation mode - both</h2>
        <SingleSelect
          validationMode="both"
          errorMessages={['This field is required']}
          options={options}
          required
          label={<>Single select</>}
        />
        <h2>Validation mode - icon only</h2>
        <SingleSelect
          validationMode="icon"
          errorMessages={['This field is required']}
          options={options}
          required
          label={<>Single select</>}
        />
        <h2>Validation mode - message only</h2>
        <SingleSelect
          validationMode="message"
          errorMessages={['This field is required']}
          options={options}
          required
          label={<>Single select</>}
        />
        <h2>Icon on left</h2>
        <SingleSelect
          validationMode="icon"
          errorMessages={['This field is required']}
          options={options}
          required
          label={<>Single select</>}
        />
      </div>
    );
  },
};
