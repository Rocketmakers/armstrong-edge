import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import * as React from 'react';

import { useForm } from '../../hooks/form';
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
  render: args => {
    const [dialogOpen, setDialogOpen] = React.useState(false);

    return (
      <>
        <Button testId="dialog-opener" onClick={() => setDialogOpen(true)}>
          Open dialog
        </Button>
        <Dialog testId="dialog-component" {...args} open={dialogOpen} onOpenChange={setDialogOpen} />
      </>
    );
  },
};

const testTitle = 'Test Dialog';
const testDesc = 'Hello, I am a test dialog';

export const Default: StoryObj<typeof Dialog> = {
  ...Template,
  args: {
    title: testTitle,
    description: testDesc,
  },
  play: async ({ canvasElement }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId('dialog-opener');
    userEvent.click(openButton);

    // visibility check
    const body = within(document.body);
    await waitFor(() => expect(body.getByTestId('dialog-component')).toBeVisible());
    const dialog = body.getByTestId('dialog-component');

    // title check
    const headings = dialog.getElementsByTagName('h2');
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(testTitle);

    // description check
    const paragraphs = dialog.getElementsByTagName('p');
    expect(paragraphs).toHaveLength(1);
    expect(paragraphs[0]).toHaveTextContent(testDesc);

    // close button check
    const closeButtons = dialog.getElementsByTagName('button');
    expect(closeButtons).toHaveLength(1);
    expect(closeButtons[0].getElementsByTagName('svg')).toHaveLength(1);
    userEvent.click(closeButtons[0]);
    await waitFor(() => expect(dialog).not.toBeVisible());
  },
};

export const NoTitle: StoryObj<typeof Dialog> = {
  ...Template,
  args: {
    description: testDesc,
  },
  play: async ({ canvasElement }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId('dialog-opener');
    userEvent.click(openButton);

    // visibility check
    const body = within(document.body);
    await waitFor(() => expect(body.getByTestId('dialog-component')).toBeVisible());
    const dialog = body.getByTestId('dialog-component');

    // NO title check
    const headings = dialog.getElementsByTagName('h2');
    expect(headings).toHaveLength(0);
  },
};

export const NoCloseButton: StoryObj<typeof Dialog> = {
  ...Template,
  args: {
    title: testTitle,
    description: testDesc,
    closeButtonIcon: false,
  },
  play: async ({ canvasElement }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId('dialog-opener');
    userEvent.click(openButton);

    // visibility check
    const body = within(document.body);
    await waitFor(() => expect(body.getByTestId('dialog-component')).toBeVisible());
    const dialog = body.getByTestId('dialog-component');

    // NO close button check
    const closeButtons = dialog.getElementsByTagName('button');
    expect(closeButtons).toHaveLength(0);
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
  },
  play: async ({ canvasElement }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId('dialog-opener');
    userEvent.click(openButton);

    // visibility check
    const body = within(document.body);
    await waitFor(() => expect(body.getByTestId('dialog-component')).toBeVisible());
    const dialog = body.getByTestId('dialog-component');

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
        <Dialog open={open} onOpenChange={setOpen} title="Simple State Dialog" testId="dialog-component">
          <div>Here is some content</div>
        </Dialog>
        <Button testId="dialog-opener" onClick={() => setOpen(true)}>
          Open simple state dialog
        </Button>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId('dialog-opener');
    userEvent.click(openButton);

    // visibility check
    const body = within(document.body);
    await waitFor(() => expect(body.getByTestId('dialog-component')).toBeVisible());
    const dialog = body.getByTestId('dialog-component');

    // content check
    const customParagraph = within(dialog).getByText('Here is some content');
    expect(customParagraph).toBeVisible();

    // close button check
    const closeButtons = dialog.getElementsByTagName('button');
    expect(closeButtons).toHaveLength(1);
    expect(closeButtons[0].getElementsByTagName('svg')).toHaveLength(1);
    userEvent.click(closeButtons[0]);
    await waitFor(() => expect(dialog).not.toBeVisible());
  },
};

