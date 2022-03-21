import { format, getDaysInMonth } from 'date-fns';

import { Calendar, ISelectOption } from '../..';
import { Dates } from '../../utils/dates';

/**
 * Turns an `IDay` object from the calendar hook into a `DateLike`.
 * @param day The `IDay` object to convert.
 * @param type The type to convert to, should be 'string', 'number' or 'object', usually comes from a `typeof`.
 * @param formatString The format token to use if formatting to a string, will use ISO if none passed.
 * @param locale The locale to use if formatting to a string, will default to `en-GB`.
 * @returns The appropriate string, number or Date object as a `DateLike`.
 */
export function calendarDayToDateLike(
  day: Calendar.IDay,
  type: string,
  formatString?: string,
  locale: Dates.DateLocale = Dates.defaultLocale
): Dates.DateLike {
  return Dates.dateObjectToDateLike(day.date, type, formatString, locale);
}

/**
 * Returns an array of select options for a set of `IDay` objects from the calendar hook.
 * @param day The `IDay` objects to convert.
 * @param formatString The format token to use if formatting to a string, will use ISO if none passed.
 * @param locale The locale to use if formatting to a string, will default to `en-GB`.
 * @returns The array of select options.
 */
export function getDaySelectOptions(
  days: Calendar.IDay[],
  formatString: string,
  locale: Locale = Dates.defaultLocale
): ISelectOption<number, Calendar.IDay>[] {
  return days.map((day) => ({ id: day.numberInMonth, name: format(day.date, formatString, { locale }), data: day }));
}

/**
 * Validates that a date added via the three day/month/year inputs is an actual date that has happened, will happen, or is happening now.
 * @param day The day of the date to validate.
 * @param month The month of the date to validate.
 * @param year The year of the date to validate.
 * @returns true if the date is valid, false if not.
 */
export function validateDateSelection(day: number, month: number, year: number) {
  const dayCount = getDaysInMonth(new Date(year, month, 1));
  return day > 0 && day <= dayCount;
}
