"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxInput = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var hooks_1 = require("../../hooks");
var classNames_1 = require("../../utils/classNames");
var icon_1 = require("../icon");
var iconWrapper_1 = require("../iconWrapper");
var status_1 = require("../status");
var validationErrors_1 = require("../validationErrors");
/** Render a checkbox that uses DOM elements allow for easier styling */
exports.CheckboxInput = React.forwardRef(function (_a, ref) {
    var _b, _c;
    var bind = _a.bind, validationErrorMessages = _a.validationErrorMessages, validationMode = _a.validationMode, className = _a.className, errorIcon = _a.errorIcon, error = _a.error, pending = _a.pending, disabled = _a.disabled, checked = _a.checked, onChange = _a.onChange, checkedIcon = _a.checkedIcon, label = _a.label, uncheckedIcon = _a.uncheckedIcon, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, scrollValidationErrorsIntoView = _a.scrollValidationErrorsIntoView, onValueChange = _a.onValueChange, nativeProps = tslib_1.__rest(_a, ["bind", "validationErrorMessages", "validationMode", "className", "errorIcon", "error", "pending", "disabled", "checked", "onChange", "checkedIcon", "label", "uncheckedIcon", "leftIcon", "rightIcon", "scrollValidationErrorsIntoView", "onValueChange"]);
    var _d = __1.Form.useBindingTools(bind, {
        value: checked,
        validationErrorMessages: validationErrorMessages,
        validationErrorIcon: errorIcon,
        validationMode: validationMode,
        onChange: onValueChange,
    }), boundValue = _d[0], setBoundValue = _d[1], bindConfig = _d[2];
    // use an overridable internal state so it can be used without a binding
    var _e = hooks_1.useOverridableState(false, boundValue, setBoundValue), isChecked = _e[0], setIsChecked = _e[1];
    var onChangeEvent = React.useCallback(function (event) {
        setIsChecked(event.currentTarget.checked);
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [bind, onChange]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classNames_1.ClassNames.concat('arm-input', 'arm-checkbox-input', className), "data-disabled": disabled || pending, "data-error": error || !!(validationErrorMessages === null || validationErrorMessages === void 0 ? void 0 : validationErrorMessages.length), "data-checked": isChecked },
            React.createElement("label", null,
                React.createElement("div", { className: "arm-checkbox-input-checkbox" },
                    React.createElement("input", tslib_1.__assign({ className: "arm-checkbox-input-checkbox-input", onChange: onChangeEvent }, nativeProps, { type: "checkbox", ref: ref, checked: isChecked })),
                    checkedIcon && React.createElement(icon_1.Icon, { className: "arm-checkbox-input-checked-icon", iconSet: checkedIcon.iconSet, icon: checkedIcon.icon }),
                    uncheckedIcon && React.createElement(icon_1.Icon, { className: "arm-checkbox-input-unchecked-icon", iconSet: uncheckedIcon.iconSet, icon: uncheckedIcon.icon })),
                React.createElement(iconWrapper_1.IconWrapper, { leftIcon: leftIcon, rightIcon: rightIcon }, typeof label === 'string' || typeof label === 'number' ? React.createElement("p", null, label) : label)),
            React.createElement(status_1.Status, { error: bindConfig.shouldShowValidationErrorIcon && (!!((_b = bindConfig === null || bindConfig === void 0 ? void 0 : bindConfig.validationErrorMessages) === null || _b === void 0 ? void 0 : _b.length) || error), pending: pending, errorIcon: bindConfig.validationErrorIcon })),
        !!((_c = bindConfig.validationErrorMessages) === null || _c === void 0 ? void 0 : _c.length) && bindConfig.shouldShowValidationErrorMessage && (React.createElement(validationErrors_1.ValidationErrors, { validationErrors: bindConfig.validationErrorMessages, icon: bindConfig.validationErrorIcon, scrollIntoView: scrollValidationErrorsIntoView }))));
});
exports.CheckboxInput.defaultProps = {
    checkedIcon: icon_1.IconUtils.getIconDefinition('Icomoon', 'checkmark3'),
    validationMode: 'both',
};