export const AsyncDialog: StoryObj<typeof Dialog> = {
  render: () => {
    const [dialogRef, { open, ok, cancel }] = useDialog();
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
          testId="dialog-component"
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Button testId="ok-button" onClick={ok} displayStatus="positive">
              OK
            </Button>
            <Button testId="cancel-button" onClick={cancel} displayStatus="negative">
              Cancel
            </Button>
          </div>
        </Dialog>
        <Button testId="dialog-opener" onClick={openDialog}>
          Open confirmation dialog
        </Button>
        <div data-testid="dialog-result">{result}</div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId('dialog-opener');
    userEvent.click(openButton);

    // visibility check
    const body = within(document.body);
    await waitFor(() => expect(body.getByTestId('dialog-component')).toBeVisible());
    let dialog = body.getByTestId('dialog-component');

    // idle result check
    const result = within(canvasElement).getByTestId('dialog-result');
    expect(result).toHaveTextContent('idle');

    // ok button check
    const okButton = within(dialog).getByTestId('ok-button');
    expect(okButton).toBeVisible();
    userEvent.click(okButton);
    await waitFor(() => expect(dialog).not.toBeVisible());
    await waitFor(() => expect(result).toHaveTextContent('ok'));

    // re-open dialog
    userEvent.click(openButton);
    await waitFor(() => expect(body.getByTestId('dialog-component')).toBeVisible());
    dialog = body.getByTestId('dialog-component');

    // cancel button check
    const cancelButton = within(dialog).getByTestId('cancel-button');
    expect(cancelButton).toBeVisible();
    userEvent.click(cancelButton);
    await waitFor(() => expect(dialog).not.toBeVisible());
    await waitFor(() => expect(result).toHaveTextContent('cancel'));
  },
};

const ReusableDialogExample = React.forwardRef<DialogElement>((props, ref) => {
  const [dialogRef, { cancel }] = useDialog(ref);

  return (
    <Dialog ref={dialogRef} title="Reusable dialog" testId="reusable-dialog">
      <div>This custom dialog can be used throughout the app just like an Armstrong dialog!</div>
      <Button onClick={cancel} style={{ marginTop: '16px' }} data-testId="reusable-dialog-cancel">
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
        <Button testId="dialog-opener" onClick={open}>
          Open reusable dialog
        </Button>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId('dialog-opener');
    userEvent.click(openButton);

    // visibility check
    const body = within(document.body);
    await waitFor(() => expect(body.getByTestId('reusable-dialog')).toBeVisible());
    const dialog = body.getByTestId('reusable-dialog');

    // title check
    const headings = dialog.getElementsByTagName('h2');
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent('Reusable dialog');

    // custom cancel button check
    const closeButton = within(dialog).getByTestId('reusable-dialog-cancel');
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
    <Dialog ref={dialogRef} title="Login" data={formState} testId="dialog-component">
      <form onSubmit={onSubmit}>
        <Input type="text" bind={formProp('username').bind()} placeholder="Username" testId="username-input" />
        <Input type="password" bind={formProp('password').bind()} placeholder="Password" testId="password-input" />
        <Button
          type="submit"
          testId="login-button"
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
        <Button testId="dialog-opener" onClick={openDialog}>
          Open login dialog
        </Button>
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
    const openButton = canvas.getByTestId('dialog-opener');
    userEvent.click(openButton);

    // visibility check
    const body = within(document.body);
    await waitFor(() => expect(body.getByTestId('dialog-component')).toBeVisible());
    const dialog = body.getByTestId('dialog-component');

    // idle result check
    const result = within(canvasElement).getByTestId('dialog-result');
    expect(result).toHaveTextContent('idle');

    // fill inputs
    const username = within(dialog).getByTestId<HTMLInputElement>('username-input');
    userEvent.type(username, testUsername);
    const password = within(dialog).getByTestId<HTMLInputElement>('password-input');
    userEvent.type(password, testPassword);

    // click login
    const login = within(dialog).getByTestId('login-button');
    userEvent.click(login);

    // wait for dialog to close
    await waitFor(() => expect(dialog).not.toBeVisible());

    // check final result matches input
    await waitFor(() => expect(result).toHaveTextContent(`ok, username: ${testUsername}, password: ${testPassword}`));
  },
};
