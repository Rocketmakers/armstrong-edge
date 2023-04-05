import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import React from 'react';
import { Select } from './select.component';

/** metadata */

export default {
  title: 'Form/Select Input',
  component: Select,
} as Meta<typeof Select>;

/** component template */

const Template: StoryObj<typeof Select> = {
  render: args => {
    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Select {...args} />
      </div>
    );
  },
};

/** stories */

export const Default: StoryObj<typeof Select> = {
  ...Template,
  args: {
    options: [
      { id: 1, name: 'red' },
      { id: 2, name: 'blue' },
    ],
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const option = canvas.getAllByRole('option');
    const select = option[0].parentElement; // Finding select by finding parent of the first option

    expect(option[0]).toHaveTextContent(args.options[0].name);
    userEvent.click(select!); // Opens the dropdown menu
    userEvent.click(select!.children[1]); // Select the second option
    expect(option[1]).toHaveTextContent(args.options[1].name); // Check if the selected value is correct
  },
};

export const WithCustomDropDownIcon: StoryObj<typeof Select> = {
  ...Template,
  args: {
    options: [
      { id: 1, name: 'red' },
      { id: 2, name: 'blue' },
    ],
    selectOverlayIcon: { iconSet: 'Icomoon', icon: 'arrow-down13' },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const option = canvas.getAllByRole('option');
    const select = option[0].parentElement; // Finding select by finding parent of the first option
    const customArrow = select?.nextSibling;

    expect(customArrow).toHaveAttribute('data-icon-set', args.selectOverlayIcon?.iconSet);
    expect(customArrow).toHaveAttribute('data-i', args.selectOverlayIcon?.icon);
  },
};

export const WithIcons: StoryObj<typeof Select> = {
  ...Template,
  args: {
    leftIcon: {
      icon: 'alarm',
      iconSet: 'Icomoon',
    },
    options: [
      {
        id: 1,
        name: 'Noon',
      },
      {
        id: 2,
        name: 'Dawn',
      },
    ],
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const option = canvas.getAllByRole('option');
    const select = option[0].parentElement; // Finding select by finding parent of the first option
    const customIcon = select?.parentElement?.previousSibling;

    expect(customIcon).toHaveAttribute('data-icon-set', args.leftIcon?.iconSet);
    expect(customIcon).toHaveAttribute('data-i', args.leftIcon?.icon);
  },
};

export const WithOverlayText: StoryObj<typeof Select> = {
  ...Template,
  args: {
    leftIcon: {
      icon: 'cash',
      iconSet: 'Icomoon',
    },
    leftOverlay: '£',
    options: [
      {
        id: 1,
        name: '100',
      },
      {
        id: 2,
        name: '200',
      },
    ],
    rightOverlay: 'GBP',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const option = canvas.getAllByRole('option');
    const select = option[0].parentElement; // Finding select by finding parent of the first option
    const leftOverlay = select?.parentElement?.previousSibling?.firstChild;
    const rightOverlay = select?.parentElement?.nextSibling?.firstChild;

    expect(leftOverlay).toHaveTextContent(args.leftOverlay);
    expect(rightOverlay).toHaveTextContent(args.rightOverlay);
  },
};

export const WithValidationError: StoryObj<typeof Select> = {
  ...Template,
  args: {
    options: [
      {
        id: 1,
        name: 'red',
      },
      {
        id: 2,
        name: 'blue',
      },
    ],
    validationErrorMessages: ['This is an error! Better fix it!'],
    validationMode: 'both',
  },

  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const errorMessage = canvas.getByText(args.validationErrorMessages[0]);
    expect(errorMessage).toBeInTheDocument();
  },
};

export const WithPlaceholder: StoryObj<typeof Select> = {
  ...Template,
  args: {
    options: [
      {
        id: 1,
        name: 'red',
      },
      {
        id: 2,
        name: 'blue',
      },
    ],
    placeholderOption: 'Select a color...',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const placeholderOption = canvas.getByText(args.placeholderOption);

    expect(placeholderOption).toBeInTheDocument();
  },
};
