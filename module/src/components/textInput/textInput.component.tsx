import * as React from 'react';

import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn, NullOrUndefined } from '../../types';
import { concat } from '../../utils/classNames';
import { IInputProps, Input } from '../input/input.component';

export const TextInput = React.forwardRef(
  <T extends NullOrUndefined<string>>({ className, ...props }: Omit<IInputProps<T>, 'type'>, ref: React.ForwardedRef<HTMLInputElement>) => {
    return <Input {...props} className={concat('arm-text-input', className)} ref={ref} type="text" />;
  }
  // type assertion to ensure generic works with RefForwarded component
  // DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
) as (<T extends NullOrUndefined<string>>(props: ArmstrongFCProps<Omit<IInputProps<T>, 'type'>, HTMLInputElement>) => ArmstrongFCReturn) &
  ArmstrongFCExtensions<Omit<IInputProps<any>, 'type'>>;
