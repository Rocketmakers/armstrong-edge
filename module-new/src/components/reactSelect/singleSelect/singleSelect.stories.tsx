import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React from 'react';

import { IArmstrongReactSelectOption } from '../../../types';
import { SingleSelect } from './singleSelect.component';

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
    options: [
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
    ],
  },
  // play: async ({ args, canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   const option = canvas.getAllByRole('option');
  //   const select = option[0].parentElement; // Finding select by finding parent of the first option

  //   expect(option[0]).toHaveTextContent((args.options[0] as IArmstrongReactSelectOption<any>).content);

  //   userEvent.click(select!); // Opens the dropdown menu
  //   userEvent.click(select!.children[1]); // Select the second option
  //   expect(option[1]).toHaveTextContent((args.options[1] as IArmstrongReactSelectOption<any>).content); // Check if the selected value is correct
  // },
};

export const Creatable: StoryObj<typeof SingleSelect> = {
  render: () => {
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

    return (
      <div
        style={{
          width: '100%',
          height: '20rem',
        }}
      >
        <SingleSelect options={options} allowCreate />
      </div>
    );
  },
};

export const Sizes: StoryObj<typeof SingleSelect> = {
  render: () => {
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

    return (
      <div
        style={{
          width: '100%',
          height: '20rem',
        }}
      >
        <h2>Small</h2>
        <SingleSelect options={options} displaySize="small" required label={<>Small select</>} />
        <h2>Medium</h2>
        <SingleSelect options={options} displaySize="medium" required label={<>Medium select</>} />
        <h2>Large</h2>
        <SingleSelect options={options} displaySize="large" required label={<>Large select</>} />
      </div>
    );
  },
};

export const Disabled: StoryObj<typeof SingleSelect> = {
  render: () => {
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
};

export const ValidationError: StoryObj<typeof SingleSelect> = {
  ...Template,
  render: () => {
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

    return (
      <div>
        <h2>Validation mode - both</h2>
        <SingleSelect
          isClearable
          validationMode="both"
          errorMessages={['This field is required']}
          options={options}
          required
          label={<>Single select</>}
        />
        <h2>Validation mode - icon only</h2>
        <SingleSelect
          isClearable
          validationMode="icon"
          errorMessages={['This field is required']}
          options={options}
          required
          label={<>Single select</>}
        />
        <h2>Validation mode - message only</h2>
        <SingleSelect
          isClearable
          validationMode="message"
          errorMessages={['This field is required']}
          options={options}
          required
          label={<>Single select</>}
        />
        <h2>Icon on left</h2>
        <SingleSelect
          isClearable
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
