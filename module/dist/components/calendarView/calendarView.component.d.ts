import * as React from 'react';
import { Calendar } from '../..';
export interface ICalendarViewProps extends Calendar.IConfig {
    /**
     * An optional "day of the week" index to be the first day of the week.
     * - By default, weeks will start on Sunday (index 0)
     * - Indexes range from Sunday = 0 to Saturday = 6
     */
    weekdayStartIndex?: number;
    /**
     * An optional function to call when a date is clicked.
     * @param date The date object of the date that has been clicked.
     * @param dateString A formatted string representation of the date that has been clicked (will use the `formatString` prop if passed, or fall back to strict ISO.)
     */
    onDateClicked?: (date: Date, dateString: string) => void;
    /** CSS className property */
    className?: string;
}
/**
 * Displays an interactive calendar view.
 * - For date selection via an inline calendar.
 * - NOTE: Not a date input for a traditional form, please use `CalendarInput`
 */
export declare const CalendarView: React.ForwardRefExoticComponent<ICalendarViewProps & React.RefAttributes<HTMLDivElement>>;
