import * as React from 'react';

import { concat } from '../../utils/classNames';
import { useArmstrongConfig } from '../config';

import './spinner.theme.css';

export interface ISpinnerProps extends React.HTMLProps<HTMLDivElement> {
  /** icon definition for icon to spin in middle of div, can be overridden using children */
  icon?: JSX.Element;

  /** should the spinner wrapper fill the container, meaning the icon is centred */
  fillContainer?: boolean;

  /** text to render below the spinner */
  label?: string;
}

/** Renders a spinner centred in the div that's being wrapped */
export const Spinner = React.forwardRef<HTMLDivElement, React.PropsWithChildren<ISpinnerProps>>(
  ({ children, className, icon, fillContainer, label, ...HTMLProps }, ref) => {
    const { spinnerIcon } = useArmstrongConfig({ spinnerIcon: icon });
    return (
      <div
        ref={ref}
        className={concat('arm-spinner', className)}
        {...HTMLProps}
        data-fill-container={fillContainer}
        data-testid={'spinner'}
      >
        <div className="arm-spinner-inner">{children || spinnerIcon}</div>
        {label && (
          <div className="arm-spinner-label">
            <span>{label}</span>
          </div>
        )}
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';

Spinner.defaultProps = {
  fillContainer: true,
};
