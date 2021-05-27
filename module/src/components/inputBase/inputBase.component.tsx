import * as React from 'react';

import { FormValidationMode, IBindingProps, IDelayInputConfig } from '../../hooks/form/form.types';
import { useDebounce } from '../../hooks/useDebounce';
import { useThrottle } from '../../hooks/useThrottle';
import { ClassNames } from '../../utils/classNames';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper/inputWrapper.component';
import { useMyValidationErrorMessages } from '../validationErrors';

type NativeInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface IDelayedInputBaseProps<TValue> extends NativeInputProps {
  milliseconds: number;
  /** Called when the value changes, takes into account any delay values and other effects. */
  onValueChange: (value: TValue) => any;
}

const DebounceInputBase = React.forwardRef<HTMLInputElement, IDelayedInputBaseProps<any>>(
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

const ThrottledInputBase = React.forwardRef<HTMLInputElement, IDelayedInputBaseProps<any>>(
  ({ milliseconds, value, onValueChange, onChange, ...nativeProps }, ref) => {
    const [actualValue, setActualValue] = useThrottle(milliseconds, value, onValueChange);

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

export interface IInputBaseProps<TValue> extends NativeInputProps, IInputWrapperProps {
  /** (IBindingProps) prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TValue>;

  /** Called when the value changes, takes into account any delay values and other effects. */
  onValueChange?: (value: TValue) => any;

  /** (string[]) array of validation errors to render */
  validationErrorMessages?: string[];

  /** (icon|message|both) how to render the validation errors */
  validationMode?: FormValidationMode;

  /** The delay config, used to set throttle and debounce values. */
  delay?: IDelayInputConfig;
}

/** A component which wraps up a native input element with some binding logic and some repeated elements (icons and stuff) for components which only contain a single input element. */

export const InputBase = React.forwardRef<HTMLInputElement, IInputBaseProps<any>>(
  (
    {
      bind,
      onChange,
      value,
      className,
      leftIcon,
      rightIcon,
      leftOverlay,
      rightOverlay,
      validationErrorMessages,
      validationMode,
      validationErrorIcon,
      pending,
      disabled,
      onValueChange,
      delay,
      ...nativeProps
    },
    ref
  ) => {
    const onBindValueChange = React.useCallback(
      (currentValue: string) => {
        if (bind) {
          const formattedValue = bind.bindConfig?.format?.toData?.(currentValue) || currentValue;
          bind.setValue(formattedValue);
        }
      },
      [bind]
    );

    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event);
        const currentValue = event.currentTarget.value;
        onValueChange?.(currentValue);
        onBindValueChange(currentValue);
      },
      [bind, onChange, onValueChange, onBindValueChange]
    );

    const onValueChangeEvent = React.useCallback(
      (currentValue: string) => {
        onValueChange?.(currentValue);
        onBindValueChange(currentValue);
      },
      [onValueChange, onBindValueChange]
    );

    const allValidationErrorMessages = useMyValidationErrorMessages(bind, validationErrorMessages);

    const inputProps: NativeInputProps = {
      className: 'arm-input-base-input',
      value: bind?.value ?? value,
      disabled,
    };

    return (
      <InputWrapper
        className={ClassNames.concat(className, 'arm-input-base')}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        leftOverlay={leftOverlay}
        rightOverlay={rightOverlay}
        validationErrorMessages={allValidationErrorMessages}
        validationErrorIcon={validationErrorIcon || bind?.formConfig?.validationErrorIcon}
        validationMode={validationMode || bind?.formConfig?.validationMode}
        pending={pending}
        disabled={disabled}
      >
        {delay?.mode === 'debounce' && delay.milliseconds && (
          <DebounceInputBase
            {...nativeProps}
            milliseconds={delay.milliseconds}
            {...inputProps}
            onChange={onChange}
            onValueChange={onValueChangeEvent}
            ref={ref}
          />
        )}
        {delay?.mode === 'throttle' && delay.milliseconds && (
          <ThrottledInputBase
            {...nativeProps}
            milliseconds={delay.milliseconds}
            {...inputProps}
            onChange={onChange}
            onValueChange={onValueChangeEvent}
            ref={ref}
          />
        )}
        {!delay?.milliseconds && <input {...nativeProps} {...inputProps} onChange={onChangeEvent} ref={ref} />}
      </InputWrapper>
    );
  }
);
