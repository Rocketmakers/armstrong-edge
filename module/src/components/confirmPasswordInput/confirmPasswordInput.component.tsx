import * as React from 'react';

import { Form } from '../..';
import { IInputProps } from '../input';
import { PasswordInput } from '../passwordInput';

export interface IConfirmPasswordInputProps extends Omit<IInputProps<string>, 'type' | 'validationErrorMessages'> {
  passwordsDontMatchMessage?: string;
}

/** A password input that takes a bind and shows if the given value is different from the bound value */
export const ConfirmPasswordInput = React.forwardRef<HTMLInputElement, IConfirmPasswordInputProps>(
  (
    { passwordsDontMatchMessage, errorIcon, bind, validationMode, value, onFocus: onFocusProp, onBlur: onBlurProp, onValueChange, ...inputProps },
    ref
  ) => {
    const [boundValue, , bindConfig] = Form.useBindingTools(bind, {
      value: value?.toString(),
      onChange: onValueChange,
      validationMode,
      validationErrorIcon: errorIcon,
    });

    const [inputValue, setInputValue] = React.useState('');

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
        value={inputValue}
        onValueChange={setInputValue}
        {...inputProps}
        ref={ref}
        validationErrorMessages={showError ? [passwordsDontMatchMessage!] : []}
        errorIcon={bindConfig.validationErrorIcon}
        validationMode={bindConfig.validationMode}
      />
    );
  }
);

ConfirmPasswordInput.defaultProps = {
  passwordsDontMatchMessage: "Passwords don't match",
};
