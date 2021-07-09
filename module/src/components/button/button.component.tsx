import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { IconSet, IconUtils, IIcon } from '../icon';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';
import { IStatusWrapperProps, StatusWrapper } from '../statusWrapper/statusWrapper.component';
import { ValidationErrors } from '../validationErrors';

export interface IButtonProps
  extends IIconWrapperProps<IconSet, IconSet>,
    Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>,
    IStatusWrapperProps {
  /** CSS className property */
  className?: string;

  /** array of validation errors to render */
  validationErrorMessages?: string[];

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
}

/** Renders an HTML button element with some useful additions */
export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      className,
      validationErrorMessages,
      errorIcon,
      pending,
      disabled,
      error,
      leftIcon,
      rightIcon,
      children,
      minimalStyle,
      statusPosition,
      hideIconOnStatus,
      ...nativeProps
    },
    ref
  ) => {
    const shouldShowErrorIcon = !!validationErrorMessages?.length || error;

    const showLeftIcon = statusPosition !== 'left' || !hideIconOnStatus || (!pending && !shouldShowErrorIcon);
    const showRightIcon = statusPosition !== 'right' || !hideIconOnStatus || (!pending && !shouldShowErrorIcon);

    return (
      <>
        <button
          {...nativeProps}
          className={ClassNames.concat('arm-button', className, { 'arm-button-minimal': minimalStyle })}
          data-pending={pending}
          data-disabled={disabled || pending}
          data-error={shouldShowErrorIcon}
          disabled={disabled || pending}
          ref={ref}
          tabIndex={disabled ? -1 : undefined}
        >
          <IconWrapper leftIcon={showLeftIcon ? leftIcon : undefined} rightIcon={showRightIcon ? rightIcon : undefined}>
            <StatusWrapper
              pending={pending}
              errorIcon={errorIcon}
              statusPosition={statusPosition}
              error={error}
              validationErrorMessages={validationErrorMessages}
            >
              {typeof children === 'string' || typeof children === 'number' ? <p>{children}</p> : children}
            </StatusWrapper>
          </IconWrapper>
        </button>

        {!!validationErrorMessages?.length && <ValidationErrors validationErrors={validationErrorMessages} icon={errorIcon} />}
      </>
    );
  }
);

Button.defaultProps = {
  errorIcon: IconUtils.getIconDefinition('Icomoon', 'warning'),
  statusPosition: 'right',
  hideIconOnStatus: true,
};
