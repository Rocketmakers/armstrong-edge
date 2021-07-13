"use strict";
/* eslint-disable no-nested-ternary */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stepper = exports.StepperStep = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var icon_1 = require("../icon");
var status_1 = require("../status");
exports.StepperStep = React.forwardRef(function (_a, ref) {
    var isCurrent = _a.isCurrent, isComplete = _a.isComplete, isPrevious = _a.isPrevious, onClick = _a.onClick, icon = _a.icon, children = _a.children, name = _a.name, disabled = _a.disabled, index = _a.index, completeIcon = _a.completeIcon, small = _a.small, nextIsSmall = _a.nextIsSmall, spinnerIcon = _a.spinnerIcon, error = _a.error, errorIcon = _a.errorIcon, pending = _a.pending;
    var onClickEvent = React.useCallback(function (event) {
        if (!disabled) {
            onClick === null || onClick === void 0 ? void 0 : onClick(event);
        }
    }, [onClick, disabled]);
    return (React.createElement("button", { className: "arm-stepper-step", "aria-current": isCurrent && 'step', onClick: onClickEvent, "data-current": isCurrent, "data-previous": isPrevious, "data-complete": isComplete, "data-pending": pending, "data-error": error, "data-small": small, "data-next-small": nextIsSmall, disabled: disabled, title: name, ref: ref },
        React.createElement("div", { className: "arm-stepper-step-icon" }, error || pending ? (React.createElement(status_1.Status, { error: error, errorIcon: errorIcon, pending: pending, spinnerIcon: spinnerIcon })) : completeIcon && isComplete ? (React.createElement(icon_1.Icon, { iconSet: completeIcon.iconSet, icon: completeIcon.icon })) : icon ? (React.createElement(icon_1.Icon, { iconSet: icon.iconSet, icon: icon.icon })) : (Number.isInteger(index) && React.createElement("p", { className: "arm-stepper-step-icon-index" }, index + 1))),
        name && (React.createElement("div", { className: "arm-stepper-step-name" },
            React.createElement("p", null, name))),
        children));
});
/** R */
exports.Stepper = React.forwardRef(function (_a, ref) {
    var steps = _a.steps, stepIndex = _a.stepIndex, onStepIndexChange = _a.onStepIndexChange, children = _a.children, completeIcon = _a.completeIcon, showIndex = _a.showIndex, direction = _a.direction, spinnerIcon = _a.spinnerIcon, errorIcon = _a.errorIcon;
    return (React.createElement("div", { className: "arm-stepper", ref: ref, "data-direction": direction, style: { '--arm-stepper-length': "" + ((steps === null || steps === void 0 ? void 0 : steps.length) || 0) } }, steps === null || steps === void 0 ? void 0 :
        steps.map(function (step, index) { return (React.createElement(exports.StepperStep, tslib_1.__assign({}, step, { key: index, onClick: onStepIndexChange ? function () { return onStepIndexChange(index); } : undefined, isCurrent: stepIndex === index, isPrevious: index < stepIndex, index: showIndex ? index : undefined, completeIcon: completeIcon, small: !showIndex && !step.icon, nextIsSmall: !showIndex && !!steps[index + 1] && !steps[index + 1].icon, spinnerIcon: spinnerIcon, errorIcon: errorIcon }))); }),
        children));
});
exports.Stepper.defaultProps = {
    direction: 'horizontal',
};
