import * as React from 'react';

import { useResizeObserver } from '../../hooks';
import { useElementContentRect } from '../../hooks/useElementContentRect';
import { useWindowSize } from '../../hooks/useWindowSize';
import { ClassNames } from '../../utils/classNames';
import { Globals } from '../../utils/globals';
import { Modal } from '../modal';
import { IPortalProps } from '../portal';

export interface IDropdownProps
  extends Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>,
    Pick<IPortalProps, 'portalToSelector' | 'portalTo'> {
  /** (boolean) should the dropdown be rendered */
  isOpen: boolean;

  /** (boolean) fired when the user attempts to close the dropdown */
  onOpenChange: (open: boolean) => void;

  /** (JSX) rendered inside the dropdown */
  dropdownContent: JSX.Element;

  /** (string) CSS className property */
  className?: string;

  /** (string) CSS className for content wrapper */
  contentClassName?: string;

  /** (boolean) should open when the user clicks on children */
  openWhenClickInside?: boolean;

  /** (boolean) should open when the user focuses inside children */
  openWhenFocusInside?: boolean;

  /** (string) selector for the element to visually render the content below - by default will render below the wrapper element */
  childRootElementSelector?: string;

  /** (boolean) should close if the user scrolls - replicates some browser experiences */
  closeOnScroll?: boolean;
}

export interface IDropdownRef {
  /** (HTMLDivElement) the element wrapping the children */
  rootRef: React.RefObject<HTMLDivElement | undefined>;

  /** (HTMLDivElement) the element wrapping the content which is filled with the dropdown children */
  modalRef: React.RefObject<HTMLDivElement | undefined>;
}

/** Extends the modal (see component modal docs) but positions the modal below the children of the component */
export const Dropdown = React.forwardRef<IDropdownRef, React.PropsWithChildren<IDropdownProps>>(
  (
    {
      isOpen,
      onOpenChange,
      children,
      portalTo,
      portalToSelector,
      dropdownContent,
      className,
      contentClassName,
      openWhenClickInside,
      openWhenFocusInside,
      onMouseDown,
      childRootElementSelector,
      closeOnScroll,
      onFocus,
      ...htmlProps
    },
    ref
  ) => {
    const rootRef = React.useRef<HTMLDivElement>(null);
    const elementToRenderBelowRef = React.useRef<Element>();
    const modalRef = React.useRef<HTMLDivElement>();

    const [rootRect, getRootRectContentRect] = useElementContentRect(elementToRenderBelowRef);
    const [modalRect] = useElementContentRect(modalRef);
    const windowSize = useWindowSize();

    useResizeObserver(getRootRectContentRect, rootRef);

    const setModalRef = React.useCallback(
      (node: HTMLDivElement) => {
        modalRef.current = node;
        getRootRectContentRect();
      },
      [getRootRectContentRect]
    );

    React.useImperativeHandle(ref, () => ({ rootRef, modalRef }), [rootRef, modalRef]);

    const top = React.useMemo(
      () =>
        rootRect &&
        modalRect &&
        Math.max(Math.min(rootRect.top + rootRect.height, (windowSize.innerHeight || 0) - modalRect.height - rootRect.height)),
      [rootRect?.top, rootRect?.height, modalRect?.height, windowSize.innerHeight]
    );

    const left = React.useMemo(
      () => rootRect && modalRect && Math.max(0, Math.min(rootRect.left, (windowSize.innerWidth || 0) - modalRect.width)),
      [rootRect?.left, modalRect?.width, windowSize.innerWidth]
    );

    const width = React.useMemo(() => rootRect?.width, [rootRect?.width]);

    // assign the element given to render the dropdown items below to a ref so we don't have to reselect it every time
    React.useLayoutEffect(() => {
      if (rootRef.current) {
        elementToRenderBelowRef.current = childRootElementSelector
          ? rootRef.current.querySelector(childRootElementSelector) ?? rootRef.current
          : rootRef.current;
      }
    }, [childRootElementSelector, rootRef.current]);

    const onScrollDocument = React.useCallback(
      (event: Event) => {
        if (
          // check if scrolling element is inside the dropdown content
          (event.target instanceof HTMLDivElement && !event.target.classList.contains('arm-dropdown-content')) ||
          !(event.target instanceof HTMLDivElement)
        ) {
          onOpenChange(false);
        }
      },
      [onOpenChange, closeOnScroll]
    );

    React.useEffect(() => {
      if (isOpen && closeOnScroll) {
        Globals.Document?.addEventListener('scroll', onScrollDocument, { capture: true, passive: true });
        Globals.Document?.body.addEventListener('resize', onScrollDocument, { capture: true, passive: true });

        return () => {
          Globals.Document?.removeEventListener('scroll', onScrollDocument, { capture: true });
          Globals.Document?.body.removeEventListener('resize', onScrollDocument, { capture: true });
        };
      }
    }, [isOpen, onScrollDocument]);

    const onMouseDownEvent = React.useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        if (openWhenClickInside) {
          onOpenChange(!isOpen);
        }
        onMouseDown?.(event);
        event.nativeEvent.stopImmediatePropagation();
        event.nativeEvent.preventDefault();
      },
      [openWhenClickInside, onOpenChange, onMouseDown, isOpen]
    );

    const onFocusEvent = React.useCallback(
      (event: React.FocusEvent<HTMLDivElement>) => {
        if (openWhenFocusInside) {
          onOpenChange(true);
        }
        onFocus?.(event);
      },
      [openWhenFocusInside, onOpenChange, onFocus]
    );

    const onScrollContent = React.useCallback((event: React.UIEvent) => event.stopPropagation(), []);
    const onMouseDownContent = React.useCallback((event: React.UIEvent) => event.stopPropagation(), []);

    const modalStyle = React.useMemo(
      () =>
        ({
          '--arm-dropdown-top': `${top}px`,
          '--arm-dropdown-left': `${left}px`,
          '--arm-dropdown-width': `${width}px`,
        } as React.CSSProperties),
      [top, left, width]
    );

    return (
      <div
        {...htmlProps}
        className={ClassNames.concat('arm-dropdown', className)}
        onMouseDown={onMouseDownEvent}
        ref={rootRef}
        data-is-open={isOpen}
        onFocus={onFocusEvent}
        onClick={(event) => event.stopPropagation()}
      >
        {children}

        <Modal
          portalTo={portalTo}
          portalToSelector={portalToSelector}
          className={ClassNames.concat('arm-dropdown-content', contentClassName)}
          style={modalStyle}
          ref={setModalRef}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onScroll={onScrollContent}
          onMouseDown={onMouseDownContent}
          closeOnWindowBlur
          closeOnWindowClick
          closeOnBackgroundClick={false}
        >
          {dropdownContent}
        </Modal>
      </div>
    );
  }
);

Dropdown.defaultProps = {
  openWhenFocusInside: true,
  openWhenClickInside: true,
};
