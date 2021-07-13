"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalProvider = exports.useModalLayerElement = exports.useModalContext = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var hooks_1 = require("../../hooks");
var classNames_1 = require("../../utils/classNames");
/** The React context object driving the modals */
var ModalContext = React.createContext({
    modalLayerReference: { current: undefined },
    modals: [],
    addModal: undefined,
    removeModal: undefined,
});
/**
 * use the modal context - !!mostly for internal use!!
 * if you want to dispatch your own modal you should use useModal or useDialog (or some other similar hook)
 * if you want to access the ref, you should use useModalLayerElement
 */
var useModalContext = function () { return React.useContext(ModalContext); };
exports.useModalContext = useModalContext;
/** Access the reference to the modal layer element which modals are portaled into by default */
var useModalLayerElement = function () { return exports.useModalContext().modalLayerReference; };
exports.useModalLayerElement = useModalLayerElement;
/**
 * Provides modal context to its children allowing the use of context-based hooks like useModal (which will dispatch a modal that can
 * resolve a promise) and renders a div which modals will portal into
 */
exports.ModalProvider = React.forwardRef(function (_a, ref) {
    var children = _a.children, modalLayerProps = _a.modalLayerProps;
    var modalLayerRef = React.useRef();
    React.useImperativeHandle(ref, function () { return modalLayerRef.current; }, [modalLayerRef]);
    var modalLayerReference = exports.useModalContext().modalLayerReference;
    // set the reference to the modal layer element to context
    var setRef = React.useCallback(function (node) {
        modalLayerRef.current = node;
        modalLayerReference.current = node;
    }, []);
    var _b = hooks_1.useArrayState([]), modals = _b[0], _c = _b[1], addModal = _c.push, removeModal = _c.pull;
    var _d = modalLayerProps, className = _d.className, modalProps = tslib_1.__rest(_d, ["className"]);
    return (React.createElement(ModalContext.Provider, { value: { modalLayerReference: modalLayerReference, modals: modals, addModal: addModal, removeModal: removeModal } },
        children,
        React.createElement("div", tslib_1.__assign({}, modalProps, { className: classNames_1.ClassNames.concat('arm-modal-layer', className), ref: setRef }), modals.map(function (ModalComponent, index) { return (React.createElement(ModalComponent, { key: index })); }))));
});
exports.ModalProvider.defaultProps = {
    modalLayerProps: {},
};
