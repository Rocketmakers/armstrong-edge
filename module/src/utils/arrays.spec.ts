import { Arrays } from './arrays';

describe('Array utils', () => {
  it('flatten - Convert an array of arrays into a single array', () => {
    const array1 = ['a', 'b'];
    const array2 = ['c', 'd'];

    const result = Arrays.flatten(array1, array2);

    expect(result).toEqual(['a', 'b', 'c', 'd']);
  });

  it('arrayToDictionary - Turn an array into a dictionary of items in that array by a given key', () => {
    const things = [
      { id: 'a', name: 'thing' },
      { id: 'b', name: 'otherThing' },
    ];

    const result = Arrays.arrayToDictionary(things, 'id');

    expect(result).toEqual({
      a: { id: 'a', name: 'thing' },
      b: { id: 'b', name: 'otherThing' },
    });
  });

  it('arrayToArrayDictionary - Sort an array into a dictionary of arrays keyed by a value to sort on', () => {
    const things = [
      { type: 'plant', name: 'rose' },
      { type: 'plant', name: 'tree' },
      { type: 'animal', name: 'cat' },
    ];

    const result = Arrays.arrayToArrayDictionary(things, (item) => item.type);

    expect(result).toEqual({
      plant: [
        { type: 'plant', name: 'rose' },
        { type: 'plant', name: 'tree' },
      ],
      animal: [{ type: 'animal', name: 'cat' }],
    });
  });

  it('arrayToArraysByKey - converts an array of objects to a set of nested arrays', () => {
    const things = [
      { type: 'plant', name: 'rose' },
      { type: 'plant', name: 'tree' },
      { type: 'animal', name: 'cat' },
    ];

    const result = Arrays.arrayToArraysByKey(things, (item) => item.type);

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

  it('findLastIndex - Returns the index of the last item in the array where the callback returns true', () => {
    const array = ['a', 'a', 'b'];

    const result = Arrays.findLastIndex(array, (item) => item === 'a');

    expect(result).toEqual(1);
  });

  it('reIndex - Re-indexes an array from a specific index point', () => {
    const array = ['a', 'b', 'c'];

    const result = Arrays.reIndex(array, 1);

    expect(result).toEqual(['b', 'c', 'a']);
  });

  it('repeat - maps the result of an index function the specified number of times', () => {
    const result = Arrays.repeat(5, (index) => index * 2);

    // result
    expect(result).toEqual([0, 2, 4, 6, 8]);
  });
});

describe('Nested array utils', () => {
  it('getArrayIndex - find an overall index for an item in a nested set of array objects', () => {
    const arrays = [{ items: ['a', 'b', 'c'] }, { items: ['d', 'e', 'f'] }, { items: ['g', 'h', 'i'] }];

    const result = Arrays.NestedArrays.getOverallIndex(1, 1, arrays);

    expect(result).toEqual(4);
  });

  it('getAtIndex - get the item at a specified overall index in a nested set of arrays', () => {
    const arrays = [{ items: ['a', 'b', 'c'] }, { items: ['d', 'e', 'f'] }, { items: ['g', 'h', 'i'] }];

    const result = Arrays.NestedArrays.getAtOverallIndex(5, arrays);

    expect(result).toEqual('f');
  });
});
