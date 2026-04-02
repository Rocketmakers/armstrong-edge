import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DVgGKjXv.js";import"./index-Ct5fPup2.js";import{ae as i}from"./index-i1D0edQM.js";import"./index-DwQS_Y10.js";import"./iframe-Bve64uyV.js";import"../sb-preview/runtime.js";import"./client-BKcTqz1J.js";import"./index-Bls5tne7.js";import"./index-BY2j7gpI.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function r(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Utilities/Typescript"}),`
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
`})})]})}function v(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{v as default};
