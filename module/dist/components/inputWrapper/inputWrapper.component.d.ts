import * as React from 'react';
import { FormValidationMode } from '../../hooks/form';
import { IconSet, IIcon } from '../icon';
import { IIconWrapperProps } from '../iconWrapper';
import { IStatusWrapperProps } from '../statusWrapper/statusWrapper.component';
export interface IInputWrapperProps extends IIconWrapperProps<IconSet, IconSet>, IStatusWrapperProps {
    /** CSS className property */
    className?: string;
    /** text to overlay to the left of the input */
    leftOverlay?: React.ReactNode;
    /** text to overlay to the right of the input */
    rightOverlay?: React.ReactNode;
    /** array of validation errors to render */
    validationErrorMessages?: string[];
    /** how to render the validation errors */
    validationMode?: FormValidationMode;
    /** the icon to use for validation errors */
    errorIcon?: IIcon<IconSet>;
    /** disable use */
    disabled?: boolean;
    /** hide the icon on the given side if there is an active status - defaults to true */
    hideIconOnStatus?: boolean;
    /** content to render above the actual input */
    above?: JSX.Element;
    /** content to render below the actual input */
    below?: JSX.Element;
    /** fired when the user clicks on the div */
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    /** when pending is true should also disable the input */
    disableOnPending?: boolean;
    /** will scroll the validation errors into view when the length of validationErrors changes */
    scrollValidationErrorsIntoView?: boolean;
}
/** Wrapper for individual input elements, allowing them to be styled consistently] */
export declare const InputWrapper: React.ForwardRefExoticComponent<IInputWrapperProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
