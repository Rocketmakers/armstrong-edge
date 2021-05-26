import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { IInputBaseProps, InputBase } from '../inputBase/inputBase.component';

export const TelInput = React.forwardRef<HTMLInputElement, Omit<IInputBaseProps<string>, 'type'>>(({ className, ...props }, ref) => {
  return <InputBase {...props} className={ClassNames.concat('arm-tel-input', className)} ref={ref} type="tel" />;
});
