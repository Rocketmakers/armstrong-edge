"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsFocused = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var useEventListener_1 = require("./useEventListener");
/**
 * Get, in React state, whether an element is being focused.
 * Can be used by spreading the props returned from the second element in the returned array onto the element you want to listen to,
 * or by passing in a ref
 */
var useIsFocused = function (ref) {
    var _a = React.useState(false), isFocused = _a[0], setIsFocused = _a[1];
    var onFocus = React.useCallback(function () {
        setIsFocused(true);
    }, []);
    var onBlur = React.useCallback(function () {
        setIsFocused(false);
    }, []);
    useEventListener_1.useEventListener('focus', onFocus, (ref === null || ref === void 0 ? void 0 : ref.current) || undefined);
    useEventListener_1.useEventListener('blur', onBlur, (ref === null || ref === void 0 ? void 0 : ref.current) || undefined);
    return [isFocused, { onFocus: onFocus, onBlur: onBlur }];
};
exports.useIsFocused = useIsFocused;
