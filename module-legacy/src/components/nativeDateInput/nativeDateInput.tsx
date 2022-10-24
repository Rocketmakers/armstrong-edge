import * as React from 'react';

import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongVFCProps, NullOrUndefined } from '../../types';
import { ClassNames } from '../../utils/classNames';
import { IInputProps, Input } from '../input/input.component';

// HTMLInputElement, Omit<IInputProps<string>, 'type'>

/** Wrap up a text input with type=date */
export const NativeDateInput = React.forwardRef(
  <TBind extends NullOrUndefined<string>>({ className, ...props }: Omit<IInputProps<TBind>, 'type'>, ref: React.ForwardedRef<HTMLInputElement>) => {
    return <Input {...props} className={ClassNames.concat('arm-native-date-input', className)} ref={ref} type="date" />;
  }
) as (<TBind extends NullOrUndefined<string>>(props: ArmstrongVFCProps<Omit<IInputProps<TBind>, 'type'>, HTMLInputElement>) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<Omit<IInputProps<any>, 'type'>>;
