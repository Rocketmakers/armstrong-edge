import * as React from 'react';

import { useEventListener } from '../../hooks/useEventListener';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { ClassNames } from '../../utils/classNames';
import { Globals } from '../../utils/globals';
import { Portal } from '../portal/portal';

export interface IDropdownProps extends Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
  /** (boolean) should the dropdown be rendered */
  isOpen: boolean;

  /** (boolean) fired when the user attempts to close the dropdown */
  onOpenChange: (open: boolean) => void;

  /** (JSX) rendered inside the dropdown */
  dropdownContent: JSX.Element;

  /** (string) selector for the element to portal the content into */
  contentRootElementSelector?: string;

  /** (string) CSS className property */
  className?: string;

  /** (string) CSS className for content wrapper */
  contentClassName?: string;

  /** (boolean) should open when the user clicks on children */
  openWhenClickInside?: boolean;

  /** (boolean) should open when the user focuses inside vhildren */
  openWhenFocusInside?: boolean;

  /** (string) selector for the element to visually render the content below - by default will render below the wrapper element */
  childRootElementSelector?: string;

  /** (boolean) should close if the user scrolls - replicates some browser experiences */
  closeOnScroll?: boolean;
}

export interface IDropdownRef {
  /** (HTMLDivElement) the element wrapping the children */
  rootRef: React.RefObject<HTMLDivElement>;

  /** (HTMLDivElement) the element wrapping the content which is filled with the dropdown children */
  contentRef: React.RefObject<HTMLDivElement>;
}

export const Dropdown = React.forwardRef<IDropdownRef, React.PropsWithChildren<IDropdownProps>>(
  (
    {
      isOpen,
      onOpenChange,
      children,
      contentRootElementSelector,
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
    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => ({ rootRef, contentRef }), [rootRef, contentRef]);

    /** Close when the user clicks outside of the dropdown */
    const onBodyClick = React.useCallback(() => {
      if (isOpen) {
        onOpenChange(false);
      }
    }, [isOpen]);

    const close = React.useCallback(() => {
      onOpenChange(false);
    }, [onOpenChange]);

    useEventListener('click', onBodyClick, Globals.Document?.body);
    useEventListener('resize', close, window);
    useEventListener('blur', close, window);

    const [top, setTop] = React.useState<number>();
    const [left, setLeft] = React.useState<number>();
    const [width, setWidth] = React.useState<number>();

    // assign the element given to render the dropdown items below to a ref so we don't have to reselect it every time
    React.useLayoutEffect(() => {
      if (rootRef.current) {
        elementToRenderBelowRef.current = childRootElementSelector
          ? rootRef.current.querySelector(childRootElementSelector) ?? rootRef.current
          : rootRef.current;
      }
    }, [childRootElementSelector, rootRef.current]);

    const setPosition = React.useCallback(() => {
      if (isOpen && rootRef.current && contentRef.current) {
        const elementToRenderBelow = elementToRenderBelowRef.current;

        const rect = elementToRenderBelow!.getBoundingClientRect();
        const contentRect = contentRef.current.getBoundingClientRect();

        // set top and left from position, but ensure it doesn't fall off the edge of the screen
        const newTop = Math.max(Math.min(rect.top + rect.height, (Globals.Window?.innerHeight || 0) - contentRect.height - rect.height));
        const newLeft = Math.max(0, Math.min(rect.left, (Globals.Window?.innerWidth || 0) - contentRect.width));

        setTop(newTop);
        setLeft(newLeft);
        setWidth(rect.width);
      }
    }, [isOpen, rootRef.current, contentRef.current]);

    React.useLayoutEffect(() => {
      setPosition();
    }, [isOpen]);

    const onScrollContent = React.useCallback(
      (event: Event) => {
        if (
          closeOnScroll &&
          ((event.target instanceof HTMLDivElement && !event.target.classList.contains('arm-dropdown-content')) ||
            !(event.target instanceof HTMLDivElement))
        ) {
          onOpenChange(false);
        } else {
          setPosition();
        }
      },
      [onOpenChange, closeOnScroll, setPosition]
    );

    React.useEffect(() => {
      if (isOpen) {
        Globals.Document?.addEventListener('scroll', onScrollContent, { capture: true, passive: true });

        return () => {
          Globals.Document?.removeEventListener('scroll', onScrollContent, { capture: true });
        };
      }
    }, [isOpen, onScrollContent]);

    const onMouseDownEvent = React.useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        if (openWhenClickInside) {
          onOpenChange(!isOpen);
        }
        onMouseDown?.(event);
        // event?.stopPropagation();
        // event?.preventDefault();
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

    useResizeObserver(rootRef as any, setPosition);

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

        <Portal rootElementSelector={contentRootElementSelector}>
          <div
            className={ClassNames.concat('arm-dropdown-content', contentClassName)}
            style={
              {
                '--arm-dropdown-top': `${top}px`,
                '--arm-dropdown-left': `${left}px`,
                '--arm-dropdown-width': `${width}px`,
              } as React.CSSProperties
            }
            ref={contentRef}
            data-is-open={isOpen}
            onScroll={(event) => {
              event.stopPropagation();
              // eslint-disable-next-line no-param-reassign
              return false;
            }}
            tabIndex={!isOpen ? -1 : undefined}
            onClick={(event) => {
              event.stopPropagation();
            }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            {dropdownContent}
          </div>
        </Portal>
      </div>
    );
  }
);

Dropdown.defaultProps = {
  openWhenFocusInside: true,
  openWhenClickInside: true,
};
