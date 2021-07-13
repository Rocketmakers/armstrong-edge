"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeInput = exports.CodeInputPart = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var arrays_1 = require("../../utils/arrays");
var classNames_1 = require("../../utils/classNames");
var iconWrapper_1 = require("../iconWrapper");
var statusWrapper_component_1 = require("../statusWrapper/statusWrapper.component");
var textInput_1 = require("../textInput");
var _1 = require(".");
/** an individual input from the CodeInput */
exports.CodeInputPart = React.forwardRef(function (_a, ref) {
    var part = _a.part, onChange = _a.onChange, onKeyDown = _a.onKeyDown, value = _a.value;
    var length = React.useMemo(function () { return _1.CodeInputUtils.getLengthFromPart(part); }, [part]);
    if (typeof part === 'string') {
        return React.createElement("p", { className: "arm-code-input-part-text" }, part);
    }
    if (typeof part === 'number') {
        return (React.createElement(textInput_1.TextInput, { ref: ref, className: "arm-code-input-part-input", onChange: onChange, value: value, onKeyDown: onKeyDown, style: { '--arm-code-input-length': length }, "data-length": length, onClick: function (event) { return event.currentTarget.select(); } }));
    }
    var className = part.className, textInputProps = tslib_1.__rest(part, ["className"]);
    return (React.createElement(textInput_1.TextInput, tslib_1.__assign({ ref: ref, className: classNames_1.ClassNames.concat('arm-code-input-part-input', className), onChange: onChange, value: value, onKeyDown: onKeyDown, style: tslib_1.__assign(tslib_1.__assign({}, (textInputProps.style || {})), { '--arm-code-input-length': length }), "data-length": length }, textInputProps)));
});
exports.CodeInput = React.forwardRef(function (_a, ref) {
    var _b;
    var className = _a.className, parts = _a.parts, bind = _a.bind, value = _a.value, onChange = _a.onChange, validationMode = _a.validationMode, validationErrorMessages = _a.validationErrorMessages, errorIcon = _a.errorIcon, error = _a.error, pending = _a.pending, statusPosition = _a.statusPosition, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, scrollValidationErrorsIntoView = _a.scrollValidationErrorsIntoView;
    var inputRefs = React.useRef([]);
    var _c = __1.Form.useBindingTools(bind, {
        value: value,
        onChange: onChange,
        validationErrorMessages: validationErrorMessages,
        validationMode: validationMode,
        validationErrorIcon: errorIcon,
    }), boundValue = _c[0], setBoundValue = _c[1], bindConfig = _c[2];
    var totalLength = React.useMemo(function () { return parts.reduce(function (total, part) { return total + _1.CodeInputUtils.getLengthFromPart(part); }, 0); }, [parts]);
    var getValueForPart = React.useCallback(function (partIndex) {
        var sliceStart = parts.slice(0, partIndex).reduce(function (output, part) { return output + _1.CodeInputUtils.getLengthFromPart(part); }, 0);
        var sliceEnd = sliceStart + _1.CodeInputUtils.getLengthFromPart(parts[partIndex]);
        return (boundValue === null || boundValue === void 0 ? void 0 : boundValue.slice(sliceStart, sliceEnd)) || '';
    }, [boundValue, parts]);
    var goNext = React.useCallback(function (partIndex) {
        var _a;
        var nextIndex = parts.slice(partIndex + 1).findIndex(function (part) { return typeof part !== 'string'; }) + partIndex + 1;
        if (nextIndex !== -1) {
            (_a = inputRefs.current[nextIndex]) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [parts]);
    var goPrevious = React.useCallback(function (partIndex) {
        var _a;
        var previousIndex = arrays_1.Arrays.findLastIndex(parts.slice(0, partIndex), function (part) { return typeof part !== 'string'; });
        if (previousIndex !== -1) {
            (_a = inputRefs.current[previousIndex]) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [parts]);
    var onPartChange = React.useCallback(function (event, partIndex) {
        var currentPartLength = _1.CodeInputUtils.getLengthFromPart(parts[partIndex]);
        var newPartValue = event.currentTarget.value || '';
        var sliceStart = parts.slice(0, partIndex).reduce(function (output, part) { return output + _1.CodeInputUtils.getLengthFromPart(part); }, 0);
        var sliceEnd = sliceStart + currentPartLength;
        if (newPartValue.length >= currentPartLength) {
            goNext(partIndex);
        }
        var newValue = (boundValue ? boundValue.slice(0, sliceStart) + newPartValue + boundValue.slice(sliceEnd) : newPartValue).slice(0, totalLength);
        setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(newValue);
    }, [boundValue, parts, goNext, totalLength]);
    var onKeyDown = React.useCallback(function (event, partIndex) {
        var _a;
        switch (event.key) {
            case 'Backspace': {
                if (((_a = event.currentTarget.value) === null || _a === void 0 ? void 0 : _a.length) <= 0 && partIndex > 0) {
                    goPrevious(partIndex);
                }
                break;
            }
            case 'Left': {
                if (event.currentTarget.selectionStart === 0 && partIndex > 0) {
                    goPrevious(partIndex);
                }
                break;
            }
            case 'Right': {
                if (event.currentTarget.selectionEnd === 0 && partIndex < parts.length) {
                    goNext(partIndex);
                }
                break;
            }
            default: {
                break;
            }
        }
    }, [goPrevious, parts]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classNames_1.ClassNames.concat('arm-code-input', className), ref: ref },
            React.createElement(statusWrapper_component_1.StatusWrapper, { error: error, validationErrorMessages: bindConfig.validationErrorMessages, errorIcon: bindConfig.validationErrorIcon, statusPosition: statusPosition, pending: pending, validationMode: bindConfig.validationMode },
                React.createElement(iconWrapper_1.IconWrapper, { leftIcon: leftIcon, rightIcon: rightIcon }, parts.map(function (part, index) { return (React.createElement(exports.CodeInputPart, { part: part, key: index, value: getValueForPart(index) || '', onChange: function (event) { return onPartChange(event, index); }, onKeyDown: function (event) { return onKeyDown(event, index); }, ref: function (r) {
                        inputRefs.current[index] = r;
                    } })); })))),
        !!((_b = bindConfig.validationErrorMessages) === null || _b === void 0 ? void 0 : _b.length) && bindConfig.shouldShowValidationErrorMessage && (React.createElement(__1.ValidationErrors, { validationErrors: bindConfig.validationErrorMessages, icon: bindConfig.validationErrorIcon, scrollIntoView: scrollValidationErrorsIntoView }))));
});
