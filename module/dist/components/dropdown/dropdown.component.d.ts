import * as React from 'react';
import { IPortalProps } from '../portal';
export interface IDropdownProps extends Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>, Pick<IPortalProps, 'portalToSelector' | 'portalTo'> {
    /** should the dropdown be rendered */
    isOpen: boolean;
    /** fired when the user attempts to close the dropdown */
    onOpenChange: (open: boolean) => void;
    /** rendered inside the dropdown */
    dropdownContent: JSX.Element;
    /** CSS className property */
    className?: string;
    /** CSS className for content wrapper */
    contentClassName?: string;
    /** should open when the user clicks on children */
    openWhenClickInside?: boolean;
    /** should close when the user clicks on children and the dropdown is already open */
    closeWhenClickInside?: boolean;
    /** should open when the user focuses inside children */
    openWhenFocusInside?: boolean;
    /** selector for the element to visually render the content below - by default will render below the wrapper element */
    childRootElementSelector?: string;
    /** should close if the user scrolls - replicates some browser experiences */
    closeOnScroll?: boolean;
    /** should the height be limited and scrolling be enabled - defaults to true */
    shouldScrollContent?: boolean;
}
export interface IDropdownRef {
    /** the element wrapping the children */
    rootRef: React.RefObject<HTMLDivElement | undefined>;
    /** the element wrapping the content which is filled with the dropdown children */
    modalRef: React.RefObject<HTMLDivElement | undefined>;
}
/** Extends the modal (see component modal docs) but positions the modal below the children of the component */
export declare const Dropdown: React.ForwardRefExoticComponent<IDropdownProps & {
    children?: React.ReactNode;
} & React.RefAttributes<IDropdownRef>>;
