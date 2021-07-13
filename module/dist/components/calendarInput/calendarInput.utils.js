"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDateSelection = exports.getDaySelectOptions = exports.calendarDayToDateLike = void 0;
var tslib_1 = require("tslib");
var date_fns_1 = require("date-fns");
var format_1 = tslib_1.__importDefault(require("date-fns/format"));
var dates_1 = require("../../utils/dates");
/**
 * Turns an `IDay` object from the calendar hook into a `DateLike`.
 * @param day The `IDay` object to convert.
 * @param type The type to convert to, should be 'string', 'number' or 'object', usually comes from a `typeof`.
 * @param formatString The format token to use if formatting to a string, will use ISO if none passed.
 * @param locale The locale to use if formatting to a string, will default to `en-GB`.
 * @returns The appropriate string, number or Date object as a `DateLike`.
 */
function calendarDayToDateLike(day, type, formatString, locale) {
    if (locale === void 0) { locale = dates_1.Dates.defaultLocale; }
    return dates_1.Dates.dateObjectToDateLike(day.date, type, formatString, locale);
}
exports.calendarDayToDateLike = calendarDayToDateLike;
/**
 * Returns an array of select options for a set of `IDay` objects from the calendar hook.
 * @param day The `IDay` objects to convert.
 * @param formatString The format token to use if formatting to a string, will use ISO if none passed.
 * @param locale The locale to use if formatting to a string, will default to `en-GB`.
 * @returns The array of select options.
 */
function getDaySelectOptions(days, formatString, locale) {
    if (locale === void 0) { locale = dates_1.Dates.defaultLocale; }
    return days.map(function (day) { return ({ id: day.numberInMonth, name: format_1.default(day.date, formatString, { locale: locale }), data: day }); });
}
exports.getDaySelectOptions = getDaySelectOptions;
/**
 * Validates that a date added via the three day/month/year inputs is an actual date that has happened, will happen, or is happening now.
 * @param day The day of the date to validate.
 * @param month The month of the date to validate.
 * @param year The year of the date to validate.
 * @returns true if the date is valid, false if not.
 */
function validateDateSelection(day, month, year) {
    var dayCount = date_fns_1.getDaysInMonth(new Date(year, month, 1));
    return day > 0 && day <= dayCount;
}
exports.validateDateSelection = validateDateSelection;
