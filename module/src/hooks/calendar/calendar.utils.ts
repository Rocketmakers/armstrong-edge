import { addDays, addMonths, addYears, format, getDaysInMonth, isAfter, isBefore, isSameDay, startOfYear } from 'date-fns';

import { ICalendarHighlightParsed, IDay, IMonth, IYear } from './calendar.types';

/**
 * Throws an error if the max date is before the min date.
 * @param min (Date) The min date
 * @param max (Date) The max date
 */
export function minMaxCheckThrow(min?: Date, max?: Date) {
  if (min && max && isBefore(max, min)) {
    throw new Error(`Min date cannot be before max date!`);
  }
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
  minMaxCheckThrow(min, max);
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
export function getMonths(forYear: number, min?: Date, max?: Date): IMonth[] {
  minMaxCheckThrow(min, max);
  const firstMonth = startOfYear(new Date(forYear, 1, 1));
  const months: IMonth[] = [];
  for (let i = 0; i < 12; i += 1) {
    const currentDate = i === 0 ? firstMonth : addMonths(firstMonth, i);
    months.push({
      date: currentDate,
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
 * @returns An array of year objects containing all necessary display characteristics and statuses.
 */
export function getYears(min?: Date, max?: Date): IYear[] {
  minMaxCheckThrow(min, max);
  let currentYear = min ? startOfYear(min) : new Date(1900, 1, 1);
  const years: IYear[] = [];
  while (currentYear.getFullYear() <= (max?.getFullYear() ?? 2100)) {
    years.push({
      date: currentYear,
      number: currentYear.getFullYear(),
    });
    currentYear = addYears(currentYear, 1);
  }
  return years;
}
