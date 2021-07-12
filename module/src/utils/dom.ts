import * as React from 'react';

export namespace DOM {
  /** Check if the element that was clicked was inside a given element */
  export function clickIsInsideElement(element: HTMLElement, event: React.MouseEvent<HTMLElement>): boolean {
    return (element && event.target === element) || element.contains(event.target as Node);
  }
}
