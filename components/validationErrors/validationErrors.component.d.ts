import * as React from 'react';
import type { ValidationMessage } from '../../form';
export interface IValidationErrorsProps {
    /**
     * The errors to render
     * Can be a string or {key, element} key is necessary for animating in new messages
     */
    validationErrors: ValidationMessage[];
    /** CSS className property */
    className?: string;
    /** will scroll the validation errors into view when the length of validationErrors changes */
    scrollIntoView?: boolean;
    /** overrides the error messaging and icon display used in the error validation display */
    validationMode?: 'icon' | 'message' | 'both';
}
/** Render an array of validation errors as error messages */
export declare const ValidationErrors: React.ForwardRefExoticComponent<IValidationErrorsProps & React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
