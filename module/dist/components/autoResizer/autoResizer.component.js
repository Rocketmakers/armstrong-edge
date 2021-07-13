"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoResizer = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var hooks_1 = require("../../hooks");
var classNames_1 = require("../../utils/classNames");
/** A div which will automatically resize depending on the size of its children */
var AutoResizer = function (_a) {
    var className = _a.className, children = _a.children, style = _a.style, nativeProps = tslib_1.__rest(_a, ["className", "children", "style"]);
    var contentRef = React.useRef(null);
    var _b = hooks_1.useBoundingClientRect(contentRef)[0], height = _b.height, width = _b.width;
    return (React.createElement("div", tslib_1.__assign({}, nativeProps, { className: classNames_1.ClassNames.concat('arm-auto-resizer', className), style: tslib_1.__assign({ '--arm-auto-resizer-width': width + "px", '--arm-auto-resizer-height': height + "px" }, (style || {})) }),
        React.createElement("div", { ref: contentRef, className: "arm-auto-resizer-content" }, children)));
};
exports.AutoResizer = AutoResizer;
