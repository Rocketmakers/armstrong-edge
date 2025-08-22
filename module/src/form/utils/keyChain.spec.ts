import {
  childKeyChainStringFromParent,
  isArrayValue,
  isMyKeyChainItem,
  isValidPropertyKey,
  keyStringFromKeyChain,
  mergeDeepFromKeyChain,
  valueByKeyChain,
} from './keyChain';

/* valueByKeyChain */
describe('valueByKeyChain', () => {
  it('returns the value of array state if a value has been set at the relevant array index', () => {
    const state = ['value', 'value2'];
    const result = valueByKeyChain(state, [1]);
    expect(result).toBe('value2');
  });

  it('returns the value of array state if a value has been set at the relevant key chain', () => {
    const state = {
      test: { value: 'value' },
    };
    const result = valueByKeyChain(state, ['test', 'value']);
    expect(result).toBe('value');
  });

  it('returns undefined if no value has been set at the relevant key chain', () => {
    const state = {
      test: { value: 'value' },
    };
    const result = valueByKeyChain(state, ['test', 3]);
    expect(result).toBeUndefined();
  });
});

/* mergeDeepFromKeyChain */
describe('mergeDeepFromKeyChain', () => {
  describe('array states', () => {
    it('deep merges an array value into the array', () => {
      const target = [5, 'foo', [['a', 'b']], { foo: 'bar' }];
      const keyChain = [2, 0];
      const value = ['c', 'd', 'e'];
      const result = mergeDeepFromKeyChain(target, keyChain, value);
      expect(result).toEqual([5, 'foo', [['c', 'd', 'e']], { foo: 'bar' }]);
    });

    it('deep merges an object into the array', () => {
      const target = [5, 'foo', ['a', 'b'], [{ foo: 'bar' }]];
      const keyChain = [3, 0];
      const value = { bar: 'foo' };
      const result = mergeDeepFromKeyChain(target, keyChain, value);
      expect(result).toEqual([5, 'foo', ['a', 'b'], [{ bar: 'foo' }]]);
    });

    it('deep merges a value into an object in the array', () => {
      const target = [5, 'foo', [['a', 'b']], { foo: 'bar' }];
      const keyChain = [3, 0];
      const value = 'bar';
      const result = mergeDeepFromKeyChain(target, keyChain, value);
      expect(result).toEqual([5, 'foo', [['a', 'b']], { 0: 'bar', foo: 'bar' }]);
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
            foo: 'bar',
          },
        },
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
            foo: 'bar',
          },
        },
      });
    });

    it('deep merges an object into the object', () => {
      const target = {
        test: 'value',
        key: {
          string: 'string',
          array: ['a', 'b'],
          obj: {
            foo: 'bar',
          },
        },
      };
      const keyChain = ['key', 'obj'];
      const value = { bar: 'foo' };
      const result = mergeDeepFromKeyChain(target, keyChain, value);
      expect(result).toEqual({
        test: 'value',
        key: {
          string: 'string',
          array: ['a', 'b'],
          obj: {
            bar: 'foo',
          },
        },
      });
    });

    it('deep merges a value into the object', () => {
      const target = {
        test: 'value',
        key: {
          string: 'string',
          array: ['a', 'b'],
          obj: {
            foo: 'bar',
          },
        },
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
            foo: 'bar',
          },
        },
      });
    });

    it('deep merges a value into an array in the object', () => {
      const target = {
        test: 'value',
        key: {
          string: 'string',
          array: ['a', 'b'],
          obj: {
            foo: 'bar',
          },
        },
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
            foo: 'bar',
          },
        },
      });
    });
  });
});

/* childKeyChainStringFromParent */
describe('childKeyChainStringFromParent', () => {
  it('strips out a parent keychain string from a keychain string to return only the child keychain string with dot notation', () => {
    const parent = ['test', 'value'];
    const child = 'test.value.3.target';

    const result = childKeyChainStringFromParent(child, parent);

    expect(result).toBe('3.target');
  });

  it('strips out a parent keychain string from a keychain string to return only the child keychain string (minus array accessors) with bracket notation', () => {
    const parent = ['test', 'value'];
    const child = 'test.value[3].target';

    const result = childKeyChainStringFromParent(child, parent);

    expect(result).toBe('target');
  });
});

/* isArrayValue */
describe('isArrayValue', () => {
  it('returns true if a form action is being attempted on an array value', () => {
    const value: unknown[] = [];
    const result = isArrayValue(value, 'action');
    expect(result).toBeTruthy();
  });

  it('throws an error if a form action is being attempted on a non-array value', () => {
    const value = 'foo';
    expect(() => isArrayValue(value, 'action')).toThrow(
      '"action" cannot be used on a set form property that does not contain an array value, the current value of this property is: "foo"'
    );
  });
});

describe('isValidPropertyKey', () => {
  it('returns true for a valid string key', () => {
    const key = 'validKey';
    const result = isValidPropertyKey(key);
    expect(result).toBeTruthy();
  });

  it('returns true for a valid number key', () => {
    const key = 123;
    const result = isValidPropertyKey(key);
    expect(result).toBeTruthy();
  });

  it('returns true for 0 as a valid number key', () => {
    const key = 0;
    const result = isValidPropertyKey(key);
    expect(result).toBeTruthy();
  });

  it('returns false for an empty string key', () => {
    const key = '';
    const result = isValidPropertyKey(key);
    expect(result).toBeFalsy();
  });

  it('returns false for undefined key', () => {
    const key = undefined;
    const result = isValidPropertyKey(key);
    expect(result).toBeFalsy();
  });
});

/* validationKeyStringFromKeyChain */
describe('keyStringFromKeyChain', () => {
  it('converts a keychain to dot notation to target an item stored by keychain string', () => {
    const keyChain = ['test', 'value', 3, 'target'];
    const result = keyStringFromKeyChain(keyChain, 'dots');
    expect(result).toBe('test.value.3.target');
  });

  it('converts a keychain to dot notation to target an item stored by keychain string when the keychain containes a zero', () => {
    const keyChain = ['test', 'value', 0, 'target'];
    const result = keyStringFromKeyChain(keyChain, 'dots');
    expect(result).toBe('test.value.0.target');
  });

  it('converts a keychain to bracket notation to target an item stored by keychain string', () => {
    const keyChain = ['test', 'value', 3, 'target'];
    const result = keyStringFromKeyChain(keyChain, 'brackets');
    expect(result).toBe('test.value[3].target');
  });
});

/* isMyKeyChainItem */
describe('isMyKeyChainItem', () => {
  it('returns true if the key is an exact match for the property keychain', () => {
    const errorKey = 'test.value.3.target';
    const keychains = ['test.value.3.target'];
    const result = isMyKeyChainItem(errorKey, ...keychains);
    expect(result).toBeTruthy();
  });

  it('returns true if the key is a partial match for the property keychain in dot notation', () => {
    const errorKey = 'test.value.3.target';
    const keychains = ['test.value'];
    const result = isMyKeyChainItem(errorKey, ...keychains);
    expect(result).toBeTruthy();
  });

  it('returns true if the key is a partial match for the property keychain in bracket notation', () => {
    const errorKey = 'test.value[3].target';
    const keychains = ['test.value'];
    const result = isMyKeyChainItem(errorKey, ...keychains);
    expect(result).toBeTruthy();
  });

  it('returns false if the key is not a partial match for the property keychain', () => {
    const errorKey = 'test.value[4].target';
    const keychain = ['test.value[3]'];
    const result = isMyKeyChainItem(errorKey, ...keychain);
    expect(result).toBeFalsy();
  });
});
