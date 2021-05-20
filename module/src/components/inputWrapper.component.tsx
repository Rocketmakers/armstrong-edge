import * as React from 'react';

import { ClassUtils } from '../utils/classNames';

interface IInputWrapperProps {
  className?: string;
}

export const InputWrapper: React.FC<IInputWrapperProps> = ({ className, children }) => {
  return <div className={ClassUtils.concat('arm-input', className)}>{children}</div>;
};
