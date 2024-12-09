import * as React from 'react';

import { DialogElement } from './dialog.component';

/** Error to throw if a dialog function is called but the ref is falsy */
const emptyRefError = new Error(
  "Dialog function called on an invalid dialog, are you sure you've added the ref to the Armstrong <Dialog> component?"
);

/** Hook return tuple */
export type UseDialogReturn<TData> = [React.RefObject<DialogElement<TData> | null>, DialogElement<TData>];

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
): [React.RefObject<DialogElement<TData> | null>, Omit<DialogElement<TData>, 'addOpenChangeListener'>] => {
  const dialogRef = React.useRef<DialogElement<TData>>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  React.useImperativeHandle(forwardRef, () => dialogRef.current as DialogElement<TData>);

  /** These dialog actions are locked down to independent callbacks to avoid unwanted dependency mutation */
  const open = React.useCallback(() => {
    if (!dialogRef.current) {
      throw emptyRefError;
    }
    return dialogRef.current.open();
  }, []);

  const cancel = React.useCallback(() => {
    if (!dialogRef.current) {
      throw emptyRefError;
    }
    return dialogRef.current.cancel();
  }, []);

  const close = React.useCallback(() => {
    if (!dialogRef.current) {
      throw emptyRefError;
    }
    return dialogRef.current.close();
  }, []);

  const ok = React.useCallback(() => {
    if (!dialogRef.current) {
      throw emptyRefError;
    }
    return dialogRef.current.ok();
  }, []);

  React.useEffect(() => {
    if (dialogRef.current) {
      return dialogRef.current.addOpenChangeListener(setIsOpen);
    }
    return undefined;
  }, []);

  return [dialogRef, { open, cancel, close, ok, isOpen }];
};
