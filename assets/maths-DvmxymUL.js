import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as s}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-Vy8PU5sQ.js";import{ae as o}from"./index-BFIN5hd9.js";import"./index-Cqyox1Tj.js";import"./iframe-BCcO5PlK.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function t(r){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Utilities/Maths"}),`
`,e.jsx(n.h2,{id:"maths",children:"Maths"}),`
`,e.jsx(n.p,{children:"Utils for performing mathematical operations that aren't in the standard JS Math"}),`
`,e.jsx(n.h3,{id:"clamp",children:"clamp"}),`
`,e.jsx(n.p,{children:"Get a number, clamped to a maximum and minimum"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function clamp(input: number, minimum: number, maximum: number): number;
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { clamp } from '@rocketmakers/armstrong';

clamp(200, 0, 50);
// 50

clamp(-20, 0, 50);
// 0

clamp(30, 0, 50);
// 30
`})}),`
`,e.jsx(n.h3,{id:"positivemodulo",children:"positiveModulo"}),`
`,e.jsx(n.p,{children:"Perform a modulo operation that ensures that the output is always positive - javascript modulos behave unusually with negative numbers"}),`
`,e.jsxs(n.p,{children:["see: ",e.jsx(n.a,{href:"https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm",rel:"nofollow",children:"this blog"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function positiveModulo(numerator: number, denominator: number): number;
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { positiveModulo } from '@rocketmakers/armstrong';

positiveModulo(-2, 10);
// 8

positiveModulo(16, 10);
// 6

positiveModulo(-13, 10);
// 7
`})}),`
`,e.jsx(n.h3,{id:"getpercent",children:"getPercent"}),`
`,e.jsx(n.p,{children:"Get a value as a percent of another value"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function getPercent(value: number, total: number);
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { getPercent } from '@rocketmakers/armstrong';

getPercent(40, 200);
// 20
`})}),`
`,e.jsx(n.h3,{id:"lerp",children:"lerp"}),`
`,e.jsx(n.p,{children:"lerp between two numbers based on a progress"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function lerp(start: number, end: number, /** out of 100 */ progress: number): number;
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { lerp } from '@rocketmakers/armstrong';

lerp(0, 500, 50);
// 250

lerp(0, 2, 25);
// 0.5
`})}),`
`,e.jsx(n.h3,{id:"multilerp",children:"multilerp"}),`
`,e.jsx(n.p,{children:"lerp between multiple numbers, assuming a smooth transition with equally spaced breakpoints"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`function multiLerp(breakpoints: number[], progress: number): number;
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { multiLerp } from '@rocketmakers/armstrong';

multiLerp([0, 20, 10], 25);
// 10

multiLerp([0, 20, 10], 50);
// 20

multiLerp([0, 20, 10], 75);
// 15
`})})]})}function g(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{g as default};
