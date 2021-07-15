import * as React from 'react';
import { Calendar } from '../..';
import { IBindingProps } from '../../hooks/form';
import { Dates } from '../../utils/dates';
export interface ICalendarDisplayProps {
    /**
     * An optional "day of the week" index to be the first day of the week.
     * - By default, weeks will start on Sunday (index 0)
     * - Indexes range from Sunday = 0 to Saturday = 6
     */
    weekdayStartIndex?: number;
    /**
     * An optional locale to apply to all date formatting.
     * - Must be a date-fns compliant `Locale` object (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/Locale))
     * - If no locale is passed, `en-GB` will be used as the system default for all date formatting.
     */
    locale?: Dates.DateLocale;
    /**
     * The list of days to render in the calendar view. usually comes from the `Calendar.use` hook.
     */
    days: Calendar.IDay[];
    /**
     * The list of months to render in the calendar view. usually comes from the `Calendar.use` hook.
     */
    months: Calendar.IMonth[];
    /**
     * The list of years to render in the calendar view. usually comes from the `Calendar.use` hook.
     */
    years: Calendar.IYear[];
    /**
     * Allows an external form to bind to the month selector.
     */
    currentMonthBinding: IBindingProps<number>;
    /**
     * Allows an external form to bind to the year selector.
     */
    currentYearBinding: IBindingProps<number>;
    /**
     * An optional function to call when a day is clicked.
     * @param day The day that has been clicked.
     */
    onDayClicked?: (day: Calendar.IDay) => void;
    /**
     * Optional callback for when the back button has been clicked, usually goes to the previous month.
     */
    onBackClicked?: () => void;
    /**
     * Optional callback for when the forward button has been clicked, usually goes to the next month.
     */
    onForwardClicked?: () => void;
    /**
     * A formatter to apply when displaying the days inside the calendar.
     * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
     * - Number by default `d` = (1 - 31).
     * - Other options include: `dd` = (01 - 31), `Do` = (1st - 31st)
     */
    calendarDayDisplayFormat?: string;
    /**
     * A formatter to apply when displaying the month selector inside the calendar.
     * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
     * - Long word by default: `MMMM` = (January - December)
     * - Other options include: `MM` = (01 - 12), `MMMM` = (January - December)
     */
    calendarMonthSelectDisplayFormat?: string;
    /**
     * A formatter to apply when displaying the year selector inside the calendar.
     * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
     * - Number by default: `YYYY` = (2021).
     * - Other options include: `YY` = (21).
     */
    calendarYearSelectDisplayFormat?: string;
    /**
     * A formatter to apply when displaying the day of the week headings inside the calendar.
     * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
     * - Single letter by default: `eeeee` = (S - S).
     * - Other options include: `eee` = (Sun - Sat). `eeee` = (Sunday - Saturday).
     */
    calendarDayOfTheWeekHeadingDisplayFormat?: string;
    /**
     * Allows you to toggle the highlighting of todays date on the calendar
     * - Defaults to true
     */
    highlightToday?: boolean;
    /** CSS className property */
    className?: string;
}
/**
 * A stateless display component for rendering the calendar.
 * NOTE: This probably isn't what you're looking for.
 * - For a date input, use `CalendarInput`.
 * - For an interactive calendar view, use `CalendarDisplay`.
 */
export declare const CalendarDisplay: React.ForwardRefExoticComponent<ICalendarDisplayProps & React.RefAttributes<HTMLDivElement>>;
