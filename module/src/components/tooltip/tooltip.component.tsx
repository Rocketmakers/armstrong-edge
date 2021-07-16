import * as React from 'react';

import { IPortalProps } from '../..';
import { useGeneratedId } from '../../hooks';
import { useBoundingClientRect } from '../../hooks/useBoundingClientRect';
import { useIsFocused } from '../../hooks/useIsFocused';
import { useIsHovering } from '../../hooks/useIsHovering';
import { useWindowSize } from '../../hooks/useWindowSize';
import { ClassNames } from '../../utils/classNames';
import { Modal } from '../modal';

export type TooltipPosition = 'above' | 'below' | 'left' | 'right';

export interface ITooltipProps
  extends Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onMouseEnter' | 'onMouseLeave' | 'ref'>,
    Pick<IPortalProps, 'portalToSelector' | 'portalTo'> {
  /** the contents of the tooltip */
  content: React.ReactNode;

  /** a position or array of position options for the tooltip to try to display in, in reverse order of preference, with the tooltip falling back through the array if a position makes the tooltip fall of the edge of the screen */
  tooltipPosition?: TooltipPosition | TooltipPosition[];

  /** props for the wrapper element */
  wrapperAttributes?: React.HTMLAttributes<HTMLElement>;

  /** the margin in px around the edge of the innerWindow used to detect whether the tooltip is intersecting the edge - defaults to 5 */
  edgeDetectionMargin?: number;

  /** should the tooltip be open (by default, will only open if hovered) */
  isOpen?: boolean;

  /** should open when the children are hovered - true by default */
  openOnHover?: boolean;

  /** should open when anything within the children is focused - true by default */
  openOnFocus?: boolean;
}

export interface ITooltipRef {
  /** the element wrapping the children */
  rootRef: React.RefObject<HTMLDivElement | undefined>;

  /** the element wrapping the content which is filled with the dropdown children */
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
    const innerRef = React.useRef<HTMLDivElement>();

    const [isHovering, hoveringProps] = useIsHovering();
    const [isFocused, focusedProps] = useIsFocused();

    const isOpen = isOpenProp || (openOnHover && isHovering) || (openOnFocus && isFocused) || false;

    const [rootRect, getRootRect] = useBoundingClientRect(rootRef, undefined, isOpen);
    const [innerRect, getInnerRect] = useBoundingClientRect(innerRef, undefined, isOpen);
    const windowSize = useWindowSize();

    const setInnerRef = React.useCallback(
      (node: HTMLDivElement) => {
        innerRef.current = node;
        getRootRect();
        getInnerRect();
      },
      [getRootRect, getInnerRect]
    );

    React.useImperativeHandle(ref, () => ({ rootRef, modalRef: innerRef }), [rootRef, innerRef]);

    React.useEffect(() => {
      if (isOpen) {
        setTimeout(() => getInnerRect());
      }
    }, [isOpen]);

    /** Check if the tooltip is inside the screen for a given top and left */
    const getIsInside = React.useCallback(
      (top: number, left: number) =>
        top > edgeDetectionMargin! &&
        top + (innerRect?.height || 0!) < windowSize.innerHeight - edgeDetectionMargin! &&
        left > edgeDetectionMargin! &&
        left + (innerRect?.width || 0!) < windowSize.innerWidth - edgeDetectionMargin!,
      [innerRect?.width, innerRect?.height, windowSize.innerWidth, windowSize.innerHeight, edgeDetectionMargin]
    );

    /** Get left and top values when placing the tooltip in a tooltipPosition */
    const getPosition = React.useCallback(
      (position: TooltipPosition) => {
        switch (position) {
          case 'above': {
            const top = rootRect.top - innerRect.height;
            const left = rootRect.left + rootRect.width / 2 - innerRect.width / 2;
            return { top, left, outside: !getIsInside(top, left), position: 'above' };
          }
          case 'below': {
            const top = rootRect.top + rootRect.height;
            const left = rootRect.left + rootRect.width / 2 - innerRect.width / 2;
            return { top, left, outside: !getIsInside(top, left), position: 'below' };
          }
          case 'left': {
            const left = rootRect.left - innerRect.width;
            const top = rootRect.top + rootRect.height / 2 - innerRect.height / 2;
            return { left, top, outside: !getIsInside(top, left), position: 'left' };
          }
          case 'right': {
            const left = rootRect.left + rootRect.width;
            const top = rootRect.top + rootRect.height / 2 - innerRect.height / 2;
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
        innerRect?.height,
        innerRect?.width,
      ]
    );

    /** Loop through the given positions and use the first one where the tooltip is not off the edge */
    const position = React.useMemo(() => {
      const positions = typeof tooltipPosition === 'string' ? [tooltipPosition] : tooltipPosition;

      if (positions?.length) {
        for (let index = 0; index < positions.length; index += 1) {
          const positionOption = positions[index];

          const calculatedPosition = getPosition(positionOption);

          // if position isn't outside the screen or if it's just the last option in the array of possible positions
          if (!calculatedPosition?.outside || index === positions.length - 1) {
            return calculatedPosition;
          }
        }
      }
    }, [getPosition, tooltipPosition]);

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
          portalTo={portalTo}
          portalToSelector={portalToSelector}
          isOpen={isOpen}
          closeOnBackgroundClick={false}
          style={style}
          data-position={position?.position}
          role="tooltip"
          data-is-text={typeof content === 'string' || typeof content === 'number'}
          {...nativeProps}
        >
          <div id={generatedId} className="arm-tooltip-inner" ref={setInnerRef}>
            <div className="arm-tooltip-content">{typeof content === 'string' || typeof content === 'number' ? <p>{content}</p> : content}</div>
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
};
