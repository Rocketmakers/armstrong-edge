import{M as o}from"./chunk-HLWAVYOI-ce9306b9.js";import{j as e,a,F as c}from"./jsx-runtime-eae7a151.js";import{u as s}from"./index-f875e932.js";import"./iframe-80a9d828.js";import"../sb-preview/runtime.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-18-d3dde439.js";import"./index-07d1f67e.js";import"./chunk-ZGA76URP-2b404cd8.js";import"./isNativeReflectConstruct-30e719dd.js";import"./index-11d98b33.js";import"./extends-98964cd2.js";import"./index-ec0b3b5e.js";import"./_baseIsEqual-62e1ad13.js";import"./uniq-4dce63e4.js";import"./index-356e4a49.js";function i(r){const n=Object.assign({h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code"},s(),r.components);return a(c,{children:[e(o,{title:"Utilities/Arrays"}),`
`,e(n.h2,{id:"arrays",children:"Arrays"}),`
`,e(n.p,{children:"Utilities for working with Arrays"}),`
`,e(n.h3,{id:"flatten",children:"flatten"}),`
`,e(n.p,{children:"Convert an array of arrays into a single array"}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`function flatten<T>(...arrays: (T[] | undefined)[]);
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`import { flatten } from '@rocketmakers/armstrong';

const array1 = ['a', 'b'];
const array2 = ['c', 'd'];

const result = flatten(array1, array2);

// result
['a', 'b', 'c', 'd'];
`})}),`
`,e(n.h3,{id:"arraytodictionary",children:"arrayToDictionary"}),`
`,e(n.p,{children:"Turn an array into a dictionary of items in that array by a given key"}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`function arrayToDictionary<T, Keys extends string = string>(array: T[], getKey: keyof T | ((item: T) => Keys));
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`import { arrayToDictionary } from '@rocketmakers/armstrong';

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
`,e(n.h3,{id:"arraytoarraydictionary",children:"arrayToArrayDictionary"}),`
`,e(n.p,{children:"Sort an array into a dictionary of arrays keyed by a value to sort on"}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`function arrayToArrayDictionary<T, Keys extends string = string>(
  array: T[],
  getKey: (item: T) => Keys
): ArrayDictionary<T, Keys>;
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`import { arrayToArrayDictionary } from '@rocketmakers/armstrong';

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
`,e(n.h3,{id:"arraytoarraysbykey",children:"arrayToArraysByKey"}),`
`,e(n.p,{children:"Sort an array into an array of objects with a key and an array of items on it"}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`function arrayToArraysByKey<T, Keys extends string = string>(array: T[], getKey: (item: T) => Keys);
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`import { arrayToArraysByKey } from '@rocketmakers/armstrong';

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
`,e(n.h3,{id:"findlastindex",children:"findLastIndex"}),`
`,e(n.p,{children:"A variant of findIndex that returns the index of the last item in the array where the callback returns true"}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`function findLastIndex<T>(array: T[], callback: (item: T) => boolean);
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`import { findLastIndex } from '@rocketmakers/armstrong';

const array = ['a', 'a', 'b'];

const result = findLastIndex(item => item === 'a');

// result
1;
`})}),`
`,e(n.h3,{id:"reindex",children:"reIndex"}),`
`,e(n.p,{children:"Re-indexes an array from a specific index point."}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`function reIndex<T>(array: T[], startFrom: number): T[];
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`import { reIndex } from '@rocketmakers/armstrong';

const array = ['a', 'b', 'c'];

const result = reIndex(array, 1);

// result
['b', 'c', 'a'];
`})}),`
`,e(n.h3,{id:"repeat",children:"repeat"}),`
`,a(n.p,{children:["A version of ",e(n.code,{children:"map"})," which loops a specified number of times and returns the index as the map arg."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`function repeat<TMapped>(count: number, mapper: (index: number) => TMapped): TMapped[];
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`import { repeat } from '@rocketmakers/armstrong';

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
`,e(n.h2,{id:"nestedarrays",children:"NestedArrays"}),`
`,e(n.p,{children:"Utils for working with arrays of arrays - useful when an array has been split into groups but you want to interact with it as if it's still a single array, I.E using a single overall index"}),`
`,e(n.h3,{id:"getarrayindex",children:"getArrayIndex"}),`
`,e(n.p,{children:"Get the overall index of an item inside an array of arrays"}),`
`,a(n.p,{children:["I.E. ",e(n.code,{children:"[[0,1,2], [3,4], [5,6,7]]"})]}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`function getArrayIndex<T>(innerIndex: number, outerIndex: number, arrays: { items: T[] }[]);
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`import { getArrayIndex } from '@rocketmakers/armstrong';

const nestedArrays = [{ items: ['a', 'b', 'c'] }, { items: ['d', 'e', 'f'] }, { items: ['g', 'h', 'i'] }];

const result = getArrayIndex(1, 1, nestedArrays);

// result
4;
`})}),`
`,e(n.h3,{id:"getatindex",children:"getAtIndex"}),`
`,e(n.p,{children:"Get the item inside an array of arrays at an overall index"}),`
`,a(n.p,{children:["I.E. ",e(n.code,{children:"[[0,1,2], [3,4], [5,6,7]]"})]}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`function getAtOverallIndex<T>(index: number, arrays: { items: T[] }[]);
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`import { getAtOverallIndex } from '@rocketmakers/armstrong';

const nestedArrays = [{ items: ['a', 'b', 'c'] }, { items: ['d', 'e', 'f'] }, { items: ['g', 'h', 'i'] }];

const result = getAtOverallIndex(5, nestedArrays);

// result
f;
`})})]})}function d(r={}){const{wrapper:n}=Object.assign({},s(),r.components);return n?e(n,{...r,children:e(i,{...r})}):i(r)}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const t={title:"Utilities/Arrays",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:d};const v=["__page"];export{v as __namedExportsOrder,l as __page,t as default};
