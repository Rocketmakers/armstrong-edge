import * as React from "react";

import {
  ArmstrongFCExtensions,
  ArmstrongFCProps,
  ArmstrongFCReturn,
  AutoCompleteInput,
  DataAttributes,
  Form,
  IAutoCompleteInputProps,
  IButtonCoreProps,
  ISelectOption,
  NullOrUndefined,
} from '../..';
import { IBindingProps } from '../../hooks/form';
import { concat } from '../../utils/classNames';
import { Dates } from '../../utils/dates';
import { IconSet } from '../icon';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper';
import { IStatusWrapperProps } from '../statusWrapper';
import { TimeParts } from './timeInput.types';
import { getHourOptions, getMinuteOptions, parseTimePartsToDate, parseTimeStringToParts } from './timeInput.utils';

type AdditionalInputProps = Omit<IAutoCompleteInputProps<number>, 'bind' | 'options' | 'min' | 'max'> & DataAttributes;

export interface ITimeInputProps<TBind extends NullOrUndefined<string>>
  extends IStatusWrapperProps,
    Pick<IButtonCoreProps<IconSet, IconSet>, 'leftIcon' | 'rightIcon'>,
    Pick<IInputWrapperProps, 'leftOverlay' | 'rightOverlay'> {
  /** The binding for the input. */
  bind?: IBindingProps<TBind>;

/**
 * decision - option to use native input on mobile / tablet? - leave this issue entirely up to the consuming code
 * the following config is overridden: customInput, locale, showTimeSelect, showTimeSelectOnly
 */
export const TimeInput: React.FC<TTimeInputProps> = ({ locale, ...props }) => {
  const config = React.useMemo<TBaseDatePickerConfig>(() => {
    return {
      timeIntervals: 15,
      dateFormat: "h:mm aa",
      timeCaption: "Time",

      ...props.config,

      customInput: <CustomInput />,
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
    }: ITimeInputProps<TBind>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [selectedTime, setSelectedTime, bindConfig] = Form.useBindingState(bind, {
      validationErrorMessages,
      validationMode,
      validationErrorIcon: errorIcon,
      onChange: onValueChange,
      value,
    });

    const selectedTimeParsed = React.useMemo(() => {
      return parseTimeStringToParts(selectedTime ?? undefined, formatString!, locale);
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
            setSelectedTime?.(newTime as TBind);
          }
        } catch (e) {
          bind?.addValidationError((e as Error).message);
        }
      }
    }, [formState]);

    return (
      <InputWrapper
        ref={ref}
        className={concat('arm-time-input', className)}
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
        {typeof betweenInputs === 'string' ? (
          <p className="arm-time-input-between-inputs">{betweenInputs}</p>
        ) : (
          betweenInputs
        )}
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
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<T extends NullOrUndefined<string>>(
  props: ArmstrongFCProps<Omit<ITimeInputProps<T>, 'type'>, HTMLInputElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<Omit<ITimeInputProps<any>, 'type'>>;

TimeInput.defaultProps = {
  formatString: 'HH:mm',
  hourInputDisplayFormat: 'H',
  minuteInputDisplayFormat: 'm',
  betweenInputs: ':',
};

TimeInput.displayName = 'TimeInput';
