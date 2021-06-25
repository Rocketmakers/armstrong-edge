import { isSameDay } from 'date-fns';
import * as React from 'react';

import { Calendar, Form } from '../..';
import { IBindingProps } from '../../hooks/form';
import { Dates } from '../../utils/dates';
import { AutoCompleteInput, IAutoCompleteInputProps } from '../autoCompleteInput';
import { CalendarDisplay, ICalendarDisplayProps } from '../calendarDisplay/calendarDisplay.component';
import { Dropdown } from '../dropdown';
import { IconUtils } from '../icon';
import { IconButton } from '../iconButton';
import { InputWrapper } from '../inputWrapper';
import { Modal } from '../modal';
import { IStatusWrapperProps } from '../statusWrapper';
import { calendarDayToDateLike, dateObjectToDateLike, getDaySelectOptions, validateDateSelection } from './calendarInput.utils';

type AdditionalInputProps = Omit<IAutoCompleteInputProps<number>, 'bind' | 'options' | 'min' | 'max'>;

export type CalendarInputCalendarPosition = 'dropdown' | 'modal' | 'above' | 'below';
export interface ICalendarInputProps
  extends Omit<Calendar.IConfig, 'selectedDate'>,
    Pick<
      ICalendarDisplayProps,
      | 'weekdayStartIndex'
      | 'calendarDayDisplayFormat'
      | 'calendarMonthSelectDisplayFormat'
      | 'calendarYearSelectDisplayFormat'
      | 'calendarDayOfTheWeekHeadingDisplayFormat'
    >,
    IStatusWrapperProps {
  /**
   * Should the calendar close when a date is selected from inside?
   * - Defaults to `true`
   */
  closeCalendarOnDayClick?: boolean;
  /**
   * The binding for the input.
   * - Can be bound to a string, number or Date object.
   * - WARNING: If no initial value is passed it will assume the type is string.
   */
  bind: IBindingProps<Dates.DateLike>;
  /**
   * The order of the three select inputs.
   * - Defaults to 'day-month-year'
   */
  inputOrder?: 'day-month-year' | 'year-month-day';
  /**
   * Any additional props for the "day" autocomplete input
   */
  additionalDayInputProps?: AdditionalInputProps;
  /**
   * Any additional props for the "month" autocomplete input
   */
  additionalMonthInputProps?: AdditionalInputProps;
  /**
   * Any additional props for the "year" autocomplete input
   */
  additionalYearInputProps?: AdditionalInputProps;
  /**
   * An optional alternative display mode for the input.
   * - `calendar` will render the calendar button and read only inputs, this will force the user to select a date from the calendar.
   * - `inputs` will render the inputs only, hiding the calendar button and forcing the user to select/enter a date from the inputs.
   * - `both` will allow users to select a date from the calendar OR enter one using the inputs.
   * @default both
   */
  displayMode?: 'calendar' | 'inputs' | 'both';

  /**
   * The position to show the calendar - can show below the input in a dropdown, in a modal, or above or below the input
   */
  calendarPosition?: CalendarInputCalendarPosition;

  /**
   * Should the calendar stay open? - useful in conjunction with calendarPosition, not compatible with calendarPosition="modal"
   */
  keepCalendarOpen?: boolean;

  /**
   * A formatter to apply to the current date when displayMode is set to calendar.
   * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
   * - If date strings are used without this prop, strict ISO format will be assumed.
   * - This format will not be used if dates are passed as `Date` objects rather than strings.
   */
  displayFormatString?: string;

  /** a string used for a placeholder if a date isn't given and the displayMode is set to "calendar" */
  placeholder?: string;
}

/** Type representing the internal form data within the calendar input */
interface IDateInputFormData {
  /** The selected day (1 - 31) */
  day: number;
  /** The selected month index (0 - 11) */
  month: number;
  /** The selected year */
  year: number;
}

