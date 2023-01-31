import * as React from 'react';

import { useArrayState } from '../../hooks';
import { concat } from '../../utils/classNames';

/**
 * The modal's context is currently used for two things:
 *
 * - A ref to an element in the provider which is used for the portals that drive elements. useModalLayerElement is called inside the modal component
 *   to, by default, get that ref to pass into the portal
 *
 * - To render an array of promisified dialogs, which are resolved when a prop given to them are fired, using useModal (or useDialog, or other alike)
 */
interface IModalContext {
  /** A ref to the modal layer element in the provider which modals should be portalled into */
  modalLayerReference: HTMLDivElement | undefined;

  /** An array of the currently dispatched modals using useModal */
  modals: React.FC[];

  /** Add a modal to the array of modals to be rendered inside the modal layer */
  addModal?: (newModal: React.FC) => void;

  /** Remove a modal from the array of modals to be rendered inside the modal layer */
  removeModal?: (newModal: React.FC) => void;
}

/** The React context object driving the modals */
const ModalContext = React.createContext<IModalContext>({
  modalLayerReference: undefined,
  modals: [],
  addModal: undefined,
  removeModal: undefined,
});

/**
 * use the modal context - !!mostly for internal use!!
 * if you want to dispatch your own modal you should use useModal or useDialog (or some other similar hook)
 * if you want to access the ref, you should use useModalLayerElement
 */
export const useModalContext = () => React.useContext(ModalContext);

/** Access the reference to the modal layer element which modals are portaled into by default */
export const useModalLayerElement = () => useModalContext().modalLayerReference;

export interface IModalProviderProps {
  /** HTML props to spread onto the modal layer element */
  modalLayerProps?: Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>;
}

/**
 * Provides modal context to its children allowing the use of context-based hooks like useModal (which will dispatch a modal that can
 * resolve a promise) and renders a div which modals will portal into
 */
export const ModalProvider = React.forwardRef<HTMLDivElement | null, React.PropsWithChildren<IModalProviderProps>>(
  ({ children, modalLayerProps }, ref) => {
    const [modalLayerReference, setModalLayerReference] = React.useState<HTMLDivElement>();
    React.useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => modalLayerReference!, [modalLayerReference]);

    // set the reference to the modal layer element to context
    const setRef = React.useCallback((node: HTMLDivElement) => {
      setModalLayerReference(node);
    }, []);

    const [modals, { push: addModal, pull: removeModal }] = useArrayState<IModalContext['modals'][number]>([]);

    const { className, ...modalProps } = modalLayerProps!;

    return (
      <ModalContext.Provider value={{ modalLayerReference, modals, addModal, removeModal }}>
        {children}
        <div {...modalProps} className={concat('arm-modal-layer', className)} ref={setRef}>
          {modals.map((ModalComponent, index) => (
            <ModalComponent key={index} />
          ))}
        </div>
      </ModalContext.Provider>
    );
  }
);

ModalProvider.defaultProps = {
  modalLayerProps: {},
};
