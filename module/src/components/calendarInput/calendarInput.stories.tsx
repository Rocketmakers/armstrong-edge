import * as React from 'react';

import { Form } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { CalendarInput } from './calendarInput.component';

/** metadata */

export default StoryUtils.createMeta(CalendarInput, 'Form', 'Calendar Input', {}, true);

/** component template */

// const Template = StoryUtils.createTemplate(CalendarInput);

/** stories */

export const Default = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind() as any} />;
};

export const InputsOnly = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind() as any} displayMode="inputs" />;
};

export const CustomInputFormats = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput dayInputDisplayFormat="EEEE d" monthInputDisplayFormat="LLLL" bind={formProp('date').bind() as any} displayMode="inputs" />;
};

export const CustomInputOrder = () => {
  const { formProp, formState } = Form.use({
    date: undefined,
    date2: undefined,
    monthDate: undefined,
    month: undefined,
    yearDate: undefined,
    backwards: undefined,
  });

  return (
    <>
      <CalendarInput bind={formProp('date').bind() as any} inputOrder={['year', 'month', 'day']} formatString="dd-MM-yyyy" />
      <br />
      <CalendarInput bind={formProp('date2').bind() as any} inputOrder={['month', 'day', 'year']} formatString="dd-MM-yyyy" />
      <br />
      <CalendarInput
        bind={formProp('monthDate').bind() as any}
        inputOrder={['month', 'year']}
        displayMode="inputs"
        formatString="MM-yyyy"
        monthInputDisplayFormat="LLLL"
      />
      <br />
      <CalendarInput
        bind={formProp('month').bind() as any}
        inputOrder={['month']}
        displayMode="inputs"
        formatString="MM"
        monthInputDisplayFormat="LLLL"
      />
      <br />
      <CalendarInput bind={formProp('yearDate').bind() as any} inputOrder={['year']} displayMode="inputs" formatString="yyyy" />
      <br />
      <CalendarInput bind={formProp('backwards').bind() as any} inputOrder={['year', 'month', 'day']} formatString="dd-MM-yyyy" />
      <div className="bound-value">
        <p>1 (UK) - {formState.date}</p>
        <p>2 (US) - {formState.date2}</p>
        <p>3 (month) - {formState.monthDate}</p>
        <p>4 (just month) - {formState.month}</p>
        <p>5 (year) - {formState.yearDate}</p>
        <p>6 (backwards) - {formState.backwards}</p>
      </div>
    </>
  );
};

export const CalendarOnly = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind() as any} displayMode="calendar" />;
};

export const CustomWeekStart = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind() as any} weekdayStartIndex={1} />;
};

export const DontCloseOnSelect = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind() as any} closeCalendarOnDayClick={false} />;
};

export const Below = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind() as any} calendarPosition="below" />;
};

export const Above = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind() as any} calendarPosition="above" />;
};

export const KeepCalendarOpen = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind() as any} calendarPosition="below" keepCalendarOpen />;
};

export const Modal = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind() as any} calendarPosition="modal" />;
};

export const RangeExample = () => {
  const { formProp, formState } = Form.use({ startDate: undefined as string, endDate: undefined as string });

  return (
    <div className="story-cols">
      <label>
        <CalendarInput
          displayMode="calendar"
          bind={formProp('startDate').bind() as any}
          calendarPosition="below"
          keepCalendarOpen
          max={formState.endDate}
          placeholder="start date"
          rangeTo={formProp('endDate').get()}
        />
      </label>
      <label>
        <CalendarInput
          placeholder="end date"
          displayMode="calendar"
          bind={formProp('endDate').bind() as any}
          calendarPosition="below"
          keepCalendarOpen
          min={formState.startDate}
          rangeTo={formProp('startDate').get()}
        />
      </label>
    </div>
  );
};
