import React from 'react';
import { IUseModalLayerPromiseComponentProps } from '../modal/modal.hooks';
import { IDialogProps } from '.';
export declare type UseDialogDialogProps = Omit<IDialogProps, 'isOpen' | 'onOpenChange'>;
/** Add a dialog to the modal layer with a promise that can be resolved from inside the dialog */
export declare const useDialog: <T, TArg = unknown>(Children: React.FC<IUseModalLayerPromiseComponentProps<T, TArg>>, props?: UseDialogDialogProps | undefined) => import("../modal/modal.hooks").UseModalLayerPromiseReturn<T, TArg>;
export interface IUseConfirmationDialogConfig {
    /** The content of the confirmation dialog, usually a message like "are you sure?" */
    content?: React.ReactNode;
    /** The text content of the buttons */
    buttons?: {
        yes?: string;
        no?: string;
    };
}
/** Render a confirmation dialog and resolve with a boolean representing the users selection (see useDialog) */
export declare const useConfirmationDialog: (config?: IUseConfirmationDialogConfig, props?: UseDialogDialogProps | undefined) => import("../modal/modal.hooks").UseModalLayerPromiseReturn<boolean, unknown>;
