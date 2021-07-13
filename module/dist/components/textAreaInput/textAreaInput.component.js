"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextAreaInput = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var useDebounce_1 = require("../../hooks/useDebounce");
var useThrottle_1 = require("../../hooks/useThrottle");
var classNames_1 = require("../../utils/classNames");
var inputWrapper_component_1 = require("../inputWrapper/inputWrapper.component");
var DebounceTextAreaBase = React.forwardRef(function (_a, ref) {
    var milliseconds = _a.milliseconds, value = _a.value, onValueChange = _a.onValueChange, onChange = _a.onChange, nativeProps = tslib_1.__rest(_a, ["milliseconds", "value", "onValueChange", "onChange"]);
    var _b = useDebounce_1.useDebounce(milliseconds, value === null || value === void 0 ? void 0 : value.toString(), onValueChange), actualValue = _b[0], setActualValue = _b[1];
    var onChangeEvent = React.useCallback(function (e) {
        setActualValue(e.currentTarget.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    }, [setActualValue, onChange]);
    return React.createElement("textarea", tslib_1.__assign({ className: "arm-text-area-input-textarea", ref: ref, value: actualValue, onChange: onChangeEvent }, nativeProps));
});
var ThrottledTextAreaBase = React.forwardRef(function (_a, ref) {
    var milliseconds = _a.milliseconds, value = _a.value, onValueChange = _a.onValueChange, onChange = _a.onChange, nativeProps = tslib_1.__rest(_a, ["milliseconds", "value", "onValueChange", "onChange"]);
    var _b = useThrottle_1.useThrottle(milliseconds, value === null || value === void 0 ? void 0 : value.toString(), onValueChange), actualValue = _b[0], setActualValue = _b[1];
    var onChangeEvent = React.useCallback(function (e) {
        setActualValue(e.currentTarget.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    }, [setActualValue, onChange]);
    return React.createElement("textarea", tslib_1.__assign({ className: "arm-text-area-input-textarea", ref: ref, value: actualValue, onChange: onChangeEvent }, nativeProps));
});
exports.TextAreaInput = React.forwardRef(function (_a, ref) {
    var bind = _a.bind, onChange = _a.onChange, value = _a.value, className = _a.className, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, leftOverlay = _a.leftOverlay, rightOverlay = _a.rightOverlay, validationErrorMessages = _a.validationErrorMessages, validationMode = _a.validationMode, validationErrorIcon = _a.errorIcon, disabled = _a.disabled, pending = _a.pending, above = _a.above, scrollValidationErrorsIntoView = _a.scrollValidationErrorsIntoView, below = _a.below, statusPosition = _a.statusPosition, disableOnPending = _a.disableOnPending, delay = _a.delay, onValueChange = _a.onValueChange, nativeProps = tslib_1.__rest(_a, ["bind", "onChange", "value", "className", "leftIcon", "rightIcon", "leftOverlay", "rightOverlay", "validationErrorMessages", "validationMode", "errorIcon", "disabled", "pending", "above", "scrollValidationErrorsIntoView", "below", "statusPosition", "disableOnPending", "delay", "onValueChange"]);
    var internalRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return internalRef.current; }, [internalRef]);
    var _b = __1.Form.useBindingTools(bind, {
        value: value === null || value === void 0 ? void 0 : value.toString(),
        validationErrorMessages: validationErrorMessages,
        validationMode: validationMode,
        validationErrorIcon: validationErrorIcon,
    }), boundValue = _b[0], setBoundValue = _b[1], bindConfig = _b[2];
    var onChangeEvent = React.useCallback(function (event) {
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
        var currentValue = event.currentTarget.value;
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(currentValue);
        setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(currentValue);
    }, [bind, onChange, onValueChange, setBoundValue]);
    var onValueChangeEvent = React.useCallback(function (currentValue) {
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(currentValue !== null && currentValue !== void 0 ? currentValue : '');
        setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(currentValue !== null && currentValue !== void 0 ? currentValue : '');
    }, [onValueChange, setBoundValue]);
    var inputProps = {
        value: boundValue,
        disabled: disabled,
        ref: internalRef,
    };
    return (React.createElement(inputWrapper_component_1.InputWrapper, { className: classNames_1.ClassNames.concat('arm-text-area-input', className), leftIcon: leftIcon, rightIcon: rightIcon, leftOverlay: leftOverlay, rightOverlay: rightOverlay, validationErrorMessages: bindConfig.validationErrorMessages, errorIcon: bindConfig.validationErrorIcon, validationMode: bindConfig.validationMode, disabled: disabled, pending: pending, above: above, disableOnPending: disableOnPending, statusPosition: statusPosition, below: below, onClick: function () { var _a; return (_a = internalRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, scrollValidationErrorsIntoView: scrollValidationErrorsIntoView },
        (delay === null || delay === void 0 ? void 0 : delay.mode) === 'debounce' && delay.milliseconds && (React.createElement(DebounceTextAreaBase, tslib_1.__assign({}, nativeProps, { milliseconds: delay.milliseconds }, inputProps, { onChange: onChange, onValueChange: onValueChangeEvent, ref: ref }))),
        (delay === null || delay === void 0 ? void 0 : delay.mode) === 'throttle' && delay.milliseconds && (React.createElement(ThrottledTextAreaBase, tslib_1.__assign({}, nativeProps, { milliseconds: delay.milliseconds }, inputProps, { onChange: onChange, onValueChange: onValueChangeEvent, ref: ref }))),
        !(delay === null || delay === void 0 ? void 0 : delay.milliseconds) && React.createElement("textarea", tslib_1.__assign({ className: "arm-text-area-input-textarea" }, nativeProps, { onChange: onChangeEvent }, inputProps))));
});
exports.TextAreaInput.defaultProps = {};
