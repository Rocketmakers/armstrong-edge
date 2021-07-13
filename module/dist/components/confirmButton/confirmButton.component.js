"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmButton = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var button_1 = require("../button");
var dialog_1 = require("../dialog");
/** A button which shows a confirmation dialog before running the given onClick prop */
var ConfirmButton = function (_a) {
    var confirmationDialogConfig = _a.confirmationDialogConfig, dialogProps = _a.dialogProps, onClick = _a.onClick, children = _a.children, buttonProps = tslib_1.__rest(_a, ["confirmationDialogConfig", "dialogProps", "onClick", "children"]);
    var open = dialog_1.useConfirmationDialog(confirmationDialogConfig, dialogProps)[0];
    var onClickEvent = React.useCallback(function (event) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var confirmed;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, open()];
                case 1:
                    confirmed = _a.sent();
                    if (confirmed) {
                        onClick === null || onClick === void 0 ? void 0 : onClick(event);
                    }
                    return [2 /*return*/];
            }
        });
    }); }, [onClick, open]);
    return (React.createElement(button_1.Button, tslib_1.__assign({}, buttonProps, { onClick: onClickEvent }), children));
};
exports.ConfirmButton = ConfirmButton;
