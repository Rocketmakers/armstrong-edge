"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arrays = void 0;
var tslib_1 = require("tslib");
var Arrays;
(function (Arrays) {
    /** Convert an array of arrays into a single array */
    function flatten() {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        return arrays.reduce(function (output, current) { return (current ? tslib_1.__spreadArray(tslib_1.__spreadArray([], output), current) : output); }, []);
    }
    Arrays.flatten = flatten;
    /** Turn an array into a dictionary of items in that array by a given key */
    function arrayToDictionary(array, getKey) {
        return array.reduce(function (dictionary, currentValue) {
            var _a;
            var key = typeof getKey === 'function' ? getKey(currentValue) : currentValue[getKey];
            return tslib_1.__assign(tslib_1.__assign({}, dictionary), (_a = {}, _a[key] = currentValue, _a));
        }, {});
    }
    Arrays.arrayToDictionary = arrayToDictionary;
    /** Sort an array into a dictionary of arrays keyed by a value to sort on */
    function arrayToArrayDictionary(array, getKey) {
        return array.reduce(function (dictionary, currentValue) {
            var _a;
            var key = getKey(currentValue);
            return tslib_1.__assign(tslib_1.__assign({}, dictionary), (_a = {}, _a[key] = tslib_1.__spreadArray(tslib_1.__spreadArray([], (dictionary[key] || [])), [currentValue]), _a));
        }, {});
    }
    Arrays.arrayToArrayDictionary = arrayToArrayDictionary;
    /** Sort an array into an array of objects with a key and an array of items on it */
    function arrayToArraysByKey(array, getKey) {
        var dictionary = arrayToArrayDictionary(array, getKey);
        return Object.keys(dictionary).map(function (key) { return ({ key: key, items: dictionary[key] }); });
    }
    Arrays.arrayToArraysByKey = arrayToArraysByKey;
    /** A variant of findIndex that returns the index of the last item in the array where the callback returns true */
    function findLastIndex(array, callback) {
        return array.reduce(function (output, item, index) { return (callback(item) ? index : output); }, -1);
    }
    Arrays.findLastIndex = findLastIndex;
    /**
     * Re-indexes an array from a specific index point.
     * - Does not mutate the passed array, returns a new one.
     * @example If `["a", "b", "c", "d", "e"]` was passed with a `startFrom` index of `2`, the result would be `["c", "d", "e", "a", "b"]`
     * @param array The array to clone and re-index.
     * @param startFrom The current index of the new first item.
     * @returns A new array, re-indexed with the item at the `startFrom` index now first.
     */
    function reIndex(array, startFrom) {
        if (startFrom === 0) {
            return tslib_1.__spreadArray([], array);
        }
        return tslib_1.__spreadArray(tslib_1.__spreadArray([], array.slice(startFrom)), array.slice(0, startFrom));
    }
    Arrays.reIndex = reIndex;
    /**
     * A version of `map` which loops a specified number of times and returns the index as the map arg.
     * - Useful when you want to run a `map` x number of times but you don't have a specific array to loop.
     * @param count The number of times to run the mapper.
     * @param mapper A function to call x number of times (x = `count`).
     * @returns The array of newly mapped items.
     */
    function repeat(count, mapper) {
        var array = [];
        for (var i = 0; i < count; i += 1) {
            array.push(i);
        }
        return array.map(mapper);
    }
    Arrays.repeat = repeat;
    /** Utils for working with arrays of arrays - useful when an array has been split into groups but you want to interact with it as if it's still a single array, I.E using a single overall index */
    var NestedArrays;
    (function (NestedArrays) {
        /**
         * Get the overall index of an item inside an array of arrays
         *
         * I.E. [[0,1,2], [3,4], [5,6,7]]
         */
        function getOverallIndex(innerIndex, outerIndex, arrays) {
            return arrays.slice(0, outerIndex).reduce(function (output, array) { return array.items.length + output; }, 0) + innerIndex;
        }
        NestedArrays.getOverallIndex = getOverallIndex;
        /** Get the item inside an array of arrays at an overall index */
        function getAtOverallIndex(index, arrays) {
            var totalIndex = 0;
            for (var _i = 0, arrays_1 = arrays; _i < arrays_1.length; _i++) {
                var array = arrays_1[_i];
                var newIndex = totalIndex + array.items.length;
                if (index < newIndex) {
                    return array.items[index - totalIndex];
                }
                totalIndex = newIndex;
            }
        }
        NestedArrays.getAtOverallIndex = getAtOverallIndex;
    })(NestedArrays = Arrays.NestedArrays || (Arrays.NestedArrays = {}));
})(Arrays = exports.Arrays || (exports.Arrays = {}));
