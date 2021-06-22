import { Dates } from '../../utils/dates';

/** Defines the data required by the calendar view and associated with a single day */
export interface IDay {
  /** (Date) The date object representing the day in question */
  date: Date;
  /** (number) The day number in context of it's month, like "30th" June. */
  numberInMonth: number;
  /** (number) The 0-6 index of the days position within the week. Sunday = 0, Saturday = 6. */
  indexInWeek: number;
  /** (boolean) Is this the currently selected day within the calendar view? */
  isSelected: boolean;
  /** (boolean) Is this day currently disabled within the calendar view? */
  isDisabled: boolean;
  /** (boolean) Is this day the same as today based on the locale? */
  isToday: boolean;
  /** (boolean) Has this day been highlighted with a dot? */
  isHighlighted: boolean;
  /** (string) Optional class name for highlighted status marker */
  highlightedClassName?: string;
  /** (boolean) Is this date at the beginning of a two date range? */
  isRangeStart: boolean;
  /** (boolean) Is this date at the end of a two date range? */
  isRangeEnd: boolean;
  /** (boolean) Is this date in between the two dates in a two date range? */
  isRangeMiddle: boolean;
}

/** Defines the data required by the calendar view and associated with a single month  */
export interface IMonth {
  /** (Date) The date object representing the month in question */
  date: Date;
  /** (number) The 0-11 index of the months position within the year. January = 0, December = 11. */
  indexInYear: number;
  /** (boolean) Is this month currently disabled within the calendar view? */
  isDisabled: boolean;
}

/** Defines the data required by the calendar view and associated with a single month  */
export interface IYear {
  /** (Date) The date object representing the year in question */
  date: Date;
  /** (number) The year as a 4 digit number number (e.g 2021) */
  number: number;
}

/** Defines the data associated with a day that has been highlighted with a dot.  */
export interface ICalendarHighlight {
  /** The highlighted date */
  date: Dates.DateLike;
  /** (string) Optional class name for highlighted status marker */
  className?: string;
}

/** Defines the data associated with a day that has been highlighted with a dot, once the `DateLike` date type has been parsed into a real `Date` object.  */
export interface ICalendarHighlightParsed extends ICalendarHighlight {
  /** The `Date` object parsed from `DateLike` type */
  date: Date;
}

export interface IConfig {
  /** (Date|string|number) The currently selected date as a string or a `Date` object. Will default to today. */
  selectedDate?: Dates.DateLike;
  /** (Date|string|number) An optional minimum selectable date. If passed, all dates before this date will not be selectable. */
  min?: Dates.DateLike;
  /** (Date|string|number) An optional maximum selectable date. If passed, all dates after this date will not be selectable. */
  max?: Dates.DateLike;
  /**
   * (Date|string|number) An optional date to display a range to.
   * - Will use the `selectedDate` as the other end of the range.
   * - This date will show as the beginning of the range if `selectedDate` is later, or the end of the range if `selectedDate` is sooner.
   * - Useful if using two calendar inputs to create a "from - to" date range selector, simply pass the selected date from one as the `rangeTo` date on the other and vice versa.
   */
  rangeTo?: Dates.DateLike;
  /** An optional array of dates to highlight with optional class names to apply to each highlighted date. */
  highlights?: ICalendarHighlight[];
  /**
   * (string) A formatter to apply to all passed in date strings.
   * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
   * - If date strings are used without this prop, strict ISO format will be assumed.
   * - This format will not be used if dates are passed as `Date` objects rather than strings.
   */
  formatString?: string;
  /**
   * An optional locale to apply to all date formatting.
   * - Must be a date-fns compliant `Locale` object (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/Locale))
   * - If no locale is passed, `en-GB` will be used as the system default for all date formatting.
   */
  locale?: Dates.DateLocale;
  /**
   * (string) A formatter to apply when displaying the day selector on the input.
   * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
   * - Padded number by default `dd` = (01 - 31).
   * - Other options include: `d` = (1 - 31), `Do` = (1st - 31st)
   */
  dayInputDisplayFormat?: string;
  /**
   * (string) A formatter to apply when displaying the month selector on the input.
   * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
   * - Padded number by default: `MM` = (01 - 12)
   * - Other options include: `MMM` = (Jan - Dec), `MMMM` = (January - December)
   */
  monthInputDisplayFormat?: string;
  /**
   * (string) A formatter to apply when displaying the year selector on the input.
   * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
   * - Number by default: `YYYY` = (2021).
   * - Other options include: `YY` = (21).
   */
  yearInputDisplayFormat?: string;
}
