import * as React from 'react';
import { IModalProps } from '..';
export interface ISideMenuProps extends Omit<IModalProps, 'darkenBackground'> {
    side?: 'left' | 'right';
}
/** Extends the Modal component (see docs for modal) with some extra features and styling to work as a slide in sidebar */
export declare const SideMenu: React.FC<ISideMenuProps>;
