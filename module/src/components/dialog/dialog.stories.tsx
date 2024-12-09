import { Meta, StoryObj } from '@storybook/react';
import { findByRole, findByText, queryByRole, userEvent, waitFor, within, expect, fn } from '@storybook/test';
import * as React from 'react';

import { useForm } from '../../form';
import { Button } from '../button';
import { Input } from '../input';
import { Dialog, DialogElement } from './dialog.component';
import { useDialog } from './dialog.hooks';

/** metadata */

export default {
  title: 'Modals/Dialog',
  component: Dialog,
} as Meta<typeof Dialog>;

/** stories */

const Template: StoryObj<typeof Dialog> = {
  args: {
    title: 'Test Dialog',
    description: 'Hello, I am a test dialog',
    onClose: fn(),
  },
  render: args => {
    const [dialogOpen, setDialogOpen] = React.useState(false);

    return (
      <>
        <Button onClick={() => setDialogOpen(true)}>Open dialog</Button>
        <Dialog {...args} open={dialogOpen} onOpenChange={setDialogOpen} />
      </>
    );
  },
};

export const Default: StoryObj<typeof Dialog> = {
  ...Template,
  play: async ({ canvasElement, args }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open dialog');
    userEvent.click(openButton);

    // title / description check
    const title = await findByText(document.body, args.title as string);
    const description = await findByText(document.body, args.description as string);
    await waitFor(() => expect(title).toBeVisible());
    await waitFor(() => expect(description).toBeVisible());

    // close button check
    const dialog = await findByRole(document.body, 'dialog');
    const closeButton = await within(dialog).findByRole('button', {
      name: 'Close',
    });
    expect(closeButton).toBeVisible();
    userEvent.click(closeButton);
    await waitFor(() => expect(dialog).not.toBeVisible());
  },
};

export const NoTitle: StoryObj<typeof Dialog> = {
  ...Template,
  args: {
    ...Template.args,
    title: undefined,
  },
  play: async ({ canvasElement }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open dialog');
    userEvent.click(openButton);

    // wait for visibility
    const dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // NO title check
    expect(dialog.getElementsByTagName('h2')).toHaveLength(0);
  },
};

export const NoCloseButton: StoryObj<typeof Dialog> = {
  ...Template,
  args: {
    ...Template.args,
    closeButtonIcon: false,
  },
  play: async ({ canvasElement }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open dialog');
    userEvent.click(openButton);

    // wait for visibility
    const dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // NO close button check
    expect(queryByRole(dialog, 'button', { name: 'Close' })).not.toBeInTheDocument();
  },
};

export const CustomContent: StoryObj<typeof Dialog> = {
  ...Template,
  args: {
    children: (
      <div>
        <p>Some custom content</p>
      </div>
    ),
    onClose: fn(),
  },
  play: async ({ canvasElement }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open dialog');
    userEvent.click(openButton);

    // wait for visibility
    const dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // custom content check
    const customParagraph = within(dialog).getByText('Some custom content');
    expect(customParagraph).toBeVisible();
  },
};

export const SimpleStateDialog: StoryObj<typeof Dialog> = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div>
        <Dialog open={open} onOpenChange={setOpen} title="Simple State Dialog">
          <div>Here is some content</div>
        </Dialog>
        <Button onClick={() => setOpen(true)}>Open simple state dialog</Button>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open simple state dialog');
    userEvent.click(openButton);

    // wait for visibility
    const dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // content check
    const customParagraph = within(dialog).getByText('Here is some content');
    expect(customParagraph).toBeVisible();

    // close button check
    const closeButton = await within(dialog).findByRole('button', {
      name: 'Close',
    });
    expect(closeButton).toBeVisible();
    userEvent.click(closeButton);
    await waitFor(() => expect(dialog).not.toBeVisible());
  },
};

