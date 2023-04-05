import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { fireEvent, userEvent, waitFor, within } from '@storybook/testing-library';
import * as React from 'react';

import { getIconDefinition } from '../icon';
import { SwitchInput } from './switchInput.component';

/** metadata */

export default {
  title: 'Form/Switch Input',
  component: SwitchInput,
} as Meta<typeof SwitchInput>;

/** Template */

const Template: StoryObj<typeof SwitchInput> = {
  render: args => {
    const [checked, setChecked] = React.useState<boolean | null | undefined>(false);

    return (
      <>
        <SwitchInput
          {...args}
          checked={checked}
          onChange={setChecked}
          checkedIcon={getIconDefinition('Icomoon', 'circle2')}
          uncheckedIcon={getIconDefinition('Icomoon', 'circle2')}
          iconStyle="static"
        />
      </>
    );
  },
};

/** stories */

export const Default: StoryObj<typeof SwitchInput> = {
  ...Template,
  args: {
    checked: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', { hidden: true });
    expect(checkbox.parentElement?.parentElement).toHaveAttribute('data-checked', 'false');
    userEvent.click(checkbox);
    fireEvent.mouseMove(checkbox, { clientX: 100, clientY: 0 });
    await waitFor(() => expect(checkbox.parentElement?.parentElement).toHaveAttribute('data-checked', 'true'));
  },
};

export const Click: StoryObj<typeof SwitchInput> = {
  ...Template,
  args: {
    checked: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', { hidden: true });
    expect(checkbox.parentElement?.parentElement).toHaveAttribute('data-checked', 'false');
    userEvent.click(checkbox);
    fireEvent.mouseDown(checkbox);
    fireEvent.mouseUp(checkbox);
    await waitFor(() => expect(checkbox.parentElement?.parentElement).toHaveAttribute('data-checked', 'true'));
  },
};

export const ToggleState: StoryObj<typeof SwitchInput> = {
  render: args => {
    const [checked, setChecked] = React.useState<boolean | null | undefined>(false);

    return (
      <>
        <SwitchInput
          {...args}
          checked={checked}
          onChange={setChecked}
          checkedIcon={getIconDefinition('Icomoon', 'circle2')}
          uncheckedIcon={getIconDefinition('Icomoon', 'circle2')}
          iconStyle="static"
        />
        <br />
        <p data-testid="result">I am {checked ? 'checked' : 'unchecked'}</p>
      </>
    );
  },
  args: {
    checked: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', { hidden: true });
    expect(checkbox.parentElement?.parentElement).toHaveAttribute('data-checked', 'false');
    expect(canvas.getByText('I am unchecked'));
    userEvent.click(checkbox);
    fireEvent.mouseMove(checkbox, { clientX: 100, clientY: 0 });
    await waitFor(() => expect(checkbox.parentElement?.parentElement).toHaveAttribute('data-checked', 'true'));
    expect(canvas.getByText('I am checked'));
  },
};
