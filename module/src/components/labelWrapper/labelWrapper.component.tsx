import * as React from 'react';

import { ClassNames } from '../..';

export interface ILabelWrapperProps extends React.HTMLProps<HTMLLabelElement> {
  /** The text content of the label */
  labelContent?: string;
}

export const LabelWrapper = React.forwardRef<HTMLLabelElement, React.PropsWithChildren<ILabelWrapperProps>>(
  ({ labelContent, className, children, ...htmlProps }, forwardedRef) => {
    return (
      <label {...htmlProps} ref={forwardedRef} className={ClassNames.concat('arm-label-wrapper', className)}>
        <span className="arm-label-wrapper-content">{labelContent}</span>

        {children}
      </label>
    );
  }
);
