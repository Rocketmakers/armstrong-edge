"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var hooks_1 = require("../../hooks");
var useBoundingClientRect_1 = require("../../hooks/useBoundingClientRect");
var useIsFocused_1 = require("../../hooks/useIsFocused");
var useIsHovering_1 = require("../../hooks/useIsHovering");
var useWindowSize_1 = require("../../hooks/useWindowSize");
var classNames_1 = require("../../utils/classNames");
var modal_1 = require("../modal");
/** Portals a piece of text or some JSX into a floating element next to its children when the children are hovered or focused */
exports.Tooltip = React.forwardRef(function (_a, ref) {
    var content = _a.content, className = _a.className, children = _a.children, portalTo = _a.portalTo, portalToSelector = _a.portalToSelector, tooltipPosition = _a.tooltipPosition, wrapperAttributes = _a.wrapperAttributes, edgeDetectionMargin = _a.edgeDetectionMargin, isOpenProp = _a.isOpen, openOnHover = _a.openOnHover, openOnFocus = _a.openOnFocus, id = _a.id, nativeProps = tslib_1.__rest(_a, ["content", "className", "children", "portalTo", "portalToSelector", "tooltipPosition", "wrapperAttributes", "edgeDetectionMargin", "isOpen", "openOnHover", "openOnFocus", "id"]);
    var rootRef = React.useRef(null);
    var modalRef = React.useRef();
    var _b = useBoundingClientRect_1.useBoundingClientRect(rootRef), rootRect = _b[0], getRootRectContentRect = _b[1];
    var modalRect = useBoundingClientRect_1.useBoundingClientRect(modalRef)[0];
    var windowSize = useWindowSize_1.useWindowSize();
    var setModalRef = React.useCallback(function (node) {
        modalRef.current = node;
        getRootRectContentRect();
    }, [getRootRectContentRect]);
    React.useImperativeHandle(ref, function () { return ({ rootRef: rootRef, modalRef: modalRef }); }, [rootRef, modalRef]);
    var _c = useIsHovering_1.useIsHovering(), isHovering = _c[0], hoveringProps = _c[1];
    var _d = useIsFocused_1.useIsFocused(), isFocused = _d[0], focusedProps = _d[1];
    var isOpen = isOpenProp || (openOnHover && isHovering) || (openOnFocus && isFocused) || false;
    /** Check if the tooltip is inside the screen for a given top and left */
    var getIsInside = React.useCallback(function (top, left) {
        return top > edgeDetectionMargin &&
            top + ((modalRect === null || modalRect === void 0 ? void 0 : modalRect.height) || 0) < windowSize.innerHeight - edgeDetectionMargin &&
            left > edgeDetectionMargin &&
            left + ((modalRect === null || modalRect === void 0 ? void 0 : modalRect.width) || 0) < windowSize.innerWidth - edgeDetectionMargin;
    }, [modalRect === null || modalRect === void 0 ? void 0 : modalRect.width, modalRect === null || modalRect === void 0 ? void 0 : modalRect.height, windowSize.innerWidth, windowSize.innerHeight, edgeDetectionMargin]);
    /** Get left and top values when placing the tooltip in a tooltipPosition */
    var getPosition = React.useCallback(function (position) {
        switch (position) {
            case 'above': {
                var top_1 = rootRect.top - modalRect.height;
                var left = rootRect.left + rootRect.width / 2 - modalRect.width / 2;
                return { top: top_1, left: left, outside: !getIsInside(top_1, left), position: 'above' };
            }
            case 'below': {
                var top_2 = rootRect.top + rootRect.height;
                var left = rootRect.left + rootRect.width / 2 - modalRect.width / 2;
                return { top: top_2, left: left, outside: !getIsInside(top_2, left), position: 'below' };
            }
            case 'left': {
                var left = rootRect.left - modalRect.width;
                var top_3 = rootRect.top + rootRect.height / 2 - modalRect.height / 2;
                return { left: left, top: top_3, outside: !getIsInside(top_3, left), position: 'left' };
            }
            case 'right': {
                var left = rootRect.left + rootRect.width;
                var top_4 = rootRect.top + rootRect.height / 2 - modalRect.height / 2;
                return { left: left, top: top_4, outside: !getIsInside(top_4, left), position: 'right' };
            }
            default: {
                break;
            }
        }
    }, [
        windowSize.innerWidth,
        windowSize.innerHeight,
        rootRect === null || rootRect === void 0 ? void 0 : rootRect.left,
        rootRect === null || rootRect === void 0 ? void 0 : rootRect.top,
        rootRect === null || rootRect === void 0 ? void 0 : rootRect.height,
        rootRect === null || rootRect === void 0 ? void 0 : rootRect.width,
        modalRect === null || modalRect === void 0 ? void 0 : modalRect.height,
        modalRect === null || modalRect === void 0 ? void 0 : modalRect.width,
    ]);
    /** Loop through the given positions and use the first one where the tooltip is not off the edge */
    var position = React.useMemo(function () {
        var positions = typeof tooltipPosition === 'string' ? [tooltipPosition] : tooltipPosition;
        if (positions === null || positions === void 0 ? void 0 : positions.length) {
            for (var index = 0; index < positions.length; index += 1) {
                var positionOption = positions[index];
                var calculatedPosition = getPosition(positionOption);
                // if position isn't outside the screen or if it's just the last option in the array of possible positions
                if (!(calculatedPosition === null || calculatedPosition === void 0 ? void 0 : calculatedPosition.outside) || index === positions.length - 1) {
                    return calculatedPosition;
                }
            }
        }
    }, [getPosition, tooltipPosition]);
    var style = React.useMemo(function () {
        return ({
            '--arm-tooltip-left': ((position === null || position === void 0 ? void 0 : position.left) || 0) + "px",
            '--arm-tooltip-top': ((position === null || position === void 0 ? void 0 : position.top) || 0) + "px",
        });
    }, [position]);
    var generatedId = hooks_1.useGeneratedId(id);
    return (React.createElement("div", tslib_1.__assign({}, (wrapperAttributes || {}), { className: classNames_1.ClassNames.concat('arm-tooltip-wrapper', wrapperAttributes === null || wrapperAttributes === void 0 ? void 0 : wrapperAttributes.className), ref: rootRef }, hoveringProps, focusedProps, { "aria-describedby": generatedId }),
        children,
        React.createElement(modal_1.Modal, tslib_1.__assign({ className: classNames_1.ClassNames.concat('arm-tooltip', className), ref: setModalRef, portalTo: portalTo, portalToSelector: portalToSelector, isOpen: isOpen, closeOnBackgroundClick: false, style: style, "data-position": position === null || position === void 0 ? void 0 : position.position, role: "tooltip", "data-is-text": typeof content === 'string' || typeof content === 'number' }, nativeProps),
            React.createElement("div", { id: generatedId, className: "arm-tooltip-inner" }, typeof content === 'string' || typeof content === 'number' ? React.createElement("p", null, content) : content))));
});
exports.Tooltip.defaultProps = {
    tooltipPosition: ['below', 'right', 'above', 'left'],
    edgeDetectionMargin: 5,
    openOnHover: true,
};
