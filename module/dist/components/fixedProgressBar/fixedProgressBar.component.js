"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedProgressBar = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var utils_1 = require("../../utils");
var portal_1 = require("../portal");
var progressBar_component_1 = require("../progressBar/progressBar.component");
/** A ProgressBar which is portaled into a fixed position on the edge of the screen */
var FixedProgressBar = function (_a) {
    var className = _a.className, portalToSelector = _a.portalToSelector, portalTo = _a.portalTo, hidden = _a.hidden, position = _a.position, direction = _a.direction, progressBarProps = tslib_1.__rest(_a, ["className", "portalToSelector", "portalTo", "hidden", "position", "direction"]);
    // ensure that direction is one that is compatible with position
    var fixedDirection = React.useMemo(function () {
        if ((position === 'top' || position === 'bottom') && !(direction === 'left' || direction === 'right')) {
            return 'right';
        }
        if ((position === 'left' || position === 'right') && !(direction === 'up' || direction === 'down')) {
            return 'up';
        }
        return direction;
    }, [position, direction]);
    return (React.createElement(portal_1.Portal, { portalToSelector: portalToSelector, portalTo: portalTo },
        React.createElement(progressBar_component_1.ProgressBar, tslib_1.__assign({ "data-hidden": hidden, direction: fixedDirection, "data-position": position, className: utils_1.ClassNames.concat('arm-global-progress-bar', className) }, progressBarProps))));
};
exports.FixedProgressBar = FixedProgressBar;
exports.FixedProgressBar.defaultProps = {
    position: 'top',
};
