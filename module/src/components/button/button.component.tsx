import * as React from 'react';

import { DisplaySize } from '../../types';
import { concat } from '../../utils/classNames';
import { useArmstrongConfig } from '../config';
import { Spinner } from '../spinner/spinner.component';

import './button.theme.css';

type ButtonHTMLProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'ref'
>;

export type ButtonDisplayStyle = 'primary' | 'secondary' | 'outline' | 'blank';
export type ButtonDisplayStatus = 'normal' | 'positive' | 'negative' | 'warning' | 'info';

export interface IButtonProps extends ButtonHTMLProps {
  /** CSS className property */
  className?: string;

  /** show a spinner and disable */
  pending?: boolean;

  /** show a spinner and disable */
  pendingPosition?: 'left' | 'right';

  /** when pending is true should also disable the input */
  disableOnPending?: boolean;

  /** disable use */
  disabled?: boolean;

  /** which style variant to use */
  displayStyle?: ButtonDisplayStyle;

  /** which size variant to use */
  displaySize?: DisplaySize;

  /** which status variant to use */
  displayStatus?: ButtonDisplayStatus;

  /** icon definition for left icon, optionally uses custom JSX */
  leftOverlay?: JSX.Element;

  /** icon definition for right icon, optionally uses custom JSX */
  rightOverlay?: JSX.Element;
}

/** Renders an HTML button element with some useful additions */
export const Button = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<IButtonProps>>((props, ref) => {
  const {
    className,
    disabled,
    displayStyle,
    displaySize,
    displayStatus,
    pending,
    pendingPosition,
    disableOnPending,
    leftOverlay,
    rightOverlay,
    children,
    ...nativeProps
  } = props;

  const globals = useArmstrongConfig({
    buttonDisplaySize: displaySize,
    buttonDisplayStyle: displayStyle,
    buttonPendingPosition: pendingPosition,
    disableControlOnPending: disableOnPending,
  });

  const spinner = (
    <Spinner className={concat('arm-button-spinner', `arm-button-${pendingPosition}-icon`)} role="status" />
  );
  const wrappedLeftIcon = leftOverlay && <span className="arm-button-left-icon">{leftOverlay}</span>;
  const wrappedRightIcon = rightOverlay && <span className="arm-button-right-icon">{rightOverlay}</span>;

  return (
    <button
      className={concat('arm-button', className)}
      data-pending={pending}
      data-disabled={disabled || (globals.disableControlOnPending && pending)}
      data-size={globals.buttonDisplaySize}
      data-style={globals.buttonDisplayStyle}
      data-status={displayStatus}
      disabled={disabled || pending}
      tabIndex={disabled ? -1 : nativeProps.tabIndex}
      ref={ref}
      {...nativeProps}
    >
      {pending && globals.buttonPendingPosition === 'left' ? spinner : wrappedLeftIcon}
      <span className="arm-button-contents">{children}</span>
      {pending && globals.buttonPendingPosition === 'right' ? spinner : wrappedRightIcon}
    </button>
  );
});

Button.defaultProps = {
  pendingPosition: 'right',
};

Button.displayName = 'Button';
