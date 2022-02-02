import * as React from 'react';

import { ValidationMessage } from '../../hooks/form';
import { ClassNames } from '../../utils/classNames';
import { IconSet, IconUtils, IIcon } from '../icon';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';
import { IStatusWrapperProps, StatusWrapper } from '../statusWrapper/statusWrapper.component';
import { ValidationErrors } from '../validationErrors';

export type ButtonElementTag = 'button' | 'div';

type ButtonHTMLProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type IButtonCoreProps = IIconWrapperProps<IconSet, IconSet> &
  IStatusWrapperProps & {
    /** CSS className property */
    className?: string;

    /** array of validation errors to render */
    validationErrorMessages?: ValidationMessage[];

    /** the icon to use for validation errors */
    errorIcon?: IIcon<IconSet>;

    /** show a spinner and disable */
    pending?: boolean;

    /** hide the icon on the same side as the status if there is an active status - defaults to true */
    hideIconOnStatus?: boolean;

    /** disable use */
    disabled?: boolean;

    /** don't style beyond removing the default css styling */
    minimalStyle?: boolean;
  };

export type IButtonProps = IButtonCoreProps & ButtonHTMLProps & { to?: never };

/** Renders the inside of a button, for use in altering the tag used for the wrapper */
export const ButtonInner: React.FC<IButtonCoreProps> = ({
  validationErrorMessages,
  errorIcon,
  pending,
  error,
  leftIcon,
  rightIcon,
  children,
  statusPosition,
  hideIconOnStatus,
}) => {
  const shouldShowErrorIcon = !!validationErrorMessages?.length || error;

  const showLeftIcon = statusPosition !== 'left' || !hideIconOnStatus || (!pending && !shouldShowErrorIcon);
  const showRightIcon = statusPosition !== 'right' || !hideIconOnStatus || (!pending && !shouldShowErrorIcon);

  return (
    <IconWrapper leftIcon={showLeftIcon ? leftIcon : undefined} rightIcon={showRightIcon ? rightIcon : undefined}>
      <StatusWrapper
        pending={pending}
        errorIcon={errorIcon}
        statusPosition={statusPosition}
        error={error}
        validationErrorMessages={validationErrorMessages}
      >
        {typeof children === 'string' || typeof children === 'number' ? <span>{children}</span> : children}
      </StatusWrapper>
    </IconWrapper>
  );
};

/** Renders an HTML button element with some useful additions */
export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    className,
    disabled,
    minimalStyle,
    validationErrorMessages,
    error,
    errorIcon,
    pending,
    leftIcon,
    rightIcon,
    children,
    statusPosition,
    hideIconOnStatus,
    ...nativeProps
  } = props;

  const shouldShowErrorIcon = !!validationErrorMessages?.length || error;

  const elementProps = {};

  return (
    <>
      <button
        className={ClassNames.concat(minimalStyle ? 'arm-button-minimal' : 'arm-button', className)}
        data-pending={pending}
        data-disabled={disabled || pending}
        data-error={shouldShowErrorIcon}
        disabled={disabled || pending}
        tabIndex={disabled ? -1 : nativeProps.tabIndex}
        {...(nativeProps as ButtonHTMLProps)}
        ref={ref}
        {...elementProps}
      >
        <ButtonInner {...props} />
      </button>

      {!!validationErrorMessages?.length && <ValidationErrors validationErrors={validationErrorMessages} icon={errorIcon} />}
    </>
  );
});

Button.defaultProps = {
  errorIcon: IconUtils.getIconDefinition('Icomoon', 'warning'),
  statusPosition: 'right',
  hideIconOnStatus: true,
};
