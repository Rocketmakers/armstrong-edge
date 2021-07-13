"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsHovering = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var _1 = require(".");
/**
 * Get, in React state, whether an element is being hovered.
 * Can be used by spreading the props returned from the second element in the returned array onto the element you want to listen to,
 * or by passing in a ref
 */
function useIsHovering(ref) {
    var _a = React.useState(false), isHovering = _a[0], setIsHovering = _a[1];
    var onMouseEnter = React.useCallback(function () {
        setIsHovering(true);
    }, []);
    var onMouseLeave = React.useCallback(function () {
        setIsHovering(false);
    }, []);
    _1.useEventListener('mouseEnter', onMouseEnter, (ref === null || ref === void 0 ? void 0 : ref.current) || undefined);
    _1.useEventListener('mouseLeave', onMouseLeave, (ref === null || ref === void 0 ? void 0 : ref.current) || undefined);
    return [isHovering, { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }];
}
exports.useIsHovering = useIsHovering;
