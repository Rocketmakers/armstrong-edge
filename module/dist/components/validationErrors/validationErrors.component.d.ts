import * as React from 'react';
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
export declare const ValidationErrors: React.ForwardRefExoticComponent<IValidationErrorsProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
