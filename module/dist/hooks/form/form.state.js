"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationReducer = exports.dataReducer = void 0;
var tslib_1 = require("tslib");
/** ******************************************************
 * FORM - State file.
 * Contains everything related to form state such as the reducer and action factories.
 ******************************************************* */
var objects_1 = require("../../utils/objects");
/**
 * The reducer for the form state object
 * @param state The current form state.
 * @param action The action to respond to.
 * @returns The updated state.
 */
function dataReducer(state, action) {
    var _a;
    switch (action.type) {
        case 'set-one':
            return (Array.isArray(state) || Number.isInteger(action.propertyKey)
                ? (state || []).map(function (_, i) { return (i === action.propertyKey ? action.value : state[i]); })
                : tslib_1.__assign(tslib_1.__assign({}, (state || {})), (_a = {}, _a[action.propertyKey] = action.value, _a)));
        case 'set-path':
            return objects_1.Objects.mergeDeep(state, action.keyChain, action.value);
        case 'set-all':
            return (Array.isArray(action.data) ? tslib_1.__spreadArray([], action.data) : tslib_1.__assign({}, action.data));
        default:
            return state;
    }
}
exports.dataReducer = dataReducer;
function validationReducer(state, action) {
    var _a;
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'add-validation':
            return tslib_1.__spreadArray(tslib_1.__spreadArray([], state), ((_a = action.errors) !== null && _a !== void 0 ? _a : []));
        case 'clear-validation':
            if (!action.key) {
                return [];
            }
            return state.filter(function (e) { return e.key !== action.key; });
        default:
            return state;
    }
}
exports.validationReducer = validationReducer;
