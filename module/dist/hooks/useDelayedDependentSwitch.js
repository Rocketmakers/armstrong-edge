"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDelayedDependentSwitch = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var useDidUpdateEffect_1 = require("./useDidUpdateEffect");
var useTemporaryState_1 = require("./useTemporaryState");
/**
 * A hook which takes a piece of boolean state and, when that is set to false, returns another piece of state which is true for a given time to act as a "closing" state
 *
 * Returns an array with two booleans, the first is the given value with it being set to false delayed for a render while settingToFalse is set to true, the second is the value for isSettingFalse which, when value is set to false, is true for the given length of time
 */
function useDelayedDependentSwitch(value, time) {
    var refValue = react_1.default.useRef(value);
    var _a = useTemporaryState_1.useTemporaryState(false, time, function () {
        refValue.current = false;
    }), settingToFalse = _a[0], setSettingToFalse = _a[1], cancelSettingToFalse = _a[2];
    useDidUpdateEffect_1.useDidUpdateEffect(function () {
        refValue.current = value;
        if (value) {
            cancelSettingToFalse();
        }
        else {
            setSettingToFalse(true);
        }
    }, [value]);
    return [value || refValue.current, settingToFalse];
}
exports.useDelayedDependentSwitch = useDelayedDependentSwitch;
