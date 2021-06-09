import * as React from 'react';

import { use as useForm } from '../../hooks/form';
import { Arrays } from '../../utils/arrays';
import { ClassNames } from '../../utils/classNames';
import { Dates } from '../../utils/dates';
import { Maths } from '../../utils/maths';
import { Button } from '../button';
import { Select } from '../select';
import { ICalendarHighlight, ICalendarHighlightParsed, IDay } from './calendarView.types';
import { getDayOfWeekHeadings, getDays, getMonths, getYears } from './calendarView.utils';

interface ICalendarViewProps {
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
   * (number) An optional "day of the week" index to be the first day of the week.
   * - By default, weeks will start on Sunday (index 0)
   * - Indexes range from Sunday = 0 to Saturday = 6
   */
  weekdayStartIndex?: number;
  /**
   * (string) A formatter to apply to all passed in date strings.
   * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
   * - If date strings are used without this prop, strict ISO format will be assumed.
   * - This format will not be used if dates are passed as `Date` objects rather than strings.
   */
  formatString?: string;
  /**
   * ((date: Date, dateString: string) => void) An optional function to call when a date is clicked.
   * @param date The date object of the date that has been clicked.
   * @param dateString A formatted string representation of the date that has been clicked (will use the `formatString` prop if passed, or fall back to strict ISO.)
   */
  onDateClicked?: (date: Date, dateString: string) => void;
  /**
   * An optional locale to apply to all date formatting.
   * - Must be a date-fns compliant `Locale` object (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/Locale))
   * - If no locale is passed, `en-GB` will be used as the system default for all date formatting.
   */
  locale?: Dates.DateLocale;
}

export const CalendarView = React.forwardRef<HTMLDivElement, ICalendarViewProps>(
  ({ selectedDate, min, max, weekdayStartIndex, formatString, onDateClicked, locale, rangeTo, highlights }, ref) => {
    // Parse all `Dates.DateLike` types into strict date objects
    const selectedDateParsed = React.useMemo(() => Dates.dateLikeToDate(selectedDate, formatString, locale)!, [selectedDate, formatString, locale]);
    const minParsed = React.useMemo(() => Dates.dateLikeToDate(min, formatString, locale), [min, formatString, locale]);
    const maxParsed = React.useMemo(() => Dates.dateLikeToDate(max, formatString, locale), [max, formatString, locale]);
    const rangeToParsed = React.useMemo(() => Dates.dateLikeToDate(rangeTo, formatString, locale), [rangeTo, formatString, locale]);
    const highlightsParsed = React.useMemo<ICalendarHighlightParsed[] | undefined>(() => {
      return highlights?.map((highlight) => ({
        ...highlight,
        date: Dates.dateLikeToDate(highlight.date, formatString, locale)!,
      }));
    }, [highlights, formatString, locale]);

    // Set up a simple form for use by the month/year selects.
    const { formState, formProp } = useForm({
      viewingMonth: selectedDateParsed.getMonth(),
      viewingYear: selectedDateParsed.getFullYear(),
    });

    // Create lists of years, months, days and headings for display.
    const dayOfWeekHeadings = React.useMemo(() => {
      return Arrays.reIndex(getDayOfWeekHeadings(locale), weekdayStartIndex!);
    }, [weekdayStartIndex, locale]);

    const selectableYears = React.useMemo(() => {
      return getYears(minParsed, maxParsed);
    }, [minParsed, maxParsed]);

    const selectableMonths = React.useMemo(() => {
      return getMonths(formState!.viewingYear, minParsed, maxParsed, locale);
    }, [minParsed, maxParsed, formState!.viewingYear, locale]);

    const selectableDays = React.useMemo(() => {
      return getDays(formState!.viewingMonth, formState!.viewingYear, selectedDateParsed, minParsed, maxParsed, rangeToParsed, highlightsParsed);
    }, [formState, minParsed, maxParsed, selectedDateParsed, rangeToParsed, highlightsParsed]);

    // Calculate the number of "empty" days to display at the beginning of the month based on the day of the week displayed first, and the first day of the month selected.
    const blankDaysAtStartCount = React.useMemo(() => {
      const monthStartsOnWeekday = selectableDays[0].indexInWeek;
      return Maths.positiveModulo(monthStartsOnWeekday - weekdayStartIndex!, 7);
    }, [selectableDays, weekdayStartIndex]);

    // Function to navigate back and forth through months.
    const stepMonth = React.useCallback(
      (direction: 'back' | 'forward') => {
        const currentMonth = formState!.viewingMonth;
        const nextMonth = direction === 'forward' ? currentMonth + 1 : currentMonth - 1;
        if (selectableMonths.map((month) => month.indexInYear).indexOf(nextMonth) > -1) {
          formProp('viewingMonth').set(nextMonth);
        }
      },
      [formState, formProp, selectableMonths]
    );

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
          <Select
            className="arm-calendar-view-select arm-calendar-view-select-month"
            bind={formProp('viewingMonth').bind()}
            options={selectableMonths.map((month, index) => ({ id: index, name: month.name, data: month, disabled: month.isDisabled }))}
          />
          <Select
            className="arm-calendar-view-select arm-calendar-view-select-year"
            bind={formProp('viewingYear').bind()}
            options={selectableYears.map((year) => ({ id: year, name: year.toString() }))}
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
            {selectableDays.map((day) => (
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
