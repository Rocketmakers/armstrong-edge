"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelInput = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var classNames_1 = require("../../utils/classNames");
var input_component_1 = require("../input/input.component");
exports.TelInput = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = tslib_1.__rest(_a, ["className"]);
    return React.createElement(input_component_1.Input, tslib_1.__assign({}, props, { className: classNames_1.ClassNames.concat('arm-tel-input', className), ref: ref, type: "tel" }));
});
