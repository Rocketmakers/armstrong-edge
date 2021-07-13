import * as React from 'react';
import { IPortalProps } from '../portal';
import { IToastNotification, IToastNotificationProps } from '.';
import { IGlobalToastConfig } from './toast.types';
export declare type DispatchToast = (...toast: IToastNotificationProps[]) => void;
export declare type DismissToast = (toast: IToastNotificationProps) => void;
export interface IToastProviderProps extends Pick<IPortalProps, 'portalTo' | 'portalToSelector'>, IGlobalToastConfig {
    /** set to false to completely customise how your application uses toast notifications, you'll need to render your own toasts using useToasts  */
    renderToastContainer?: boolean;
}
/** Provides the context for Armstrong toast notifications, and by default renders a ToastContainer which will display all dispatched toasts */
export declare const ToastProvider: React.FC<IToastProviderProps>;
/** Dispatch a toast notification into the toasts state */
export declare function useDispatchToast(): (...toasts: (IToastNotification | string)[]) => void;
/** Get the array of currently active toast notifications */
export declare function useToasts(): {
    toasts: IToastNotificationProps[];
    config: IGlobalToastConfig;
    dismiss: DismissToast;
    dismissAll: () => void;
};
