"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var hooks_1 = require("../../hooks");
var utils_1 = require("../../utils");
/** Incredibly simple component designed to take some of the boilerplate out of making some elements appear in a row */
var Group = function (_a) {
    var children = _a.children, className = _a.className, title = _a.title, htmlId = _a.id, htmlProps = tslib_1.__rest(_a, ["children", "className", "title", "id"]);
    var id = hooks_1.useGeneratedId('arm-grp', htmlId);
    var labelId = title && id + "_label";
    return (React.createElement("div", tslib_1.__assign({ className: utils_1.ClassNames.concat('arm-group', className) }, htmlProps, { "data-has-title": !!title, id: id, "aria-labelledby": labelId }),
        title && (React.createElement("p", { className: "arm-group-title", id: labelId }, title)),
        React.createElement("div", { className: "arm-group-inner" }, children)));
};
exports.Group = Group;
