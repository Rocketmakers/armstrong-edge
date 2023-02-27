import * as React from 'react';

import { ArmstrongFCExtensions, ArmstrongFCReturn, ArmstrongVFCProps, NullOrUndefined } from '../../../types';
import { concat } from '../../../utils/classNames';
import { IInputProps, Input } from '../input.component';

/** Wrap up a text input with type=tel */
export const TelInput = React.forwardRef(
  <TBind extends NullOrUndefined<string>>({ className, ...props }: Omit<IInputProps<TBind>, 'type'>, ref: React.ForwardedRef<HTMLInputElement>) => {
    return <Input {...props} className={concat('arm-tel-input', className)} ref={ref} type="tel" />;
  }
) as (<TBind extends NullOrUndefined<string>>(props: ArmstrongVFCProps<Omit<IInputProps<TBind>, 'type'>, HTMLInputElement>) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<Omit<IInputProps<any>, 'type'>>;
