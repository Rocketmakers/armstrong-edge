/** ******************************************************
 * Calendar View - Types file.
 * All of the types specifically associated with the form.
 * No real code in here (TypeScript's not real.)
 ******************************************************* */

import { Dates } from '../../utils/dates';

/** Defines the data required by the calendar view and associated with a single day */
export interface IDay {
  /** (Date) The date object representing the day in question */
  date: Date;
  /** (number) The day number in context of it's month, like "30th" June. */
  numberInMonth: number;
  /** (number) The 0-6 index of the days position within the week. Sunday = 0, Saturday = 6. */
  indexInWeek: number;
  /** (boolean) Is this the currently selected day within the calendar view? */
  isSelected: boolean;
  /** (boolean) Is this day currently disabled within the calendar view? */
  isDisabled: boolean;
  /** (boolean) Is this day the same as today based on the locale? */
  isToday: boolean;
  /** (boolean) Has this day been highlighted with a dot? */
  isHighlighted: boolean;
  /** (string) Optional class name for highlighted status marker */
  highlightedClassName?: string;
  /** (boolean) Is this date at the beginning of a two date range? */
  isRangeStart: boolean;
  /** (boolean) Is this date at the end of a two date range? */
  isRangeEnd: boolean;
  /** (boolean) Is this date in between the two dates in a two date range? */
  isRangeMiddle: boolean;
}

/** Defines the data required by the calendar view and associated with a single month  */
export interface IMonth {
  /** (string) The name of the month. e.g. March, April etc.  */
  name: string;
  /** (number) The 0-11 index of the months position within the year. January = 0, December = 11. */
  indexInYear: number;
  /** (boolean) Is this month currently disabled within the calendar view? */
  isDisabled: boolean;
}

/** Defines the data associated with a day that has been highlighted with a dot.  */
export interface ICalendarHighlight {
  /** The highlighted date */
  date: Dates.DateLike;
  /** (string) Optional class name for highlighted status marker */
  className?: string;
}

/** Defines the data associated with a day that has been highlighted with a dot, once the `DateLike` date type has been parsed into a real `Date` object.  */
export interface ICalendarHighlightParsed extends ICalendarHighlight {
  /** The `Date` object parsed from `DateLike` type */
  date: Date;
}
