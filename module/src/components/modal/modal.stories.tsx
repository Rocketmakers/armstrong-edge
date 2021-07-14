import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { Button } from '../button';
import { Modal } from './modal.component';

/** metadata */

export default StoryUtils.createMeta(Modal, 'Layout', 'Modal', {});

/** component template */

// const Template = StoryUtils.createTemplate(Modal);

/** stories */

export const Default = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>open modal</Button>

      <Modal isOpen={open} onOpenChange={setOpen}>
        I'm in a modal
      </Modal>
    </>
  );
};

export const DarkenBackground = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>open modal</Button>

      <Modal darkenBackground isOpen={open} onOpenChange={setOpen}>
        I'm in a modal
      </Modal>
    </>
  );
};

export const NestedModals = () => {
  const [open, setOpen] = React.useState(false);
  const [nestedOpen, setNestedOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>open modal</Button>

      <Modal isOpen={open} onOpenChange={setOpen}>
        <p>I'm the first modal</p>
        <Button onClick={() => setNestedOpen(true)}>open the next</Button>

        <Modal isOpen={nestedOpen} onOpenChange={setNestedOpen}>
          <p>I'm the next modal</p>
        </Modal>
      </Modal>
    </>
  );
};

export const CloseOnWindowBlur = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>open modal</Button>

      <Modal isOpen={open} onOpenChange={setOpen} closeOnBackgroundClick={false} closeOnWindowBlur>
        Click outside the browser window to close
      </Modal>
    </>
  );
};
