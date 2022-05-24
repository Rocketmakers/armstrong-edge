import * as React from 'react';

import { Form, IconUtils } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { Button } from '../button';
import { CalendarInput } from './calendarInput.component';

/** metadata */

export default StoryUtils.createMeta(CalendarInput, 'Form', 'Calendar Input', {}, true);

/** component template */

// const Template = StoryUtils.createTemplate(CalendarInput);

/** stories */

export const Default = () => {
  const { formProp } = Form.use({ date: undefined });
  return <CalendarInput bind={formProp('date').bind()} />;
};

export const InputsOnly = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind()} displayMode="inputs" />;
};

export const CustomInputFormats = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput dayInputDisplayFormat="EEEE d" monthInputDisplayFormat="LLLL" bind={formProp('date').bind()} displayMode="inputs" />;
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
      <CalendarInput bind={formProp('date').bind()} inputOrder={['year', 'month', 'day']} formatString="dd-MM-yyyy" />
      <br />
      <CalendarInput bind={formProp('date2').bind()} inputOrder={['month', 'day', 'year']} formatString="dd-MM-yyyy" />
      <br />
      <CalendarInput
        bind={formProp('monthDate').bind()}
        inputOrder={['month', 'year']}
        displayMode="inputs"
        formatString="MM-yyyy"
        monthInputDisplayFormat="LLLL"
      />
      <br />
      <CalendarInput bind={formProp('month').bind()} inputOrder={['month']} displayMode="inputs" formatString="MM" monthInputDisplayFormat="LLLL" />
      <br />
      <CalendarInput bind={formProp('yearDate').bind()} inputOrder={['year']} displayMode="inputs" formatString="yyyy" />
      <br />
      <CalendarInput bind={formProp('backwards').bind()} inputOrder={['year', 'month', 'day']} formatString="dd-MM-yyyy" />
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

  return <CalendarInput bind={formProp('date').bind()} displayMode="calendar" />;
};

export const CustomWeekStart = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind()} weekdayStartIndex={1} />;
};

export const DontCloseOnSelect = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind()} closeCalendarOnDayClick={false} />;
};

export const Below = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind()} calendarPosition="below" />;
};

export const Above = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind()} calendarPosition="above" />;
};

export const KeepCalendarOpen = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind()} calendarPosition="below" keepCalendarOpen />;
};

export const Modal = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind()} calendarPosition="modal" />;
};

export const ModalCalendarOnly = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind()} calendarPosition="modal" displayMode="calendar" />;
};

export const CustomiseDropdown = () => {
  const { formProp } = Form.use({ date: undefined });

  return <CalendarInput bind={formProp('date').bind()} dropdownAlignment="right" dropdownPosition="above" />;
};

export const CustomOpenButton = () => {
  const { formProp } = Form.use({ date: undefined });

  return (
    <CalendarInput
      bind={formProp('date').bind()}
      openCalendarButton={(onClick) => (
        <Button minimalStyle onClick={onClick}>
          Open
        </Button>
      )}
    />
  );
};

export const CustomOpenButtonWithState = () => {
  const { formProp } = Form.use({ date: undefined });

  return (
    <CalendarInput
      bind={formProp('date').bind()}
      openCalendarButton={(onClick, isOpen) => (
        <Button onClick={onClick} minimalStyle>
          {isOpen ? 'Close' : 'Open'}
        </Button>
      )}
    />
  );
};

export const CustomPaginationButtons = () => {
  const { formProp } = Form.use({ date: undefined });

  return (
    <CalendarInput
      bind={formProp('date').bind()}
      backButton={(onClick) => (
        <Button leftIcon={IconUtils.getIconDefinition('LinearIcons', 'arrow-left')} minimalStyle onClick={onClick}>
          back
        </Button>
      )}
      forwardsButton={(onClick) => (
        <Button rightIcon={IconUtils.getIconDefinition('LinearIcons', 'arrow-right')} minimalStyle onClick={onClick}>
          next
        </Button>
      )}
    />
  );
};

export const RangeExample = () => {
  const { formProp, formState } = Form.use({ startDate: undefined, endDate: undefined });

  return (
    <div className="story-cols">
      <label>
        <CalendarInput
          displayMode="calendar"
          bind={formProp('startDate').bind()}
          calendarPosition="below"
          keepCalendarOpen
          max={formState.endDate}
          placeholder="start date"
          rangeTo={formState.endDate}
        />
      </label>
      <label>
        <CalendarInput
          placeholder="end date"
          displayMode="calendar"
          bind={formProp('endDate').bind()}
          calendarPosition="below"
          keepCalendarOpen
          min={formState.startDate}
          rangeTo={formState.startDate}
        />
      </label>
    </div>
  );
};
