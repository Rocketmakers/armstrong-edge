"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollToEndListener = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var useIsInViewport_1 = require("../../hooks/useIsInViewport");
var status_1 = require("../status");
/**
 * Fire a callback when the bottom of its wrapper comes into view by rendering a div at the end with an intersection observer
 *
 * Can either wrap up some children, rendering the listener itself after those children, or can just be put at the bottom of a list
 *
 * As this doesn't render a wrapping div, it's up to the styling of whatever you're rendering this component inside to ensure the .arm-scroll-to-end-listener-listener div is rendered at the bottom of the container
 */
var ScrollToEndListener = function (_a) {
    var children = _a.children, onScrollToEnd = _a.onScrollToEnd, rootMargin = _a.rootMargin, statusProps = tslib_1.__rest(_a, ["children", "onScrollToEnd", "rootMargin"]);
    var ref = React.useRef(null);
    useIsInViewport_1.useInViewport(ref, { rootMargin: rootMargin, onEnter: onScrollToEnd });
    return (React.createElement(React.Fragment, null,
        children,
        (statusProps.error || statusProps.pending) && (React.createElement("div", { className: "arm-scroll-to-end-listener-status" },
            React.createElement(status_1.Status, tslib_1.__assign({}, statusProps)))),
        React.createElement("div", { className: "arm-scroll-to-end-listener-listener", ref: ref })));
};
exports.ScrollToEndListener = ScrollToEndListener;
exports.ScrollToEndListener.defaultProps = {
    rootMargin: '200px',
};
