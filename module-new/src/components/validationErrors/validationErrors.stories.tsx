import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import * as React from 'react';

import { ValidationErrors } from './validationErrors.component';

/** metadata */

export default {
  title: 'Components/ValidationErrors',
  component: ValidationErrors,
  args: { validationErrors: ['This field is required', 'This field requires 12 characters'] },
} as Meta<typeof ValidationErrors>;

/** component template */

const Template: StoryObj<typeof ValidationErrors> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- The type discriminator on ValidationErrors prevents storybook from spreading pure props on here without a cast
  render: (props: any) => <ValidationErrors {...props} />,
};

/** stories */

export const Default: StoryObj<typeof ValidationErrors> = {
  ...Template,
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText((args.validationErrors[0] as string) ?? ''));
    expect(canvas.getByText((args.validationErrors[1] as string) ?? ''));
  },
};

export const Icons: StoryObj<typeof ValidationErrors> = {
  ...Template,
  args: {
    ...Template.args,
    validationMode: 'icon',
  },
};
