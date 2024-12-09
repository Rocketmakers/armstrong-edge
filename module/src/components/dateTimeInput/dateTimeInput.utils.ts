import { addMonths, addYears, endOfMonth, format, isAfter, isBefore, startOfMonth, startOfYear } from 'date-fns';

import { NullOrUndefined } from '../../types';
import { IMonth } from './dateTimeInput.types';

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
 * Returns a list of months to display within the month select of the calendar view.
 * - Returned months taking min/max dates into account
 * @param forYear (number) The year to return the months for. e.g. `2021`.
 * @param locale A locale to use when formatting the strings for the months.
 * @param min (Date) The optional `min` date prop passed to the calendar view.
 * @param max (Date) The optional `max` date prop passed to the calendar view.
 * @returns An array of months.
 */
export function getMonths(forYear: number, locale: Locale, min?: Date, max?: Date): IMonth[] {
  minMaxCheckThrow(min, max);
  const firstMonth = startOfYear(new Date(forYear, 1, 1));
  const months: IMonth[] = [];
  for (let i = 0; i < 12; i += 1) {
    const currentDate = i === 0 ? firstMonth : addMonths(firstMonth, i);
    months.push({
      index: i,
      name: format(currentDate, 'MMMM', { locale }),
      disabled: (!!min && isBefore(currentDate, startOfMonth(min))) || (!!max && isAfter(currentDate, endOfMonth(max))),
    });
  }
  return months;
}

/**
 * Returns a list of years to display within the year select of the calendar view.
 * @param min (Date) The optional `min` date prop passed to the calendar view. If no min passed, will default to `1900`
 * @param max (Date) The optional `max` date prop passed to the calendar view. If no max passed, will default to `2100`
 * @returns An array of year objects containing all necessary display characteristics and statuses.
 */
export function getYears(min?: Date, max?: Date): number[] {
  minMaxCheckThrow(min, max);
  let currentYear = min ? startOfYear(min) : new Date(1900, 1, 1);
  const years: number[] = [];
  while (currentYear.getFullYear() <= (max?.getFullYear() ?? 2100)) {
    years.push(currentYear.getFullYear());
    currentYear = addYears(currentYear, 1);
  }
  return years;
}

/**
 * Formats a date using the provided format string.
 * @param {Date|null|undefined} incomingDate - The date to format. Can be null or undefined.
 * @param {string} formatString - The format string to use for formatting the date.
 * @returns {string|undefined} The formatted date as a string, or undefined if the incoming date is null or undefined.
 */
export function formatDate(incomingDate: NullOrUndefined<Date>, formatString: string): string | undefined {
  return incomingDate ? format(incomingDate, formatString) : undefined;
}
