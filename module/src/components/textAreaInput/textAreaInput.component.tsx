import * as React from 'react';

import { FormValidationMode, IBindingProps } from '../../hooks/form/form.types';
import { bindInputChangeEvent } from '../../hooks/form/form.utils';
import { ClassNames } from '../../utils/classNames';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper/inputWrapper.component';
import { useMyValidationErrorMessages } from '../validationErrors';

export interface ITextAreaInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
    IInputWrapperProps {
  /** (IBindingProps) prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<string>;

  /** (string[]) array of validation errors to render */
  validationErrorMessages?: string[];

  /** (icon|message|both) how to render the validation errors */
  validationMode?: FormValidationMode;
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
      ...nativeProps
    },
    ref
  ) => {
    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        return bindInputChangeEvent(event, bind, onChange);
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
      >
        <textarea ref={ref} {...nativeProps} onChange={onChangeEvent} value={bind?.value ?? value} disabled={disabled} />
      </InputWrapper>
    );
  }
);

TextAreaInput.defaultProps = {};
