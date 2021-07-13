"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationErrors = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var classNames_1 = require("../../utils/classNames");
var errorMessage_1 = require("../errorMessage");
/** Render an array of validation errors as error messages */
exports.ValidationErrors = React.forwardRef(function (_a, ref) {
    var validationErrors = _a.validationErrors, className = _a.className, icon = _a.icon, scrollIntoView = _a.scrollIntoView;
    var internalRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return internalRef.current; }, [internalRef]);
    React.useEffect(function () {
        var _a;
        if (validationErrors.length > 0 && scrollIntoView) {
            (_a = internalRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
    }, [validationErrors.length]);
    return (React.createElement("div", { ref: internalRef, className: classNames_1.ClassNames.concat('arm-validation-errors', className) }, validationErrors.map(function (error, index) { return (React.createElement(errorMessage_1.ErrorMessage, { message: error, key: error + index, icon: icon })); })));
});
