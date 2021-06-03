import * as React from 'react';

import { FormValidationMode } from '../../hooks/form';
import { ClassNames } from '../../utils/classNames';
import { IconSet, IconUtils, IIcon } from '../icon';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';
import { Status } from '../status';
import { ValidationErrors } from '../validationErrors';

export interface IInputWrapperProps extends IIconWrapperProps<IconSet, IconSet> {
  /** (string) CSS className property */
  className?: string;

  /** (JSX | string) text to overlay to the left of the input */
  leftOverlay?: React.ReactNode;

  /** (JSX | string) text to overlay to the right of the input */
  rightOverlay?: React.ReactNode;

  /** (string[]) array of validation errors to render */
  validationErrorMessages?: string[];

  /** (icon|message|both) how to render the validation errors */
  validationMode?: FormValidationMode;

  /** (IIcon) the icon to use for validation errors */
  validationErrorIcon?: IIcon<IconSet>;

  /** (boolean) show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
  error?: boolean;

  /** (boolean) show a spinner and disable */
  pending?: boolean;

  /** (boolean) disable use */
  disabled?: boolean;

  /** (left|right) which side of the button to show the spinner on - defaults to 'right' */
  statusPosition?: 'left' | 'right';

  /** (boolean) hide the icon on the given side if there is an active status - defaults to true */
  hideIconOnStatus?: boolean;

  /** (JSX) content to render above the actual input */
  above?: JSX.Element;

  /** (JSX) content to render below the actual input */
  below?: JSX.Element;

  /** ((event) => void) fired when the user clicks on the div */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;

  /** (boolean) when pending is true should also disable the input */
  disableOnPending?: boolean;
}

/** Wrapper for individual input elements, allowing them to be styled consistently] */
export const InputWrapper = React.forwardRef<HTMLDivElement, React.PropsWithChildren<IInputWrapperProps>>(
  (
    {
      className,
      children,
      leftIcon,
      rightIcon,
      leftOverlay,
      rightOverlay,
      validationMode,
      validationErrorMessages,
      validationErrorIcon,
      disabled,
      pending,
      error,
      statusPosition,
      hideIconOnStatus,
      above,
      below,
      onClick,
      disableOnPending,
      ...nativeProps
    },
    ref
  ) => {
    const shouldShowValidationErrorsList = validationMode === 'both' || validationMode === 'message';
    const shouldShowErrorIcon = (!!validationErrorMessages?.length && (validationMode === 'both' || validationMode === 'icon')) || error;

    const showLeftIcon = statusPosition !== 'left' || !hideIconOnStatus || (!pending && !shouldShowErrorIcon);
    const showRightIcon = statusPosition !== 'right' || !hideIconOnStatus || (!pending && !shouldShowErrorIcon);

    return (
      <>
        <div
          ref={ref}
          className={ClassNames.concat('arm-input', 'input-wrapper', className)}
          data-disabled={disabled || (pending && disableOnPending)}
          data-error={error || !!validationErrorMessages?.length}
          onClick={onClick}
          {...nativeProps}
        >
          {above && <div className="arm-input-wrapper-above">{above}</div>}

          <div className="arm-input-inner">
            {statusPosition === 'left' && <Status error={shouldShowErrorIcon} pending={pending} errorIcon={validationErrorIcon} />}
            <IconWrapper leftIcon={showLeftIcon ? leftIcon : undefined} rightIcon={showRightIcon ? rightIcon : undefined}>
              {leftOverlay && (
                <div className="arm-input-overlay arm-input-overlay-left">{typeof leftOverlay === 'string' ? <p>{leftOverlay}</p> : leftOverlay}</div>
              )}
              {children}
              {rightOverlay && (
                <div className="arm-input-overlay arm-input-overlay-right">
                  {typeof rightOverlay === 'string' ? <p>{rightOverlay}</p> : rightOverlay}
                </div>
              )}
            </IconWrapper>
            {statusPosition === 'right' && <Status error={shouldShowErrorIcon} pending={pending} errorIcon={validationErrorIcon} />}
          </div>

          {below && <div className="arm-input-wrapper-below">{below}</div>}
        </div>

        {!!validationErrorMessages?.length && shouldShowValidationErrorsList && (
          <ValidationErrors validationErrors={validationErrorMessages} icon={validationErrorIcon} />
        )}
      </>
    );
  }
);

InputWrapper.defaultProps = {
  validationMode: 'both',
  validationErrorIcon: IconUtils.getIconDefinition('Icomoon', 'warning'),
  statusPosition: 'right',
  hideIconOnStatus: true,
  disableOnPending: true,
};
