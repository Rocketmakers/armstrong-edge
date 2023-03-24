import * as React from 'react';

import {
  ArmstrongFCExtensions,
  ArmstrongFCReturn,
  ArmstrongVFCProps,
  NullOrUndefined,
} from '../../types';
import { concat } from '../../utils/classNames';
import { Button, Icon, IconSet, IIcon } from '..';
import { IInputProps, Input } from '../input/input.component';

interface IPasswordInputProps<TBind extends NullOrUndefined<string>>
  extends Omit<IInputProps<TBind>, 'type'> {
  showPasswordButton?: boolean;
  showPasswordButtonIcon?: (showing?: boolean) => IIcon<IconSet>;
}

/** Wrap up a text input with type=password */
export const PasswordInput = React.forwardRef(
  <TBind extends NullOrUndefined<string>>(
    {
      className,
      showPasswordButton,
      showPasswordButtonIcon,
      ...props
    }: IPasswordInputProps<TBind>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <Input
        {...props}
        className={concat('arm-password-input', className)}
        ref={ref}
        type={showPassword ? 'text' : 'password'}
        rightOverlay={
          showPasswordButton &&
          showPasswordButtonIcon && (
            <Button onClick={() => setShowPassword(!showPassword)}>
              <Icon
                iconSet={showPasswordButtonIcon(showPassword).iconSet}
                icon={showPasswordButtonIcon(showPassword).icon}
              />
            </Button>
          )
        }
      />
    );
  }
) as (<TBind extends NullOrUndefined<string>>(
  props: ArmstrongVFCProps<IPasswordInputProps<TBind>, HTMLInputElement>
) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<IPasswordInputProps<any>>;

PasswordInput.defaultProps = {
  showPasswordButtonIcon: (checked) => ({
    iconSet: 'Icomoon',
    icon: checked ? 'eye-blocked' : 'eye',
  }),
};
