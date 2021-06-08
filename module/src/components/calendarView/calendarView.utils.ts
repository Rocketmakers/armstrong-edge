/** ******************************************************
 * Calendar View - Utilities file.
 * A set of helper functions to support the calendar view logic.
 ******************************************************* */

import { addDays, format, Locale, startOfWeek } from 'date-fns';

import { Dates } from '../../utils/dates';

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
