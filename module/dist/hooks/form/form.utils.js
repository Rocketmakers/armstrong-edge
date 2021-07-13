"use strict";
/** ******************************************************
 * FORM - Utilities file.
 * A set of helper functions to support the form logic.
 ******************************************************* */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBindingProps = exports.valueByKeyChain = exports.validationErrorsByKeyChain = exports.validationKeyStringFromKeyChain = void 0;
/**
 * Converts a keyChain into a validation error key string
 * @param keyChain The chain of keys passed to `formProp` and used to access the property within a nested form object.
 * @param mode (dots|brackets) Whether to use dot syntax for array indexes, or square brackets.
 * @returns The key string
 */
function validationKeyStringFromKeyChain(keyChain, mode) {
    switch (mode) {
        case 'dots':
            return keyChain.filter(function (key) { return !!key; }).join('.');
        case 'brackets':
            return keyChain.reduce(function (attrString, key) {
                if (typeof key === 'string') {
                    return "" + attrString + (attrString ? "." : '') + key;
                }
                if (typeof key === 'number') {
                    return attrString + "[" + key + "]";
                }
                return attrString;
            }, '');
        default:
            throw new Error("Unsupported mode: " + mode + " sent to validation key factory");
    }
}
exports.validationKeyStringFromKeyChain = validationKeyStringFromKeyChain;
/**
 * Filters a set of validation errors based on the `keyChain` of the property.
 * @param rootErrors The root set of validation errors for the entire form.
 * @param keyChain The chain of keys passed to `formProp` and used to access the property within a nested form object.
 * @returns {Array} A filtered set of validation errors that apply to the property in question.
 */
function validationErrorsByKeyChain(rootErrors, keyChain) {
    if (rootErrors === void 0) { rootErrors = []; }
    if (keyChain === void 0) { keyChain = []; }
    var keyChainAttrStringDots = validationKeyStringFromKeyChain(keyChain, 'dots');
    var keyChainAttrStringSquareArray = validationKeyStringFromKeyChain(keyChain, 'brackets');
    return rootErrors.filter(function (error) { return error.key === keyChainAttrStringDots || error.key === keyChainAttrStringSquareArray; });
}
exports.validationErrorsByKeyChain = validationErrorsByKeyChain;
/**
 * Returns a specific value from within a nested form state based on a `keyChain`.
 * @param state The form state object to search.
 * @param keyChain The chain of keys passed to `formProp` and used to access the property within a nested form object.
 * @returns The value if one is set, else undefined.
 */
function valueByKeyChain(state, keyChain) {
    return keyChain.reduce(function (value, key) { return value === null || value === void 0 ? void 0 : value[key]; }, state);
}
exports.valueByKeyChain = valueByKeyChain;
/**
 * Detects whether something is a set of binding props or not.
 * @param item The item to check.
 * @returns {boolean} `true` if the item passed conforms to the binding props interface `IBindingProps` else `false`. Also casts if `true`.
 */
function isBindingProps(item) {
    return !!(item === null || item === void 0 ? void 0 : item.setValue) && !!(item === null || item === void 0 ? void 0 : item.dispatch) && !!(item === null || item === void 0 ? void 0 : item.keyChain) && !!(item === null || item === void 0 ? void 0 : item.myValidationErrors);
}
exports.isBindingProps = isBindingProps;
