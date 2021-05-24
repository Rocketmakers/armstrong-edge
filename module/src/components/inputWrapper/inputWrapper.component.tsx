import * as React from 'react';

import { ClassUtils } from '../../utils/classNames';

export interface IInputWrapperProps {
  className?: string;
}

export const InputWrapper = React.forwardRef<HTMLDivElement, React.PropsWithChildren<IInputWrapperProps>>(({ className, children }, ref) => {
  return (
    <div ref={ref} className={ClassUtils.concat('arm-input', className)}>
      {children}
    </div>
  );
});
