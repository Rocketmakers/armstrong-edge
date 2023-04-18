import {
  arrayToArrayDictionary,
  arrayToArraysByKey,
  arrayToDictionary,
  findLastIndex,
  flatten,
  getAtOverallIndex,
  getOverallIndex,
  reIndex,
  repeat,
} from './arrays';

describe('Array utils', () => {
  it('converts an array of arrays into a single array using flatten', () => {
    const array1 = ['a', 'b'];
    const array2 = ['c', 'd'];

    const result = flatten(array1, array2);

    expect(result).toEqual(['a', 'b', 'c', 'd']);
  });

  it('turns an array into a dictionary of items in that array by a given key using arrayToDictionary', () => {
    const things = [
      { id: 'a', name: 'thing' },
      { id: 'b', name: 'otherThing' },
    ];

    const result = arrayToDictionary(things, 'id');

    expect(result).toEqual({
      a: { id: 'a', name: 'thing' },
      b: { id: 'b', name: 'otherThing' },
    });
  });

  it('sorts an array into a dictionary of arrays keyed by a value to sort on using arrayToDictionary', () => {
    const things = [
      { type: 'plant', name: 'rose' },
      { type: 'plant', name: 'tree' },
      { type: 'animal', name: 'cat' },
    ];

    const result = arrayToArrayDictionary(things, item => item.type);

    expect(result).toEqual({
      plant: [
        { type: 'plant', name: 'rose' },
        { type: 'plant', name: 'tree' },
      ],
      animal: [{ type: 'animal', name: 'cat' }],
    });
  });

  it('converts an array of objects to a set of nested arrays usign arrayToArraysByKey', () => {
    const things = [
      { type: 'plant', name: 'rose' },
      { type: 'plant', name: 'tree' },
      { type: 'animal', name: 'cat' },
    ];

    const result = arrayToArraysByKey(things, item => item.type);

    expect(result).toEqual([
      {
        key: 'plant',
        items: [
          { type: 'plant', name: 'rose' },
          { type: 'plant', name: 'tree' },
        ],
      },
      {
        key: 'animal',
        items: [{ type: 'animal', name: 'cat' }],
      },
    ]);
  });

  it('returns the index of the last item in the array where the callback returns true using findLastIndex', () => {
    const array = ['a', 'a', 'b'];

    const result = findLastIndex(array, item => item === 'a');

    expect(result).toBe(1);
  });

  it('re-indexes an array from a specific index point using reIndex', () => {
    const array = ['a', 'b', 'c'];

    const result = reIndex(array, 1);

    expect(result).toEqual(['b', 'c', 'a']);
  });

  it('maps the result of an index function the specified number of times using repeat', () => {
    const result = repeat(5, index => index * 2);

    // result
    expect(result).toEqual([0, 2, 4, 6, 8]);
  });
});

describe('Nested array utils', () => {
  it('finds an overall index for an item in a nested set of array objects using getArrayIndex', () => {
    const arrays = [{ items: ['a', 'b', 'c'] }, { items: ['d', 'e', 'f'] }, { items: ['g', 'h', 'i'] }];

    const result = getOverallIndex(1, 1, arrays);

    expect(result).toBe(4);
  });

  it('gets the item at a specified overall index in a nested set of arrays using getAtIndex', () => {
    const arrays = [{ items: ['a', 'b', 'c'] }, { items: ['d', 'e', 'f'] }, { items: ['g', 'h', 'i'] }];

    const result = getAtOverallIndex(5, arrays);

    expect(result).toBe('f');
  });
});
