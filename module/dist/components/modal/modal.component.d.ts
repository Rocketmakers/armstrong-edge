import * as React from 'react';
import { IPortalProps } from '../portal';
export interface IModalProps extends Pick<IPortalProps, 'portalToSelector' | 'portalTo'>, Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    /** should the dropdown be rendered */
    isOpen: boolean;
    /** fired when the user attempts to close the modal by clicking outside of it (or other behaviors depending on the values of other props) */
    onOpenChange?: (open: boolean) => void;
    /** the modal will close if the user blurs the window */
    closeOnWindowBlur?: boolean;
    /** the modal will close if the user clicks outside of the arm-modal element
     * uses a window click with a stop prop on the modal element, will close all modals with this, not just the last one
     * use closeOnBackgroundClick to ensure that this will only happen when clicking on the
     */
    closeOnWindowClick?: boolean;
    /** the modal will close if the user clicks on the div rendered as its background */
    closeOnBackgroundClick?: boolean;
    /** fired when the user clicks on the wrapper */
    onClickWrapper?: (event: React.MouseEvent<HTMLDivElement>) => void;
    /** the className of the wrapper */
    wrapperClassName?: string;
    /** if true, will stop the modal from being closable */
    disableClose?: boolean;
    /** should darken the background */
    darkenBackground?: boolean;
    /** The amount of time, in ms, to set data-closing true on the dialog before it has closed */
    closeTime?: number;
}
/**
 * A component which will portal its children into a div on top of all existing DOM, with handlers to close it if the user clicks outside of that area.
 * By default, if inside a ModalProvider, it will portal into an element rendered by that, but that can be overridden by providing portalTo or portalToSelector
 */
export declare const Modal: React.ForwardRefExoticComponent<IModalProps & React.RefAttributes<HTMLDivElement>>;
