import * as React from 'react';
import { IPortalProps } from '../..';
export declare type TooltipPosition = 'above' | 'below' | 'left' | 'right';
export interface ITooltipProps extends Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onMouseEnter' | 'onMouseLeave' | 'ref'>, Pick<IPortalProps, 'portalToSelector' | 'portalTo'> {
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
export declare const Tooltip: React.ForwardRefExoticComponent<ITooltipProps & React.RefAttributes<ITooltipRef>>;
