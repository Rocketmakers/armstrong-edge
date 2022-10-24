import * as React from 'react';

import { useEventListener, useResizeObserver } from '../../hooks';
import { useBoundingClientRect } from '../../hooks/useBoundingClientRect';
import { useWindowSize } from '../../hooks/useWindowSize';
import { ClassNames } from '../../utils/classNames';
import { Globals } from '../../utils/globals';
import { Maths } from '../../utils/maths';
import { AutoResizer } from '../autoResizer';
import { IModalProps, Modal } from '../modal';
import { IPortalProps } from '../portal';

export interface IDropdownProps
  extends Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>,
    Pick<IPortalProps, 'portalToSelector' | 'portalTo'>,
    Pick<IModalProps, 'isOpen' | 'onOpenChange' | 'closeOnWindowBlur' | 'closeOnWindowClick' | 'closeOnBackgroundClick'> {
  /** rendered inside the dropdown */
  dropdownContent: JSX.Element;

  /** CSS className property - applied to the element wrapping its children, for the actual dropdown itself see contentClassName and modalHtmlProps */
  className?: string;

  /** CSS className for the div that wraps the actual dropdown */
  contentClassName?: string;

  /** should open when the user clicks on the component's children */
  openWhenClickInside?: boolean;

  /** should close when the user clicks on the component's children and the dropdown is already open - irrelevant if closeOnBackgroundClick is true, as that renders a modal background div over the top that gets the click first */
  closeWhenClickInside?: boolean;

  /** should open when the user focuses inside the component's children */
  openWhenFocusInside?: boolean;

  /** selector for the element to visually render the content below - by default will render below the wrapper element */
  childRootElementSelector?: string;

  /** should close if the user scrolls - replicates some browser experiences */
  closeOnScroll?: boolean;

  /** should the height be limited and scrolling be enabled - defaults to true */
  shouldScrollContent?: boolean;

  /** the margin in px around the edge of the innerWindow used to detect whether the dropdown is intersecting the edge, used to reposition it */
  edgeDetectionMargin?: number;

  /** if the user blurs then focuses the browser window while the element is still focused, it should reopen - false by default */
  reopenOnWindowFocusWhileFocused?: boolean;

  /** props to spread into the modal's root div */
  modalHtmlProps?: Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>;

  /** should the modal attempt to fill the width of the parent element */
  stretch?: boolean;

  /** how should the dropdown align horizontally to the child element - if stretch is true, used if wider than the child element */
  alignment?: 'left' | 'centre' | 'right';

  /** how should the dropdown be positioned vertically */
  position?: 'above' | 'below';
}

export interface IDropdownRef {
  /** the element wrapping the children */
  rootRef: React.RefObject<HTMLDivElement | undefined>;

  /** the element wrapping the content which is filled with the dropdown children */
  modalRef: React.RefObject<HTMLDivElement | undefined>;
}

