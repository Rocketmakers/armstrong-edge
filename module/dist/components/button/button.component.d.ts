import * as React from 'react';
import { IconSet, IIcon } from '../icon';
import { IIconWrapperProps } from '../iconWrapper';
import { IStatusWrapperProps } from '../statusWrapper/statusWrapper.component';
export interface IButtonProps extends IIconWrapperProps<IconSet, IconSet>, Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>, IStatusWrapperProps {
    /** CSS className property */
    className?: string;
    /** array of validation errors to render */
    validationErrorMessages?: string[];
    /** the icon to use for validation errors */
    errorIcon?: IIcon<IconSet>;
    /** show a spinner and disable */
    pending?: boolean;
    /** hide the icon on the same side as the status if there is an active status - defaults to true */
    hideIconOnStatus?: boolean;
    /** disable use */
    disabled?: boolean;
    /** don't style beyond removing the default css styling */
    minimalStyle?: boolean;
}
/** Renders an HTML button element with some useful additions */
export declare const Button: React.ForwardRefExoticComponent<IButtonProps & React.RefAttributes<HTMLButtonElement>>;
