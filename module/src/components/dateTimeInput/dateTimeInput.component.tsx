import { isSameMinute, isValid } from 'date-fns';
import * as React from 'react';

import { Form } from '../..';
import { IBindingProps, useBindingTools } from '../../hooks/form';
import { ClassNames, Dates } from '../../utils';
import { CalendarInput, ICalendarInputProps } from '../calendarInput';
import { InputWrapper } from '../inputWrapper';
import { IStatusWrapperProps } from '../statusWrapper';
import { ITimeInputProps, TimeInput } from '../timeInput';

type AdditionalCalendarInputProps<TValue extends Dates.DateLike> = Omit<ICalendarInputProps<TValue>, 'bind' | 'formatString' | 'locale'>;
type AdditionalTimeInputProps = Omit<ITimeInputProps, 'bind' | 'formatString' | 'locale'>;

export interface IDateTimeInputProps<TValue extends Dates.DateLike> extends IStatusWrapperProps {
  /** The binding for the input. */
  bind?: IBindingProps<TValue>;

  /** CSS className property */
  className?: string;

  /** Should the picker disallow user interaction */
  disabled?: boolean;

  /** Any additional props for the calendar input */
  additionalCalendarInputProps?: AdditionalCalendarInputProps<TValue>;

  /** Any additional props for the time input */
  additionalTimeInputProps?: AdditionalTimeInputProps;

  /** The value of the input */
  value?: TValue;

  /** Called when the value changes */
  onValueChange?: (value: TValue) => any;

  /**
   * A formatter to apply to all passed in date strings.
   * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
   * - If date strings are used without this prop, strict ISO format will be assumed.
   * - This format will not be used if dates are passed as `Date` objects rather than strings.
   */
  formatString?: string;

  /**
   * An optional locale to apply to all date formatting.
   * - Must be a date-fns compliant `Locale` object (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/Locale))
   * - If no locale is passed, `en-GB` will be used as the system default for all date formatting.
   */
  locale?: Dates.DateLocale;
}

/** Format used to bind the internal time input, does not effect the format of the bound datetime value */
const innerTimeInputFormat = 'HH:mm';

export const DateTimeInput = React.forwardRef(
  <TValue extends Dates.DateLike>(
    {
      additionalCalendarInputProps,
      className,
      additionalTimeInputProps,
      bind,
      value,
      onValueChange,
      error,
      errorIcon,
      validationErrorMessages,
      validationMode,
      statusPosition,
      pending,
      formatString,
      locale,
    }: IDateTimeInputProps<TValue>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [selectedDateTime, setSelectedDateTime, bindConfig] = useBindingTools(bind, {
      validationErrorIcon: errorIcon,
      validationErrorMessages,
      validationMode,
      onChange: onValueChange,
      value,
    });

    const timeParsed = React.useMemo(() => {
      if (selectedDateTime) {
        return Dates.dateToString(Dates.dateLikeToDate(selectedDateTime)!, innerTimeInputFormat);
      }
      return '';
    }, [selectedDateTime]);

    const { formProp, formState } = Form.use({
      date: selectedDateTime,
      time: timeParsed,
    });

    React.useEffect(() => {
      if (formState?.date && formState?.time) {
        const dateFromTime = Dates.dateLikeToDate(formState.time, innerTimeInputFormat);
        const dateFromDate = Dates.dateLikeToDate(formState.date, formatString, locale);
        if (dateFromTime && dateFromDate && isValid(dateFromTime) && isValid(dateFromTime)) {
          const finalDateSelected = new Date(
            dateFromDate.getFullYear(),
            dateFromDate.getMonth(),
            dateFromDate.getDate(),
            dateFromTime.getHours(),
            dateFromTime.getMinutes()
          );
          if (!isValid(finalDateSelected)) {
            bind?.addValidationError('Invalid date selection');
            return;
          }
          if (!selectedDateTime || !isSameMinute(finalDateSelected, Dates.dateLikeToDate(selectedDateTime)!)) {
            setSelectedDateTime(
              Dates.dateObjectToDateLike(finalDateSelected, selectedDateTime ? typeof selectedDateTime : 'string', formatString, locale) as TValue
            );
          }
        }
      }
    }, [formState, formatString, locale]);

    return (
      <InputWrapper
        ref={ref}
        className={ClassNames.concat('arm-date-time-input', className)}
        error={error}
        validationErrorMessages={bindConfig.validationErrorMessages}
        errorIcon={bindConfig.validationErrorIcon}
        statusPosition={statusPosition}
        pending={pending}
        validationMode={bindConfig.validationMode}
      >
        {/* The nasty cast on the prop spread below is a workaround for a suspected TS bug to do with generics. */}
        <CalendarInput bind={formProp('date').bind()} {...((additionalCalendarInputProps ?? {}) as AdditionalCalendarInputProps<any>)} />
        <TimeInput bind={formProp('time').bind()} {...(additionalTimeInputProps ?? {})} />
      </InputWrapper>
    );
  }
) as (<TValue extends Dates.DateLike>(
  props: React.PropsWithChildren<IDateTimeInputProps<TValue>> & React.RefAttributes<HTMLInputElement>
) => ReturnType<React.FC>) & { defaultProps?: Partial<IDateTimeInputProps<any>> };
