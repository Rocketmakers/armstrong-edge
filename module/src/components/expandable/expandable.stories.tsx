import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Button } from '../button';
import { Expandable } from './expandable.component';

/** metadata */

export default {
  title: 'Layout/Expandable',
  component: Expandable,
} as Meta<typeof Expandable>;

/** stories */

export const Default: StoryObj<typeof Expandable> = {
  render: args => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button onClick={() => setOpen(!open)}>Open/close</Button>

        <Expandable {...args} isOpen={open}>
          <div style={{ width: '200px', height: '150px', backgroundColor: 'red' }}></div>
        </Expandable>
      </>
    );
  },
  args: {
    direction: 'vertical',
  },
};
