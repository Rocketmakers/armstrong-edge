import * as React from 'react';

import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, NullOrUndefined } from '../../../types';
import { concat } from '../../../utils/classNames';
import { IInputProps, Input } from '../input.component';

/** Wrap up a text input with type=num which binds to a number */
 export const NumberInput = React.forwardRef(
  <T extends NullOrUndefined<number>>({ className, ...props }: Omit<IInputProps<T>, 'type'>, ref: React.ForwardedRef<HTMLInputElement>) => {
    return <Input {...props} className={concat('arm-number-input', className)} ref={ref} type="number" />;
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<T extends NullOrUndefined<number>>(props: ArmstrongFCProps<Omit<IInputProps<T>, 'type'>, HTMLInputElement>) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<Omit<IInputProps<any>, 'type'>>;