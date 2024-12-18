import * as React from 'react';
import { HTMLInputTypeAttribute } from 'react';

import { IBindingProps, useBindingState } from '../../form';
import { useDebounce } from '../../hooks/useDebounce';
import { useDidUpdateEffect } from '../../hooks/useDidUpdateEffect';
import { useSSRLayoutEffect } from '../../hooks/useSSRLayoutEffect';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, DisplaySize, NullOrUndefined } from '../../types';
import { concat } from '../../utils/classNames';
import { onBlurWorkaround } from '../../workarounds/radixDialog';
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

    const [internalValue, setInternalValue] = React.useState(boundValue?.toString());

    useSSRLayoutEffect(() => {
      if (boundValue?.toString() !== internalValue?.toString()) {
        setInternalValue(boundValue?.toString());
      }
    }, [boundValue]);

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
        if (!unparsedValue) {
          return undefined;
        }
        if (!Number.isNaN(parseFloat(unparsedValue))) {
          return parseFloat(unparsedValue);
        }
        return null;
      },
      [nativeProps.type]
    );

    const onBindValueChange = React.useCallback(
      (parsedValue?: string | number | undefined) => {
        const formattedValue = bind?.bindConfig?.format?.toData?.(parsedValue) || parsedValue;
        setBoundValue(formattedValue);
      },
      [setBoundValue, bind]
    );

    const updateValue = React.useCallback(
      (newValue: string | undefined) => {
        const parsedValue = parseValue(newValue);
        if (parsedValue !== null) {
          onBindValueChange(parsedValue);
          onValueChange?.(parsedValue);
        }
      },
      [parseValue, onBindValueChange, onValueChange]
    );

    /** onChange used for throttled inputs */
    const onValueChangeEvent = React.useCallback(
      (currentValue?: string) => {
        setInternalValue(currentValue);
        updateValue(currentValue);
      },
      [updateValue]
    );

    /** onChange used for standard inputs */
    const onValueChangeRaw = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event);
        const newValue = event.currentTarget.value;
        setInternalValue(newValue);
        updateValue(newValue);
      },
      [onChange, updateValue]
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
        onBlurWorkaround(event);
        return nativeProps.onBlur?.(event);
      },
      [bindConfig, globals.autoValidate, nativeProps]
    );

    const inputProps: NativeInputProps & {
      value?: string;
      'data-testid'?: string;
    } = {
      id,
      className: concat('arm-input-base-input', inputClassName),
      /** fallback to an empty string if bind is passed in but bound value is undefined to avoid React warning */
      value: internalValue?.toString() ?? (bind && ''),
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
          <input {...nativeProps} {...inputProps} onChange={onValueChangeRaw} ref={ref} data-size={displaySize} />
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
