import{M as a}from"./chunk-HLWAVYOI-6fc732ee.js";import{j as n,a as s,F as i}from"./jsx-runtime-eae7a151.js";import{u as c}from"./index-f875e932.js";import"./iframe-f7393f58.js";import"../sb-preview/runtime.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-18-d3dde439.js";import"./index-07d1f67e.js";import"./chunk-ZGA76URP-2b404cd8.js";import"./isNativeReflectConstruct-30e719dd.js";import"./index-11d98b33.js";import"./uniq-d447bef6.js";import"./_baseIsEqual-62e1ad13.js";import"./index-ec0b3b5e.js";import"./index-356e4a49.js";function r(t){const e=Object.assign({h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code"},c(),t.components);return s(i,{children:[n(a,{title:"Utilities/Objects"}),`
`,n(e.h2,{id:"objects",children:"Objects"}),`
`,n(e.p,{children:"Utils for performing non-standard operations on objects"}),`
`,n(e.h3,{id:"contentdependency",children:"contentDependency"}),`
`,n(e.p,{children:"Creates a unique string based on contents of an object."}),`
`,n(e.p,{children:"Can be used as a dependency for hooks which take non-memoized objects as a parameter."}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`function contentDependency<TObject extends object>(object?: TObject): string;
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`import { contentDependency } from '@rocketmakers/armstrong';

const thing = { a: 'hello', b: 'hiya' };

React.useEffect(() => {
  // will only rerun when the actual value of thing changes
}, [contentDependency(thing)]);
`})}),`
`,n(e.h3,{id:"mergedeep",children:"mergeDeep"}),`
`,n(e.p,{children:"Deep merges any two or more given objects."}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`function deepMerge<TObject extends object>(target: TObject, ...sources: Partial<TObject>[]): TObject;
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`import { mergeDeep } from '@rocketmakers/armstrong';

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

`})})]})}function d(t={}){const{wrapper:e}=Object.assign({},c(),t.components);return e?n(e,{...t,children:n(r,{...t})}):r(t)}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const o={title:"Utilities/Objects",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:d};const T=["__page"];export{T as __namedExportsOrder,p as __page,o as default};
