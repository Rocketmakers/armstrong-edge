"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberInput = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var classNames_1 = require("../../utils/classNames");
var inputWrapper_1 = require("../inputWrapper");
var validationErrors_1 = require("../validationErrors");
/** Wrap up a text input with type=num which binds to a number */
exports.NumberInput = React.forwardRef(function (_a, ref) {
    var _b, _c, _d, _e, _f, _g, _h;
    var bind = _a.bind, onChange = _a.onChange, value = _a.value, className = _a.className, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, leftOverlay = _a.leftOverlay, rightOverlay = _a.rightOverlay, validationErrorMessages = _a.validationErrorMessages, validationMode = _a.validationMode, validationErrorIcon = _a.errorIcon, pending = _a.pending, disableOnPending = _a.disableOnPending, disabled = _a.disabled, statusPosition = _a.statusPosition, nativeProps = tslib_1.__rest(_a, ["bind", "onChange", "value", "className", "leftIcon", "rightIcon", "leftOverlay", "rightOverlay", "validationErrorMessages", "validationMode", "errorIcon", "pending", "disableOnPending", "disabled", "statusPosition"]);
    var onChangeEvent = React.useCallback(function (event) {
        var _a, _b, _c;
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
        var currentValue = event.currentTarget.valueAsNumber;
        if (bind) {
            var formattedValue = ((_c = (_b = (_a = bind.bindConfig) === null || _a === void 0 ? void 0 : _a.format) === null || _b === void 0 ? void 0 : _b.toData) === null || _c === void 0 ? void 0 : _c.call(_b, currentValue)) || currentValue;
            bind.setValue(formattedValue);
        }
    }, [bind, onChange]);
    var allValidationErrorMessages = validationErrors_1.useMyValidationErrorMessages(bind, validationErrorMessages);
    return (React.createElement(inputWrapper_1.InputWrapper, { className: classNames_1.ClassNames.concat(className, 'arm-input-base'), leftIcon: leftIcon, rightIcon: rightIcon, leftOverlay: leftOverlay, rightOverlay: rightOverlay, validationErrorMessages: allValidationErrorMessages, errorIcon: validationErrorIcon || ((_b = bind === null || bind === void 0 ? void 0 : bind.formConfig) === null || _b === void 0 ? void 0 : _b.validationErrorIcon), validationMode: validationMode || ((_c = bind === null || bind === void 0 ? void 0 : bind.formConfig) === null || _c === void 0 ? void 0 : _c.validationMode), pending: pending, disabled: disabled, disableOnPending: disableOnPending, statusPosition: statusPosition },
        React.createElement("input", tslib_1.__assign({}, nativeProps, { ref: ref, className: 'arm-input-base-input', onChange: onChangeEvent, value: (_h = (_g = (_f = (_e = (_d = bind === null || bind === void 0 ? void 0 : bind.bindConfig) === null || _d === void 0 ? void 0 : _d.format) === null || _e === void 0 ? void 0 : _e.fromData) === null || _f === void 0 ? void 0 : _f.call(_e, bind === null || bind === void 0 ? void 0 : bind.value)) !== null && _g !== void 0 ? _g : bind === null || bind === void 0 ? void 0 : bind.value) !== null && _h !== void 0 ? _h : value, disabled: disabled, type: "number" }))));
});
