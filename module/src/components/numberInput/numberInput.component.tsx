import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { IInputBaseProps, InputBase } from '../inputBase/inputBase.component';

export const NumberInput = React.forwardRef<HTMLInputElement, Omit<IInputBaseProps<number>, 'type'>>(({ className, ...props }, ref) => {
  return <InputBase {...props} className={ClassNames.concat('arm-number-input', className)} ref={ref} type="number" />;
});
