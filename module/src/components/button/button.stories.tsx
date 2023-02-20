import { action } from '@storybook/addon-actions';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import * as React from 'react';

import { IIcon } from '../icon';
import { Icons } from '../icon/icon.icons';
import { Button } from './button.component';

/** metadata */

export default {
  title: 'Button/Button',
  component: Button,
  args: {
    children: 'Click me please',
  },
} as Meta<typeof Button>;

/** component template */

const Template: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} />
};

/** stories */

export const Default: StoryObj<typeof Button> = {
  ...Template,
  args: {
    onClick: action('onClick'),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    expect(button).toHaveTextContent(args.children as string);
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
};

export const WithIcons: StoryObj<typeof Button> = {
  ...Template,
  args: {
    onClick: action('onClick'),
    leftIcon: { icon: 'weather-rain2', iconSet: 'Icomoon' },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    const displayedIcon = args.leftIcon as IIcon<keyof Icons>;
    const icon = within(button).getByTitle(`${displayedIcon.icon} icon on left`);
    expect(button).toHaveTextContent(args.children as string);
    expect(icon).toHaveAttribute('data-i', displayedIcon.icon);
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
};

export const Disabled: StoryObj<typeof Button> = {
  ...Template,
  args: {
    onClick: action('onClick'),
    leftIcon: { icon: 'cogs', iconSet: 'Icomoon' },
    disabled: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    expect(button).toHaveTextContent(args.children as string);
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('data-disabled', 'true');
  }
}

export const Pending: StoryObj<typeof Button> = {
  ...Template,
  args: {
    onClick: action('onClick'),
    leftIcon: { icon: 'eye-blocked2', iconSet: 'Icomoon' },
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
    expect(spinner).toHaveAttribute('data-pending', 'true');
    expect(within(spinner).getByTitle('Active spinner icon')).toHaveAttribute('data-i', 'spinner2');
  }
}

export const PendingOnLeft: StoryObj<typeof Button> = {
  ...Template,
  args: {
    onClick: action('onClick'),
    leftIcon: { icon: 'eye-blocked2', iconSet: 'Icomoon' },
    pending: true,
    statusPosition: 'left'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    const spinner = within(button).getByRole('status');
    expect(button.firstChild).toContainElement(spinner as HTMLElement);
    expect(within(spinner).getByTitle('Active spinner icon')).toHaveAttribute('data-i', 'spinner2');
  }
}

export const PendingAnimation = () => {
  const [pending, setPending] = React.useState(false);

  return (
    <Button pending={pending} onClick={() => setPending(!pending)}>
      Click me to pend...
    </Button>
  );
};
PendingAnimation.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  const noSpinner = within(button).queryByRole('status');
  expect(button).toBeEnabled();
  expect(button).toHaveAttribute('data-disabled', 'false');
  expect(noSpinner).toBeNull();
  await userEvent.click(button);
  const spinner = within(button).getByRole('status');
  expect(button.lastChild).toContainElement(spinner as HTMLElement);
  expect(button).toBeDisabled();
  expect(button).toHaveAttribute('data-disabled', 'true');
  expect(spinner).toBeVisible();
  expect(spinner).toHaveAttribute('data-pending', 'true');
  expect(within(spinner).getByTitle('Active spinner icon')).toHaveAttribute('data-i', 'spinner2');
};

export const Error : StoryObj<typeof Button> = {
  ...Template,
  args: {
    onClick: action('onClick'),
    leftIcon: { icon: 'eye-blocked2', iconSet: 'Icomoon' },
    error: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    const error = within(button).getByRole('status');
    expect(button).toHaveAttribute('data-error', 'true');
    expect(error).toBeVisible();
    expect(error).toHaveAttribute('data-error', 'true');
    expect(within(error).getByTitle('Error icon')).toHaveAttribute('data-i', 'warning');
  }
}

export const Minimal: StoryObj<typeof Button> = {
  ...Template,
  args: {
    onClick: action('onClick'),
    leftIcon: { icon: 'weather-rain2', iconSet: 'Icomoon' },
    minimalStyle: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    expect(button).toHaveTextContent(args.children as string);
    expect(button).toHaveClass('arm-button-minimal');
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
}
