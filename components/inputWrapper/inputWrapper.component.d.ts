import * as React from 'react';
import { ValidationMessage } from '../../form';
import { DisplaySize } from '../../types';
import { IStatusWrapperProps } from '../statusWrapper/statusWrapper.component';
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
export declare const InputWrapper: React.ForwardRefExoticComponent<IInputWrapperProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
