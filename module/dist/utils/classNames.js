"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassNames = void 0;
var tslib_1 = require("tslib");
var ClassNames;
(function (ClassNames) {
    /**
     * Concatenate classnames into a single string
     */
    function concat() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var classes = [];
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var argument = args_1[_a];
            if (!argument) {
                continue;
            }
            if (typeof argument === 'string') {
                // if string add to output
                classes.push(argument);
            }
            else if (Array.isArray(argument)) {
                // if array, spread into output
                classes = tslib_1.__spreadArray(tslib_1.__spreadArray([], classes), [concat(argument)]);
            }
            else if (typeof argument === 'object') {
                for (var key in argument) {
                    // if object,
                    if (argument[key]) {
                        classes.push(key);
                    }
                }
            }
        }
        return classes.join(' ');
    }
    ClassNames.concat = concat;
})(ClassNames = exports.ClassNames || (exports.ClassNames = {}));
