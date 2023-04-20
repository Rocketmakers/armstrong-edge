import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Button } from '../button';
import { ArmstrongProvider } from '../provider';
import { Toast } from './toast.component';
import { IToast } from './toast.context';
import { useToast } from './toast.hooks';

/** metadata */

export default {
  title: 'Modals/Toast',
  component: Toast,
} as Meta<typeof Toast>;

/** component template */

const demoToast: IToast = { title: 'Here is a toast!', description: 'Here is the description for my toast' };

const Template: StoryObj<typeof Toast> = {
  decorators: [
    Story => (
      <ArmstrongProvider>
        <Story />
      </ArmstrongProvider>
    ),
  ],
  render: () => {
    const dispatch = useToast();

    return <Button onClick={() => dispatch(demoToast)}>Send a toast</Button>;
  },
};

/** stories */

export const Default: StoryObj<typeof Toast> = {
  ...Template,
};

export const TopLeft: StoryObj<typeof Toast> = {
  ...Template,
  decorators: [
    Story => (
      <ArmstrongProvider config={{ toastPosition: 'top-left' }}>
        <Story />
      </ArmstrongProvider>
    ),
  ],
};

export const TopRight: StoryObj<typeof Toast> = {
  ...Template,
  decorators: [
    Story => (
      <ArmstrongProvider config={{ toastPosition: 'top-right' }}>
        <Story />
      </ArmstrongProvider>
    ),
  ],
};

export const BottomLeft: StoryObj<typeof Toast> = {
  ...Template,
  decorators: [
    Story => (
      <ArmstrongProvider config={{ toastPosition: 'bottom-left' }}>
        <Story />
      </ArmstrongProvider>
    ),
  ],
};

export const CustomContent: StoryObj<typeof Toast> = {
  ...Template,
  render: () => {
    const dispatch = useToast();

    return (
      <Button onClick={() => dispatch({ title: 'Toast with a button!', content: <Button>Custom button</Button> })}>
        Send a toast
      </Button>
    );
  },
};
