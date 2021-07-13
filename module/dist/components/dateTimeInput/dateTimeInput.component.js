"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeInput = void 0;
var tslib_1 = require("tslib");
var date_fns_1 = require("date-fns");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var form_1 = require("../../hooks/form");
var utils_1 = require("../../utils");
var calendarInput_1 = require("../calendarInput");
var inputWrapper_1 = require("../inputWrapper");
var timeInput_1 = require("../timeInput");
/** Format used to bind the internal time input, does not effect the format of the bound datetime value */
var innerTimeInputFormat = 'HH:mm';
exports.DateTimeInput = React.forwardRef(function (_a, ref) {
    var additionalCalendarInputProps = _a.additionalCalendarInputProps, className = _a.className, additionalTimeInputProps = _a.additionalTimeInputProps, bind = _a.bind, value = _a.value, onValueChange = _a.onValueChange, error = _a.error, errorIcon = _a.errorIcon, validationErrorMessages = _a.validationErrorMessages, validationMode = _a.validationMode, statusPosition = _a.statusPosition, pending = _a.pending, formatString = _a.formatString, locale = _a.locale;
    var _b = form_1.useBindingTools(bind, {
        validationErrorIcon: errorIcon,
        validationErrorMessages: validationErrorMessages,
        validationMode: validationMode,
        onChange: onValueChange,
        value: value,
    }), selectedDateTime = _b[0], setSelectedDateTime = _b[1], bindConfig = _b[2];
    var timeParsed = React.useMemo(function () {
        if (selectedDateTime) {
            return utils_1.Dates.dateToString(utils_1.Dates.dateLikeToDate(selectedDateTime), innerTimeInputFormat);
        }
        return '';
    }, [selectedDateTime]);
    var _c = __1.Form.use({
        date: selectedDateTime,
        time: timeParsed,
    }), formProp = _c.formProp, formState = _c.formState;
    React.useEffect(function () {
        if ((formState === null || formState === void 0 ? void 0 : formState.date) && (formState === null || formState === void 0 ? void 0 : formState.time)) {
            var dateFromTime = utils_1.Dates.dateLikeToDate(formState.time, innerTimeInputFormat);
            var dateFromDate = utils_1.Dates.dateLikeToDate(formState.date, formatString, locale);
            if (dateFromTime && dateFromDate && date_fns_1.isValid(dateFromTime) && date_fns_1.isValid(dateFromTime)) {
                var finalDateSelected = new Date(dateFromDate.getFullYear(), dateFromDate.getMonth(), dateFromDate.getDate(), dateFromTime.getHours(), dateFromTime.getMinutes());
                if (!date_fns_1.isValid(finalDateSelected)) {
                    bind === null || bind === void 0 ? void 0 : bind.addValidationError('Invalid date selection');
                    return;
                }
                if (!selectedDateTime || !date_fns_1.isSameMinute(finalDateSelected, utils_1.Dates.dateLikeToDate(selectedDateTime))) {
                    setSelectedDateTime === null || setSelectedDateTime === void 0 ? void 0 : setSelectedDateTime(utils_1.Dates.dateObjectToDateLike(finalDateSelected, selectedDateTime ? typeof selectedDateTime : 'string', formatString, locale));
                }
            }
        }
    }, [formState, formatString, locale]);
    return (React.createElement(inputWrapper_1.InputWrapper, { ref: ref, className: utils_1.ClassNames.concat('arm-date-time-input', className), error: error, validationErrorMessages: bindConfig.validationErrorMessages, errorIcon: bindConfig.validationErrorIcon, statusPosition: statusPosition, pending: pending, validationMode: bindConfig.validationMode },
        React.createElement(calendarInput_1.CalendarInput, tslib_1.__assign({ bind: formProp('date').bind() }, (additionalCalendarInputProps !== null && additionalCalendarInputProps !== void 0 ? additionalCalendarInputProps : {}))),
        React.createElement(timeInput_1.TimeInput, tslib_1.__assign({ bind: formProp('time').bind() }, (additionalTimeInputProps !== null && additionalTimeInputProps !== void 0 ? additionalTimeInputProps : {})))));
});
