declare type EqualityComparer<T> = (a: T, b: T) => boolean;
declare type ArrayStateReturn<T> = [
    T[],
    {
        push: (val: T) => void;
        pull: (val: T) => void;
        toggle: (val: T) => void;
        contains: (val: T) => boolean;
        clear: () => void;
    }
];
/** Store an array value in state, and access push, pull, clear methods to interact with that state - all contained within a reducer, meaning that multiple state updates can happen in a single thread without any unusual behaviors */
export declare const useArrayState: <T>(initialValue: T[], equalityComparer?: EqualityComparer<T>) => ArrayStateReturn<T>;
/** Store an array value of objects in a state, with a key used to compare values when removing and adding */
export declare const useArrayObjectState: <T, TKey extends keyof T>(initialValue: T[], key: TKey) => ArrayStateReturn<T>;
export {};
