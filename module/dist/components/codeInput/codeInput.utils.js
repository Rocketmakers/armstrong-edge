"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeInputUtils = void 0;
var CodeInputUtils;
(function (CodeInputUtils) {
    CodeInputUtils.getLengthFromPart = function (part) {
        if (typeof part === 'number') {
            return part;
        }
        if (typeof part === 'string') {
            return 0;
        }
        return part.length;
    };
})(CodeInputUtils = exports.CodeInputUtils || (exports.CodeInputUtils = {}));
