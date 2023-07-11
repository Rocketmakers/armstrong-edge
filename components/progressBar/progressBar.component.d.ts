import * as React from 'react';
export interface IProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The content to display in the tooltip */
    progress?: number;
    /** Optional class name for the progress indicator element */
    indicatorClassName?: string;
}
export declare const ProgressBar: React.ForwardRefExoticComponent<IProgressBarProps & React.RefAttributes<HTMLDivElement>>;
