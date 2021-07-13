"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoCompleteInputMulti = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var __1 = require("../..");
var useOverridableState_1 = require("../../hooks/useOverridableState");
var classNames_1 = require("../../utils/classNames");
var dropdownItems_1 = require("../dropdownItems");
var tagInput_1 = require("../tagInput");
/** A text input which displays some options in a dropdown and allows the user to select multiple */
exports.AutoCompleteInputMulti = react_1.default.forwardRef(function (_a, ref) {
    var options = _a.options, validationErrorIcon = _a.errorIcon, validationMode = _a.validationMode, validationErrorMessages = _a.validationErrorMessages, bind = _a.bind, className = _a.className, error = _a.error, pending = _a.pending, portalTo = _a.portalTo, portalToSelector = _a.portalToSelector, onTextInputChange = _a.onTextInputChange, textInputValue = _a.textInputValue, filterOptions = _a.filterOptions, onChange = _a.onChange, tagPosition = _a.tagPosition, value = _a.value, allowFreeText = _a.allowFreeText, disabled = _a.disabled, allowKeyboardNavigationSelection = _a.allowKeyboardNavigationSelection, getSelectedOptionTag = _a.getSelectedOptionTag, placeholder = _a.placeholder, noItemsText = _a.noItemsText, textInputProps = tslib_1.__rest(_a, ["options", "errorIcon", "validationMode", "validationErrorMessages", "bind", "className", "error", "pending", "portalTo", "portalToSelector", "onTextInputChange", "textInputValue", "filterOptions", "onChange", "tagPosition", "value", "allowFreeText", "disabled", "allowKeyboardNavigationSelection", "getSelectedOptionTag", "placeholder", "noItemsText"]);
    var _b = __1.Form.useBindingTools(bind, {
        value: value,
        onChange: onChange,
        validationErrorMessages: validationErrorMessages,
    }), boundValue = _b[0], setBoundValue = _b[1], _c = _b[2], getFormattedValueFromData = _c.getFormattedValueFromData, myValidationErrorMessages = _c.validationErrorMessages;
    var _d = react_1.default.useState(false), optionsOpen = _d[0], setOptionsOpen = _d[1];
    // use the name, but optionally fall back to the id after running it through the bind formatter if it's not provided
    var getOptionName = react_1.default.useCallback(function (option) { var _a; return (_a = option.name) !== null && _a !== void 0 ? _a : option.id.toString(); }, [getFormattedValueFromData]);
    // internal state for the text input, overridden by props
    var _e = useOverridableState_1.useOverridableState('', textInputValue, onTextInputChange), textInputInternalValue = _e[0], setTextInputInternalValue = _e[1];
    // The provided options, optionally filtered by the text input value
    var filteredOptions = react_1.default.useMemo(function () {
        if (filterOptions && options) {
            if (filterOptions === true) {
                return options.filter(function (option) { return getOptionName(option).toLowerCase().startsWith(textInputInternalValue.toLowerCase()); });
            }
            return options.filter(function (option) { return filterOptions(option, textInputInternalValue); });
        }
        return options || [];
    }, [filterOptions, JSON.stringify(options), textInputInternalValue]);
    // remove a given tag value from the array using its ID (the value which is bound)
    var onRemoveTag = react_1.default.useCallback(function (id) {
        setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue((boundValue === null || boundValue === void 0 ? void 0 : boundValue.filter(function (item) { return item !== id; })) || []);
    }, [boundValue, setBoundValue]);
    /** when the user clicks on an option, change the value in the textInput */
    var onSelectOption = react_1.default.useCallback(function (id) {
        if (boundValue === null || boundValue === void 0 ? void 0 : boundValue.find(function (item) { return item === id; })) {
            onRemoveTag(id);
        }
        else {
            setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(tslib_1.__spreadArray(tslib_1.__spreadArray([], (boundValue || [])), [id]));
        }
    }, [bind, boundValue, options, onRemoveTag]);
    // get a value or option into a form that can be used to render a tag
    // use the given getSelectedOptionTag prop, or construct a tag from the array of options, or just make one using the ID if one cannot be found
    var parseOptionTag = react_1.default.useCallback(function (item) {
        if (getSelectedOptionTag) {
            return getSelectedOptionTag(item);
        }
        var selectedOption = options === null || options === void 0 ? void 0 : options.find(function (option) { return item === option.id; });
        if (selectedOption) {
            return {
                name: selectedOption.name || selectedOption.id.toString(),
                id: selectedOption.id,
                leftIcon: selectedOption.leftIcon,
                rightIcon: selectedOption.rightIcon,
            };
        }
        return {
            name: item.toString(),
            id: item,
        };
    }, [getSelectedOptionTag, options]);
    // the currently bound value of the input parsed as an array of tags
    var selectedOptionTags = react_1.default.useMemo(function () { return (boundValue || []).map(function (item) { return parseOptionTag(item); }); }, [parseOptionTag, boundValue]);
    var onAddTag = react_1.default.useCallback(function (addedValue) {
        if (allowFreeText && !(boundValue === null || boundValue === void 0 ? void 0 : boundValue.find(function (item) { return item === addedValue; }))) {
            setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(tslib_1.__spreadArray(tslib_1.__spreadArray([], (boundValue || [])), [addedValue]));
        }
    }, [allowFreeText, boundValue, setBoundValue]);
    // options to render in the dropdown if the prop allowFreeText is true
    // first shows what the user is currently typing as the first value, then shows all the free text values that have been bound up which aren't
    // in the options array
    var dropdownItems = react_1.default.useMemo(function () {
        var showCurrentlyTypingOption = allowFreeText && textInputInternalValue && !(options === null || options === void 0 ? void 0 : options.find(function (option) { return getOptionName(option) === textInputInternalValue; }));
        return tslib_1.__spreadArray(tslib_1.__spreadArray(tslib_1.__spreadArray([], (showCurrentlyTypingOption ? [{ content: textInputInternalValue, id: textInputInternalValue }] : [])), (boundValue || [])
            .map(function (item) { return parseOptionTag(item); })
            .filter(function (item) {
            var notAnOption = !(options === null || options === void 0 ? void 0 : options.find(function (option) { return option.id === item.id; }));
            var filterByTextInputValue = !textInputInternalValue || (item.name || item.id).toString().startsWith(textInputInternalValue);
            return notAnOption && filterByTextInputValue;
        })
            .map(function (item) { return ({ content: item.name || item.id.toString(), id: item.id }); })), filteredOptions.map(function (option) { return ({
            content: getOptionName(option),
            id: option.id,
            leftIcon: option.leftIcon,
            rightIcon: option.rightIcon,
            group: option.group,
        }); }));
    }, [allowFreeText, textInputInternalValue, options, getSelectedOptionTag, parseOptionTag, getOptionName]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: classNames_1.ClassNames.concat('arm-input', 'arm-autocomplete-input-multi', className), "data-error": error, "data-pending": pending, "data-disabled": disabled, "data-is-option": allowFreeText || textInputValue === boundValue },
            react_1.default.createElement(dropdownItems_1.DropdownItems, { contentClassName: "arm-auto-complete-options", items: dropdownItems, isOpen: optionsOpen && !disabled && !!(options === null || options === void 0 ? void 0 : options.length), onOpenChange: setOptionsOpen, portalToSelector: portalToSelector, portalTo: portalTo, onItemSelected: function (id) { return onSelectOption(id); }, allowKeyboardNavigation: allowKeyboardNavigationSelection, currentValue: boundValue || [], openWhenClickInside: true, openWhenFocusInside: true, closeOnSelection: false, childRootElementSelector: ".arm-input-inner", searchTerm: textInputInternalValue, noItemsText: noItemsText, closeWhenClickInside: false },
                react_1.default.createElement(tagInput_1.TagInput, tslib_1.__assign({}, textInputProps, { pending: pending, ref: ref, error: error, tags: selectedOptionTags, tagPosition: tagPosition, onKeyDown: function () { return setOptionsOpen(true); }, validationMode: validationMode, onFocus: function () { return setOptionsOpen(true); }, textInputValue: textInputInternalValue, onTextInputValueChange: setTextInputInternalValue, validationErrorMessages: myValidationErrorMessages, errorIcon: validationErrorIcon, disabled: disabled, disableOnPending: false, onAddTag: onAddTag, onRemoveTag: function (id) { return onRemoveTag(id); }, placeholder: !(boundValue === null || boundValue === void 0 ? void 0 : boundValue.length) ? placeholder : '' }))))));
}
// type assertion to ensure generic works with RefForwarded component
// DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
);
exports.AutoCompleteInputMulti.defaultProps = {
    validationMode: 'both',
    allowKeyboardNavigationSelection: true,
    filterOptions: true,
    placeholder: 'Begin typing to filter options...',
};
