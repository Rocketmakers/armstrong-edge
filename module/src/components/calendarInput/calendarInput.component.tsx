import { isSameDay, isValid } from 'date-fns';
import * as React from 'react';

import { Calendar, Form } from '../..';
import { IBindingProps } from '../../hooks/form';
import { Dates } from '../../utils/dates';
import { AutoCompleteInput } from '../autoCompleteInput';
import { Button } from '../button';
import { CalendarView } from '../calendarView/calendarView.component';
import { IconUtils } from '../icon';
import { calendarDayToDateLike, dateObjectToDateLike, getDayInputOptions, getMonthInputOptions, getYearInputOptions } from './calendarInput.utils';

interface ICalendarInputProps extends Omit<Calendar.IConfig, 'selectedDate'> {
  /**
   * (number) An optional "day of the week" index to be the first day of the week.
   * - By default, weeks will start on Sunday (index 0)
   * - Indexes range from Sunday = 0 to Saturday = 6
   */
  weekdayStartIndex?: number;
  /**
   * (boolean) Should the calendar close when a date is selected from inside?
   * - Defaults to `true`
   */
  closeCalendarOnDayClick?: boolean;
  bind: IBindingProps<Dates.DateLike>;
}

export const CalendarInput = React.forwardRef<HTMLDivElement, ICalendarInputProps>(
  (
    {
      bind,
      formatString,
      highlights,
      locale,
      max,
      min,
      rangeTo,
      weekdayStartIndex,
      dayDisplayFormat,
      yearDisplayFormat,
      monthDisplayFormat,
      closeCalendarOnDayClick,
    },
    ref
  ) => {
    const [selectedDate, setSelectedDate] = Form.useBindingTools(bind);

    const { monthYearFormProp, stepMonth, days, months, years, selectedDateParsed } = Calendar.use({
      formatString,
      min,
      highlights,
      locale,
      max,
      rangeTo,
      selectedDate,
    });
    const [calendarOpen, setCalendarOpen] = React.useState(false);

    const { formProp, formState } = Form.use({
      day: selectedDateParsed.getDate(),
      year: selectedDateParsed.getFullYear(),
      month: selectedDateParsed.getMonth(),
    });

    const onDayClicked = React.useCallback(
      (day: Calendar.IDay) => {
        setSelectedDate(calendarDayToDateLike(day, selectedDate ? typeof selectedDate : 'string', formatString, locale));
        if (closeCalendarOnDayClick) {
          setCalendarOpen(false);
        }
      },
      [selectedDate, setSelectedDate, formatString, locale, closeCalendarOnDayClick, setCalendarOpen]
    );

    React.useEffect(() => {
      const date = new Date(formState!.year, formState!.month, formState!.day);
      if (!isValid(date)) {
        bind.addValidationError('Invalid date selection');
        return;
      }
      bind.clearValidationErrors();
      if (!selectedDate || !isSameDay(date, Dates.dateLikeToDate(selectedDate, formatString, locale)!)) {
        setSelectedDate(dateObjectToDateLike(date, selectedDate ? typeof selectedDate : 'string', formatString, locale));
      }
    }, [formState]);

    const dayOptions = React.useMemo(() => {
      return getDayInputOptions(days, dayDisplayFormat!, locale);
    }, [days, locale, dayDisplayFormat]);

    const monthOptions = React.useMemo(() => {
      return getMonthInputOptions(months, monthDisplayFormat!, locale);
    }, [months, locale, monthDisplayFormat]);

    const yearOptions = React.useMemo(() => {
      return getYearInputOptions(years, yearDisplayFormat!, locale);
    }, [years, locale, yearDisplayFormat]);

    return (
      <div ref={ref} className="arm-calendar-input-wrapper">
        <div className="arm-calendar-selects-wrapper">
          <Button leftIcon={IconUtils.getIconDefinition('Icomoon', 'calendar')} onClick={() => setCalendarOpen(!calendarOpen)} />
          <AutoCompleteInput bind={formProp('day').bind()} options={dayOptions} />
          <AutoCompleteInput bind={formProp('month').bind()} options={monthOptions} />
          <AutoCompleteInput bind={formProp('year').bind()} options={yearOptions} />
        </div>
        {calendarOpen && (
          <CalendarView
            weekdayStartIndex={weekdayStartIndex!}
            currentYearBinding={monthYearFormProp('viewingYear').bind()}
            currentMonthBinding={monthYearFormProp('viewingMonth').bind()}
            onDayClicked={onDayClicked}
            onBackClicked={() => stepMonth('back')}
            onForwardClicked={() => stepMonth('forward')}
            days={days}
            months={months}
            years={years}
          />
        )}
      </div>
    );
  }
);

CalendarInput.defaultProps = {
  weekdayStartIndex: 0,
  dayDisplayFormat: 'dd',
  monthDisplayFormat: 'MM',
  yearDisplayFormat: 'yyyy',
  closeCalendarOnDayClick: true,
};
