"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownButton = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var classNames_1 = require("../../utils/classNames");
var button_1 = require("../button");
var dropdown_component_1 = require("../dropdown/dropdown.component");
/** A button which opens a dropdown below it */
var DropdownButton = function (_a) {
    var dropdownContent = _a.dropdownContent, className = _a.className, children = _a.children, buttonProps = tslib_1.__rest(_a, ["dropdownContent", "className", "children"]);
    var _b = React.useState(false), dropdownOpen = _b[0], setDropdownOpen = _b[1];
    return (React.createElement(dropdown_component_1.Dropdown, { isOpen: dropdownOpen, onOpenChange: setDropdownOpen, className: classNames_1.ClassNames.concat('arm-dropdown-button', className), dropdownContent: dropdownContent },
        React.createElement(button_1.Button, tslib_1.__assign({}, buttonProps), children)));
};
exports.DropdownButton = DropdownButton;
