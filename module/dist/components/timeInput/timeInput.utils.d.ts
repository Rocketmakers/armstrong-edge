import { Dates } from '../../utils/dates';
import { ISelectOption } from '../select';
import { TimeParts } from './timeInput.types';
export declare function getHourOptions(formatString: string, locale?: Dates.DateLocale): ISelectOption<number>[];
export declare function getMinuteOptions(formatString: string, locale?: Dates.DateLocale, step?: number): ISelectOption<number, any>[];
export declare function parseTimeStringToParts(timeString: string | undefined, formatString: string, locale?: Dates.DateLocale): TimeParts | undefined;
export declare function parseTimePartsToDate(timeParts: TimeParts | undefined, formatString: string, locale?: Dates.DateLocale): string | undefined;
