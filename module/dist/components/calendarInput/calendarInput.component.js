"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarInput = void 0;
var tslib_1 = require("tslib");
var date_fns_1 = require("date-fns");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var classNames_1 = require("../../utils/classNames");
var dates_1 = require("../../utils/dates");
var autoCompleteInput_1 = require("../autoCompleteInput");
var calendarDisplay_component_1 = require("../calendarDisplay/calendarDisplay.component");
var dropdown_1 = require("../dropdown");
var icon_1 = require("../icon");
var iconButton_1 = require("../iconButton");
var inputWrapper_1 = require("../inputWrapper");
var modal_1 = require("../modal");
var calendarInput_utils_1 = require("./calendarInput.utils");
/**
 * An input used for selecting a date. Supports the following input methods:
 * - Day/month/year selection via dropdowns.
 * - Date selection via a calendar view.
 * - Date input via the keyboard in day/month/year format.
 */
exports.CalendarInput = React.forwardRef(function (_a, ref) {
    var bind = _a.bind, formatString = _a.formatString, highlights = _a.highlights, locale = _a.locale, max = _a.max, min = _a.min, rangeTo = _a.rangeTo, weekdayStartIndex = _a.weekdayStartIndex, dayInputDisplayFormat = _a.dayInputDisplayFormat, yearInputDisplayFormat = _a.yearInputDisplayFormat, monthInputDisplayFormat = _a.monthInputDisplayFormat, closeCalendarOnDayClick = _a.closeCalendarOnDayClick, additionalDayInputProps = _a.additionalDayInputProps, additionalMonthInputProps = _a.additionalMonthInputProps, additionalYearInputProps = _a.additionalYearInputProps, error = _a.error, errorIcon = _a.errorIcon, validationErrorMessages = _a.validationErrorMessages, calendarDayDisplayFormat = _a.calendarDayDisplayFormat, calendarDayOfTheWeekHeadingDisplayFormat = _a.calendarDayOfTheWeekHeadingDisplayFormat, calendarMonthSelectDisplayFormat = _a.calendarMonthSelectDisplayFormat, calendarYearSelectDisplayFormat = _a.calendarYearSelectDisplayFormat, pending = _a.pending, statusPosition = _a.statusPosition, validationMode = _a.validationMode, inputOrder = _a.inputOrder, displayMode = _a.displayMode, displayFormatString = _a.displayFormatString, placeholder = _a.placeholder, calendarPosition = _a.calendarPosition, keepCalendarOpen = _a.keepCalendarOpen, className = _a.className, onValueChange = _a.onValueChange, value = _a.value, leftIcon = _a.leftIcon, leftOverlay = _a.leftOverlay, rightIcon = _a.rightIcon, rightOverlay = _a.rightOverlay, betweenInputs = _a.betweenInputs;
    var _b = __1.Form.useBindingTools(bind, {
        validationErrorMessages: validationErrorMessages,
        validationMode: validationMode,
        validationErrorIcon: errorIcon,
        onChange: onValueChange,
        value: value,
    }), selectedDate = _b[0], setSelectedDate = _b[1], bindConfig = _b[2];
    var _c = __1.Calendar.use({
        formatString: formatString,
        min: min,
        highlights: highlights,
        locale: locale,
        max: max,
        rangeTo: rangeTo,
        selectedDate: selectedDate,
    }), monthYearFormProp = _c.monthYearFormProp, stepMonth = _c.stepMonth, days = _c.days, months = _c.months, years = _c.years, selectedDateParsed = _c.selectedDateParsed;
    var _d = React.useState(false), calendarOpen = _d[0], setCalendarOpen = _d[1];
    var _e = __1.Form.use((selectedDate && {
        day: selectedDateParsed.getDate(),
        year: selectedDateParsed.getFullYear(),
        month: selectedDateParsed.getMonth(),
    }) ||
        {}), formProp = _e.formProp, formState = _e.formState;
    var onDayClicked = React.useCallback(function (day) {
        setSelectedDate === null || setSelectedDate === void 0 ? void 0 : setSelectedDate(calendarInput_utils_1.calendarDayToDateLike(day, selectedDate ? typeof selectedDate : 'string', formatString, locale));
        if (closeCalendarOnDayClick) {
            setCalendarOpen(false);
        }
    }, [selectedDate, setSelectedDate, formatString, locale, closeCalendarOnDayClick, setCalendarOpen]);
    React.useEffect(function () {
        var _a;
        if ((formState === null || formState === void 0 ? void 0 : formState.day) && ((_a = formState === null || formState === void 0 ? void 0 : formState.month) !== null && _a !== void 0 ? _a : -1) > -1 && (formState === null || formState === void 0 ? void 0 : formState.year)) {
            if (!calendarInput_utils_1.validateDateSelection(formState.day, formState.month, formState.year)) {
                bind === null || bind === void 0 ? void 0 : bind.addValidationError('Invalid date selection');
                return;
            }
            bind === null || bind === void 0 ? void 0 : bind.clearValidationErrors();
            var date = new Date(formState.year, formState.month, formState.day);
            if (!selectedDate || !date_fns_1.isSameDay(date, dates_1.Dates.dateLikeToDate(selectedDate, formatString, locale))) {
                var newDate = dates_1.Dates.dateObjectToDateLike(date, selectedDate ? typeof selectedDate : 'string', formatString, locale);
                setSelectedDate === null || setSelectedDate === void 0 ? void 0 : setSelectedDate(newDate);
            }
        }
    }, [formState]);
    var dayOptions = React.useMemo(function () {
        return calendarInput_utils_1.getDaySelectOptions(days, dayInputDisplayFormat, locale);
    }, [days, locale, dayInputDisplayFormat]);
    var monthOptions = React.useMemo(function () {
        return dates_1.Dates.getMonthSelectOptions(months, monthInputDisplayFormat, locale);
    }, [months, locale, monthInputDisplayFormat]);
    var yearOptions = React.useMemo(function () {
        return dates_1.Dates.getYearSelectOptions(years, yearInputDisplayFormat, locale);
    }, [years, locale, yearInputDisplayFormat]);
    var showCalendarButton = displayMode !== 'inputs';
    var disableInputs = displayMode === 'calendar';
    var dayInputProps = tslib_1.__assign(tslib_1.__assign({}, (additionalDayInputProps !== null && additionalDayInputProps !== void 0 ? additionalDayInputProps : {})), { bind: formProp('day').bind(), options: dayOptions });
    var yearInputProps = tslib_1.__assign(tslib_1.__assign({}, (additionalYearInputProps !== null && additionalYearInputProps !== void 0 ? additionalYearInputProps : {})), { bind: formProp('year').bind(), options: yearOptions });
    var calendarDisplayProps = {
        weekdayStartIndex: weekdayStartIndex,
        currentYearBinding: monthYearFormProp('viewingYear').bind(),
        currentMonthBinding: monthYearFormProp('viewingMonth').bind(),
        onDayClicked: onDayClicked,
        onBackClicked: function () { return stepMonth('back'); },
        onForwardClicked: function () { return stepMonth('forward'); },
        days: days,
        months: months,
        years: years,
        calendarDayDisplayFormat: calendarDayDisplayFormat,
        calendarDayOfTheWeekHeadingDisplayFormat: calendarDayOfTheWeekHeadingDisplayFormat,
        calendarMonthSelectDisplayFormat: calendarMonthSelectDisplayFormat,
        calendarYearSelectDisplayFormat: calendarYearSelectDisplayFormat,
    };
    var onClickWrapperEvent = React.useCallback(function () {
        if (displayMode === 'calendar') {
            setCalendarOpen(!calendarOpen);
        }
    }, [calendarOpen, displayMode]);
    var formattedSelectedDate = React.useMemo(function () {
        if (displayMode === 'calendar' && selectedDate) {
            return dates_1.Dates.dateToString(dates_1.Dates.dateLikeToDate(selectedDate), displayFormatString);
        }
    }, [displayMode, selectedDate, displayFormatString]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ref: ref, className: classNames_1.ClassNames.concat('arm-calendar-input', className), "data-calendar-open": keepCalendarOpen || calendarOpen, onClick: onClickWrapperEvent, "data-display-mode": displayMode },
            React.createElement(dropdown_1.Dropdown, { isOpen: calendarPosition === 'dropdown' && (calendarOpen || !!keepCalendarOpen), onOpenChange: setCalendarOpen, dropdownContent: React.createElement(calendarDisplay_component_1.CalendarDisplay, tslib_1.__assign({}, calendarDisplayProps)), contentClassName: "arm-calendar-input-dropdown-content", openWhenClickInside: false, openWhenFocusInside: false, shouldScrollContent: false },
                React.createElement(inputWrapper_1.InputWrapper, { error: error, validationErrorMessages: bindConfig.validationErrorMessages, errorIcon: bindConfig.validationErrorIcon, statusPosition: statusPosition, pending: pending, validationMode: bindConfig.validationMode, className: "arm-calendar-input-inner", above: calendarPosition === 'above' && (calendarOpen || keepCalendarOpen) ? React.createElement(calendarDisplay_component_1.CalendarDisplay, tslib_1.__assign({}, calendarDisplayProps)) : undefined, below: calendarPosition === 'below' && (calendarOpen || keepCalendarOpen) ? React.createElement(calendarDisplay_component_1.CalendarDisplay, tslib_1.__assign({}, calendarDisplayProps)) : undefined, leftIcon: leftIcon, rightIcon: rightIcon, leftOverlay: leftOverlay, rightOverlay: rightOverlay },
                    showCalendarButton && !keepCalendarOpen && (React.createElement(iconButton_1.IconButton, { minimalStyle: true, icon: icon_1.IconUtils.getIconDefinition('Icomoon', 'calendar'), onClick: function () { return setCalendarOpen(!calendarOpen); } })),
                    disableInputs ? (React.createElement("div", { className: "arm-calendar-input-preview" }, selectedDate ? React.createElement("p", null, formattedSelectedDate) : React.createElement("p", { className: "arm-calendar-input-placeholder" }, placeholder))) : (React.createElement(React.Fragment, null,
                        React.createElement(autoCompleteInput_1.AutoCompleteInput, tslib_1.__assign({ className: "arm-calendar-select" }, (inputOrder === 'day-month-year' ? dayInputProps : yearInputProps), { placeholder: inputOrder === 'day-month-year' ? dayInputProps.placeholder || 'day' : yearInputProps.placeholder || 'year', disabled: disableInputs })),
                        typeof betweenInputs === 'string' ? React.createElement("p", { className: "arm-calendar-input-between-inputs" }, betweenInputs) : betweenInputs,
                        React.createElement(autoCompleteInput_1.AutoCompleteInput, tslib_1.__assign({ className: "arm-calendar-select" }, (additionalMonthInputProps !== null && additionalMonthInputProps !== void 0 ? additionalMonthInputProps : {}), { bind: formProp('month').bind(), disabled: disableInputs, options: monthOptions, placeholder: (additionalMonthInputProps === null || additionalMonthInputProps === void 0 ? void 0 : additionalMonthInputProps.placeholder) || 'month' })),
                        typeof betweenInputs === 'string' ? React.createElement("p", { className: "arm-calendar-input-between-inputs" }, betweenInputs) : betweenInputs,
                        React.createElement(autoCompleteInput_1.AutoCompleteInput, tslib_1.__assign({ className: "arm-calendar-select" }, (inputOrder === 'day-month-year' ? yearInputProps : dayInputProps), { placeholder: inputOrder === 'day-month-year' ? yearInputProps.placeholder || 'year' : dayInputProps.placeholder || 'day', disabled: disableInputs }))))))),
        React.createElement(modal_1.Modal, { isOpen: calendarPosition === 'modal' && calendarOpen, onOpenChange: setCalendarOpen, darkenBackground: true },
            React.createElement(calendarDisplay_component_1.CalendarDisplay, tslib_1.__assign({}, calendarDisplayProps)))));
});
exports.CalendarInput.defaultProps = {
    weekdayStartIndex: 0,
    dayInputDisplayFormat: 'd',
    monthInputDisplayFormat: 'M',
    yearInputDisplayFormat: 'yyyy',
    closeCalendarOnDayClick: true,
    inputOrder: 'day-month-year',
    calendarPosition: 'dropdown',
    displayFormatString: 'dd/MM/yyyy',
    betweenInputs: '/',
};
