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
    limit: 10
  }
} as Meta<typeof CharacterLimit>;

/** stories */

const inputStyle = {
  border: '1px solid black'
}

export const Default: StoryObj<typeof CharacterLimit> = {
  render: (args) => {
    const { bind, value, ...props } = args;
    const { formProp } = Form.use({ thing: '' });

    return (
      <>
        <TextInput bind={formProp('thing').bind()} testId="input" style={inputStyle} />
        <CharacterLimit bind={formProp('thing').bind()} {...props} testId="limit" />
      </>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId('input');
    const limit = canvas.getByTestId('limit');
    expect(limit).toHaveTextContent(`0/${args.limit}`);
    userEvent.type(input, 'a');
    expect(limit).toHaveTextContent(`1/${args.limit}`);
    userEvent.type(input, 'a'.repeat(args.limit - 1));
    expect(limit).toHaveTextContent(`${args.limit}/${args.limit}`);
    userEvent.type(input, 'a');
    expect(limit).toHaveTextContent(`${args.limit + 1}/${args.limit}`);
    expect(limit).toHaveAttribute('data-exceeded', 'true');
  }
}

export const Enforce: StoryObj<typeof CharacterLimit> = {
  render: (args) => {
    const { bind, value, ...props } = args;
    const { formProp } = Form.use({ thing: '' });

    return (
      <>
        <TextInput bind={formProp('thing').bind()} testId="input" style={inputStyle} />
        <CharacterLimit bind={formProp('thing').bind()} {...props} testId="limit" />
      </>
    );
  },
  args: {
    shouldEnforce: true
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId('input');
    const limit = canvas.getByTestId('limit');
    expect(limit).toHaveTextContent(`0/${args.limit}`);
    userEvent.type(input, 'a');
    expect(limit).toHaveTextContent(`1/${args.limit}`);
    userEvent.type(input, 'a'.repeat(args.limit - 1));
    expect(limit).toHaveTextContent(`${args.limit}/${args.limit}`);
    userEvent.type(input, 'a');
    expect(within(input).getByRole('textbox')).toHaveValue('a'.repeat(args.limit));
    expect(limit).toHaveTextContent(`${args.limit}/${args.limit}`);
    expect(limit).toHaveAttribute('data-exceeded', 'false');
  }
}

export const InsideInput: StoryObj<typeof CharacterLimit> = {
  render: (args) => {
    const { bind, value, ...props } = args;
    const { formProp } = Form.use({ thing: '' });

    return (
      <>
        <TextInput bind={formProp('thing').bind()} testId="input" rightOverlay={<CharacterLimit bind={formProp('thing').bind()} {...props} testId="limit" />} style={inputStyle} />
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId('input');
    const limit = canvas.getByTestId('limit');
    expect(input).toContainElement(limit);
  }
}

export const CustomIcon: StoryObj<typeof CharacterLimit> = {
  render: (args) => {
    const { bind, value, ...props } = args;
    const { formProp } = Form.use({ thing: '' });

    return (
      <>
        <TextInput bind={formProp('thing').bind()} testId="input" style={inputStyle} />
        <CharacterLimit bind={formProp('thing').bind()} {...props} testId="limit" />
      </>
    );
  },
  args: {
    exceedsIcon: IconUtils.getIconDefinition('Icomoon', 'tree')
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId('input');
    const limit = canvas.getByTestId('limit');
    userEvent.type(input, 'a'.repeat(args.limit + 1));
    const icon = within(limit).getByRole('generic', { hidden: true });
    expect(icon).toHaveAttribute('data-icon-set', args.exceedsIcon?.iconSet);
    expect(icon).toHaveAttribute('data-i', args.exceedsIcon?.icon);
  }
}
