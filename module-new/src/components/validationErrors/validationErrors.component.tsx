import * as React from 'react';

import type { ValidationMessage } from '../../hooks/form';
import { concat } from '../../utils/classNames';
import { useArmstrongConfig } from '../config';

import './validationErrors.theme.css';

export interface IValidationErrorsProps {
  /** The errors to render */
  /** Can be a string or {key, element} key is necessary for animating in new messages   */
  validationErrors: ValidationMessage[];

  /** CSS className property */
  className?: string;

  /** will scroll the validation errors into view when the length of validationErrors changes */
  scrollIntoView?: boolean;

  /** overrides the error messaging and icon display used in the error validation display */
  validationMode?: 'icon' | 'message' | 'both';
}

/** Render an array of validation errors as error messages */
export const ValidationErrors = React.forwardRef<HTMLDivElement, React.PropsWithChildren<IValidationErrorsProps>>(
  ({ validationErrors, className, scrollIntoView, validationMode }, ref) => {
    const globals = useArmstrongConfig({
      validationMode,
      scrollValidationErrorsIntoView: scrollIntoView,
    });

    const internalRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current as HTMLInputElement, [internalRef]);

    React.useEffect(() => {
      if (validationErrors.length > 0 && globals.scrollValidationErrorsIntoView) {
        internalRef.current?.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      }
    }, [validationErrors.length, globals.scrollValidationErrorsIntoView]);

    /** If the error is a JSX element use the key on the element or the index */
    const getKey = React.useCallback((error: ValidationMessage, index: number) => {
      if (typeof error === 'string') {
        return error + index;
      }
      return error?.key ?? index;
    }, []);

    const shouldShowErrorMessage = globals.validationMode === 'both' || globals.validationMode === 'message';

    return (
      <div ref={internalRef} className={concat('arm-validation-errors', className)}>
        {validationErrors.map((error, i) => (
          <div className="arm-validation-error-message" key={getKey(error, i)}>
            {shouldShowErrorMessage && <span>{error}</span>}
          </div>
        ))}
      </div>
    );
  }
);

ValidationErrors.displayName = 'ValidationErrors';
