import {
  addDays,
  addMonths,
  format,
  formatISO,
  getDaysInMonth,
  isAfter,
  isBefore,
  isSameDay,
  Locale,
  parse,
  parseISO,
  startOfWeek,
  startOfYear,
} from 'date-fns';
import { enGB } from 'date-fns/esm/locale';

export interface IDay {
  date: Date;
  numberInMonth: number;
  indexInWeek: number;
  name: string;
  shortName: string;
  isSelected: boolean;
  isDisabled: boolean;
  isToday: boolean;
  isHighlighted: boolean;
  highlightedClassName?: string;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isRangeMiddle: boolean;
}

export interface IMonth {
  name: string;
  shortName: string;
  indexInYear: number;
  isDisabled: boolean;
}

export interface ICalendarHighlight {
  date: DateLike;
  className?: string;
}

export interface ICalendarHighlightParsed extends ICalendarHighlight {
  date: Date;
}

export type DateLike = Date | string;
export type DateLocale = Locale;

const defaultLocale: Locale = enGB;

export function getDays(
  forMonth: number,
  forYear: number,
  selectedDate: Date,
  min?: Date,
  max?: Date,
  rangeTo?: Date,
  highlights?: ICalendarHighlightParsed[]
): IDay[] {
  const forDate = new Date(forYear, forMonth, 1);
  const dayCount = getDaysInMonth(forDate);
  let rangeStart: Date | undefined;
  let rangeEnd: Date | undefined;
  if (rangeTo) {
    if (isBefore(selectedDate, rangeTo)) {
      rangeStart = selectedDate;
      rangeEnd = rangeTo;
    } else {
      rangeStart = rangeTo;
      rangeEnd = selectedDate;
    }
  }
  const days: IDay[] = [];
  for (let i = 0; i < dayCount; i += 1) {
    const currentDay = i === 0 ? forDate : addDays(forDate, i);
    const highlight = highlights?.find((h) => isSameDay(currentDay, h.date));
    days.push({
      date: currentDay,
      numberInMonth: i + 1,
      indexInWeek: Number(format(currentDay, 'e')) - 1,
      name: format(currentDay, 'eeee'),
      shortName: format(currentDay, 'eee'),
      isSelected: isSameDay(currentDay, selectedDate),
      isDisabled: (!!min && isBefore(currentDay, min)) || (!!max && isAfter(currentDay, max)),
      isToday: isSameDay(currentDay, new Date()),
      isRangeStart: !!rangeStart && isSameDay(currentDay, rangeStart),
      isRangeEnd: !!rangeEnd && isSameDay(currentDay, rangeEnd),
      isRangeMiddle: !!rangeStart && !!rangeEnd && isAfter(currentDay, rangeStart) && isBefore(currentDay, rangeEnd),
      isHighlighted: !!highlight,
      highlightedClassName: highlight?.className,
    });
  }
  return days;
}

export function dateLikeToDate(date?: DateLike, formatString?: string, locale: Locale = defaultLocale): Date | undefined {
  if (typeof date === 'string') {
    return formatString ? parse(date, formatString, new Date(), { locale }) : parseISO(date);
  }
  return date;
}

export function dateToString(date: Date, formatString?: string, locale: Locale = defaultLocale): string {
  return formatString ? format(date, formatString, { locale }) : formatISO(date);
}

export function getMonths(forYear: number, min?: Date, max?: Date): IMonth[] {
  const firstMonth = startOfYear(new Date(forYear, 1, 1));
  const months: IMonth[] = [];
  for (let i = 0; i < 12; i += 1) {
    const currentDate = i === 0 ? firstMonth : addMonths(firstMonth, i);
    months.push({
      name: format(currentDate, 'MMMM'),
      shortName: format(currentDate, 'MMM'),
      indexInYear: i,
      isDisabled: (!!min && isBefore(currentDate, min)) || (!!max && isAfter(currentDate, max)),
    });
  }
  return months;
}

export function getYears(min?: Date, max?: Date): number[] {
  const minYear = min?.getFullYear() ?? 1900;
  const maxYear = max?.getFullYear() ?? 2100;
  const years: number[] = [];
  for (let i = minYear; i <= maxYear; i += 1) {
    years.push(i);
  }
  return years;
}

export function getDayOfWeekHeadings(): string[] {
  const sunday = startOfWeek(new Date());
  const headings: string[] = [];
  for (let i = 0; i < 7; i += 1) {
    const currentDate = i === 0 ? sunday : addDays(sunday, i);
    headings.push(format(currentDate, 'eeeee'));
  }
  return headings;
}
