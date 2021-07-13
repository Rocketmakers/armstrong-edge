import * as React from 'react';
import { IButtonProps } from '../button';
export interface IDropdownButtonProps extends IButtonProps {
    /** the contents of the dropdown */
    dropdownContent: JSX.Element;
}
/** A button which opens a dropdown below it */
export declare const DropdownButton: React.FC<IDropdownButtonProps>;
