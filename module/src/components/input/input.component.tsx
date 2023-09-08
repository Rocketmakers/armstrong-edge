import * as React from 'react';
import { HTMLInputTypeAttribute } from 'react';

import { IBindingProps, useBindingState } from '../../form';
import { useDebounce } from '../../hooks/useDebounce';
import { useDidUpdateEffect } from '../../hooks/useDidUpdateEffect';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, DisplaySize, NullOrUndefined } from '../../types';
import { concat } from '../../utils/classNames';
import { useArmstrongConfig } from '../config';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper/inputWrapper.component';

import './input.theme.css';

type NativeInputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'value' | 'ref'
>;

interface IDelayedInputBaseProps<TValue> extends NativeInputProps {
  /** The time in ms to delay the debounce or throttle effect. */
  milliseconds: number;

  /** Called when the value changes, takes into account any delay values and other effects. */
  onValueChange: (value: TValue | undefined) => void;

  /** The current value of the input */
  value?: TValue;
}

const DebounceInputBase = React.forwardRef<HTMLInputElement, IDelayedInputBaseProps<string>>(
  ({ milliseconds, value, onValueChange, onChange, ...nativeProps }, ref) => {
    const [actualValue, setActualValue] = useDebounce(milliseconds, value, onValueChange);

    const onChangeEvent = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setActualValue(e.currentTarget.value);
        onChange?.(e);
      },
      [setActualValue, onChange]
    );

    return <input ref={ref} value={actualValue} onChange={onChangeEvent} {...nativeProps} />;
  }
);

DebounceInputBase.displayName = 'DebounceInput';

interface IInputProps<TValue extends NullOrUndefined<string> | NullOrUndefined<number>>
  extends Omit<NativeInputProps, 'type'>,
    IInputWrapperProps {
  /** A class name to apply to the input element */
  inputClassName?: string;

  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TValue>;

  /** Called when the value changes, takes into account any delay values and other effects. */
  onValueChange?: (value?: TValue) => void;

  /** The delay config, used to set throttle and debounce values. */
  delay?: number;

  /** The current value of the input */
  value?: TValue;

  /** which size variant to use */
  displaySize?: DisplaySize;

  /** optional test ID to use for the input wrapper */
  wrapperTestId?: string;

  /** should the input validate automatically against the provided schema? Default: `true` */
  autoValidate?: boolean;
}

type SupportedStringInputTypes =
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | 'hidden';

export interface ITextInputProps<TValue extends NullOrUndefined<string>> extends IInputProps<TValue> {
  /** The type of input, used to discriminate the bind/value type */
  type?: Extract<HTMLInputTypeAttribute, SupportedStringInputTypes>;
}

export interface INumberInputProps<TValue extends NullOrUndefined<number>> extends IInputProps<TValue> {
  /** The type of input, used to discriminate the bind/value type */
  type: 'number';
}

/** A component which wraps up a native input element with some binding logic and some repeated elements (icons and stuff) for components which only contain a single input element. */
export const Input = React.forwardRef<
  HTMLInputElement,
  IInputProps<string | number> & { type?: HTMLInputTypeAttribute }
