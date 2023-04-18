import * as React from 'react';

import { FormValidationMode, ValidationMessage } from '../../hooks/form';
import { concat } from '../../utils/classNames';
import { IButtonCoreProps } from '../button';
import { getIconDefinition, Icon, IconSet, IIcon, isIconDefinition } from '../icon';
import { IStatusWrapperProps, StatusWrapper } from '../statusWrapper/statusWrapper.component';
import { ValidationErrors } from '../validationErrors';

export interface IInputWrapperProps
  extends Pick<IButtonCoreProps<IconSet, IconSet>, 'leftIcon' | 'rightIcon'>,
    IStatusWrapperProps {
  /** CSS className property */
  className?: string;

  /** text to overlay to the left of the input */
  leftOverlay?: React.ReactNode;

  /** text to overlay to the right of the input */
  rightOverlay?: React.ReactNode;

  /** array of validation errors to render */
  validationErrorMessages?: ValidationMessage[];

  /** how to render the validation errors */
  validationMode?: FormValidationMode;

  /** the icon to use for validation errors */
  errorIcon?: IIcon<IconSet>;

  /** disable use */
  disabled?: boolean;

  /** hide the icon on the given side if there is an active status - defaults to true */
  hideIconOnStatus?: boolean;

  /** fired when the user clicks on the div */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;

  /** when pending is true should also disable the input */
  disableOnPending?: boolean;

  /** will scroll the validation errors into view when the length of validationErrors changes */
  scrollValidationErrorsIntoView?: boolean;
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
      errorIcon,
      disabled,
      pending,
      error,
      statusPosition,
      hideIconOnStatus,
      onClick,
      disableOnPending,
      scrollValidationErrorsIntoView,
      ...nativeProps
    },
    ref
  ) => {
    const shouldShowValidationErrorsList = validationMode === 'both' || validationMode === 'message';
    const shouldShowErrorIcon =
      (!!validationErrorMessages?.length && (validationMode === 'both' || validationMode === 'icon')) || error;

    const showLeftIcon = statusPosition !== 'left' || !hideIconOnStatus || (!pending && !shouldShowErrorIcon);
    const showRightIcon = statusPosition !== 'right' || !hideIconOnStatus || (!pending && !shouldShowErrorIcon);

    return (
      <>
        <div
          ref={ref}
          className={concat('arm-input', 'arm-input-wrapper', className)}
          data-disabled={disabled || (pending && disableOnPending)}
          data-error={error || !!validationErrorMessages?.length}
          data-left-icon={!!leftIcon || undefined}
          data-right-icon={!!rightIcon || undefined}
          onClick={onClick}
          {...nativeProps}
        >
          <div className="arm-input-inner">
            <StatusWrapper
              error={error}
              pending={pending}
              statusPosition={statusPosition}
              errorIcon={errorIcon}
              validationErrorMessages={validationErrorMessages}
              validationMode={validationMode}
            >
              <>
                {showLeftIcon && leftIcon && (
                  <>
                    {isIconDefinition(leftIcon) ? (
                      <Icon {...leftIcon} className="left-icon" title={`${leftIcon.icon} icon on left`} />
                    ) : (
                      leftIcon
                    )}
                  </>
                )}
                {leftOverlay && (
                  <div className="arm-input-overlay arm-input-overlay-left">
                    {typeof leftOverlay === 'string' ? (
                      <p className="arm-input-overlay-text">{leftOverlay}</p>
                    ) : (
                      leftOverlay
                    )}
                  </div>
                )}
                {children}
                {rightOverlay && (
                  <div className="arm-input-overlay arm-input-overlay-right">
                    {typeof rightOverlay === 'string' ? (
                      <p className="arm-input-overlay-text">{rightOverlay}</p>
                    ) : (
                      rightOverlay
                    )}
                  </div>
                )}
                {showRightIcon && rightIcon && (
                  <>
                    {isIconDefinition(rightIcon) ? (
                      <Icon {...rightIcon} className="right-icon" title={`${rightIcon.icon} icon on right`} />
                    ) : (
                      rightIcon
                    )}
                  </>
                )}
              </>
            </StatusWrapper>
          </div>

          {!!validationErrorMessages?.length && shouldShowValidationErrorsList && (
            <ValidationErrors
              validationMode={validationMode}
              validationErrors={validationErrorMessages}
              icon={errorIcon}
              scrollIntoView={scrollValidationErrorsIntoView}
            />
          )}
        </div>
      </>
    );
  }
);

InputWrapper.defaultProps = {
  validationMode: 'both',
  errorIcon: getIconDefinition('Icomoon', 'warning'),
  statusPosition: 'right',
  hideIconOnStatus: true,
  disableOnPending: true,
};
