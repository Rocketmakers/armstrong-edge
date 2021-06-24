import React from 'react';

export function useDidMountEffect(callback: () => void) {
  React.useEffect(callback, []);
}
