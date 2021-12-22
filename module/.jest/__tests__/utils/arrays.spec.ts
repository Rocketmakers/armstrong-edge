import { Arrays } from '../../../src/utils/arrays';

describe('Array utils', () => {
  it('flattens a set of arrays', () => {
    const array1 = ['one', 'two', 'three'];
    const array2 = ['alpha', 'beta', 'gamma'];
    const array3 = ['dog', 'cat'];
    expect(Arrays.flatten(array1, array2, array3)).toEqual(['one', 'two', 'three', 'alpha', 'beta', 'gamma', 'dog', 'cat']);
  });
});
