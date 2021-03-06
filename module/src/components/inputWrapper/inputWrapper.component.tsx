import * as React from 'react';

import { FormValidationMode, ValidationMessage } from '../../hooks/form';
import { ClassNames } from '../../utils/classNames';
import { AutoResizer } from '../autoResizer';
import { IconSet, IconUtils, IIcon } from '../icon';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';
import { IStatusWrapperProps, StatusWrapper } from '../statusWrapper/statusWrapper.component';
import { ValidationErrors } from '../validationErrors';

export interface IInputWrapperProps extends IIconWrapperProps<IconSet, IconSet>, IStatusWrapperProps {
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

  /** content to render above the actual input */
  above?: JSX.Element;

  /** content to render below the actual input */
  below?: JSX.Element;

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
      above,
      below,
      onClick,
      disableOnPending,
      scrollValidationErrorsIntoView,
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
          className={ClassNames.concat('arm-input', 'arm-input-wrapper', className)}
          data-disabled={disabled || (pending && disableOnPending)}
          data-error={error || !!validationErrorMessages?.length}
          onClick={onClick}
          {...nativeProps}
        >
          {above && (
            <AutoResizer className="arm-input-wrapper-above" resizeHorizontal={false}>
              {above}
            </AutoResizer>
          )}

          <div className="arm-input-inner">
            <StatusWrapper
              error={error}
              pending={pending}
              statusPosition={statusPosition}
              errorIcon={errorIcon}
              validationErrorMessages={validationErrorMessages}
              validationMode={validationMode}
            >
              <IconWrapper leftIcon={showLeftIcon ? leftIcon : undefined} rightIcon={showRightIcon ? rightIcon : undefined}>
                {leftOverlay && (
                  <div className="arm-input-overlay arm-input-overlay-left">
                    {typeof leftOverlay === 'string' ? <p className="arm-input-overlay-text">{leftOverlay}</p> : leftOverlay}
                  </div>
                )}
                {children}
                {rightOverlay && (
                  <div className="arm-input-overlay arm-input-overlay-right">
                    {typeof rightOverlay === 'string' ? <p className="arm-input-overlay-text">{rightOverlay}</p> : rightOverlay}
                  </div>
                )}
              </IconWrapper>
            </StatusWrapper>
          </div>

          {below && (
            <AutoResizer className="arm-input-wrapper-below" resizeHorizontal={false}>
              {below}
            </AutoResizer>
          )}
        </div>

        {!!validationErrorMessages?.length && shouldShowValidationErrorsList && (
          <ValidationErrors validationErrors={validationErrorMessages} icon={errorIcon} scrollIntoView={scrollValidationErrorsIntoView} />
        )}
      </>
    );
  }
);

InputWrapper.defaultProps = {
  validationMode: 'both',
  errorIcon: IconUtils.getIconDefinition('Icomoon', 'warning'),
  statusPosition: 'right',
  hideIconOnStatus: true,
  disableOnPending: true,
};
