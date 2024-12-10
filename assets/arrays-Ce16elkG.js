import{j as n}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as t}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-DjqMFccx.js";import{ae as s}from"./index-8vyZmWkP.js";import"./index-Cqyox1Tj.js";import"./iframe-BCqOYUrW.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function a(r){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Utilities/Arrays"}),`
`,n.jsx(e.h2,{id:"arrays",children:"Arrays"}),`
`,n.jsx(e.p,{children:"Utilities for working with Arrays"}),`
`,n.jsx(e.h3,{id:"flatten",children:"flatten"}),`
`,n.jsx(e.p,{children:"Convert an array of arrays into a single array"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function flatten<T>(...arrays: (T[] | undefined)[]);
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { flatten } from '@rocketmakers/armstrong';

const array1 = ['a', 'b'];
const array2 = ['c', 'd'];

const result = flatten(array1, array2);

// result
['a', 'b', 'c', 'd'];
`})}),`
`,n.jsx(e.h3,{id:"arraytodictionary",children:"arrayToDictionary"}),`
`,n.jsx(e.p,{children:"Turn an array into a dictionary of items in that array by a given key"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function arrayToDictionary<T, Keys extends string = string>(array: T[], getKey: keyof T | ((item: T) => Keys));
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { arrayToDictionary } from '@rocketmakers/armstrong';

const things = [
  { id: 'a', name: 'thing' },
  { id: 'b', name: 'otherThing' },
];

const result = arrayToDictionary(things, 'id');

// result
{
    a: { id: 'a', name: 'thing' },
    b: { id: 'b', name: 'otherThing' }
}
`})}),`
`,n.jsx(e.h3,{id:"arraytoarraydictionary",children:"arrayToArrayDictionary"}),`
`,n.jsx(e.p,{children:"Sort an array into a dictionary of arrays keyed by a value to sort on"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function arrayToArrayDictionary<T, Keys extends string = string>(
  array: T[],
  getKey: (item: T) => Keys
): ArrayDictionary<T, Keys>;
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { arrayToArrayDictionary } from '@rocketmakers/armstrong';

const things = [
  { type: 'plant', name: 'rose' },
  { type: 'plant', name: 'tree' },
  { type: 'animal', name: 'cat' },
];

const result = arrayToArrayDictionary(things, item => item.type);

// result
{
  plant: [
    { type: 'plant', name: 'rose' },
    { type: 'plant', name: 'tree' },
  ];
  animal: [{ type: 'animal', name: 'cat' }];
}
`})}),`
`,n.jsx(e.h3,{id:"arraytoarraysbykey",children:"arrayToArraysByKey"}),`
`,n.jsx(e.p,{children:"Sort an array into an array of objects with a key and an array of items on it"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function arrayToArraysByKey<T, Keys extends string = string>(array: T[], getKey: (item: T) => Keys);
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { arrayToArraysByKey } from '@rocketmakers/armstrong';

const things = [
  { type: 'plant', name: 'rose' },
  { type: 'plant', name: 'tree' },
  { type: 'animal', name: 'cat' },
];

const result = arrayToArraysByKey(things, item => item.type);

// result
[
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
];
`})}),`
`,n.jsx(e.h3,{id:"findlastindex",children:"findLastIndex"}),`
`,n.jsx(e.p,{children:"A variant of findIndex that returns the index of the last item in the array where the callback returns true"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function findLastIndex<T>(array: T[], callback: (item: T) => boolean);
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { findLastIndex } from '@rocketmakers/armstrong';

const array = ['a', 'a', 'b'];

const result = findLastIndex(item => item === 'a');

// result
1;
`})}),`
`,n.jsx(e.h3,{id:"reindex",children:"reIndex"}),`
`,n.jsx(e.p,{children:"Re-indexes an array from a specific index point."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function reIndex<T>(array: T[], startFrom: number): T[];
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { reIndex } from '@rocketmakers/armstrong';

const array = ['a', 'b', 'c'];

const result = reIndex(array, 1);

// result
['b', 'c', 'a'];
`})}),`
`,n.jsx(e.h3,{id:"repeat",children:"repeat"}),`
`,n.jsxs(e.p,{children:["A version of ",n.jsx(e.code,{children:"map"})," which loops a specified number of times and returns the index as the map arg."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function repeat<TMapped>(count: number, mapper: (index: number) => TMapped): TMapped[];
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { repeat } from '@rocketmakers/armstrong';

repeat(5, index => console.log(index));

// console
0;
1;
2;
3;
4;

const result = repeat(5, index => index * 2);

// result
[0, 2, 4, 6, 8];
`})}),`
`,n.jsx(e.h2,{id:"nestedarrays",children:"NestedArrays"}),`
`,n.jsx(e.p,{children:"Utils for working with arrays of arrays - useful when an array has been split into groups but you want to interact with it as if it's still a single array, I.E using a single overall index"}),`
`,n.jsx(e.h3,{id:"getarrayindex",children:"getArrayIndex"}),`
`,n.jsx(e.p,{children:"Get the overall index of an item inside an array of arrays"}),`
`,n.jsxs(e.p,{children:["I.E. ",n.jsx(e.code,{children:"[[0,1,2], [3,4], [5,6,7]]"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function getArrayIndex<T>(innerIndex: number, outerIndex: number, arrays: { items: T[] }[]);
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { getArrayIndex } from '@rocketmakers/armstrong';

const nestedArrays = [{ items: ['a', 'b', 'c'] }, { items: ['d', 'e', 'f'] }, { items: ['g', 'h', 'i'] }];

const result = getArrayIndex(1, 1, nestedArrays);

// result
4;
`})}),`
`,n.jsx(e.h3,{id:"getatindex",children:"getAtIndex"}),`
`,n.jsx(e.p,{children:"Get the item inside an array of arrays at an overall index"}),`
`,n.jsxs(e.p,{children:["I.E. ",n.jsx(e.code,{children:"[[0,1,2], [3,4], [5,6,7]]"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function getAtOverallIndex<T>(index: number, arrays: { items: T[] }[]);
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { getAtOverallIndex } from '@rocketmakers/armstrong';

const nestedArrays = [{ items: ['a', 'b', 'c'] }, { items: ['d', 'e', 'f'] }, { items: ['g', 'h', 'i'] }];

const result = getAtOverallIndex(5, nestedArrays);

// result
f;
`})})]})}function u(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(a,{...r})}):a(r)}export{u as default};
