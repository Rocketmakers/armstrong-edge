import { isSameDay } from 'date-fns';
import * as React from 'react';

import { Calendar, DataAttributes, Form } from '../..';
import { IBindingProps } from '../../hooks/form';
import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongVFCProps, NullOrUndefined } from '../../types';
import { Typescript } from '../../utils';
import { ClassNames } from '../../utils/classNames';
import { Dates } from '../../utils/dates';
import { JavaScript } from '../../utils/javascript';
import { AutoCompleteInput, IAutoCompleteInputProps } from '../autoCompleteInput';
import { CalendarDisplay, ICalendarDisplayProps } from '../calendarDisplay/calendarDisplay.component';
import { Dropdown, IDropdownProps } from '../dropdown';
import { IconSet, IconUtils } from '../icon';
import { IconButton } from '../iconButton';
import { IIconWrapperProps } from '../iconWrapper';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper';
import { Modal } from '../modal';
import { IStatusWrapperProps } from '../statusWrapper';
import { calendarDayToDateLike, getDaySelectOptions, validateDateSelection } from './calendarInput.utils';

type AdditionalInputProps = Omit<IAutoCompleteInputProps<number>, 'bind' | 'options' | 'min' | 'max'> & DataAttributes;

export type CalendarInputPart = 'year' | 'month' | 'day';