/**
 * Extends the modal (see component modal docs) but positions the modal below the children of the component
 *
 * Default html props given to this component are applied to the static div that wraps its children. To supply html props to the modal div
 * see modalHtmlProps
 */
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
      closeWhenClickInside,
      onFocus,
      shouldScrollContent,
      edgeDetectionMargin,
      reopenOnWindowFocusWhileFocused,
      closeOnWindowBlur,
      closeOnWindowClick,
      closeOnBackgroundClick,
      modalHtmlProps,
      alignment,
      stretch,
      position,
      ...htmlProps
    },
    ref
  ) => {
    const rootRef = React.useRef<HTMLDivElement>(null);
    const elementToRenderBelowRef = React.useRef<Element>();
    const modalRef = React.useRef<HTMLDivElement>();

    const [rootRect, getRootRectContentRect] = useBoundingClientRect(elementToRenderBelowRef, undefined, isOpen);
    const windowSize = useWindowSize();

    // used to stop the dropdown from reopening if focused when the blurs then refocuses the window
    // (if an element is focused in the browser window, the focus event on that element is retriggered when the window focuses, leading to a slightly weird behaviour)
    const [windowBlurred, setWindowBlurred] = React.useState(false);

    useResizeObserver(getRootRectContentRect, {}, rootRef);

    const [clicking, setClicking] = React.useState(false);

    const setModalRef = React.useCallback(
      (node: HTMLDivElement) => {
        modalRef.current = node;
        getRootRectContentRect();
      },
      [getRootRectContentRect]
    );

    React.useEffect(() => {
      getRootRectContentRect();
    }, [isOpen]);

    React.useImperativeHandle(ref, () => ({ rootRef, modalRef }), [rootRef, modalRef]);

    const [modalSize, setModalSize] = React.useState({ width: 0, height: 0 });

    const onSizeChange = React.useCallback((size: { width: number; height: number }) => {
      setModalSize(size);
    }, []);

    // get top position of modal from root rect and modal's size if position is below
    const top = React.useMemo(() => {
      if (rootRect && modalSize && position === 'below') {
        return Maths.clamp(
          rootRect.top + rootRect.height,
          edgeDetectionMargin!,
          (windowSize.innerHeight || 0) - modalSize.height - edgeDetectionMargin!
        );
      }
    }, [rootRect?.top, rootRect?.height, modalSize?.height, windowSize.innerHeight, position]);

    // get bottom position of modal from root rect and modal's size if position is above
    const bottom = React.useMemo(() => {
      if (rootRect && modalSize && position === 'above') {
        return Maths.clamp(
          windowSize.innerHeight - rootRect.top,
          edgeDetectionMargin!,
          (windowSize.innerHeight || 0) - modalSize.height - edgeDetectionMargin!
        );
      }
    }, [rootRect?.top, rootRect?.height, modalSize?.height, windowSize.innerHeight, position]);

    // get left position of modal from root rect and modal's size
    const left = React.useMemo(() => {
      if (rootRect && modalSize) {
        let leftToClamp = 0;

        switch (alignment) {
          case 'left':
          default:
            leftToClamp = rootRect.left;
            break;
          case 'centre':
            leftToClamp = rootRect.left + rootRect.width / 2 - modalSize.width / 2;
            break;
          case 'right':
            leftToClamp = rootRect.right - modalSize.width;
            break;
        }

        return Maths.clamp(leftToClamp, edgeDetectionMargin!, (windowSize.innerWidth || 0) - modalSize.width - edgeDetectionMargin!);
      }
    }, [rootRect?.left, modalSize?.width, windowSize.innerWidth, edgeDetectionMargin, alignment, rootRect?.width]);

    /** only used if stretch is true */
    const width = React.useMemo(() => rootRect?.width, [rootRect?.width]);

    // assign the element given to render the dropdown items below to a ref so we don't have to reselect it every time
    React.useLayoutEffect(() => {
      if (rootRef.current) {
        elementToRenderBelowRef.current = childRootElementSelector
          ? rootRef.current.querySelector(childRootElementSelector) ?? rootRef.current
          : rootRef.current;
      }
    }, [childRootElementSelector]);

    // if closeOnScroll is true, close the dropdown
    const onScrollDocument = React.useCallback(
      (event: Event) => {
        if (
          isOpen &&
          closeOnScroll &&
          // check if scrolling element is inside the dropdown content
          ((event.target instanceof HTMLDivElement && !event.target.classList.contains('arm-dropdown-content')) ||
            !(event.target instanceof HTMLDivElement))
        ) {
          onOpenChange?.(false);
        }
      },
      [onOpenChange, closeOnScroll, isOpen]
    );

    useEventListener('scroll', onScrollDocument, Globals.Document, { capture: true, passive: true });
    useEventListener('resize', onScrollDocument, Globals.Document, { capture: true, passive: true });

    // open on mouse down rather than click to better reflect native functionality
    const onMouseDownEvent = React.useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        if (openWhenClickInside) {
          onOpenChange?.(closeWhenClickInside ? !isOpen : true);
          setClicking(true);
        }
        onMouseDown?.(event);
      },
      [openWhenClickInside, closeWhenClickInside, onOpenChange, onMouseDown, isOpen]
    );
    // open on focus
    const onFocusEvent = React.useCallback(
      (event: React.FocusEvent<HTMLDivElement>) => {
        if (openWhenFocusInside && (!windowBlurred || reopenOnWindowFocusWhileFocused)) {
          onOpenChange?.(true);
        }

        onFocus?.(event);
      },
      [openWhenFocusInside, onOpenChange, onFocus, windowBlurred, reopenOnWindowFocusWhileFocused]
    );

    const onScrollContent = React.useCallback((event: React.UIEvent) => event.stopPropagation(), []);
    const onMouseDownContent = React.useCallback((event: React.UIEvent) => event.stopPropagation(), []);

    // assign sizing to css variables for consumption in CSS
    const modalStyle = React.useMemo(
      () =>
        ({
          '--arm-dropdown-top': top && `${top}px`,
          '--arm-dropdown-bottom': bottom && `${bottom}px`,
          '--arm-dropdown-left': `${left}px`,
          '--arm-dropdown-width': `${width}px`,
        } as React.CSSProperties),
      [top, left, width, bottom]
    );

    const modalOnOpenChange = React.useCallback(
      (newIsOpen: boolean) => {
        if (clicking && !newIsOpen) {
          setClicking(false);
        } else {
          onOpenChange?.(newIsOpen);
        }
      },
      [onOpenChange, clicking]
    );

    // logic for ensuring that when the window is focused, the dropdown doesn't reopen if the element is focused
    const onWindowBlur = React.useCallback(() => setWindowBlurred(true), []);
    const onWindowFocus = React.useCallback(() => setTimeout(() => setWindowBlurred(false)), []);
    useEventListener('blur', onWindowBlur);
    useEventListener('focus', onWindowFocus);

    return (
      <>
        <div
          {...htmlProps}
          className={ClassNames.concat('arm-dropdown', className)}
          onMouseDown={onMouseDownEvent}
          ref={rootRef}
          data-is-open={isOpen}
          onFocus={onFocusEvent}
          data-cy="dropdown"
        >
          {children}
        </div>

        <Modal
          {...modalHtmlProps}
          portalTo={portalTo}
          portalToSelector={portalToSelector}
          className={ClassNames.concat('arm-dropdown-content', contentClassName, modalHtmlProps?.className)}
          style={modalStyle}
          ref={setModalRef}
          isOpen={isOpen}
          onOpenChange={modalOnOpenChange}
          onScroll={onScrollContent}
          onMouseDown={onMouseDownContent}
          closeOnWindowBlur={closeOnWindowBlur}
          closeOnWindowClick={closeOnWindowClick}
          closeOnBackgroundClick={closeOnBackgroundClick}
          data-scrolling={shouldScrollContent}
          centred={false}
          data-stretch={stretch}
        >
          <AutoResizer onSizeChange={onSizeChange} resizeHorizontal={false}>
            <div className="arm-dropdown-content-inner">{dropdownContent}</div>
          </AutoResizer>
        </Modal>
      </>
    );
  }
);

Dropdown.defaultProps = {
  openWhenFocusInside: true,
  openWhenClickInside: true,
  closeWhenClickInside: true,
  shouldScrollContent: true,
  edgeDetectionMargin: 10,
  closeOnWindowBlur: true,
  closeOnWindowClick: true,
  alignment: 'centre',
  position: 'below',
};
