"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYears = exports.getMonths = exports.getDays = exports.minMaxCheckThrow = void 0;
var date_fns_1 = require("date-fns");
/**
 * Throws an error if the max date is before the min date.
 * @param min (Date) The min date
 * @param max (Date) The max date
 */
function minMaxCheckThrow(min, max) {
    if (min && max && date_fns_1.isBefore(max, min)) {
        throw new Error("Min date cannot be before max date!");
    }
}
exports.minMaxCheckThrow = minMaxCheckThrow;
/**
 * Returns an array of days to be displayed in the calendar view.
 * - Returned days include all necessary display characteristics and statuses.
 * - Receives config and sets up the days accordingly.
 * @param forYear (number) The year of the month to return days for. e.g. `2021`.
 * @param selectedDate (Date) The current date prop passed to the calendar view (parsed to a `Date` object from a `DateLike`).
 * @param min (Date) The optional `min` date prop passed to the calendar view (parsed to a `Date` object from a `DateLike`).
 * @param max (Date) The optional `max` date prop passed to the calendar view (parsed to a `Date` object from a `DateLike`).
 * @param rangeTo (Date) The optional `rangeTo` date prop passed to the calendar view (parsed to a `Date` object from a `DateLike`). Creates a range from the `selectedDate` to this date.
 * @param highlights An optional array of dates to highlight with dots (all dates are parsed to a `Date` object from a `DateLike`)
 * @returns An array of day objects containing all necessary display characteristics and statuses.
 */
function getDays(forMonth, forYear, selectedDate, min, max, rangeTo, highlights) {
    minMaxCheckThrow(min, max);
    // Create first date in month and get total day count.
    var forDate = new Date(forYear, forMonth, 1);
    var dayCount = date_fns_1.getDaysInMonth(forDate);
    // Define range dates from optional args.
    var rangeStart;
    var rangeEnd;
    if (rangeTo && selectedDate) {
        if (date_fns_1.isBefore(selectedDate, rangeTo)) {
            rangeStart = selectedDate;
            rangeEnd = rangeTo;
        }
        else {
            rangeStart = rangeTo;
            rangeEnd = selectedDate;
        }
    }
    // Loop the number of days in the month and create a day object for each one.
    var days = [];
    var _loop_1 = function (i) {
        // The day object for this loop iteration.
        var currentDay = i === 0 ? forDate : date_fns_1.addDays(forDate, i);
        // Is this day highlighted?
        var highlight = highlights === null || highlights === void 0 ? void 0 : highlights.find(function (h) { return date_fns_1.isSameDay(currentDay, h.date); });
        days.push({
            date: currentDay,
            numberInMonth: i + 1,
            indexInWeek: Number(date_fns_1.format(currentDay, 'e')) - 1,
            isSelected: !!selectedDate && date_fns_1.isSameDay(currentDay, selectedDate),
            isDisabled: (!!min && date_fns_1.isBefore(currentDay, min)) || (!!max && date_fns_1.isAfter(currentDay, max)),
            isToday: date_fns_1.isSameDay(currentDay, new Date()),
            isRangeStart: !!rangeStart && date_fns_1.isSameDay(currentDay, rangeStart),
            isRangeEnd: !!rangeEnd && date_fns_1.isSameDay(currentDay, rangeEnd),
            isRangeMiddle: !!rangeStart && !!rangeEnd && date_fns_1.isAfter(currentDay, rangeStart) && date_fns_1.isBefore(currentDay, rangeEnd),
            isHighlighted: !!highlight,
            highlightedClassName: highlight === null || highlight === void 0 ? void 0 : highlight.className,
        });
    };
    for (var i = 0; i < dayCount; i += 1) {
        _loop_1(i);
    }
    return days;
}
exports.getDays = getDays;
/**
 * Returns a list of months to display within the month select of the calendar view.
 * - Returned months include all necessary display characteristics and statuses.
 * - Receives config and sets up the months accordingly.
 * @param forYear (number) The year to return the months for. e.g. `2021`.
 * @param min (Date) The optional `min` date prop passed to the calendar view (parsed to a `Date` object from a `DateLike`).
 * @param max (Date) The optional `max` date prop passed to the calendar view (parsed to a `Date` object from a `DateLike`).
 * @param locale An optional locale to use when formatting the strings for the months, will fall back to system default locale of `en-GB`.
 * @returns An array of month objects containing all necessary display characteristics and statuses.
 */
function getMonths(forYear, min, max) {
    minMaxCheckThrow(min, max);
    var firstMonth = date_fns_1.startOfYear(new Date(forYear, 1, 1));
    var months = [];
    for (var i = 0; i < 12; i += 1) {
        var currentDate = i === 0 ? firstMonth : date_fns_1.addMonths(firstMonth, i);
        months.push({
            date: currentDate,
            indexInYear: i,
            isDisabled: (!!min && date_fns_1.isBefore(currentDate, date_fns_1.startOfMonth(min))) || (!!max && date_fns_1.isAfter(currentDate, date_fns_1.endOfMonth(max))),
        });
    }
    return months;
}
exports.getMonths = getMonths;
/**
 * Returns a list of years to display within the year select of the calendar view.
 * @param min (Date) The optional `min` date prop passed to the calendar view (parsed to a `Date` object from a `DateLike`). If no min passed, will default to `1900`
 * @param max (Date) The optional `max` date prop passed to the calendar view (parsed to a `Date` object from a `DateLike`). If no min passed, will default to `2100`
 * @returns An array of year objects containing all necessary display characteristics and statuses.
 */
function getYears(min, max) {
    var _a;
    minMaxCheckThrow(min, max);
    var currentYear = min ? date_fns_1.startOfYear(min) : new Date(1900, 1, 1);
    var years = [];
    while (currentYear.getFullYear() <= ((_a = max === null || max === void 0 ? void 0 : max.getFullYear()) !== null && _a !== void 0 ? _a : 2100)) {
        years.push({
            date: currentYear,
            number: currentYear.getFullYear(),
        });
        currentYear = date_fns_1.addYears(currentYear, 1);
    }
    return years;
}
exports.getYears = getYears;