export type CalendarInputCalendarPosition = 'dropdown' | 'modal' | 'above' | 'below';
export interface ICalendarInputProps<TValue extends NullOrUndefined<Dates.DateLike>>
  extends Omit<Calendar.IConfig, 'selectedDate'>,
    Pick<
      ICalendarDisplayProps,
      | 'weekdayStartIndex'
      | 'calendarDayDisplayFormat'
      | 'calendarMonthSelectDisplayFormat'
      | 'calendarYearSelectDisplayFormat'
      | 'calendarDayOfTheWeekHeadingDisplayFormat'
      | 'highlightToday'
      | 'backButton'
      | 'forwardsButton'
      | 'controls'
      | 'jumpList'
    >,
    IStatusWrapperProps,
    IIconWrapperProps<IconSet, IconSet>,
    Pick<IInputWrapperProps, 'leftOverlay' | 'rightOverlay' | 'scrollValidationErrorsIntoView'> {
  /** CSS className property */
  className?: string;

  /** The value of the input */
  value?: TValue;

  /** Called when the value changes */
  onValueChange?: (value: TValue) => any;

  /**
   * Should the calendar close when a date is selected from inside?
   * - Defaults to `true`
   */
  closeCalendarOnDayClick?: boolean;

  /**
   * Should the calendar close when a date is selected from the jumplist?
   * - Defaults to `true`
   */
  closeCalendarOnJumplistClick?: boolean;

  /**
   * The binding for the input.
   * - Can be bound to a string, number or Date object.
   * - WARNING: If no initial value is passed it will assume the type is string.
   */
  bind?: IBindingProps<TValue>;

  /**
   * The order of the three select inputs as an array of strings.
   *
   * If any are omitted, you can give them a default value using the defaultIfOmitted prop. You likely also want to set displayMode to
   * 'inputs' as the calendar view currently does not support limiting the year or month. You might also want to update formatString to
   * omit the missing parts as well (I.E, if you're missing the day, you might want to set it to MM-YYYY)
   */
  inputOrder?: CalendarInputPart[];

  /** Used to provide default values if any parts are omitted in inputOrder - each will defaulted to 1 */
  defaultIfOmitted?: Partial<IDateInputFormData>;

  /** Any additional props for the "day" autocomplete input */
  additionalDayInputProps?: AdditionalInputProps;

  /** Any additional props for the "month" autocomplete input */
  additionalMonthInputProps?: AdditionalInputProps;

  /** Any additional props for the "year" autocomplete input */
  additionalYearInputProps?: AdditionalInputProps;

  /**
   * An optional alternative display mode for the input.
   * - `calendar` will render the calendar button and read only inputs, this will force the user to select a date from the calendar.
   * - `inputs` will render the inputs only, hiding the calendar button and forcing the user to select/enter a date from the inputs.
   * - `both` will allow users to select a date from the calendar OR enter one using the inputs.
   * @default both
   */
  displayMode?: 'calendar' | 'inputs' | 'both';

  /** The position to show the calendar - can show below the input in a dropdown, in a modal, or above or below the input */
  calendarPosition?: CalendarInputCalendarPosition;

  /** with calendarPosition: 'dropdown', how should the dropdown align horizontally to the child element - if stretch is true, used if wider than the child element */
  dropdownAlignment?: IDropdownProps['alignment'];

  /** with calendarPosition: 'dropdown', how should the dropdown be positioned vertically */
  dropdownPosition?: IDropdownProps['position'];

  /** Should the calendar stay open? - useful in conjunction with calendarPosition, not compatible with calendarPosition="modal" */
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

  /** The character to show between the inputs, defaults to ":" */
  betweenInputs?: React.ReactNode;

  /** Override the button used to open the calendar (useful if working without Icomoon) */
  openCalendarButton?: (onClick: (event: React.MouseEvent<HTMLElement>) => void, isOpen?: boolean) => JSX.Element | string;
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
export const CalendarInput = React.forwardRef(
  <TValue extends Dates.DateLike>(
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
      className,
      onValueChange,
      value,
      leftIcon,
      leftOverlay,
      rightIcon,
      rightOverlay,
      betweenInputs,
      highlightToday,
      defaultIfOmitted,
      scrollValidationErrorsIntoView,
      dropdownAlignment,
      dropdownPosition,
      openCalendarButton,
      backButton,
      forwardsButton,
      controls,
      jumpList,
      closeCalendarOnJumplistClick,
    }: ICalendarInputProps<TValue>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [selectedDate, setSelectedDate, bindConfig] = Form.useBindingState(bind, {
      validationErrorMessages,
      validationMode,
      validationErrorIcon: errorIcon,
      onChange: onValueChange,
      value,
    });

    const { monthYearFormProp, stepMonth, days, months, years, selectedDateParsed, jumpTo } = Calendar.use({
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

    // when day is clicked inside calendar display, set it to the bound value
    const onDayClicked = React.useCallback(
      (day: Calendar.IDay) => {
        setSelectedDate?.(
          calendarDayToDateLike(day, !JavaScript.isNullOrUndefined(selectedDate) ? typeof selectedDate : 'string', formatString, locale) as TValue
        );

        if (closeCalendarOnDayClick) {
          setCalendarOpen(false);
        }
      },
      [selectedDate, setSelectedDate, formatString, locale, closeCalendarOnDayClick, setCalendarOpen]
    );

    // when day is clicked inside calendar display, set it to the bound value
    const onClickJumpList = React.useCallback(
      (date: Dates.DateLike) => {
        setSelectedDate?.(date as TValue);

        if (closeCalendarOnJumplistClick) {
          setCalendarOpen(false);
        }
      },
      [selectedDate, setSelectedDate, formatString, locale, closeCalendarOnDayClick, setCalendarOpen]
    );

    const missingParts = React.useMemo(() => {
      const allParts: CalendarInputPart[] = ['day', 'month', 'year'];
      return allParts.filter((part) => !inputOrder!.includes(part));
    }, [inputOrder]);

    // when the value of the internal form changes, update the selected date
    React.useEffect(() => {
      // if parts of the date are omitted in inputOrder, use 1 or the given default
      const day = formState?.day ?? (missingParts.includes('day') && (defaultIfOmitted?.day ?? 1));
      const month = formState?.month ?? (missingParts.includes('month') && (defaultIfOmitted?.month ?? 0));
      const year = formState?.year ?? (missingParts.includes('year') && (defaultIfOmitted?.year ?? new Date().getFullYear()));

      // only bind if all parts that are included in
      if (typeof day === 'number' && typeof month === 'number' && typeof year === 'number') {
        const invalidDateValidationId = 'ARM-inv-date';
        if (!validateDateSelection(day, month, year)) {
          bind?.addValidationError('Invalid date selection', invalidDateValidationId);
          return;
        }

        bind?.clearClientValidationErrors(invalidDateValidationId);

        const date = new Date(year, month, day);
        if (!selectedDate || !isSameDay(date, Dates.dateLikeToDate(selectedDate, formatString, locale)!)) {
          const newDate = Dates.dateObjectToDateLike(
            date,
            !JavaScript.isNullOrUndefined(selectedDate) ? typeof selectedDate : 'string',
            formatString,
            locale
          );
          setSelectedDate?.(newDate as TValue);
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

    const calendarDisplayProps = {
      weekdayStartIndex: weekdayStartIndex!,
      currentYearBinding: monthYearFormProp('viewingYear').bind(),
      currentMonthBinding: monthYearFormProp('viewingMonth').bind(),
      onDayClicked,
      onClickJumpList,
      onBackClicked: () => stepMonth('back'),
      onForwardClicked: () => stepMonth('forward'),
      days,
      months,
      years,
      calendarDayDisplayFormat,
      calendarDayOfTheWeekHeadingDisplayFormat,
      calendarMonthSelectDisplayFormat,
      calendarYearSelectDisplayFormat,
      highlightToday,
      backButton,
      forwardsButton,
      controls,
      jumpTo,
      jumpList,
    };

    const onClickWrapperEvent = React.useCallback(() => {
      if (displayMode === 'calendar' && !calendarOpen) {
        setCalendarOpen(true);
      }
    }, [calendarOpen, displayMode]);

    const formattedSelectedDate = React.useMemo(() => {
      if (displayMode === 'calendar' && selectedDate) {
        return Dates.dateToString(Dates.dateLikeToDate(selectedDate)!, displayFormatString);
      }
    }, [displayMode, selectedDate, displayFormatString]);

    const onClickCalendarButton = React.useCallback(
      (event: React.MouseEvent<HTMLElement>) => {
        setCalendarOpen(!calendarOpen);
        event.stopPropagation();
      },
      [calendarOpen]
    );

    return (
      <>
        <div
          ref={ref}
          className={ClassNames.concat('arm-calendar-input', className)}
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
            closeWhenClickInside={false}
            openWhenFocusInside={false}
            shouldScrollContent={false}
            alignment={dropdownAlignment}
            position={dropdownPosition}
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
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              leftOverlay={leftOverlay}
              rightOverlay={rightOverlay}
              scrollValidationErrorsIntoView={scrollValidationErrorsIntoView}
            >
              {showCalendarButton &&
                !keepCalendarOpen &&
                (openCalendarButton?.(onClickCalendarButton, calendarOpen || !!keepCalendarOpen) || (
                  <IconButton type="button" minimalStyle icon={IconUtils.IconUtils.getIconDefinition('Icomoon', 'calendar')} onClick={onClickCalendarButton} />
                ))}

              {disableInputs ? (
                <div className="arm-calendar-input-preview">
                  {selectedDate ? <p>{formattedSelectedDate}</p> : <p className="arm-calendar-input-placeholder">{placeholder}</p>}
                </div>
              ) : (
                <>
                  {inputOrder!.map((part, index) => {
                    const between =
                      index < inputOrder!.length - 1 &&
                      (typeof betweenInputs === 'string' ? <p className="arm-calendar-input-between-inputs">{betweenInputs}</p> : betweenInputs);

                    switch (part) {
                      case 'day': {
                        return (
                          <React.Fragment key={part + index}>
                            <AutoCompleteInput
                              className="arm-calendar-select arm-calendar-select-day"
                              {...(additionalDayInputProps || {})}
                              placeholder={additionalDayInputProps?.placeholder || 'day'}
                              disabled={disableInputs}
                              options={dayOptions}
                              bind={formProp('day').bind()}
                            />
                            {between}
                          </React.Fragment>
                        );
                      }
                      case 'month': {
                        return (
                          <React.Fragment key={part + index}>
                            <AutoCompleteInput
                              className="arm-calendar-select arm-calendar-select-month"
                              {...(additionalMonthInputProps || {})}
                              placeholder={additionalMonthInputProps?.placeholder || 'month'}
                              disabled={disableInputs}
                              options={monthOptions}
                              bind={formProp('month').bind()}
                            />
                            {between}
                          </React.Fragment>
                        );
                      }
                      case 'year': {
                        return (
                          <React.Fragment key={part + index}>
                            <AutoCompleteInput
                              className="arm-calendar-select arm-calendar-select-year"
                              {...(additionalYearInputProps || {})}
                              placeholder={additionalYearInputProps?.placeholder || 'year'}
                              disabled={disableInputs}
                              options={yearOptions}
                              bind={formProp('year').bind()}
                            />
                            {between}
                          </React.Fragment>
                        );
                      }
                      default: {
                        Typescript.assertNever(part);
                      }
                    }
                    return null;
                  })}
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
) as (<TValue extends NullOrUndefined<Dates.DateLike>>(
  props: ArmstrongVFCProps<ICalendarInputProps<TValue>, HTMLInputElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ICalendarInputProps<any>>;

CalendarInput.defaultProps = {
  weekdayStartIndex: 0,
  dayInputDisplayFormat: 'd',
  monthInputDisplayFormat: 'M',
  yearInputDisplayFormat: 'yyyy',
  closeCalendarOnDayClick: true,
  inputOrder: ['day', 'month', 'year'],
  calendarPosition: 'dropdown',
  displayFormatString: 'dd/MM/yyyy',
  betweenInputs: '/',
  highlightToday: true,
};
