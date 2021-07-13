"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var classNames_1 = require("../../utils/classNames");
var icon_1 = require("../icon");
var iconButton_1 = require("../iconButton");
var inputWrapper_1 = require("../inputWrapper");
/** A select input which takes an array of options */
exports.Select = React.forwardRef(function (_a, ref) {
    var _b, _c;
    var bind = _a.bind, options = _a.options, leftIcon = _a.leftIcon, leftOverlay = _a.leftOverlay, rightIcon = _a.rightIcon, rightOverlay = _a.rightOverlay, className = _a.className, onSelectOption = _a.onSelectOption, onChange = _a.onChange, value = _a.value, validationErrorIcon = _a.errorIcon, validationErrorMessages = _a.validationErrorMessages, validationMode = _a.validationMode, selectOverlayIcon = _a.selectOverlayIcon, pending = _a.pending, disabled = _a.disabled, deleteButton = _a.deleteButton, disableOnPending = _a.disableOnPending, scrollValidationErrorsIntoView = _a.scrollValidationErrorsIntoView, nativeProps = tslib_1.__rest(_a, ["bind", "options", "leftIcon", "leftOverlay", "rightIcon", "rightOverlay", "className", "onSelectOption", "onChange", "value", "errorIcon", "validationErrorMessages", "validationMode", "selectOverlayIcon", "pending", "disabled", "deleteButton", "disableOnPending", "scrollValidationErrorsIntoView"]);
    var internalRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return internalRef.current; }, [internalRef]);
    var _d = __1.Form.useBindingTools(bind, { value: value, validationErrorMessages: validationErrorMessages }), boundValue = _d[0], setBoundValue = _d[1], bindConfig = _d[2];
    var onChangeEvent = React.useCallback(function (event) {
        if (onChange) {
            onChange(event);
        }
        var selectedOption = options.find(function (option) { return option.id.toString() === event.currentTarget.value; });
        if (selectedOption) {
            setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(selectedOption.id);
            onSelectOption === null || onSelectOption === void 0 ? void 0 : onSelectOption(selectedOption);
        }
    }, [onSelectOption, options, onChange, bind]);
    return (React.createElement(inputWrapper_1.InputWrapper, { className: classNames_1.ClassNames.concat('arm-select', className), leftIcon: leftIcon, rightIcon: rightIcon, leftOverlay: leftOverlay, rightOverlay: rightOverlay, validationErrorMessages: bindConfig.validationErrorMessages, errorIcon: validationErrorIcon || ((_b = bind === null || bind === void 0 ? void 0 : bind.formConfig) === null || _b === void 0 ? void 0 : _b.validationErrorIcon), validationMode: validationMode || ((_c = bind === null || bind === void 0 ? void 0 : bind.formConfig) === null || _c === void 0 ? void 0 : _c.validationMode), pending: pending, disabled: disabled, disableOnPending: disableOnPending, scrollValidationErrorsIntoView: scrollValidationErrorsIntoView },
        React.createElement("div", { className: "arm-select-inner" },
            React.createElement("select", tslib_1.__assign({ className: "arm-select-select" }, nativeProps, { ref: internalRef, onChange: onChangeEvent, value: boundValue, disabled: disabled }), options.map(function (option) { return (React.createElement("option", { key: option.id, value: option.id, disabled: option.disabled }, option.name)); })),
            selectOverlayIcon &&
                (icon_1.IconUtils.isIconDefinition(selectOverlayIcon) ? (React.createElement(icon_1.Icon, { className: "arm-select-overlay-icon", icon: selectOverlayIcon.icon, iconSet: selectOverlayIcon.iconSet })) : (selectOverlayIcon))),
        deleteButton && boundValue && (React.createElement(iconButton_1.IconButton, { className: "arm-select-delete", onClick: function (event) {
                var _a;
                onSelectOption === null || onSelectOption === void 0 ? void 0 : onSelectOption(undefined);
                (_a = bind === null || bind === void 0 ? void 0 : bind.setValue) === null || _a === void 0 ? void 0 : _a.call(bind, undefined);
                event.stopPropagation();
            }, icon: icon_1.IconUtils.getIconDefinition('Icomoon', 'cross2'), minimalStyle: true }))));
}
// type assertion to ensure generic works with RefForwarded component
// DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
);
exports.Select.defaultProps = {
    selectOverlayIcon: icon_1.IconUtils.getIconDefinition('Icomoon', 'arrow-down3'),
};
