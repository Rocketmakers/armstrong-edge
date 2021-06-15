import * as React from 'react';

import { IPortalProps } from '../..';
import { useGeneratedId } from '../../hooks';
import { useElementBoundingClientRect } from '../../hooks/useElementBoundingClientRect';
import { useIsFocused } from '../../hooks/useIsFocused';
import { useIsHovering } from '../../hooks/useIsHovering';
import { useWindowSize } from '../../hooks/useWindowSize';
import { ClassNames } from '../../utils/classNames';
import { Modal } from '../modal';

export type TooltipPosition = 'above' | 'below' | 'left' | 'right';

export interface ITooltipProps
  extends Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onMouseEnter' | 'onMouseLeave' | 'ref'>,
    Pick<IPortalProps, 'portalToSelector' | 'portalTo'> {
  /** (ReactNode) the contents of the tooltip */
  content: React.ReactNode;

  /** (['above'|'below'|'left'|'right']) a position or array of position options for the tooltip to try to display in, in reverse order of preference, with the tooltip falling back through the array if a position makes the tooltip fall of the edge of the screen */
  tooltipPosition?: TooltipPosition | TooltipPosition[];

  /** (HTMLAttributes) props for the wrapper element */
  wrapperAttributes?: React.HTMLAttributes<HTMLElement>;

  /** (number) the margin in px around the edge of the innerWindow used to detect whether the tooltip is intersecting the edge - defaults to 5 */
  edgeDetectionMargin?: number;

  /** (boolean) should the tooltip be open (by default, will only open if hovered) */
  isOpen?: boolean;

  /** (boolean) should open when the children are hovered - true by default */
  openOnHover?: boolean;

  /** (boolean) should open when anything within the children is focused - true by default */
  openOnFocus?: boolean;
}

export interface ITooltipRef {
  /** (HTMLDivElement) the element wrapping the children */
  rootRef: React.RefObject<HTMLDivElement | undefined>;

  /** (HTMLDivElement) the element wrapping the content which is filled with the dropdown children */
  modalRef: React.RefObject<HTMLDivElement | undefined>;
}

/** Portals a piece of text or some JSX into a floating element next to its children when the children are hovered or focused */
export const Tooltip = React.forwardRef<ITooltipRef, ITooltipProps>(
  (
    {
      content,
      className,
      children,
      portalTo,
      portalToSelector,
      tooltipPosition,
      wrapperAttributes,
      edgeDetectionMargin,
      isOpen: isOpenProp,
      openOnHover,
      openOnFocus,
      id,
      ...nativeProps
    },
    ref
  ) => {
    const rootRef = React.useRef<HTMLDivElement>(null);
    const modalRef = React.useRef<HTMLDivElement>();

    const [rootRect, getRootRectContentRect] = useElementBoundingClientRect(rootRef);
    const [modalRect] = useElementBoundingClientRect(modalRef);
    const windowSize = useWindowSize();

    const setModalRef = React.useCallback(
      (node: HTMLDivElement) => {
        modalRef.current = node;
        getRootRectContentRect();
      },
      [getRootRectContentRect]
    );

    React.useImperativeHandle(ref, () => ({ rootRef, modalRef }), [rootRef, modalRef]);

    const [isHovering, hoveringProps] = useIsHovering();
    const [isFocused, focusedProps] = useIsFocused();

    const isOpen = isOpenProp || (openOnHover && isHovering) || (openOnFocus && isFocused) || false;

    /** Check if the tooltip is inside the screen for a given top and left */
    const getIsInside = React.useCallback(
      (top: number, left: number) =>
        top > edgeDetectionMargin! &&
        top + (modalRect?.height || 0!) < windowSize.innerHeight - edgeDetectionMargin! &&
        left > edgeDetectionMargin! &&
        left + (modalRect?.width || 0!) < windowSize.innerWidth - edgeDetectionMargin!,
      [modalRect?.width, modalRect?.height, windowSize.innerWidth, windowSize.innerHeight, edgeDetectionMargin]
    );

    /** Get left and top values when placing the tooltip in a tooltipPosition */
    const getPosition = React.useCallback(
      (position: TooltipPosition) => {
        switch (position) {
          case 'above': {
            const top = rootRect.top - modalRect.height;
            const left = rootRect.left + rootRect.width / 2 - modalRect.width / 2;
            return { top, left, outside: !getIsInside(top, left), position: 'above' };
          }
          case 'below': {
            const top = rootRect.top + rootRect.height;
            const left = rootRect.left + rootRect.width / 2 - modalRect.width / 2;
            return { top, left, outside: !getIsInside(top, left), position: 'below' };
          }
          case 'left': {
            const left = rootRect.left - modalRect.width;
            const top = rootRect.top + rootRect.height / 2 - modalRect.height / 2;
            return { left, top, outside: !getIsInside(top, left), position: 'left' };
          }
          case 'right': {
            const left = rootRect.left + rootRect.width;
            const top = rootRect.top + rootRect.height / 2 - modalRect.height / 2;
            return { left, top, outside: !getIsInside(top, left), position: 'right' };
          }
          default: {
            break;
          }
        }
      },
      [
        windowSize.innerWidth,
        windowSize.innerHeight,
        rootRect?.left,
        rootRect?.top,
        rootRect?.height,
        rootRect?.width,
        modalRect?.height,
        modalRect?.width,
      ]
    );

    /** Loop through the given positions and use the first one where the tooltip is not off the edge */
    const position = React.useMemo(() => {
      const positions = typeof tooltipPosition === 'string' ? [tooltipPosition] : tooltipPosition;

      if (isOpen && positions?.length) {
        for (let index = 0; index < positions.length; index += 1) {
          const positionOption = positions[index];

          const calculatedPosition = getPosition(positionOption);

          // if position isn't outside the screen or if it's just the last option in the array of possible positions
          if (!calculatedPosition?.outside || index === positions.length - 1) {
            return calculatedPosition;
          }
        }
      }
    }, [getPosition, tooltipPosition, isOpen]);

    const style = React.useMemo(
      () =>
        ({
          '--arm-tooltip-left': `${position?.left || 0}px`,
          '--arm-tooltip-top': `${position?.top || 0}px`,
        } as React.CSSProperties),
      [position]
    );

    const generatedId = useGeneratedId(id);

    return (
      <div
        {...(wrapperAttributes || {})}
        className={ClassNames.concat('arm-tooltip-wrapper', wrapperAttributes?.className)}
        ref={rootRef}
        {...hoveringProps}
        {...focusedProps}
        aria-describedby={generatedId}
      >
        {children}

        <Modal
          className={ClassNames.concat('arm-tooltip', className)}
          ref={setModalRef}
          portalTo={portalTo}
          portalToSelector={portalToSelector}
          isOpen={isOpen}
          closeOnBackgroundClick={false}
          style={style}
          data-position={position?.position}
          role="tooltip"
          {...nativeProps}
        >
          <div id={generatedId} className="arm-tooltip-inner">
            {typeof content === 'string' ? <p>{content}</p> : content}
          </div>
        </Modal>
      </div>
    );
  }
);

Tooltip.defaultProps = {
  tooltipPosition: ['below', 'right', 'above', 'left'],
  edgeDetectionMargin: 5,
  openOnHover: true,
  openOnFocus: true,
};
