import * as React from 'react';
import { IconSet, IIcon } from '../icon';
export interface IStatusProps {
    /** show a spinner */
    pending?: boolean;
    /** show an error state  */
    error?: boolean;
    /** the icon to use for the error */
    errorIcon?: IIcon<IconSet>;
    /** the icon to use for the spinner */
    spinnerIcon?: IIcon<IconSet>;
}
/** Render a status icon which can either be pending or errored */
export declare const Status: React.FunctionComponent<IStatusProps>;
