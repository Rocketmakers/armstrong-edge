import * as React from 'react';

import { IModalProps, Modal, useModalContext } from '.';

/** The props that are passed into a component rendered by a useModal-type hook */
export interface IUseModalComponentProps<T, TArg> {
  /** close the modal and resolve the promise with undefined */
  close: () => void;

  /** close the modal and resolve the promise with the given argument */
  resolve: (data: T) => void;

  /** close the modal and reject the promise with the given reason */
  reject: (reason: string) => void;

  /** can be passed in when the callback returned from useModal is fired */
  argument?: TArg;
}

/** Add an element to the modal layer - mostly for internal use, you likely want to use useModal, but you can use this to use a completely custom Modal component */
export const useModalLayerPromise = <T, TArg = unknown>(Children: React.FC<IUseModalComponentProps<T, TArg>>, Wrapper: React.FC<IModalProps>) => {
  const { addModal, removeModal } = useModalContext();

  const rejectRef = React.useRef<() => void>();
  const modalRef = React.useRef<React.FC>();

  /** add the modal to the layer, and new up a promise that can be resolved inside the modal's jsx */
  const createModal = React.useCallback(
    (argument?: TArg) =>
      new Promise<T | undefined>((resolve, reject) => {
        // don't allow multiple modals to be controlled by a single hook at a time
        if (modalRef.current) {
          return;
        }

        rejectRef.current = reject;

        if (!removeModal || !addModal) {
          // eslint-disable-next-line no-console
          console.warn('You just tried using useModal outside of a ModalProvider');
          return;
        }

        // cleanup the references and close the modal
        const close = () => {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          removeModal(modalComponent);
          rejectRef.current = undefined;
          modalRef.current = undefined;
        };

        const rejectPromise = () => {
          close();
          reject();
        };

        const resolvePromise = (value: T | undefined) => {
          close();
          resolve(value);
        };

        // add the internal props to the wrapper (taking hold of isOpen and onOpenChange) and pass promise callbacks into the child component
        const modalComponent: React.FC = () => (
          <Wrapper isOpen onOpenChange={(isOpen) => isOpen === false && rejectPromise()}>
            <Children close={() => resolvePromise(undefined)} reject={rejectPromise} resolve={resolvePromise} argument={argument} />
          </Wrapper>
        );

        modalRef.current = modalComponent;

        addModal(modalComponent);
      }),
    [addModal, removeModal]
  );

  // clean up promise and modal on unmount
  React.useEffect(
    () => () => {
      rejectRef.current?.();

      if (modalRef.current) {
        removeModal?.(modalRef.current);
      }
    },
    []
  );

  return createModal;
};

/** Add a modal to the modal layer with a promise that can be resolved from inside the modal */
export const useModal = <T, TArg = unknown>(
  /** The JSX to render inside the Modal, with the promise functions passed in as props */
  Children: React.FC<IUseModalComponentProps<T, TArg>>,
  /** The props to give to the actual Modal component */
  props?: Omit<IModalProps, 'isOpen' | 'onOpenChange'>
) => useModalLayerPromise(Children, (internalProps) => <Modal {...internalProps} {...props} />);
