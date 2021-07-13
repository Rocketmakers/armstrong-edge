"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabSelect = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var form_1 = require("../../hooks/form");
var classNames_1 = require("../../utils/classNames");
var statusWrapper_1 = require("../statusWrapper");
var tabControl_1 = require("../tabControl");
var validationErrors_1 = require("../validationErrors");
/** A TabControl that can have its value bound to an Armstrong form */
exports.TabSelect = React.forwardRef(function (_a, ref) {
    var bind = _a.bind, value = _a.value, onValueChange = _a.onValueChange, className = _a.className, pending = _a.pending, error = _a.error, errorIcon = _a.errorIcon, statusPosition = _a.statusPosition, validationErrorMessages = _a.validationErrorMessages, validationMode = _a.validationMode, disabled = _a.disabled, scrollValidationErrorsIntoView = _a.scrollValidationErrorsIntoView, tabControlProps = tslib_1.__rest(_a, ["bind", "value", "onValueChange", "className", "pending", "error", "errorIcon", "statusPosition", "validationErrorMessages", "validationMode", "disabled", "scrollValidationErrorsIntoView"]);
    var _b = form_1.useBindingTools(bind, {
        onChange: onValueChange,
        value: value,
        validationErrorMessages: validationErrorMessages,
        validationMode: validationMode,
        validationErrorIcon: errorIcon,
    }), boundValue = _b[0], setBoundValue = _b[1], bindConfig = _b[2];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classNames_1.ClassNames.concat('arm-tab-select', className), "data-pending": pending, "data-error": error || (bindConfig.shouldShowValidationErrorIcon && !!bindConfig.validationErrorMessages.length), "data-disabled": disabled || pending },
            React.createElement(statusWrapper_1.StatusWrapper, { pending: pending, error: error || (bindConfig.shouldShowValidationErrorIcon && !!bindConfig.validationErrorMessages.length), errorIcon: bindConfig.validationErrorIcon, statusPosition: statusPosition },
                React.createElement(tabControl_1.TabControl, tslib_1.__assign({ currentTab: boundValue, onTabChange: disabled ? undefined : setBoundValue }, tabControlProps, { ref: ref })))),
        bindConfig.shouldShowValidationErrorMessage && (React.createElement(validationErrors_1.ValidationErrors, { validationErrors: bindConfig.validationErrorMessages, icon: bindConfig.validationErrorIcon, scrollIntoView: scrollValidationErrorsIntoView }))));
}
// type assertion to ensure generic works with RefForwarded component
// DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
);
