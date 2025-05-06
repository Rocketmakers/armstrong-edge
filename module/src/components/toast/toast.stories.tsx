import { expect } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';
import { findAllByText, findByRole, findByText, userEvent, waitFor, within } from '@storybook/test';
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
    userEvent.click(button);

    // check title and description
    const title = await findByText(document.body, args.title ?? '');
    const description = await findByText(document.body, args.description ?? '');
    expect(title).toBeVisible();
    expect(description).toBeVisible();

    // check close
    const close = await findByRole(document.body, 'button', { name: 'Close' });
    await waitFor(() => userEvent.click(close));
    await waitFor(() => Promise.all([expect(title).not.toBeVisible(), expect(description).not.toBeVisible()]));

    // check multiple toasts
    await userEvent.click(button);
    await userEvent.click(button);
    const titles = await findAllByText(document.body, args.title ?? '');
    await waitFor(() => expect(titles).toHaveLength(2));
  },
};

export const CustomDuration: StoryObj<typeof Toast> = {
  ...Template,
  args: {
    ...Template.args,
    duration: 100,
  },
  play: async ({ canvasElement, args }) => {
    const button = within(canvasElement).getByText('Send a toast');
    userEvent.click(button);

    const title = await findByText(document.body, args.title ?? '');
    expect(title).toBeVisible();
    // check auto-dismiss after custom dismiss time of 100ms + 300ms for animation
    await waitFor(() => expect(title).not.toBeVisible(), { timeout: 400 });
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
    const toast = await findByRole(document.body, 'status', {
      name: 'Notification',
    });

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
    const toast = await findByRole(document.body, 'status', {
      name: 'Notification',
    });

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
    const toast = await findByRole(document.body, 'status', {
      name: 'Notification',
    });

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

export const IgnoreDuplicateToast: StoryObj<typeof Toast> = {
  ...Template,
  decorators: [
    Story => (
      <ArmstrongProvider
        config={{
          toastIgnorePredicate: (existing, incoming) =>
            existing.some(t => t.title === incoming.title && t.description === incoming.description),
        }}
      >
        <Story />
      </ArmstrongProvider>
    ),
  ],
  play: async ({ canvasElement, args }) => {
    const button = within(canvasElement).getByText('Send a toast');
    await userEvent.click(button);
    await userEvent.click(button); // should be ignored

    const toasts = await findAllByText(document.body, args.title ?? '');
    expect(toasts.length).toBe(1);
  },
};

export const ReplaceDisplayMode: StoryObj<typeof Toast> = {
  ...Template,
  decorators: [
    Story => (
      <ArmstrongProvider config={{ toastDisplayMode: 'replace' }}>
        <Story />
      </ArmstrongProvider>
    ),
  ],
  play: async ({ canvasElement, args }) => {
    const button = within(canvasElement).getByText('Send a toast');
    await userEvent.click(button);
    await userEvent.click(button); // should replace the previous toast

    const toasts = await findAllByText(document.body, args.title ?? '');
    expect(toasts.length).toBe(1);
  },
};
