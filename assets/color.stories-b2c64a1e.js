import{M as s}from"./chunk-HLWAVYOI-af1601b8.js";import{j as n,a as c,F as i}from"./jsx-runtime-eae7a151.js";import{u as l}from"./index-f875e932.js";import"./iframe-51884d3c.js";import"../sb-preview/runtime.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-18-d3dde439.js";import"./index-07d1f67e.js";import"./chunk-ZGA76URP-2b404cd8.js";import"./isNativeReflectConstruct-30e719dd.js";import"./index-11d98b33.js";import"./extends-98964cd2.js";import"./index-ec0b3b5e.js";import"./_baseIsEqual-62e1ad13.js";import"./uniq-4dce63e4.js";import"./index-356e4a49.js";function t(r){const e=Object.assign({h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code"},l(),r.components);return c(i,{children:[n(s,{title:"Utilities/Color"}),`
`,n(e.h2,{id:"color",children:"Color"}),`
`,n(e.p,{children:"Utilities for working with colors."}),`
`,n(e.p,{children:"I was forced to spell it using American English... I'm not happy about it either."}),`
`,n(e.h3,{id:"hextorgb",children:"hexToRGB"}),`
`,n(e.p,{children:"Convert a hex string to an RGB object"}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`function hexToRGB(hex: string): IRGBColor;
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`import { hexToRGB } from '@rocketmakers/armstrong';

const result = hexToRGB("#FFFFFF");

// result
{
    red: 255,
    blue: 255,
    green: 255
}

const result = hexToRGB("#FFFFFF00");

// result
{
    red: 255,
    blue: 255,
    green: 255,
    alpha: 0
}
`})}),`
`,n(e.h3,{id:"colortorgb",children:"colorToRGB"}),`
`,n(e.p,{children:"Ensure that a Color (a hex string or an RGB object) is an RGB object, converting it if not"}),`
`,n(e.p,{children:"This is useful for components which will expect either, but you only want to work with RGB"}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`function colorToRGB(color: Color): IRGBColor;
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`import { colorToRGB } from '@rocketmakers/armstrong';

const result = colorToRGB("#FFFFFF");

// result
{
    red: 255,
    blue: 255,
    green: 255
}

const result = colorToRGB({ red: 0, green: 0, blue: 0 });

// result
{
    red: 0,
    blue: 0,
    green: 0
}
`})}),`
`,n(e.h3,{id:"rgbtohex",children:"RGBToHex"}),`
`,n(e.p,{children:"Convert an RGB string to a hex colour"}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`function RGBToHex({ red, green, blue, alpha }: IRGBColor): string;
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`import { RGBToHex } from '@rocketmakers/armstrong';

const result = RGBToHex({ red: 255, green: 255, blue: 255 });

// result
('#FFFFFF');

const result = RGBToHex({ red: 255, green: 255, blue: 255, alpha: 0.01 });

// result
('#FFFFFF03');
`})}),`
`,n(e.h3,{id:"lerprgb",children:"lerpRGB"}),`
`,n(e.p,{children:"Get a colour lerped using a progress between a start and end colour"}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`function lerpRGB(startColor: IRGBColor, endColor: IRGBColor, /** out of 100 */ progress: number): IRGBColor;
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`import { lerpRGB } from '@rocketmakers/armstrong';

const startColor = { red: 0, green: 255, blue: 0 };
const endColor = { red: 255, green: 0, blue: 0 };

const result = lerpRGB(startColor, endColor, 50)

// result
{
    red: 127,
    green: 128,
    blue: 0
}
`})}),`
`,n(e.h3,{id:"multilerprgb",children:"multiLerpRGB"}),`
`,n(e.p,{children:"Get a colour lerped between multiple breakpoints"}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`function multiLerpRGB(colors: IRGBColor[], /** out of 100 */ progress: number): IRGBColor;
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`import { multiLerpRGB } from '@rocketmakers/armstrong';

const startColor = { red: 0, green: 255, blue: 0 };
const midColor = { red: 255, green: 0, blue: 0 };
const endColor = { red: 0, green: 0, blue: 255 };

const result = multiLerpRGB([startColor, midColor, endColor], 25)

// result
{
    red: 127,
    green: 127,
    blue: 0
}

const result = multiLerpRGB([startColor, midColor, endColor], 50)

// result
{
    red: 255,
    green: 0,
    blue: 0
}
`})}),`
`,n(e.h3,{id:"lerphex",children:"lerpHex"}),`
`,n(e.p,{children:"Get a colour lerped between a start and end colour as a hex"}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`function lerpHex(startColor: string, endColor: string, /** out of 100 */ progress: number): string;
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`import { lerpHex } from '@rocketmakers/armstrong';

const startColor = '#00FF00';
const endColor = '#FF0000';

const result = lerpHex(startColor, endColor, 50);

// result
('#7F7F00');
`})}),`
`,n(e.h3,{id:"multilerphex",children:"multiLerpHex"}),`
`,n(e.p,{children:"Get a colour lerped between multiple breakpoints as a hex"}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`function multiLerpHex(colors: string[], /** out of 100 */ progress: number): string;
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`import { multiLerpHex } from '@rocketmakers/armstrong';

const startColor = '#00FF00';
const midColor = '#FF0000';
const endColor = '#0000FF';

const result = multiLerpHex([startColor, midColor, endColor], 50);

// result
('#FF0000');
`})}),`
`,n(e.h3,{id:"colortorgbcsstring",children:"colorToRGBCSString"}),`
`,n(e.p,{children:"Turn an rgb object into a css string, i.e. rgb(100, 100, 90)"}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`function colorToRGBCSString(color: IRGBColor);
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`import { colorToRGBCSString } from '@rocketmakers/armstrong';

const result = colorToRGBCSString({ red: 0, green: 100, blue: 200 });

// result
('rgb(0, 100, 200)');

const result = colorToRGBCSString({ red: 0, green: 100, blue: 200, alpha: 1 });

// result
('rgba(0, 100, 200, 1)');
`})})]})}function a(r={}){const{wrapper:e}=Object.assign({},l(),r.components);return e?n(e,{...r,children:n(t,{...r})}):t(r)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const o={title:"Utilities/Color",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:a};const H=["__page"];export{H as __namedExportsOrder,d as __page,o as default};