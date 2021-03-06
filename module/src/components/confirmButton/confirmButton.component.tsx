import * as React from 'react';

import { Button, IButtonProps } from '../button';
import { IUseConfirmationDialogConfig, useConfirmationDialog, UseDialogDialogProps } from '../dialog';

export interface IConfirmButtonProps extends IButtonProps {
  /** copy to show in the confirmation dialog */
  confirmationDialogConfig?: IUseConfirmationDialogConfig;

  /** props to be passed to the confirmation dialog */
  dialogProps?: UseDialogDialogProps;
}

/** A button which shows a confirmation dialog before running the given onClick prop */
export const ConfirmButton = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<IConfirmButtonProps>>(
  ({ confirmationDialogConfig, dialogProps, onClick, children, ...buttonProps }, ref) => {
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
      <Button ref={ref} {...buttonProps} onClick={onClickEvent}>
        {children}
      </Button>
    );
  }
);
