import * as React from 'react';

import { useEventListener } from '../../hooks/useEventListener';
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

  /** (string) selector for the element to portal the options into */
  rootElementSelector?: string;

  /** (string) CSS className property */
  className?: string;

  /** (string) CSS className for content wrapper */
  contentClassName?: string;
}

export interface IDropdownRef {
  /** (HTMLDivElement) the element wrapping the children */
  rootRef: React.RefObject<HTMLDivElement>;

  /** (HTMLDivElement) the element wrapping the content which is filled with the dropdown children */
  contentRef: React.RefObject<HTMLDivElement>;
}

export const Dropdown = React.forwardRef<IDropdownRef, React.PropsWithChildren<IDropdownProps>>(
  ({ isOpen, onOpenChange, children, rootElementSelector, dropdownContent, className, contentClassName, ...htmlProps }, ref) => {
    const rootRef = React.useRef<HTMLDivElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => ({ rootRef, contentRef }), [rootRef, contentRef]);

    /** Close when the user clicks outside of the dropdown */
    const onBodyClick = React.useCallback(() => {
      if (isOpen) {
        onOpenChange(false);
      }
    }, [isOpen]);

    useEventListener('click', onBodyClick);

    const [top, setTop] = React.useState<number>();
    const [left, setLeft] = React.useState<number>();

    React.useEffect(() => {
      if (isOpen && rootRef.current && contentRef.current) {
        const rect = rootRef.current.getBoundingClientRect();
        const contentRect = contentRef.current.getBoundingClientRect();
        // set top and left from position, but ensure it doesn't fall off the edge of the screen
        setTop(Math.min(rect.top + rect.height, (Globals.Window?.innerHeight || 0) - contentRect.height));
        setLeft(Math.min(rect.left, (Globals.Window?.innerWidth || 0) - contentRect.width));
      }
    }, [isOpen]);

    const onScrollContent = React.useCallback(
      (event: Event) => {
        if (
          (event.target instanceof HTMLDivElement && !event.target.classList.contains('arm-dropdown-content')) ||
          !(event.target instanceof HTMLDivElement)
        ) {
          onOpenChange(false);
        }
      },
      [onOpenChange]
    );

    React.useEffect(() => {
      if (isOpen) {
        Globals.Document?.addEventListener('scroll', onScrollContent, { capture: true, passive: true });

        return () => {
          Globals.Document?.removeEventListener('scroll', onScrollContent, { capture: true });
        };
      }
    }, [isOpen, onScrollContent]);

    return (
      <div
        {...htmlProps}
        className={ClassNames.concat('arm-dropdown', className)}
        onClick={(event) => event.stopPropagation()}
        ref={rootRef}
        data-is-open={isOpen}
      >
        {children}

        <Portal rootElementSelector={rootElementSelector}>
          <div
            className={ClassNames.concat('arm-dropdown-content', contentClassName)}
            style={{ '--arm-dropdown-top': `${top}px`, '--arm-dropdown-left': `${left}px` } as React.CSSProperties}
            onClick={(event) => event.stopPropagation()}
            ref={contentRef}
            data-is-open={isOpen}
            onScroll={(event) => {
              event.stopPropagation();
              // eslint-disable-next-line no-param-reassign
              return false;
            }}
            tabIndex={!isOpen ? -1 : undefined}
          >
            {dropdownContent}
          </div>
        </Portal>
      </div>
    );
  }
);
