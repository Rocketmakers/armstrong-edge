import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { Button, IButtonProps } from '../button';
import { Dropdown } from '../dropdown/dropdown.component';
import { IconUtils } from '../icon/icons.utils';

export interface IDropdownButtonProps extends IButtonProps {
  /** the contents of the dropdown */
  dropdownContent: JSX.Element;
}

/** A button which opens a dropdown below it */
export const DropdownButton: React.FC<React.PropsWithChildren<IDropdownButtonProps>> = ({ dropdownContent, className, children, ...buttonProps }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <Dropdown
      isOpen={dropdownOpen}
      // isOpen
      onOpenChange={setDropdownOpen}
      className={ClassNames.concat('arm-dropdown-button', className)}
      dropdownContent={dropdownContent}
    >
      <Button {...buttonProps}>{children}</Button>
    </Dropdown>
  );
};

DropdownButton.defaultProps = {
  rightIcon: IconUtils.getIconDefinition('Icomoon', 'arrow-down3'),
};
