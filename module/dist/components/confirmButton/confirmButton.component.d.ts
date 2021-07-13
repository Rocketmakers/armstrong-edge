import * as React from 'react';
import { IButtonProps } from '../button';
import { IUseConfirmationDialogConfig, UseDialogDialogProps } from '../dialog';
export interface IConfirmButtonProps extends IButtonProps {
    confirmationDialogConfig?: IUseConfirmationDialogConfig;
    dialogProps?: UseDialogDialogProps;
}
/** A button which shows a confirmation dialog before running the given onClick prop */
export declare const ConfirmButton: React.FC<IConfirmButtonProps>;
