import { formatISO } from 'date-fns';
import format from 'date-fns/format';

import { Calendar } from '../..';
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
