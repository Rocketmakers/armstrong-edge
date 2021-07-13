"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var useDelayedDependentSwitch_1 = require("../../hooks/useDelayedDependentSwitch");
var classNames_1 = require("../../utils/classNames");
var globals_1 = require("../../utils/globals");
var portal_1 = require("../portal");
/**
 * A component which will portal its children into a div on top of all existing DOM, with handlers to close it if the user clicks outside of that area.
 * By default, if inside a ModalProvider, it will portal into an element rendered by that, but that can be overridden by providing portalTo or portalToSelector
 */
exports.Modal = React.forwardRef(function (_a, ref) {
    var portalToSelector = _a.portalToSelector, portalTo = _a.portalTo, isOpen = _a.isOpen, onOpenChange = _a.onOpenChange, closeOnWindowBlur = _a.closeOnWindowBlur, className = _a.className, onClickWrapper = _a.onClickWrapper, closeOnWindowClick = _a.closeOnWindowClick, darkenBackground = _a.darkenBackground, onClick = _a.onClick, children = _a.children, closeOnBackgroundClick = _a.closeOnBackgroundClick, wrapperClassName = _a.wrapperClassName, disableClose = _a.disableClose, closeTime = _a.closeTime, nativeProps = tslib_1.__rest(_a, ["portalToSelector", "portalTo", "isOpen", "onOpenChange", "closeOnWindowBlur", "className", "onClickWrapper", "closeOnWindowClick", "darkenBackground", "onClick", "children", "closeOnBackgroundClick", "wrapperClassName", "disableClose", "closeTime"]);
    var close = React.useCallback(function () {
        if (!disableClose) {
            onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false);
        }
    }, [onOpenChange, disableClose]);
    /** Close when the user clicks outside of the dropdown */
    var onWindowClick = React.useCallback(function () {
        if (isOpen && closeOnWindowClick) {
            close();
        }
    }, [isOpen, close, closeOnWindowClick]);
    /** Close when the user blurs the window */
    var onWindowBlur = React.useCallback(function () {
        if (isOpen && closeOnWindowBlur) {
            close();
        }
    }, [isOpen, close, closeOnWindowBlur]);
    __1.useEventListener('click', onWindowClick, globals_1.Globals.Document);
    __1.useEventListener('blur', onWindowBlur, globals_1.Globals.Window);
    /** Stop propagation when clicking on the modal, to stop modal clicks from also closing the window */
    var onClickEvent = React.useCallback(function (event) {
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    }, [onClick]);
    /** When the user clicks on the wrapper element, close if closeOnBackgroundClick is true */
    var onClickWrapperEvent = React.useCallback(function (event) {
        onClickWrapper === null || onClickWrapper === void 0 ? void 0 : onClickWrapper(event);
        if (closeOnBackgroundClick) {
            close();
        }
    }, [onClickWrapper, close, closeOnBackgroundClick]);
    var wrapperRef = __1.useModalLayerElement();
    /** Have a piece of isClosing state that depends on isOpen */
    var _b = useDelayedDependentSwitch_1.useDelayedDependentSwitch(isOpen, closeTime), delayedIsOpen = _b[0], isClosing = _b[1];
    if (!delayedIsOpen && !isClosing) {
        return null;
    }
    return (React.createElement(portal_1.Portal, { portalTo: (!portalToSelector && (wrapperRef === null || wrapperRef === void 0 ? void 0 : wrapperRef.current)) || portalTo, portalToSelector: portalToSelector },
        React.createElement("div", { className: classNames_1.ClassNames.concat('arm-modal-wrapper', wrapperClassName), onClick: onClickWrapperEvent, "data-close-on-background-click": !!closeOnBackgroundClick, "data-darken-background": darkenBackground, "data-is-closing": isClosing, "aria-hidden": isClosing, tabIndex: isClosing ? -1 : undefined },
            React.createElement("div", tslib_1.__assign({ role: "dialog", "aria-modal": "true" }, nativeProps, { className: classNames_1.ClassNames.concat('arm-modal', className), ref: ref, onClick: onClickEvent }), children))));
});
exports.Modal.defaultProps = {
    closeOnBackgroundClick: true,
    closeTime: 300,
};
