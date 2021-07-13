"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expandable = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var classNames_1 = require("../../utils/classNames");
var autoResizer_component_1 = require("../autoResizer/autoResizer.component");
/** A div which expands to fit its children when isOpen is true, otherwise it takes up no space - can work horizontally or vertically */
var Expandable = function (_a) {
    var isOpen = _a.isOpen, className = _a.className, direction = _a.direction, nativeProps = tslib_1.__rest(_a, ["isOpen", "className", "direction"]);
    return (React.createElement(autoResizer_component_1.AutoResizer, tslib_1.__assign({ tabIndex: isOpen ? undefined : -1, "aria-hidden": !isOpen, className: classNames_1.ClassNames.concat('arm-expandable', className), "data-direction": direction, "data-is-open": !!isOpen }, nativeProps)));
};
exports.Expandable = Expandable;
exports.Expandable.defaultProps = {
    direction: 'vertical',
};
