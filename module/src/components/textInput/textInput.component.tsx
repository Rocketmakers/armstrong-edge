import * as React from 'react';

import { ClassUtils } from '../../utils/classNames';
import { IInputBaseProps, InputBase } from '../inputBase/inputBase.component';

export const TextInput = React.forwardRef<HTMLInputElement, Omit<IInputBaseProps<string>, 'type'>>(({ className, ...props }, ref) => {
  return <InputBase {...props} className={ClassUtils.concat('arm-text-input', className)} ref={ref} type="text" />;
});
