import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
// eslint-disable-next-line import/no-duplicates -- needed to prevent date-fns input lint fix bug
import { addDays, format } from 'date-fns';
// eslint-disable-next-line import/no-duplicates -- needed to prevent date-fns input lint fix bug
import { enGB } from 'date-fns/locale';
import * as React from 'react';

import { useForm } from '../../hooks/form';
import { CalendarInput } from './calendarInput.component';

/** metadata */

export default {
  title: 'Form/Calendar',
  component: CalendarInput,
  args: {},
} as Meta<typeof CalendarInput>;

/** component template */

const Template: StoryObj<typeof CalendarInput> = {
  render: args => {
    return (
      <div
        style={{
          width: '100%',
          height: '25rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CalendarInput {...args} />
      </div>
    );
  },
};

/** stories */

export const Default: StoryObj<typeof CalendarInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm({ date: '30/05/2023' });
    return (
      <div
        style={{
          width: '100%',
          height: '25rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CalendarInput bind={formProp('date').bind()} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole('textbox');
    expect(input).toHaveValue('30/05/2023');
  },
};

export const Sizes: StoryObj<typeof CalendarInput> = {
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
        <CalendarInput
          config={{ locale: enGB }}
          variant="dropdown"
          displaySize="small"
          bind={formProp('date').bind()}
          label="Small calendar input"
          required={true}
        />
        <h2>Medium</h2>
        <CalendarInput
          config={{ locale: enGB }}
          variant="dropdown"
          displaySize="medium"
          bind={formProp('date2').bind()}
          label="Medium calendar input"
          required={true}
        />
        <h2>Large</h2>
        <CalendarInput
          config={{ locale: enGB }}
          variant="dropdown"
          displaySize="large"
          bind={formProp('date3').bind()}
          label="Large calendar input"
          required={true}
        />
      </div>
    );
  },
};

export const ValidationError: StoryObj<typeof CalendarInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm({ date: '' });
    return (
      <div
        style={{
          width: '100%',
          height: '25rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CalendarInput
          bind={formProp('date').bind()}
          config={{ locale: enGB }}
          validationErrorMessages={['invalid date']}
          validationMode="both"
        />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() => {
      expect(canvas.getByText('invalid date'));
    });
  },
};

export const Disabled: StoryObj<typeof CalendarInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm({ date: '' });
    return (
      <div
        style={{
          width: '100%',
          height: '25rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CalendarInput bind={formProp('date').bind()} config={{ locale: enGB }} disabled />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const input = await canvasElement.getElementsByTagName('input')[0];
    const dateString = format(new Date(), 'dd/MM/yyyy');
    userEvent.type(input, dateString);
    userEvent.click(canvasElement);
    await waitFor(() => {
      expect(input).not.toHaveValue(dateString);
    });
  },
};

export const TimeOnly: StoryObj<typeof CalendarInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm({ date: '' });
    return <CalendarInput bind={formProp('date').bind()} config={{ locale: enGB }} variant="time" />;
  },
};

export const Swipe01: StoryObj<typeof CalendarInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm({ date: '' });
    return <CalendarInput bind={formProp('date').bind()} config={{ locale: enGB }} variant="swipe01" />;
  },
};

export const Swipe02: StoryObj<typeof CalendarInput> = Default;

export const Dropdown: StoryObj<typeof CalendarInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm({ date: '' });
    return <CalendarInput bind={formProp('date').bind()} config={{ locale: enGB }} variant="dropdown" />;
  },
};

export const Range: StoryObj<typeof CalendarInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm({
      startDate: '',
      endDate: '',
    });
    return (
      <CalendarInput
        selectsRange
        startBind={formProp('startDate').bind()}
        endBind={formProp('endDate').bind()}
        config={{ locale: enGB }}
      />
    );
  },
};

export const MinMaxDays: StoryObj<typeof CalendarInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm({
      date: '',
    });

    return (
      <CalendarInput
        bind={formProp('date').bind()}
        config={{ locale: enGB, minDate: new Date(), maxDate: addDays(new Date(), 5) }}
        variant="swipe01"
      />
    );
  },
  play: async ({ canvasElement }) => {
    const input = await canvasElement.getElementsByTagName('input')[0];
    // max
    const overDateString = format(addDays(new Date(), 6), 'dd/MM/yyyy');
    userEvent.type(input, overDateString);
    userEvent.click(canvasElement);
    await waitFor(() => {
      expect(input).not.toHaveValue(overDateString);
    });
    // min
    const underDateString = format(addDays(new Date(), -1), 'dd/MM/yyyy');
    userEvent.type(input, underDateString);
    userEvent.click(canvasElement);
    await waitFor(() => {
      expect(input).not.toHaveValue(underDateString);
    });
  },
};

export const RangeValidation: StoryObj<typeof CalendarInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm({
      startDate: '',
      endDate: '',
    });
    React.useEffect(() => {
      formProp('startDate').addValidationError('Invalid start date');
      formProp('endDate').addValidationError('Invalid end date');
      // eslint-disable-next-line react-hooks/exhaustive-deps -- effect trigger
    }, []);
    return (
      <CalendarInput
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
