import { isSameDay, isValid } from 'date-fns';
import * as React from 'react';

import { Calendar, Form } from '../..';
import { IBindingProps } from '../../hooks/form';
import { Dates } from '../../utils/dates';
import { AutoCompleteInput } from '../autoCompleteInput';
import { Button } from '../button';
import { CalendarView } from '../calendarVIew/calendarView.component';
import { IconUtils } from '../icon';
import { calendarDayToDateLike, dateObjectToDateLike } from './calendarInput.utils';

interface ICalendarInputProps extends Omit<Calendar.IConfig, 'selectedDate'> {
  /**
   * (number) An optional "day of the week" index to be the first day of the week.
   * - By default, weeks will start on Sunday (index 0)
   * - Indexes range from Sunday = 0 to Saturday = 6
   */
  weekdayStartIndex?: number;
  bind: IBindingProps<Dates.DateLike>;
}

export const CalendarInput = React.forwardRef<HTMLDivElement, ICalendarInputProps>(
  ({ bind, formatString, highlights, locale, max, min, rangeTo, weekdayStartIndex }, ref) => {
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

    console.log("NEW DATE!", selectedDateParsed);

    const { formProp, formState } = Form.use({
      day: selectedDateParsed.getDate(),
      year: selectedDateParsed.getFullYear(),
      month: selectedDateParsed.getMonth(),
    });

    console.log("NEW STATE!", formState);

    const onDayClicked = React.useCallback(
      (day: Calendar.IDay) => {
        setSelectedDate(calendarDayToDateLike(day, selectedDate ? typeof selectedDate : 'string', formatString, locale));
      },
      [selectedDate, setSelectedDate, formatString, locale]
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

    return (
      <div ref={ref} className="arm-calendar-input-wrapper">
        <div className="arm-calendar-selects-wrapper">
          <Button leftIcon={IconUtils.getIconDefinition('Icomoon', 'calendar')} onClick={() => setCalendarOpen(!calendarOpen)} />
          <AutoCompleteInput
            bind={formProp('day').bind()}
            options={days.map((day) => ({ id: day.numberInMonth, name: day.numberInMonth.toString() }))}
          />
          <AutoCompleteInput
            bind={formProp('month').bind()}
            options={months.map((month) => ({ id: month.indexInYear, name: (month.indexInYear + 1).toString() }))}
          />
          <AutoCompleteInput bind={formProp('year').bind()} options={years.map((year) => ({ id: year, name: year.toString() }))} />
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
};
