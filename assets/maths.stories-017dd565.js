import{M as m}from"./chunk-PCJTTTQV-bb8ede3f.js";import{a as n,j as o,F as s}from"./jsx-runtime-63e4a166.js";import{u as i}from"./index-f875e932.js";import"./iframe-c29f680e.js";import"../sb-preview/runtime.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d3777853.js";import"./index-07d1f67e.js";import"./_baseIsEqual-62e1ad13.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./isNativeReflectConstruct-30e719dd.js";import"./index-d37d4223.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";function a(r){const e=Object.assign({h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code",a:"a"},i(),r.components);return o(s,{children:[n(m,{title:"Utilities/Maths"}),`
`,n(e.h2,{id:"maths",children:"Maths"}),`
`,n(e.p,{children:"Utils for performing mathematical operations that aren't in the standard JS Math"}),`
`,n(e.h3,{id:"clamp",children:"clamp"}),`
`,n(e.p,{children:"Get a number, clamped to a maximum and minimum"}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`function clamp(input: number, minimum: number, maximum: number): number;
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`import { clamp } from '@rocketmakers/armstrong';

clamp(200, 0, 50);
// 50

clamp(-20, 0, 50);
// 0

clamp(30, 0, 50);
// 30
`})}),`
`,n(e.h3,{id:"positivemodulo",children:"positiveModulo"}),`
`,n(e.p,{children:"Perform a modulo operation that ensures that the output is always positive - javascript modulos behave unusually with negative numbers"}),`
`,o(e.p,{children:["see: ",n(e.a,{href:"https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm",target:"_blank",rel:"nofollow noopener noreferrer",children:"this blog"})]}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`function positiveModulo(numerator: number, denominator: number): number;
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`import { positiveModulo } from '@rocketmakers/armstrong';

positiveModulo(-2, 10);
// 8

positiveModulo(16, 10);
// 6

positiveModulo(-13, 10);
// 7
`})}),`
`,n(e.h3,{id:"getpercent",children:"getPercent"}),`
`,n(e.p,{children:"Get a value as a percent of another value"}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`function getPercent(value: number, total: number);
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`import { getPercent } from '@rocketmakers/armstrong';

getPercent(40, 200);
// 20
`})}),`
`,n(e.h3,{id:"lerp",children:"lerp"}),`
`,n(e.p,{children:"lerp between two numbers based on a progress"}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`function lerp(start: number, end: number, /** out of 100 */ progress: number): number;
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`import { lerp } from '@rocketmakers/armstrong';

lerp(0, 500, 50);
// 250

lerp(0, 2, 25);
// 0.5
`})}),`
`,n(e.h3,{id:"multilerp",children:"multilerp"}),`
`,n(e.p,{children:"lerp between multiple numbers, assuming a smooth transition with equally spaced breakpoints"}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`function multiLerp(breakpoints: number[], progress: number): number;
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`import { multiLerp } from '@rocketmakers/armstrong';

multiLerp([0, 20, 10], 25);
// 10

multiLerp([0, 20, 10], 50);
// 20

multiLerp([0, 20, 10], 75);
// 15
`})})]})}function l(r={}){const{wrapper:e}=Object.assign({},i(),r.components);return e?n(e,{...r,children:n(a,{...r})}):a(r)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const t={title:"Utilities/Maths",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:l};const L=["__page"];export{L as __namedExportsOrder,c as __page,t as default};
//# sourceMappingURL=maths.stories-017dd565.js.map
