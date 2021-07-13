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
export declare function calendarDayToDateLike(day: Calendar.IDay, type: string, formatString?: string, locale?: Dates.DateLocale): Dates.DateLike;
/**
 * Returns an array of select options for a set of `IDay` objects from the calendar hook.
 * @param day The `IDay` objects to convert.
 * @param formatString The format token to use if formatting to a string, will use ISO if none passed.
 * @param locale The locale to use if formatting to a string, will default to `en-GB`.
 * @returns The array of select options.
 */
export declare function getDaySelectOptions(days: Calendar.IDay[], formatString: string, locale?: Locale): ISelectOption<number, Calendar.IDay>[];
/**
 * Validates that a date added via the three day/month/year inputs is an actual date that has happened, will happen, or is happening now.
 * @param day The day of the date to validate.
 * @param month The month of the date to validate.
 * @param year The year of the date to validate.
 * @returns true if the date is valid, false if not.
 */
export declare function validateDateSelection(day: number, month: number, year: number): boolean;
