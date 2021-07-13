import * as React from 'react';
import { IPortalProps } from '../portal';
import { IProgressBarProps } from '../progressBar/progressBar.component';
export declare type GlobalProgressBarPosition = 'top' | 'bottom' | 'left' | 'right';
export interface IGlobalProgressBarProps extends IProgressBarProps, IPortalProps {
    /** which side of the screen should the progress bar be rendered on */
    position?: GlobalProgressBarPosition;
    /** should hide off edge of screen */
    hidden?: boolean;
}
/** A ProgressBar which is portaled into a fixed position on the edge of the screen */
export declare const FixedProgressBar: React.FC<IGlobalProgressBarProps>;
