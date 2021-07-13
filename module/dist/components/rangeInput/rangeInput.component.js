"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeInput = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var classNames_1 = require("../../utils/classNames");
var maths_1 = require("../../utils/maths");
var icon_1 = require("../icon");
var iconWrapper_1 = require("../iconWrapper");
var statusWrapper_component_1 = require("../statusWrapper/statusWrapper.component");
/** Render a range input where the visuals are recerated using DOM */
exports.RangeInput = React.forwardRef(function (_a, ref) {
    var onValueChange = _a.onValueChange, value = _a.value, validationErrorMessages = _a.validationErrorMessages, validationMode = _a.validationMode, errorIcon = _a.errorIcon, scrollValidationErrorsIntoView = _a.scrollValidationErrorsIntoView, className = _a.className, minimum = _a.minimum, onChange = _a.onChange, maximum = _a.maximum, step = _a.step, bind = _a.bind, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, handleIcon = _a.handleIcon, pending = _a.pending, statusPosition = _a.statusPosition, error = _a.error, disabled = _a.disabled, nativeProps = tslib_1.__rest(_a, ["onValueChange", "value", "validationErrorMessages", "validationMode", "errorIcon", "scrollValidationErrorsIntoView", "className", "minimum", "onChange", "maximum", "step", "bind", "leftIcon", "rightIcon", "handleIcon", "pending", "statusPosition", "error", "disabled"]);
    var _b = __1.Form.useBindingTools(bind, {
        value: value,
        onChange: onValueChange,
        validationErrorMessages: validationErrorMessages,
        validationMode: validationMode,
        validationErrorIcon: errorIcon,
    }), boundValue = _b[0], setBoundValue = _b[1], bindConfig = _b[2];
    var currentPercent = React.useMemo(function () { return maths_1.Maths.getPercent((boundValue || 0) - minimum, maximum - minimum); }, [boundValue, minimum, maximum]);
    var onChangeEvent = React.useCallback(function (event) {
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
        var newValue = event.currentTarget.valueAsNumber;
        setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(newValue);
    }, [onChange]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classNames_1.ClassNames.concat('arm-range-input', className), style: {
                '--arm-range-input-percent': currentPercent + "%",
                '--arm-range-input-value': value,
                '--arm-range-input-minimum': minimum,
                '--arm-range-input-maximum': maximum,
            }, "data-disabled": disabled, "data-pending": pending },
            React.createElement(statusWrapper_component_1.StatusWrapper, { error: error, statusPosition: statusPosition, errorIcon: bindConfig.validationErrorIcon, validationErrorMessages: bindConfig.validationErrorMessages, validationMode: bindConfig.validationMode, pending: pending },
                React.createElement(iconWrapper_1.IconWrapper, { leftIcon: leftIcon, rightIcon: rightIcon },
                    React.createElement("div", { className: "arm-range-input-track" },
                        React.createElement("input", tslib_1.__assign({ className: "arm-range-input-input" }, nativeProps, { ref: ref, type: "range", min: minimum, max: maximum, step: step, value: value, onChange: onChangeEvent, disabled: disabled || pending })),
                        React.createElement("div", { className: "arm-range-input-track-inner" }),
                        React.createElement("div", { className: "arm-range-input-handle" }, handleIcon && React.createElement(icon_1.Icon, { iconSet: handleIcon.iconSet, icon: handleIcon.icon })))))),
        !!(validationErrorMessages === null || validationErrorMessages === void 0 ? void 0 : validationErrorMessages.length) && bindConfig.shouldShowValidationErrorMessage && (React.createElement(__1.ValidationErrors, { validationErrors: validationErrorMessages, icon: bindConfig.validationErrorIcon, scrollIntoView: scrollValidationErrorsIntoView }))));
});
