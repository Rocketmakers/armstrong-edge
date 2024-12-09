import { dataReducer, hasTruthyProperty, initialDataIsCallback } from './data';
import * as KeyChainUtils from './keyChain';

/** initialDataIsCallback */
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

/** dataReducer */
describe('dataReducer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('carries out a deep merge when the action is set-path', () => {
    const deepMergeSpy = jest.spyOn(KeyChainUtils, 'mergeDeepFromKeyChain').mockReturnValue({ test: 'newValue' });
    const state = {
      test: 'value',
    };
    const result = dataReducer(state, {
      type: 'set-path',
      keyChain: ['test'],
      value: 'newValue',
    });
    expect(deepMergeSpy).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      test: 'newValue',
    });
  });

  describe('set-one', () => {
    it('transforms one property in state when state is an array and the path reference is an index', () => {
      const state = ['value'];
      const result = dataReducer(state, {
        type: 'set-one',
        propertyKey: 0,
        value: 'newValue',
      });
      expect(result).toEqual(['newValue']);
    });

    it('transforms one property in state when state is an object and the path reference is a key', () => {
      const state = {
        test: 'value',
      };
      const result = dataReducer(state, {
        type: 'set-one',
        propertyKey: 'test',
        value: 'newValue',
      });
      expect(result).toEqual({
        test: 'newValue',
      });
    });
  });

  describe('set-all', () => {
    it('transforms all changed properties in state when state is an array', () => {
      const state = ['value1', 'value2', 'value3'];
      const result = dataReducer(state, {
        type: 'set-all',
        data: ['newValue1', 'newValue2', 'value3', 'value4'],
      });
      expect(result).toEqual(['newValue1', 'newValue2', 'value3', 'value4']);
    });

    it('transforms all changed properties in state when state is an object', () => {
      const state = { test1: 'value1', test2: 'value2', test3: 'value3' };
      const result = dataReducer(state, {
        type: 'set-all',
        data: { test1: 'newValue1', test2: 'newValue2', test3: 'value3' },
      });
      expect(result).toEqual({
        test1: 'newValue1',
        test2: 'newValue2',
        test3: 'value3',
      });
    });
  });
});

describe('hasTruthyProperty', () => {
  it('should return false when object is null, undefined or has no truthy properties', () => {
    expect(hasTruthyProperty(null)).toBe(false);
    expect(hasTruthyProperty(undefined)).toBe(false);
    expect(hasTruthyProperty({})).toBe(false);
    expect(hasTruthyProperty({ prop: false })).toBe(false);
    expect(hasTruthyProperty({ prop: 0 })).toBe(false);
    expect(hasTruthyProperty({ prop: '' })).toBe(false);
    expect(hasTruthyProperty({ prop: {} })).toBe(false);
  });

  it('should return true when object has a truthy property', () => {
    expect(hasTruthyProperty({ prop: true })).toBe(true);
    expect(hasTruthyProperty({ prop: 1 })).toBe(true);
    expect(hasTruthyProperty({ prop: 'a' })).toBe(true);
  });

  it('should return true when nested object has a truthy property', () => {
    expect(hasTruthyProperty({ prop: { nestedProp: true } })).toBe(true);
    expect(hasTruthyProperty({ prop: { nestedProp: 1 } })).toBe(true);
    expect(hasTruthyProperty({ prop: { nestedProp: 'a' } })).toBe(true);
  });
});
