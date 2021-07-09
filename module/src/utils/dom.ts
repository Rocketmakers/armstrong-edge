import * as React from 'react';

export namespace DOM {
  export function clickIsInsideElement(element: HTMLElement, event: React.MouseEvent<HTMLElement>) {
    return (element && event.target === element) || element.contains(event.target as Node);
  }
}
