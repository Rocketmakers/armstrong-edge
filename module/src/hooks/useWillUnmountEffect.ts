import React from 'react';

export function useWillUnMountEffect(callback: () => void) {
  React.useEffect(() => callback, []);
}
