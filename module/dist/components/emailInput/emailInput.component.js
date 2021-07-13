"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailInput = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var classNames_1 = require("../../utils/classNames");
var input_component_1 = require("../input/input.component");
/** Wrap up a text input with type=email */
exports.EmailInput = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = tslib_1.__rest(_a, ["className"]);
    return React.createElement(input_component_1.Input, tslib_1.__assign({}, props, { className: classNames_1.ClassNames.concat('arm-email-input', className), ref: ref, type: "email" }));
});
