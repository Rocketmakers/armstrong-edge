import * as React from 'react';

import { Button, useConfirmationDialog } from '../..';
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

export const HandleClose = () => {
  const [open, setOpen] = React.useState(false);

  const [openConfirmationDialog] = useConfirmationDialog({ content: 'Are you sure you want to close this dialog?' });

  return (
    <>
      <Button onClick={() => setOpen(true)}>open dialog</Button>

      <Dialog isOpen={open} onOpenChange={setOpen} onClose={() => openConfirmationDialog()}>
        Try and close me
      </Dialog>
    </>
  );
};
