import { useMemo } from 'react';

/** Generates a unique ID on first render using the current unix time and a randomly generated number up to 1000 - should be used for DOM elements when necessary for, for example, defining relationships between elements using aria */
export function useGeneratedId(prefix?: string, override?: string) {
  return useMemo(() => {
    if (override) {
      return override;
    }

    const dateUnix = Date.now();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${prefix ? `${prefix}_` : ''}${dateUnix.toString().slice(7)}_${randomNumber}`;
  }, []);
}
