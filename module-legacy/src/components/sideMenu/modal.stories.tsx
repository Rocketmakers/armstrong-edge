import * as React from 'react';

import { Button } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { SideMenu } from './sideMenu.component';

/** metadata */

export default StoryUtils.createMeta(SideMenu, 'Layout', 'Side Menu', {});

/** component template */

// const Template = StoryUtils.createTemplate(SideMenu);

/** stories */

export const Default = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>open side menu</Button>

      <SideMenu isOpen={open} onOpenChange={setOpen}>
        I'm in a side menu
      </SideMenu>
    </>
  );
};

export const OnRight = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>open side menu</Button>

      <SideMenu side="right" isOpen={open} onOpenChange={setOpen}>
        I'm in a side menu
      </SideMenu>
    </>
  );
};
