import * as React from 'react';

import { AutoCompleteInput, Form, IAutoCompleteInputProps, ISelectOption } from '../..';
import { IBindingProps } from '../../hooks/form';
import { ClassNames } from '../../utils/classNames';
import { Dates } from '../../utils/dates';
import { IconSet } from '../icon';
import { IIconWrapperProps } from '../iconWrapper';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper';
import { IStatusWrapperProps } from '../statusWrapper';
import { TimeParts } from './timeInput.types';
import { getHourOptions, getMinuteOptions, parseTimePartsToDate, parseTimeStringToParts } from './timeInput.utils';

type AdditionalInputProps = Omit<IAutoCompleteInputProps<number>, 'bind' | 'options' | 'min' | 'max'>;

export interface ITimeInputProps
  extends IStatusWrapperProps,
    IIconWrapperProps<IconSet, IconSet>,
    Pick<IInputWrapperProps, 'above' | 'below' | 'leftOverlay' | 'rightOverlay'> {
  /** The binding for the input. */
  bind?: IBindingProps<string>;

  /** CSS className property */
  className?: string;

  /** Should the picker disallow user interaction */
  disabled?: boolean;

  /** Indicates the minute intervals to display */
  minuteStep?: number;

  /** Filter the available minutes - receives each minute in the array and expects a show/hide bool  */
  minuteFilter?: (minute: ISelectOption<number>) => boolean;

  /** Filter the available hours - receives each hour in the array and expects a show/hide bool */
  hourFilter?: (hours: ISelectOption<number>) => boolean;

  /** If true, when you select any hour, the minutes will be automatically set to 0 */
  /** The value of the input */
  value?: string;

  /** Called when the value changes */
  onValueChange?: (value: string) => any;

  /** Set the minutes back to zero when the hour changes */
  zeroMinutesOnHourSelected?: boolean;

  /**
   * A formatter to apply to all passed in time strings.
   * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
   * - Without this prop, `HH:mm` format will be used.
   */
  formatString?: string;

  /**
   * An optional locale to apply to all date formatting.
   * - Must be a date-fns compliant `Locale` object (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/Locale))
   * - If no locale is passed, `en-GB` will be used as the system default for all date formatting.
   */
  locale?: Dates.DateLocale;

  /**
   * A formatter to apply when displaying the minute selector on the input.
   * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
   * - Padded number by default: `mm` = (00 - 59)
   * - Other options include: `m` = (0 - 59)
   */
  minuteInputDisplayFormat?: string;

  /**
   * A formatter to apply when displaying the hour selector on the input.
   * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
   * - Number by default: `HH` = (00 - 23).
   * - Other options include: `hh` = (00 - 12).
   */
  hourInputDisplayFormat?: string;

  /** Any additional props for the "hour" autocomplete input */
  additionalHourInputProps?: AdditionalInputProps;

  /** Any additional props for the "minute" autocomplete input */
  additionalMinuteInputProps?: AdditionalInputProps;

  /** The character to show between the inputs, defaults to ":" */
  betweenInputs?: React.ReactNode;
}

export const TimeInput = React.forwardRef<HTMLInputElement, ITimeInputProps>(
  (
    {
      className,
      error,
      bind,
      errorIcon,
      validationErrorMessages,
      validationMode,
      statusPosition,
      pending,
      disabled,
      additionalHourInputProps,
      additionalMinuteInputProps,
      hourFilter,
      minuteFilter,
      zeroMinutesOnHourSelected,
      minuteStep,
      locale,
      formatString,
      hourInputDisplayFormat,
      minuteInputDisplayFormat,
      onValueChange,
      value,
      leftIcon,
      leftOverlay,
      rightIcon,
      rightOverlay,
      betweenInputs,
    },
    ref
  ) => {
    const [selectedTime, setSelectedTime, bindConfig] = Form.useBindingTools(bind, {
      validationErrorMessages,
      validationMode,
      validationErrorIcon: errorIcon,
      onChange: onValueChange,
      value,
    });

    const selectedTimeParsed = React.useMemo(() => {
      return parseTimeStringToParts(selectedTime, formatString!, locale);
    }, [selectedTime, locale, formatString]);

    const hourOptions = React.useMemo<ISelectOption<number>[]>(() => {
      let allHours = getHourOptions(hourInputDisplayFormat!, locale);
      if (hourFilter) {
        allHours = allHours.filter(hourFilter);
      }
      return allHours;
    }, [hourFilter, hourInputDisplayFormat, locale]);

    const minuteOptions = React.useMemo<ISelectOption<number>[]>(() => {
      let allMinutes = getMinuteOptions(minuteInputDisplayFormat!, locale, minuteStep);
      if (minuteFilter) {
        allMinutes = allMinutes.filter(minuteFilter);
      }
      return allMinutes;
    }, [minuteFilter, minuteInputDisplayFormat, locale, minuteStep]);

    const { formProp, formState } = Form.use<Partial<TimeParts>>(selectedTimeParsed || {});

    const onHourChange = React.useCallback(
      (newHour: number) => {
        if (formState?.minute && zeroMinutesOnHourSelected) {
          formProp('minute').set(0);
        }
        return additionalHourInputProps?.onChange?.(newHour);
      },
      [formState?.minute, formProp, zeroMinutesOnHourSelected, additionalHourInputProps?.onChange]
    );

    React.useEffect(() => {
      if (Number.isInteger(formState?.hour) && Number.isInteger(formState?.minute)) {
        try {
          const newTime = parseTimePartsToDate(formState as TimeParts, formatString!, locale);

          if (newTime !== selectedTime) {
            setSelectedTime(newTime!);
          }
        } catch (e) {
          bind?.addValidationError(e.message);
        }
      }
    }, [formState]);

    return (
      <InputWrapper
        ref={ref}
        className={ClassNames.concat('arm-time-input', className)}
        error={error}
        validationErrorMessages={bindConfig.validationErrorMessages}
        errorIcon={bindConfig.validationErrorIcon}
        statusPosition={statusPosition}
        pending={pending}
        validationMode={bindConfig.validationMode}
        leftIcon={leftIcon}
        leftOverlay={leftOverlay}
        rightIcon={rightIcon}
        rightOverlay={rightOverlay}
      >
        <AutoCompleteInput
          placeholder="hours"
          {...(additionalHourInputProps ?? {})}
          bind={formProp('hour').bind()}
          options={hourOptions}
          disabled={disabled}
          onChange={onHourChange}
        />
        {typeof betweenInputs === 'string' ? <p className="arm-time-input-between-inputs">{betweenInputs}</p> : betweenInputs}
        <AutoCompleteInput
          placeholder="minutes"
          {...(additionalMinuteInputProps ?? {})}
          bind={formProp('minute').bind()}
          options={minuteOptions}
          disabled={disabled}
        />
      </InputWrapper>
    );
  }
);

TimeInput.defaultProps = {
  formatString: 'HH:mm',
  hourInputDisplayFormat: 'H',
  minuteInputDisplayFormat: 'm',
  betweenInputs: ':',
};
