import { addDays, addMonths, format, getDaysInMonth, isAfter, isBefore, isSameDay, isSameMonth, startOfWeek, startOfYear } from 'date-fns';

export namespace Dates {
  export interface IDay {
    numberInMonth: number;
    indexInWeek: number;
    name: string;
    shortName: string;
    isSelected: boolean;
  }

  export interface IMonth {
    name: string;
    shortName: string;
  }

  export function getDays(forMonth: number, forYear: number, selectedDate: Date, min?: Date, max?: Date): IDay[] {
    const forDate = new Date(forYear, forMonth, 1);
    const dayCount = getDaysInMonth(forDate);
    const days: IDay[] = [];
    for (let i = 0; i < dayCount; i += 1) {
      const currentDay = i === 0 ? forDate : addDays(forDate, i);
      if ((!min || isAfter(currentDay, min) || isSameDay(currentDay, min)) && (!max || isBefore(currentDay, max) || isSameDay(currentDay, max))) {
        days.push({
          numberInMonth: i + 1,
          indexInWeek: Number(format(currentDay, 'e')) - 1,
          name: format(currentDay, 'eeee'),
          shortName: format(currentDay, 'eee'),
          isSelected: isSameDay(currentDay, selectedDate),
        });
      }
    }
    return days;
  }

  export function getMonths(forYear: number, min?: Date, max?: Date): IMonth[] {
    const firstMonth = startOfYear(new Date(forYear, 1, 1));
    const months: IMonth[] = [];
    for (let i = 0; i < 12; i += 1) {
      const currentDate = i === 0 ? firstMonth : addMonths(firstMonth, i);
      if (
        (!min || isAfter(currentDate, min) || isSameMonth(currentDate, min)) &&
        (!max || isBefore(currentDate, max) || isSameMonth(currentDate, max))
      ) {
        months.push({
          name: format(currentDate, 'MMMM'),
          shortName: format(currentDate, 'MMM'),
        });
      }
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
}
