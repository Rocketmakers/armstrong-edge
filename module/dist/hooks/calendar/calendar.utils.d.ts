import { ICalendarHighlightParsed, IDay, IMonth, IYear } from './calendar.types';
/**
 * Throws an error if the max date is before the min date.
 * @param min (Date) The min date
 * @param max (Date) The max date
 */
export declare function minMaxCheckThrow(min?: Date, max?: Date): void;
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
export declare function getDays(forMonth: number, forYear: number, selectedDate?: Date, min?: Date, max?: Date, rangeTo?: Date, highlights?: ICalendarHighlightParsed[]): IDay[];
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
export declare function getMonths(forYear: number, min?: Date, max?: Date): IMonth[];
/**
 * Returns a list of years to display within the year select of the calendar view.
 * @param min (Date) The optional `min` date prop passed to the calendar view (parsed to a `Date` object from a `DateLike`). If no min passed, will default to `1900`
 * @param max (Date) The optional `max` date prop passed to the calendar view (parsed to a `Date` object from a `DateLike`). If no min passed, will default to `2100`
 * @returns An array of year objects containing all necessary display characteristics and statuses.
 */
export declare function getYears(min?: Date, max?: Date): IYear[];
