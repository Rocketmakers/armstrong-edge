"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebounce = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
/**
 * Like a state hook, but also exports a "throttled" value (set after x amount of inactivity through the setter method)
 * @param throttleTime (optional) How long a period of inactivity before setting the throttled value
 * @param hardValue (optional) An initial value and a live value (will set both actual and throttled values if it changes).
 * @param onChange (optional) A callback function which will receive the throttled value when it changes.
 * @returns An array for deconstruction. [the actual value, the setter for the actual value, the throttled value, a reset method to return to the hard value]
 */
function useDebounce(throttleTime, hardValue, onChange) {
    if (throttleTime === void 0) { throttleTime = 500; }
    var _a = React.useState(hardValue), actualValue = _a[0], setActualValue = _a[1];
    var _b = React.useState(hardValue), throttledValue = _b[0], setThrottledValue = _b[1];
    var setValue = React.useCallback(function () {
        setThrottledValue(actualValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(actualValue);
    }, [actualValue, setThrottledValue, onChange]);
    var resetToHardValue = React.useCallback(function () {
        setActualValue(hardValue);
        setThrottledValue(hardValue);
    }, [hardValue, setActualValue, setThrottledValue]);
    React.useEffect(function () {
        resetToHardValue();
    }, [hardValue]);
    React.useEffect(function () {
        var throttleTimer = setTimeout(setValue, throttleTime);
        return function () { return clearTimeout(throttleTimer); };
    }, [actualValue]);
    return [actualValue, setActualValue, throttledValue, resetToHardValue];
}
exports.useDebounce = useDebounce;
