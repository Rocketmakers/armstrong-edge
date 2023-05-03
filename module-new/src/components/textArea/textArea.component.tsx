import * as React from 'react';

import { useBindingState } from '../../hooks/form';
import { IBindingProps } from '../../hooks/form/form.types';
import { useDebounce } from '../../hooks/useDebounce';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, NullOrUndefined } from '../../types';
import { concat } from '../../utils/classNames';
import { useArmstrongConfig } from '../config';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper/inputWrapper.component';

import './textArea.theme.css';

type NativeTextAreaProps = Omit<
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
  'value' | 'ref'
>;

export type TextAreaDisplaySize = 'small' | 'medium' | 'large';

interface IDelayedTextAreaBaseProps<TValue> extends NativeTextAreaProps {
  /** The time in ms to delay the debounce or throttle effect. */
  milliseconds: number;

  /** Called when the value changes, takes into account any delay values and other effects. */
  onValueChange: (value: TValue | undefined) => void;

  /** The current value of the input */
  value?: TValue;
}

const DebounceTextAreaBase = React.forwardRef<HTMLTextAreaElement, IDelayedTextAreaBaseProps<string>>(
  ({ milliseconds, value, onValueChange, onChange, ...nativeProps }, ref) => {
    const [actualValue, setActualValue] = useDebounce(milliseconds, value, onValueChange);

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

DebounceTextAreaBase.displayName = 'DebounceInput';

interface ITextAreaProps<TValue extends NullOrUndefined<string> | NullOrUndefined<number>>
  extends Omit<IInputWrapperProps, 'onClick' | 'onValueChange'> {
  /** A class name to apply to the input element */
  textAreaClassName?: string;

  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TValue>;

  /** Called when the value changes, takes into account any delay values and other effects. */
  onValueChange?: (value?: TValue) => void;

  /** The delay config, used to set throttle and debounce values. */
  delay?: number;

  /** The current value of the input */
  value?: TValue;

  /** which size variant to use */
  displaySize?: TextAreaDisplaySize;

  /** A callback function to handle onChange event */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;

  /** An ID for the label to use when testing  */
  testId?: string;
}

/** A component which wraps up a native text area element with some binding logic, labels and validation errors. */
export const TextArea = React.forwardRef<HTMLTextAreaElement, ITextAreaProps<string>>(
  (
    {
      bind,
      onChange,
      value,
      className,
      validationErrorMessages,
      validationMode,
      pending,
      disabled,
      disableOnPending,
      onValueChange,
      scrollValidationErrorsIntoView,
      delay,
      validationErrorsClassName,
      statusClassName,
      textAreaClassName,
      label,
      required,
      requiredIndicator,
      displaySize,
      labelClassName,
      labelId,
      testId,
      ...nativeProps
    },
    ref
  ) => {
    const reactId = React.useId();
    const { id: nativeId } = nativeProps as NativeTextAreaProps & { id?: string };
    const id = nativeId ?? reactId;

    const globals = useArmstrongConfig({
      validationMode,
      disableInputOnPending: disableOnPending,
      inputDisplaySize: displaySize,
      requiredIndicator,
      scrollValidationErrorsIntoView,
    });

    const [boundValue, setBoundValue, bindConfig] = useBindingState(bind, {
      value: value?.toString(),
      validationErrorMessages,
      validationMode: 'message',
    });

    const parseValue = React.useCallback((unparsedValue?: string) => {
      return unparsedValue;
    }, []);

    const onBindValueChange = React.useCallback(
      (currentValue?: string) => {
        const parsedValue = parseValue(currentValue);
        const formattedValue = bind?.bindConfig?.format?.toData?.(parsedValue) || parsedValue;
        setBoundValue(formattedValue);
      },
      [setBoundValue, bind, parseValue]
    );

    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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

    const textAreaProps: NativeTextAreaProps & { value?: string } = {
      id,
      className: concat('arm-text-area', textAreaClassName),
      /** fallback to an empty string if bind is passed in but bound value is undefined to avoid React warning */
      value: boundValue?.toString() ?? (bind && ''),
      disabled,
    };

    return (
      <InputWrapper
        data-size={globals.inputDisplaySize}
        className={concat(className, 'arm-text-area-wrapper')}
        statusClassName={concat(statusClassName, 'arm-text-area-status')}
        validationErrorsClassName={concat(validationErrorsClassName, 'arm-text-area-validation')}
        validationErrorMessages={bindConfig.validationErrorMessages}
        errorIcon={bindConfig.validationErrorIcon}
        validationMode={bindConfig.validationMode}
        pending={pending}
        disabled={disabled}
        statusPosition={globals.inputStatusPosition}
        scrollValidationErrorsIntoView={globals.scrollValidationErrorsIntoView}
        disableOnPending={globals.disableInputOnPending}
        hideIconOnStatus={globals.hideInputErrorIconOnStatus}
        label={label}
        labelId={labelId ?? id}
        labelClassName={concat(labelClassName, 'arm-text-area-label')}
        required={required}
        requiredIndicator={globals.requiredIndicator}
        data-testid={testId}
      >
        {!!delay && (
          <DebounceTextAreaBase
            {...textAreaProps}
            {...nativeProps}
            milliseconds={delay}
            onChange={onChange}
            onValueChange={onValueChangeEvent}
            ref={ref}
          />
        )}
        {!delay && (
          <textarea
            className={'arm-text-area'}
            {...textAreaProps}
            {...nativeProps}
            onChange={onChangeEvent}
            ref={ref}
            disabled={pending}
          />
        )}
      </InputWrapper>
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TStringValue extends NullOrUndefined<string>>(
  props: ArmstrongFCProps<ITextAreaProps<TStringValue>, HTMLTextAreaElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ITextAreaProps<string>>;

TextArea.displayName = 'Text Area';
