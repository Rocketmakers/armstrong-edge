import * as React from 'react';
/** A useEffect which will only run in the first effect */
export declare function useDidMountEffect(callback: React.EffectCallback): void;
/** A useLayoutEffect which will only run in the first effect */
export declare function useDidMountLayoutEffect(callback: React.EffectCallback): void;
