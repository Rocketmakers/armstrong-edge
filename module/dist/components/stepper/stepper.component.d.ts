import * as React from 'react';
import { IconSet, IIcon } from '../..';
import { IStatusProps } from '../status';
export interface IStepperStep extends Pick<IStatusProps, 'pending' | 'error'> {
    /** the icon for this step */
    icon?: IIcon<IconSet>;
    /** the index of this step from 0 */
    index?: number;
    /** the name of this step */
    name?: string;
    /** is this step disabled - stops the onChange from firing */
    disabled?: boolean;
    /** is this step complete */
    isComplete?: boolean;
}
export interface IStepperStepProps extends IStepperStep, Pick<IStatusProps, 'spinnerIcon' | 'errorIcon'> {
    /** is this step the current step */
    isCurrent?: boolean;
    /** is this step previous to the current step */
    isPrevious?: boolean;
    /** fired when the user clicks on the stepper step */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** the icon to render if isComplete is set to true - leave blank to not change */
    completeIcon?: IIcon<IconSet>;
    /** is small (no icon or index) */
    small?: boolean;
    /** is the next one small (no icon or index) used to position the line between them */
    nextIsSmall?: boolean;
}
export declare const StepperStep: React.ForwardRefExoticComponent<IStepperStepProps & React.RefAttributes<HTMLButtonElement>>;
export interface IStepperProps extends Pick<IStepperStepProps, 'completeIcon'>, Pick<IStatusProps, 'spinnerIcon' | 'errorIcon'> {
    /** the steps to render */
    steps?: IStepperStep[];
    /** the index of the currently selected step */
    stepIndex: number;
    /** will show the index on the circle if an icon is not provided for each step */
    showIndex?: boolean;
    /** fired when the user clicks on a step, leave undefined to disable user interaction */
    onStepIndexChange?: (newStep: number) => void;
    /** the direction that the steps should flow */
    direction?: 'horizontal' | 'vertical';
}
/** R */
export declare const Stepper: React.ForwardRefExoticComponent<IStepperProps & React.RefAttributes<HTMLDivElement>>;
