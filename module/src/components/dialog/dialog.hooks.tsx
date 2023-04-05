import * as React from 'react';

import { Button } from '../button';
import { IUseModalLayerPromiseComponentProps, useModalLayerPromise } from '../modal/modal.hooks';
import { Dialog, IDialogProps } from '.';

export type UseDialogDialogProps = Omit<IDialogProps, 'isOpen' | 'onOpenChange'>;

/** Add a dialog to the modal layer with a promise that can be resolved from inside the dialog */
export const useDialog = <T, TArg = unknown>(
  /** The JSX to render inside the Dialog, with the promise functions passed in as props */
  Children: React.FC<IUseModalLayerPromiseComponentProps<T, TArg>>,
  /** The props to give to the actual Modal component */
  props?: UseDialogDialogProps
) => useModalLayerPromise(Children, internalProps => <Dialog {...internalProps} {...props} />);

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
export const useConfirmationDialog = (config: IUseConfirmationDialogConfig = {}, props?: UseDialogDialogProps) => {
  return useDialog<boolean>(
    ({ resolve }) => (
      <>
        {!config.content || typeof config.content === 'string' ? (
          <p>{config.content || 'Are you sure?'}</p>
        ) : (
          config.content
        )}
        <div className="arm-confirmation-dialog-buttons">
          <Button type="button" className="arm-confirmation-dialog-no-button" onClick={() => resolve(false)}>
            {config.buttons?.no || 'No'}
          </Button>
          <Button type="button" className="arm-confirmation-dialog-yes-button" onClick={() => resolve(true)}>
            {config.buttons?.yes || 'Yes'}
          </Button>
        </div>
      </>
    ),
    props
  );
};
