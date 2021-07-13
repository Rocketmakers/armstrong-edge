import * as React from 'react';
import { IconSet, IIcon } from '../icon';
export interface IErrorMessageProps {
    /** The error to render */
    message: string;
    /** CSS className property */
    className?: string;
    /** the icon to render beside the validation message */
    icon?: IIcon<IconSet>;
}
/** Render a simple error with a message and an icon - mainly used for validation errors in form inputs */
export declare const ErrorMessage: React.ForwardRefExoticComponent<IErrorMessageProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
