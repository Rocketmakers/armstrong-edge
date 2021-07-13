import * as React from 'react';
import { IModalProps } from '.';
/** The props that are passed into a component rendered by a useModal-type hook */
export interface IUseModalLayerPromiseComponentProps<T, TArg> {
    /** close the modal and resolve the promise with undefined */
    close: () => void;
    /** close the modal and resolve the promise with the given argument */
    resolve: (data: T) => void;
    /** close the modal and reject the promise with the given reason */
    reject: (reason: string) => void;
    /** can be passed in when the callback returned from useModal is fired */
    argument?: TArg;
}
export interface IUseModalLayerPromiseReturnState {
    /** Is the dialog currently open */
    isOpen?: boolean;
}
export declare type UseModalLayerPromiseReturn<T, TArg> = [(argument?: TArg) => Promise<T | undefined>, IUseModalLayerPromiseReturnState];
/** Returns a callback which will add an element to the modal layer and return a promise - mostly for internal use, you likely want to use useModal, but you can use this to use a completely custom Modal component */
export declare const useModalLayerPromise: <T, TArg = unknown>(Children: React.FC<IUseModalLayerPromiseComponentProps<T, TArg>>, Wrapper: React.FC<Pick<IModalProps, 'isOpen' | 'onOpenChange'>>) => UseModalLayerPromiseReturn<T, TArg>;
export declare type UseModalModalProps = Omit<IModalProps, 'isOpen' | 'onOpenChange'>;
/** Add a modal to the modal layer with a promise that can be resolved from inside the modal */
export declare const useModal: <T, TArg = unknown>(Children: React.FC<IUseModalLayerPromiseComponentProps<T, TArg>>, props?: UseModalModalProps | undefined) => UseModalLayerPromiseReturn<T, TArg>;
