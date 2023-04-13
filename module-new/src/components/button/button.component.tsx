import * as React from 'react';

import { concat } from '../../utils/classNames';
import { Spinner } from '../spinner/spinner.component';

import './button.theme.css';

type ButtonHTMLProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'ref'
>;

type ButtonDisplayStyle = 'primary' | 'secondary' | 'outline';
type ButtonDisplaySize = 'small' | 'medium' | 'large' | 'extra-large';
type ButtonDisplayStatus = 'normal' | 'positive' | 'negative' | 'warning' | 'info';

export interface IButtonProps extends ButtonHTMLProps {
  /** CSS className property */
  className?: string;

  /** show a spinner and disable */
  pending?: boolean;

  /** show a spinner and disable */
  pendingPosition?: 'left' | 'right';

  /** disable use */
  disabled?: boolean;

  /** apply a test ID to the component for Storybook, Playwright etc */
  testId?: string;

  /** which style variant to use */
  displayStyle?: ButtonDisplayStyle;

  /** which size variant to use */
  displaySize?: ButtonDisplaySize;

  /** which status variant to use */
  displayStatus?: ButtonDisplayStatus;

  /** icon definition for left icon, optionally uses custom JSX */
  leftIcon?: JSX.Element;

  /** icon definition for right icon, optionally uses custom JSX */
  rightIcon?: JSX.Element;
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
    leftIcon,
    rightIcon,
    children,
    testId,
    ...nativeProps
  } = props;

  const spinner = (
    <Spinner className={concat('arm-button-spinner', `arm-button-${pendingPosition}-icon`)} role="status" />
  );
  const wrappedLeftIcon = leftIcon && <span className="arm-button-left-icon">{leftIcon}</span>;
  const wrappedRightIcon = rightIcon && <span className="arm-button-right-icon">{rightIcon}</span>;

  return (
    <button
      className={concat('arm-button', className)}
      data-pending={pending}
      data-disabled={disabled || pending}
      data-size={displaySize}
      data-style={displayStyle}
      data-status={displayStatus}
      disabled={disabled || pending}
      tabIndex={disabled ? -1 : nativeProps.tabIndex}
      data-testid={testId}
      ref={ref}
      {...nativeProps}
    >
      {pending && pendingPosition === 'left' ? spinner : wrappedLeftIcon}
      <span className="arm-button-contents">{children}</span>
      {pending && pendingPosition === 'right' ? spinner : wrappedRightIcon}
    </button>
  );
});

Button.defaultProps = {
  pendingPosition: 'right',
};

Button.displayName = 'Button';
