import * as React from 'react';
/**
 * A version of the React `useLayoutEffect` that supports server side rendering by falling back to a standard `useEffect`.
 */
export declare const useSSRLayoutEffect: typeof React.useLayoutEffect;
/**
 * Version of `useSSRLayoutEffect` which won't run the effect on initial render, only when the dependencies update.
 * @param effect The effect to run when the dependencies update.
 * @param deps The dependencies for the effect
 * @returns The same as a React `useLayoutEffect` hook
 */
export declare const useDidUpdateSSRLayoutEffect: (effect: React.EffectCallback, deps?: React.DependencyList) => void;
