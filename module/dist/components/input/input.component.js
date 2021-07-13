"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var useDebounce_1 = require("../../hooks/useDebounce");
var useThrottle_1 = require("../../hooks/useThrottle");
var classNames_1 = require("../../utils/classNames");
var inputWrapper_component_1 = require("../inputWrapper/inputWrapper.component");
var DebounceInputBase = React.forwardRef(function (_a, ref) {
    var milliseconds = _a.milliseconds, value = _a.value, onValueChange = _a.onValueChange, onChange = _a.onChange, nativeProps = tslib_1.__rest(_a, ["milliseconds", "value", "onValueChange", "onChange"]);
    var _b = useDebounce_1.useDebounce(milliseconds, value, onValueChange), actualValue = _b[0], setActualValue = _b[1];
    var onChangeEvent = React.useCallback(function (e) {
        setActualValue(e.currentTarget.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    }, [setActualValue, onChange]);
    return React.createElement("input", tslib_1.__assign({ ref: ref, value: actualValue, onChange: onChangeEvent }, nativeProps));
});
var ThrottledInputBase = React.forwardRef(function (_a, ref) {
    var milliseconds = _a.milliseconds, value = _a.value, onValueChange = _a.onValueChange, onChange = _a.onChange, nativeProps = tslib_1.__rest(_a, ["milliseconds", "value", "onValueChange", "onChange"]);
    var _b = useThrottle_1.useThrottle(milliseconds, value, onValueChange), actualValue = _b[0], setActualValue = _b[1];
    var onChangeEvent = React.useCallback(function (e) {
        setActualValue(e.currentTarget.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    }, [setActualValue, onChange]);
    return React.createElement("input", tslib_1.__assign({ ref: ref, value: actualValue, onChange: onChangeEvent }, nativeProps));
});
/** A component which wraps up a native input element with some binding logic and some repeated elements (icons and stuff) for components which only contain a single input element. */
exports.Input = React.forwardRef(function (_a, ref) {
    var bind = _a.bind, onChange = _a.onChange, value = _a.value, className = _a.className, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, leftOverlay = _a.leftOverlay, rightOverlay = _a.rightOverlay, validationErrorMessages = _a.validationErrorMessages, validationMode = _a.validationMode, validationErrorIcon = _a.errorIcon, pending = _a.pending, above = _a.above, below = _a.below, disabled = _a.disabled, disableOnPending = _a.disableOnPending, statusPosition = _a.statusPosition, hideIconOnStatus = _a.hideIconOnStatus, onValueChange = _a.onValueChange, scrollValidationErrorsIntoView = _a.scrollValidationErrorsIntoView, delay = _a.delay, nativeProps = tslib_1.__rest(_a, ["bind", "onChange", "value", "className", "leftIcon", "rightIcon", "leftOverlay", "rightOverlay", "validationErrorMessages", "validationMode", "errorIcon", "pending", "above", "below", "disabled", "disableOnPending", "statusPosition", "hideIconOnStatus", "onValueChange", "scrollValidationErrorsIntoView", "delay"]);
    var internalRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return internalRef.current; }, [internalRef]);
    var _b = __1.Form.useBindingTools(bind, {
        value: value === null || value === void 0 ? void 0 : value.toString(),
        validationErrorMessages: validationErrorMessages,
        validationMode: validationMode,
        validationErrorIcon: validationErrorIcon,
    }), boundValue = _b[0], setBoundValue = _b[1], bindConfig = _b[2];
    var onBindValueChange = React.useCallback(function (currentValue) {
        var _a, _b, _c;
        if (bind) {
            var formattedValue = ((_c = (_b = (_a = bind.bindConfig) === null || _a === void 0 ? void 0 : _a.format) === null || _b === void 0 ? void 0 : _b.toData) === null || _c === void 0 ? void 0 : _c.call(_b, currentValue)) || currentValue;
            bind.setValue(formattedValue);
        }
    }, [bind]);
    var onChangeEvent = React.useCallback(function (event) {
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
        var currentValue = event.currentTarget.value;
        setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(currentValue);
    }, [setBoundValue, onBindValueChange, onChange]);
    var onValueChangeEvent = React.useCallback(function (currentValue) {
        setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(currentValue);
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(currentValue);
    }, [onValueChange, onBindValueChange, setBoundValue]);
    var inputProps = {
        className: 'arm-input-base-input',
        value: boundValue,
        disabled: disabled,
    };
    return (React.createElement(inputWrapper_component_1.InputWrapper, { className: classNames_1.ClassNames.concat(className, 'arm-input-base'), leftIcon: leftIcon, rightIcon: rightIcon, leftOverlay: leftOverlay, rightOverlay: rightOverlay, validationErrorMessages: bindConfig.validationErrorMessages, errorIcon: bindConfig.validationErrorIcon, validationMode: bindConfig.validationMode, pending: pending, disabled: disabled, above: above, statusPosition: statusPosition, scrollValidationErrorsIntoView: scrollValidationErrorsIntoView, below: below, disableOnPending: disableOnPending, hideIconOnStatus: hideIconOnStatus, onClick: function () { var _a; return (_a = internalRef.current) === null || _a === void 0 ? void 0 : _a.focus(); } },
        (delay === null || delay === void 0 ? void 0 : delay.mode) === 'debounce' && delay.milliseconds && (React.createElement(DebounceInputBase, tslib_1.__assign({}, nativeProps, { milliseconds: delay.milliseconds }, inputProps, { onChange: onChange, onValueChange: onValueChangeEvent, ref: internalRef }))),
        (delay === null || delay === void 0 ? void 0 : delay.mode) === 'throttle' && delay.milliseconds && (React.createElement(ThrottledInputBase, tslib_1.__assign({}, nativeProps, { milliseconds: delay.milliseconds }, inputProps, { onChange: onChange, onValueChange: onValueChangeEvent, ref: internalRef }))),
        !(delay === null || delay === void 0 ? void 0 : delay.milliseconds) && React.createElement("input", tslib_1.__assign({}, nativeProps, inputProps, { onChange: onChangeEvent, ref: internalRef }))));
});
