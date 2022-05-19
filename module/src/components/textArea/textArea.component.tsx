import * as React from 'react';

import { Form } from '../..';
import { FormValidationMode, IBindingProps, IDelayInputConfig, ValidationMessage } from '../../hooks/form/form.types';
import { useDebounce } from '../../hooks/useDebounce';
import { useThrottle } from '../../hooks/useThrottle';
import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongVFCProps, NullOrUndefined } from '../../types';
import { ClassNames } from '../../utils/classNames';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper/inputWrapper.component';

type NativeTextAreaProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

interface IDelayedTextAreaBaseProps extends NativeTextAreaProps {
  /** Time interval in milliseconds to delay input */
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

    return <textarea className="arm-text-area-textarea" ref={ref} value={actualValue} onChange={onChangeEvent} {...nativeProps} />;
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

    return <textarea className="arm-text-area-textarea" ref={ref} value={actualValue} onChange={onChangeEvent} {...nativeProps} />;
  }
);

export interface ITextAreaProps<TBind extends NullOrUndefined<string>>
  extends Omit<NativeTextAreaProps, 'value'>,
    Omit<IInputWrapperProps, 'onClick'> {
  /**  prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TBind>;

  /** array of validation errors to render */
  validationErrorMessages?: ValidationMessage[];

  /** how to render the validation errors */
  validationMode?: FormValidationMode;

  /** Current value of the input. */
  value?: TBind;

  /** Called when the value changes, takes into account any delay values and other effects. */
  onValueChange?: (value: TBind) => any;

  /** The delay config, used to set throttle and debounce values. */
  delay?: IDelayInputConfig;
}

export const TextArea = React.forwardRef(
  <TBind extends NullOrUndefined<string>>(
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
      disabled,
      pending,
      above,
      scrollValidationErrorsIntoView,
      below,
      statusPosition,
      disableOnPending,
      delay,
      onValueChange,
      ...nativeProps
    }: ITextAreaProps<TBind>,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    const internalRef = React.useRef<HTMLTextAreaElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

    const [boundValue, setBoundValue, bindConfig] = Form.useBindingState(bind, {
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
        className={ClassNames.concat('arm-text-area', className)}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        leftOverlay={leftOverlay}
        rightOverlay={rightOverlay}
        validationErrorMessages={bindConfig.validationErrorMessages}
        errorIcon={bindConfig.validationErrorIcon}
        validationMode={bindConfig.validationMode}
        disabled={disabled}
        pending={pending}
        above={above}
        disableOnPending={disableOnPending}
        statusPosition={statusPosition}
        below={below}
        onClick={() => internalRef.current?.focus()}
        scrollValidationErrorsIntoView={scrollValidationErrorsIntoView}
      >
        {delay?.mode === 'debounce' && !!delay.milliseconds && (
          <DebounceTextAreaBase
            {...nativeProps}
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
            milliseconds={delay.milliseconds}
            {...inputProps}
            onChange={onChange}
            onValueChange={onValueChangeEvent}
            ref={ref}
          />
        )}
        {!delay?.milliseconds && <textarea className="arm-text-area-textarea" {...nativeProps} onChange={onChangeEvent} {...inputProps} />}
      </InputWrapper>
    );
  }
) as (<TBind extends NullOrUndefined<string>>(props: ArmstrongVFCProps<ITextAreaProps<TBind>, HTMLTextAreaElement>) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<ITextAreaProps<any>>;

TextArea.defaultProps = {};
