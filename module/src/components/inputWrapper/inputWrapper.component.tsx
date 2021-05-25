import * as React from 'react';

import { ClassUtils } from '../../utils/classNames';
import { IconSet } from '../icon';
import { IconWrapper, IIconWrapperProps } from '../iconWrapper';

export interface IInputWrapperProps extends IIconWrapperProps<IconSet, IconSet> {
  /** (string) CSS className property */
  className?: string;

  /** (JSX | string) text to overlay to the left of the input */
  leftOverlay?: React.ReactNode;

  /** (JSX | string) text to overlay to the right of the input */
  rightOverlay?: React.ReactNode;

  /** (IValidationError[]) array of validation errors to render */
}

/** Wraps up an input to allow them to be styled consistently */

export const InputWrapper = React.forwardRef<HTMLDivElement, React.PropsWithChildren<IInputWrapperProps>>(
  ({ className, children, leftIcon, rightIcon, leftOverlay, rightOverlay }, ref) => {
    return (
      <div
        ref={ref}
        className={ClassUtils.concat('arm-input', className)}
        data-arm-input-pad-left={!!leftIcon || !!leftOverlay}
        data-arm-input-pad-right={!!rightIcon || !!rightOverlay}
      >
        <IconWrapper leftIcon={leftIcon} rightIcon={rightIcon}>
          {leftOverlay && (
            <div className="arm-input-overlay arm-input-overlay-left">{typeof leftOverlay === 'string' ? <p>{leftOverlay}</p> : leftOverlay}</div>
          )}
          {children}
          {rightOverlay && (
            <div className="arm-input-overlay arm-input-overlay-right">{typeof rightOverlay === 'string' ? <p>{rightOverlay}</p> : rightOverlay}</div>
          )}
        </IconWrapper>
      </div>
    );
  }
);
