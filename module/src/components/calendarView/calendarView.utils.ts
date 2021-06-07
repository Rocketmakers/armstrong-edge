/** ******************************************************
 * Calendar View - Utilities file.
 * A set of helper functions to support the calendar view logic.
 ******************************************************* */

import { addDays, addMonths, format, getDaysInMonth, isAfter, isBefore, isSameDay, Locale, startOfWeek, startOfYear } from 'date-fns';

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

/**
 * Returns an array of days to be displayed in the calendar view.
 * - Returned days include all necessary display characteristics and statuses.
 * - Receives config and sets up the days accordingly.
 * @param forYear (number) The year of the month to return days for. e.g. `2021`.
 * @param selectedDate (Date) The current date prop passed to the calendar view (parsed to a `Date` object from a `DateLike`).
 * @param min (Date) The optional `min` date prop passed to the calendar view (parsed to a `Date` object from a `DateLike`).
 * @param max (Date) The optional `max` date prop passed to the calendar view (parsed to a `Date` object from a `DateLike`).
 * @param rangeTo (Date) The optional `rangeTo` date prop passed to the calendar view (parsed to a `Date` object from a `DateLike`). Creates a range from the `selectedDate` to this date.
 * @param highlights An optional array of dates to highlight with dots (all dates are parsed to a `Date` object from a `DateLike`)
 * @returns An array of day objects containing all necessary display characteristics and statuses.
 */
export function getDays(
  forMonth: number,
  forYear: number,
  selectedDate: Date,
  min?: Date,
  max?: Date,
  rangeTo?: Date,
  highlights?: ICalendarHighlightParsed[]
): IDay[] {
  // Create first date in month and get total day count.
  const forDate = new Date(forYear, forMonth, 1);
  const dayCount = getDaysInMonth(forDate);

  // Define range dates from optional args.
  let rangeStart: Date | undefined;
  let rangeEnd: Date | undefined;
  if (rangeTo) {
    if (isBefore(selectedDate, rangeTo)) {
      rangeStart = selectedDate;
      rangeEnd = rangeTo;
    } else {
      rangeStart = rangeTo;
      rangeEnd = selectedDate;
    }
  }

  // Loop the number of days in the month and create a day object for each one.
  const days: IDay[] = [];
  for (let i = 0; i < dayCount; i += 1) {
    // The day object for this loop iteration.
    const currentDay = i === 0 ? forDate : addDays(forDate, i);
    // Is this day highlighted?
    const highlight = highlights?.find((h) => isSameDay(currentDay, h.date));
    days.push({
      date: currentDay,
      numberInMonth: i + 1,
      indexInWeek: Number(format(currentDay, 'e')) - 1,
      isSelected: isSameDay(currentDay, selectedDate),
      isDisabled: (!!min && isBefore(currentDay, min)) || (!!max && isAfter(currentDay, max)),
      isToday: isSameDay(currentDay, new Date()),
      isRangeStart: !!rangeStart && isSameDay(currentDay, rangeStart),
      isRangeEnd: !!rangeEnd && isSameDay(currentDay, rangeEnd),
      isRangeMiddle: !!rangeStart && !!rangeEnd && isAfter(currentDay, rangeStart) && isBefore(currentDay, rangeEnd),
      isHighlighted: !!highlight,
      highlightedClassName: highlight?.className,
    });
  }
  return days;
}

/**
 * Returns a list of months to display within the month select of the calendar view.
 * - Returned months include all necessary display characteristics and statuses.
 * - Receives config and sets up the months accordingly.
 * @param forYear (number) The year to return the months for. e.g. `2021`.
 * @param min (Date) The optional `min` date prop passed to the calendar view (parsed to a `Date` object from a `DateLike`).
 * @param max (Date) The optional `max` date prop passed to the calendar view (parsed to a `Date` object from a `DateLike`).
 * @param locale An optional locale to use when formatting the strings for the months, will fall back to system default locale of `en-GB`.
 * @returns An array of month objects containing all necessary display characteristics and statuses.
 */
export function getMonths(forYear: number, min?: Date, max?: Date, locale: Locale = Dates.defaultLocale): IMonth[] {
  const firstMonth = startOfYear(new Date(forYear, 1, 1));
  const months: IMonth[] = [];
  for (let i = 0; i < 12; i += 1) {
    const currentDate = i === 0 ? firstMonth : addMonths(firstMonth, i);
    months.push({
      name: format(currentDate, 'MMMM', { locale }),
      indexInYear: i,
      isDisabled: (!!min && isBefore(currentDate, min)) || (!!max && isAfter(currentDate, max)),
    });
  }
  return months;
}

/**
 * Returns a list of years to display within the year select of the calendar view.
 * @param min (Date) The optional `min` date prop passed to the calendar view (parsed to a `Date` object from a `DateLike`). If no min passed, will default to `1900`
 * @param max (Date) The optional `max` date prop passed to the calendar view (parsed to a `Date` object from a `DateLike`). If no min passed, will default to `2100`
 * @returns An array of years as numbers.
 */
export function getYears(min?: Date, max?: Date): number[] {
  const minYear = min?.getFullYear() ?? 1900;
  const maxYear = max?.getFullYear() ?? 2100;
  const years: number[] = [];
  for (let i = minYear; i <= maxYear; i += 1) {
    years.push(i);
  }
  return years;
}

/**
 * Returns the list of "day of the week" headings to display within the calendar view as single letters.
 * - This will essentially return ["S","M","T","W","T","F","S"], but is generated on the fly in case an alternative locale is passed.
 * @param locale An optional locale to use when formatting the strings for the headings, will fall back to system default locale of `en-GB`.
 * @returns An array of "day of the week" headings to display within the calendar view as single letters
 */
export function getDayOfWeekHeadings(locale: Locale = Dates.defaultLocale): string[] {
  const sunday = startOfWeek(new Date());
  const headings: string[] = [];
  for (let i = 0; i < 7; i += 1) {
    const currentDate = i === 0 ? sunday : addDays(sunday, i);
    headings.push(format(currentDate, 'eeeee', { locale }));
  }
  return headings;
}
