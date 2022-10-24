import * as React from 'react';

import { StoryUtils } from '../../stories/storyUtils';
import { CalendarView } from './calendarView.component';

/** metadata */

export default StoryUtils.createMeta(CalendarView, 'Display', 'Calendar View', {}, true);

/** component template */

// const Template = StoryUtils.createTemplate(CalendarView);

/** stories */

export const Default = () => {
  return <CalendarView />;
};
export const CustomStartDay = () => {
  return <CalendarView weekdayStartIndex={1} />;
};
export const SelectedDate = () => {
  const initialDate = React.useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 3);
    return date;
  }, []);
  const [date, setDate] = React.useState(initialDate);

  return <CalendarView selectedDate={date} onDateClicked={setDate} />;
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

  return <CalendarView rangeTo={rangeTo} selectedDate={date} onDateClicked={setDate} />;
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

  return <CalendarView highlights={[{ date: highlightedDate }, { date: highlightedDate2 }]} />;
};
