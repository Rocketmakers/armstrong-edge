/** ******************************************************
 * Calendar Display - Utilities file.
 * A set of helper functions to support the calendar view logic.
 ******************************************************* */

import { addDays, format, Locale, startOfWeek } from 'date-fns';

import { Calendar } from '../..';
import { Dates } from '../../utils/dates';

/**
 * Returns the list of "day of the week" headings to display within the calendar view as single letters.
 * - This will essentially return ["S","M","T","W","T","F","S"], but is generated on the fly in case an alternative format or locale is passed.
 * @param formatString An optional format token to use.
 * @param locale An optional locale to use when formatting the strings for the headings, will fall back to system default locale of `en-GB`.
 * @returns An array of "day of the week" headings to display within the calendar view as single letters
 */
export function getDayOfWeekHeadings(formatString: string, locale: Locale = Dates.defaultLocale): string[] {
  const sunday = startOfWeek(new Date());
  const headings: string[] = [];
  for (let i = 0; i < 7; i += 1) {
    const currentDate = i === 0 ? sunday : addDays(sunday, i);
    headings.push(format(currentDate, formatString, { locale }));
  }
  return headings;
}

/**
 * Returns a display format alongside each day object
 * @param days The days to format
 * @param formatString The token string to use when formatting
 * @param locale An optional locale to use when formatting, will fall back to system default locale of `en-GB`.
 * @returns The days with their display ready strings
 */
export function getDaysWithDisplayFormat(
  days: Calendar.IDay[],
  formatString: string,
  locale: Locale = Dates.defaultLocale
): { day: Calendar.IDay; displayFormat: string }[] {
  return days.map((day) => ({ day, displayFormat: format(day.date, formatString, { locale }) }));
}
