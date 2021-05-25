import * as React from 'react';

import { FormValidationMode } from '../../hooks/form';
import { ClassNames } from '../../utils/classNames';
import { Icon, IconSet, IconUtils, IIcon } from '../icon';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';
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
}

/** Wraps up an input to allow them to be styled consistently */

export const InputWrapper = React.forwardRef<HTMLDivElement, React.PropsWithChildren<IInputWrapperProps>>(
  ({ className, children, leftIcon, rightIcon, leftOverlay, rightOverlay, validationMode, validationErrorMessages, validationErrorIcon }, ref) => {
    const shouldShowValidationErrorsList = React.useMemo(() => validationMode === 'both' || validationMode === 'message', [validationMode]);
    const shouldShowValidationErorrsIcon = React.useMemo(() => validationMode === 'both' || validationMode === 'icon', [validationMode]);

    return (
      <>
        <div
          ref={ref}
          className={ClassNames.concat('arm-input', className)}
          data-arm-input-pad-left={!!leftIcon || !!leftOverlay}
          data-arm-input-pad-right={(validationErrorMessages?.length && shouldShowValidationErorrsIcon) || !!rightIcon || !!rightOverlay}
        >
          <IconWrapper leftIcon={leftIcon} rightIcon={rightIcon}>
            {leftOverlay && (
              <div className="arm-input-overlay arm-input-overlay-left">{typeof leftOverlay === 'string' ? <p>{leftOverlay}</p> : leftOverlay}</div>
            )}
            {children}
            {rightOverlay && (
              <div className="arm-input-overlay arm-input-overlay-right">
                {typeof rightOverlay === 'string' ? <p>{rightOverlay}</p> : rightOverlay}
              </div>
            )}
            {!!validationErrorMessages?.length && shouldShowValidationErorrsIcon && validationErrorIcon && (
              <Icon className="arm-input-validation-error-icon" iconSet={validationErrorIcon.iconSet} icon={validationErrorIcon.icon} />
            )}
          </IconWrapper>
        </div>

        {!!validationErrorMessages?.length && shouldShowValidationErrorsList && <ValidationErrors validationErrors={validationErrorMessages} />}
      </>
    );
  }
);

InputWrapper.defaultProps = {
  validationMode: 'both',
  validationErrorIcon: IconUtils.getIconDefinition('Icomoon', 'warning'),
};
