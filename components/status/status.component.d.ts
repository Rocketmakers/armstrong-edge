import * as React from 'react';
export interface IStatusProps {
    /** show a spinner */
    pending?: boolean;
    /** show an error state  */
    error?: boolean;
    /** the icon to use for the error */
    errorIcon?: JSX.Element;
    /** the icon to use for the spinner */
    spinnerIcon?: JSX.Element;
    /** an optional CSS className for the rendered status */
    className?: string;
}
/** Render a status icon which can either be pending or errored */
export declare const Status: React.ForwardRefExoticComponent<IStatusProps & React.RefAttributes<HTMLDivElement>>;
