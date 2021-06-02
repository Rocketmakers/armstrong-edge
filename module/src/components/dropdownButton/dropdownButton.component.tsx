import * as React from 'react';

import { ClassNames } from '../../utils/classNames';
import { Button, IButtonProps } from '../button';
import { Dropdown } from '../dropdown/dropdown.component';

export interface IDropdownButtonProps extends IButtonProps {
  /** (JSX) the contents of the dropdown */
  dropdownContent: JSX.Element;
}

export const DropdownButton: React.FC<IDropdownButtonProps> = ({ dropdownContent, className, children, ...buttonProps }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <Dropdown
      isOpen={dropdownOpen}
      onOpenChange={setDropdownOpen}
      className={ClassNames.concat('arm-dropdown-button', className)}
      dropdownContent={dropdownContent}
    >
      <Button {...buttonProps}>{children}</Button>
    </Dropdown>
  );
};
