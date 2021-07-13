"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTimePartsToDate = exports.parseTimeStringToParts = exports.getMinuteOptions = exports.getHourOptions = void 0;
var tslib_1 = require("tslib");
var date_fns_1 = require("date-fns");
var esm_1 = require("date-fns/esm");
var format_1 = tslib_1.__importDefault(require("date-fns/format"));
var dates_1 = require("../../utils/dates");
function getHourOptions(formatString, locale) {
    if (locale === void 0) { locale = dates_1.Dates.defaultLocale; }
    var firstHour = date_fns_1.startOfDay(new Date());
    var hours = [];
    for (var i = 0; i < 24; i += 1) {
        var currentDate = i === 0 ? firstHour : esm_1.addHours(firstHour, i);
        hours.push({
            id: i,
            name: format_1.default(currentDate, formatString, { locale: locale }),
        });
    }
    return hours;
}
exports.getHourOptions = getHourOptions;
function getMinuteOptions(formatString, locale, step) {
    if (locale === void 0) { locale = dates_1.Dates.defaultLocale; }
    if (step === void 0) { step = 1; }
    var firstMinute = date_fns_1.startOfDay(new Date());
    var minutes = [];
    for (var i = 0; i < 60; i += 1) {
        if (i % step === 0) {
            var currentDate = i === 0 ? firstMinute : date_fns_1.addMinutes(firstMinute, i);
            minutes.push({
                id: i,
                name: format_1.default(currentDate, formatString, { locale: locale }),
            });
        }
    }
    return minutes;
}
exports.getMinuteOptions = getMinuteOptions;
function parseTimeStringToParts(timeString, formatString, locale) {
    if (locale === void 0) { locale = dates_1.Dates.defaultLocale; }
    if (!timeString) {
        return undefined;
    }
    var dateObject = date_fns_1.parse(timeString, formatString, new Date(), { locale: locale });
    if (!date_fns_1.isValid(dateObject)) {
        throw new Error("Invalid time format: " + timeString);
    }
    return {
        hour: date_fns_1.getHours(dateObject),
        minute: date_fns_1.getMinutes(dateObject),
    };
}
exports.parseTimeStringToParts = parseTimeStringToParts;
function parseTimePartsToDate(timeParts, formatString, locale) {
    if (locale === void 0) { locale = dates_1.Dates.defaultLocale; }
    if (!timeParts) {
        return undefined;
    }
    var today = new Date();
    var dateObject = new Date(today.getFullYear(), today.getMonth(), today.getDate(), timeParts.hour, timeParts.minute, 0, 0);
    if (!date_fns_1.isValid(dateObject)) {
        throw new Error("Invalid time selection: " + JSON.stringify(timeParts));
    }
    return format_1.default(dateObject, formatString, { locale: locale });
}
exports.parseTimePartsToDate = parseTimePartsToDate;
