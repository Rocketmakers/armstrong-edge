import{M as i}from"./chunk-HLWAVYOI-af1601b8.js";import{j as t,a,F as c}from"./jsx-runtime-eae7a151.js";import{u as o}from"./index-f875e932.js";import"./iframe-51884d3c.js";import"../sb-preview/runtime.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-18-d3dde439.js";import"./index-07d1f67e.js";import"./chunk-ZGA76URP-2b404cd8.js";import"./isNativeReflectConstruct-30e719dd.js";import"./index-11d98b33.js";import"./extends-98964cd2.js";import"./index-ec0b3b5e.js";import"./_baseIsEqual-62e1ad13.js";import"./uniq-4dce63e4.js";import"./index-356e4a49.js";function s(r){const e=Object.assign({h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code"},o(),r.components);return a(c,{children:[t(i,{title:"Utilities/Typescript"}),`
`,t(e.h2,{id:"typescript",children:"Typescript"}),`
`,t(e.p,{children:"Utilities for Typescript"}),`
`,t(e.h3,{id:"assertnever",children:"assertNever"}),`
`,t(e.p,{children:'Makes sure an assigned variable is of type "never".'}),`
`,t(e.p,{children:"Usually used at the bottom of switches to create a compilation error if not all cases are handled."}),`
`,t(e.p,{children:"Should never actually execute will throw an error if it is."}),`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`function assertNever(shouldBeNever?: never);
`})}),`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`import { Typescript } from '@armstrong/rocketmakers';

const thing: 'a' | 'b' | 'c' = 'a';

switch (thing) {
  case 'a':
  // do some stuff
  case 'b':
  // do some stuff
  default:
    Typescript.assertNever(thing);
}

// this will cause a Typescript error, as not all possible values of thing have been covered in that switch
`})})]})}function p(r={}){const{wrapper:e}=Object.assign({},o(),r.components);return e?t(e,{...r,children:t(s,{...r})}):s(r)}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const n={title:"Utilities/Typescript",tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:p};const O=["__page"];export{O as __namedExportsOrder,l as __page,n as default};