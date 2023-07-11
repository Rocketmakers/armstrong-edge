import * as React from 'react';
import { FormValidationMode } from '../../form';
export interface IStatusWrapperProps {
    /** which side of the button to show the spinner on - defaults to 'right' */
    statusPosition?: 'left' | 'right';
    /** show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder) */
    error?: boolean;
    /** show a spinner and disable */
    pending?: boolean;
    /** how to render the validation errors */
    validationMode?: FormValidationMode;
    /** the icon to use for validation errors */
    errorIcon?: JSX.Element;
    /** an optional CSS className for the rendered status */
    className?: string;
}
export declare const StatusWrapper: React.FC<React.PropsWithChildren<IStatusWrapperProps>>;
