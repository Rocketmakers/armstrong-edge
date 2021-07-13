import * as React from 'react';
/** A useEffect which only runs on the cleanup of the last effect */
export declare function useWillUnMountEffect(callback: ReturnType<React.EffectCallback>): void;
/** A useLayoutEffect which only runs on the cleanup of the last effect */
export declare function useWillUnMountLayoutEffect(callback: ReturnType<React.EffectCallback>): void;
