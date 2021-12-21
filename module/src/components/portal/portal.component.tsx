import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Globals } from '../../utils/globals';

export interface IPortalProps {
  /** selector for the element to append the root to as a queryselector, body by default */
  portalToSelector?: string;

  /** a ref for an element to portal into */
  portalTo?: HTMLElement;
}

/** Will portal its children into a given root element */
export const Portal: React.FunctionComponent<IPortalProps> = ({ portalToSelector, children, portalTo }) => {
  const [selectedRootElement, setSelectedRootElement] = React.useState<Element>();

  // the root element is not always available as a result of that query selection on the initial render, so must be assigned to a piece of state
  React.useEffect(() => {
    if (portalToSelector) {
      const element = Globals.Document?.querySelector(portalToSelector);

      if (element) {
        setSelectedRootElement(element || undefined);
      }
    } else if (portalTo) {
      setSelectedRootElement(portalTo);
    } else {
      setSelectedRootElement(Globals.Document?.body);
    }
  }, [portalTo, portalToSelector]);

  if (!selectedRootElement) {
    return null;
  }

  return ReactDOM.createPortal(children, selectedRootElement);
};
