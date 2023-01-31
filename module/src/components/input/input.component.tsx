import * as React from 'react';

import { Form } from '../..';
import { IBindingProps, IDelayInputConfig } from '../../hooks/form/form.types';
import { useDebounce } from '../../hooks/useDebounce';
import { useThrottle } from '../../hooks/useThrottle';
import { concat } from '../../utils/classNames';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper/inputWrapper.component';

import './input.basic.scss';

type NativeInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface IDelayedInputBaseProps<TValue> extends NativeInputProps {
  /** The time in ms to delay the debounce or throttle effect. */
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

export interface IInputProps<TValue> extends NativeInputProps, Omit<IInputWrapperProps, 'onClick' | 'onValueChange'> {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TValue>;

  /** Called when the value changes, takes into account any delay values and other effects. */
  onValueChange?: (value: TValue) => any;

  /** The delay config, used to set throttle and debounce values. */
  delay?: IDelayInputConfig;
}

/** A component which wraps up a native input element with some binding logic and some repeated elements (icons and stuff) for components which only contain a single input element. */
export const Input = React.forwardRef<HTMLInputElement, IInputProps<any>>(
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
      errorIcon: validationErrorIcon,
      pending,
      above,
      below,
      disabled,
      disableOnPending,
      statusPosition,
      hideIconOnStatus,
      onValueChange,
      scrollValidationErrorsIntoView,
      delay,
      ...nativeProps
    },
    ref
  ) => {
    const internalRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

    const [boundValue, setBoundValue, bindConfig] = Form.useBindingState(bind, {
      value: value?.toString(),
      validationErrorMessages,
      validationMode,
      validationErrorIcon,
    });

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
        setBoundValue?.(currentValue);
        onValueChange?.(currentValue);
      },
      [setBoundValue, onBindValueChange, onChange]
    );

    /** onChange used for throttled inputs */
    const onValueChangeEvent = React.useCallback(
      (currentValue: string) => {
        setBoundValue?.(currentValue);
        onValueChange?.(currentValue);
      },
      [onValueChange, onBindValueChange, setBoundValue]
    );

    const inputProps: NativeInputProps = {
      className: 'arm-input-base-input',
      /** fallback to an empty string if bind is passed in but bound value is undefined to avoid React warning */
      value: boundValue ?? (bind && ''),
      disabled,
    };

    return (
      <InputWrapper
        className={concat(className, 'arm-input-base')}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        leftOverlay={leftOverlay}
        rightOverlay={rightOverlay}
        validationErrorMessages={bindConfig.validationErrorMessages}
        errorIcon={bindConfig.validationErrorIcon}
        validationMode={bindConfig.validationMode}
        pending={pending}
        disabled={disabled}
        above={above}
        statusPosition={statusPosition}
        scrollValidationErrorsIntoView={scrollValidationErrorsIntoView}
        below={below}
        disableOnPending={disableOnPending}
        hideIconOnStatus={hideIconOnStatus}
        onClick={() => internalRef.current?.focus()}
      >
        {delay?.mode === 'debounce' && !!delay.milliseconds && (
          <DebounceInputBase
            {...nativeProps}
            milliseconds={delay.milliseconds}
            {...inputProps}
            onChange={onChange}
            onValueChange={onValueChangeEvent}
            ref={internalRef}
          />
        )}
        {delay?.mode === 'throttle' && !!delay.milliseconds && (
          <ThrottledInputBase
            {...nativeProps}
            milliseconds={delay.milliseconds}
            {...inputProps}
            onChange={onChange}
            onValueChange={onValueChangeEvent}
            ref={internalRef}
          />
        )}
        {!delay?.milliseconds && <input {...nativeProps} {...inputProps} onChange={onChangeEvent} ref={internalRef} />}
      </InputWrapper>
    );
  }
);
