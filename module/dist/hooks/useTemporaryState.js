"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTemporaryState = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var useTimeout_1 = require("./useTimeout");
/**
 * useState but the state returns to initialValue after a given amount of time from whenever setState is called
 * @param initialValue the initial value of the state - the value gets changed back to this after the amount of time given
 * @param time the amount of time in ms to wait to return back to initialValue
 */
function useTemporaryState(initialValue, time, onReset) {
    if (time === void 0) { time = 500; }
    var _a = React.useState(initialValue), value = _a[0], setValue = _a[1];
    var onTimeout = React.useCallback(function () {
        setValue(initialValue);
        onReset === null || onReset === void 0 ? void 0 : onReset();
    }, [onReset, initialValue]);
    var _b = useTimeout_1.useTimeout(time, onTimeout), setTimeout = _b.set, clearTimeout = _b.clear;
    var set = React.useCallback(function (newValue) {
        setValue(newValue);
        setTimeout();
    }, [setTimeout]);
    var clear = React.useCallback(function () {
        setValue(initialValue);
        clearTimeout();
    }, [clearTimeout]);
    return [value, set, clear];
}
exports.useTemporaryState = useTemporaryState;
