import * as React from 'react';

import { Button, useConfirmationDialog, useDispatchToast } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { IconUtils } from '../icon';
import { Dialog } from './dialog.component';

/** metadata */

export default StoryUtils.createMeta(Dialog, 'Layout', 'Dialog', {});

/** component template */

// const Template = StoryUtils.createTemplate(Dialog);

/** stories */

export const Default = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>open Dialog</Button>

      <Dialog isOpen={open} onOpenChange={setOpen}>
        I'm in a Dialog
      </Dialog>
    </>
  );
};

export const WithTitle = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>open Dialog</Button>

      <Dialog isOpen={open} onOpenChange={setOpen} title="I'm the dialog">
        I'm in a Dialog
      </Dialog>
    </>
  );
};

export const WithTitleIcon = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>open Dialog</Button>

      <Dialog isOpen={open} onOpenChange={setOpen} title="I'm the dialog" titleIcon={IconUtils.getIconDefinition('Icomoon', 'stats-bars5')}>
        I'm in a Dialog
      </Dialog>
    </>
  );
};

export const CustomCloseIcon = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>open Dialog</Button>

      <Dialog isOpen={open} onOpenChange={setOpen} title="I'm the dialog" closeButtonIcon={IconUtils.getIconDefinition('Icomoon', 'station')}>
        I'm in a Dialog
      </Dialog>
    </>
  );
};

export const ConfirmationDialog = () => {
  const dispatch = useDispatchToast();

  // Dialog config passed into the hook can be overridden on a per-property basis when the open method is called.
  const [open] = useConfirmationDialog({
    content: 'As an example, this content will be overridden when the dialog is called',
    buttons: { yes: 'OK', no: 'Cancel' },
  });

  const onClick = React.useCallback(async () => {
    const okToContinue = await open({ content: 'Are you sure you want to do that thing?' });
    if (okToContinue) {
      dispatch({ content: 'Thing done successfully', type: 'success' });
    }
  }, [open, dispatch]);

  return <Button onClick={onClick}>Do a thing</Button>;
};

export const HandleClose = () => {
  const [open, setOpen] = React.useState(false);

  const [openConfirmationDialog] = useConfirmationDialog({ content: 'Are you sure you want to close this dialog?' });

  return (
    <>
      <Button onClick={() => setOpen(true)}>open dialog</Button>

      <Dialog
        isOpen={open}
        onOpenChange={setOpen}
        onClose={() => {
          void openConfirmationDialog();
        }}
      >
        Try and close me
      </Dialog>
    </>
  );
};
