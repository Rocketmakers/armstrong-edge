import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as c}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-DWzIWEf4.js";import{ae as r}from"./index-DLyS-qDb.js";import"./index-Cqyox1Tj.js";import"./iframe-CyAbz7l2.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function o(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Utilities/Objects"}),`
`,e.jsx(n.h2,{id:"objects",children:"Objects"}),`
`,e.jsx(n.p,{children:"Utils for performing non-standard operations on objects"}),`
`,e.jsx(n.h3,{id:"contentdependency",children:"contentDependency"}),`
`,e.jsx(n.p,{children:"Creates a unique string based on contents of an object."}),`
`,e.jsx(n.p,{children:"Can be used as a dependency for hooks which take non-memoized objects as a parameter."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function contentDependency<TObject extends object>(object?: TObject): string;
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { contentDependency } from '@rocketmakers/armstrong';

const thing = { a: 'hello', b: 'hiya' };

React.useEffect(() => {
  // will only rerun when the actual value of thing changes
}, [contentDependency(thing)]);
`})}),`
`,e.jsx(n.h3,{id:"mergedeep",children:"mergeDeep"}),`
`,e.jsx(n.p,{children:"Deep merges any two or more given objects."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function deepMerge<TObject extends object>(target: TObject, ...sources: Partial<TObject>[]): TObject;
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { mergeDeep } from '@rocketmakers/armstrong';

const thing1 = { a: 'hello', b: 'hiya' };
const thing2 = { a: 'goodbye', c: { d: 'hola' } };
const thing3 = { a: 'adios', c: { d: 'ciao' } };

result = mergeDeep(thing1, thing2, thing3);

// result
{
  a: 'adios',
  b: 'hiya',
  c: {
    d: 'ciao'
  }
}

`})})]})}function u(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{u as default};
