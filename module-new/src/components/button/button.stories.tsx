import { action } from '@storybook/addon-actions';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import * as React from 'react';
import { ImPencil } from 'react-icons/im';

import { Button } from './button.component';

export default {
  title: 'Button/Button',
  component: Button,
  args: {
    children: 'Click me please',
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    onClick: action('onClick'),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    expect(button).toHaveTextContent(args.children as string);
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button displaySize="small">Small</Button>
        <Button>Medium</Button>
        <Button displaySize="large">Large</Button>
      </div>
    );
  },
};

export const Styles: Story = {
  render: () => {
    return (
      <>
        <h3>Status - Normal</h3>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Button displayStyle="primary">Primary</Button>
          <Button displayStyle="secondary">Secondary</Button>
          <Button displayStyle="outline">Outline</Button>
        </div>
        <h3>Status - Positive</h3>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Button displayStyle="primary" displayStatus="positive">
            Primary
          </Button>
          <Button displayStyle="secondary" displayStatus="positive">
            Secondary
          </Button>
          <Button displayStyle="outline" displayStatus="positive">
            Outline
          </Button>
        </div>
        <h3>Status - Negative</h3>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Button displayStyle="primary" displayStatus="negative">
            Primary
          </Button>
          <Button displayStyle="secondary" displayStatus="negative">
            Secondary
          </Button>
          <Button displayStyle="outline" displayStatus="negative">
            Outline
          </Button>
        </div>
        <h3>Status - Warning</h3>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Button displayStyle="primary" displayStatus="warning">
            Primary
          </Button>
          <Button displayStyle="secondary" displayStatus="warning">
            Secondary
          </Button>
          <Button displayStyle="outline" displayStatus="warning">
            Outline
          </Button>
        </div>
        <h3>Status - Info</h3>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Button displayStyle="primary" displayStatus="info">
            Primary
          </Button>
          <Button displayStyle="secondary" displayStatus="info">
            Secondary
          </Button>
          <Button displayStyle="outline" displayStatus="info">
            Outline
          </Button>
        </div>
      </>
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/f6yAoBwAQop8YahTF2ASSG/Block-up-design-system?node-id=197%3A3561&t=ccw4zqPQDfhSLCVL-1',
    },
  },
};

export const WithIcons: Story = {
  args: {
    onClick: action('onClick'),
    leftIcon: <ImPencil title="left-icon-test" />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    const icon = within(button).getByTitle('left-icon-test');
    expect(button).toHaveTextContent(args.children as string);
    expect(icon).toBeVisible();
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
};

export const Disabled: Story = {
  args: {
    onClick: action('onClick'),
    leftIcon: <ImPencil title="left-icon-test" />,
    disabled: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    expect(button).toHaveTextContent(args.children as string);
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('data-disabled', 'true');
  },
};

export const Pending: Story = {
  args: {
    onClick: action('onClick'),
    leftIcon: <ImPencil title="left-icon-test" />,
    pending: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    const spinner = within(button).getByRole('status');
    expect(button.lastChild).toContainElement(spinner as HTMLElement);
    expect(button).toHaveTextContent(args.children as string);
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('data-disabled', 'true');
    expect(spinner).toBeVisible();
  },
};

export const PendingOnLeft: Story = {
  args: {
    onClick: action('onClick'),
    leftIcon: <ImPencil title="left-icon-test" />,
    pending: true,
    pendingPosition: 'left',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    const spinner = within(button).getByRole('status');
    expect(button.firstChild).toContainElement(spinner as HTMLElement);
  },
};