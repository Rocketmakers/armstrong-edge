"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBindingTools = exports.use = void 0;
var tslib_1 = require("tslib");
/* eslint-disable no-redeclare */
/** ******************************************************
 * FORM - Hooks file.
 * Contains the `useForm` hooks
 ******************************************************* */
var React = tslib_1.__importStar(require("react"));
var validationErrors_1 = require("../../components/validationErrors");
var objects_1 = require("../../utils/objects");
var typescript_1 = require("../../utils/typescript");
var useDidUpdateEffect_1 = require("../useDidUpdateEffect");
var form_state_1 = require("./form.state");
var form_utils_1 = require("./form.utils");
/**
 * The base hook used by both of the `useForm` hooks.
 * @param formStateLive The live form state object from the reducer.
 * @param formStateRef The form state object ref (this allows "instant access" to latest form data for method chaining.)
 * @param dispatch The dispatcher for sending form state modification actions.
 * @param initialData The initial data as passed to the `useForm` hook.
 * @param formConfig The configuration as passed to the `useForm` hook.
 * @returns The form state, property accessor, and associated helper methods.
 */
function useFormBase(formStateLive, formStateRef, dispatch, initialData, formConfig) {
    var _a = React.useReducer(form_state_1.validationReducer, []), clientValidationErrors = _a[0], clientValidationDispatch = _a[1];
    /**
     * For setting a new value for a target property
     */
    var set = React.useCallback(function (keyChain, newValue) {
        if (keyChain.length === 1) {
            dispatch({ type: 'set-one', propertyKey: keyChain[0], value: newValue });
        }
        else {
            dispatch({ type: 'set-path', keyChain: keyChain, value: newValue });
        }
    }, [dispatch]);
    /**
     * For adding validation errors with a string key
     */
    var addValidationError = React.useCallback(function () {
        var errors = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            errors[_i] = arguments[_i];
        }
        clientValidationDispatch({ type: 'add-validation', errors: errors });
    }, [clientValidationDispatch]);
    /**
     * For adding a validation error against a specific property from a keyChain.
     */
    var addValidationErrorFromKeyChain = React.useCallback(function (keyChain, messages) {
        var messageArray = Array.isArray(messages) ? messages : [messages];
        var key = form_utils_1.validationKeyStringFromKeyChain(keyChain, 'dots');
        addValidationError.apply(void 0, messageArray.map(function (message) { return ({ key: key, message: message }); }));
    }, [clientValidationDispatch]);
    var clearAllValidationErrors = React.useCallback(function () {
        clientValidationDispatch({ type: 'clear-validation' });
    }, [clientValidationDispatch]);
    /**
     * For clearing all validation errors associated with a specific keyChain property
     */
    var clearValidationErrorsByKeyChain = React.useCallback(function (keyChain) {
        var dotKey = form_utils_1.validationKeyStringFromKeyChain(keyChain, 'dots');
        var bracketKey = form_utils_1.validationKeyStringFromKeyChain(keyChain, 'brackets');
        clientValidationDispatch({ type: 'clear-validation', key: dotKey });
        clientValidationDispatch({ type: 'clear-validation', key: bracketKey });
    }, [clientValidationDispatch]);
    /**
     * For adding an item to a target array property (will be available to array properties only.)
     */
    var add = React.useCallback(function (keyChain, currentValue, newItem) {
        var newValue = tslib_1.__spreadArray([], (currentValue !== null && currentValue !== void 0 ? currentValue : []));
        newValue.push(newItem);
        dispatch({ type: 'set-path', keyChain: keyChain, value: newValue });
    }, [dispatch]);
    /**
     * For removing an item from a target array property at a specific index (will be available to array properties only.)
     */
    var remove = React.useCallback(function (keyChain, currentValue, index) {
        var newValue = tslib_1.__spreadArray([], (currentValue !== null && currentValue !== void 0 ? currentValue : []));
        newValue.splice(index, 1);
        dispatch({ type: 'set-path', keyChain: keyChain, value: newValue });
    }, [dispatch]);
    /**
     * For inserting an item into a target array property at a specific index (will be available to array properties only.)
     */
    var insert = React.useCallback(function (keyChain, currentValue, index, newItem) {
        var newValue = tslib_1.__spreadArray([], (currentValue !== null && currentValue !== void 0 ? currentValue : []));
        newValue.splice(index, 0, newItem);
        dispatch({ type: 'set-path', keyChain: keyChain, value: newValue });
    }, [dispatch]);
    /**
     * For removing an item from the end of a target array property (will be available to array properties only.)
     */
    var pop = React.useCallback(function (keyChain, currentValue) {
        var newValue = tslib_1.__spreadArray([], (currentValue !== null && currentValue !== void 0 ? currentValue : []));
        newValue.pop();
        dispatch({ type: 'set-path', keyChain: keyChain, value: newValue });
    }, [dispatch]);
    /**
     * For binding a target array property to a component (often an input)
     */
    var bind = React.useCallback(function (keyChain, bindConfig) {
        var _a;
        var combinedValidationErrors = tslib_1.__spreadArray(tslib_1.__spreadArray([], clientValidationErrors), ((_a = formConfig === null || formConfig === void 0 ? void 0 : formConfig.validationErrors) !== null && _a !== void 0 ? _a : []));
        return {
            value: form_utils_1.valueByKeyChain(formStateLive, keyChain),
            setValue: function (newValue) { return set(keyChain, newValue); },
            bindConfig: bindConfig,
            formConfig: formConfig,
            myValidationErrors: form_utils_1.validationErrorsByKeyChain(combinedValidationErrors, keyChain),
            dispatch: dispatch,
            keyChain: keyChain,
            initialValue: form_utils_1.valueByKeyChain(initialData, keyChain),
            addValidationError: function () {
                var messages = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    messages[_i] = arguments[_i];
                }
                return addValidationErrorFromKeyChain(keyChain, messages);
            },
            clearValidationErrors: function () { return clearValidationErrorsByKeyChain(keyChain); },
        };
    }, [
        set,
        objects_1.Objects.contentDependency(formConfig),
        dispatch,
        formStateLive,
        initialData,
        clientValidationErrors,
        addValidationErrorFromKeyChain,
        clearValidationErrorsByKeyChain,
    ]);
    /**
     * The root method used to access a property within the form data object.
     * - Receives a strictly typed set of args for targeting nested properties within a complex data object.
     * - Can also allow targeting objects within an array by requesting an index number rather than a key.
     * - The args passed to `formProp` form a "key chain" which is then used to access properties within the data object.
     * @returns a set of tools for the property in question, notably `bind` and `set`.
     */
    var formProp = React.useCallback(function () {
        var keyChain = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keyChain[_i] = arguments[_i];
        }
        var value = form_utils_1.valueByKeyChain(formStateRef.current, keyChain);
        var arrayMethods = {
            bind: function (bindConfig) { return bind(keyChain, bindConfig); },
            set: function (newValue) {
                set(keyChain, newValue);
                return formProp.apply(void 0, keyChain);
            },
            get: function () { return value; },
            add: function (newItem) {
                add(keyChain, value, newItem);
                return formProp.apply(void 0, keyChain);
            },
            pop: function () {
                pop(keyChain, value);
                return formProp.apply(void 0, keyChain);
            },
            insert: function (newItem, index) {
                insert(keyChain, value, index, newItem);
                return formProp.apply(void 0, keyChain);
            },
            remove: function (index) {
                remove(keyChain, value, index);
                return formProp.apply(void 0, keyChain);
            },
            addValidationError: function () {
                var messages = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    messages[_i] = arguments[_i];
                }
                addValidationErrorFromKeyChain(keyChain, messages);
            },
            clearClientValidationErrors: function () {
                clearValidationErrorsByKeyChain(keyChain);
            },
        };
        return arrayMethods;
    }, [bind, set, add, pop, remove, insert, formStateLive, addValidationErrorFromKeyChain, clearValidationErrorsByKeyChain]);
    /**
     * A simple getter to return the latest form data.
     */
    var getFormData = React.useCallback(function () {
        return formStateRef.current;
    }, []);
    /**
     * Resets form data to it's latest "initial" state.
     */
    var resetFormData = React.useCallback(function () {
        dispatch({ type: 'set-all', data: initialData });
    }, [objects_1.Objects.contentDependency(initialData), dispatch]);
    /**
     * Sets all form data to a new object value.
     */
    var setFormData = React.useCallback(function (newFormData) {
        return dispatch({ type: 'set-all', data: newFormData });
    }, [dispatch]);
    return {
        formState: formStateLive,
        formProp: formProp,
        resetFormData: resetFormData,
        getFormData: getFormData,
        setFormData: setFormData,
        clearAllValidationErrors: clearAllValidationErrors,
        addValidationError: addValidationError,
    };
}
/**
 * Turns a potentially complex nested object or array into a piece of live state and a set of helper tools designed to be used in a form.
 * @param initialData (optional) The initial value of the form data object.
 * @param formConfig (optional) The settings to use with the form.
 * @returns The form state, property accessor, and associated helper methods.
 */
