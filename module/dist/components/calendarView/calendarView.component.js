"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarView = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var classNames_1 = require("../../utils/classNames");
var dates_1 = require("../../utils/dates");
var calendarDisplay_component_1 = require("../calendarDisplay/calendarDisplay.component");
/**
 * Displays an interactive calendar view.
 * - For date selection via an inline calendar.
 * - NOTE: Not a date input for a traditional form, please use `CalendarInput`
 */
exports.CalendarView = React.forwardRef(function (_a, ref) {
    var selectedDate = _a.selectedDate, min = _a.min, max = _a.max, weekdayStartIndex = _a.weekdayStartIndex, formatString = _a.formatString, onDateClicked = _a.onDateClicked, locale = _a.locale, rangeTo = _a.rangeTo, highlights = _a.highlights, className = _a.className;
    var _b = __1.Calendar.use({
        formatString: formatString,
        min: min,
        highlights: highlights,
        locale: locale,
        max: max,
        rangeTo: rangeTo,
        selectedDate: selectedDate,
    }), days = _b.days, months = _b.months, years = _b.years, monthYearFormProp = _b.monthYearFormProp, stepMonth = _b.stepMonth;
    // Click event listeners
    var onBackClicked = React.useCallback(function () {
        stepMonth('back');
    }, [stepMonth]);
    var onForwardClicked = React.useCallback(function () {
        stepMonth('forward');
    }, [stepMonth]);
    var onDayClicked = React.useCallback(function (day) {
        onDateClicked === null || onDateClicked === void 0 ? void 0 : onDateClicked(day.date, dates_1.Dates.dateToString(day.date, formatString, locale));
    }, [onDateClicked, formatString, locale]);
    return (React.createElement(calendarDisplay_component_1.CalendarDisplay, { className: classNames_1.ClassNames.concat('arm-calendar-view', className), ref: ref, days: days, months: months, years: years, currentMonthBinding: monthYearFormProp('viewingMonth').bind(), currentYearBinding: monthYearFormProp('viewingYear').bind(), weekdayStartIndex: weekdayStartIndex, locale: locale, onBackClicked: onBackClicked, onForwardClicked: onForwardClicked, onDayClicked: onDayClicked }));
});
exports.CalendarView.defaultProps = {
    selectedDate: new Date(),
    weekdayStartIndex: 0,
};
