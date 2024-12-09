import * as React from 'react';

import { concat } from '../../utils/classNames';
import { useArmstrongConfig } from '../config';

import './spinner.theme.css';

import type { JSX } from 'react';

export interface ISpinnerProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label'> {
  /** icon definition for icon to spin in middle of div, can be overridden using children */
  icon?: JSX.Element;

  /** should the spinner wrapper fill the container, meaning the icon is centred */
  fillContainer?: boolean;

  /** text to render below the spinner */
  label?: React.ReactNode;
}

/** Renders a spinner centred in the div that's being wrapped */
export const Spinner = ({
  ref,
  children,
  className,
  icon,
  fillContainer,
  label,
  ...HTMLProps
}: React.PropsWithChildren<ISpinnerProps> & {
  ref?: React.RefObject<HTMLDivElement>;
}) => {
  const { spinnerIcon } = useArmstrongConfig({ spinnerIcon: icon });
  return (
    <div
      ref={ref}
      className={concat('arm-spinner', className)}
      data-fill-container={fillContainer}
      role="status"
      aria-busy={true}
      aria-label="Loading..."
      {...HTMLProps}
    >
      <div className="arm-spinner-inner">{children || spinnerIcon}</div>
      {label && (
        <div className="arm-spinner-label">
          <span>{label}</span>
        </div>
      )}
    </div>
  );
};

Spinner.displayName = 'Spinner';

Spinner.defaultProps = {
  fillContainer: true,
};
