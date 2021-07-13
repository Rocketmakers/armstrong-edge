"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoCompleteInput = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var __1 = require("../..");
var useDidUpdateEffect_1 = require("../../hooks/useDidUpdateEffect");
var useOverridableState_1 = require("../../hooks/useOverridableState");
var classNames_1 = require("../../utils/classNames");
var objects_1 = require("../../utils/objects");
var dropdownItems_1 = require("../dropdownItems");
var textInput_1 = require("../textInput");
/** A text input which displays some options in a dropdown */
exports.AutoCompleteInput = react_1.default.forwardRef(function (_a, ref) {
    var _b;
    var options = _a.options, validationErrorIcon = _a.errorIcon, validationMode = _a.validationMode, validationErrorMessages = _a.validationErrorMessages, bind = _a.bind, className = _a.className, error = _a.error, pending = _a.pending, portalToSelector = _a.portalToSelector, portalTo = _a.portalTo, onTextInputChange = _a.onTextInputChange, textInputValue = _a.textInputValue, filterOptions = _a.filterOptions, onChange = _a.onChange, value = _a.value, allowFreeText = _a.allowFreeText, allowKeyboardNavigationSelection = _a.allowKeyboardNavigationSelection, showAllOptionsOnFocus = _a.showAllOptionsOnFocus, unsetOnClear = _a.unsetOnClear, disabled = _a.disabled, noItemsText = _a.noItemsText, textInputProps = tslib_1.__rest(_a, ["options", "errorIcon", "validationMode", "validationErrorMessages", "bind", "className", "error", "pending", "portalToSelector", "portalTo", "onTextInputChange", "textInputValue", "filterOptions", "onChange", "value", "allowFreeText", "allowKeyboardNavigationSelection", "showAllOptionsOnFocus", "unsetOnClear", "disabled", "noItemsText"]);
    var _c = __1.Form.useBindingTools(bind, {
        value: value,
        onChange: onChange,
        validationErrorMessages: validationErrorMessages,
    }), boundValue = _c[0], setBoundValue = _c[1], _d = _c[2], getFormattedValueFromData = _d.getFormattedValueFromData, myValidationErrorMessages = _d.validationErrorMessages;
    var _e = react_1.default.useState(false), optionsOpen = _e[0], setOptionsOpen = _e[1];
    // log a piece of state to manage whether the options dropdown has just been opened, and no filtering has occurred
    var _f = react_1.default.useState(optionsOpen), justOpened = _f[0], setJustOpened = _f[1];
    react_1.default.useEffect(function () {
        if (optionsOpen) {
            setJustOpened(true);
        }
    }, [optionsOpen]);
    // use the name, but optionally fall back to the id after running it through the bind formatter if it's not provided
    var getOptionName = react_1.default.useCallback(function (option) { var _a; return (_a = option.name) !== null && _a !== void 0 ? _a : getFormattedValueFromData(option.id).toString(); }, [getFormattedValueFromData]);
    // internal state for the text input, overridden by props
    var _g = useOverridableState_1.useOverridableState(((_b = options === null || options === void 0 ? void 0 : options.find(function (option) { return option.id === boundValue; })) === null || _b === void 0 ? void 0 : _b.name) || '', textInputValue, onTextInputChange), textInputInternalValue = _g[0], setTextInputInternalValue = _g[1];
    // Once filtering has occurred, set the just opened state to false
    react_1.default.useEffect(function () {
        setJustOpened(false);
    }, [textInputInternalValue]);
    useDidUpdateEffect_1.useDidUpdateEffect(function () {
        if (unsetOnClear && textInputInternalValue.length === 0) {
            setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(undefined);
        }
    }, [textInputInternalValue]);
    // The provided options, optionally filtered by the text input value
    var filteredOptions = react_1.default.useMemo(function () {
        var showAllOptions = showAllOptionsOnFocus && justOpened;
        if (filterOptions && !showAllOptions && options) {
            if (filterOptions === true) {
                return options.filter(function (option) { return getOptionName(option).toLowerCase().startsWith(textInputInternalValue.toLowerCase()); });
            }
            return options.filter(function (option) { return filterOptions(option, textInputInternalValue); });
        }
        return options || [];
    }, [filterOptions, objects_1.Objects.contentDependency(options), textInputInternalValue, justOpened, showAllOptionsOnFocus]);
    /** when the user clicks on an option, change the value in the textInput */
    var onSelectOption = react_1.default.useCallback(function (id) {
        var _a;
        if (options) {
            var selectedOption = options.find(function (option) { return option.id === id; });
            if (selectedOption) {
                setTextInputInternalValue((_a = selectedOption.name) !== null && _a !== void 0 ? _a : '');
                setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(selectedOption.id);
            }
        }
    }, [bind, allowFreeText, objects_1.Objects.contentDependency(options)]);
    /** Fired when the user changes the value in the text input */
    var onTextInputChangeEvent = react_1.default.useCallback(function (event) {
        var _a;
        var newTextInputValue = event.currentTarget.value || '';
        setTextInputInternalValue(newTextInputValue);
        // if allow free text, bind exact value on every change
        // if inputted text is an option, bind that
        var inputtedOptionIndex = (_a = options === null || options === void 0 ? void 0 : options.findIndex(function (option) { return getOptionName(option) === newTextInputValue; })) !== null && _a !== void 0 ? _a : -1;
        if (inputtedOptionIndex > -1) {
            var inputtedOption = options[inputtedOptionIndex];
            setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(inputtedOption.id);
        }
        else if (allowFreeText) {
            setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(newTextInputValue);
        }
    }, [setTextInputInternalValue, getOptionName, options]);
    // reset the input's value to reflect the bound value
    var resetInputValue = react_1.default.useCallback(function () {
        if (!allowFreeText) {
            var currentOption = options === null || options === void 0 ? void 0 : options.find(function (option) { return option.id === boundValue; });
            if (currentOption) {
                setTextInputInternalValue(getOptionName(currentOption));
            }
            else {
                setTextInputInternalValue('');
            }
        }
    }, [allowFreeText, options, boundValue, getOptionName]);
    useDidUpdateEffect_1.useDidUpdateEffect(function () {
        resetInputValue();
    }, [boundValue, options]);
    // when the user closes the dropdown, reset the input value
    useDidUpdateEffect_1.useDidUpdateEffect(function () {
        if (!optionsOpen) {
            resetInputValue();
        }
    }, [optionsOpen]);
    // if allow free text is true, show the currently typed value at the top of the list of options
    var shouldShowFreeTextItemInDropdown = react_1.default.useMemo(function () { return allowFreeText && textInputInternalValue && !(options === null || options === void 0 ? void 0 : options.find(function (option) { var _a; return ((_a = option.name) !== null && _a !== void 0 ? _a : option.id) === textInputInternalValue; })); }, [allowFreeText, textInputInternalValue, options]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: classNames_1.ClassNames.concat('arm-input', 'arm-autocomplete-input', className), "data-error": error, "data-pending": pending, "data-disabled": disabled, "data-is-option": allowFreeText || textInputValue === boundValue },
            react_1.default.createElement(dropdownItems_1.DropdownItems, { contentClassName: "arm-auto-complete-options", items: tslib_1.__spreadArray(tslib_1.__spreadArray([], (shouldShowFreeTextItemInDropdown ? [{ content: textInputInternalValue, id: textInputInternalValue }] : [])), filteredOptions.map(function (option) { return ({
                    content: getOptionName(option),
                    id: option.id,
                    leftIcon: option.leftIcon,
                    rightIcon: option.rightIcon,
                    group: option.group,
                }); })), isOpen: optionsOpen && !disabled && !!(options === null || options === void 0 ? void 0 : options.length), onOpenChange: setOptionsOpen, portalToSelector: portalToSelector, portalTo: portalTo, onItemSelected: function (id) { return onSelectOption(id); }, allowKeyboardNavigation: allowKeyboardNavigationSelection, currentValue: boundValue ? [boundValue] : [], openWhenClickInside: true, openWhenFocusInside: true, closeWhenClickInside: false, childRootElementSelector: ".arm-input-inner", searchTerm: textInputInternalValue, noItemsText: noItemsText },
                react_1.default.createElement(textInput_1.TextInput, tslib_1.__assign({}, textInputProps, { pending: pending, ref: ref, error: error, value: textInputInternalValue, onChange: onTextInputChangeEvent, validationMode: validationMode, validationErrorMessages: myValidationErrorMessages, errorIcon: validationErrorIcon, disabled: disabled, disableOnPending: false }))))));
}
// type assertion to ensure generic works with RefForwarded component
// DO NOT CHANGE TYPE WITHOUT CHANGING THIS, FIND TYPE BY INSPECTING React.forwardRef
);
exports.AutoCompleteInput.defaultProps = {
    validationMode: 'both',
    allowKeyboardNavigationSelection: true,
    filterOptions: true,
    unsetOnClear: true,
    showAllOptionsOnFocus: true,
    placeholder: 'Begin typing to filter options...',
};
