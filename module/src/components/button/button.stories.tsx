import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { IIcon } from '../icon';
import { Icons } from '../icon/icon.icons';
import { Button } from './button.component';

/** metadata */

export default {
  title: 'Button/Button',
  Button,
  argTypes: { onClick: { action: 'clicked' } },
};

/** component template */

const Template = StoryUtils.createTemplate(Button);

/** stories */

export const Default = StoryUtils.cloneTemplate(Template, { children: 'Click me please' });
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  expect(canvas.getByRole('button')).toHaveTextContent(args.children as string);
  await userEvent.click(canvas.getByRole('button'));
  await waitFor(() => expect(args.onClick).toHaveBeenCalled());
};

export const WithIcons = StoryUtils.cloneTemplate(Template, {
  leftIcon: { icon: 'weather-rain2', iconSet: 'Icomoon' },
  children: 'Click me please',
});
WithIcons.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  const icon = button.querySelector('.left-icon');
  const displayedIcon = args.leftIcon as IIcon<keyof Icons>;
  expect(button).toHaveTextContent(args.children as string);
  expect(icon).toHaveAttribute('data-i', displayedIcon.icon);
  await userEvent.click(button);
  await waitFor(() => expect(args.onClick).toHaveBeenCalled());
};

export const Disabled = StoryUtils.cloneTemplate(Template, {
  leftIcon: { icon: 'cogs', iconSet: 'Icomoon' },
  disabled: true,
  children: 'Click me please',
});
Disabled.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  expect(button).toHaveTextContent(args.children as string);
  expect(button).toBeDisabled();
  expect(button).toHaveAttribute('data-disabled', 'true');
};

export const Pending = StoryUtils.cloneTemplate(Template, {
  leftIcon: { icon: 'eye-blocked2', iconSet: 'Icomoon' },
  children: 'Click me please',
  pending: true,
});
Pending.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  const spinner = button.querySelector('.arm-status');
  expect(button.lastChild).toContainElement(spinner as HTMLElement);
  expect(button).toHaveTextContent(args.children as string);
  expect(button).toBeDisabled();
  expect(button).toHaveAttribute('data-disabled', 'true');
  expect(spinner).toBeVisible();
  expect(spinner).toHaveAttribute('data-pending', 'true');
  expect(spinner?.querySelector('.arm-icon')).toHaveAttribute('data-i', 'spinner2');
};

export const PendingOnLeft = StoryUtils.cloneTemplate(Template, {
  leftIcon: { icon: 'eye-blocked2', iconSet: 'Icomoon' },
  children: 'Click me please',
  pending: true,
  statusPosition: 'left',
});
PendingOnLeft.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  const spinner = button.querySelector('.arm-status');
  expect(button.firstChild).toContainElement(spinner as HTMLElement);
  expect(spinner?.querySelector('.arm-icon')).toHaveAttribute('data-i', 'spinner2');
};

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
  let spinner = button.querySelector('.arm-status');
  expect(button).toBeEnabled();
  expect(button).toHaveAttribute('data-disabled', 'false');
  expect(spinner).toBeNull();
  await userEvent.click(canvas.getByRole('button'));
  spinner = button.querySelector('.arm-status');
  expect(button.lastChild).toContainElement(spinner as HTMLElement);
  expect(button).toBeDisabled();
  expect(button).toHaveAttribute('data-disabled', 'true');
  expect(spinner).toBeVisible();
  expect(spinner).toHaveAttribute('data-pending', 'true');
  expect(spinner?.querySelector('.arm-icon')).toHaveAttribute('data-i', 'spinner2');
};

export const Error = StoryUtils.cloneTemplate(Template, {
  leftIcon: { icon: 'eye-blocked2', iconSet: 'Icomoon' },
  children: 'Click me please',
  error: true,
});
Error.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  const error = button.querySelector('.arm-status');
  expect(button.lastChild).toContainElement(error as HTMLElement);
  expect(button).toHaveAttribute('data-error', 'true');
  expect(error).toBeVisible();
  expect(error).toHaveAttribute('data-error', 'true');
  expect(error?.querySelector('.arm-icon')).toHaveAttribute('data-i', 'warning');
};

export const Minimal = StoryUtils.cloneTemplate(Template, {
  leftIcon: { icon: 'weather-rain2', iconSet: 'Icomoon' },
  children: 'Click me please',
  minimalStyle: true,
});
Minimal.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  expect(button).toHaveTextContent(args.children as string);
  expect(button).toHaveClass('arm-button-minimal');
  await userEvent.click(button);
  await waitFor(() => expect(args.onClick).toHaveBeenCalled());
};