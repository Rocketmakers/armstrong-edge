"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var form_1 = require("../../hooks/form");
var dates_1 = require("../../utils/dates");
var calendar_utils_1 = require("./calendar.utils");
var use = function (_a) {
    var _b = _a === void 0 ? {} : _a, formatString = _b.formatString, locale = _b.locale, highlights = _b.highlights, max = _b.max, min = _b.min, rangeTo = _b.rangeTo, selectedDate = _b.selectedDate;
    // Parse all `Dates.DateLike` types into strict date objects
    var selectedDateParsed = React.useMemo(function () {
        return dates_1.Dates.dateLikeToDate(selectedDate || new Date(), formatString, locale);
    }, [selectedDate, formatString, locale]);
    var minParsed = React.useMemo(function () {
        return dates_1.Dates.dateLikeToDate(min, formatString, locale);
    }, [min, formatString, locale]);
    var maxParsed = React.useMemo(function () {
        return dates_1.Dates.dateLikeToDate(max, formatString, locale);
    }, [max, formatString, locale]);
    var rangeToParsed = React.useMemo(function () {
        return dates_1.Dates.dateLikeToDate(rangeTo, formatString, locale);
    }, [rangeTo, formatString, locale]);
    var highlightsParsed = React.useMemo(function () {
        return highlights === null || highlights === void 0 ? void 0 : highlights.map(function (highlight) { return (tslib_1.__assign(tslib_1.__assign({}, highlight), { date: dates_1.Dates.dateLikeToDate(highlight.date, formatString, locale) })); });
    }, [highlights, formatString, locale]);
    // Set up a simple form for use by the month/year selects.
    var _c = form_1.use({
        viewingMonth: selectedDateParsed.getMonth(),
        viewingYear: selectedDateParsed.getFullYear(),
    }), formState = _c.formState, formProp = _c.formProp;
    // Create lists of years, months, days for display.
    var selectableYears = React.useMemo(function () {
        return calendar_utils_1.getYears(minParsed, maxParsed);
    }, [minParsed, maxParsed]);
    var selectableMonths = React.useMemo(function () {
        return calendar_utils_1.getMonths(formState.viewingYear, minParsed, maxParsed);
    }, [minParsed, maxParsed, formState.viewingYear, locale]);
    var selectableDays = React.useMemo(function () {
        return calendar_utils_1.getDays(formState.viewingMonth, formState.viewingYear, selectedDate ? selectedDateParsed : undefined, minParsed, maxParsed, rangeToParsed, highlightsParsed);
    }, [formState, minParsed, maxParsed, selectedDate, selectedDateParsed, rangeToParsed, highlightsParsed]);
    // Setters
    var stepMonth = React.useCallback(function (direction) {
        var currentMonth = formState.viewingMonth;
        var currentYear = formState.viewingYear;
        if (currentMonth === 0 && direction === 'back') {
            // going back from first month
            var prevYear = currentYear - 1;
            if (selectableYears.map(function (year) { return year.number; }).indexOf(prevYear) > -1) {
                formProp('viewingYear').set(prevYear);
                formProp('viewingMonth').set(selectableMonths.find(function (__, index) { return index === selectableMonths.length - 1; }).indexInYear);
            }
            return;
        }
        if (currentMonth === selectableMonths.length - 1 && direction === 'forward') {
            // going forward from last month
            var nextYear = currentYear + 1;
            if (selectableYears.map(function (year) { return year.number; }).indexOf(nextYear) > -1) {
                formProp('viewingYear').set(nextYear);
                formProp('viewingMonth').set(0);
            }
            return;
        }
        var nextMonthNumber = direction === 'forward' ? currentMonth + 1 : currentMonth - 1;
        var nextMonth = selectableMonths.find(function (month) { return month.indexInYear === nextMonthNumber; });
        if (nextMonth && !nextMonth.isDisabled) {
            formProp('viewingMonth').set(nextMonthNumber);
        }
    }, [formState, formProp, selectableMonths, selectableYears]);
    return {
        days: selectableDays,
        months: selectableMonths,
        years: selectableYears,
        selectedDateParsed: selectedDateParsed,
        monthYearFormState: formState,
        monthYearFormProp: formProp,
        stepMonth: stepMonth,
    };
};
exports.use = use;
