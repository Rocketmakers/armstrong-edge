import * as React from 'react';

import { Form } from '../..';
import { FormValidationMode, IBindingProps, IDelayInputConfig } from '../../hooks/form/form.types';
import { useDebounce } from '../../hooks/useDebounce';
import { useThrottle } from '../../hooks/useThrottle';
import { ClassNames } from '../../utils/classNames';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper/inputWrapper.component';

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

export interface IInputProps<TValue> extends NativeInputProps, Omit<IInputWrapperProps, 'onClick'> {
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
      validationErrorIcon,
      pending,
      above,
      below,
      disabled,
      disableOnPending,
      statusPosition,
      onValueChange,
      delay,
      ...nativeProps
    },
    ref
  ) => {
    const internalRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

    const [boundValue, boundOnChange, { myValidationErrorMessages }] = Form.useBindingTools<any>(bind, {
      value: value?.toString(),
      validationErrorMessages,
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
        const currentValue = event.currentTarget.value;
        boundOnChange(currentValue);
        onBindValueChange(currentValue);
      },
      [boundOnChange, onBindValueChange]
    );

    const onValueChangeEvent = React.useCallback(
      (currentValue: string) => {
        onValueChange?.(currentValue);
        boundOnChange(currentValue);
      },
      [onValueChange, onBindValueChange]
    );

    const inputProps: NativeInputProps = {
      className: 'arm-input-base-input',
      value: boundValue,
      disabled,
    };

    return (
      <InputWrapper
        className={ClassNames.concat(className, 'arm-input-base')}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        leftOverlay={leftOverlay}
        rightOverlay={rightOverlay}
        validationErrorMessages={myValidationErrorMessages}
        validationErrorIcon={validationErrorIcon || bind?.formConfig?.validationErrorIcon}
        validationMode={validationMode || bind?.formConfig?.validationMode}
        pending={pending}
        disabled={disabled}
        above={above}
        statusPosition={statusPosition}
        below={below}
        disableOnPending={disableOnPending}
        onClick={() => internalRef.current?.focus()}
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
