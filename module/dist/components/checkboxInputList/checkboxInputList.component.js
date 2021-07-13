"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxInputList = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var classNames_1 = require("../../utils/classNames");
var checkboxInput_component_1 = require("../checkboxInput/checkboxInput.component");
/** A list of checkboxes which binds to an array of IDs */
exports.CheckboxInputList = React.forwardRef(function (_a, ref) {
    var bind = _a.bind, options = _a.options, className = _a.className, validationMode = _a.validationMode, value = _a.value, checkedIcon = _a.checkedIcon, onChange = _a.onChange, uncheckedIcon = _a.uncheckedIcon, errorIcon = _a.errorIcon, scrollValidationErrorsIntoView = _a.scrollValidationErrorsIntoView, error = _a.error, validationErrorMessages = _a.validationErrorMessages;
    var _b = __1.Form.useBindingTools(bind, {
        validationErrorIcon: errorIcon,
        validationErrorMessages: validationErrorMessages,
        validationMode: validationMode,
        value: value,
        onChange: onChange,
    }), boundValue = _b[0], setBoundValue = _b[1], bindConfig = _b[2];
    var groupedOptions = React.useMemo(function () { return __1.Arrays.arrayToArraysByKey(options, function (option) { return option.group || ''; }); }, [options]);
    var includesOption = React.useCallback(function (option) { return boundValue === null || boundValue === void 0 ? void 0 : boundValue.includes(option.id); }, [boundValue]);
    var onCheckboxInputChange = React.useCallback(function (option) {
        if (includesOption(option)) {
            setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue((boundValue === null || boundValue === void 0 ? void 0 : boundValue.filter(function (val) { return val !== option.id; })) || []);
        }
        else {
            setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(tslib_1.__spreadArray(tslib_1.__spreadArray([], (boundValue || [])), [option.id]));
        }
    }, [boundValue, includesOption]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classNames_1.ClassNames.concat('arm-checkbox-input-list', className), "data-error": error || !!(validationErrorMessages === null || validationErrorMessages === void 0 ? void 0 : validationErrorMessages.length), ref: ref }, groupedOptions.map(function (group) { return (React.createElement(React.Fragment, { key: group.key },
            group.key && (React.createElement("div", { className: "arm-checkbox-input-list-group-title" },
                React.createElement("p", null, group.key))),
            group.items.map(function (option) {
                var _a, _b;
                return (React.createElement(checkboxInput_component_1.CheckboxInput, { key: option.id, leftIcon: option.leftIcon, rightIcon: option.rightIcon, checked: includesOption(option), onChange: function () { return onCheckboxInputChange(option); }, name: (_a = option.name) !== null && _a !== void 0 ? _a : option.id, checkedIcon: checkedIcon, uncheckedIcon: uncheckedIcon, label: (_b = option.name) !== null && _b !== void 0 ? _b : option.id }));
            }))); })),
        bindConfig.shouldShowValidationErrorMessage && bindConfig.validationErrorMessages && (React.createElement(__1.ValidationErrors, { validationErrors: bindConfig.validationErrorMessages, icon: bindConfig.validationErrorIcon, scrollIntoView: scrollValidationErrorsIntoView }))));
}
// type assertion to ensure generic works with RefForwarded component
// DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
);
