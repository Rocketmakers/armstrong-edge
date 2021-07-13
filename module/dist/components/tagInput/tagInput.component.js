"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagInput = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var useOverridableState_1 = require("../../hooks/useOverridableState");
var icon_1 = require("../icon");
var iconButton_1 = require("../iconButton");
var inputWrapper_1 = require("../inputWrapper");
var tag_component_1 = require("../tag/tag.component");
exports.TagInput = React.forwardRef(function (_a, ref) {
    var className = _a.className, bind = _a.bind, validationMode = _a.validationMode, validationErrorIcon = _a.errorIcon, validationErrorMessages = _a.validationErrorMessages, value = _a.value, onChange = _a.onChange, allowDuplicates = _a.allowDuplicates, spaceCreatesTags = _a.spaceCreatesTags, getCanAddTag = _a.getCanAddTag, tagPosition = _a.tagPosition, deleteButton = _a.deleteButton, deleteAllButton = _a.deleteAllButton, pending = _a.pending, disabled = _a.disabled, leftIcon = _a.leftIcon, onRemoveAllTags = _a.onRemoveAllTags, rightOverlay = _a.rightOverlay, error = _a.error, hideIconOnStatus = _a.hideIconOnStatus, leftOverlay = _a.leftOverlay, onTextInputChange = _a.onTextInputChange, onTextInputValueChange = _a.onTextInputValueChange, textInputValue = _a.textInputValue, tags = _a.tags, rightIcon = _a.rightIcon, statusPosition = _a.statusPosition, onAddTag = _a.onAddTag, onRemoveTag = _a.onRemoveTag, scrollValidationErrorsIntoView = _a.scrollValidationErrorsIntoView, placeholder = _a.placeholder, disableOnPending = _a.disableOnPending, nativeProps = tslib_1.__rest(_a, ["className", "bind", "validationMode", "errorIcon", "validationErrorMessages", "value", "onChange", "allowDuplicates", "spaceCreatesTags", "getCanAddTag", "tagPosition", "deleteButton", "deleteAllButton", "pending", "disabled", "leftIcon", "onRemoveAllTags", "rightOverlay", "error", "hideIconOnStatus", "leftOverlay", "onTextInputChange", "onTextInputValueChange", "textInputValue", "tags", "rightIcon", "statusPosition", "onAddTag", "onRemoveTag", "scrollValidationErrorsIntoView", "placeholder", "disableOnPending"]);
    var internalRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return internalRef.current; }, [internalRef]);
    var _b = __1.Form.useBindingTools(bind, {
        value: value,
        onChange: onChange,
        validationErrorMessages: validationErrorMessages,
        validationErrorIcon: validationErrorIcon,
        validationMode: validationMode,
    }), boundValue = _b[0], setBoundValue = _b[1], bindConfig = _b[2];
    // internal state for the text input, overriden by props
    var _c = useOverridableState_1.useOverridableState('', textInputValue, onTextInputValueChange), textInputInternalValue = _c[0], setTextInputInternalValue = _c[1];
    var currentTags = React.useMemo(function () {
        if (tags) {
            return tags;
        }
        if (boundValue) {
            return boundValue.map(function (val) { return ({ name: val, id: val }); });
        }
        return [];
    }, [tags, boundValue]);
    var addTag = React.useCallback(function (newTag) {
        if (newTag && (allowDuplicates || (!(boundValue === null || boundValue === void 0 ? void 0 : boundValue.includes(newTag)) && (!getCanAddTag || getCanAddTag(newTag))))) {
            setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue(tslib_1.__spreadArray(tslib_1.__spreadArray([], (boundValue || [])), [newTag.trim()]));
        }
        setTextInputInternalValue('');
        onAddTag === null || onAddTag === void 0 ? void 0 : onAddTag(newTag);
    }, [boundValue, allowDuplicates, setBoundValue, onAddTag]);
    var removeTag = React.useCallback(function (tagToRemove) {
        setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue((boundValue || []).filter(function (tag) { return tag !== tagToRemove; }));
        setTextInputInternalValue('');
        onRemoveTag === null || onRemoveTag === void 0 ? void 0 : onRemoveTag(tagToRemove);
    }, [boundValue, setBoundValue, onRemoveTag]);
    var clearTags = React.useCallback(function () {
        setBoundValue === null || setBoundValue === void 0 ? void 0 : setBoundValue([]);
        setTextInputInternalValue('');
        onRemoveAllTags === null || onRemoveAllTags === void 0 ? void 0 : onRemoveAllTags();
    }, [setBoundValue, onRemoveAllTags]);
    var onKeyDown = React.useCallback(function (event) {
        switch (event.key) {
            case 'Enter': {
                addTag(textInputInternalValue);
                event.preventDefault();
                break;
            }
            case ' ': {
                if (spaceCreatesTags) {
                    addTag(textInputInternalValue);
                    event.preventDefault();
                }
                break;
            }
            case 'Backspace': {
                if (textInputInternalValue === '' && (currentTags === null || currentTags === void 0 ? void 0 : currentTags.length) >= 1 && tagPosition === 'inside') {
                    removeTag(currentTags[currentTags.length - 1].id);
                }
                break;
            }
            default: {
                break;
            }
        }
    }, [textInputInternalValue, addTag, spaceCreatesTags, tagPosition, boundValue, removeTag]);
    var tagsJsx = (React.createElement(React.Fragment, null, currentTags === null || currentTags === void 0 ? void 0 : currentTags.map(function (tag, index) { return (React.createElement(tag_component_1.Tag, { content: tag.name, leftIcon: tag.leftIcon, rightIcon: tag.rightIcon, key: allowDuplicates ? "" + tag.id + index : tag.id, onRemove: deleteButton ? function () { return removeTag(tag.id); } : undefined })); })));
    return (React.createElement(inputWrapper_1.InputWrapper, { className: __1.ClassNames.concat('arm-tag-input', className), validationErrorMessages: bindConfig.validationErrorMessages, errorIcon: bindConfig.validationErrorIcon, validationMode: bindConfig.validationMode, "data-tag-position": tagPosition, "data-has-tags": !!(currentTags === null || currentTags === void 0 ? void 0 : currentTags.length), pending: pending, disabled: disabled, leftIcon: leftIcon, rightOverlay: rightOverlay, error: error, hideIconOnStatus: hideIconOnStatus, leftOverlay: leftOverlay, rightIcon: rightIcon, disableOnPending: disableOnPending, statusPosition: statusPosition, onClick: function () { var _a; return (_a = internalRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, above: tagPosition === 'above' ? tagsJsx : undefined, below: tagPosition === 'below' ? tagsJsx : undefined, scrollValidationErrorsIntoView: scrollValidationErrorsIntoView },
        React.createElement("div", { className: "arm-tag-input-inner" },
            tagPosition === 'inside' && tagsJsx,
            React.createElement("input", tslib_1.__assign({ className: "arm-tag-input-input" }, nativeProps, { ref: internalRef, value: textInputInternalValue, placeholder: !(boundValue === null || boundValue === void 0 ? void 0 : boundValue.length) || tagPosition !== 'inside' ? placeholder : undefined, onChange: function (event) {
                    setTextInputInternalValue(event.currentTarget.value);
                    onTextInputChange === null || onTextInputChange === void 0 ? void 0 : onTextInputChange(event);
                }, onKeyDown: onKeyDown }))),
        deleteAllButton && !!(boundValue === null || boundValue === void 0 ? void 0 : boundValue.length) && (React.createElement(iconButton_1.IconButton, { minimalStyle: true, onClick: clearTags, icon: icon_1.IconUtils.getIconDefinition('Icomoon', 'cross2') }))));
});
exports.TagInput.defaultProps = {
    tagPosition: 'inside',
    deleteButton: true,
    deleteAllButton: true,
};
