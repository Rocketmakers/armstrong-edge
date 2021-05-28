import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Globals } from '../../utils/globals';

interface IPortalProps {
  /** (string) classname of the element to be created to portal the children into */
  wrapperClassName?: string;

  /** (string) tagname of the element to be created to portal the children into, div by default */
  wrapperTagName?: string;

  /** (string) selector for the element to append the root to as a queryselector, body by default */
  rootElementSelector?: string;
}

export const Portal: React.FunctionComponent<IPortalProps> = ({ wrapperClassName, wrapperTagName, rootElementSelector, children }) => {
  const [rootElement, setRootElement] = React.useState<HTMLElement>();

  React.useEffect(() => {
    const element = document.createElement(wrapperTagName!);

    if (wrapperClassName) {
      element.classList.add(wrapperClassName);
    }

    setRootElement(element);
    Globals.Document?.querySelector(rootElementSelector!)?.appendChild(element);

    return () => {
      element.remove();
    };
  }, []);

  if (!rootElement) return null;

  return ReactDOM.createPortal(children, rootElement);
};

Portal.defaultProps = {
  rootElementSelector: '#host',
  wrapperTagName: 'div',
};
