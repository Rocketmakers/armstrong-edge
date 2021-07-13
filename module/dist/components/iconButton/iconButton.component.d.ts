import * as React from 'react';
import { IButtonProps } from '../button';
import { IconSet, IIcon } from '../icon/icon.component';
export interface IIconButtonProps extends Omit<IButtonProps, 'leftIcon' | 'rightIcon' | 'hideIconOnStatus' | 'statusPosition'> {
    /** the icon to render on the button */
    icon: IIcon<IconSet>;
}
/** A button that only renders an icon without text */
export declare const IconButton: React.FunctionComponent<IIconButtonProps>;
