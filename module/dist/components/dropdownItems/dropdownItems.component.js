"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownItems = exports.DropdownItem = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var hooks_1 = require("../../hooks");
var useGeneratedId_1 = require("../../hooks/useGeneratedId");
var arrays_1 = require("../../utils/arrays");
var classNames_1 = require("../../utils/classNames");
var dropdown_1 = require("../dropdown");
var icon_1 = require("../icon");
var iconWrapper_1 = require("../iconWrapper");
exports.DropdownItem = React.forwardRef(function (_a, ref) {
    var content = _a.content, htmlProps = _a.htmlProps, onMouseUp = _a.onMouseUp, isKeyboardSelected = _a.isKeyboardSelected, isSelected = _a.isSelected, onMouseEnter = _a.onMouseEnter, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, onClick = _a.onClick, id = _a.id, idPrefix = _a.idPrefix;
    return (React.createElement("li", tslib_1.__assign({}, htmlProps, { ref: ref, className: classNames_1.ClassNames.concat('arm-dropdown-item', htmlProps === null || htmlProps === void 0 ? void 0 : htmlProps.className), onMouseUp: onMouseUp, onMouseDown: function (event) { return event.stopPropagation(); }, onClick: onClick, "data-keyboard-selected": isKeyboardSelected, "data-selected": isSelected, onMouseEnter: onMouseEnter, id: idPrefix + "_" + id }),
        React.createElement(iconWrapper_1.IconWrapper, { leftIcon: leftIcon, rightIcon: rightIcon },
            React.createElement("p", null, content)),
        isSelected && React.createElement(icon_1.Icon, { iconSet: "Icomoon", icon: "checkmark3", className: "arm-dropdown-item-checkmark" })));
});
/** A dropdown which renders a list of selectable options and allows keyboard navigation when its children are focused */
var DropdownItems = function (_a) {
    var items = _a.items, allowKeyboardNavigation = _a.allowKeyboardNavigation, onItemSelected = _a.onItemSelected, children = _a.children, isOpen = _a.isOpen, currentValue = _a.currentValue, onKeyDown = _a.onKeyDown, closeOnSelection = _a.closeOnSelection, searchTerm = _a.searchTerm, className = _a.className, focusableWrapper = _a.focusableWrapper, onMouseDown = _a.onMouseDown, onOpenChange = _a.onOpenChange, htmlId = _a.id, noItemsText = _a.noItemsText, dropdownProps = tslib_1.__rest(_a, ["items", "allowKeyboardNavigation", "onItemSelected", "children", "isOpen", "currentValue", "onKeyDown", "closeOnSelection", "searchTerm", "className", "focusableWrapper", "onMouseDown", "onOpenChange", "id", "noItemsText"]);
    var itemRefs = React.useRef({});
    var _b = React.useState(0), keyboardSelectedItemIndex = _b[0], setKeyboardSelectedItemIndex = _b[1];
    var groupedItems = React.useMemo(function () { return arrays_1.Arrays.arrayToArraysByKey(items, function (item) { return item.group || ''; }); }, [items]);
    var resetKeyboardSelectedItemIndex = React.useCallback(function () {
        var selectedItemIndex = items.findIndex(function (item) { return currentValue === null || currentValue === void 0 ? void 0 : currentValue.includes(item.id); });
        setKeyboardSelectedItemIndex(selectedItemIndex > -1 ? selectedItemIndex : 0);
    }, [currentValue]);
    React.useLayoutEffect(function () {
        if (!isOpen) {
            resetKeyboardSelectedItemIndex();
        }
    }, [isOpen]);
    React.useLayoutEffect(function () {
        resetKeyboardSelectedItemIndex();
    }, [items.length]);
    hooks_1.useDidUpdateEffect(function () {
        if (isOpen && (searchTerm === null || searchTerm === void 0 ? void 0 : searchTerm.length)) {
            var newIndex = items.findIndex(function (item) { return item.content.startsWith(searchTerm); });
            if (newIndex > -1) {
                setKeyboardSelectedItemIndex(newIndex);
            }
        }
    }, [searchTerm]);
    var onKeyDownEvent = React.useCallback(function (event) {
        var _a, _b, _c, _d;
        onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(event);
        if (!isOpen && allowKeyboardNavigation && event.key !== 'Tab' && event.key !== 'Escape') {
            onOpenChange(true);
        }
        if (isOpen && allowKeyboardNavigation) {
            switch (event.key) {
                case 'ArrowDown': {
                    var newItemIndex = Math.min((items.length || 0) - 1, keyboardSelectedItemIndex + 1);
                    setKeyboardSelectedItemIndex(newItemIndex);
                    (_b = (_a = itemRefs.current) === null || _a === void 0 ? void 0 : _a[items[newItemIndex].id]) === null || _b === void 0 ? void 0 : _b.scrollIntoView(false);
                    event.preventDefault();
                    break;
                }
                case 'ArrowUp': {
                    var newItemIndex = Math.max(0, keyboardSelectedItemIndex - 1);
                    setKeyboardSelectedItemIndex(newItemIndex);
                    (_d = (_c = itemRefs.current) === null || _c === void 0 ? void 0 : _c[items[newItemIndex].id]) === null || _d === void 0 ? void 0 : _d.scrollIntoView();
                    event.preventDefault();
                    break;
                }
                case 'Enter': {
                    var selectedItem = arrays_1.Arrays.NestedArrays.getAtOverallIndex(keyboardSelectedItemIndex, groupedItems);
                    if (selectedItem) {
                        onItemSelected(selectedItem.id);
                        if (closeOnSelection) {
                            onOpenChange(false);
                        }
                    }
                    event.preventDefault();
                    break;
                }
                case 'Tab':
                case 'Escape': {
                    onOpenChange(false);
                    break;
                }
                default:
                    break;
            }
        }
    }, [keyboardSelectedItemIndex, onItemSelected, items, isOpen, allowKeyboardNavigation, onOpenChange, itemRefs, groupedItems]);
    hooks_1.useDidUpdateEffect(function () {
        if (isOpen) {
            setTimeout(function () {
                var _a, _b;
                (_b = (_a = itemRefs.current) === null || _a === void 0 ? void 0 : _a[items[keyboardSelectedItemIndex].id]) === null || _b === void 0 ? void 0 : _b.scrollIntoView({ block: 'center' });
            });
        }
    }, [isOpen]);
    // used to ensure that clicks on the dropdown are not misread as a mouseUp on a dropdown item if the dropdown content is overlaying the click listener
    var _c = hooks_1.useHasTimeElapsed(500), hasTimePassedSinceMouseDown = _c[0], beginHasTimeElapsed = _c[1], resetHasTimeElapsed = _c[2];
    var onMouseDownEvent = React.useCallback(function (event) {
        beginHasTimeElapsed();
        onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown(event);
    }, [onMouseDown, beginHasTimeElapsed]);
    var onSelectItem = React.useCallback(function (id, ignoreHasTimePassed) {
        if (ignoreHasTimePassed || hasTimePassedSinceMouseDown) {
            if (closeOnSelection) {
                onOpenChange(false);
            }
            onItemSelected === null || onItemSelected === void 0 ? void 0 : onItemSelected(id);
            resetHasTimeElapsed();
        }
    }, [closeOnSelection, onOpenChange, onItemSelected, hasTimePassedSinceMouseDown]);
    var id = useGeneratedId_1.useGeneratedId('arm_dd', htmlId);
    return (React.createElement(dropdown_1.Dropdown, tslib_1.__assign({}, dropdownProps, { className: classNames_1.ClassNames.concat('arm-dropdown-items', className), contentClassName: "arm-dropdown-items-content", isOpen: isOpen, onOpenChange: onOpenChange, onKeyDown: onKeyDownEvent, tabIndex: focusableWrapper ? 0 : undefined, "aria-haspopup": "listbox", "aria-labelledby": id + "_item", onMouseDown: onMouseDownEvent, id: id, dropdownContent: React.createElement("ul", { "aria-labelledby": "" + id, id: id + "_list", "aria-activedescendant": id + "_item_" + (currentValue === null || currentValue === void 0 ? void 0 : currentValue[0]), role: "listbox" }, items.length === 0 ? (React.createElement("li", { className: "arm-dropdown-items-no-item-text" },
            React.createElement("p", null, noItemsText))) : (groupedItems.map(function (group, groupIndex) { return (React.createElement(React.Fragment, { key: group.key },
            group.key && (React.createElement("li", { className: "arm-dropdown-items-group-title" },
                React.createElement("p", null, group.key))),
            group.items.map(function (item, index) {
                // get overall index in array
                var arrayIndex = arrays_1.Arrays.NestedArrays.getOverallIndex(index, groupIndex, groupedItems);
                return (React.createElement(exports.DropdownItem, tslib_1.__assign({}, item, { key: item.id + index.toString(), onMouseUp: function (event) {
                        onSelectItem(item.id);
                        event.preventDefault();
                    }, idPrefix: id + "_item", onClick: function () { return onSelectItem(item.id, true); }, onMouseEnter: function () { return setKeyboardSelectedItemIndex(arrayIndex); }, isKeyboardSelected: !!allowKeyboardNavigation && keyboardSelectedItemIndex === arrayIndex, isSelected: !!(currentValue === null || currentValue === void 0 ? void 0 : currentValue.includes(item.id)), ref: function (optionItemRef) {
                        itemRefs.current[item.id] = optionItemRef;
                    } })));
            }))); }))) }), children));
};
exports.DropdownItems = DropdownItems;
exports.DropdownItems.defaultProps = {
    closeOnSelection: true,
    noItemsText: 'No results',
};
