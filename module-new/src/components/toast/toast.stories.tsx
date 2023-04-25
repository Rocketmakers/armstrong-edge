import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { findAllByRole, findByRole, findByText, userEvent, waitFor, within } from '@storybook/testing-library';
import * as React from 'react';

import { Button } from '../button';
import { ArmstrongProvider } from '../provider';
import { Toast } from './toast.component';
import { useToast } from './toast.hooks';

/** metadata */

export default {
  title: 'Modals/Toast',
  component: Toast,
} as Meta<typeof Toast>;

/** component template */
const Template: StoryObj<typeof Toast> = {
  args: {
    title: 'Here is a toast!',
    description: 'Here is the description for my toast',
  },
  decorators: [
    Story => (
      <ArmstrongProvider>
        <Story />
      </ArmstrongProvider>
    ),
  ],
  render: args => {
    const dispatch = useToast();

    return <Button onClick={() => dispatch(args)}>Send a toast</Button>;
  },
};

/** stories */

export const Default: StoryObj<typeof Toast> = {
  ...Template,
  play: async ({ canvasElement, args }) => {
    // launch toast
    const button = within(canvasElement).getByText('Send a toast');
    expect(button).toBeVisible();
    userEvent.click(button);

    // check title and description
    const title = await findByText(document.body, args.title ?? '');
    const description = await findByText(document.body, args.description ?? '');
    expect(title).toBeVisible();
    expect(description).toBeVisible();

    // check auto-dismiss after default dismiss time of 5000ms + 500ms for animation
    await waitFor(() => Promise.all([expect(title).not.toBeVisible(), expect(description).not.toBeVisible()]), {
      timeout: 5500,
    });

    // launch multiple toasts
    userEvent.click(button);
    userEvent.click(button);

    // check close buttons on multi toast
    const [close1, close2] = await findAllByRole(document.body, 'button', { name: 'Close' });
    expect(close1).toBeVisible();
    expect(close2).toBeVisible();
    userEvent.click(close1);
    userEvent.click(close2);
    await waitFor(() => Promise.all([expect(close1).not.toBeVisible(), expect(close2).not.toBeVisible()]));
  },
};

export const CustomDuration: StoryObj<typeof Toast> = {
  ...Template,
  args: {
    ...Template.args,
    duration: 1000,
  },
  play: async ({ canvasElement, args }) => {
    const button = within(canvasElement).getByText('Send a toast');
    expect(button).toBeVisible();
    userEvent.click(button);

    const title = await findByText(document.body, args.title ?? '');
    expect(title).toBeVisible();
    // check auto-dismiss after custom dismiss time of 1000ms + 500ms for animation
    await waitFor(() => expect(title).not.toBeVisible(), { timeout: 1500 });
  },
};

export const TopLeft: StoryObj<typeof Toast> = {
  ...Template,
  decorators: [
    Story => (
      <ArmstrongProvider config={{ toastPosition: 'top-left' }}>
        <Story />
      </ArmstrongProvider>
    ),
  ],
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByText('Send a toast');
    userEvent.click(button);
    const toast = await findByRole(document.body, 'status', { name: 'Notification' });

    expect(toast).toBeVisible();
    expect(toast).toHaveAttribute('data-position', 'top-left');
  },
};

export const TopRight: StoryObj<typeof Toast> = {
  ...Template,
  decorators: [
    Story => (
      <ArmstrongProvider config={{ toastPosition: 'top-right' }}>
        <Story />
      </ArmstrongProvider>
    ),
  ],
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByText('Send a toast');
    userEvent.click(button);
    const toast = await findByRole(document.body, 'status', { name: 'Notification' });

    expect(toast).toBeVisible();
    expect(toast).toHaveAttribute('data-position', 'top-right');
  },
};

export const BottomLeft: StoryObj<typeof Toast> = {
  ...Template,
  decorators: [
    Story => (
      <ArmstrongProvider config={{ toastPosition: 'bottom-left' }}>
        <Story />
      </ArmstrongProvider>
    ),
  ],
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByText('Send a toast');
    userEvent.click(button);
    const toast = await findByRole(document.body, 'status', { name: 'Notification' });

    expect(toast).toBeVisible();
    expect(toast).toHaveAttribute('data-position', 'bottom-left');
  },
};

export const CustomContent: StoryObj<typeof Toast> = {
  ...Template,
  args: {
    ...Template.args,
    content: <Button>Custom button</Button>,
  },
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByText('Send a toast');
    userEvent.click(button);
    const customButton = await findByText(document.body, 'Custom button');
    expect(customButton).toBeVisible();
  },
};
