import { Meta, StoryObj } from '@storybook/react';
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
};

export const Labelled: StoryObj<typeof Input> = {
  ...Template,
  render: () => {
    return (
      <div>
        <h2>Default</h2>
        <Input label="Name" />
        <h2>Required</h2>
        <Input label="Name" required={true} />
      </div>
    );
  },
};

export const Sizes: StoryObj<typeof Input> = {
  ...Template,
  render: () => {
    return (
      <div>
        <h2>Small</h2>
        <Input label="Name" displaySize="small" required={true} />
        <h2>Medium (default)</h2>
        <Input label="Name" required={true} />
        <h2>Large</h2>
        <Input label="Name" displaySize="large" required={true} />
      </div>
    );
  },
};

export const Overlay: StoryObj<typeof Input> = {
  ...Template,
  render: () => {
    return (
      <div>
        <h2>Left overlay</h2>
        <Input leftOverlay={<BiSearch size={22} />} />
        <h2>Right overlay</h2>
        <Input rightOverlay="kw/h" />
        <h2>Both</h2>
        <Input leftOverlay={<AiFillThunderbolt size={22} />} rightOverlay="kw/h" />
      </div>
    );
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
};

export const ValidationError: StoryObj<typeof Input> = {
  ...Template,
  render: () => {
    return (
      <div>
        <h2>Validation mode - both</h2>
        <Input validationMode="both" validationErrorMessages={['This field is required']} />
        <h2>Validation mode - icon only</h2>
        <Input validationMode="icon" validationErrorMessages={['This field is required']} />
        <h2>Validation mode - message only</h2>
        <Input validationMode="message" validationErrorMessages={['This field is required']} />
        <h2>Icon on left</h2>
        <Input validationMode="icon" statusPosition="left" validationErrorMessages={['This field is required']} />
      </div>
    );
  },
};

export const InputTypes: StoryObj<typeof Input> = {
  ...Template,
  render: () => {
    return (
      <div>
        <h2>Number</h2>
        <Input type="number" />
        <h2>Password</h2>
        <Input type="password" />
        <h2>Email</h2>
        <Input type="email" />
      </div>
    );
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
