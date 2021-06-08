import * as React from 'react';

import { useEventListener } from '../..';
import { ClassNames } from '../../utils/classNames';
import { Globals } from '../../utils/globals';
import { IPortalProps, Portal } from '../portal';

export interface IModalProps
  extends Pick<IPortalProps, 'rootElementSelector' | 'rootElement'>,
    Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
  /** (boolean) should the dropdown be rendered */
  isOpen: boolean;

  /** (boolean) fired when the user attempts to close the dropdown */
  onOpenChange: (open: boolean) => void;

  /** (boolean) the modal will close if the user blurs the window */
  closeOnWindowBlur?: boolean;

  /** (boolean) the modal will close if the user clicks outside of the arm-modal element
   * uses a window click with a stop prop on the modal element, will close all modals with this, not just the last one
   * use closeOnBackgroundClick to esure that this will only happen when clicking on the
   */
  closeOnWindowClick?: boolean;

  /** (boolean) the modal will close if the user clicks on the div rendered as its background */
  closeOnBackgroundClick?: boolean;

  /** ((event: MouseEvent) => void) fired when the user clicks on the wrapper */
  onClickWrapper?: (event: React.MouseEvent<HTMLDivElement>) => void;

  /** (string) the className of the wrapper */
  wrapperClassName?: string;
}

export const Modal = React.forwardRef<HTMLDivElement, IModalProps>(
  (
    {
      rootElementSelector,
      rootElement,
      isOpen,
      onOpenChange,
      closeOnWindowBlur,
      className,
      onClickWrapper,
      closeOnWindowClick,
      onClick,
      children,
      closeOnBackgroundClick,
      wrapperClassName,
      ...nativeProps
    },
    ref
  ) => {
    const close = React.useCallback(() => {
      onOpenChange(false);
    }, [onOpenChange]);

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

    useEventListener('click', onWindowClick, Globals.Document?.body);
    useEventListener('blur', onWindowBlur, Globals.Window);

    /** Stop propogation when clicking on the modal, to stop modal clicks from also closing the window */
    const onClickEvent = React.useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        onClick?.(event);

        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
      },
      [onClick]
    );

    const onClickWrapperEvent = React.useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        onClickWrapper?.(event);

        if (closeOnBackgroundClick) {
          onOpenChange(false);
        }
      },
      [onClick]
    );

    if (!isOpen) {
      return null;
    }

    return (
      <Portal rootElement={rootElement} rootElementSelector={rootElementSelector}>
        <div
          className={ClassNames.concat('arm-modal-wrapper', wrapperClassName)}
          onClick={onClickWrapperEvent}
          data-close-on-background-click={!!closeOnBackgroundClick}
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
