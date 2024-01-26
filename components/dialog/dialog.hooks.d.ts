import * as React from 'react';
import { DialogElement } from './dialog.component';
/** Hook return tuple */
export type UseDialogReturn<TData> = [React.RefObject<DialogElement<TData>>, DialogElement<TData>];
/**
 * A hook providing quick access to the utilities of an Armstrong Dialog component
 * @param forwardRef - A forwarded ref used to pass the dialog controls out of the component using this hook with `forwardRef`
 * @typedef {number} UseDialogReturn1 - A ref to assign to your Armstrong <Dialog> element
 * @typedef {number} UseDialogReturn2 - A dictionary of functions associated with the referenced Armstrong <Dialog> element
 * @typedef {[UseDialogReturn1, UseDialogReturn2]} UseDialogReturn
 * @returns {UseDialogReturn}
 */
export declare const useDialog: <TData>(forwardRef?: React.ForwardedRef<DialogElement<TData>> | undefined) => [React.RefObject<DialogElement<TData>>, Omit<DialogElement<TData>, "addOpenChangeListener">];
