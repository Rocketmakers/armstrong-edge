import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Globals } from '../../utils/globals';

export interface IPortalProps {
  /** (string) selector for the element to append the root to as a queryselector, body by default */
  rootElementSelector?: string;

  /** (HTMLElement) a ref for an element to portal into */
  rootElement?: HTMLElement;
}

export const Portal: React.FunctionComponent<IPortalProps> = ({ rootElementSelector, children, rootElement }) => {
  const [selectedRootElement, setSelectedRootElement] = React.useState<Element>();

  // the root element is not always available as a result of that query selection on the initial render, so must be assigned to a piece of state
  React.useEffect(() => {
    if (rootElementSelector) {
      const element = Globals.Document?.querySelector(rootElementSelector);

      if (element) {
        setSelectedRootElement(element);
      } else {
        setSelectedRootElement(undefined);
      }
    } else if (rootElement) {
      setSelectedRootElement(rootElement);
    } else {
      setSelectedRootElement(undefined);
    }
  }, [rootElement, rootElementSelector]);

  if (!selectedRootElement) {
    return null;
  }

  return ReactDOM.createPortal(children, selectedRootElement);
};

Portal.defaultProps = {
  rootElementSelector: 'body',
};
