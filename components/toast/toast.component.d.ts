import * as React from 'react';
import type { IToast, ToastPosition } from './toast.context';
export interface IToastProps extends IToast {
    /** where to position the toast, defaults to "bottom-right" */
    position: ToastPosition;
    /** the icon to use for the dialog close button */
    closeButtonIcon: JSX.Element | false;
}
export declare const Toast: React.FC<IToastProps>;
