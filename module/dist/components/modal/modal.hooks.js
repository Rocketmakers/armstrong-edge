"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModal = exports.useModalLayerPromise = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var _1 = require(".");
/** Returns a callback which will add an element to the modal layer and return a promise - mostly for internal use, you likely want to use useModal, but you can use this to use a completely custom Modal component */
var useModalLayerPromise = function (Children, Wrapper) {
    var _a = _1.useModalContext(), addModal = _a.addModal, removeModal = _a.removeModal;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var rejectRef = React.useRef();
    var modalRef = React.useRef();
    /** add the modal to the layer, and new up a promise that can be resolved inside the modal's jsx */
    var createModal = React.useCallback(function (argument) {
        return new Promise(function (resolve, reject) {
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
            var close = function () {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                removeModal(modalComponent);
                rejectRef.current = undefined;
                modalRef.current = undefined;
                setIsOpen(false);
            };
            var rejectPromise = function () {
                close();
                reject();
            };
            var resolvePromise = function (value) {
                close();
                resolve(value);
            };
            // add the internal props to the wrapper (taking hold of isOpen and onOpenChange) and pass promise callbacks into the child component
            var modalComponent = function () { return (React.createElement(Wrapper, { isOpen: true, onOpenChange: function (shouldOpen) { return shouldOpen === false && rejectPromise(); } },
                React.createElement(Children, { close: function () { return resolvePromise(undefined); }, reject: rejectPromise, resolve: resolvePromise, argument: argument }))); };
            modalRef.current = modalComponent;
            addModal(modalComponent);
            setIsOpen(true);
        });
    }, [addModal, removeModal]);
    // clean up promise and modal on unmount
    React.useEffect(function () { return function () {
        var _a;
        (_a = rejectRef.current) === null || _a === void 0 ? void 0 : _a.call(rejectRef);
        if (modalRef.current) {
            removeModal === null || removeModal === void 0 ? void 0 : removeModal(modalRef.current);
        }
    }; }, []);
    return [createModal, { isOpen: isOpen }];
};
exports.useModalLayerPromise = useModalLayerPromise;
/** Add a modal to the modal layer with a promise that can be resolved from inside the modal */
var useModal = function (
/** The JSX to render inside the Modal, with the promise functions passed in as props */
Children, 
/** The props to give to the actual Modal component */
props) { return exports.useModalLayerPromise(Children, function (internalProps) { return React.createElement(_1.Modal, tslib_1.__assign({}, internalProps, props)); }); };
exports.useModal = useModal;
