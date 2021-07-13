"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchInput = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var useDrag_1 = require("../../hooks/useDrag");
var classNames_1 = require("../../utils/classNames");
var icon_1 = require("../icon");
var status_1 = require("../status");
var validationErrors_1 = require("../validationErrors");
exports.SwitchInput = React.forwardRef(function (_a, ref) {
    var _b;
    var bind = _a.bind, checked = _a.checked, onChange = _a.onChange, validationErrorMessages = _a.validationErrorMessages, scrollValidationErrorsIntoView = _a.scrollValidationErrorsIntoView, disabled = _a.disabled, className = _a.className, validationMode = _a.validationMode, errorIcon = _a.errorIcon, error = _a.error, pending = _a.pending, checkedIcon = _a.checkedIcon, uncheckedIcon = _a.uncheckedIcon, iconStyle = _a.iconStyle, changeOnDrag = _a.changeOnDrag, nativeProps = tslib_1.__rest(_a, ["bind", "checked", "onChange", "validationErrorMessages", "scrollValidationErrorsIntoView", "disabled", "className", "validationMode", "errorIcon", "error", "pending", "checkedIcon", "uncheckedIcon", "iconStyle", "changeOnDrag"]);
    var _c = __1.Form.useBindingTools(bind, {
        value: checked,
        validationErrorMessages: validationErrorMessages,
        onChange: onChange,
        validationErrorIcon: errorIcon,
        validationMode: validationMode,
    }), boundValue = _c[0], setBoundValue = _c[1], bindConfig = _c[2];
    var onDragEnd = React.useCallback(function (_a) {
        var changePosition = _a.changePosition;
        if (!changePosition || changePosition.left === 0) {
            setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(!boundValue);
        }
    }, [setBoundValue, boundValue]);
    var _d = useDrag_1.useDrag(onDragEnd), dragProps = _d.props, changePosition = _d.changePosition;
    React.useEffect(function () {
        if (changePosition && changeOnDrag) {
            if (changePosition.left > 0) {
                setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(true);
            }
            else if (changePosition.left < 0) {
                setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(false);
            }
        }
    }, [changePosition === null || changePosition === void 0 ? void 0 : changePosition.left]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classNames_1.ClassNames.concat('arm-switch-input', className), "data-error": error, "data-pending": pending, "data-checked": boundValue, "data-icon-style": iconStyle },
            React.createElement("div", { className: "arm-switch-input-inner" },
                React.createElement("input", tslib_1.__assign({ className: "arm-switch-input-checkbox" }, nativeProps, { ref: ref, type: "checkbox", 
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    onChange: function () { }, checked: boundValue, disabled: disabled }, dragProps)),
                checkedIcon && React.createElement(icon_1.Icon, tslib_1.__assign({ className: "arm-switch-input-checked-icon" }, checkedIcon)),
                uncheckedIcon && React.createElement(icon_1.Icon, tslib_1.__assign({ className: "arm-switch-input-unchecked-icon" }, uncheckedIcon))),
            React.createElement(status_1.Status, { error: bindConfig.shouldShowValidationErrorIcon && (error || !!((_b = bindConfig.validationErrorMessages) === null || _b === void 0 ? void 0 : _b.length)), pending: pending, errorIcon: bindConfig.validationErrorIcon })),
        bindConfig.validationErrorMessages && bindConfig.shouldShowValidationErrorMessage && (React.createElement(validationErrors_1.ValidationErrors, { validationErrors: bindConfig.validationErrorMessages, icon: bindConfig.validationErrorIcon, scrollIntoView: scrollValidationErrorsIntoView }))));
});
exports.SwitchInput.defaultProps = {
    changeOnDrag: true,
};
