import { format, formatISO, parse, parseISO } from 'date-fns';
import { enGB } from 'date-fns/locale';

/** Set of utilities and types relating to the native JS date object */
export namespace Dates {
  /** The root type for date properties.
   * - Accepts a date as a native JS `Date` object.
   * - Accepts a date string in IOS format.
   * - Accepts a date string in a format matching an accompanying `format` string property.
   */
  export type DateLike = Date | string;

  /** The type for a locale property, maps to the `date-fns` locale object, prevents `date-fns` from needing to be imported outside of this file. */
  export type DateLocale = Locale;

  /** Defines a constant locale for use as a system default */
  export const defaultLocale: Locale = enGB;

  /**
   * Takes a `DateLike` (Date|string) object and parses it to a date `Date` object
   * - Uses the supplied format string and locale if date is a string.
   * @param date The `DateLike` to parse to a `Date`.
   * @param formatString The optional format to use if `date` is a string, if not passed, will assume `date` strings are ISO.
   * @param locale The locale to use if `date` is a string, if not passed, will use the system default locale of `en-GB`.
   * @returns The parsed `Date` object, or `undefined` if no `date` was passed.
   */
  export function dateLikeToDate(date: DateLike | undefined, formatString?: string, locale: Locale = defaultLocale): Date | undefined {
    if (typeof date === 'string') {
      return formatString ? parse(date, formatString, new Date(), { locale }) : parseISO(date);
    }
    return date;
  }

  /**
   * Takes a native `Date` object and returns a formatted string.
   * - Uses the supplied format string and locale to format the string.
   * @param date (Date) The `Date` object to format.
   * @param formatString (string) The optional format to use if `date` is a string, if not passed, will assume `date` strings are ISO.
   * @param locale The locale to use if `date` is a string, if not passed, will use the system default locale of `en-GB`.
   * @returns A formatted string representation of the supplied `date`.
   */
  export function dateToString(date: Date, formatString?: string, locale: Locale = defaultLocale): string {
    return formatString ? format(date, formatString, { locale }) : formatISO(date);
  }
}
