"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressBar = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var utils_1 = require("../../utils");
/** Show a progress bar using a progress property */
var ProgressBar = function (_a) {
    var progress = _a.progress, direction = _a.direction, labelText = _a.labelText, labelVariant = _a.labelVariant, colorBreakpoints = _a.colorBreakpoints, className = _a.className, nativeProps = tslib_1.__rest(_a, ["progress", "direction", "labelText", "labelVariant", "colorBreakpoints", "className"]);
    var color = React.useMemo(function () { return !!(colorBreakpoints === null || colorBreakpoints === void 0 ? void 0 : colorBreakpoints.length) && __1.Colors.RGBToHex(__1.Colors.multiLerpRGB(colorBreakpoints.map(__1.Colors.colorToRGB), progress)); }, [colorBreakpoints, progress]);
    return (React.createElement("div", tslib_1.__assign({ className: utils_1.ClassNames.concat('arm-progress-bar', className), "data-direction": direction, "data-has-label": !!labelText, style: { '--arm-progress-bar-color': color, '--arm-progress-bar-progress': progress + "%" }, role: "progressbar", "aria-valuenow": progress, "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuetext": labelText }, nativeProps),
        React.createElement("div", { className: "arm-progress-bar-progress" }),
        labelText && (React.createElement("div", { className: "arm-progress-bar-label", "data-variant": labelVariant },
            React.createElement("p", null, labelText)))));
};
exports.ProgressBar = ProgressBar;
exports.ProgressBar.defaultProps = {
    direction: 'right',
    labelVariant: 'centre',
};
