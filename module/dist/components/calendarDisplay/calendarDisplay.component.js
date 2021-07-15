"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarDisplay = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var __1 = require("../..");
var arrays_1 = require("../../utils/arrays");
var classNames_1 = require("../../utils/classNames");
var dates_1 = require("../../utils/dates");
var maths_1 = require("../../utils/maths");
var button_1 = require("../button");
var icon_1 = require("../icon");
var iconButton_1 = require("../iconButton");
var calendarDisplay_utils_1 = require("./calendarDisplay.utils");
/**
 * A stateless display component for rendering the calendar.
 * NOTE: This probably isn't what you're looking for.
 * - For a date input, use `CalendarInput`.
 * - For an interactive calendar view, use `CalendarDisplay`.
 */
exports.CalendarDisplay = React.forwardRef(function (_a, ref) {
    var onForwardClicked = _a.onForwardClicked, weekdayStartIndex = _a.weekdayStartIndex, onBackClicked = _a.onBackClicked, onDayClicked = _a.onDayClicked, locale = _a.locale, days = _a.days, months = _a.months, years = _a.years, currentMonthBinding = _a.currentMonthBinding, currentYearBinding = _a.currentYearBinding, calendarDayDisplayFormat = _a.calendarDayDisplayFormat, calendarMonthSelectDisplayFormat = _a.calendarMonthSelectDisplayFormat, calendarYearSelectDisplayFormat = _a.calendarYearSelectDisplayFormat, calendarDayOfTheWeekHeadingDisplayFormat = _a.calendarDayOfTheWeekHeadingDisplayFormat, highlightToday = _a.highlightToday, className = _a.className;
    var dayOfWeekHeadings = React.useMemo(function () {
        return arrays_1.Arrays.reIndex(calendarDisplay_utils_1.getDayOfWeekHeadings(calendarDayOfTheWeekHeadingDisplayFormat, locale), weekdayStartIndex);
    }, [weekdayStartIndex, locale, calendarDayOfTheWeekHeadingDisplayFormat]);
    var monthOptions = React.useMemo(function () {
        return dates_1.Dates.getMonthSelectOptions(months, calendarMonthSelectDisplayFormat, locale);
    }, [months, locale, calendarMonthSelectDisplayFormat]);
    var yearOptions = React.useMemo(function () {
        return dates_1.Dates.getYearSelectOptions(years, calendarYearSelectDisplayFormat, locale);
    }, [years, locale, calendarYearSelectDisplayFormat]);
    var displayDays = React.useMemo(function () {
        return calendarDisplay_utils_1.getDaysWithDisplayFormat(days, calendarDayDisplayFormat, locale);
    }, [days, locale, calendarDayDisplayFormat]);
    // Calculate the number of "empty" days to display at the beginning of the month based on the day of the week displayed first, and the first day of the month selected.
    var blankDaysAtStartCount = React.useMemo(function () {
        var _a, _b;
        var monthStartsOnWeekday = (_b = (_a = days[0]) === null || _a === void 0 ? void 0 : _a.indexInWeek) !== null && _b !== void 0 ? _b : 0;
        return maths_1.Maths.positiveModulo(monthStartsOnWeekday - weekdayStartIndex, 7);
    }, [days, weekdayStartIndex]);
    return (React.createElement("div", { ref: ref, className: classNames_1.ClassNames.concat('arm-calendar-display', className) },
        React.createElement("div", { className: "arm-calendar-display-controls" },
            React.createElement(iconButton_1.IconButton, { icon: icon_1.IconUtils.getIconDefinition('Icomoon', 'arrow-left3'), minimalStyle: true, className: "arm-calendar-display-button arm-calendar-display-button-prev", onClick: onBackClicked }),
            React.createElement(__1.Select, { className: "arm-calendar-display-select arm-calendar-display-select-month", bind: currentMonthBinding, options: monthOptions }),
            React.createElement(__1.Select, { className: "arm-calendar-display-select arm-calendar-display-select-year", bind: currentYearBinding, options: yearOptions }),
            React.createElement(iconButton_1.IconButton, { icon: icon_1.IconUtils.getIconDefinition('Icomoon', 'arrow-right3'), minimalStyle: true, className: "arm-calendar-display-button arm-calendar-display-button-next", onClick: onForwardClicked })),
        React.createElement("div", { className: "arm-calendar-date-grid" },
            React.createElement("div", { className: "arm-calendar-date-grid-headings" }, dayOfWeekHeadings.map(function (heading, index) { return (React.createElement("div", { key: index, className: "arm-calendar-date-grid-heading" }, heading)); })),
            React.createElement("div", { className: "arm-calendar-date-grid-days" },
                arrays_1.Arrays.repeat(blankDaysAtStartCount, function (index) { return (React.createElement("div", { key: index, className: "arm-calendar-date-grid-day arm-calendar-date-grid-day-empty" })); }),
                displayDays.map(function (displayDay) { return (React.createElement(button_1.Button, { className: classNames_1.ClassNames.concat('arm-calendar-date-grid-day', displayDay.day.highlightedClassName), onClick: function () { return onDayClicked === null || onDayClicked === void 0 ? void 0 : onDayClicked(displayDay.day); }, key: displayDay.day.numberInMonth, "data-selected": displayDay.day.isSelected, disabled: displayDay.day.isDisabled, "data-today": highlightToday && displayDay.day.isToday, "aria-current": displayDay.day.isToday && 'date', "data-range-start": displayDay.day.isRangeStart, "data-range-middle": displayDay.day.isRangeMiddle, "data-range-end": displayDay.day.isRangeEnd, "data-highlight": displayDay.day.isHighlighted, minimalStyle: true },
                    React.createElement("p", null, displayDay.displayFormat),
                    displayDay.day.isHighlighted && React.createElement("div", { className: "arm-calendar-date-grid-day-highlight" }))); })))));
});
exports.CalendarDisplay.defaultProps = {
    weekdayStartIndex: 0,
    calendarDayOfTheWeekHeadingDisplayFormat: 'eeeee',
    calendarMonthSelectDisplayFormat: 'MMMM',
    calendarYearSelectDisplayFormat: 'yyyy',
    calendarDayDisplayFormat: 'd',
    highlightToday: true,
};
