import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as s}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-78w6-vGf.js";import{ae as i}from"./index-B02bvak2.js";import"./index-Cqyox1Tj.js";import"./iframe-hqaqfwCY.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function r(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Utilities/Typescript"}),`
`,e.jsx(t.h2,{id:"typescript",children:"Typescript"}),`
`,e.jsx(t.p,{children:"Utilities for Typescript"}),`
`,e.jsx(t.h3,{id:"assertnever",children:"assertNever"}),`
`,e.jsx(t.p,{children:'Makes sure an assigned variable is of type "never".'}),`
`,e.jsx(t.p,{children:"Usually used at the bottom of switches to create a compilation error if not all cases are handled."}),`
`,e.jsx(t.p,{children:"Should never actually execute will throw an error if it is."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`function assertNever(shouldBeNever?: never);
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`import { Typescript } from '@armstrong/rocketmakers';

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
`})})]})}function j(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{j as default};
