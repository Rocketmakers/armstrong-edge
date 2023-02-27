import * as React from 'react';

import { useDelayedDependentSwitch, useEventListener } from '../../hooks';
import { concat } from '../../utils/classNames';
import { Document, Window } from '../../utils/globals';
import { IPortalProps, Portal } from '../portal';
import { useModalLayerElement } from './modal.context';
import { ModalUtils } from './modal.utils';

export interface IModalProps
  extends Pick<IPortalProps, 'portalToSelector' | 'portalTo'>,
    Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
  /** should the dropdown be rendered */
  isOpen: boolean;

  /** fired when the user attempts to close the modal by clicking outside of it (or other behaviors depending on the values of other props) */
  onOpenChange?: (open: boolean) => void;

  /** the modal will close if the user blurs the window */
  closeOnWindowBlur?: boolean;

  /**
   * the modal will close if the user clicks outside of the arm-modal element
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

  /** should centre the modal (adds data-centred="true" attribute) */
  centred?: boolean;

  /** Run whenever the modal is closed internally - can also return a boolean to tell the modal whether to close, and can be async (i.e. if you want to make a request or pop up another dialog before closing this one) */
  onClose?: () => void | boolean | Promise<boolean>;
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

export const Modal = React.forwardRef<HTMLDivElement, React.PropsWithChildren<IModalProps>>(
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
      centred,
      onMouseDown,
      onClose,
      ...nativeProps
    },
    ref
  ) => {
    const wrapperRef = useModalLayerElement();

    const internalRef = React.useRef<HTMLDivElement>(null);
    React.useImperativeHandle(ref, () => internalRef.current!);

    const close = React.useCallback(
      () => ModalUtils.closeModal({ disableClose, onClose, onOpenChange }),
      [onOpenChange, disableClose, onClose]
    );

    /** ensure that clicks initiated inside the modal don't count as clicks on the wrapper if they end outside it (i.e. if a user drags the mouse from inside the modal to the background, it'll still count as a click on that background) */
    const [mouseDownIsInsideModal, setMouseDownIsInsideModal] = React.useState(false);
    const onMouseDownModal = React.useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        onMouseDown?.(event);
        setMouseDownIsInsideModal(true);
      },
      [onMouseDown]
    );

    /** Close when the user clicks outside of the dropdown */
    const onWindowClick = React.useCallback(() => {
      if (isOpen && closeOnWindowClick && !mouseDownIsInsideModal) {
        void close();
      }
      setMouseDownIsInsideModal(false);
    }, [isOpen, close, closeOnWindowClick, mouseDownIsInsideModal]);

    useEventListener('click', onWindowClick, Document);

    /** Close when the user blurs the window */
    const onWindowBlur = React.useCallback(() => {
      if (isOpen && closeOnWindowBlur) {
        void close();
      }
    }, [isOpen, close, closeOnWindowBlur]);

    useEventListener('blur', onWindowBlur, Window);

    /** When the user clicks on the wrapper element, close if closeOnBackgroundClick is true */
    const onClickWrapperEvent = React.useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        onClickWrapper?.(event);

        if (closeOnBackgroundClick && !mouseDownIsInsideModal) {
          void close();
        }
      },
      [onClickWrapper, close, closeOnBackgroundClick, mouseDownIsInsideModal]
    );

    /** Have a piece of isClosing state that depends on isOpen */
    const [delayedIsOpen, isClosing] = useDelayedDependentSwitch(isOpen, closeTime!);

    /** render nothing if the modal is closed and isn't currently closing */
    if (!delayedIsOpen && !isClosing) {
      return null;
    }

    return (
      <Portal portalTo={portalTo || (!portalToSelector && wrapperRef) || undefined} portalToSelector={portalToSelector}>
        <div
          className={concat('arm-modal-wrapper', wrapperClassName)}
          onClick={onClickWrapperEvent}
          data-close-on-background-click={!!closeOnBackgroundClick}
          data-darken-background={darkenBackground}
          data-is-closing={isClosing}
          aria-hidden={isClosing}
          tabIndex={isClosing ? -1 : undefined}
          data-centred={centred}
        >
          <div
            role="dialog"
            aria-modal="true"
            {...nativeProps}
            className={concat('arm-modal', className)}
            ref={internalRef}
            onMouseDown={onMouseDownModal}
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
  closeTime: 300,
  centred: true,
};
