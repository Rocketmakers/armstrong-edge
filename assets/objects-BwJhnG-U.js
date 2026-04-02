import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-DVgGKjXv.js";import"./index-Ct5fPup2.js";import{ae as c}from"./index-i1D0edQM.js";import"./index-DwQS_Y10.js";import"./iframe-Bve64uyV.js";import"../sb-preview/runtime.js";import"./client-BKcTqz1J.js";import"./index-Bls5tne7.js";import"./index-BY2j7gpI.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function o(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Utilities/Objects"}),`
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

`})})]})}function b(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{b as default};
