import { Meta, StoryObj } from '@storybook/react';
import { addDays } from 'date-fns';
// comment needed to prevent date-fns input lint fix bug
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
    const { formProp } = useForm<{ date?: Date }>({ date: undefined });
    return (
      <div
        style={{
          width: '100%',
          height: '25rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CalendarInput bind={formProp('date').bind()} config={{ locale: enGB }} />
      </div>
    );
  },
};

export const Sizes: StoryObj<typeof CalendarInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm<{ date?: Date; date2?: Date; date3?: Date }>({
      date: undefined,
      date2: undefined,
      date3: undefined,
    });

    return (
      <div>
        <h2>Small</h2>
        <CalendarInput
          config={{ locale: enGB }}
          dateSelectionHeader="dropdown"
          displaySize="small"
          bind={formProp('date').bind()}
          content={<>Small calendar input</>}
          required={true}
        />
        <h2>Medium</h2>
        <CalendarInput
          config={{ locale: enGB }}
          dateSelectionHeader="dropdown"
          displaySize="medium"
          bind={formProp('date2').bind()}
          content={<>Medium calendar input</>}
          required={true}
        />
        <h2>Large</h2>
        <CalendarInput
          config={{ locale: enGB }}
          dateSelectionHeader="dropdown"
          displaySize="large"
          bind={formProp('date3').bind()}
          content={<>Large calendar input</>}
          required={true}
        />
      </div>
    );
  },
};

export const ValidationError: StoryObj<typeof CalendarInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm<{ date?: Date }>({ date: undefined });
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
};

export const Disabled: StoryObj<typeof CalendarInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm<{ date?: Date }>({ date: undefined });
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
};

/** @todo -- remove input border and icon when calendar only */
export const CalendarOnly: StoryObj<typeof CalendarInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm<{ date?: Date }>({ date: undefined });
    return <CalendarInput bind={formProp('date').bind()} config={{ locale: enGB, inline: true }} key="calendar-only" />;
  },
};

export const Swipe01: StoryObj<typeof CalendarInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm<{ date?: Date }>({ date: undefined });
    return <CalendarInput bind={formProp('date').bind()} config={{ locale: enGB }} dateSelectionHeader="swipe01" />;
  },
};

export const Swipe02: StoryObj<typeof CalendarInput> = Default;

export const Dropdown: StoryObj<typeof CalendarInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm<{ date?: Date }>({ date: undefined });
    return <CalendarInput bind={formProp('date').bind()} config={{ locale: enGB }} dateSelectionHeader="dropdown" />;
  },
};

export const Range: StoryObj<typeof CalendarInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm<{ startDate?: Date; endDate?: Date }>({
      startDate: undefined,
      endDate: undefined,
    });
    return (
      <CalendarInput
        selectsRange
        startBind={formProp('startDate').bind()}
        endBind={formProp('endDate').bind()}
        config={{ locale: enGB }}
        dateSelectionHeader="swipe01"
      />
    );
  },
};

export const MinMaxDays: StoryObj<typeof CalendarInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm<{ date?: Date }>({
      date: undefined,
    });

    return (
      <CalendarInput
        bind={formProp('date').bind()}
        config={{ locale: enGB, minDate: new Date(), maxDate: addDays(new Date(), 5) }}
        dateSelectionHeader="swipe01"
      />
    );
  },
};

export const RangeValidation: StoryObj<typeof CalendarInput> = {
  ...Template,

  render: () => {
    const { formProp } = useForm<{ startDate?: Date; endDate?: Date }>({
      startDate: undefined,
      endDate: undefined,
    });
    React.useEffect(() => {
      formProp('startDate').addValidationError('Invalid start date');
      formProp('endDate').addValidationError('Invalid end date');
    }, []);
    return (
      <CalendarInput
        selectsRange
        startBind={formProp('startDate').bind()}
        endBind={formProp('endDate').bind()}
        config={{ locale: enGB }}
        dateSelectionHeader="swipe01"
      />
    );
  },
};
