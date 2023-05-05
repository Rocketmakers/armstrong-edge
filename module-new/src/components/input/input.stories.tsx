import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import * as React from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

import { useForm } from '../../hooks/form';
import { Input } from './input.component';

/** metadata */

export default {
  title: 'Inputs/Input',
  component: Input,
  args: {
    type: 'text',
  },
} as Meta<typeof Input>;

/** component template */

const Template: StoryObj<typeof Input> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- The type discriminator on Input prevents storybook from spreading pure props on here without a cast
  render: (props: any) => <Input {...props} />,
};

/** stories */

export const Default: StoryObj<typeof Input> = {
  ...Template,
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
  ...Template,
  render: () => {
    return (
      <div>
        <h2>Default</h2>
        <Input label="Name" />
        <h2>Required</h2>
        <Input label="Required Name" required={true} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Name') as HTMLInputElement;
    const requiredInput = canvas.getByLabelText('Required Name *') as HTMLInputElement;

    expect(input).toBeInTheDocument();
    expect(requiredInput).toBeInTheDocument();
  },
};

export const Sizes: StoryObj<typeof Input> = {
  ...Template,
  render: () => {
    return (
      <div>
        <h2>Small Input</h2>
        <Input testId={'small'} displaySize="small" required={true} />
        <h2>Medium Input</h2>
        <Input testId={'medium'} required={true} />
        <h2>Large Input</h2>
        <Input testId={'large'} displaySize="large" required={true} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const smallInput = canvas.getByTestId('small');
    const mediumInput = canvas.getByTestId('medium');
    const largeInput = canvas.getByTestId('large');

    expect(smallInput.getAttribute('data-size')).toEqual('small');
    expect(mediumInput.getAttribute('data-size')).toEqual(null);
    expect(largeInput.getAttribute('data-size')).toEqual('large');
  },
};

export const Overlay: StoryObj<typeof Input> = {
  ...Template,
  render: () => {
    return (
      <div>
        <h2>Left overlay</h2>
        <Input leftOverlay={<BiSearch size={22} data-testid={'search-icon'} />} />
        <h2>Right overlay</h2>
        <Input rightOverlay="ml" />
        <h2>Both</h2>
        <Input leftOverlay={<AiFillThunderbolt size={22} data-testid={'thunderbolt-icon'} />} rightOverlay="kw/h" />
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
  ...Template,
  render: () => {
    return (
      <div>
        <h2>Default</h2>
        <Input pending={true} />
        <h2>Icon on left</h2>
        <Input pending={true} statusPosition="left" />
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
  ...Template,
  render: () => {
    return (
      <div>
        <h2>Validation mode - both</h2>
        <Input
          validationMode="both"
          wrapperTestId={'both-validation'}
          validationErrorMessages={['This field is required']}
        />
        <h2>Validation mode - icon only</h2>
        <Input
          validationMode="icon"
          validationErrorMessages={['This field is required']}
          wrapperTestId={'icon-validation'}
        />
        <h2>Validation mode - message only</h2>
        <Input
          validationMode="message"
          validationErrorMessages={['This field is required']}
          wrapperTestId={'message-validation'}
        />
        <h2>Icon on left</h2>
        <Input
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
  ...Template,
  render: () => {
    return (
      <div>
        <h2>Number</h2>
        <Input type="number" testId="number-input" />
        <h2>Password</h2>
        <Input type="password" testId="password-input" />
        <h2>Email</h2>
        <Input type="email" testId="email-input" />
        <h2> Telephone number</h2>
        <Input type="email" testId="telephone-input" />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Number Input
    const numberInput = canvas.getByTestId('number-input');
    expect(numberInput).toBeInTheDocument();
    // userEvent.type(numberInput, 'no txt only numb');
    // expect(numberInput).not.toHaveTextContent('no txt only numb');
    await userEvent.type(numberInput, '42');
    // await expect(numberInput).toHaveTextContent('1337420');
    expect(numberInput).toHaveTextContent('42');

    // Password Input
    const passwordInput = canvas.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();

    // Email Input
    const emailInput = canvas.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();

    // Telephone Input
    const telephoneInput = canvas.getByTestId('telephone-input');
    expect(telephoneInput).toBeInTheDocument();
  },
};

export const Bound: StoryObj<typeof Input> = {
  ...Template,
  render: () => {
    const { formProp, formState } = useForm({ text: '', number: 2, debounce: '' });
    return (
      <div>
        <h2>Bound - text</h2>
        <Input type="text" bind={formProp('text').bind()} />
        <ul>
          <li>Value: {formState?.text}</li>
          <li>Type: {typeof formState?.text}</li>
        </ul>
        <h2>Bound - number</h2>
        <Input type="number" bind={formProp('number').bind()} />
        <ul>
          <li>Value: {formState?.number}</li>
          <li>Type: {typeof formState?.number}</li>
        </ul>
        <h2>Bound - debounced text (200ms)</h2>
        <Input type="text" bind={formProp('debounce').bind()} delay={200} />
        <ul>
          <li>Value: {formState?.debounce}</li>
          <li>Type: {typeof formState?.debounce}</li>
        </ul>
      </div>
    );
  },
};