function useForm(initialData, formConfig) {
    var _a = React.useState(initialData), formState = _a[0], setFormState = _a[1];
    var formStateRef = React.useRef(initialData);
    var dispatch = React.useCallback(function (action) {
        formStateRef.current = form_state_1.dataReducer(formStateRef.current, action);
        setFormState(formStateRef.current);
        return formStateRef.current;
    }, [setFormState]);
    useDidUpdateEffect_1.useDidUpdateLayoutEffect(function () {
        dispatch({ type: 'set-all', data: initialData });
    }, [objects_1.Objects.contentDependency(initialData)]);
    return useFormBase(formState, formStateRef, dispatch, initialData, formConfig);
}
/**
 * Turns an existing set of binding props into a piece of live state and a set of helper tools designed to be used in a form.
 * @param parentBinder A set of binding props associated with a property and returned from another `useForm` hook.
 * @param formConfig (optional) The settings to use with the form.
 * @returns The form state, property accessor, and associated helper methods.
 */
function useChild(parentBinder, formConfig) {
    var formStateRef = React.useRef(parentBinder.value);
    useDidUpdateEffect_1.useDidUpdateLayoutEffect(function () {
        formStateRef.current = parentBinder.value;
    }, [parentBinder.value]);
    var combinedConfig = React.useMemo(function () {
        var _a;
        var combination = tslib_1.__assign(tslib_1.__assign({}, ((_a = parentBinder.formConfig) !== null && _a !== void 0 ? _a : {})), (formConfig !== null && formConfig !== void 0 ? formConfig : {}));
        return Object.keys(combination).length ? combination : undefined;
    }, [objects_1.Objects.contentDependency(formConfig), objects_1.Objects.contentDependency(parentBinder.formConfig)]);
    var dispatch = React.useCallback(function (action) {
        var fullState;
        switch (action.type) {
            case 'set-all':
                fullState = parentBinder.dispatch({ type: 'set-path', keyChain: parentBinder.keyChain, value: action.data });
                break;
            case 'set-path':
                fullState = parentBinder.dispatch(tslib_1.__assign(tslib_1.__assign({}, action), { keyChain: tslib_1.__spreadArray(tslib_1.__spreadArray([], parentBinder.keyChain), action.keyChain) }));
                break;
            case 'set-one':
                fullState = parentBinder.dispatch({
                    type: 'set-path',
                    keyChain: tslib_1.__spreadArray(tslib_1.__spreadArray([], parentBinder.keyChain), [action.propertyKey]),
                    value: action.value,
                });
                break;
            default:
                typescript_1.Typescript.assertNever(action);
        }
        formStateRef.current = form_utils_1.valueByKeyChain(fullState, parentBinder.keyChain);
        return formStateRef.current;
    }, [parentBinder.keyChain, parentBinder.dispatch]);
    return useFormBase(parentBinder.value, formStateRef, dispatch, parentBinder.initialValue, combinedConfig);
}
function use(dataOrBinder, formConfig) {
    if (form_utils_1.isBindingProps(dataOrBinder)) {
        return useChild(dataOrBinder, formConfig);
    }
    return useForm(dataOrBinder, formConfig);
}
exports.use = use;
/**
 * An optional hook for internal form component use. Takes a bind and some optional overrides and ensures that onChange and value
 * use the bind's formatters
 */
