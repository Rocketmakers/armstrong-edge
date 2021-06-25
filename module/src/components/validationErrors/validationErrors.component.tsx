import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { ErrorMessage } from '../errorMessage';
import { IconSet, IIcon } from '../icon';

export interface IValidationErrorsProps {
  /** The errors to render */
  validationErrors: string[];

  /** CSS className property */
  className?: string;

  /** the icon to render beside the validation message */
  icon?: IIcon<IconSet>;

  /** will scroll the validation errors into view when the length of validationErrors changes */
  scrollIntoView?: boolean;
}

/** Render an array of validation errors as error messages */
export const ValidationErrors = React.forwardRef<HTMLDivElement, React.PropsWithChildren<IValidationErrorsProps>>(
  ({ validationErrors, className, icon, scrollIntoView }, ref) => {
    const internalRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!, [internalRef]);

    React.useEffect(() => {
      if (validationErrors.length > 0 && scrollIntoView) {
        internalRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    }, [validationErrors.length]);

    return (
      <div ref={internalRef} className={ClassNames.concat('arm-validation-errors', className)}>
        {validationErrors.map((error, index) => (
          <ErrorMessage message={error} key={error + index} icon={icon} />
        ))}
      </div>
    );
  }
);
