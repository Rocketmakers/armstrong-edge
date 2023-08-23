import * as React from 'react';
import { ArmstrongFCExtensions, ArmstrongFCProps, ArmstrongFCReturn } from '../../types';
/** Dialog component props */
export interface IDialogProps<TData = unknown> extends Omit<React.RefAttributes<HTMLDivElement>, 'ref'> {
    /** Optional title to show at the top of the dialog in an H2 tag */
    title?: React.ReactNode;
    /** Optional description to show in the body of the dialog in a P tag */
    description?: React.ReactNode;
    /** Icon to use as the close button. Send `false` to hide the close button entirely */
    closeButtonIcon?: JSX.Element | false;
    /** Bool denoting whether the dialog is open or closed - for state controlled dialogs */
    open?: boolean;
    /** Function called when the dialog is opened/closed - for state controlled dialogs */
    onOpenChange?: (open: boolean) => void;
    /** Optional CSS class for the dialog component */
    className?: string;
    /** Optional CSS class for the dialog overlay */
    overlayClassName?: string;
    /** Optional Data to pass into the dialog. Data will be returned from the async dialog functions allowing for reusable form based dialogs */
    data?: TData;
    /** Function called when the dialog is closed. Don't use for state control, only for side effects. `onOpenChange` should be used for state control */
    onClose?: () => void;
    /** Optional test ID for the dialog */
    testId?: string;
    /** Optional time to delay closing for in MS (allows for CSS animations to complete, animate using the [data-visible] attribute) */
    delayCloseFor?: number;
}
/** String union describing the various actions that can be used to close a dialog */
export type DialogFinishAction = keyof Omit<DialogElement<unknown>, 'open'>;
/** The response type of the promise returned by the dialog `open` function  */
export interface IDialogOpenResponse<TData = unknown> {
    /** The action that caused the dialog to close */
    action: DialogFinishAction;
    /** Any data sent into the dialog `data` prop */
    data?: TData;
}
/** Dialog element toolkit - these functions are assigned to the ref passed into the dialog */
export interface DialogElement<TData = unknown> {
    /** Opens the dialog and returns a promise which resolves when the dialog closes */
    open: () => Promise<IDialogOpenResponse<TData>>;
    /** Closes the dialog with a "close" finish action */
    close: () => void;
    /** Closes the dialog with an "ok" finish action */
    ok: () => void;
    /** Closes the dialog with a "cancel" finish action */
    cancel: () => void;
}
/**
 * Dialog component. Used to display a full-screen modal dialog to the user.
 * - Can be state controlled with `open` and `onOpenChange` props.
 * - Can be async by assigning a ref and calling the utility functions (a `useDialog` helper hook is available for this.)
 * - Supports dynamic data in async mode, so that a form can be built as a reusable async dialog.
 */
export declare const Dialog: (<TData>(props: ArmstrongFCProps<IDialogProps<TData>, DialogElement<TData>>) => ArmstrongFCReturn) & ArmstrongFCExtensions<IDialogProps<unknown>>;
