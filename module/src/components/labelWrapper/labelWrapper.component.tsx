import * as React from 'react';

import { ClassNames } from '../..';

export interface ILabelWrapperProps extends React.HTMLProps<HTMLLabelElement> {
  /** The text content of the label */
  labelContent?: string;
}

export const LabelWrapper: React.FC<ILabelWrapperProps> = ({ labelContent, className, children, ...htmlProps }) => {
  return (
    <label {...htmlProps} className={ClassNames.concat('arm-label-wrapper', className)}>
      <span className="arm-label-wrapper-content">{labelContent}</span>

      {children}
    </label>
  );
};
