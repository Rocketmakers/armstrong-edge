import * as React from 'react';

import { Calendar } from '../..';
import { ClassNames } from '../../utils/classNames';
import { Dates } from '../../utils/dates';
import { CalendarDisplay, ICalendarDisplayProps } from '../calendarDisplay/calendarDisplay.component';

export interface ICalendarViewProps extends Calendar.IConfig, Pick<ICalendarDisplayProps, 'forwardsButton' | 'backButton' | 'controls'> {
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

  /**
   * Allows you to toggle the highlighting of todays date on the calendar
   * - Defaults to true
   */
  highlightToday?: boolean;

  /** CSS className property */
  className?: string;
}

/**
 * Displays an interactive calendar view.
 * - For date selection via an inline calendar.
 * - NOTE: Not a date input for a traditional form, please use `CalendarInput`
 */
export const CalendarView = React.forwardRef<HTMLDivElement, ICalendarViewProps>(
  (
    {
      selectedDate,
      min,
      max,
      weekdayStartIndex,
      formatString,
      onDateClicked,
      locale,
      rangeTo,
      highlights,
      highlightToday,
      className,
      forwardsButton,
      backButton,
      controls,
    },
    ref
  ) => {
    const { days, months, years, monthYearFormProp, stepMonth, jumpTo } = Calendar.use({
      formatString,
      min,
      highlights,
      locale,
      max,
      rangeTo,
      selectedDate,
    });

    // Click event listeners
    const onBackClicked = React.useCallback(() => {
      stepMonth('back');
    }, [stepMonth]);

    const onForwardClicked = React.useCallback(() => {
      stepMonth('forward');
    }, [stepMonth]);

    const onDayClicked = React.useCallback(
      (day: Calendar.IDay) => {
        onDateClicked?.(day.date, Dates.dateToString(day.date, formatString, locale));
      },
      [onDateClicked, formatString, locale]
    );

    const onClickJumpList = React.useCallback(
      (date: Date) => {
        onDateClicked?.(date, Dates.dateToString(date, formatString, locale));
      },
      [onDateClicked, formatString, locale]
    );

    return (
      <CalendarDisplay
        className={ClassNames.concat('arm-calendar-view', className)}
        ref={ref}
        days={days}
        months={months}
        years={years}
        currentMonthBinding={monthYearFormProp('viewingMonth').bind()}
        currentYearBinding={monthYearFormProp('viewingYear').bind()}
        weekdayStartIndex={weekdayStartIndex!}
        locale={locale}
        onBackClicked={onBackClicked}
        onForwardClicked={onForwardClicked}
        onDayClicked={onDayClicked}
        highlightToday={highlightToday}
        forwardsButton={forwardsButton}
        backButton={backButton}
        controls={controls}
        jumpTo={jumpTo}
        onClickJumpList={onClickJumpList}
      />
    );
  }
);

CalendarView.defaultProps = {
  selectedDate: new Date(),
  weekdayStartIndex: 0,
};
