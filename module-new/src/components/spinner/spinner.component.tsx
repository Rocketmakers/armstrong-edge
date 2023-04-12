import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import { concat } from '../../utils/classNames';

import './spinner.theme.css';

export interface ISpinnerProps extends React.HTMLProps<HTMLDivElement> {
  /** icon definition for icon to spin in middle of div, can be overriden using children */
  icon?: JSX.Element;

  /** should the spinner wrapper fill the container, meaning the icon is centred */
  fillContainer?: boolean;

  /** text to render below the spinner */
  label?: string;
}

/** Renders a spinner centred in the div that's being wrapped */
export const Spinner = React.forwardRef<HTMLDivElement, React.PropsWithChildren<ISpinnerProps>>(
  ({ children, className, icon, fillContainer, label, ...HTMLProps }, ref) => (
    <div ref={ref} className={concat('arm-spinner', className)} {...HTMLProps} data-fill-container={fillContainer}>
      <div className="arm-spinner-inner">{children || icon}</div>
      {label && (
        <div className="arm-spinner-label">
          <span>{label}</span>
        </div>
      )}
    </div>
  )
);

Spinner.defaultProps = {
  icon: <ImSpinner2 />,
  fillContainer: true,
};
