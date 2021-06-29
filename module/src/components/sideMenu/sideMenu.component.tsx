import * as React from 'react';

import { ClassNames } from '../../utils';
import { IModalProps } from '..';
import { Modal } from '../modal';

export interface ISideMenuProps extends Omit<IModalProps, 'darkenBackground'> {
  side?: 'left' | 'right';
}

/** Extends the Modal component (see docs for modal) with some extra features and styling to work as a slide in sidebar */
export const SideMenu: React.FC<ISideMenuProps> = ({ className, children, side, ...modalProps }) => {
  return (
    <Modal data-side={side} className={ClassNames.concat('arm-side-menu', className)} {...modalProps} darkenBackground>
      {children}
    </Modal>
  );
};

SideMenu.defaultProps = {
  side: 'left',
};
