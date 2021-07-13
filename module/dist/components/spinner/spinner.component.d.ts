import * as React from 'react';
import { IconSet, IIcon } from '../icon';
export interface ISpinnerProps extends React.HTMLProps<HTMLDivElement> {
    /** icon definition for icon to spin in middle of div, can be overriden using children */
    icon?: IIcon<IconSet>;
    /** should the spinner wrapper fill the container, meaning the icon is centred */
    fillContainer?: boolean;
    /** text to render below the spinner */
    label?: string;
}
/** Renders a spinner centred in the div that's being wrapped */
export declare const Spinner: React.FunctionComponent<ISpinnerProps>;
