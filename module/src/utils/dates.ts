import { format, formatISO, parse, parseISO, Locale } from 'date-fns';
import { enGB } from 'date-fns/locale';

import { Calendar, ISelectOption } from '..';
import { NullOrUndefined } from '../types';

/** Set of utilities and types relating to the native JS date object */
export namespace Dates {
  /** The root type for date properties.
   * - Accepts a date as a native JS `Date` object.
   * - Accepts a UNIX timestamp number.
   * - Accepts a date string in IOS format.
   * - Accepts a date string in a format matching an accompanying `format` string property.
   */
  export type DateLike = Date | string | number;

  /** The type for a locale property, maps to the `date-fns` locale object, prevents `date-fns` from needing to be imported outside of this file. */
  export type DateLocale = Locale;

  /** Defines a constant locale for use as a system default */
  export const defaultLocale: Locale = enGB;

  /**
   * Takes a `DateLike` (Date|string|number) object and parses it to a date `Date` object
   * - Uses the supplied format string and locale if date is a string.
   * @param date The `DateLike` to parse to a `Date`.
   * @param formatString The optional format to use if `date` is a string, if not passed, will assume `date` strings are ISO.
   * @param locale The locale to use if `date` is a string, if not passed, will use the system default locale of `en-GB`.
   * @returns The parsed `Date` object, or `undefined` if no `date` was passed.
   */
  export function dateLikeToDate(date: NullOrUndefined<DateLike>, formatString?: string, locale: Locale = defaultLocale): Date | undefined {
    if (typeof date === 'string') {
      return formatString ? parse(date, formatString, new Date(), { locale }) : parseISO(date);
    }
    if (typeof date === 'number') {
      return new Date(date);
    }
    return date ?? undefined;
  }

  /**
   * Takes a native `Date` object and returns a formatted string.
   * - Uses the supplied format string and locale to format the string.
   * @param date (Date) The `Date` object to format.
   * @param formatString The optional format to use if `date` is a string, if not passed, will assume `date` strings are ISO.
   * @param locale The locale to use if `date` is a string, if not passed, will use the system default locale of `en-GB`.
   * @returns A formatted string representation of the supplied `date`.
   */
  export function dateToString(date: Date, formatString?: string, locale: Locale = defaultLocale): string {
    return formatString ? format(date, formatString, { locale }) : formatISO(date);
  }

  export function getMonthSelectOptions(
    months: Calendar.IMonth[],
    formatString: string,
    locale: Locale = Dates.defaultLocale
  ): ISelectOption<number, Calendar.IMonth>[] {
    return months.map((month) => ({
      id: month.indexInYear,
      name: format(month.date, formatString, { locale }),
      data: month,
      disabled: month.isDisabled,
    }));
  }

  export function getYearSelectOptions(
    years: Calendar.IYear[],
    formatString: string,
    locale: Locale = Dates.defaultLocale
  ): ISelectOption<number, Calendar.IYear>[] {
    return years.map((year) => ({ id: year.number, name: format(year.date, formatString, { locale }), data: year }));
  }

  /**
   * Turns a date object into a `DateLike` matching the requested type.
   * @param date The Date object to convert
   * @param type The type to convert to, should be 'string', 'number' or 'object', usually comes from a `typeof`.
   * @param formatString The format token to use if formatting to a string, will use ISO if none passed.
   * @param locale The locale to use if formatting to a string, will default to `en-GB`.
   * @returns The appropriate string, number or Date object as a `DateLike`.
   */
  export function dateObjectToDateLike(
    date: Date,
    type: string,
    formatString?: string,
    locale: Dates.DateLocale = Dates.defaultLocale
  ): Dates.DateLike {
    switch (type) {
      case 'string':
        return formatString ? format(date, formatString, { locale }) : formatISO(date);
      case 'number':
        return date.getTime();
      case 'object':
        return date;
      default:
        throw new Error(`Invalid type ${type} sent to DateLike creator`);
    }
  }
}
