import * as React from 'react';

import { FormValidationMode, IBindingProps, IDelayInputConfig } from '../../hooks/form/form.types';
import { useDebounce } from '../../hooks/useDebounce';
import { useThrottle } from '../../hooks/useThrottle';
import { ClassNames } from '../../utils/classNames';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper/inputWrapper.component';
import { useMyValidationErrorMessages } from '../validationErrors';

type NativeTextAreaProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

interface IDelayedTextAreaBaseProps extends NativeTextAreaProps {
  milliseconds: number;
  /** Called when the value changes, takes into account any delay values and other effects. */
  onValueChange: (value: string | undefined) => any;
}

const DebounceTextAreaBase = React.forwardRef<HTMLTextAreaElement, IDelayedTextAreaBaseProps>(
  ({ milliseconds, value, onValueChange, onChange, ...nativeProps }, ref) => {
    const [actualValue, setActualValue] = useDebounce(milliseconds, value?.toString(), onValueChange);

    const onChangeEvent = React.useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setActualValue(e.currentTarget.value);
        onChange?.(e);
      },
      [setActualValue, onChange]
    );

    return <textarea ref={ref} value={actualValue} onChange={onChangeEvent} {...nativeProps} />;
  }
);

const ThrottledTextAreaBase = React.forwardRef<HTMLTextAreaElement, IDelayedTextAreaBaseProps>(
  ({ milliseconds, value, onValueChange, onChange, ...nativeProps }, ref) => {
    const [actualValue, setActualValue] = useThrottle(milliseconds, value?.toString(), onValueChange);

    const onChangeEvent = React.useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setActualValue(e.currentTarget.value);
        onChange?.(e);
      },
      [setActualValue, onChange]
    );

    return <textarea ref={ref} value={actualValue} onChange={onChangeEvent} {...nativeProps} />;
  }
);

export interface ITextAreaInputProps extends NativeTextAreaProps, Omit<IInputWrapperProps, 'onClick'> {
  /** (IBindingProps) prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<string>;

  /** (string[]) array of validation errors to render */
  validationErrorMessages?: string[];

  /** (icon|message|both) how to render the validation errors */
  validationMode?: FormValidationMode;

  /** Called when the value changes, takes into account any delay values and other effects. */
  onValueChange?: (value: string) => any;

  /** The delay config, used to set throttle and debounce values. */
  delay?: IDelayInputConfig;
}

export const TextAreaInput = React.forwardRef<HTMLTextAreaElement, ITextAreaInputProps>(
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
      disabled,
      pending,
      above,
      below,
      statusPosition,
      disableOnPending,
      delay,
      onValueChange,
      ...nativeProps
    },
    ref
  ) => {
    const internalRef = React.useRef<HTMLTextAreaElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

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
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(event);
        const currentValue = event.currentTarget.value;
        onValueChange?.(currentValue);
        onBindValueChange(currentValue);
      },
      [bind, onChange, onValueChange, onBindValueChange]
    );

    const onValueChangeEvent = React.useCallback(
      (currentValue: string | undefined) => {
        onValueChange?.(currentValue ?? '');
        onBindValueChange(currentValue ?? '');
      },
      [onValueChange, onBindValueChange]
    );
    const allValidationErrorMessages = useMyValidationErrorMessages(bind, validationErrorMessages);

    const inputProps: NativeTextAreaProps = {
      value: bind?.value ?? value,
      disabled,
      ref: internalRef,
    };

    return (
      <InputWrapper
        className={ClassNames.concat('arm-text-area-input', className)}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        leftOverlay={leftOverlay}
        rightOverlay={rightOverlay}
        validationErrorMessages={allValidationErrorMessages}
        validationErrorIcon={validationErrorIcon || bind?.formConfig?.validationErrorIcon}
        disabled={disabled}
        pending={pending}
        validationMode={validationMode || bind?.formConfig?.validationMode}
        above={above}
        disableOnPending={disableOnPending}
        statusPosition={statusPosition}
        below={below}
        onClick={() => internalRef.current?.focus()}
      >
        {delay?.mode === 'debounce' && delay.milliseconds && (
          <DebounceTextAreaBase
            {...nativeProps}
            milliseconds={delay.milliseconds}
            {...inputProps}
            onChange={onChange}
            onValueChange={onValueChangeEvent}
            ref={ref}
          />
        )}
        {delay?.mode === 'throttle' && delay.milliseconds && (
          <ThrottledTextAreaBase
            {...nativeProps}
            milliseconds={delay.milliseconds}
            {...inputProps}
            onChange={onChange}
            onValueChange={onValueChangeEvent}
            ref={ref}
          />
        )}
        {!delay?.milliseconds && <textarea {...nativeProps} onChange={onChangeEvent} {...inputProps} />}
      </InputWrapper>
    );
  }
);

TextAreaInput.defaultProps = {};
