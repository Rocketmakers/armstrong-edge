"use strict";
/** ******************************************************
 * Calendar Display - Utilities file.
 * A set of helper functions to support the calendar view logic.
 ******************************************************* */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDaysWithDisplayFormat = exports.getDayOfWeekHeadings = void 0;
var date_fns_1 = require("date-fns");
var dates_1 = require("../../utils/dates");
/**
 * Returns the list of "day of the week" headings to display within the calendar view as single letters.
 * - This will essentially return ["S","M","T","W","T","F","S"], but is generated on the fly in case an alternative format or locale is passed.
 * @param formatString An optional format token to use.
 * @param locale An optional locale to use when formatting the strings for the headings, will fall back to system default locale of `en-GB`.
 * @returns An array of "day of the week" headings to display within the calendar view as single letters
 */
function getDayOfWeekHeadings(formatString, locale) {
    if (locale === void 0) { locale = dates_1.Dates.defaultLocale; }
    var sunday = date_fns_1.startOfWeek(new Date());
    var headings = [];
    for (var i = 0; i < 7; i += 1) {
        var currentDate = i === 0 ? sunday : date_fns_1.addDays(sunday, i);
        headings.push(date_fns_1.format(currentDate, formatString, { locale: locale }));
    }
    return headings;
}
exports.getDayOfWeekHeadings = getDayOfWeekHeadings;
/**
 * Returns a display format alongside each day object
 * @param days The days to format
 * @param formatString The token string to use when formatting
 * @param locale An optional locale to use when formatting, will fall back to system default locale of `en-GB`.
 * @returns The days with their display ready strings
 */
function getDaysWithDisplayFormat(days, formatString, locale) {
    if (locale === void 0) { locale = dates_1.Dates.defaultLocale; }
    return days.map(function (day) { return ({ day: day, displayFormat: date_fns_1.format(day.date, formatString, { locale: locale }) }); });
}
exports.getDaysWithDisplayFormat = getDaysWithDisplayFormat;
