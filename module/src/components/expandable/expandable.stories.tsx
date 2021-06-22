import * as React from 'react';

import { Button } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { Expandable } from './expandable.component';

/** metadata */

export default StoryUtils.createMeta(Expandable, 'Layout', 'Expandable', {});

/** component template */

// const Template = StoryUtils.createTemplate(Expandable);

/** stories */

export const Default = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Open/close</Button>

      <Expandable isOpen={open}>
        <div style={{ width: '200px', height: '150px', backgroundColor: 'red' }}></div>
      </Expandable>
    </>
  );
};
export const Horizontal = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Open/close</Button>

      <Expandable isOpen={open} direction="horizontal">
        <div style={{ width: '200px', height: '150px', backgroundColor: 'red' }}></div>
      </Expandable>
    </>
  );
};
