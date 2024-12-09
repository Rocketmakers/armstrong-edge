import * as React from 'react';

import { IBindingProps, useBindingState } from '../../form';
import { useDebounce } from '../../hooks/useDebounce';
import { useDidUpdateEffect } from '../../hooks/useDidUpdateEffect';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, DisplaySize, NullOrUndefined } from '../../types';
import { concat } from '../../utils/classNames';
import { onBlurWorkaround } from '../../workarounds/radixDialog';
import { useArmstrongConfig } from '../config';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper/inputWrapper.component';

import './textArea.theme.css';

type NativeTextAreaProps = Omit<
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
  'value' | 'ref'
>;

interface IDelayedTextAreaBaseProps<TValue> extends NativeTextAreaProps {
  /** The time in ms to delay the debounce or throttle effect. */
  milliseconds: number;

  /** Called when the value changes, takes into account any delay values and other effects. */
  onValueChange: (value: TValue | undefined) => void;

  /** The current value of the input */
  value?: TValue;
}

const DebounceTextAreaBase = ({
  ref,
  milliseconds,
  value,
  onValueChange,
  onChange,
  ...nativeProps
}: ArmstrongFCProps<IDelayedTextAreaBaseProps<string>, HTMLTextAreaElement>) => {
  const [actualValue, setActualValue] = useDebounce(milliseconds, value, onValueChange);

  const onChangeEvent = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setActualValue(e.currentTarget.value);
      onChange?.(e);
    },
    [setActualValue, onChange]
  );

  return <textarea ref={ref} value={actualValue} onChange={onChangeEvent} {...nativeProps} />;
};

DebounceTextAreaBase.displayName = 'DebounceInput';

export interface ITextAreaProps<TValue extends NullOrUndefined<string> | NullOrUndefined<number>>
  extends NativeTextAreaProps,
    Omit<IInputWrapperProps, 'onClick' | 'onValueChange'> {
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
  displaySize?: DisplaySize;

  /** A callback function to handle onChange event */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;

  /** An ID for the label to use when testing  */
  testId?: string;

  /** should the input validate automatically against the provided schema? Default: `true` */
  autoValidate?: boolean;
}

/** A component which wraps up a native text area element with some binding logic, labels and validation errors. */
export const TextArea = // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
  (({
    ref,
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
    errorIcon,
    leftOverlay,
    rightOverlay,
    hideIconOnStatus,
    statusPosition,
    autoValidate,
    ...nativeProps
  }: ArmstrongFCProps<ITextAreaProps<string>, HTMLTextAreaElement>) => {
    const reactId = React.useId();
    const id = nativeProps.id ?? reactId;

    const [boundValue, setBoundValue, bindConfig] = useBindingState(bind, {
      value: value?.toString(),
      validationErrorMessages,
      validationErrorIcon: errorIcon,
      validationMode,
      autoValidate,
    });

    const globals = useArmstrongConfig({
      validationMode: bindConfig.validationMode,
      disableControlOnPending: disableOnPending,
      inputStatusPosition: statusPosition,
      inputDisplaySize: displaySize,
      requiredIndicator,
      scrollValidationErrorsIntoView,
      validationErrorIcon: bindConfig.validationErrorIcon,
      hideInputErrorIconOnStatus: hideIconOnStatus,
      autoValidate: bindConfig.autoValidate,
    });

    const onBindValueChange = React.useCallback(
      (currentValue?: string) => {
        const formattedValue = bind?.bindConfig?.format?.toData?.(currentValue) || currentValue;
        setBoundValue(formattedValue);
      },
      [setBoundValue, bind]
    );

    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(event);
        const currentValue = event.currentTarget.value;
        onBindValueChange(currentValue);
        onValueChange?.(currentValue);
      },
      [onBindValueChange, onChange, onValueChange]
    );

    /** onChange used for throttled inputs */
    const onValueChangeEvent = React.useCallback(
      (currentValue?: string) => {
        onBindValueChange(currentValue);
        onValueChange?.(currentValue);
      },
      [onValueChange, onBindValueChange]
    );

    useDidUpdateEffect(() => {
      if (globals.autoValidate && bindConfig.isTouched) {
        bindConfig.validate();
      }
    }, [boundValue]);

    const onBlurEvent = React.useCallback(
      (event: React.FocusEvent<HTMLTextAreaElement, HTMLElement>) => {
        if (globals.autoValidate && !bindConfig.isTouched) {
          bindConfig.validate();
        }
        bindConfig.setTouched(true);
        onBlurWorkaround(event);
        return nativeProps.onBlur?.(event);
      },
      [bindConfig, globals.autoValidate, nativeProps]
    );

    const textAreaProps: NativeTextAreaProps & { value?: string } = {
      id,
      className: concat('arm-text-area', textAreaClassName),
      /** fallback to an empty string if bind is passed in but bound value is undefined to avoid React warning */
      value: boundValue?.toString() ?? (bind && ''),
      disabled,
      onBlur: onBlurEvent,
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
        disableOnPending={globals.disableControlOnPending}
        hideIconOnStatus={globals.hideInputErrorIconOnStatus}
        label={label}
        labelId={labelId ?? id}
        labelClassName={concat(labelClassName, 'arm-text-area-label')}
        required={required}
        requiredIndicator={globals.requiredIndicator}
        data-testid={testId}
        leftOverlay={leftOverlay}
        rightOverlay={rightOverlay}
      >
        {!!delay && (
          <DebounceTextAreaBase
            {...nativeProps}
            {...textAreaProps}
            milliseconds={delay}
            onChange={onChange}
            onValueChange={onValueChangeEvent}
            ref={ref}
          />
        )}
        {!delay && (
          <textarea
            className={'arm-text-area'}
            {...nativeProps}
            {...textAreaProps}
            onChange={onChangeEvent}
            ref={ref}
            disabled={disabled || pending}
          />
        )}
      </InputWrapper>
    );
  }) as (<TStringValue extends NullOrUndefined<string>>(
    props: ArmstrongFCProps<ITextAreaProps<TStringValue>, HTMLTextAreaElement>
  ) => ArmstrongFCReturn) &
    ArmstrongFCExtensions<ITextAreaProps<string>>;

TextArea.displayName = 'Text Area';
