import * as React from 'react';

import { AutoCompleteInput, Form, IAutoCompleteInputProps, ISelectOption } from '../..';
import { IBindingProps } from '../../hooks/form';
import { ClassNames } from '../../utils/classNames';
import { Dates } from '../../utils/dates';
import { IStatusWrapperProps, StatusWrapper } from '../statusWrapper';
import { TimeParts } from './timeInput.types';
import { getHourOptions, getMinuteOptions, parseTimePartsToDate, parseTimeStringToParts } from './timeInput.utils';

type AdditionalInputProps = Omit<IAutoCompleteInputProps<number>, 'bind' | 'options' | 'min' | 'max'>;

export interface ITimeInputProps extends IStatusWrapperProps {
  /** The binding for the input. */
  bind?: IBindingProps<string>;
  /** (string) CSS className property */
  className?: string;
  /** (boolean) Should the picker disallow user interaction */
  disabled?: boolean;
  /** (number) Indicates the minute intervals to display */
  minuteStep?: number;
  /** (Func) Filter the available minutes - receives each minute in the array and expects a show/hide bool  */
  minuteFilter?: (minute: ISelectOption<number>) => boolean;
  /** (Func) Filter the available hours - receives each hour in the array and expects a show/hide bool */
  hourFilter?: (hours: ISelectOption<number>) => boolean;
  /** (boolean) If true, when you select any hour, the minutes will be automatically set to 0 */
  /** The value of the input */
  value?: string;
  /** Called when the value changes */
  onValueChange?: (value: string) => any;
  /** Set the minutes back to zero when the hour changes */
  zeroMinutesOnHourSelected?: boolean;
  /**
   * (string) A formatter to apply to all passed in time strings.
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
   * (string) A formatter to apply when displaying the minute selector on the input.
   * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
   * - Padded number by default: `mm` = (00 - 59)
   * - Other options include: `m` = (0 - 59)
   */
  minuteInputDisplayFormat?: string;
  /**
   * (string) A formatter to apply when displaying the hour selector on the input.
   * - Must be a date-fns compliant format token (see [docs](https://date-fns.org/v2.0.0-alpha.7/docs/format))
   * - Number by default: `HH` = (00 - 23).
   * - Other options include: `hh` = (00 - 12).
   */
  hourInputDisplayFormat?: string;
  /** Any additional props for the "hour" autocomplete input */
  additionalHourInputProps?: AdditionalInputProps;
  /** Any additional props for the "minute" autocomplete input */
  additionalMinuteInputProps?: AdditionalInputProps;
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
      <div ref={ref} className={ClassNames.concat('arm-time-input-wrapper', className)}>
        <div className="arm-time-selects-wrapper">
          <StatusWrapper
            error={error}
            validationErrorMessages={bindConfig.validationErrorMessages}
            errorIcon={bindConfig.validationErrorIcon}
            statusPosition={statusPosition}
            pending={pending}
            validationMode={bindConfig.validationMode}
          >
            <AutoCompleteInput
              {...(additionalHourInputProps ?? {})}
              bind={formProp('hour').bind()}
              options={hourOptions}
              disabled={disabled}
              onChange={onHourChange}
            />
            <AutoCompleteInput {...(additionalMinuteInputProps ?? {})} bind={formProp('minute').bind()} options={minuteOptions} disabled={disabled} />
          </StatusWrapper>
        </div>
      </div>
    );
  }
);

TimeInput.defaultProps = {
  formatString: 'HH:mm',
  hourInputDisplayFormat: 'HH',
  minuteInputDisplayFormat: 'mm',
};
