import * as React from 'react';
import { Colors } from '../..';
export declare type ProgressBarLabelVariant = 'centre' | 'centre-progress';
export declare type ProgressBarDirection = 'left' | 'right' | 'down' | 'up';
export interface IProgressBarProps extends React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement> {
    /** the progress of the bar from 0 to 100 */
    progress: number;
    /** the direction for the loading to increase */
    direction?: ProgressBarDirection;
    /** the text to optionally display as a label */
    labelText?: string;
    /** the position to show the label - defaults to centre, must be used with labelText */
    labelVariant?: ProgressBarLabelVariant;
    /** breakpoints for the color to make the progress bar based on the progress in an array, given either as hex strings */
    colorBreakpoints?: Colors.Color[];
    /** color when the progress has hit 100 */
    completeColor?: string;
}
/** Show a progress bar using a progress property */
export declare const ProgressBar: React.FC<IProgressBarProps>;
