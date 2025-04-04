import { expect } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within, fn } from '@storybook/test';
import * as React from 'react';
import { ImRocket } from 'react-icons/im';

import { useForm } from '../../form';
import { Checkbox } from './checkbox.component';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Here is label',
    onCheckedChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    checkbox.click();
    await waitFor(() => expect(checkbox.getAttribute('aria-checked')).toBe('true'));
  },
};

export const Disabled: Story = {
  args: {
    label: 'Checkbox is disabled',
    disabled: true,
    testId: 'arm-checkbox-container',
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByTestId('arm-checkbox-container');
    const isDisabled = checkbox.getAttribute('data-disabled');
    expect(isDisabled).toBe('true');
  },
};

export const CustomIndicator: Story = {
  args: {
    label: 'Check for Custom Indicator',
    testId: 'arm-checkbox-container',
    customIndicator: <ImRocket data-testid={'rocket-indicator'} />,
    onCheckedChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    checkbox.click();
    const indicator = await waitFor(() => canvas.getByTestId('rocket-indicator'));
    expect(indicator);
  },
};

export const ValidationError: Story = {
  args: {
    label: 'Option 1',
    validationErrorMessages: ['This field is required'],
    onCheckedChange: fn(),
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getAllByText('This field is required');
    expect(label[0]).toBeVisible();
  },
};

export const Bound: Story = {
  args: {
    label: 'Bound checkbox',
    onCheckedChange: fn(),
  },
  render: () => {
    const { formProp, formState } = useForm({ checked: false });

    return (
      <>
        <Checkbox bind={formProp('checked').bind()} />
        <p data-testid={'bound-result'}>Bound value is {formState?.checked ? 'checked' : 'not checked'}</p>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    const boundResult = canvas.getByTestId('bound-result');
    userEvent.click(checkbox);
    await waitFor(() => expect(boundResult).toHaveTextContent('Bound value is checked'));
  },
};

export const Sizes: StoryObj<typeof Checkbox> = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Checkbox displaySize="large" label="Large checkbox" data-testid="cb-container" />
        <Checkbox displaySize="medium" label="Medium checkbox" data-testid="cb-container" />
        <Checkbox displaySize="small" label="Small checkbox" data-testid="cb-container" />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [large, medium, small] = await canvas.findAllByTestId('cb-container');
    expect(large).toHaveAttribute('data-size', 'large');
    expect(medium).toHaveAttribute('data-size', 'medium');
    expect(small).toHaveAttribute('data-size', 'small');
  },
};
