import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { IInputProps, Input } from '../input/input.component';

export const TelInput = React.forwardRef<HTMLInputElement, Omit<IInputProps<string>, 'type'>>(({ className, ...props }, ref) => {
  return <Input {...props} className={ClassNames.concat('arm-tel-input', className)} ref={ref} type="tel" />;
});
