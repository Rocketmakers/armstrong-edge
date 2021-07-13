"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeInput = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var classNames_1 = require("../../utils/classNames");
var inputWrapper_1 = require("../inputWrapper");
var timeInput_utils_1 = require("./timeInput.utils");
exports.TimeInput = React.forwardRef(function (_a, ref) {
    var className = _a.className, error = _a.error, bind = _a.bind, errorIcon = _a.errorIcon, validationErrorMessages = _a.validationErrorMessages, validationMode = _a.validationMode, statusPosition = _a.statusPosition, pending = _a.pending, disabled = _a.disabled, additionalHourInputProps = _a.additionalHourInputProps, additionalMinuteInputProps = _a.additionalMinuteInputProps, hourFilter = _a.hourFilter, minuteFilter = _a.minuteFilter, zeroMinutesOnHourSelected = _a.zeroMinutesOnHourSelected, minuteStep = _a.minuteStep, locale = _a.locale, formatString = _a.formatString, hourInputDisplayFormat = _a.hourInputDisplayFormat, minuteInputDisplayFormat = _a.minuteInputDisplayFormat, onValueChange = _a.onValueChange, value = _a.value, leftIcon = _a.leftIcon, leftOverlay = _a.leftOverlay, rightIcon = _a.rightIcon, rightOverlay = _a.rightOverlay, betweenInputs = _a.betweenInputs;
    var _b = __1.Form.useBindingTools(bind, {
        validationErrorMessages: validationErrorMessages,
        validationMode: validationMode,
        validationErrorIcon: errorIcon,
        onChange: onValueChange,
        value: value,
    }), selectedTime = _b[0], setSelectedTime = _b[1], bindConfig = _b[2];
    var selectedTimeParsed = React.useMemo(function () {
        return timeInput_utils_1.parseTimeStringToParts(selectedTime, formatString, locale);
    }, [selectedTime, locale, formatString]);
    var hourOptions = React.useMemo(function () {
        var allHours = timeInput_utils_1.getHourOptions(hourInputDisplayFormat, locale);
        if (hourFilter) {
            allHours = allHours.filter(hourFilter);
        }
        return allHours;
    }, [hourFilter, hourInputDisplayFormat, locale]);
    var minuteOptions = React.useMemo(function () {
        var allMinutes = timeInput_utils_1.getMinuteOptions(minuteInputDisplayFormat, locale, minuteStep);
        if (minuteFilter) {
            allMinutes = allMinutes.filter(minuteFilter);
        }
        return allMinutes;
    }, [minuteFilter, minuteInputDisplayFormat, locale, minuteStep]);
    var _c = __1.Form.use(selectedTimeParsed || {}), formProp = _c.formProp, formState = _c.formState;
    var onHourChange = React.useCallback(function (newHour) {
        var _a;
        if ((formState === null || formState === void 0 ? void 0 : formState.minute) && zeroMinutesOnHourSelected) {
            formProp('minute').set(0);
        }
        return (_a = additionalHourInputProps === null || additionalHourInputProps === void 0 ? void 0 : additionalHourInputProps.onChange) === null || _a === void 0 ? void 0 : _a.call(additionalHourInputProps, newHour);
    }, [formState === null || formState === void 0 ? void 0 : formState.minute, formProp, zeroMinutesOnHourSelected, additionalHourInputProps === null || additionalHourInputProps === void 0 ? void 0 : additionalHourInputProps.onChange]);
    React.useEffect(function () {
        if (Number.isInteger(formState === null || formState === void 0 ? void 0 : formState.hour) && Number.isInteger(formState === null || formState === void 0 ? void 0 : formState.minute)) {
            try {
                var newTime = timeInput_utils_1.parseTimePartsToDate(formState, formatString, locale);
                if (newTime !== selectedTime) {
                    setSelectedTime === null || setSelectedTime === void 0 ? void 0 : setSelectedTime(newTime);
                }
            }
            catch (e) {
                bind === null || bind === void 0 ? void 0 : bind.addValidationError(e.message);
            }
        }
    }, [formState]);
    return (React.createElement(inputWrapper_1.InputWrapper, { ref: ref, className: classNames_1.ClassNames.concat('arm-time-input', className), error: error, validationErrorMessages: bindConfig.validationErrorMessages, errorIcon: bindConfig.validationErrorIcon, statusPosition: statusPosition, pending: pending, validationMode: bindConfig.validationMode, leftIcon: leftIcon, leftOverlay: leftOverlay, rightIcon: rightIcon, rightOverlay: rightOverlay },
        React.createElement(__1.AutoCompleteInput, tslib_1.__assign({ placeholder: "hours" }, (additionalHourInputProps !== null && additionalHourInputProps !== void 0 ? additionalHourInputProps : {}), { bind: formProp('hour').bind(), options: hourOptions, disabled: disabled, onChange: onHourChange })),
        typeof betweenInputs === 'string' ? React.createElement("p", { className: "arm-time-input-between-inputs" }, betweenInputs) : betweenInputs,
        React.createElement(__1.AutoCompleteInput, tslib_1.__assign({ placeholder: "minutes" }, (additionalMinuteInputProps !== null && additionalMinuteInputProps !== void 0 ? additionalMinuteInputProps : {}), { bind: formProp('minute').bind(), options: minuteOptions, disabled: disabled }))));
});
exports.TimeInput.defaultProps = {
    formatString: 'HH:mm',
    hourInputDisplayFormat: 'H',
    minuteInputDisplayFormat: 'm',
    betweenInputs: ':',
};
