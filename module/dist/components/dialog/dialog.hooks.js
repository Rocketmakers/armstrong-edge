"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConfirmationDialog = exports.useDialog = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var button_1 = require("../button");
var modal_hooks_1 = require("../modal/modal.hooks");
var _1 = require(".");
/** Add a dialog to the modal layer with a promise that can be resolved from inside the dialog */
var useDialog = function (
/** The JSX to render inside the Dialog, with the promise functions passed in as props */
Children, 
/** The props to give to the actual Modal component */
props) { return modal_hooks_1.useModalLayerPromise(Children, function (internalProps) { return react_1.default.createElement(_1.Dialog, tslib_1.__assign({}, internalProps, props)); }); };
exports.useDialog = useDialog;
/** Render a confirmation dialog and resolve with a boolean representing the users selection (see useDialog) */
var useConfirmationDialog = function (config, props) {
    if (config === void 0) { config = {}; }
    return exports.useDialog(function (_a) {
        var _b, _c;
        var resolve = _a.resolve;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            !config.content || typeof config.content === 'string' ? react_1.default.createElement("p", null, config.content || 'Are you sure?') : config.content,
            react_1.default.createElement("div", { className: "arm-confirmation-dialog-buttons" },
                react_1.default.createElement(button_1.Button, { className: "arm-confirmation-dialog-no-button", onClick: function () { return resolve(false); } }, ((_b = config.buttons) === null || _b === void 0 ? void 0 : _b.no) || 'No'),
                react_1.default.createElement(button_1.Button, { className: "arm-confirmation-dialog-yes-button", onClick: function () { return resolve(true); } }, ((_c = config.buttons) === null || _c === void 0 ? void 0 : _c.yes) || 'Yes'))));
    }, props);
};
exports.useConfirmationDialog = useConfirmationDialog;
