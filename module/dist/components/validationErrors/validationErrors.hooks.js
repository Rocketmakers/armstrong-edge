"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMyValidationErrorMessages = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var arrays_1 = require("../../utils/arrays");
/** For internal component use - combine validation errors from a prop with those from a bind */
function useMyValidationErrorMessages(bind, validationErrorMessages) {
    return React.useMemo(function () {
        return arrays_1.Arrays.flatten(validationErrorMessages, bind === null || bind === void 0 ? void 0 : bind.myValidationErrors.map(function (error) { return error.message; }));
    }, [validationErrorMessages, bind === null || bind === void 0 ? void 0 : bind.myValidationErrors]);
}
exports.useMyValidationErrorMessages = useMyValidationErrorMessages;
