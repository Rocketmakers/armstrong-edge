"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBox = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var classNames_1 = require("../../utils/classNames");
var dropdownItems_1 = require("../dropdownItems");
var icon_1 = require("../icon");
var iconButton_1 = require("../iconButton");
var inputWrapper_1 = require("../inputWrapper");
/** A select input which takes an array of options */
exports.ListBox = React.forwardRef(function (_a, ref) {
    var bind = _a.bind, options = _a.options, leftIcon = _a.leftIcon, leftOverlay = _a.leftOverlay, rightIcon = _a.rightIcon, rightOverlay = _a.rightOverlay, className = _a.className, onSelectOption = _a.onSelectOption, value = _a.value, validationErrorIcon = _a.errorIcon, validationErrorMessages = _a.validationErrorMessages, validationMode = _a.validationMode, selectOverlayIcon = _a.selectOverlayIcon, pending = _a.pending, disabled = _a.disabled, statusPosition = _a.statusPosition, placeholder = _a.placeholder, deleteButton = _a.deleteButton, disableOnPending = _a.disableOnPending, scrollValidationErrorsIntoView = _a.scrollValidationErrorsIntoView, wrapperClassName = _a.wrapperClassName, noItemsText = _a.noItemsText;
    var internalRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return internalRef.current; }, [internalRef]);
    var _b = __1.Form.useBindingTools(bind, {
        value: value,
        validationErrorMessages: validationErrorMessages,
        validationErrorIcon: validationErrorIcon,
        validationMode: validationMode,
    }), boundValue = _b[0], setBoundValue = _b[1], bindConfig = _b[2];
    var _c = React.useState(false), dropdownOpen = _c[0], setDropdownOpen = _c[1];
    var onChangeEvent = React.useCallback(function (option) {
        var _a;
        onSelectOption === null || onSelectOption === void 0 ? void 0 : onSelectOption(option);
        setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue((_a = option === null || option === void 0 ? void 0 : option.id) !== null && _a !== void 0 ? _a : undefined);
    }, [onSelectOption, options, bind]);
    var currentOptionText = React.useMemo(function () { var _a, _b; return (_b = (_a = options.find(function (option) { return option.id === boundValue; })) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : boundValue; }, [boundValue, options]);
    var onClickDelete = React.useCallback(function (event) {
        onChangeEvent(undefined);
        setDropdownOpen(false);
        event.stopPropagation();
    }, [setDropdownOpen, onChangeEvent]);
    return (React.createElement(dropdownItems_1.DropdownItems, { isOpen: dropdownOpen, onOpenChange: setDropdownOpen, items: options.map(function (option) {
            var _a, _b, _c;
            return ({
                content: (_c = (_a = option.name) !== null && _a !== void 0 ? _a : (_b = bindConfig.getFormattedValueFromData(option.id)) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : option.id.toString(),
                id: option.id,
                leftIcon: option.leftIcon,
                rightIcon: option.rightIcon,
                group: option.group,
            });
        }), onItemSelected: function (item) { return onChangeEvent(options.find(function (option) { return option.id === item; })); }, allowKeyboardNavigation: true, focusableWrapper: true, currentValue: [boundValue], childRootElementSelector: ".arm-input-inner", className: classNames_1.ClassNames.concat('arm-listbox-wrapper', wrapperClassName), noItemsText: noItemsText },
        React.createElement(inputWrapper_1.InputWrapper, { ref: internalRef, className: classNames_1.ClassNames.concat('arm-listbox', className), leftIcon: leftIcon, rightIcon: rightIcon, leftOverlay: leftOverlay, rightOverlay: rightOverlay, validationErrorMessages: bindConfig.validationErrorMessages, errorIcon: bindConfig.validationErrorIcon, validationMode: bindConfig.validationMode, pending: pending, disabled: disabled, disableOnPending: disableOnPending, statusPosition: statusPosition, scrollValidationErrorsIntoView: scrollValidationErrorsIntoView },
            React.createElement("div", { className: "arm-listbox-inner" },
                React.createElement("div", { className: "arm-listbox-content" }, currentOptionText ? React.createElement("p", null, currentOptionText) : placeholder && React.createElement("p", { className: "placeholder" }, placeholder)),
                selectOverlayIcon &&
                    (icon_1.IconUtils.isIconDefinition(selectOverlayIcon) ? (React.createElement(icon_1.Icon, { className: "arm-listbox-overlay-icon", icon: selectOverlayIcon.icon, iconSet: selectOverlayIcon.iconSet })) : (selectOverlayIcon))),
            deleteButton && boundValue && (React.createElement(iconButton_1.IconButton, { className: "arm-listbox-delete", onClick: onClickDelete, icon: icon_1.IconUtils.getIconDefinition('Icomoon', 'cross2'), minimalStyle: true })))));
}
// type assertion to ensure generic works with RefForwarded component
// DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
);
exports.ListBox.defaultProps = {
    selectOverlayIcon: icon_1.IconUtils.getIconDefinition('Icomoon', 'arrow-down3'),
    deleteButton: true,
};
