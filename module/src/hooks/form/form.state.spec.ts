import { dataReducer, validationReducer } from './form.state';
import { IValidationError } from './form.types';
import * as FormUtils from './form.utils';

describe('Form state', () => {
    describe('data reducer', () => {
        beforeEach(() => {
            jest.resetAllMocks();
        });

        it('carries out a deep merge when the action is set-path', () => {
            const deepMergeSpy = jest.spyOn(FormUtils, 'mergeDeepFromKeyChain').mockReturnValue({test: 'newValue'});
            const state = {
                test: 'value'
            }
            const result = dataReducer(state, {
                type: 'set-path',
                keyChain: ['test'],
                value: 'newValue'
            })
            expect(deepMergeSpy).toHaveBeenCalledTimes(1);
            expect(result).toEqual({
                test: 'newValue'
            });
        })

        describe('set-one', () => {
            it('transforms one property in state when state is an array and the path reference is an index', () => {
                const state = ['value']
                const result = dataReducer(state, {
                    type: 'set-one',
                    propertyKey: 0,
                    value: 'newValue'
                })
                expect(result).toEqual(['newValue']);
            });

            it('transforms one property in state when state is an object and the path reference is a key', () => {
                const state = {
                    test: 'value'
                }
                const result = dataReducer(state, {
                    type: 'set-one',
                    propertyKey: 'test',
                    value: 'newValue'
                })
                expect(result).toEqual({
                    test: 'newValue'
                });
            });
        });

        describe('set-all', () => {
            it('transforms all changed properties in state when state is an array', () => {
                const state = ['value1', 'value2', 'value3']
                const result = dataReducer(state, {
                    type: 'set-all',
                    data: ['newValue1', 'newValue2', 'value3', 'value4']
                })
                expect(result).toEqual(['newValue1', 'newValue2', 'value3', 'value4']);
            });

            it('transforms all changed properties in state when state is an object', () => {
                const state = {test1: 'value1', test2: 'value2', test3: 'value3'}
                const result = dataReducer(state, {
                    type: 'set-all',
                    data: {test1: 'newValue1', test2: 'newValue2', test3: 'value3'}
                })
                expect(result).toEqual({test1: 'newValue1', test2: 'newValue2', test3: 'value3'});
            });
        });
    });

    describe('validation reducer', () => {
        it('adds an error to the validations list if the action is add-validation', () => {
            const state = [{key: 'exists', message: 'exists'}];
            const error = {
                        key: 'test',
                        message: 'Test is a validation issue.'
                    }
            const result = validationReducer(state, {
                type: 'add-validation',
                errors: [
                    error
                ]
            })
            expect(result).toEqual([{key: 'exists', message: 'exists'}, error]);
        });

        it('removes an error from the validations list if the action is clear-validation and a key is provided', () => {
            const error = {
                key: 'test',
                message: 'Test is a validation issue.'
            }
            const state = [{key: 'exists', message: 'exists'}, error];
            const result = validationReducer(state, {
                type: 'clear-validation',
                key: 'test'
            })
            expect(result).toEqual([{key: 'exists', message: 'exists'}]);
        });

        it('removes an error from the validations list if the action is clear-validation and an identifier is provided', () => {
            const error: IValidationError = {
                key: 'test',
                message: 'Test is a validation issue.',
                identifier: 'radio'
            }
            const state = [{key: 'exists', message: 'exists'}, error];
            const result = validationReducer(state, {
                type: 'clear-validation',
                key: 'test',
                identifiers: ['radio']
            })
            expect(result).toEqual([{key: 'exists', message: 'exists'}]);
        });
    });
});