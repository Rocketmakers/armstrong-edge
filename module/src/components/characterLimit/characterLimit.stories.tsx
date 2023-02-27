import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import * as React from 'react';

import { TextInput } from '../..';
import * as Form from '../../hooks/form';
import { IconUtils } from '../icon';
import { CharacterLimit } from './characterLimit.component';

/** metadata */

export default {
  title: 'Form/Character Limit',
  component: CharacterLimit,
  args: {
    limit: 10,
  },
} as Meta<typeof CharacterLimit>;

/** stories */

interface IFormData {
  thing: string | null;
}

export const Default: StoryObj<typeof CharacterLimit> = {
  render: args => {
    const { bind, ...props } = args;
    const formData: IFormData = { thing: '' };
    const { formProp } = Form.use(formData);

    return (
      <>
        <TextInput bind={formProp('thing').bind()} />
        <CharacterLimit bind={formProp('thing').bind()} {...props} />
      </>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { hidden: true });
    const limit = canvas.getByText(`0/${args.limit}`).parentElement;
    expect(limit);
    userEvent.type(input, 'a');
    expect(limit).toHaveTextContent(`1/${args.limit}`);
    userEvent.type(input, 'a'.repeat(args.limit - 1));
    expect(limit).toHaveTextContent(`${args.limit}/${args.limit}`);
    userEvent.type(input, 'a');
    expect(limit).toHaveTextContent(`${args.limit + 1}/${args.limit}`);
    expect(limit).toHaveAttribute('data-exceeded', 'true');
  },
};

export const Enforce: StoryObj<typeof CharacterLimit> = {
  render: args => {
    const { bind, ...props } = args;
    const formData: IFormData = { thing: '' };
    const { formProp } = Form.use(formData);

    return (
      <>
        <TextInput bind={formProp('thing').bind()} />
        <CharacterLimit bind={formProp('thing').bind()} {...props} />
      </>
    );
  },
  args: {
    shouldEnforce: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { hidden: true });
    const limit = canvas.getByText(`0/${args.limit}`).parentElement;
    expect(limit);
    userEvent.type(input, 'a');
    expect(limit).toHaveTextContent(`1/${args.limit}`);
    userEvent.type(input, 'a'.repeat(args.limit - 1));
    expect(limit).toHaveTextContent(`${args.limit}/${args.limit}`);
    userEvent.type(input, 'a');
    expect(input).toHaveValue('a'.repeat(args.limit));
    expect(limit).toHaveTextContent(`${args.limit}/${args.limit}`);
    expect(limit).toHaveAttribute('data-exceeded', 'false');
  },
};

export const InsideInput: StoryObj<typeof CharacterLimit> = {
  render: args => {
    const { bind, ...props } = args;
    const formData: IFormData = { thing: '' };
    const { formProp } = Form.use(formData);

    return (
      <>
        <TextInput
          bind={formProp('thing').bind()}
          rightOverlay={<CharacterLimit bind={formProp('thing').bind()} {...props} />}
        />
      </>
    );
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { hidden: true });
    const limit = canvas.getByText(`0/${args.limit}`).parentElement;
    expect(limit);
    expect(input.parentElement).toContainElement(limit);
  },
};

export const CustomIcon: StoryObj<typeof CharacterLimit> = {
  render: args => {
    const { bind, ...props } = args;
    const formData: IFormData = { thing: '' };
    const { formProp } = Form.use(formData);

    return (
      <>
        <TextInput bind={formProp('thing').bind()} />
        <CharacterLimit bind={formProp('thing').bind()} {...props} />
      </>
    );
  },
  args: {
    exceedsIcon: IconUtils.getIconDefinition('Icomoon', 'tree'),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { hidden: true });
    const limit = canvas.getByText(`0/${args.limit}`).parentElement as HTMLParagraphElement;
    expect(limit);
    userEvent.type(input, 'a'.repeat(args.limit + 1));
    const icon = within(limit).getByTitle('Character limit exceeded icon');
    expect(icon).toHaveAttribute('data-icon-set', args.exceedsIcon?.iconSet);
    expect(icon).toHaveAttribute('data-i', args.exceedsIcon?.icon);
  },
};
