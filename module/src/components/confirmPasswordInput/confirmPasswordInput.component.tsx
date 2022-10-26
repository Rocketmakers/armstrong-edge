import * as React from 'react';

import { Form } from '../..';
import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongVFCProps, NullOrUndefined } from '../../types';
import { IInputProps } from '../input';
import { PasswordInput } from '../passwordInput';

export interface IConfirmPasswordInputProps<TBind extends NullOrUndefined<string>>
  extends Omit<IInputProps<TBind>, 'type' | 'validationErrorMessages'> {
  passwordsDontMatchMessage?: string;
}

/** A password input that takes a bind and shows if the given value is different from the bound value */
export const ConfirmPasswordInput = React.forwardRef(
  <TBind extends NullOrUndefined<string>>(
    {
      passwordsDontMatchMessage,
      errorIcon,
      bind,
      validationMode,
      value,
      onFocus: onFocusProp,
      onBlur: onBlurProp,
      onValueChange,
      ...inputProps
    }: IConfirmPasswordInputProps<TBind>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [boundValue, , bindConfig] = Form.useBindingState(bind, {
      value: value?.toString() as TBind,
      onChange: onValueChange,
      validationMode,
      validationErrorIcon: errorIcon,
    });

    const [inputValue, setInputValue] = React.useState<string | undefined | null>('');

    const [showError, setShowError] = React.useState(false);

    const onBlur = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        if (boundValue && inputValue && inputValue !== boundValue) {
          setShowError(true);
          onBlurProp?.(event);
        }
      },
      [inputValue, boundValue]
    );

    const onFocus = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        setShowError(false);
        onFocusProp?.(event);
      },
      [onFocusProp]
    );

    return (
      <PasswordInput
        onFocus={onFocus}
        onBlur={onBlur}
        value={inputValue ?? undefined}
        onValueChange={setInputValue}
        {...inputProps}
        ref={ref}
        validationErrorMessages={showError ? [passwordsDontMatchMessage!] : []}
        errorIcon={bindConfig.validationErrorIcon}
        validationMode={bindConfig.validationMode}
      />
    );
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<TBind extends NullOrUndefined<string>>(props: ArmstrongVFCProps<IConfirmPasswordInputProps<TBind>, HTMLInputElement>) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IConfirmPasswordInputProps<any>>;

ConfirmPasswordInput.defaultProps = {
  passwordsDontMatchMessage: "Passwords don't match",
};
