import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { IconSet, IconUtils, IIcon } from '../icon';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';
import { Spinner } from '../spinner';
import { ValidationErrors } from '../validationErrors';

export interface IButtonProps
  extends IIconWrapperProps<IconSet, IconSet>,
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  /** (string) CSS className property */
  className?: string;

  /** (string[]) array of validation errors to render */
  validationErrorMessages?: string[];

  /** (IIcon) the icon to use for validation errors */
  validationErrorIcon?: IIcon<IconSet>;

  /** (boolean) show a spinner and disable */
  pending?: boolean;

  /** (left|right) which side of the button to show the spinner on */
  spinnerPosition?: 'left' | 'right';

  /** (boolean) disable use */
  disabled?: boolean;

  /** (boolean) show an error icon on the button and add a data-attribute */
  error?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  className,
  validationErrorMessages,
  validationErrorIcon,
  pending,
  disabled,
  error,
  leftIcon,
  rightIcon,
  children,
  spinnerPosition,
  ...nativeProps
}) => {
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
        <IconWrapper leftIcon={leftIcon} rightIcon={rightIcon}>
          {spinnerPosition === 'left' && (
            <div className="arm-button-spinner-wrapper">
              <Spinner fillContainer={false} />
            </div>
          )}
          {children}
          {spinnerPosition === 'right' && (
            <div className="arm-button-spinner-wrapper">
              <Spinner fillContainer={false} />
            </div>
          )}
        </IconWrapper>
      </button>

      {!!validationErrorMessages?.length && <ValidationErrors validationErrors={validationErrorMessages} icon={validationErrorIcon} />}
    </>
  );
};

Button.defaultProps = {
  validationErrorIcon: IconUtils.getIconDefinition('Icomoon', 'warning'),
  spinnerPosition: 'right',
};
