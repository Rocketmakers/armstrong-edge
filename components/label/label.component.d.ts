import * as React from 'react';
import { LabelHTMLAttributes } from 'react';
import { DisplaySize } from '../../types';
export interface ILabelProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'ref'> {
    /** Should the label show a required indicator? */
    required?: boolean;
    /** Symbol to use as the required indicator, defaults to "*" */
    requiredIndicator?: React.ReactNode;
    /** which size variant to use */
    displaySize?: DisplaySize;
}
/** Render a status icon which can either be pending or errored */
export declare const Label: React.ForwardRefExoticComponent<ILabelProps & React.RefAttributes<HTMLLabelElement>>;
