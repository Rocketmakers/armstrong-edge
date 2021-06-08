import * as React from 'react';

import { IConfig as ICalendarConfig, IDay, use as useCalendar } from '../../hooks/calendar';
import { Arrays } from '../../utils/arrays';
import { ClassNames } from '../../utils/classNames';
import { Dates } from '../../utils/dates';
import { Maths } from '../../utils/maths';
import { Button } from '../button';
import { NativeSelectInput } from '../nativeSelectInput';
import { getDayOfWeekHeadings } from './calendarView.utils';

export interface ICalendarProps extends ICalendarConfig {
  /**
   * (number) An optional "day of the week" index to be the first day of the week.
   * - By default, weeks will start on Sunday (index 0)
   * - Indexes range from Sunday = 0 to Saturday = 6
   */
  weekdayStartIndex?: number;
  /**
   * ((date: Date, dateString: string) => void) An optional function to call when a date is clicked.
   * @param date The date object of the date that has been clicked.
   * @param dateString A formatted string representation of the date that has been clicked (will use the `formatString` prop if passed, or fall back to strict ISO.)
   */
  onDateClicked?: (date: Date, dateString: string) => void;
}

export const Calendar = React.forwardRef<HTMLDivElement, ICalendarProps>(
  ({ selectedDate, min, max, weekdayStartIndex, formatString, onDateClicked, locale, rangeTo, highlights }, ref) => {
    const { days, months, years, monthYearFormProp, stepMonth } = useCalendar({
      formatString,
      min,
      highlights,
      locale,
      max,
      rangeTo,
      selectedDate,
    });

    const dayOfWeekHeadings = React.useMemo(() => {
      return Arrays.reIndex(getDayOfWeekHeadings(locale), weekdayStartIndex!);
    }, [weekdayStartIndex, locale]);

    // Calculate the number of "empty" days to display at the beginning of the month based on the day of the week displayed first, and the first day of the month selected.
    const blankDaysAtStartCount = React.useMemo(() => {
      const monthStartsOnWeekday = days[0].indexInWeek;
      return Maths.positiveModulo(monthStartsOnWeekday - weekdayStartIndex!, 7);
    }, [days, weekdayStartIndex]);

    // Click event listeners
    const onBackClicked = React.useCallback(() => {
      stepMonth('back');
    }, [stepMonth]);

    const onForwardClicked = React.useCallback(() => {
      stepMonth('forward');
    }, [stepMonth]);

    const onDayClicked = React.useCallback(
      (day: IDay) => {
        onDateClicked?.(day.date, Dates.dateToString(day.date, formatString, locale));
      },
      [onDateClicked, formatString, locale]
    );

    return (
      <div ref={ref} className="arm-calendar-view">
        <div className="arm-calendar-view-controls">
          <Button className="arm-calendar-view-button arm-calendar-view-button-prev" onClick={onBackClicked}>
            &lt;
          </Button>
          <NativeSelectInput
            className="arm-calendar-view-select arm-calendar-view-select-month"
            bind={monthYearFormProp('viewingMonth').bind()}
            options={months.map((month, index) => ({ id: index, name: month.name, data: month, disabled: month.isDisabled }))}
          />
          <NativeSelectInput
            className="arm-calendar-view-select arm-calendar-view-select-year"
            bind={monthYearFormProp('viewingYear').bind()}
            options={years.map((year) => ({ id: year, name: year.toString() }))}
          />
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
            {days.map((day) => (
              <Button
                className={ClassNames.concat('arm-calendar-date-grid-day', day.highlightedClassName)}
                onClick={() => onDayClicked(day)}
                key={day.numberInMonth}
                data-selected={day.isSelected}
                disabled={day.isDisabled}
                data-today={day.isToday}
                data-range-start={day.isRangeStart}
                data-range-middle={day.isRangeMiddle}
                data-range-end={day.isRangeEnd}
                data-highlight={day.isHighlighted}
              >
                {day.numberInMonth.toString()}
                {day.isHighlighted && <div className="arm-calendar-date-grid-day-highlight" />}
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

CalendarView.defaultProps = {
  selectedDate: new Date(),
  weekdayStartIndex: 0,
};
