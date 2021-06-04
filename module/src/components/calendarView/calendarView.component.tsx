import * as React from 'react';

import { use as useForm } from '../../hooks/form';
import { Arrays } from '../../utils/arrays';
import { ClassNames } from '../../utils/classNames';
import { Maths } from '../../utils/maths';
import { Button } from '../button';
import { NativeSelectInput } from '../nativeSelectInput';
import {
  DateLike,
  dateLikeToDate,
  DateLocale,
  dateToString,
  getDayOfWeekHeadings,
  getDays,
  getMonths,
  getYears,
  ICalendarHighlight,
  ICalendarHighlightParsed,
  IDay,
} from './calendarView.utils';

interface ICalendarViewProps {
  selectedDate: DateLike;
  min?: DateLike;
  max?: DateLike;
  rangeTo?: DateLike;
  highlights?: ICalendarHighlight[];
  weekdayStartIndex?: number;
  formatString?: string;
  onDateClicked?: (date: Date, dateString: string) => void;
  locale?: DateLocale;
}

export const CalendarView = React.forwardRef<HTMLDivElement, ICalendarViewProps>(
  ({ selectedDate, min, max, weekdayStartIndex, formatString, onDateClicked, locale, rangeTo, highlights }, ref) => {
    const selectedDateParsed = React.useMemo(() => dateLikeToDate(selectedDate, formatString, locale)!, [selectedDate, formatString, locale]);
    const minParsed = React.useMemo(() => dateLikeToDate(min, formatString, locale), [min, formatString, locale]);
    const maxParsed = React.useMemo(() => dateLikeToDate(max, formatString, locale), [max, formatString, locale]);
    const rangeToParsed = React.useMemo(() => dateLikeToDate(rangeTo, formatString, locale), [rangeTo, formatString, locale]);
    const highlightsParsed = React.useMemo<ICalendarHighlightParsed[] | undefined>(() => {
      return highlights?.map((highlight) => ({
        ...highlight,
        date: dateLikeToDate(highlight.date, formatString, locale)!,
      }));
    }, [highlights, formatString, locale]);

    const { formState, formProp } = useForm({
      viewingMonth: selectedDateParsed.getMonth(),
      viewingYear: selectedDateParsed.getFullYear(),
    });

    const dayOfWeekHeadings = React.useMemo(() => {
      return Arrays.reIndex(getDayOfWeekHeadings(), weekdayStartIndex!);
    }, [weekdayStartIndex]);

    const selectableYears = React.useMemo(() => {
      return getYears(minParsed, maxParsed);
    }, [minParsed, maxParsed]);

    const selectableMonths = React.useMemo(() => {
      return getMonths(formState!.viewingYear, minParsed, maxParsed);
    }, [minParsed, maxParsed, formState!.viewingYear]);

    const selectableDays = React.useMemo(() => {
      return getDays(formState!.viewingMonth, formState!.viewingYear, selectedDateParsed, minParsed, maxParsed, rangeToParsed, highlightsParsed);
    }, [formState, minParsed, maxParsed, selectedDateParsed, rangeToParsed, highlightsParsed]);

    const blankDaysAtStartCount = React.useMemo(() => {
      const monthStartsOnWeekday = selectableDays[0].indexInWeek;
      return Maths.positiveModulo(monthStartsOnWeekday - weekdayStartIndex!, 7);
    }, [selectableDays, weekdayStartIndex]);

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

    const onBackClicked = React.useCallback(() => {
      stepMonth('back');
    }, [stepMonth]);

    const onForwardClicked = React.useCallback(() => {
      stepMonth('forward');
    }, [stepMonth]);

    const onDayClicked = React.useCallback(
      (day: IDay) => {
        onDateClicked?.(day.date, dateToString(day.date, formatString, locale));
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
            bind={formProp('viewingMonth').bind()}
            options={selectableMonths.map((month, index) => ({ id: index, name: month.name, data: month, disabled: month.isDisabled }))}
          />
          <NativeSelectInput
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
            {Arrays.range(blankDaysAtStartCount).map((index) => (
              <div key={index} className="arm-calendar-date-grid-day arm-calendar-date-grid-day-empty" />
            ))}
            {selectableDays.map((day) => (
              <Button
                className="arm-calendar-date-grid-day"
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
                {day.isHighlighted && <div className={ClassNames.concat('arm-calendar-date-grid-day-highlight', day.highlightedClassName)} />}
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
  weekdayStartIndex: 6,
};
