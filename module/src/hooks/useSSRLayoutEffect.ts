import * as React from "react";

/**
 * A version of the React `useLayoutEffect` that supports server side rendering by falling back to a standard `useEffect`.
 */
export const useSSRLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

/**
 * Version of `useSSRLayoutEffect` which won't run the effect on initial render, only when the dependencies update.
 * @param effect The effect to run when the dependencies update.
 * @param deps The dependencies for the effect
 * @returns The same as a React `useLayoutEffect` hook
 */
export const useDidUpdateSSRLayoutEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList
) => {
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return useSSRLayoutEffect(() => {
    if (!isFirstRender.current) {
      return effect();
    }
    return undefined;
  }, deps);
};
