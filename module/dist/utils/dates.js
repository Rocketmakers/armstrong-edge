"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dates = void 0;
var date_fns_1 = require("date-fns");
var locale_1 = require("date-fns/locale");
/** Set of utilities and types relating to the native JS date object */
var Dates;
(function (Dates) {
    /** Defines a constant locale for use as a system default */
    Dates.defaultLocale = locale_1.enGB;
    /**
     * Takes a `DateLike` (Date|string|number) object and parses it to a date `Date` object
     * - Uses the supplied format string and locale if date is a string.
     * @param date The `DateLike` to parse to a `Date`.
     * @param formatString The optional format to use if `date` is a string, if not passed, will assume `date` strings are ISO.
     * @param locale The locale to use if `date` is a string, if not passed, will use the system default locale of `en-GB`.
     * @returns The parsed `Date` object, or `undefined` if no `date` was passed.
     */
    function dateLikeToDate(date, formatString, locale) {
        if (locale === void 0) { locale = Dates.defaultLocale; }
        if (typeof date === 'string') {
            return formatString ? date_fns_1.parse(date, formatString, new Date(), { locale: locale }) : date_fns_1.parseISO(date);
        }
        if (typeof date === 'number') {
            return new Date(date);
        }
        return date;
    }
    Dates.dateLikeToDate = dateLikeToDate;
    /**
     * Takes a native `Date` object and returns a formatted string.
     * - Uses the supplied format string and locale to format the string.
     * @param date (Date) The `Date` object to format.
     * @param formatString The optional format to use if `date` is a string, if not passed, will assume `date` strings are ISO.
     * @param locale The locale to use if `date` is a string, if not passed, will use the system default locale of `en-GB`.
     * @returns A formatted string representation of the supplied `date`.
     */
    function dateToString(date, formatString, locale) {
        if (locale === void 0) { locale = Dates.defaultLocale; }
        return formatString ? date_fns_1.format(date, formatString, { locale: locale }) : date_fns_1.formatISO(date);
    }
    Dates.dateToString = dateToString;
    function getMonthSelectOptions(months, formatString, locale) {
        if (locale === void 0) { locale = Dates.defaultLocale; }
        return months.map(function (month) { return ({
            id: month.indexInYear,
            name: date_fns_1.format(month.date, formatString, { locale: locale }),
            data: month,
            disabled: month.isDisabled,
        }); });
    }
    Dates.getMonthSelectOptions = getMonthSelectOptions;
    function getYearSelectOptions(years, formatString, locale) {
        if (locale === void 0) { locale = Dates.defaultLocale; }
        return years.map(function (year) { return ({ id: year.number, name: date_fns_1.format(year.date, formatString, { locale: locale }), data: year }); });
    }
    Dates.getYearSelectOptions = getYearSelectOptions;
    /**
     * Turns a date object into a `DateLike` matching the requested type.
     * @param date The Date object to convert
     * @param type The type to convert to, should be 'string', 'number' or 'object', usually comes from a `typeof`.
     * @param formatString The format token to use if formatting to a string, will use ISO if none passed.
     * @param locale The locale to use if formatting to a string, will default to `en-GB`.
     * @returns The appropriate string, number or Date object as a `DateLike`.
     */
    function dateObjectToDateLike(date, type, formatString, locale) {
        if (locale === void 0) { locale = Dates.defaultLocale; }
        switch (type) {
            case 'string':
                return formatString ? date_fns_1.format(date, formatString, { locale: locale }) : date_fns_1.formatISO(date);
            case 'number':
                return date.getTime();
            case 'object':
                return date;
            default:
                throw new Error("Invalid type " + type + " sent to DateLike creator");
        }
    }
    Dates.dateObjectToDateLike = dateObjectToDateLike;
})(Dates = exports.Dates || (exports.Dates = {}));
