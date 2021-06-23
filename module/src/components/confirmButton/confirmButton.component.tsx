import * as React from 'react';

import { Button, IButtonProps } from '../button';
import { IUseConfirmationDialogConfig, useConfirmationDialog, UseDialogDialogProps } from '../dialog';

export interface IConfirmButtonProps extends IButtonProps {
  confirmationDialogConfig?: IUseConfirmationDialogConfig;

  dialogProps?: UseDialogDialogProps;
}

/** A button which shows a confirmation dialog before running the given onClick prop */
export const ConfirmButton: React.FC<IConfirmButtonProps> = ({ confirmationDialogConfig, dialogProps, onClick, children, ...buttonProps }) => {
  const [open] = useConfirmationDialog(confirmationDialogConfig, dialogProps);

  const onClickEvent = React.useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      const confirmed = await open();
      if (confirmed) {
        onClick?.(event);
      }
    },
    [onClick, open]
  );

  return (
    <Button {...buttonProps} onClick={onClickEvent}>
      {children}
    </Button>
  );
};
