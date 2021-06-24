import * as React from 'react';

import { useEventListener, useModalLayerElement } from '../..';
import { ClassNames } from '../../utils/classNames';
import { Globals } from '../../utils/globals';
import { IPortalProps, Portal } from '../portal';

export interface IModalProps
  extends Pick<IPortalProps, 'portalToSelector' | 'portalTo'>,
    Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
  /** (boolean) should the dropdown be rendered */
  isOpen: boolean;

  /** (boolean) fired when the user attempts to close the modal by clicking outside of it (or other behaviors depending on the values of other props) */
  onOpenChange?: (open: boolean) => void;

  /** (boolean) the modal will close if the user blurs the window */
  closeOnWindowBlur?: boolean;

  /** (boolean) the modal will close if the user clicks outside of the arm-modal element
   * uses a window click with a stop prop on the modal element, will close all modals with this, not just the last one
   * use closeOnBackgroundClick to ensure that this will only happen when clicking on the
   */
  closeOnWindowClick?: boolean;

  /** (boolean) the modal will close if the user clicks on the div rendered as its background */
  closeOnBackgroundClick?: boolean;

  /** ((event: MouseEvent) => void) fired when the user clicks on the wrapper */
  onClickWrapper?: (event: React.MouseEvent<HTMLDivElement>) => void;

  /** (string) the className of the wrapper */
  wrapperClassName?: string;

  /** (boolean) if true, will stop the modal from being closable */
  disableClose?: boolean;

  /** (boolean) should darken the background */
  darkenBackground?: boolean;
}

/**
 * A component which will portal its children into a div on top of all existing DOM, with handlers to close it if the user clicks outside of that area.
 * By default, if inside a ModalProvider, it will portal into an element rendered by that, but that can be overridden by providing portalTo or portalToSelector
 */

export const Modal = React.forwardRef<HTMLDivElement, IModalProps>(
  (
    {
      portalToSelector,
      portalTo,
      isOpen,
      onOpenChange,
      closeOnWindowBlur,
      className,
      onClickWrapper,
      closeOnWindowClick,
      darkenBackground,
      onClick,
      children,
      closeOnBackgroundClick,
      wrapperClassName,
      disableClose,
      ...nativeProps
    },
    ref
  ) => {
    const close = React.useCallback(() => {
      if (!disableClose) {
        onOpenChange?.(false);
      }
    }, [onOpenChange, disableClose]);

    /** Close when the user clicks outside of the dropdown */
    const onWindowClick = React.useCallback(() => {
      if (isOpen && closeOnWindowClick) {
        close();
      }
    }, [isOpen, close, closeOnWindowClick]);

    /** Close when the user blurs the window */
    const onWindowBlur = React.useCallback(() => {
      if (isOpen && closeOnWindowBlur) {
        close();
      }
    }, [isOpen, close, closeOnWindowBlur]);

    useEventListener('click', onWindowClick, Globals.Document);
    useEventListener('blur', onWindowBlur, Globals.Window);

    /** Stop propagation when clicking on the modal, to stop modal clicks from also closing the window */
    const onClickEvent = React.useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        onClick?.(event);

        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
      },
      [onClick]
    );

    /** When the user clicks on the wrapper element, close if closeOnBackgroundClick is true */
    const onClickWrapperEvent = React.useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        onClickWrapper?.(event);

        if (closeOnBackgroundClick) {
          close();
        }
      },
      [onClickWrapper, close, closeOnBackgroundClick]
    );

    const wrapperRef = useModalLayerElement();

    if (!isOpen) {
      return null;
    }

    return (
      <Portal portalTo={(!portalToSelector && wrapperRef?.current) || portalTo} portalToSelector={portalToSelector}>
        <div
          className={ClassNames.concat('arm-modal-wrapper', wrapperClassName)}
          onClick={onClickWrapperEvent}
          data-close-on-background-click={!!closeOnBackgroundClick}
          data-darken-background={darkenBackground}
        >
          <div
            role="dialog"
            aria-modal="true"
            {...nativeProps}
            className={ClassNames.concat('arm-modal', className)}
            ref={ref}
            onClick={onClickEvent}
          >
            {children}
          </div>
        </div>
      </Portal>
    );
  }
);

Modal.defaultProps = {
  closeOnBackgroundClick: true,
};
