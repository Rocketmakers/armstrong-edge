import * as React from 'react';
import { LabelHTMLAttributes } from 'react';

import { concat } from '../../utils';
import { useArmstrongConfig } from '../config';

import './label.theme.css';

export interface ILabelProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'ref'> {
  /** Should the label show a required indicator? */
  required?: boolean;

  /** Symbol to use as the required indicator, defaults to "*" */
  requiredIndicator?: React.ReactNode;
}

/** Render a status icon which can either be pending or errored */
export const Label = React.forwardRef<HTMLLabelElement, ILabelProps>(
  ({ required, className, requiredIndicator, children, ...nativeProps }, ref) => {
    const globals = useArmstrongConfig({
      requiredIndicator,
    });
    return (
      <label className={concat('arm-label', className)} ref={ref} {...nativeProps}>
        {children}
        {required && <span className="arm-label-required-indicator">&nbsp;{globals.requiredIndicator}</span>}
      </label>
    );
  }
);

Label.displayName = 'Label';
