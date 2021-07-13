"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var hooks_1 = require("../../hooks");
var useBoundingClientRect_1 = require("../../hooks/useBoundingClientRect");
var useWindowSize_1 = require("../../hooks/useWindowSize");
var classNames_1 = require("../../utils/classNames");
var globals_1 = require("../../utils/globals");
var maths_1 = require("../../utils/maths");
var autoResizer_1 = require("../autoResizer");
var modal_1 = require("../modal");
/** Extends the modal (see component modal docs) but positions the modal below the children of the component */
exports.Dropdown = React.forwardRef(function (_a, ref) {
    var isOpen = _a.isOpen, onOpenChange = _a.onOpenChange, children = _a.children, portalTo = _a.portalTo, portalToSelector = _a.portalToSelector, dropdownContent = _a.dropdownContent, className = _a.className, contentClassName = _a.contentClassName, openWhenClickInside = _a.openWhenClickInside, openWhenFocusInside = _a.openWhenFocusInside, onMouseDown = _a.onMouseDown, childRootElementSelector = _a.childRootElementSelector, closeOnScroll = _a.closeOnScroll, closeWhenClickInside = _a.closeWhenClickInside, onFocus = _a.onFocus, shouldScrollContent = _a.shouldScrollContent, htmlProps = tslib_1.__rest(_a, ["isOpen", "onOpenChange", "children", "portalTo", "portalToSelector", "dropdownContent", "className", "contentClassName", "openWhenClickInside", "openWhenFocusInside", "onMouseDown", "childRootElementSelector", "closeOnScroll", "closeWhenClickInside", "onFocus", "shouldScrollContent"]);
    var rootRef = React.useRef(null);
    var elementToRenderBelowRef = React.useRef();
    var modalRef = React.useRef();
    var _b = useBoundingClientRect_1.useBoundingClientRect(elementToRenderBelowRef), rootRect = _b[0], getRootRectContentRect = _b[1];
    var _c = useBoundingClientRect_1.useBoundingClientRect(modalRef), modalRect = _c[0], getModalRectContentRect = _c[1];
    var windowSize = useWindowSize_1.useWindowSize();
    hooks_1.useResizeObserver(getRootRectContentRect, {}, rootRef);
    var _d = React.useState(false), clicking = _d[0], setClicking = _d[1];
    var setModalRef = React.useCallback(function (node) {
        modalRef.current = node;
        getRootRectContentRect();
        getModalRectContentRect();
    }, [getRootRectContentRect, getModalRectContentRect]);
    React.useEffect(function () {
        getRootRectContentRect();
        getModalRectContentRect();
    }, [isOpen]);
    React.useImperativeHandle(ref, function () { return ({ rootRef: rootRef, modalRef: modalRef }); }, [rootRef, modalRef]);
    var top = React.useMemo(function () { return rootRect && modalRect && maths_1.Maths.clamp(rootRect.top + rootRect.height, 0, (windowSize.innerHeight || 0) - modalRect.height); }, [rootRect === null || rootRect === void 0 ? void 0 : rootRect.top, rootRect === null || rootRect === void 0 ? void 0 : rootRect.height, modalRect === null || modalRect === void 0 ? void 0 : modalRect.height, windowSize.innerHeight]);
    var left = React.useMemo(function () { return rootRect && modalRect && maths_1.Maths.clamp(rootRect.left, 0, (windowSize.innerWidth || 0) - modalRect.width); }, [rootRect === null || rootRect === void 0 ? void 0 : rootRect.left, modalRect === null || modalRect === void 0 ? void 0 : modalRect.width, windowSize.innerWidth]);
    var width = React.useMemo(function () { return rootRect === null || rootRect === void 0 ? void 0 : rootRect.width; }, [rootRect === null || rootRect === void 0 ? void 0 : rootRect.width]);
    // assign the element given to render the dropdown items below to a ref so we don't have to reselect it every time
    React.useLayoutEffect(function () {
        var _a;
        if (rootRef.current) {
            elementToRenderBelowRef.current = childRootElementSelector
                ? (_a = rootRef.current.querySelector(childRootElementSelector)) !== null && _a !== void 0 ? _a : rootRef.current
                : rootRef.current;
        }
    }, [childRootElementSelector]);
    var onScrollDocument = React.useCallback(function (event) {
        if ((closeOnScroll &&
            // check if scrolling element is inside the dropdown content
            event.target instanceof HTMLDivElement &&
            !event.target.classList.contains('arm-dropdown-content')) ||
            !(event.target instanceof HTMLDivElement)) {
            onOpenChange(false);
        }
    }, [onOpenChange, closeOnScroll]);
    React.useEffect(function () {
        var _a, _b;
        if (isOpen && closeOnScroll) {
            (_a = globals_1.Globals.Document) === null || _a === void 0 ? void 0 : _a.addEventListener('scroll', onScrollDocument, { capture: true, passive: true });
            (_b = globals_1.Globals.Document) === null || _b === void 0 ? void 0 : _b.body.addEventListener('resize', onScrollDocument, { capture: true, passive: true });
            return function () {
                var _a, _b;
                (_a = globals_1.Globals.Document) === null || _a === void 0 ? void 0 : _a.removeEventListener('scroll', onScrollDocument, { capture: true });
                (_b = globals_1.Globals.Document) === null || _b === void 0 ? void 0 : _b.body.removeEventListener('resize', onScrollDocument, { capture: true });
            };
        }
    }, [isOpen, closeOnScroll]);
    var onMouseDownEvent = React.useCallback(function (event) {
        if (openWhenClickInside) {
            onOpenChange(closeWhenClickInside ? !isOpen : true);
            setClicking(true);
        }
        onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown(event);
    }, [openWhenClickInside, closeWhenClickInside, onOpenChange, onMouseDown, isOpen]);
    var onFocusEvent = React.useCallback(function (event) {
        if (openWhenFocusInside) {
            onOpenChange(true);
        }
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
    }, [openWhenFocusInside, onOpenChange, onFocus]);
    var onScrollContent = React.useCallback(function (event) { return event.stopPropagation(); }, []);
    var onMouseDownContent = React.useCallback(function (event) { return event.stopPropagation(); }, []);
    var modalStyle = React.useMemo(function () {
        return ({
            '--arm-dropdown-top': top + "px",
            '--arm-dropdown-left': left + "px",
            '--arm-dropdown-width': width + "px",
        });
    }, [top, left, width]);
    var modalOnOpenChange = React.useCallback(function (newIsOpen) {
        if (clicking && !newIsOpen) {
            setClicking(false);
        }
        else {
            onOpenChange(newIsOpen);
        }
    }, [onOpenChange, clicking]);
    return (React.createElement("div", tslib_1.__assign({}, htmlProps, { className: classNames_1.ClassNames.concat('arm-dropdown', className), onMouseDown: onMouseDownEvent, ref: rootRef, "data-is-open": isOpen, onFocus: onFocusEvent }),
        children,
        React.createElement(modal_1.Modal, { portalTo: portalTo, portalToSelector: portalToSelector, className: classNames_1.ClassNames.concat('arm-dropdown-content', contentClassName), style: modalStyle, ref: setModalRef, isOpen: isOpen, onOpenChange: modalOnOpenChange, onScroll: onScrollContent, onMouseDown: onMouseDownContent, closeOnWindowBlur: true, closeOnWindowClick: true, closeOnBackgroundClick: false, "data-scrolling": shouldScrollContent },
            React.createElement(autoResizer_1.AutoResizer, null,
                React.createElement("div", { className: "arm-dropdown-content-inner" }, dropdownContent)))));
});
exports.Dropdown.defaultProps = {
    openWhenFocusInside: true,
    openWhenClickInside: true,
    closeWhenClickInside: true,
    shouldScrollContent: true,
};
