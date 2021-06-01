import * as React from 'react';

import { Form } from '../..';
import { FormValidationMode, IBindingProps } from '../../hooks/form/form.types';
import { ClassNames } from '../../utils/classNames';
import { IInputWrapperProps, InputWrapper } from '../inputWrapper/inputWrapper.component';

export interface IInputProps<TValue>
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    Omit<IInputWrapperProps, 'onClick'> {
  /** (IBindingProps) prop for binding to an Armstrong form binder (see forms documentation) */
  bind?: IBindingProps<TValue>;

  /** (string[]) array of validation errors to render */
  validationErrorMessages?: string[];

  /** (icon|message|both) how to render the validation errors */
  validationMode?: FormValidationMode;
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
      ...nativeProps
    },
    ref
  ) => {
    const internalRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

    const [boundValue, boundOnChange, { myValidationErrorMessages }] = Form.useBindingTools<any>(bind, {
      value: value?.toString(),
      onChange,
      validationErrorMessages,
    });

    const onChangeEvent = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        boundOnChange(event.currentTarget.value);
      },
      [boundOnChange]
    );

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
        <input
          {...nativeProps}
          ref={internalRef}
          className={'arm-input-base-input'}
          onChange={onChangeEvent}
          value={boundValue}
          disabled={disabled || (pending && disableOnPending)}
        />
      </InputWrapper>
    );
  }
);
