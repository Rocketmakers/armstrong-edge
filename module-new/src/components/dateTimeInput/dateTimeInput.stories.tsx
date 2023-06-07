import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
// eslint-disable-next-line import/no-duplicates -- needed to prevent date-fns input lint fix bug
import { addDays, format } from 'date-fns';
// eslint-disable-next-line import/no-duplicates -- needed to prevent date-fns input lint fix bug
import { enGB } from 'date-fns/locale';
import * as React from 'react';

import { useForm } from '../../form';
import { DateTimeInput } from './dateTimeInput.component';

/** metadata */

export default {
  title: 'Form/DateTime Input',
  component: DateTimeInput,
  args: {},
} as Meta<typeof DateTimeInput>;

/** component template */

const Template: StoryObj<typeof DateTimeInput> = {
  render: args => {
    return <DateTimeInput {...args} />;
  },
};

/** stories */

export const Default: StoryObj<typeof DateTimeInput> = {
  ...Template,
  render: () => {
    const { formProp } = useForm({ date: '30/05/2023' });
    return <DateTimeInput bind={formProp('date').bind()} />;
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole('textbox');
    expect(input).toHaveValue('30/05/2023');
  },
};

export const Sizes: StoryObj<typeof DateTimeInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm({
      date: '',
      date2: '',
      date3: '',
    });

    return (
      <div>
        <h2>Small</h2>
        <DateTimeInput
          config={{ locale: enGB }}
          monthSelectVariant="dropdown"
          displaySize="small"
          bind={formProp('date').bind()}
          label="Small calendar input"
          required={true}
        />
        <h2>Medium</h2>
        <DateTimeInput
          config={{ locale: enGB }}
          monthSelectVariant="dropdown"
          displaySize="medium"
          bind={formProp('date2').bind()}
          label="Medium calendar input"
          required={true}
        />
        <h2>Large</h2>
        <DateTimeInput
          config={{ locale: enGB }}
          monthSelectVariant="dropdown"
          displaySize="large"
          bind={formProp('date3').bind()}
          label="Large calendar input"
          required={true}
        />
      </div>
    );
  },
};

export const ValidationError: StoryObj<typeof DateTimeInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm({ date: '' });
    return (
      <DateTimeInput
        bind={formProp('date').bind()}
        config={{ locale: enGB }}
        validationErrorMessages={['invalid date']}
        validationMode="both"
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => expect(canvas.getByText('invalid date')).toBeVisible());
  },
};

export const Disabled: StoryObj<typeof DateTimeInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm({ date: '' });
    return <DateTimeInput bind={formProp('date').bind()} config={{ locale: enGB }} disabled />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    expect(input).toBeDisabled();
  },
};

export const TimeOnly: StoryObj<typeof DateTimeInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm({ time: '10:00' });
    return <DateTimeInput bind={formProp('time').bind()} config={{ locale: enGB }} mode="time" />;
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole('textbox');
    expect(input).toHaveValue('10:00');
  },
};

export const LeftAlignVariant: StoryObj<typeof DateTimeInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm({ date: '' });
    return <DateTimeInput bind={formProp('date').bind()} config={{ locale: enGB }} monthSelectVariant="left-align" />;
  },
};

export const Dropdown: StoryObj<typeof DateTimeInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm({ date: '' });
    return <DateTimeInput bind={formProp('date').bind()} config={{ locale: enGB }} monthSelectVariant="dropdown" />;
  },
};

export const Range: StoryObj<typeof DateTimeInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm({
      startDate: '',
      endDate: '',
    });
    return (
      <DateTimeInput
        selectsRange
        startBind={formProp('startDate').bind()}
        endBind={formProp('endDate').bind()}
        config={{ locale: enGB }}
      />
    );
  },
};

export const MinMaxDays: StoryObj<typeof DateTimeInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm({
      date: '',
    });

    return (
      <DateTimeInput
        bind={formProp('date').bind()}
        config={{ locale: enGB, minDate: new Date(), maxDate: addDays(new Date(), 5) }}
        monthSelectVariant="left-align"
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    // max
    const overDateString = format(addDays(new Date(), 6), 'dd/MM/yyyy');
    userEvent.type(input, overDateString);
    userEvent.click(canvasElement);
    await waitFor(() => expect(input).not.toHaveValue(overDateString));
    // min
    const underDateString = format(addDays(new Date(), -1), 'dd/MM/yyyy');
    userEvent.type(input, underDateString);
    userEvent.click(canvasElement);
    await waitFor(() => expect(input).not.toHaveValue(underDateString));
  },
};

export const RangeValidation: StoryObj<typeof DateTimeInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm({
      startDate: '',
      endDate: '',
    });
    React.useEffect(() => {
      formProp('startDate').addValidationError('Invalid start date');
      formProp('endDate').addValidationError('Invalid end date');
      // eslint-disable-next-line react-hooks/exhaustive-deps -- test effect trigger
    }, []);
    return (
      <DateTimeInput
        selectsRange
        startBind={formProp('startDate').bind()}
        endBind={formProp('endDate').bind()}
        config={{ locale: enGB }}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() => expect(canvas.getByText('Invalid start date')));
    await waitFor(() => expect(canvas.getByText('Invalid end date')));
  },
};

export const Native: StoryObj<typeof DateTimeInput> = {
  ...Template,
  render: () => <DateTimeInput native={true} data-testid="native-date-test" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId('native-date-test');
    expect(input).toHaveAttribute('type', 'date');
  },
};
