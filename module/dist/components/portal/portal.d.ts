import * as React from 'react';
export interface IPortalProps {
    /** selector for the element to append the root to as a queryselector, body by default */
    portalToSelector?: string;
    /** a ref for an element to portal into */
    portalTo?: HTMLElement;
}
/** Will portal its children into a given root element */
export declare const Portal: React.FunctionComponent<IPortalProps>;
