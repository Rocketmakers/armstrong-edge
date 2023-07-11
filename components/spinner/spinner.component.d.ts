import * as React from 'react';
export interface ISpinnerProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label'> {
    /** icon definition for icon to spin in middle of div, can be overridden using children */
    icon?: JSX.Element;
    /** should the spinner wrapper fill the container, meaning the icon is centred */
    fillContainer?: boolean;
    /** text to render below the spinner */
    label?: React.ReactNode;
}
/** Renders a spinner centred in the div that's being wrapped */
export declare const Spinner: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<ISpinnerProps>, "ref"> & React.RefAttributes<HTMLDivElement>>;
