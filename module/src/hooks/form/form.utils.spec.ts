import { IValidationError } from './form.types';
import { validationKeyStringFromKeyChain, isMyValidationError, validationErrorsByKeyChain, valueByKeyChain, isBindingProps, isArrayValue, initialDataIsCallback, childKeyChainStringFromParent, mergeDeepFromKeyChain } from './form.utils';

describe('Form utils', () => {
    describe('validationKeyStringFromKeyChain', () => {
        it('converts a keychain to dot notation to target a validation error', () => {
            const keyChain = ['test', 'value', 3, 'target'];
            const result = validationKeyStringFromKeyChain(keyChain, 'dots');
            expect(result).toEqual('test.value.3.target');
        })

        it('converts a keychain to bracket notation to target a validation error', () => {
            const keyChain = ['test', 'value', 3, 'target'];
            const result = validationKeyStringFromKeyChain(keyChain, 'brackets');
            expect(result).toEqual('test.value[3].target');
        })
    });

    describe('isMyValidationError', () => {
        it('returns true if the validation key is an exact match for the property keychain', () => {
            const errorKey = 'test.value.3.target';
            const keychains = ['test.value.3.target'];
            const result = isMyValidationError(errorKey, ...keychains);
            expect(result).toBeTruthy();
        });

        it('returns true if the validation key is a partial match for the property keychain in dot notation', () => {
            const errorKey = 'test.value.3.target';
            const keychains = ['test.value'];
            const result = isMyValidationError(errorKey, ...keychains);
            expect(result).toBeTruthy();
        });

        it('returns true if the validation key is a partial match for the property keychain in bracket notation', () => {
            const errorKey = 'test.value[3].target';
            const keychains = ['test.value'];
            const result = isMyValidationError(errorKey, ...keychains);
            expect(result).toBeTruthy();
        });

        it('returns false if the validation key is not a partial match for the property keychain', () => {
            const errorKey = 'test.value[4].target';
            const keychain = ['test.value[3]'];
            const result = isMyValidationError(errorKey, ...keychain);
            expect(result).toBeFalsy();
        });
    });

    describe('validationErrorsByKeyChain', () => {
        it('returns no validation errors if no keychain is provided', () => {
            const error: IValidationError = {
                key: 'test.value[3].target',
                message: 'Test is a validation issue.',
                identifier: 'radio'
            };
            const otherError = { key: 'test.value[2]', message: 'exists' };
            const result = validationErrorsByKeyChain([error, otherError]);
            expect(result).toEqual([]);
        })

        it('returns the relevant validation errors if they appear on the current keychain', () => {
            const error: IValidationError = {
                key: 'test.value[3].target',
                message: 'Test is a validation issue.',
                identifier: 'radio'
            }
            const otherError = { key: 'test.value[2]', message: 'exists' };
            const keychain = ['test', 'value', 3];
            const result = validationErrorsByKeyChain([error, otherError], keychain);
            expect(result).toEqual([error]);
        })

        it('returns no validation errors if they don\'t apply to the current keychain', () => {
            const error: IValidationError = {
                key: 'test.value[4].target',
                message: 'Test is a validation issue.',
                identifier: 'radio'
            }
            const otherError = { key: 'test.value[2]', message: 'exists' };
            const keychain = ['test', 'value', 3];
            const result = validationErrorsByKeyChain([error, otherError], keychain);
            expect(result).toEqual([]);
        })
    });

    describe('valueByKeyChain', () => {
        it('returns the value of array state if a value has been set at the relevant key chain', () => {
            const state = ['value', 'value2'];
            const result = valueByKeyChain(state, [1]);
            expect(result).toBe('value2');
        });

        it('returns the value of array state if a value has been set at the relevant key chain', () => {
            const state = {
                test: { value: 'value'}
            }
            const result = valueByKeyChain(state, ['test', 'value']);
            expect(result).toBe('value');
        });

        it('returns undefined if no value has been set at the relevant key chain', () => {
            const state = {
                test: { value: 'value'}
            }
            const result = valueByKeyChain(state, ['test', 3]);
            expect(result).toBeUndefined();
        })
    });

    describe('isBindingProps', () => {
        it('returns true if the item checked has all the IBindingProps properties', () => {
            const item = {
                setValue: true,
                dispatch: true,
                keyChain: true,
                myValidationErrors: true
            };
            const result = isBindingProps(item);
            expect(result).toBeTruthy();
        });

        it('returns false if the item checked is missing any of the IBindingProps properties', () => {
            const item1 = {
                dispatch: true,
                keyChain: true,
                myValidationErrors: true
            };
            const result1 = isBindingProps(item1);
            expect(result1).toBeFalsy();

            const item2 = {
                setValue: true,
                keyChain: true,
                myValidationErrors: true
            };
            const result2 = isBindingProps(item2);
            expect(result2).toBeFalsy();

            const item3 = {
                setValue: true,
                dispatch: true,
                myValidationErrors: true
            };
            const result3 = isBindingProps(item3);
            expect(result3).toBeFalsy();

            const item4 = {
                setValue: true,
                dispatch: true,
                keyChain: true,
            };
            const result4 = isBindingProps(item4);
            expect(result4).toBeFalsy();
        });
    });

    describe('isArrayValue', () => {
        it('returns true if a form action is being attempted on an array value', () => {
            const value = [];
            const result = isArrayValue(value, 'action');
            expect(result).toBeTruthy();
        });

        it('throws an error if a form action is being attempted on a non-array value', () => {
            const value = 'foo';
            expect(() => isArrayValue(value, 'action')).toThrowError('"action" cannot be used on a set form property that does not contain an array value, the current value of this property is: "foo"');
        });
    });

    describe('initialDataIsCallback', () => {
        it('returns true if the state data passed to the form is a function', () => {
            const data = () => ({});
            const result = initialDataIsCallback(data);
            expect(result).toBeTruthy();
        });

        it('returns false if the state data passed to the form is not a function', () => {
            const data = {};
            const result = initialDataIsCallback(data);
            expect(result).toBeFalsy();
        });
    });

    describe('childKeyChainStringFromParent', () => {
        it('strips out a parent keychain string from a keychain string to return only the child keychain string with dot notation', () => {
            const parent = ['test', 'value'];
            const child = 'test.value.3.target';

            const result = childKeyChainStringFromParent(child, parent);

            expect(result).toEqual('3.target');
        });

        it('strips out a parent keychain string from a keychain string to return only the child keychain string (minus array accessors) with bracket notation', () => {
            const parent = ['test', 'value'];
            const child = 'test.value[3].target';

            const result = childKeyChainStringFromParent(child, parent);

            expect(result).toEqual('target');
        });
    });

    describe('mergeDeepFromKeyChain', () => {

        describe('array states', () => {
            it('deep merges an array value into the array', () => {
                const target = [5, 'foo', [['a', 'b']], { foo: 'bar'}];
                const keyChain = [2, 0];
                const value = ['c', 'd', 'e'];
                const result = mergeDeepFromKeyChain(target, keyChain, value);
                expect(result).toEqual([5, 'foo', [['c', 'd', 'e']], { foo: 'bar'}]);
            });

            it('deep merges an object into the array', () => {
                const target = [5, 'foo', ['a', 'b'], [{ foo: 'bar'}]];
                const keyChain = [3, 0];
                const value = {bar: 'foo'};
                const result = mergeDeepFromKeyChain(target, keyChain, value);
                expect(result).toEqual([5, 'foo', ['a', 'b'], [{ bar: 'foo'}]]);
            });

            it('deep merges a value into an object in the array', () => {
                const target = [5, 'foo', [['a', 'b']], { foo: 'bar'}];
                const keyChain = [3, 0];
                const value = 'bar';
                const result = mergeDeepFromKeyChain(target, keyChain, value);
                expect(result).toEqual([5, 'foo', [['a', 'b']], {0: 'bar', foo: 'bar'}]);
            });
        });

        describe('object states', () => {
            it('deep merges an array value into the object', () => {
                const target = {
                    test: 'value',
                    key: {
                        string: 'string',
                        array: ['a', 'b'],
                        obj: {
                            foo: 'bar'
                        }
                    }
                };
                const keyChain = ['key', 'array'];
                const value = ['c', 'd', 'e'];
                const result = mergeDeepFromKeyChain(target, keyChain, value);
                expect(result).toEqual({
                    test: 'value',
                    key: {
                        string: 'string',
                        array: ['c', 'd', 'e'],
                        obj: {
                            foo: 'bar'
                        }
                    }
                });
            });

            it('deep merges an object into the object', () => {
                const target = {
                    test: 'value',
                    key: {
                        string: 'string',
                        array: ['a', 'b'],
                        obj: {
                            foo: 'bar'
                        }
                    }
                };
                const keyChain = ['key', 'obj'];
                const value = {bar: 'foo'};
                const result = mergeDeepFromKeyChain(target, keyChain, value);
                expect(result).toEqual({
                    test: 'value',
                    key: {
                        string: 'string',
                        array: ['a', 'b'],
                        obj: {
                            bar: 'foo'
                        }
                    }
                });
            });

            it('deep merges a value into the object', () => {
                const target = {
                    test: 'value',
                    key: {
                        string: 'string',
                        array: ['a', 'b'],
                        obj: {
                            foo: 'bar'
                        }
                    }
                };
                const keyChain = ['key', 'string'];
                const value = 'test';
                const result = mergeDeepFromKeyChain(target, keyChain, value);
                expect(result).toEqual({
                    test: 'value',
                    key: {
                        string: 'test',
                        array: ['a', 'b'],
                        obj: {
                            foo: 'bar'
                        }
                    }
                });
            });

            it('deep merges a value into an array in the object', () => {
                const target = {
                    test: 'value',
                    key: {
                        string: 'string',
                        array: ['a', 'b'],
                        obj: {
                            foo: 'bar'
                        }
                    }
                };
                const keyChain = ['key', 'array', 0];
                const value = 'test';
                const result = mergeDeepFromKeyChain(target, keyChain, value);
                expect(result).toEqual({
                    test: 'value',
                    key: {
                        string: 'string',
                        array: ['test', 'b'],
                        obj: {
                            foo: 'bar'
                        }
                    }
                });
            });
        });
    });
});