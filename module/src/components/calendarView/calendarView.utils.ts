/** ******************************************************
 * Calendar View - Utilities file.
 * A set of helper functions to support the calendar view logic.
 ******************************************************* */

import { addDays, format, Locale, startOfWeek } from 'date-fns';

import { Calendar, ISelectOption } from '../..';
import { Dates } from '../../utils/dates';

const calendarDisplayFormats = {
  dayOfWeekHeading: 'eeeee',
  month: 'MMMM',
  year: 'yyyy',
  day: 'd',
};

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
    headings.push(format(currentDate, calendarDisplayFormats.dayOfWeekHeading, { locale }));
  }
  return headings;
}

export function getMonthOptions(months: Calendar.IMonth[], locale: Locale = Dates.defaultLocale): ISelectOption<number, Calendar.IMonth>[] {
  return months.map((month) => ({
    id: month.indexInYear,
    name: format(month.date, calendarDisplayFormats.month, { locale }),
    data: month,
    disabled: month.isDisabled,
  }));
}

export function getYearOptions(years: Calendar.IYear[], locale: Locale = Dates.defaultLocale): ISelectOption<number, Calendar.IYear>[] {
  return years.map((year) => ({ id: year.number, name: format(year.date, calendarDisplayFormats.year, { locale }), data: year }));
}

export function getDaysWithDisplayFormat(
  days: Calendar.IDay[],
  locale: Locale = Dates.defaultLocale
): { day: Calendar.IDay; displayFormat: string }[] {
  return days.map((day) => ({ day, displayFormat: format(day.date, calendarDisplayFormats.day, { locale }) }));
}
