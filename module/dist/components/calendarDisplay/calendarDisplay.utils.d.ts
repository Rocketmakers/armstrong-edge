/** ******************************************************
 * Calendar Display - Utilities file.
 * A set of helper functions to support the calendar view logic.
 ******************************************************* */
import { Locale } from 'date-fns';
import { Calendar } from '../..';
/**
 * Returns the list of "day of the week" headings to display within the calendar view as single letters.
 * - This will essentially return ["S","M","T","W","T","F","S"], but is generated on the fly in case an alternative format or locale is passed.
 * @param formatString An optional format token to use.
 * @param locale An optional locale to use when formatting the strings for the headings, will fall back to system default locale of `en-GB`.
 * @returns An array of "day of the week" headings to display within the calendar view as single letters
 */
export declare function getDayOfWeekHeadings(formatString: string, locale?: Locale): string[];
/**
 * Returns a display format alongside each day object
 * @param days The days to format
 * @param formatString The token string to use when formatting
 * @param locale An optional locale to use when formatting, will fall back to system default locale of `en-GB`.
 * @returns The days with their display ready strings
 */
export declare function getDaysWithDisplayFormat(days: Calendar.IDay[], formatString: string, locale?: Locale): {
    day: Calendar.IDay;
    displayFormat: string;
}[];
