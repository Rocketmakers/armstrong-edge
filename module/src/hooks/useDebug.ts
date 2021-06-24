/* eslint-disable no-console */

import React from 'react';

import { useDidUpdateEffect } from './useDidUpdateEffect';

export function useDebug(prefix?: string) {
  React.useEffect(() => {
    console.log(`${prefix}_MOUNT`);

    return () => {
      console.log(`${prefix}_UNMOUNT`);
    };
  }, []);

  useDidUpdateEffect(() => {
    console.log(`${prefix}_UPDATE`);
  });
}
