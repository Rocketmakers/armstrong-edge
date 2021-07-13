"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Objects = void 0;
var tslib_1 = require("tslib");
var Objects;
(function (Objects) {
    /**
     * Creates a unique string based on contents of an object.
     * Can be used as a dependency for hooks which take non-memoized objects as a parameter.
     * @param object The object to create a content dependency for
     */
    function contentDependency(object) {
        if (!object) {
            return '';
        }
        if (Array.isArray(object)) {
            return JSON.stringify(tslib_1.__spreadArray([], object).sort());
        }
        return JSON.stringify(Object.keys(object)
            .sort()
            .reduce(function (memo, key) {
            var _a;
            return (tslib_1.__assign(tslib_1.__assign({}, memo), (_a = {}, _a[key] = object[key], _a)));
        }, {}));
    }
    Objects.contentDependency = contentDependency;
    /** Check if an object is an object and is not an array */
    function isObject(item) {
        return !!item && typeof item === 'object' && !Array.isArray(item);
    }
    Objects.isObject = isObject;
    function mergeDeep(target, keyChain, value) {
        var output = (Array.isArray(target) || Number.isInteger(keyChain === null || keyChain === void 0 ? void 0 : keyChain[0]) ? tslib_1.__spreadArray([], (target || [])) : tslib_1.__assign({}, (target || {})));
        var bookmarkRef = output;
        for (var i = 0; i < keyChain.length; i += 1) {
            var key = keyChain[i];
            if (i === keyChain.length - 1) {
                if (Array.isArray(value)) {
                    bookmarkRef[key] = tslib_1.__spreadArray([], value);
                }
                else if (typeof value === 'object') {
                    bookmarkRef[key] = tslib_1.__assign({}, value);
                }
                else {
                    bookmarkRef[key] = value;
                }
            }
            else if (Array.isArray(bookmarkRef[key])) {
                bookmarkRef[key] = tslib_1.__spreadArray([], bookmarkRef[key]);
                bookmarkRef = bookmarkRef[key];
            }
            else if (typeof bookmarkRef[key] === 'object') {
                bookmarkRef[key] = tslib_1.__assign({}, bookmarkRef[key]);
                bookmarkRef = bookmarkRef[key];
            }
            else if (Number.isInteger(key)) {
                bookmarkRef[key] = tslib_1.__spreadArray([], bookmarkRef[key]);
                bookmarkRef = bookmarkRef[key];
            }
            else {
                bookmarkRef[key] = tslib_1.__assign({}, bookmarkRef[key]);
                bookmarkRef = bookmarkRef[key];
            }
        }
        return output;
    }
    Objects.mergeDeep = mergeDeep;
    /** Perform an operation on the keys of an object and return an array of the results */
    Objects.mapKeys = function (object, callback) { return Object.keys(object).map(function (key, index) { return callback(key, object[key], index); }); };
    /** Perform an operation on the keys of an object */
    Objects.forEachKeys = function (object, callback) { return Object.keys(object).forEach(function (key, index) { return callback(key, object[key], index); }); };
})(Objects = exports.Objects || (exports.Objects = {}));