function useBindingTools(bind, overrides) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var value = React.useMemo(function () { var _a, _b, _c, _d, _e; return (_e = (_a = overrides === null || overrides === void 0 ? void 0 : overrides.value) !== null && _a !== void 0 ? _a : (_d = (_c = (_b = bind === null || bind === void 0 ? void 0 : bind.bindConfig) === null || _b === void 0 ? void 0 : _b.format) === null || _c === void 0 ? void 0 : _c.fromData) === null || _d === void 0 ? void 0 : _d.call(_c, bind.value)) !== null && _e !== void 0 ? _e : bind === null || bind === void 0 ? void 0 : bind.value; }, [overrides === null || overrides === void 0 ? void 0 : overrides.value, (_b = (_a = bind === null || bind === void 0 ? void 0 : bind.bindConfig) === null || _a === void 0 ? void 0 : _a.format) === null || _b === void 0 ? void 0 : _b.fromData, bind === null || bind === void 0 ? void 0 : bind.value]);
    var onChange = React.useCallback(function (newValue) {
        var _a, _b, _c, _d, _e, _f;
        (_a = overrides === null || overrides === void 0 ? void 0 : overrides.onChange) === null || _a === void 0 ? void 0 : _a.call(overrides, newValue);
        (_b = bind === null || bind === void 0 ? void 0 : bind.setValue) === null || _b === void 0 ? void 0 : _b.call(bind, (_f = (_e = (_d = (_c = bind.bindConfig) === null || _c === void 0 ? void 0 : _c.format) === null || _d === void 0 ? void 0 : _d.toData) === null || _e === void 0 ? void 0 : _e.call(_d, newValue)) !== null && _f !== void 0 ? _f : newValue);
    }, [overrides === null || overrides === void 0 ? void 0 : overrides.onChange, bind === null || bind === void 0 ? void 0 : bind.setValue, (_d = (_c = bind === null || bind === void 0 ? void 0 : bind.bindConfig) === null || _c === void 0 ? void 0 : _c.format) === null || _d === void 0 ? void 0 : _d.toData]);
    var getFormattedValueFromData = React.useCallback(function (val) { var _a, _b, _c, _d; return (_d = (_c = (_b = (_a = bind === null || bind === void 0 ? void 0 : bind.bindConfig) === null || _a === void 0 ? void 0 : _a.format) === null || _b === void 0 ? void 0 : _b.fromData) === null || _c === void 0 ? void 0 : _c.call(_b, val)) !== null && _d !== void 0 ? _d : val; }, [(_f = (_e = bind === null || bind === void 0 ? void 0 : bind.bindConfig) === null || _e === void 0 ? void 0 : _e.format) === null || _f === void 0 ? void 0 : _f.fromData]);
    var getFormattedValueToData = React.useCallback(function (val) { var _a, _b, _c, _d; return (_d = (_c = (_b = (_a = bind === null || bind === void 0 ? void 0 : bind.bindConfig) === null || _a === void 0 ? void 0 : _a.format) === null || _b === void 0 ? void 0 : _b.toData) === null || _c === void 0 ? void 0 : _c.call(_b, val)) !== null && _d !== void 0 ? _d : val; }, [(_h = (_g = bind === null || bind === void 0 ? void 0 : bind.bindConfig) === null || _g === void 0 ? void 0 : _g.format) === null || _h === void 0 ? void 0 : _h.toData]);
    var validationErrorMessages = validationErrors_1.useMyValidationErrorMessages(bind, overrides === null || overrides === void 0 ? void 0 : overrides.validationErrorMessages);
    var validationMode = (_l = (_j = overrides === null || overrides === void 0 ? void 0 : overrides.validationMode) !== null && _j !== void 0 ? _j : (_k = bind === null || bind === void 0 ? void 0 : bind.formConfig) === null || _k === void 0 ? void 0 : _k.validationMode) !== null && _l !== void 0 ? _l : 'both';
    var validationErrorIcon = (_m = overrides === null || overrides === void 0 ? void 0 : overrides.validationErrorIcon) !== null && _m !== void 0 ? _m : (_o = bind === null || bind === void 0 ? void 0 : bind.formConfig) === null || _o === void 0 ? void 0 : _o.validationErrorIcon;
    return [
        value,
        (overrides === null || overrides === void 0 ? void 0 : overrides.onChange) || (bind === null || bind === void 0 ? void 0 : bind.setValue) ? onChange : undefined,
        {
            getFormattedValueFromData: getFormattedValueFromData,
            getFormattedValueToData: getFormattedValueToData,
            validationErrorMessages: validationErrorMessages,
            validationMode: validationMode,
            validationErrorIcon: validationErrorIcon,
            shouldShowValidationErrorIcon: validationMode === 'icon' || validationMode === 'both',
            shouldShowValidationErrorMessage: validationMode === 'message' || validationMode === 'both',
        },
    ];
}
exports.useBindingTools = useBindingTools;
