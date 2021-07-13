"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThrottle = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
/**
 * Like a state hook, but also exports a "throttled" value which changes at regular intervals
 * @param throttleTime How often the throttled value will update
 * @param hardValue An initial value and a live value (will set both actual and throttled values if it changes).
 * @param onChange (optional) A callback function which will receive the throttled value when it changes.
 * @returns An array for deconstruction. [the actual value, the setter for the actual value, the throttled value, a reset method to return to the hard value]
 */
function useThrottle(throttleTime, hardValue, onChange) {
    if (throttleTime === void 0) { throttleTime = 500; }
    var _a = React.useState(hardValue), actualValue = _a[0], setActualValue = _a[1];
    var _b = React.useState(hardValue), throttledValue = _b[0], setThrottledValue = _b[1];
    var actualValueRef = React.useRef(actualValue);
    actualValueRef.current = actualValue;
    var timeout = React.useRef();
    var resetTimeout = React.useCallback(function () {
        if (timeout.current) {
            clearTimeout(timeout.current);
            timeout.current = undefined;
        }
    }, []);
    var resetToHardValue = React.useCallback(function () {
        setActualValue(hardValue);
        setThrottledValue(hardValue);
    }, [hardValue, setActualValue, setThrottledValue]);
    React.useEffect(function () {
        resetToHardValue();
    }, [hardValue]);
    React.useEffect(function () {
        if (!timeout.current) {
            timeout.current = setTimeout(function () {
                setThrottledValue(actualValueRef.current);
                onChange === null || onChange === void 0 ? void 0 : onChange(actualValueRef.current);
                resetTimeout();
            }, throttleTime);
        }
    }, [actualValue, throttleTime, setThrottledValue, resetTimeout]);
    React.useEffect(function () { return function () {
        resetTimeout();
    }; }, []);
    return [actualValue, setActualValue, throttledValue, resetToHardValue];
}
exports.useThrottle = useThrottle;
