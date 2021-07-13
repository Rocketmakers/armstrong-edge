"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioInputList = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var classNames_1 = require("../../utils/classNames");
var radioInput_component_1 = require("../radioInput/radioInput.component");
var validationErrors_1 = require("../validationErrors");
/** Render a list of radio inputs which binds to a single string */
exports.RadioInputList = React.forwardRef(function (_a, ref) {
    var bind = _a.bind, options = _a.options, className = _a.className, value = _a.value, errorIcon = _a.errorIcon, validationMode = _a.validationMode, validationErrorMessages = _a.validationErrorMessages, onChange = _a.onChange, checkedIcon = _a.checkedIcon, uncheckedIcon = _a.uncheckedIcon, error = _a.error;
    var _b = __1.Form.useBindingTools(bind, {
        value: value,
        validationErrorMessages: validationErrorMessages,
        validationErrorIcon: errorIcon,
        validationMode: validationMode,
        onChange: onChange,
    }), boundValue = _b[0], setBoundValue = _b[1], bindConfig = _b[2];
    var groupedOptions = React.useMemo(function () { return __1.Arrays.arrayToArraysByKey(options, function (option) { return option.group || ''; }); }, [options]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classNames_1.ClassNames.concat('arm-radio-input-list', className), ref: ref, "data-error": error || !!(validationErrorMessages === null || validationErrorMessages === void 0 ? void 0 : validationErrorMessages.length) },
            groupedOptions.map(function (group) { return (React.createElement(React.Fragment, { key: group.key },
                group.key && (React.createElement("div", { className: "arm-radio-input-list-group-title" },
                    React.createElement("p", null, group.key))),
                group.items.map(function (option) {
                    var _a;
                    return (React.createElement(radioInput_component_1.RadioInput, { key: option.id, leftIcon: option.leftIcon, rightIcon: option.rightIcon, id: option.id, checked: boundValue === option.id, onChange: function () { return setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(option.id); }, name: (_a = option.name) !== null && _a !== void 0 ? _a : option.id, checkedIcon: checkedIcon, uncheckedIcon: uncheckedIcon }));
                }))); }),
            bindConfig.shouldShowValidationErrorMessage && bindConfig.validationErrorMessages && (React.createElement(validationErrors_1.ValidationErrors, { validationErrors: bindConfig.validationErrorMessages, icon: bindConfig.validationErrorIcon })))));
}
// type assertion to ensure generic works with RefForwarded component
// DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
);
