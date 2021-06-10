import { isSameDay, isValid } from 'date-fns';
import * as React from 'react';

import { Calendar, Form } from '../..';
import { IBindingProps } from '../../hooks/form';
import { Dates } from '../../utils/dates';
import { AutoCompleteInput, IAutoCompleteInputProps } from '../autoCompleteInput';
import { CalendarView, ICalendarViewProps } from '../calendarView/calendarView.component';
import { IconUtils } from '../icon';
import { IconButton } from '../iconButton';
import { IStatusWrapperProps, StatusWrapper } from '../statusWrapper';
import { calendarDayToDateLike, dateObjectToDateLike, getDaySelectOptions } from './calendarInput.utils';

type AdditionalInputProps = Omit<IAutoCompleteInputProps<number>, 'bind' | 'options' | 'min' | 'max'>;
interface ICalendarInputProps
  extends Omit<Calendar.IConfig, 'selectedDate'>,
    Pick<
      ICalendarViewProps,
      | 'weekdayStartIndex'
      | 'calendarDayDisplayFormat'
      | 'calendarMonthSelectDisplayFormat'
      | 'calendarYearSelectDisplayFormat'
      | 'calendarDayOfTheWeekHeadingDisplayFormat'
    >,
    IStatusWrapperProps {
  /**
   * (boolean) Should the calendar close when a date is selected from inside?
   * - Defaults to `true`
   */
  closeCalendarOnDayClick?: boolean;
  /**
   * The binding for the input.
   * - Can be bound to a string, number or Date object.
   * - WARNING: If no initial value is passed it will assume the type is string.
   */
  bind: IBindingProps<Dates.DateLike>;
  additionalDayInputProps?: AdditionalInputProps;
  additionalMonthInputProps?: AdditionalInputProps;
  additionalYearInputProps?: AdditionalInputProps;
}
interface IDateInputFormData {
  day: number;
  month: number;
  year: number;
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
      dayInputDisplayFormat,
      yearInputDisplayFormat,
      monthInputDisplayFormat,
      closeCalendarOnDayClick,
      additionalDayInputProps,
      additionalMonthInputProps,
      additionalYearInputProps,
      error,
      errorIcon,
      validationErrorMessages,
      calendarDayDisplayFormat,
      calendarDayOfTheWeekHeadingDisplayFormat,
      calendarMonthSelectDisplayFormat,
      calendarYearSelectDisplayFormat,
      pending,
      statusPosition,
      validationMode,
    },
    ref
  ) => {
    const [selectedDate, setSelectedDate, bindConfig] = Form.useBindingTools(bind, {
      validationErrorMessages,
      validationMode,
      validationErrorIcon: errorIcon,
    });

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

    const { formProp, formState } = Form.use<Partial<IDateInputFormData>>(
      (selectedDate && {
        day: selectedDateParsed.getDate(),
        year: selectedDateParsed.getFullYear(),
        month: selectedDateParsed.getMonth(),
      }) ||
        {}
    );

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
      if (formState?.day && (formState?.month ?? -1) > -1 && formState?.year) {
        const date = new Date(formState.year, formState.month!, formState.day);
        if (!isValid(date)) {
          bind.addValidationError('Invalid date selection');
          return;
        }
        bind.clearValidationErrors();
        if (!selectedDate || !isSameDay(date, Dates.dateLikeToDate(selectedDate, formatString, locale)!)) {
          setSelectedDate(dateObjectToDateLike(date, selectedDate ? typeof selectedDate : 'string', formatString, locale));
        }
      }
    }, [formState]);

    const dayOptions = React.useMemo(() => {
      return getDaySelectOptions(days, dayInputDisplayFormat!, locale);
    }, [days, locale, dayInputDisplayFormat]);

    const monthOptions = React.useMemo(() => {
      return Dates.getMonthSelectOptions(months, monthInputDisplayFormat!, locale);
    }, [months, locale, monthInputDisplayFormat]);

    const yearOptions = React.useMemo(() => {
      return Dates.getYearSelectOptions(years, yearInputDisplayFormat!, locale);
    }, [years, locale, yearInputDisplayFormat]);

    return (
      <div ref={ref} className="arm-calendar-input-wrapper">
        <div className="arm-calendar-selects-wrapper">
          <StatusWrapper
            error={error}
            validationErrorMessages={bindConfig.validationErrorMessages}
            errorIcon={bindConfig.validationErrorIcon}
            statusPosition={statusPosition}
            pending={pending}
            validationMode={bindConfig.validationMode}
          >
            <IconButton icon={IconUtils.getIconDefinition('Icomoon', 'calendar')} onClick={() => setCalendarOpen(!calendarOpen)} />
            <AutoCompleteInput {...(additionalDayInputProps ?? {})} bind={formProp('day').bind()} options={dayOptions} />
            <AutoCompleteInput {...(additionalMonthInputProps ?? {})} bind={formProp('month').bind()} options={monthOptions} />
            <AutoCompleteInput {...(additionalYearInputProps ?? {})} bind={formProp('year').bind()} options={yearOptions} />
          </StatusWrapper>
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
            calendarDayDisplayFormat={calendarDayDisplayFormat}
            calendarDayOfTheWeekHeadingDisplayFormat={calendarDayOfTheWeekHeadingDisplayFormat}
            calendarMonthSelectDisplayFormat={calendarMonthSelectDisplayFormat}
            calendarYearSelectDisplayFormat={calendarYearSelectDisplayFormat}
          />
        )}
      </div>
    );
  }
);

CalendarInput.defaultProps = {
  weekdayStartIndex: 0,
  dayInputDisplayFormat: 'dd',
  monthInputDisplayFormat: 'MM',
  yearInputDisplayFormat: 'yyyy',
  closeCalendarOnDayClick: true,
};
