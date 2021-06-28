/* eslint-disable no-console */

import React from 'react';

import { useDidUpdateEffect, useDidUpdateLayoutEffect } from './useDidUpdateEffect';

/** Fire a series of console logs alongside lifecycle events */
export function useDebug(prefix?: string) {
  console.log(`${prefix}_RENDER`);

  React.useEffect(() => {
    console.log(`${prefix}_MOUNT`);

    return () => {
      console.log(`${prefix}_UNMOUNT`);
    };
  }, []);

  React.useLayoutEffect(() => {
    console.log(`${prefix}_LAYOUT_MOUNT`);

    return () => {
      console.log(`${prefix}_LAYOUT_UNMOUNT`);
    };
  }, []);

  useDidUpdateEffect(() => {
    console.log(`${prefix}_UPDATE_EFFECT`);
  });

  useDidUpdateLayoutEffect(() => {
    console.log(`${prefix}_UPDATE_LAYOUT_EFFECT`);
  });
}
