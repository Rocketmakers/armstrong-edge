import * as React from 'react';

import { DialogElement } from './dialog.component';

/** Error to throw if a dialog function is called but the ref is falsy */
const emptyRefError =
  "Dialog function called on an invalid dialog, are you sure you've added the ref to the Armstrong <Dialog> component?";

/**
 * Returns a hydrated DialogElement so that the functions can always be defined regardless of the ref status.
 * - The functions inside the returned DialogElement object simply attempt to call their corresponding functions on the passed in "real" dialog element and throw if they can't.
 * @param elementRef A ref to the "real" dialog element.
 * @returns A hydrated DialogElement which calls the functions on the real thing
 */
function getEmptyRefElement<TData>(elementRef: React.RefObject<DialogElement<TData>>): DialogElement<TData> {
  return {
    open: () => {
      if (!elementRef.current) {
        throw new Error(emptyRefError);
      }
      return elementRef.current.open();
    },
    cancel: () => {
      if (!elementRef.current) {
        throw new Error(emptyRefError);
      }
      return elementRef.current.cancel();
    },
    close: () => {
      if (!elementRef.current) {
        throw new Error(emptyRefError);
      }
      return elementRef.current.close();
    },
    ok: () => {
      if (!elementRef.current) {
        throw new Error(emptyRefError);
      }
      return elementRef.current.ok();
    },
  };
}

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
export const useDialog = <TData>(
  forwardRef?: React.ForwardedRef<DialogElement<TData>>
): [React.RefObject<DialogElement<TData>>, DialogElement<TData>] => {
  const dialogRef = React.useRef<DialogElement<TData>>(null);
  React.useImperativeHandle(forwardRef, () => dialogRef.current as DialogElement<TData>);
  return [dialogRef, getEmptyRefElement<TData>(dialogRef)];
};
