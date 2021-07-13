"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideMenu = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var utils_1 = require("../../utils");
var modal_1 = require("../modal");
/** Extends the Modal component (see docs for modal) with some extra features and styling to work as a slide in sidebar */
var SideMenu = function (_a) {
    var className = _a.className, children = _a.children, side = _a.side, modalProps = tslib_1.__rest(_a, ["className", "children", "side"]);
    return (React.createElement(modal_1.Modal, tslib_1.__assign({ "data-side": side, className: utils_1.ClassNames.concat('arm-side-menu', className) }, modalProps, { darkenBackground: true }), children));
};
exports.SideMenu = SideMenu;
exports.SideMenu.defaultProps = {
    side: 'left',
};
