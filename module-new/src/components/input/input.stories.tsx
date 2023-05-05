import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import * as React from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

import { useForm } from '../../hooks/form';
import { Input } from './input.component';

/** Inputs with options to track errors, pending data and so on. */

export default {
  title: 'Inputs/Input',
  component: Input,
  args: {
    type: 'text',
  },
} as Meta<typeof Input>;

export const Default: StoryObj<typeof Input> = {
  args: {
    type: 'text',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    expect(input).toBeInTheDocument();
  },
};

export const Labelled: StoryObj<typeof Input> = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <Input label={'Default'} />
        <Input label={'Required'} required={true} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const defaultInput = canvas.getByLabelText('Default') as HTMLInputElement;
    const requiredInput = canvas.getByLabelText('Required *') as HTMLInputElement;

    expect(defaultInput).toBeInTheDocument();
    expect(requiredInput).toBeInTheDocument();
  },
};

export const Sizes: StoryObj<typeof Input> = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Input label={'Small Input'} displaySize="small" required={true} />
        <Input label={'Medium Input'} required={true} />
        <Input label={'Large Input'} displaySize="large" required={true} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const smallInput = canvas.getByLabelText('Small Input *');
    const mediumInput = canvas.getByLabelText('Medium Input *');
    const largeInput = canvas.getByLabelText('Large Input *');

    expect(smallInput.getAttribute('data-size')).toEqual('small');
    expect(mediumInput.getAttribute('data-size')).toEqual(null);
    expect(largeInput.getAttribute('data-size')).toEqual('large');
  },
};

export const Overlay: StoryObj<typeof Input> = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <Input label={'Left Overlay'} leftOverlay={<BiSearch size={22} data-testid={'search-icon'} />} />
        <Input label={'Right Overlay'} rightOverlay="ml" />
        <Input
          label={'Both overlays'}
          leftOverlay={<AiFillThunderbolt size={22} data-testid={'thunderbolt-icon'} />}
          rightOverlay="kw/h"
        />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const searchIcon = canvas.getByTestId('search-icon');
    const rightOverlayText = canvas.getByText('kw/h');
    const thunderboltIcon = canvas.getByTestId('thunderbolt-icon');
    const thunderboltOverlayText = canvas.getByText('ml');

    expect(searchIcon).toBeVisible();
    expect(rightOverlayText).toBeVisible();
    expect(thunderboltIcon).toBeVisible();
    expect(thunderboltOverlayText).toBeVisible();
  },
};

export const Pending: StoryObj<typeof Input> = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Input label={'Default'} pending={true} />
        <Input label={'Icon on left'} pending={true} statusPosition="left" />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spinners = canvas.getAllByRole('status');

    expect(spinners[0]).toBeVisible();
    expect(spinners[1]).toBeVisible();
  },
};

export const ValidationError: StoryObj<typeof Input> = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Input
          label={'Validation mode - both'}
          validationMode="both"
          wrapperTestId={'both-validation'}
          validationErrorMessages={['This field is required']}
        />
        <Input
          label={'Validation mode - icon only'}
          validationMode="icon"
          validationErrorMessages={['This field is required']}
          wrapperTestId={'icon-validation'}
        />
        <Input
          label={'Validation mode - message only'}
          validationMode="message"
          validationErrorMessages={['This field is required']}
          wrapperTestId={'message-validation'}
        />
        <Input
          label={'Icon on left'}
          validationMode="icon"
          statusPosition="left"
          validationErrorMessages={['This field is required']}
          wrapperTestId={'left-icon-validation'}
        />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const statusIcons = canvas.getAllByRole('status');
    const validationMessages = canvas.getAllByText('This field is required');

    // Validation mode - both
    const bothValidation = canvas.getByTestId('both-validation');
    expect(bothValidation.getAttribute('data-error')).toBe('true');
    expect(statusIcons[0]).toBeVisible();
    expect(validationMessages[0]).toBeVisible();

    // Validation mode - icon only
    const iconValidation = canvas.getByTestId('icon-validation');
    expect(iconValidation.getAttribute('data-error')).toBe('true');
    expect(statusIcons[1]).toBeVisible();

    // Validation mode - message only
    const messageValidation = canvas.getByTestId('message-validation');
    expect(messageValidation.getAttribute('data-error')).toBe('true');
    expect(validationMessages[1]).toBeVisible();

    // Icon on left
    const leftIconValidation = canvas.getByTestId('left-icon-validation');
    expect(leftIconValidation.getAttribute('data-error')).toBe('true');
    expect(leftIconValidation.getAttribute('data-left-overlay')).toBe('true');
    expect(statusIcons[2]).toBeVisible();
  },
};

export const InputTypes: StoryObj<typeof Input> = {
  render: () => {
    return (
      <div>
        <Input label={'Number'} type="number" testId="number-input" />
        <Input label={'Password'} type="password" testId="password-input" />
        <Input label={'Email'} type="email" testId="email-input" />
        <Input label={'Telephone number'} type="tel" testId="telephone-input" />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Number Input
    const numberInput = canvas.getByTestId('number-input') as HTMLInputElement;
    expect(numberInput).toBeInTheDocument();
    expect(numberInput.getAttribute('type')).toBe('number');

    userEvent.type(numberInput, 'no txt only numb');
    expect(numberInput.value).not.toEqual('no txt only numb');

    userEvent.type(numberInput, '42');
    expect(numberInput.value).toEqual('42');

    // Password Input
    const passwordInput = canvas.getByTestId('password-input') as HTMLInputElement;
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput.getAttribute('type')).toBe('password');
    userEvent.type(passwordInput, 'password123');
    expect(passwordInput.value).toEqual('password123');

    // Email Input
    const emailInput = canvas.getByTestId('email-input') as HTMLInputElement;
    expect(emailInput).toBeInTheDocument();
    expect(emailInput.getAttribute('type')).toBe('email');
    userEvent.type(emailInput, 'helloworld@rocketmakers.com');
    expect(emailInput.value).toEqual('helloworld@rocketmakers.com');

    // Telephone Input
    const telephoneInput = canvas.getByTestId('telephone-input') as HTMLInputElement;
    expect(telephoneInput).toBeInTheDocument();
    expect(telephoneInput.getAttribute('type')).toBe('tel');
    userEvent.type(telephoneInput, '01189998819991197253');
  },
};

export const Bound: StoryObj<typeof Input> = {
  render: () => {
    const { formProp, formState } = useForm({ text: '', number: 0, debounce: '' });
    return (
      <div>
        <Input label={'Bound - text'} type="text" bind={formProp('text').bind()} />
        <ul>
          <li>Value: {formState?.text}</li>
          <li>Type: {typeof formState?.text}</li>
        </ul>
        <Input label={'Bound - number'} type="number" bind={formProp('number').bind()} />
        <ul>
          <li>Value: {formState?.number}</li>
          <li>Type: {typeof formState?.number}</li>
        </ul>
        <Input label={'Bound - debounced text (200ms)'} type="text" bind={formProp('debounce').bind()} delay={200} />
        <ul>
          <li>Value: {formState?.debounce}</li>
          <li>Type: {typeof formState?.debounce}</li>
        </ul>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    
  },
};
