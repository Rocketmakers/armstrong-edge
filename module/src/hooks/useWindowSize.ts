import * as React from 'react';

import { Window } from '../utils/globals';
import { useEventListener } from './useEventListener';

export interface IWindowSize {
  innerWidth: number;
  innerHeight: number;
  outerWidth: number;
  outerHeight: number;
}

/** Returns the size of the window as a piece of live state, ensuring that any calculations happening during the React lifecycle that need the window size will have it up to date */
export function useWindowSize() {
  const [size, setSize] = React.useState<IWindowSize>({ innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 });

  const onResize = React.useCallback(() => {
    if (Window) {
      const { innerHeight, innerWidth, outerHeight, outerWidth } = Window;
      setSize({ innerHeight, innerWidth, outerHeight, outerWidth });
    }
  }, []);

  React.useEffect(() => {
    onResize();
  }, []);

  useEventListener('resize', onResize);

  return size;
}
