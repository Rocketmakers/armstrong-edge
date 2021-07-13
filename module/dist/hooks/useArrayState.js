"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useArrayObjectState = exports.useArrayState = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var arrayStateReducer = function (equalityComparer, initialValue) {
    return function (state, action) {
        switch (action.type) {
            case 'push':
                return tslib_1.__spreadArray(tslib_1.__spreadArray([], state.filter(function (item) { return !equalityComparer(item, action.payload); })), [action.payload]);
            case 'pull':
                return state.filter(function (item) { return !equalityComparer(item, action.payload); });
            case 'clear':
                return initialValue;
            default:
                return state;
        }
    };
};
/** Store an array value in state, and access push, pull, clear methods to interact with that state - all contained within a reducer, meaning that multiple state updates can happen in a single thread without any unusual behaviors */
var useArrayState = function (
/** The initial value of the state */
initialValue, 
/** Check if a provided element is the same as one that already exists, to ensure no duplicates are added, and to ensure the correc thing is deleted */
equalityComparer) {
    if (equalityComparer === void 0) { equalityComparer = function (a, b) { return a === b; }; }
    var _a = React.useReducer(arrayStateReducer(equalityComparer, initialValue), initialValue), currentValue = _a[0], dispatchAction = _a[1];
    var contains = React.useCallback(function (value) { return !!currentValue.find(function (item) { return equalityComparer(value, item); }); }, [currentValue, equalityComparer]);
    var push = React.useCallback(function (value) {
        dispatchAction({ type: 'push', payload: value });
    }, [currentValue, equalityComparer]);
    var pull = React.useCallback(function (value) {
        dispatchAction({ type: 'pull', payload: value });
    }, [currentValue, equalityComparer]);
    var clear = React.useCallback(function () {
        dispatchAction({ type: 'clear' });
    }, [currentValue, equalityComparer]);
    var toggle = React.useCallback(function (value) { return (contains(value) ? pull(value) : push(value)); }, [currentValue, equalityComparer]);
    return [currentValue, { push: push, pull: pull, toggle: toggle, contains: contains, clear: clear }];
};
exports.useArrayState = useArrayState;
/** Store an array value of objects in a state, with a key used to compare values when removing and adding */
var useArrayObjectState = function (initialValue, key) {
    var equalityComparer = React.useCallback(function (a, b) { return a[key] === b[key]; }, [key]);
    return exports.useArrayState(initialValue, equalityComparer);
};
exports.useArrayObjectState = useArrayObjectState;
