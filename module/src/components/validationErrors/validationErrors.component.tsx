import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { ErrorMessage } from '../errorMessage';
import { IconSet, IIcon } from '../icon';

export interface IValidationErrorsProps {
  /** (string[]) The errors to render */
  validationErrors: string[];

  /** (string) CSS className property */
  className?: string;

  /** (IIcon) the icon to render beside the validation message */
  icon?: IIcon<IconSet>;
}

/** Render an array of validation errors as error messages */
export const ValidationErrors = React.forwardRef<HTMLDivElement, React.PropsWithChildren<IValidationErrorsProps>>(
  ({ validationErrors, className, icon }, ref) => {
    return (
      <div ref={ref} className={ClassNames.concat('arm-validation-errors', className)}>
        {validationErrors.map((error, index) => (
          <ErrorMessage message={error} key={error + index} icon={icon} />
        ))}
      </div>
    );
  }
);
