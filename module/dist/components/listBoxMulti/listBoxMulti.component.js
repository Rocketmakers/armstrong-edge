"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBoxMulti = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var classNames_1 = require("../../utils/classNames");
var dropdownItems_1 = require("../dropdownItems");
var icon_1 = require("../icon");
var iconButton_1 = require("../iconButton");
var inputWrapper_1 = require("../inputWrapper");
var tag_1 = require("../tag");
/** A DOM recreation of a select element, which binds to an array of Id values */
exports.ListBoxMulti = React.forwardRef(function (_a, ref) {
    var bind = _a.bind, options = _a.options, leftIcon = _a.leftIcon, leftOverlay = _a.leftOverlay, rightIcon = _a.rightIcon, rightOverlay = _a.rightOverlay, className = _a.className, onSelectOption = _a.onSelectOption, value = _a.value, validationErrorIcon = _a.errorIcon, validationErrorMessages = _a.validationErrorMessages, validationMode = _a.validationMode, selectOverlayIcon = _a.selectOverlayIcon, pending = _a.pending, disabled = _a.disabled, placeholder = _a.placeholder, deleteButton = _a.deleteButton, statusPosition = _a.statusPosition, scrollValidationErrorsIntoView = _a.scrollValidationErrorsIntoView, renderPreview = _a.renderPreview, onValueChange = _a.onValueChange, disableOnPending = _a.disableOnPending, wrapperClassName = _a.wrapperClassName, noItemsText = _a.noItemsText;
    var internalRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return internalRef.current; }, [internalRef]);
    var _b = __1.Form.useBindingTools(bind, {
        value: value,
        validationErrorMessages: validationErrorMessages,
        validationErrorIcon: validationErrorIcon,
        validationMode: validationMode,
        onChange: onValueChange,
    }), boundValue = _b[0], setBoundValue = _b[1], bindConfig = _b[2];
    var _c = React.useState(false), dropdownOpen = _c[0], setDropdownOpen = _c[1];
    var removeItem = React.useCallback(function (id) {
        setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue((boundValue === null || boundValue === void 0 ? void 0 : boundValue.filter(function (item) { return item !== id; })) || []);
    }, [boundValue, setBoundValue]);
    var onItemSelected = React.useCallback(function (option) {
        onSelectOption === null || onSelectOption === void 0 ? void 0 : onSelectOption(option);
        if (option) {
            if (boundValue === null || boundValue === void 0 ? void 0 : boundValue.find(function (item) { return item === option.id; })) {
                removeItem(option.id);
            }
            else {
                setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(tslib_1.__spreadArray(tslib_1.__spreadArray([], (boundValue || [])), [option.id]));
            }
        }
        else {
            setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue([]);
        }
    }, [onSelectOption, options, bind, boundValue, setBoundValue]);
    var currentOptions = React.useMemo(function () {
        return boundValue === null || boundValue === void 0 ? void 0 : boundValue.map(function (item) { return options.find(function (option) { return option.id === item; }) || { id: item, name: item.toString() }; });
    }, [boundValue, options]);
    return (React.createElement(dropdownItems_1.DropdownItems, { isOpen: dropdownOpen, onOpenChange: setDropdownOpen, items: options.map(function (option) {
            var _a;
            return ({
                content: (_a = option.name) !== null && _a !== void 0 ? _a : option.id.toString(),
                id: option.id,
                leftIcon: option.leftIcon,
                rightIcon: option.rightIcon,
                group: option.group,
            });
        }), onItemSelected: function (item) { return onItemSelected(options.find(function (option) { return option.id === item; })); }, allowKeyboardNavigation: true, focusableWrapper: true, currentValue: boundValue, childRootElementSelector: ".arm-input-inner", closeOnSelection: false, className: classNames_1.ClassNames.concat('arm-listbox-multi-wrapper', wrapperClassName), noItemsText: noItemsText },
        React.createElement(inputWrapper_1.InputWrapper, { ref: internalRef, className: classNames_1.ClassNames.concat('arm-listbox-multi', className), leftIcon: leftIcon, rightIcon: rightIcon, leftOverlay: leftOverlay, rightOverlay: rightOverlay, validationErrorMessages: bindConfig.validationErrorMessages, errorIcon: bindConfig.validationErrorIcon, validationMode: bindConfig.validationMode, statusPosition: statusPosition, pending: pending, disabled: disabled, disableOnPending: disableOnPending, scrollValidationErrorsIntoView: scrollValidationErrorsIntoView },
            React.createElement("div", { className: "arm-listbox-multi-inner" },
                React.createElement("div", { className: "arm-listbox-multi-content" }, (currentOptions === null || currentOptions === void 0 ? void 0 : currentOptions.length) ? (React.createElement(React.Fragment, null, renderPreview
                    ? renderPreview(currentOptions)
                    : currentOptions.map(function (tag) {
                        var _a;
                        return (React.createElement(tag_1.Tag, { content: (_a = tag.name) !== null && _a !== void 0 ? _a : tag.id.toString(), leftIcon: tag.leftIcon, rightIcon: tag.rightIcon, key: tag.id, onRemove: function () { return removeItem(tag.id); } }));
                    }))) : (placeholder && React.createElement("p", { className: "placeholder" }, placeholder)))),
            selectOverlayIcon &&
                (icon_1.IconUtils.isIconDefinition(selectOverlayIcon) ? (React.createElement(icon_1.Icon, { className: "arm-listbox-multi-overlay-icon", icon: selectOverlayIcon.icon, iconSet: selectOverlayIcon.iconSet })) : (selectOverlayIcon)),
            deleteButton && !!(boundValue === null || boundValue === void 0 ? void 0 : boundValue.length) && (React.createElement(iconButton_1.IconButton, { className: "arm-listbox-multi-delete", onClick: function (event) {
                    onItemSelected(undefined);
                    setDropdownOpen(false);
                    event.stopPropagation();
                }, onMouseDown: function (event) { return event.stopPropagation(); }, onMouseUp: function (event) { return event.stopPropagation(); }, icon: icon_1.IconUtils.getIconDefinition('Icomoon', 'cross2'), minimalStyle: true })))));
}
// type assertion to ensure generic works with RefForwarded component
// DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
);
exports.ListBoxMulti.defaultProps = {
    selectOverlayIcon: icon_1.IconUtils.getIconDefinition('Icomoon', 'arrow-down3'),
    deleteButton: true,
};
