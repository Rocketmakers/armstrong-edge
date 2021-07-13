"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOverridableState = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
/**
 * A hook wrapping up a piece of state that is optionally overriden.
 * Used to allow components to use some internal state that can be overriden by some props, I.E. an internal binder that can be made external
 */
function useOverridableState(initialState, overrideValue, overrideSetValue) {
    var _a = React.useState(initialState), value = _a[0], setValue = _a[1];
    var overridenValue = overrideSetValue ? overrideValue : value;
    var setOverridenValue = overrideSetValue !== null && overrideSetValue !== void 0 ? overrideSetValue : setValue;
    return [overridenValue, setOverridenValue];
}
exports.useOverridableState = useOverridableState;
