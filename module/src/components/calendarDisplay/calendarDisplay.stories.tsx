import * as React from 'react';

import { Calendar } from '../..';
import { StoryUtils } from '../../stories/storyUtils';
import { ErrorMessage } from '../errorMessage';
import { CalendarDisplay } from './calendarDisplay.component';

/** metadata */

export default StoryUtils.createMeta(CalendarDisplay, 'Display', 'Calendar Display', {});

/** component template */

// const Template = StoryUtils.createTemplate(CalendarDisplay);

/** stories */

export const Default = () => {
  const { days, months, years, monthYearFormProp, stepMonth } = Calendar.use();

  return (
    <>
      <CalendarDisplay
        days={days}
        months={months}
        years={years}
        currentMonthBinding={monthYearFormProp('viewingMonth').bind()}
        currentYearBinding={monthYearFormProp('viewingYear').bind()}
        onBackClicked={() => stepMonth('back')}
        onForwardClicked={() => stepMonth('forward')}
      />
      <ErrorMessage message="You probably don't want to use this component- use the CalendarView or CalendarInput instead" />
    </>
  );
};
export const CustomStartDay = () => {
  const { days, months, years, monthYearFormProp, stepMonth } = Calendar.use();

  return (
    <CalendarDisplay
      days={days}
      months={months}
      years={years}
      currentMonthBinding={monthYearFormProp('viewingMonth').bind()}
      currentYearBinding={monthYearFormProp('viewingYear').bind()}
      onBackClicked={() => stepMonth('back')}
      onForwardClicked={() => stepMonth('forward')}
      weekdayStartIndex={1}
    />
  );
};
export const SelectedDate = () => {
  const initialDate = React.useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 3);
    return date;
  }, []);
  const [date, setDate] = React.useState(initialDate);
  const { days, months, years, monthYearFormProp, stepMonth } = Calendar.use({ selectedDate: date });

  return (
    <CalendarDisplay
      days={days}
      months={months}
      years={years}
      currentMonthBinding={monthYearFormProp('viewingMonth').bind()}
      currentYearBinding={monthYearFormProp('viewingYear').bind()}
      onBackClicked={() => stepMonth('back')}
      onForwardClicked={() => stepMonth('forward')}
      onDayClicked={(d) => setDate(d.date)}
    />
  );
};
export const SelectedDateRange = () => {
  const initialDate = React.useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 3);
    return date;
  }, []);
  const rangeTo = React.useMemo(() => {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    return date;
  }, []);
  const [date, setDate] = React.useState(initialDate);
  const { days, months, years, monthYearFormProp, stepMonth } = Calendar.use({
    selectedDate: date,
    rangeTo,
  });

  return (
    <CalendarDisplay
      days={days}
      months={months}
      years={years}
      currentMonthBinding={monthYearFormProp('viewingMonth').bind()}
      currentYearBinding={monthYearFormProp('viewingYear').bind()}
      onBackClicked={() => stepMonth('back')}
      onForwardClicked={() => stepMonth('forward')}
      onDayClicked={(d) => setDate(d.date)}
    />
  );
};
export const Highlights = () => {
  const highlightedDate = React.useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 3);
    return date;
  }, []);
  const highlightedDate2 = React.useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 6);
    return date;
  }, []);
  const { days, months, years, monthYearFormProp, stepMonth } = Calendar.use({ highlights: [{ date: highlightedDate }, { date: highlightedDate2 }] });

  return (
    <CalendarDisplay
      days={days}
      months={months}
      years={years}
      currentMonthBinding={monthYearFormProp('viewingMonth').bind()}
      currentYearBinding={monthYearFormProp('viewingYear').bind()}
      onBackClicked={() => stepMonth('back')}
      onForwardClicked={() => stepMonth('forward')}
    />
  );
};

export const PastOnly = () => {
  const { days, months, years, monthYearFormProp, stepMonth } = Calendar.use({ max: new Date() });

  return (
    <>
      <CalendarDisplay
        days={days}
        months={months}
        years={years}
        currentMonthBinding={monthYearFormProp('viewingMonth').bind()}
        currentYearBinding={monthYearFormProp('viewingYear').bind()}
        onBackClicked={() => stepMonth('back')}
        onForwardClicked={() => stepMonth('forward')}
      />
    </>
  );
};
