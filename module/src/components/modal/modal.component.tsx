import * as React from 'react';

import { useDelayedDependentSwitch, useEventListener } from '../../hooks';
import { ClassNames, DOM, Globals } from '../../utils';
import { IPortalProps, Portal } from '../portal';
import { useModalLayerElement } from './modal.context';

export interface IModalProps
  extends Pick<IPortalProps, 'portalToSelector' | 'portalTo'>,
    Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
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

  /** The amount of time, in ms, to set data-closing true on the dialog before it has closed - can be used to animate out the modal */
  closeTime?: number;
}

/**
 * A component which will portal its children into a div on top of all existing DOM, with handlers to close it if the user clicks outside of that area.
 *
 * By default, if inside a ModalProvider, it will portal into an element rendered by that, but that can be overridden by providing portalTo or portalToSelector
 *
 * To improve accessibility, you should manage the users focus yourself. Ensure that when a modal is open, everything else has aria-hidden="true", that
 * focus is moved to the first element in the modal, and that focus is moved back when the modal closes
 *
 * see: https://www.w3.org/WAI/GL/wiki/Using_ARIA_role%3Ddialog_to_implement_a_modal_dialog_box
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
      children,
      closeOnBackgroundClick,
      wrapperClassName,
      disableClose,
      closeTime,
      ...nativeProps
    },
    ref
  ) => {
    const internalRef = React.useRef<HTMLDivElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!);

    const close = React.useCallback(() => {
      if (!disableClose) {
        onOpenChange?.(false);
      }
    }, [onOpenChange, disableClose]);

    /** Close when the user clicks outside of the dropdown */
    const onWindowClick = React.useCallback(
      (event: React.MouseEvent<HTMLElement>) => {
        if (isOpen && closeOnWindowClick && (!internalRef.current || !DOM.clickIsInsideElement(internalRef.current, event))) {
          close();
        }
      },
      [isOpen, close, closeOnWindowClick]
    );

    /** Close when the user blurs the window */
    const onWindowBlur = React.useCallback(() => {
      if (isOpen && closeOnWindowBlur) {
        close();
      }
    }, [isOpen, close, closeOnWindowBlur]);

    useEventListener('click', onWindowClick, Globals.Document);
    useEventListener('blur', onWindowBlur, Globals.Window);

    /** When the user clicks on the wrapper element, close if closeOnBackgroundClick is true */
    const onClickWrapperEvent = React.useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        onClickWrapper?.(event);

        if (closeOnBackgroundClick && (!internalRef.current || !DOM.clickIsInsideElement(internalRef.current, event))) {
          close();
        }
      },
      [onClickWrapper, close, closeOnBackgroundClick]
    );

    const wrapperRef = useModalLayerElement();

    /** Have a piece of isClosing state that depends on isOpen */
    const [delayedIsOpen, isClosing] = useDelayedDependentSwitch(isOpen, closeTime!);

    if (!delayedIsOpen && !isClosing) {
      return null;
    }

    return (
      <Portal portalTo={portalTo || (!portalToSelector && wrapperRef) || undefined} portalToSelector={portalToSelector}>
        <div
          className={ClassNames.concat('arm-modal-wrapper', wrapperClassName)}
          onMouseDown={onClickWrapperEvent}
          data-close-on-background-click={!!closeOnBackgroundClick}
          data-darken-background={darkenBackground}
          data-is-closing={isClosing}
          aria-hidden={isClosing}
          tabIndex={isClosing ? -1 : undefined}
        >
          <div role="dialog" aria-modal="true" {...nativeProps} className={ClassNames.concat('arm-modal', className)} ref={internalRef}>
            {children}
          </div>
        </div>
      </Portal>
    );
  }
);

Modal.defaultProps = {
  closeOnBackgroundClick: true,
  closeTime: 300,
};
