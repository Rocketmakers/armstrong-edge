import * as React from 'react';

import { useBindingState } from '../..';
import { FormValidationMode, IBindingProps, IDelayInputConfig, ValidationMessage } from '../../hooks/form/form.types';
import { useDebounce } from '../../hooks/useDebounce';
import { useThrottle } from '../../hooks/useThrottle';
import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongVFCProps, NullOrUndefined } from '../../types';
import { concat } from '../../utils/classNames';
import { useArmstrongConfig } from '../config';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper/inputWrapper.component';

import './textArea.theme.css';

type NativeTextAreaProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export type TextAreaDisplaySize = 'small' | 'medium' | 'large';

interface IDelayedTextAreaBaseProps extends NativeTextAreaProps {
  /** Time interval in milliseconds to delay input */
  milliseconds: number;

  /** Called when the value changes, takes into account any delay values and other effects. */
  onValueChange: (value: string | undefined) => any;

  /** which size variant to use */
  displaySize?: TextAreaDisplaySize;
}

const DebounceTextAreaBase = React.forwardRef<HTMLTextAreaElement, IDelayedTextAreaBaseProps>(
  ({ milliseconds, value, onValueChange, onChange, displaySize, ...nativeProps }, ref) => {
    const [actualValue, setActualValue] = useDebounce(milliseconds, value?.toString(), onValueChange);

    const onChangeEvent = React.useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setActualValue(e.currentTarget.value);
        onChange?.(e);
      },
      [setActualValue, onChange]
    );

    return (
      <textarea
        data-size={displaySize}
        className="arm-text-area"
        ref={ref}
        value={actualValue}
        onChange={onChangeEvent}
        {...nativeProps}
      />
    );
  }
);

DebounceTextAreaBase.displayName = 'DebounceTextAreaBase';

const ThrottledTextAreaBase = React.forwardRef<HTMLTextAreaElement, IDelayedTextAreaBaseProps>(
  ({ milliseconds, value, onValueChange, onChange, displaySize, ...nativeProps }, ref) => {
    const [actualValue, setActualValue] = useThrottle(milliseconds, value?.toString(), onValueChange);

    const onChangeEvent = React.useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setActualValue(e.currentTarget.value);
        onChange?.(e);
      },
      [setActualValue, onChange]
    );

    return (
      <textarea
        data-size={displaySize}
        className="arm-text-area"
        ref={ref}
        value={actualValue}
        onChange={onChangeEvent}
        {...nativeProps}
      />
    );
  }
);

ThrottledTextAreaBase.displayName = 'ThrottledTextAreaBase';

interface ITextAreaProps<TBind extends NullOrUndefined<string>>
  extends Omit<NativeTextAreaProps, 'value'>,
    Omit<IInputWrapperProps, 'onClick'> {
  /** A class name to apply to the input element */
  inputClassName?: string;

  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TBind>;

  /** array of validation errors to render */
  validationErrorMessages?: ValidationMessage[];

  /** how to render the validation errors */
  validationMode?: FormValidationMode;

  /** Called when the value changes, takes into account any delay values and other effects. */
  onValueChange?: (value?: TBind) => void;

  /** The delay config, used to set throttle and debounce values. */
  delay?: IDelayInputConfig;

  /** The current value of the input */
  value?: TBind;

  /** which size variant to use */
  displaySize?: TextAreaDisplaySize;
}

export const TextArea = React.forwardRef(
  <TBind extends NullOrUndefined<string>>(
    {
      bind,
      onChange,
      value,
      className,
      validationErrorMessages,
      validationMode,
      errorIcon: validationErrorIcon,
      disabled,
      pending,
      scrollValidationErrorsIntoView,
      statusPosition,
      disableOnPending,
      delay,
      onValueChange,
      displaySize,
      hideIconOnStatus,
      requiredIndicator,
      label,
      labelClassName,
      labelId,
      ...nativeProps
    }: ITextAreaProps<TBind>,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    const internalRef = React.useRef<HTMLTextAreaElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

    const reactId = React.useId();
    const id = nativeProps.id ?? reactId;

    const globals = useArmstrongConfig({
      validationMode,
      disableInputOnPending: disableOnPending,
      hideInputErrorIconOnStatus: hideIconOnStatus,
      inputDisplaySize: displaySize,
      inputStatusPosition: statusPosition,
      requiredIndicator,
      validationErrorIcon,
      scrollValidationErrorsIntoView,
    });

    const [boundValue, setBoundValue, bindConfig] = useBindingState(bind, {
      value: value?.toString() as TBind,
      validationErrorMessages,
      validationMode,
      validationErrorIcon,
    });

    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(event);
        const currentValue = event.currentTarget.value as TBind;
        onValueChange?.(currentValue);
        setBoundValue?.(currentValue);
      },
      [bind, onChange, onValueChange, setBoundValue]
    );

    const onValueChangeEvent = React.useCallback(
      (currentValue: string | undefined) => {
        const val = (currentValue ?? '') as TBind;
        onValueChange?.(val);
        setBoundValue?.(val);
      },
      [onValueChange, setBoundValue]
    );

    const inputProps: NativeTextAreaProps = {
      value: boundValue ?? undefined,
      disabled,
      ref: internalRef,
    };

    return (
      <InputWrapper
        className={concat('arm-text-area-wrapper', className)}
        validationErrorMessages={bindConfig.validationErrorMessages}
        errorIcon={bindConfig.validationErrorIcon}
        validationMode={bindConfig.validationMode}
        data-disabled={disabled}
        data-size={displaySize}
        pending={pending}
        disableOnPending={disableOnPending}
        statusPosition={statusPosition}
        onClick={() => internalRef.current?.focus()}
        scrollValidationErrorsIntoView={scrollValidationErrorsIntoView}
        hideIconOnStatus={globals.hideInputErrorIconOnStatus}
        requiredIndicator={globals.requiredIndicator}
        label={label}
        labelId={labelId ?? id}
        labelClassName={concat(labelClassName, 'arm-input-base-label')}
      >
        {delay?.mode === 'debounce' && !!delay.milliseconds && (
          <DebounceTextAreaBase
            {...nativeProps}
            data-size={displaySize}
            data-disabled={disabled}
            milliseconds={delay.milliseconds}
            {...inputProps}
            onChange={onChange}
            onValueChange={onValueChangeEvent}
            ref={ref}
          />
        )}
        {delay?.mode === 'throttle' && !!delay.milliseconds && (
          <ThrottledTextAreaBase
            {...nativeProps}
            data-size={displaySize}
            data-disabled={disabled}
            milliseconds={delay.milliseconds}
            {...inputProps}
            onChange={onChange}
            onValueChange={onValueChangeEvent}
            ref={ref}
          />
        )}
        {!delay?.milliseconds && (
          <textarea
            data-disabled={disabled}
            data-size={displaySize}
            className="arm-text-area"
            {...nativeProps}
            onChange={onChangeEvent}
            {...inputProps}
          />
        )}
      </InputWrapper>
    );
  }
) as (<TBind extends NullOrUndefined<string>>(
  props: ArmstrongVFCProps<ITextAreaProps<TBind>, HTMLTextAreaElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ITextAreaProps<any>>;

TextArea.defaultProps = {};

TextArea.displayName = 'TextArea';
