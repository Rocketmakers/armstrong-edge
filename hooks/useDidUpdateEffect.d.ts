import * as React from 'react';
/** A useEffect which won't run after the first render, will only run once the deps start changing */
export declare function useDidUpdateEffect(callback: React.EffectCallback, deps?: React.DependencyList): void;
