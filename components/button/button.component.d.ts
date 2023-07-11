import * as React from 'react';
import { DisplaySize } from '../../types';
type ButtonHTMLProps = Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>;
export type ButtonDisplayStyle = 'primary' | 'secondary' | 'outline' | 'blank';
export type ButtonDisplayStatus = 'normal' | 'positive' | 'negative' | 'warning' | 'info';
export interface IButtonProps extends ButtonHTMLProps {
    /** CSS className property */
    className?: string;
    /** show a spinner and disable */
    pending?: boolean;
    /** show a spinner and disable */
    pendingPosition?: 'left' | 'right';
    /** when pending is true should also disable the input */
    disableOnPending?: boolean;
    /** disable use */
    disabled?: boolean;
    /** which style variant to use */
    displayStyle?: ButtonDisplayStyle;
    /** which size variant to use */
    displaySize?: DisplaySize;
    /** which status variant to use */
    displayStatus?: ButtonDisplayStatus;
    /** icon definition for left icon, optionally uses custom JSX */
    leftOverlay?: JSX.Element;
    /** icon definition for right icon, optionally uses custom JSX */
    rightOverlay?: JSX.Element;
}
/** Renders an HTML button element with some useful additions */
export declare const Button: React.ForwardRefExoticComponent<IButtonProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLButtonElement>>;
export {};
