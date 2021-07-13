import * as React from 'react';
import { IToastNotification } from './toast.types';
export interface IToastNotificationProps extends Omit<IToastNotification, 'timestamp'>, Required<Pick<IToastNotification, 'timestamp'>> {
}
/** Render a single toast notification with a title and some given information */
export declare const ToastNotification: React.FC<IToastNotificationProps>;
export interface IToastNotificationContainerProps {
    /** the toasts to render inside this component */
    toasts?: IToastNotificationProps[];
}
/** A container which will render toasts passed in through props or toasts available from the ToastContext dispatched from useToastDispatch */
export declare const ToastNotificationContainer: React.FC<IToastNotificationContainerProps>;