export const AsyncDialog: StoryObj<typeof Dialog> = {
  render: () => {
    const [dialogRef, { open, ok, cancel, isOpen }] = useDialog();
    const [result, setResult] = React.useState('idle');

    const openDialog = React.useCallback(async () => {
      const { action } = await open();
      setResult(action);
    }, [open, setResult]);

    return (
      <div>
        <Dialog
          ref={dialogRef}
          title="Are you sure?"
          description="Actions have consequences, would you like to continue anyway?"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}
          >
            <Button aria-label="OK" onClick={ok} displayStatus="positive">
              OK
            </Button>
            <Button aria-label="Cancel" onClick={cancel} displayStatus="negative">
              Cancel
            </Button>
          </div>
        </Dialog>
        <Button onClick={openDialog}>Open confirmation dialog</Button>
        <div data-testid="dialog-result">{result}</div>
        <div data-testid="dialog-is-open">{isOpen ? 'open' : 'closed'}</div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    // expect open state closed
    const openState = within(canvasElement).getByTestId('dialog-is-open');
    expect(openState).toHaveTextContent('closed');

    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open confirmation dialog');
    userEvent.click(openButton);

    // wait for visibility
    let dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // expect open state open
    expect(openState).toHaveTextContent('open');

    // idle result check
    const result = within(canvasElement).getByTestId('dialog-result');
    expect(result).toHaveTextContent('idle');

    // ok button check
    const okButton = within(dialog).getByRole('button', { name: 'OK' });
    expect(okButton).toBeVisible();
    userEvent.click(okButton);
    await waitFor(() => expect(dialog).not.toBeVisible());
    await waitFor(() => expect(result).toHaveTextContent('ok'));

    // re-open dialog
    userEvent.click(openButton);
    dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // cancel button check
    const cancelButton = within(dialog).getByRole('button', { name: 'Cancel' });
    expect(cancelButton).toBeVisible();
    userEvent.click(cancelButton);
    await waitFor(() => expect(dialog).not.toBeVisible());
    await waitFor(() => expect(result).toHaveTextContent('cancel'));
  },
};

const ReusableDialogExample = React.forwardRef<DialogElement>((props, ref) => {
  const [dialogRef, { cancel }] = useDialog(ref);

  return (
    <Dialog ref={dialogRef} title="Reusable dialog">
      <div>This custom dialog can be used throughout the app just like an Armstrong dialog!</div>
      <Button onClick={cancel} style={{ marginTop: '16px' }} aria-label="Cancel">
        Cancel
      </Button>
    </Dialog>
  );
});

ReusableDialogExample.displayName = 'ReusableDialogExample';

export const ReusableDialog: StoryObj<typeof Dialog> = {
  render: () => {
    const [customDialogRef, { open }] = useDialog();

    return (
      <div>
        <ReusableDialogExample ref={customDialogRef} />
        <Button onClick={open}>Open reusable dialog</Button>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open reusable dialog');
    userEvent.click(openButton);

    // wait for visibility
    const dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // title on inner component check
    const title = await findByText(document.body, 'Reusable dialog');
    await waitFor(() => expect(title).toBeVisible());

    // custom cancel button check
    const closeButton = within(dialog).getByRole('button', { name: 'Cancel' });
    userEvent.click(closeButton);
    await waitFor(() => expect(dialog).not.toBeVisible());
  },
};

interface ILoginData {
  username: string;
  password: string;
}

const LoginDialog = React.forwardRef<DialogElement<ILoginData>>((props, ref) => {
  const [dialogRef, { ok }] = useDialog(ref);
  const { formProp, formState } = useForm<ILoginData>();

  const onSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      ok();
    },
    [ok]
  );

  return (
    <Dialog ref={dialogRef} title="Login" data={formState}>
      <form onSubmit={onSubmit}>
        <Input type="text" bind={formProp('username').bind()} placeholder="Username" />
        <Input type="password" bind={formProp('password').bind()} placeholder="Password" />
        <Button
          type="submit"
          aria-label="Login"
          disabled={!formState?.username || !formState?.password}
          style={{ marginTop: '16px' }}
        >
          Login
        </Button>
      </form>
    </Dialog>
  );
});

LoginDialog.displayName = 'LoginDialog';

export const ReusableFormDialog: StoryObj<typeof Dialog> = {
  render: () => {
    const [customDialogRef, { open }] = useDialog<ILoginData>();
    const [result, setResult] = React.useState('idle');

    const openDialog = React.useCallback(async () => {
      const { action, data } = await open();
      setResult(`${action}, username: ${data?.username}, password: ${data?.password}`);
    }, [open, setResult]);

    return (
      <div>
        <LoginDialog ref={customDialogRef} />
        <Button onClick={openDialog}>Open login dialog</Button>
        <div data-testid="dialog-result">{result}</div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    // constants
    const testUsername = 'test@example.com';
    const testPassword = 'test-password';

    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open login dialog');
    userEvent.click(openButton);

    // wait for visibility
    const dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // idle result check
    const result = within(canvasElement).getByTestId('dialog-result');
    expect(result).toHaveTextContent('idle');

    // fill inputs
    const username = within(dialog).getByPlaceholderText<HTMLInputElement>('Username');
    await userEvent.type(username, testUsername);
    const password = within(dialog).getByPlaceholderText<HTMLInputElement>('Password');
    await userEvent.type(password, testPassword);

    // click login
    const login = within(dialog).getByRole('button', { name: 'Login' });
    userEvent.click(login);

    // wait for dialog to close
    await waitFor(() => expect(dialog).not.toBeVisible());

    // check final result matches input
    await waitFor(() => expect(result).toHaveTextContent(`ok, username: ${testUsername}, password: ${testPassword}`));
  },
};
