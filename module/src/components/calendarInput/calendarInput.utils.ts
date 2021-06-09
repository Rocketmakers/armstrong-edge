import { formatISO } from 'date-fns';
import format from 'date-fns/format';

import { Calendar, ISelectOption } from '../..';
import { Dates } from '../../utils/dates';

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

export function calendarDayToDateLike(
  day: Calendar.IDay,
  type: string,
  formatString?: string,
  locale: Dates.DateLocale = Dates.defaultLocale
): Dates.DateLike {
  return dateObjectToDateLike(day.date, type, formatString, locale);
}

export function getDayInputOptions(
  days: Calendar.IDay[],
  formatString: string,
  locale: Locale = Dates.defaultLocale
): ISelectOption<number, Calendar.IMonth>[] {
  return days.map((day) => ({ id: day.numberInMonth, name: format(day.date, formatString, { locale }) }));
}

export function getMonthInputOptions(
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

export function getYearInputOptions(
  years: Calendar.IYear[],
  formatString: string,
  locale: Locale = Dates.defaultLocale
): ISelectOption<number, Calendar.IYear>[] {
  return years.map((year) => ({ id: year.number, name: format(year.date, formatString, { locale }), data: year }));
}
