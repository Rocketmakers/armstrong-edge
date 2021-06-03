import * as React from 'react';

import { use as useForm } from '../../hooks/form';
import { Arrays } from '../../utils/arrays';
import { Dates } from '../../utils/dates';
import { Maths } from '../../utils/maths';
import { Button } from '../button';
import { NativeSelectInput } from '../nativeSelectInput';

interface ICalendarViewProps {
  selectedDate: Date;
  min?: Date;
  max?: Date;
  rangeDate?: Date;
  highlightedDate?: Date;
  weekdayStartIndex?: number;
}

export const CalendarView: React.FC<ICalendarViewProps> = ({ selectedDate, min, max, weekdayStartIndex }) => {
  const { formState, formProp } = useForm({
    viewingMonth: selectedDate.getMonth(),
    viewingYear: selectedDate.getFullYear(),
  });

  const dayOfWeekHeadings = React.useMemo(() => {
    return Arrays.reIndex(Dates.getDayOfWeekHeadings(), weekdayStartIndex!);
  }, [weekdayStartIndex]);

  const selectableYears = React.useMemo(() => {
    return Dates.getYears(min, max);
  }, [min, max]);

  const selectableMonths = React.useMemo(() => {
    return Dates.getMonths(formState!.viewingYear, min, max);
  }, [min, max, formState!.viewingYear]);

  const selectableDays = React.useMemo(() => {
    return Dates.getDays(formState!.viewingMonth, formState!.viewingYear, selectedDate, min, max);
  }, [formState, min, max, selectedDate]);

  const blankDaysAtStartCount = React.useMemo(() => {
    const monthStartsOnWeekday = selectableDays[0].indexInWeek;
    return Maths.mod(monthStartsOnWeekday - weekdayStartIndex!, 7);
  }, [selectableDays, weekdayStartIndex]);

  return (
    <div className="arm-calendar-view">
      <div className="arm-calendar-view-buttons">
        <Button>&lt;</Button>
        <NativeSelectInput
          bind={formProp('viewingMonth').bind()}
          options={selectableMonths.map((month, index) => ({ id: index, name: month.name, data: month }))}
        />
        <NativeSelectInput bind={formProp('viewingYear').bind()} options={selectableYears.map((year) => ({ id: year, name: year.toString() }))} />
        <Button>&gt;</Button>
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
            <div key={day.numberInMonth} data-selected={day.isSelected} className="arm-calendar-date-grid-day">
              {day.numberInMonth.toString()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

CalendarView.defaultProps = {
  selectedDate: new Date(),
  weekdayStartIndex: 6,
};
