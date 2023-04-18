import { Meta, StoryObj } from '@storybook/react';
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
        <Button onClick={() => setDialogOpen(true)}>Open dialog</Button>
        <Dialog {...args} open={dialogOpen} onOpenChange={setDialogOpen} />
      </>
    );
  },
};

export const Default: StoryObj<typeof Dialog> = {
  ...Template,
  args: {
    title: 'Test Dialog',
    description: 'Hello, I am a test dialog',
  },
};

export const NoTitle: StoryObj<typeof Dialog> = {
  ...Template,
  args: {
    description: 'Hello, I am a test dialog',
  },
};

export const NoCloseButton: StoryObj<typeof Dialog> = {
  ...Template,
  args: {
    title: 'Test Dialog',
    description: 'Hello, I am a test dialog',
    closeButtonIcon: false,
  },
};

export const CustomContent: StoryObj<typeof Dialog> = {
  ...Template,
  args: {
    children: (
      <div>
        <p>Some custom list content</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    ),
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
};

export const AsyncDialog: StoryObj<typeof Dialog> = {
  render: () => {
    const [dialogRef, { open, ok, cancel }] = useDialog();

    const openDialog = React.useCallback(async () => {
      const { action } = await open();
      if (action === 'ok') {
        // eslint-disable-next-line no-alert -- I just want to show something as a demonstration
        alert('Dialog confirmed!');
      }
    }, [open]);

    return (
      <div>
        <Dialog
          ref={dialogRef}
          title="Are you sure?"
          description="Actions have consequences, would you like to continue anyway?"
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Button onClick={ok} displayStatus="positive">
              OK
            </Button>
            <Button onClick={cancel} displayStatus="negative">
              Cancel
            </Button>
          </div>
        </Dialog>
        <Button onClick={openDialog}>Open confirmation dialog</Button>
      </div>
    );
  },
};

const ReusableDialogExample = React.forwardRef<DialogElement>((props, ref) => {
  const [dialogRef, { cancel }] = useDialog(ref);

  return (
    <Dialog ref={dialogRef} title="Reusable dialog">
      <div>This custom dialog can be used throughout the app just like an Armstrong dialog!</div>
      <Button onClick={cancel} style={{ marginTop: '16px' }}>
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
};

interface ILoginData {
  username: string;
  password: string;
}

export const LoginDialog = React.forwardRef<DialogElement<ILoginData>>((props, ref) => {
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
        <Button type="submit" disabled={!formState?.username || !formState?.password} style={{ marginTop: '16px' }}>
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

    const openDialog = React.useCallback(async () => {
      const { action, data } = await open();
      if (action === 'ok') {
        // eslint-disable-next-line no-alert -- I just want to show something as a demonstration
        alert(`Logging in as "${data?.username}" with password: ${data?.password}`);
      }
    }, [open]);

    return (
      <div>
        <LoginDialog ref={customDialogRef} />
        <Button onClick={openDialog}>Open login dialog</Button>
      </div>
    );
  },
};
