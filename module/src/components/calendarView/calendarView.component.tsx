import * as React from 'react';

import { Calendar, Select } from '../..';
import { IBindingProps } from '../../hooks/form';
import { Arrays } from '../../utils/arrays';
import { ClassNames } from '../../utils/classNames';
import { Dates } from '../../utils/dates';
import { Maths } from '../../utils/maths';
import { Button } from '../button';
import { getDayOfWeekHeadings, getDaysWithDisplayFormat, getMonthOptions, getYearOptions } from './calendarView.utils';

export interface ICalendarViewProps {
  /**
   * (number) An optional "day of the week" index to be the first day of the week.
   * - By default, weeks will start on Sunday (index 0)
   * - Indexes range from Sunday = 0 to Saturday = 6
   */
  weekdayStartIndex: number;
  /**
   * An optional locale to apply to all date formatting.
   * - Must be a date-fns compliant `Locale` object (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/Locale))
   * - If no locale is passed, `en-GB` will be used as the system default for all date formatting.
   */
  locale?: Dates.DateLocale;
  /**
   * ((day: Calendar.IDay) => void) An optional function to call when a day is clicked.
   * @param day The day that has been clicked.
   */
  days: Calendar.IDay[];
  months: Calendar.IMonth[];
  years: Calendar.IYear[];
  currentMonthBinding: IBindingProps<number>;
  currentYearBinding: IBindingProps<number>;
  onDayClicked?: (day: Calendar.IDay) => void;
  onBackClicked?: () => void;
  onForwardClicked?: () => void;
}

export const CalendarView = React.forwardRef<HTMLDivElement, ICalendarViewProps>(
  (
    { onForwardClicked, weekdayStartIndex, onBackClicked, onDayClicked, locale, days, months, years, currentMonthBinding, currentYearBinding },
    ref
  ) => {
    const dayOfWeekHeadings = React.useMemo(() => {
      return Arrays.reIndex(getDayOfWeekHeadings(locale), weekdayStartIndex!);
    }, [weekdayStartIndex, locale]);

    const monthOptions = React.useMemo(() => {
      return getMonthOptions(months, locale);
    }, [months, locale]);

    const yearOptions = React.useMemo(() => {
      return getYearOptions(years, locale);
    }, [years, locale]);

    const displayDays = React.useMemo(() => {
      return getDaysWithDisplayFormat(days, locale);
    }, [days, locale]);

    // Calculate the number of "empty" days to display at the beginning of the month based on the day of the week displayed first, and the first day of the month selected.
    const blankDaysAtStartCount = React.useMemo(() => {
      const monthStartsOnWeekday = days[0]?.indexInWeek ?? 0;
      return Maths.positiveModulo(monthStartsOnWeekday - weekdayStartIndex, 7);
    }, [days, weekdayStartIndex]);

    return (
      <div ref={ref} className="arm-calendar-view">
        <div className="arm-calendar-view-controls">
          <Button className="arm-calendar-view-button arm-calendar-view-button-prev" onClick={onBackClicked}>
            &lt;
          </Button>
          <Select className="arm-calendar-view-select arm-calendar-view-select-month" bind={currentMonthBinding} options={monthOptions} />
          <Select className="arm-calendar-view-select arm-calendar-view-select-year" bind={currentYearBinding} options={yearOptions} />
          <Button className="arm-calendar-view-button arm-calendar-view-button-next" onClick={onForwardClicked}>
            &gt;
          </Button>
        </div>
        <div className="arm-calendar-date-grid">
          <div className="arm-calendar-date-grid-headings">
            {dayOfWeekHeadings.map((heading, index) => (
              <div key={index} className="arm-calendar-date-grid-heading">
                {heading}
              </div>
            ))}
          </div>
          <div className="arm-calendar-date-grid-days">
            {Arrays.repeat(blankDaysAtStartCount, (index) => (
              <div key={index} className="arm-calendar-date-grid-day arm-calendar-date-grid-day-empty" />
            ))}
            {displayDays.map((displayDay) => (
              <Button
                className={ClassNames.concat('arm-calendar-date-grid-day', displayDay.day.highlightedClassName)}
                onClick={() => onDayClicked?.(displayDay.day)}
                key={displayDay.day.numberInMonth}
                data-selected={displayDay.day.isSelected}
                disabled={displayDay.day.isDisabled}
                data-today={displayDay.day.isToday}
                data-range-start={displayDay.day.isRangeStart}
                data-range-middle={displayDay.day.isRangeMiddle}
                data-range-end={displayDay.day.isRangeEnd}
                data-highlight={displayDay.day.isHighlighted}
              >
                {displayDay.displayFormat}
                {displayDay.day.isHighlighted && <div className="arm-calendar-date-grid-day-highlight" />}
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  }
);
