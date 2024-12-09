import { concat } from './classNames';

describe('Classname utils', () => {
  it('joins a list of string arg classnames into a single string using concat', () => {
    const string1 = 'string1';
    const string2 = 'string2';

    const result = concat(string1, string2);

    expect(result).toBe('string1 string2');
  });

  it('spreads an array arg of classnames into a single string using concat', () => {
    const array = ['string1', 'string2'];

    const result = concat(array);

    expect(result).toBe('string1 string2');
  });

  it('merges an array arg of classnames and a string arg of classnames into a single string using concat', () => {
    const string = 'stringa';
    const array = ['string1', 'string2'];

    const result = concat(string, array);

    expect(result).toBe('stringa string1 string2');
  });

  it('dereferences an object into a single string using concat', () => {
    const obj = {
      key1: true,
    };

    const result = concat(obj);

    expect(result).toBe('key1');
  });

  it('only dereferences keys from an object whose value is true into a single string using concat', () => {
    const obj = {
      key1: true,
      key2: false,
      key3: null,
      key4: true,
      key5: undefined,
    };

    const result = concat(obj);

    expect(result).toBe('key1 key4');
  });
});
