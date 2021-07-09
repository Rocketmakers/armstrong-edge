import * as React from 'react';

import { Dialog, Form } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { CalendarInput } from './calendarInput.component';

/** metadata */

export default StoryUtils.createMeta(CalendarInput, 'Form', 'Calendar Input', {});

/** component template */

// const Template = StoryUtils.createTemplate(CalendarInput);

/** stories */

export const Default = () => {
  const { formProp } = Form.use({ date: undefined });

  return (
    <Dialog isOpen>
      <CalendarInput bind={formProp('date').bind() as any} />
    </Dialog>
  );
};

export const InputsOnly = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind() as any} displayMode="inputs" />;
};

export const CustomInputFormats = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput dayInputDisplayFormat="EEEE d" monthInputDisplayFormat="LLLL" bind={formProp('date').bind() as any} displayMode="inputs" />;
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
