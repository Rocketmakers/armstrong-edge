import React from 'react';

import { Button } from '../button';
import { IUseModalComponentProps, useModalLayerPromise } from '../modal/modal.hooks';
import { Dialog, IDialogProps } from '.';

/** Add a dialog to the modal layer with a promise that can be resolved from inside the dialog */
export const useDialog = <T, TArg = unknown>(
  /** The JSX to render inside the Dialog, with the promise functions passed in as props */
  Children: React.FC<IUseModalComponentProps<T, TArg>>,
  /** The props to give to the actual Modal component */
  props?: Omit<IDialogProps, 'isOpen' | 'onOpenChange'>
) => useModalLayerPromise(Children, (internalProps) => <Dialog {...internalProps} {...props} />);

export interface IUseConfirmationDialogConfig {
  /** The content of the  */
  content?: React.ReactNode;
  buttons?: {
    yes?: string;
    no?: string;
  };
}

/** Render a confirmation dialog and resolve with a boolean representing the users selection (see useDialog) */
export const useConfirmationDialog = (config: IUseConfirmationDialogConfig, props?: Omit<IDialogProps, 'isOpen' | 'onOpenChange'>) => {
  return useDialog<boolean>(
    ({ resolve }) => (
      <>
        {!config.content || typeof config.content === 'string' ? <p>{'Are you sure?'}</p> : config.content}
        <div className="arm-confirmation-dialog-buttons">
          <Button onClick={() => resolve(true)}>{config.buttons?.yes || 'Yes'}</Button>
          <Button>{config.buttons?.no || 'No'}</Button>
        </div>
      </>
    ),
    props
  );
};
