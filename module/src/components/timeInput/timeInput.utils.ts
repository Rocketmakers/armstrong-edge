import { addHours, addMinutes, format, getHours, getMinutes, isValid, parse, startOfDay } from 'date-fns';

import { Dates } from '../../utils/dates';
import { ISelectOption } from '../select';
import { TimeParts } from './timeInput.types';

export function getHourOptions(formatString: string, locale: Dates.DateLocale = Dates.defaultLocale): ISelectOption<number>[] {
  const firstHour = startOfDay(new Date());
  const hours: ISelectOption<number>[] = [];
  for (let i = 0; i < 24; i += 1) {
    const currentDate = i === 0 ? firstHour : addHours(firstHour, i);
    hours.push({
      id: i,
      name: format(currentDate, formatString, { locale }),
    });
  }
  return hours;
}

export function getMinuteOptions(formatString: string, locale: Dates.DateLocale = Dates.defaultLocale, step = 1) {
  const firstMinute = startOfDay(new Date());
  const minutes: ISelectOption<number>[] = [];
  for (let i = 0; i < 60; i += 1) {
    if (i % step === 0) {
      const currentDate = i === 0 ? firstMinute : addMinutes(firstMinute, i);
      minutes.push({
        id: i,
        name: format(currentDate, formatString, { locale }),
      });
    }
  }
  return minutes;
}

export function parseTimeStringToParts(
  timeString: string | undefined,
  formatString: string,
  locale: Dates.DateLocale = Dates.defaultLocale
): TimeParts | undefined {
  if (!timeString) {
    return undefined;
  }
  const dateObject = parse(timeString, formatString, new Date(), { locale });
  if (!isValid(dateObject)) {
    throw new Error(`Invalid time format: ${timeString}`);
  }
  return {
    hour: getHours(dateObject),
    minute: getMinutes(dateObject),
  };
}

export function parseTimePartsToDate(
  timeParts: TimeParts | undefined,
  formatString: string,
  locale: Dates.DateLocale = Dates.defaultLocale
): string | undefined {
  if (!timeParts) {
    return undefined;
  }
  const today = new Date();
  const dateObject = new Date(today.getFullYear(), today.getMonth(), today.getDate(), timeParts.hour, timeParts.minute, 0, 0);
  if (!isValid(dateObject)) {
    throw new Error(`Invalid time selection: ${JSON.stringify(timeParts)}`);
  }
  return format(dateObject, formatString, { locale });
}
