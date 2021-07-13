import * as React from 'react';
import { IconSet, IIcon } from '../icon';
import { IModalProps } from '../modal';
export interface IDialogProps extends Omit<IModalProps, 'darkenBackground'> {
    /** the value to render as the title, will have necessary aria tag added */
    title?: string;
    /** the icon to render by the title */
    titleIcon?: IIcon<IconSet>;
    /** the icon to render as the close button */
    closeButtonIcon?: IIcon<IconSet>;
}
/** Extends the Modal component (see docs for modal) with some extra features and styling for simple dialog popups */
export declare const Dialog: React.ForwardRefExoticComponent<IDialogProps & React.RefAttributes<HTMLDivElement>>;
