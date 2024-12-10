import * as React from 'react';

import { ValidationMessage } from '../../form';
import { ArmstrongFCProps, DisplaySize } from '../../types';
import { concat } from '../../utils/classNames';
import { useArmstrongConfig } from '../config';
import { Label } from '../label';
import { IStatusWrapperProps, StatusWrapper } from '../statusWrapper/statusWrapper.component';
import { ValidationErrors } from '../validationErrors';

import './inputWrapper.theme.css';

export interface IInputWrapperProps extends IStatusWrapperProps {
  /** array of validation errors to render */
  validationErrorMessages?: ValidationMessage[];

  /** disable use */
  disabled?: boolean;

  /** hide the icon on the given side if there is an active status - defaults to true */
  hideIconOnStatus?: boolean;

  /** when pending is true should also disable the input */
  disableOnPending?: boolean;

  /** will scroll the validation errors into view when the length of validationErrors changes */
  scrollValidationErrorsIntoView?: boolean;

  /** Content to show on the left of the input */
  leftOverlay?: React.ReactNode;

  /** Content to show on the right of the input */
  rightOverlay?: React.ReactNode;

  /** Class name for the status component */
  statusClassName?: string;

  /** Class name for the validation errors component */
  validationErrorsClassName?: string;

  /** Class name for the label component */
  labelClassName?: string;

  /** Optional ID for the label element */
  labelId?: string;

  /** Some optional label content */
  label?: React.ReactNode;

  /** Should the label show a required indicator? */
  required?: boolean;

  /** Symbol to use as the required indicator on the label, defaults to "*" */
  requiredIndicator?: React.ReactNode;

  /** which size variant to use */
  displaySize?: DisplaySize;
}

/** Wrapper for individual input elements, allowing them to be styled consistently] */
export const InputWrapper = ({
  ref,
  className,
  children,
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
  disableOnPending,
  scrollValidationErrorsIntoView,
  statusClassName,
  validationErrorsClassName,
  label,
  required,
  requiredIndicator,
  labelClassName,
  labelId,
  displaySize,
  ...nativeProps
}: ArmstrongFCProps<IInputWrapperProps, HTMLDivElement>) => {
  const globals = useArmstrongConfig({
    validationMode,
    hideInputErrorIconOnStatus: hideIconOnStatus,
    disableControlOnPending: disableOnPending,
    requiredIndicator,
    scrollValidationErrorsIntoView,
    inputStatusPosition: statusPosition,
    validationErrorIcon: errorIcon,
    inputDisplaySize: displaySize,
  });

  const shouldShowValidationErrorsList = globals.validationMode === 'both' || globals.validationMode === 'message';
  const shouldShowErrorIcon =
    (!!validationErrorMessages?.length && (globals.validationMode === 'both' || globals.validationMode === 'icon')) ||
    error;

  const showLeftOverlay =
    leftOverlay &&
    (globals.inputStatusPosition !== 'left' ||
      !globals.hideInputErrorIconOnStatus ||
      (!pending && !shouldShowErrorIcon));

  const showRightOverlay =
    rightOverlay &&
    (globals.inputStatusPosition !== 'right' ||
      !globals.hideInputErrorIconOnStatus ||
      (!pending && !shouldShowErrorIcon));

  return (
    <>
      <div
        ref={ref}
        className={concat('arm-input', 'arm-input-wrapper', className)}
        data-disabled={disabled || (pending && globals.disableControlOnPending) ? true : undefined}
        data-error={error || !!validationErrorMessages?.length ? true : undefined}
        data-left-overlay={
          showLeftOverlay || (globals.inputStatusPosition === 'left' && (shouldShowErrorIcon || pending))
            ? true
            : undefined
        }
        data-right-overlay={
          showRightOverlay || (globals.inputStatusPosition === 'right' && (shouldShowErrorIcon || pending))
            ? true
            : undefined
        }
        {...nativeProps}
      >
        {label && (
          <Label
            className={concat('arm-input-base-label', labelClassName)}
            required={required}
            requiredIndicator={globals.requiredIndicator}
            htmlFor={labelId}
            displaySize={globals.inputDisplaySize}
          >
            {label}
          </Label>
        )}
        <div className="arm-input-inner">
          <StatusWrapper
            error={error || !!validationErrorMessages?.length}
            pending={pending}
            statusPosition={globals.inputStatusPosition}
            errorIcon={globals.validationErrorIcon}
            validationMode={globals.validationMode}
            className={statusClassName}
          >
            <>
              {showLeftOverlay && <div className="arm-input-overlay arm-input-overlay-left">{leftOverlay}</div>}
              {children}
              {showRightOverlay && <div className="arm-input-overlay arm-input-overlay-right">{rightOverlay}</div>}
            </>
          </StatusWrapper>
        </div>
        {!!validationErrorMessages?.length && shouldShowValidationErrorsList && (
          <ValidationErrors
            className={validationErrorsClassName}
            validationMode={globals.validationMode}
            validationErrors={validationErrorMessages}
            scrollIntoView={globals.scrollValidationErrorsIntoView}
          />
        )}
      </div>
    </>
  );
};

InputWrapper.displayName = 'InputWrapper';
