"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInfinitePaging = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var utils_1 = require("../utils");
var initialState = function (initialItems) { return ({
    items: initialItems,
    nextPageToken: undefined,
    hasFinished: false,
    error: undefined,
}); };
function useInfinitePagingReducer(state, action) {
    switch (action.type) {
        case 'fetch': {
            var items = tslib_1.__assign(tslib_1.__assign({}, state.items), utils_1.Arrays.arrayToDictionary(action.newItems, action.getKey));
            return {
                items: items,
                nextPageToken: action.nextPageToken,
                error: undefined,
                hasFinished: action.hasFinished,
            };
        }
        case 'reset': {
            return initialState(utils_1.Arrays.arrayToDictionary(action.initialItems, action.getKey));
        }
        case 'error': {
            return tslib_1.__assign(tslib_1.__assign({}, state), { error: action.error });
        }
        case 'insert': {
            var items = tslib_1.__assign(tslib_1.__assign({}, state.items), utils_1.Arrays.arrayToDictionary(action.newItems, action.getKey));
            return tslib_1.__assign(tslib_1.__assign({}, state), { items: items });
        }
        case 'remove': {
            var items = tslib_1.__assign({}, state.items);
            delete items[action.key];
            return tslib_1.__assign(tslib_1.__assign({}, state), { items: items });
        }
        default: {
            return state;
        }
    }
}
/** A hook used to create an infinite paging state - it takes a fetch callback that returns some data that is added to a piece of state that's returned as on big array */
function useInfinitePaging(fetch, getKey, settings) {
    var _this = this;
    if (settings === void 0) { settings = {}; }
    var _a = React.useReducer(useInfinitePagingReducer, initialState(utils_1.Arrays.arrayToDictionary(settings.initialItems || [], getKey))), state = _a[0], dispatch = _a[1];
    var _b = React.useState(false), isFetching = _b[0], setIsFetching = _b[1];
    var fetcher = React.useCallback(function (fetchPageToken) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var response, noReturnedItems, responseSmallerThanPageSize, error_1;
        var _a, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    setIsFetching(true);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch(fetchPageToken)];
                case 2:
                    response = _c.sent();
                    if (!response) {
                        throw new Error('No response returned from fetch in useInfinitePaging');
                    }
                    noReturnedItems = !((_a = response.data) === null || _a === void 0 ? void 0 : _a.length);
                    responseSmallerThanPageSize = !noReturnedItems && settings.pageSize && response.data.length < settings.pageSize;
                    dispatch({
                        type: 'fetch',
                        getKey: getKey,
                        hasFinished: noReturnedItems || responseSmallerThanPageSize || !response.nextPageToken,
                        newItems: response.data,
                        nextPageToken: response.nextPageToken,
                    });
                    (_b = settings.onFetched) === null || _b === void 0 ? void 0 : _b.call(settings, response);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _c.sent();
                    // eslint-disable-next-line no-console
                    console.error(error_1);
                    dispatch({ type: 'error', error: error_1 });
                    return [3 /*break*/, 4];
                case 4:
                    setIsFetching(false);
                    return [2 /*return*/];
            }
        });
    }); }, [settings.firstPageToken, fetch, settings.pageSize, settings.onFetched, dispatch, getKey]);
    var loadMore = React.useCallback(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(!isFetching && !state.hasFinished)) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetcher(state.nextPageToken)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); }, [fetcher, isFetching, state.hasFinished, state.nextPageToken]);
    /** reload the state  */
    var reload = React.useCallback(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dispatch({ type: 'reset', getKey: getKey, initialItems: settings.initialItems || [] });
                    return [4 /*yield*/, fetcher(settings.firstPageToken)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [fetcher, dispatch, getKey, settings.initialItems, settings.firstPageToken]);
    /** adds the given new items to the array state, or replaces them if items with that key are already in */
    var insert = React.useCallback(function () {
        var newItems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newItems[_i] = arguments[_i];
        }
        dispatch({ type: 'insert', getKey: getKey, newItems: newItems });
    }, [dispatch, getKey]);
    var remove = React.useCallback(function (key) {
        dispatch({ type: 'remove', key: key });
    }, [dispatch]);
    React.useEffect(function () {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        fetcher(settings.firstPageToken);
    }, []);
    var returnItems = React.useMemo(function () { return Object.keys(state.items).map(function (key) { return state.items[key]; }); }, [state]);
    return {
        items: returnItems,
        isFetching: isFetching,
        error: state.error,
        hasFinished: state.hasFinished,
        loadMore: loadMore,
        reload: reload,
        insert: insert,
        remove: remove,
    };
}
exports.useInfinitePaging = useInfinitePaging;
