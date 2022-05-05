import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { IconButton, IconSet, IIcon } from '..';
import { IInputProps, Input } from '../input/input.component';

interface IPasswordInputProps extends Omit<IInputProps<string>, 'type'> {
  showPasswordButton?: boolean;
  showPasswordButtonIcon?: (showing?: boolean) => IIcon<IconSet>;
}

/** Wrap up a text input with type=password */
export const PasswordInput = React.forwardRef<HTMLInputElement, IPasswordInputProps>(
  ({ className, showPasswordButton, showPasswordButtonIcon, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <Input
        {...props}
        className={ClassNames.concat('arm-password-input', className)}
        ref={ref}
        type={showPassword ? 'text' : 'password'}
        rightOverlay={
          showPasswordButton &&
          showPasswordButtonIcon && (
            <IconButton icon={showPasswordButtonIcon(showPassword)} onClick={() => setShowPassword(!showPassword)} minimalStyle />
          )
        }
      />
    );
  }
);

PasswordInput.defaultProps = {
  showPasswordButtonIcon: (checked) => ({ iconSet: 'Icomoon', icon: checked ? 'eye-blocked' : 'eye' }),
};
