import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { IconSet, IconUtils, IIcon } from '../icon';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';
import { Status } from '../status';
import { ValidationErrors } from '../validationErrors';

export interface IButtonProps
  extends IIconWrapperProps<IconSet, IconSet>,
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  /** (string) CSS className property */
  className?: string;

  /** (string[]) array of validation errors to render */
  validationErrorMessages?: string[];

  /** (IIcon) the icon to use for validation errors */
  errorIcon?: IIcon<IconSet>;

  /** (boolean) show a spinner and disable */
  pending?: boolean;

  /** (left|right) which side of the button to show the spinner on */
  statusPosition?: 'left' | 'right';

  /** (boolean) hide the icon on the same side as the status if there is an active status - defaults to true */
  hideIconOnStatus?: boolean;

  /** (boolean) disable use */
  disabled?: boolean;

  /** (boolean) show an error icon on the button and add a data-attribute */
  error?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  className,
  validationErrorMessages,
  errorIcon,
  pending,
  disabled,
  error,
  leftIcon,
  rightIcon,
  children,
  statusPosition,
  hideIconOnStatus,
  ...nativeProps
}) => {
  const shouldShowErrorIcon = !!validationErrorMessages?.length || error;

  const showLeftIcon = statusPosition !== 'left' || !hideIconOnStatus || (!pending && !shouldShowErrorIcon);
  const showRightIcon = statusPosition !== 'right' || !hideIconOnStatus || (!pending && !shouldShowErrorIcon);

  return (
    <>
      <button
        {...nativeProps}
        className={ClassNames.concat('arm-button', className)}
        data-pending={pending}
        data-disabled={disabled || pending}
        data-error={error || validationErrorMessages?.length}
        disabled={disabled || pending}
      >
        <IconWrapper leftIcon={showLeftIcon ? leftIcon : undefined} rightIcon={showRightIcon ? rightIcon : undefined}>
          {statusPosition === 'left' && <Status pending={pending} error={shouldShowErrorIcon} errorIcon={errorIcon} />}
          {children}
          {statusPosition === 'right' && <Status pending={pending} error={shouldShowErrorIcon} errorIcon={errorIcon} />}
        </IconWrapper>
      </button>

      {!!validationErrorMessages?.length && <ValidationErrors validationErrors={validationErrorMessages} icon={errorIcon} />}
    </>
  );
};

Button.defaultProps = {
  errorIcon: IconUtils.getIconDefinition('Icomoon', 'warning'),
  statusPosition: 'right',
  hideIconOnStatus: true,
};
