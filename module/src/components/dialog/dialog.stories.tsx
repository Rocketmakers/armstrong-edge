import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import React from 'react';

import { Button } from '../button';
import { getIconDefinition } from '../icon/icons.utils';
import { Dialog } from './dialog.component';

/** metadata */

export default {
  title: 'Layout/Dialog',
  component: Dialog,
} as Meta<typeof Dialog>;

/** component template */

const Template: StoryObj<typeof Dialog> = {
  render: args => {
    const [open, setOpen] = React.useState(true);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog {...args} isOpen={open} onOpenChange={setOpen}>
          I'm in a Dialog
        </Dialog>
      </>
    );
  },
};

/** stories */

export const Default: StoryObj<typeof Dialog> = {
  ...Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dialog = await waitFor(() => canvas.getByRole('dialog', { hidden: true }));
    expect(dialog).toHaveTextContent("I'm in a Dialog");
    userEvent.click(dialog.parentElement!);
    await waitFor(() => expect(canvas.queryByRole('dialog', { hidden: true })).toBeNull());
    userEvent.click(canvas.getByRole('button'));
    const newDialog = await waitFor(() => canvas.getByRole('dialog', { hidden: true }));
    const closeButton = within(newDialog!).getByRole('button');
    expect(closeButton.children[0]).toHaveAttribute('data-i', 'cross2');
    userEvent.click(closeButton);
    await waitFor(() => expect(canvas.queryByRole('dialog', { hidden: true })).toBeNull());
  },
};

export const WithTitleAndIcon: StoryObj<typeof Dialog> = {
  ...Template,
  args: {
    title: "I'm the dialog",
    titleIcon: getIconDefinition('Icomoon', 'stats-bars5'),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const dialog = await waitFor(() => canvas.getByRole('dialog', { hidden: true }));
    const title = within(dialog).getByText(args.title ?? '');
    expect(title.previousSibling).toHaveAttribute('data-i', args.titleIcon?.icon);
    expect(dialog).toHaveTextContent("I'm in a Dialog");
    const closeButton = within(dialog!).getByRole('button');
    expect(closeButton.children[0]).toHaveAttribute('data-i', 'cross2');
    userEvent.click(closeButton);
    await waitFor(() => expect(canvas.queryByRole('dialog', { hidden: true })).toBeNull());
  },
};

export const CustomCloseIcon: StoryObj<typeof Dialog> = {
  ...Template,
  args: {
    title: "I'm the dialog",
    closeButtonIcon: getIconDefinition('Icomoon', 'station'),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const dialog = await waitFor(() => canvas.getByRole('dialog', { hidden: true }));
    expect(dialog).toHaveTextContent("I'm in a Dialog");
    const closeButton = within(dialog!).getByRole('button');
    expect(closeButton.children[0]).toHaveAttribute('data-i', args.closeButtonIcon?.icon);
    userEvent.click(closeButton);
    await waitFor(() => expect(canvas.queryByRole('dialog', { hidden: true })).toBeNull());
  },
};

export const CloseHandler: StoryObj<typeof Dialog> = {
  render: args => {
    const [open, setOpen] = React.useState(true);
    const [foo, setFoo] = React.useState(false);

    const handler = async () => {
      setFoo(true);
      setOpen(false);
      return false;
    };

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <br />
        <Button onClick={() => setFoo(false)}>Reset</Button>
        <br />
        <p>Foo is {foo ? '' : 'not '}set!</p>
        <Dialog {...args} isOpen={open} onOpenChange={setOpen} onClose={() => handler()}>
          I'm in a Dialog
        </Dialog>
      </>
    );
  },
  args: {
    title: "I'm the dialog",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Foo is not set!'));
    const dialog = await waitFor(() => canvas.getByRole('dialog', { hidden: true }));
    const closeButton = within(dialog!).getByRole('button');
    userEvent.click(closeButton);
    await waitFor(() => expect(canvas.queryByRole('dialog', { hidden: true })).toBeNull());
    expect(canvas.getByText('Foo is set!'));
  },
};