/**
 * An input used for selecting a date. Supports the following input methods:
 * - Day/month/year selection via dropdowns.
 * - Date selection via a calendar view.
 * - Date input via the keyboard in day/month/year format.
 */
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
      inputOrder,
      displayMode,
      displayFormatString,
      placeholder,
      calendarPosition,
      keepCalendarOpen,
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
        if (!validateDateSelection(formState.day, formState.month!, formState.year)) {
          bind.addValidationError('Invalid date selection');
          return;
        }
        bind.clearValidationErrors();
        const date = new Date(formState.year, formState.month!, formState.day);
        if (!selectedDate || !isSameDay(date, Dates.dateLikeToDate(selectedDate, formatString, locale)!)) {
          const newDate = dateObjectToDateLike(date, selectedDate ? typeof selectedDate : 'string', formatString, locale);
          setSelectedDate(newDate);
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

    const showCalendarButton = displayMode !== 'inputs';
    const disableInputs = displayMode === 'calendar';

    const dayInputProps: IAutoCompleteInputProps<number> = { ...(additionalDayInputProps ?? {}), bind: formProp('day').bind(), options: dayOptions };
    const yearInputProps: IAutoCompleteInputProps<number> = {
      ...(additionalYearInputProps ?? {}),
      bind: formProp('year').bind(),
      options: yearOptions,
    };

    const calendarDisplayProps = {
      weekdayStartIndex: weekdayStartIndex!,
      currentYearBinding: monthYearFormProp('viewingYear').bind(),
      currentMonthBinding: monthYearFormProp('viewingMonth').bind(),
      onDayClicked,
      onBackClicked: () => stepMonth('back'),
      onForwardClicked: () => stepMonth('forward'),
      days,
      months,
      years,
      calendarDayDisplayFormat,
      calendarDayOfTheWeekHeadingDisplayFormat,
      calendarMonthSelectDisplayFormat,
      calendarYearSelectDisplayFormat,
    };

    const onClickWrapperEvent = React.useCallback(() => {
      if (displayMode === 'calendar') {
        setCalendarOpen(!calendarOpen);
      }
    }, [calendarOpen, displayMode]);

    const formattedSelectedDate = React.useMemo(() => {
      if (displayMode === 'calendar' && selectedDate) {
        return Dates.dateToString(Dates.dateLikeToDate(selectedDate)!, displayFormatString);
      }
    }, [displayMode, selectedDate, displayFormatString]);

    return (
      <>
        <div
          ref={ref}
          className="arm-calendar-input"
          data-calendar-open={keepCalendarOpen || calendarOpen}
          onClick={onClickWrapperEvent}
          data-display-mode={displayMode}
        >
          <Dropdown
            isOpen={calendarPosition === 'dropdown' && (calendarOpen || !!keepCalendarOpen)}
            onOpenChange={setCalendarOpen}
            dropdownContent={<CalendarDisplay {...calendarDisplayProps} />}
            contentClassName="arm-calendar-input-dropdown-content"
            openWhenClickInside={false}
            openWhenFocusInside={false}
          >
            <InputWrapper
              error={error}
              validationErrorMessages={bindConfig.validationErrorMessages}
              errorIcon={bindConfig.validationErrorIcon}
              statusPosition={statusPosition}
              pending={pending}
              validationMode={bindConfig.validationMode}
              className="arm-calendar-input-inner"
              above={calendarPosition === 'above' && (calendarOpen || keepCalendarOpen) ? <CalendarDisplay {...calendarDisplayProps} /> : undefined}
              below={calendarPosition === 'below' && (calendarOpen || keepCalendarOpen) ? <CalendarDisplay {...calendarDisplayProps} /> : undefined}
            >
              {showCalendarButton && !keepCalendarOpen && (
                <IconButton iconOnly icon={IconUtils.getIconDefinition('Icomoon', 'calendar')} onClick={() => setCalendarOpen(!calendarOpen)} />
              )}

              {disableInputs ? (
                <div className="arm-calendar-input-preview">
                  {selectedDate ? <p>{formattedSelectedDate}</p> : <p className="arm-calendar-input-placeholder">{placeholder}</p>}
                </div>
              ) : (
                <>
                  <AutoCompleteInput
                    className="arm-calendar-select"
                    {...(inputOrder === 'day-month-year' ? dayInputProps : yearInputProps)}
                    placeholder={inputOrder === 'day-month-year' ? dayInputProps.placeholder || 'day' : yearInputProps.placeholder || 'year'}
                    disabled={disableInputs}
                  />
                  <AutoCompleteInput
                    className="arm-calendar-select"
                    {...(additionalMonthInputProps ?? {})}
                    bind={formProp('month').bind()}
                    disabled={disableInputs}
                    options={monthOptions}
                    placeholder={additionalMonthInputProps?.placeholder || 'month'}
                  />
                  <AutoCompleteInput
                    className="arm-calendar-select"
                    {...(inputOrder === 'day-month-year' ? yearInputProps : dayInputProps)}
                    placeholder={inputOrder === 'day-month-year' ? yearInputProps.placeholder || 'year' : dayInputProps.placeholder || 'day'}
                    disabled={disableInputs}
                  />
                </>
              )}
            </InputWrapper>
          </Dropdown>
        </div>

        <Modal isOpen={calendarPosition === 'modal' && calendarOpen} onOpenChange={setCalendarOpen} darkenBackground>
          <CalendarDisplay {...calendarDisplayProps} />
        </Modal>
      </>
    );
  }
);

CalendarInput.defaultProps = {
  weekdayStartIndex: 0,
  dayInputDisplayFormat: 'dd',
  monthInputDisplayFormat: 'MM',
  yearInputDisplayFormat: 'yyyy',
  closeCalendarOnDayClick: true,
  inputOrder: 'day-month-year',
  calendarPosition: 'dropdown',
  displayFormatString: 'dd/MM/yyyy',
};