>(
  (
    {
      bind,
      onChange,
      value,
      className,
      leftOverlay,
      rightOverlay,
      validationErrorMessages,
      validationMode,
      errorIcon: validationErrorIcon,
      pending,
      disabled,
      disableOnPending,
      statusPosition,
      hideIconOnStatus,
      onValueChange,
      scrollValidationErrorsIntoView,
      delay,
      validationErrorsClassName,
      statusClassName,
      inputClassName,
      label,
      required,
      requiredIndicator,
      displaySize,
      labelClassName,
      labelId,
      wrapperTestId,
      error,
      autoValidate,
      ...nativeProps
    },
    ref
  ) => {
    const reactId = React.useId();
    const id = nativeProps.id ?? reactId;

    const [boundValue, setBoundValue, bindConfig] = useBindingState(bind, {
      value: value?.toString(),
      validationErrorMessages,
      validationMode,
      validationErrorIcon,
      autoValidate,
    });

    const globals = useArmstrongConfig({
      validationMode: bindConfig.validationMode,
      disableControlOnPending: disableOnPending,
      hideInputErrorIconOnStatus: hideIconOnStatus,
      inputDisplaySize: displaySize,
      inputStatusPosition: statusPosition,
      requiredIndicator,
      validationErrorIcon: bindConfig.validationErrorIcon,
      scrollValidationErrorsIntoView,
      autoValidate: bindConfig.autoValidate,
    });

    const parseValue = React.useCallback(
      (unparsedValue?: string) => {
        if (nativeProps.type !== 'number') {
          return unparsedValue;
        }
        if (unparsedValue !== null && unparsedValue !== undefined && unparsedValue !== '') {
          return parseFloat(unparsedValue);
        }
        return undefined;
      },
      [nativeProps.type]
    );

    const onBindValueChange = React.useCallback(
      (currentValue?: string) => {
        const parsedValue = parseValue(currentValue);
        const formattedValue = bind?.bindConfig?.format?.toData?.(parsedValue) || parsedValue;
        setBoundValue(formattedValue);
      },
      [setBoundValue, bind, parseValue]
    );

    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event);
        const currentValue = event.currentTarget.value;
        onBindValueChange(currentValue);
        onValueChange?.(parseValue(currentValue));
      },
      [onBindValueChange, onChange, onValueChange, parseValue]
    );

    /** onChange used for throttled inputs */
    const onValueChangeEvent = React.useCallback(
      (currentValue?: string) => {
        onBindValueChange(currentValue);
        onValueChange?.(parseValue(currentValue));
      },
      [onValueChange, onBindValueChange, parseValue]
    );

    useDidUpdateEffect(() => {
      if (globals.autoValidate && bindConfig.isTouched) {
        bindConfig.validate();
      }
    }, [boundValue]);

    const onBlurEvent = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement, HTMLElement>) => {
        if (globals.autoValidate && !bindConfig.isTouched) {
          bindConfig.validate();
        }
        bindConfig.setTouched(true);
        return nativeProps.onBlur?.(event);
      },
      [bindConfig, globals.autoValidate, nativeProps]
    );

    const inputProps: NativeInputProps & { value?: string; 'data-testid'?: string } = {
      id,
      className: concat('arm-input-base-input', inputClassName),
      /** fallback to an empty string if bind is passed in but bound value is undefined to avoid React warning */
      value: boundValue?.toString() ?? (bind && ''),
      disabled,
      ...nativeProps,
      onBlur: onBlurEvent,
    };

    return (
      <InputWrapper
        data-size={globals.inputDisplaySize}
        className={concat(className, 'arm-input-base')}
        statusClassName={concat(statusClassName, 'arm-input-base-status')}
        validationErrorsClassName={concat(validationErrorsClassName, 'arm-input-base-validation')}
        leftOverlay={leftOverlay}
        rightOverlay={rightOverlay}
        validationErrorMessages={bindConfig.validationErrorMessages}
        errorIcon={bindConfig.validationErrorIcon}
        validationMode={bindConfig.validationMode}
        pending={pending}
        disabled={disabled}
        statusPosition={globals.inputStatusPosition}
        scrollValidationErrorsIntoView={globals.scrollValidationErrorsIntoView}
        disableOnPending={globals.disableControlOnPending}
        hideIconOnStatus={globals.hideInputErrorIconOnStatus}
        label={label}
        labelId={labelId ?? id}
        labelClassName={concat(labelClassName, 'arm-input-base-label')}
        required={required}
        error={error}
        requiredIndicator={globals.requiredIndicator}
        data-testid={wrapperTestId}
        displaySize={globals.inputDisplaySize}
      >
        {!!delay && (
          <DebounceInputBase
            {...nativeProps}
            {...inputProps}
            milliseconds={delay}
            onChange={onChange}
            onValueChange={onValueChangeEvent}
            ref={ref}
            data-size={displaySize}
          />
        )}
        {!delay && (
          <input {...nativeProps} {...inputProps} onChange={onChangeEvent} ref={ref} data-size={displaySize} />
        )}
      </InputWrapper>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TStringValue extends NullOrUndefined<string>, TNumberValue extends NullOrUndefined<number>>(
  props: ArmstrongFCProps<ITextInputProps<TStringValue> | INumberInputProps<TNumberValue>, HTMLInputElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ITextInputProps<string> | INumberInputProps<number>>;

Input.displayName = 'Input';
