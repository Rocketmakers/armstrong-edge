import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-DVgGKjXv.js";import"./index-DQiRpXr8.js";import{ae as t}from"./index-DoXlP5Lm.js";import"./index-DwQS_Y10.js";import"./iframe-CJfsGlR5.js";import"../sb-preview/runtime.js";import"./client-BKcTqz1J.js";import"./index-Bls5tne7.js";import"./index-BY2j7gpI.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function s(n){const r={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Utilities/Globals"}),`
`,e.jsx(r.h2,{id:"globals",children:"Globals"}),`
`,e.jsx(r.p,{children:"Globals wrapped up in type checks to ensure Armstrong won't break any server side rendering where using them would otherwise throw an error"}),`
`,e.jsx(r.h3,{id:"window",children:"Window"}),`
`,e.jsx(r.p,{children:"The global window object, protected if in an environment that doesn't support window"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`import { Globals } from '@rocketmakers/armstrong';

Globals.Window;
`})}),`
`,e.jsx(r.h3,{id:"document",children:"Document"}),`
`,e.jsx(r.p,{children:"The global document object, protected if in an environment that doesn't support document"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`import { Globals } from '@rocketmakers/armstrong';

Globals.Document;
`})}),`
`,e.jsx(r.h3,{id:"supportsresizeobserver",children:"supportsResizeObserver"}),`
`,e.jsx(r.p,{children:"Does the current environment support resize observer"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`import { Globals } from '@rocketmakers/armstrong';

Globals.supportsResizeObserver;
`})}),`
`,e.jsx(r.h3,{id:"supportsintersectionobserver",children:"supportsIntersectionObserver"}),`
`,e.jsx(r.p,{children:"Does the current environment support intersection observer"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`import { Globals } from '@rocketmakers/armstrong';

Globals.supportsIntersectionObserver;
`})}),`
`,e.jsx(r.h3,{id:"supportsperformanceobserver",children:"supportsPerformanceObserver"}),`
`,e.jsx(r.p,{children:"Does the current environment support Performance observer"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`import { Globals } from '@rocketmakers/armstrong';

Globals.supportsPerformanceObserver;
`})}),`
`,e.jsx(r.h3,{id:"supportsmutationobserver",children:"supportsMutationObserver"}),`
`,e.jsx(r.p,{children:"Does the current environment support mutation observer"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`import { Globals } from '@rocketmakers/armstrong';

Globals.supportsMutationObserver;
`})}),`
`,e.jsx(r.h3,{id:"isbrowser",children:"isBrowser"}),`
`,e.jsx(r.p,{children:"Based on the existence of the global window object, does it seem like this is currently in a browser environment rather than SSR"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`import { Globals } from '@rocketmakers/armstrong';

Globals.isBrowser;
`})})]})}function g(n={}){const{wrapper:r}={...o(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{g as default};
