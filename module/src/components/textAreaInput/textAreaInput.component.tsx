import * as React from 'react';

import { IBindingProps } from '../../hooks/form/form.types';
import { ClassNames } from '../../utils/classNames';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper/inputWrapper.component';
import { useMyValidationErrorMessages } from '../validationErrors';

export interface ITextAreaInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
    Omit<IInputWrapperProps, 'onClick'> {
  /** (IBindingProps) prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<string>;
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
      ...nativeProps
    },
    ref
  ) => {
    const internalRef = React.useRef<HTMLTextAreaElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(event);

        const currentValue = event.currentTarget.value;

        if (bind) {
          const formattedValue = bind.bindConfig?.format?.toData?.(currentValue) || currentValue;
          bind.setValue(formattedValue);
        }
      },
      [bind, onChange]
    );

    const allValidationErrorMessages = useMyValidationErrorMessages(bind, validationErrorMessages);

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
        <textarea ref={internalRef} {...nativeProps} onChange={onChangeEvent} value={bind?.value ?? value} disabled={disabled} />
      </InputWrapper>
    );
  }
);

TextAreaInput.defaultProps = {};
