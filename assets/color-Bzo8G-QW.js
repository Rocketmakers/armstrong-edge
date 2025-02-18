import{j as n}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as l}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-CFVVBQc_.js";import{ae as t}from"./index-CBkcRUrD.js";import"./index-Cqyox1Tj.js";import"./iframe-DzOEDjdK.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function o(r){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Utilities/Color"}),`
`,n.jsx(e.h2,{id:"color",children:"Color"}),`
`,n.jsx(e.p,{children:"Utilities for working with colors."}),`
`,n.jsx(e.p,{children:"I was forced to spell it using American English... I'm not happy about it either."}),`
`,n.jsx(e.h3,{id:"hextorgb",children:"hexToRGB"}),`
`,n.jsx(e.p,{children:"Convert a hex string to an RGB object"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function hexToRGB(hex: string): IRGBColor;
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { hexToRGB } from '@rocketmakers/armstrong';

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
`,n.jsx(e.h3,{id:"colortorgb",children:"colorToRGB"}),`
`,n.jsx(e.p,{children:"Ensure that a Color (a hex string or an RGB object) is an RGB object, converting it if not"}),`
`,n.jsx(e.p,{children:"This is useful for components which will expect either, but you only want to work with RGB"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function colorToRGB(color: Color): IRGBColor;
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { colorToRGB } from '@rocketmakers/armstrong';

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
`,n.jsx(e.h3,{id:"rgbtohex",children:"RGBToHex"}),`
`,n.jsx(e.p,{children:"Convert an RGB string to a hex colour"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function RGBToHex({ red, green, blue, alpha }: IRGBColor): string;
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { RGBToHex } from '@rocketmakers/armstrong';

const result = RGBToHex({ red: 255, green: 255, blue: 255 });

// result
('#FFFFFF');

const result = RGBToHex({ red: 255, green: 255, blue: 255, alpha: 0.01 });

// result
('#FFFFFF03');
`})}),`
`,n.jsx(e.h3,{id:"lerprgb",children:"lerpRGB"}),`
`,n.jsx(e.p,{children:"Get a colour lerped using a progress between a start and end colour"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function lerpRGB(startColor: IRGBColor, endColor: IRGBColor, /** out of 100 */ progress: number): IRGBColor;
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { lerpRGB } from '@rocketmakers/armstrong';

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
`,n.jsx(e.h3,{id:"multilerprgb",children:"multiLerpRGB"}),`
`,n.jsx(e.p,{children:"Get a colour lerped between multiple breakpoints"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function multiLerpRGB(colors: IRGBColor[], /** out of 100 */ progress: number): IRGBColor;
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { multiLerpRGB } from '@rocketmakers/armstrong';

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
`,n.jsx(e.h3,{id:"lerphex",children:"lerpHex"}),`
`,n.jsx(e.p,{children:"Get a colour lerped between a start and end colour as a hex"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function lerpHex(startColor: string, endColor: string, /** out of 100 */ progress: number): string;
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { lerpHex } from '@rocketmakers/armstrong';

const startColor = '#00FF00';
const endColor = '#FF0000';

const result = lerpHex(startColor, endColor, 50);

// result
('#7F7F00');
`})}),`
`,n.jsx(e.h3,{id:"multilerphex",children:"multiLerpHex"}),`
`,n.jsx(e.p,{children:"Get a colour lerped between multiple breakpoints as a hex"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function multiLerpHex(colors: string[], /** out of 100 */ progress: number): string;
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { multiLerpHex } from '@rocketmakers/armstrong';

const startColor = '#00FF00';
const midColor = '#FF0000';
const endColor = '#0000FF';

const result = multiLerpHex([startColor, midColor, endColor], 50);

// result
('#FF0000');
`})}),`
`,n.jsx(e.h3,{id:"colortorgbcsstring",children:"colorToRGBCSString"}),`
`,n.jsx(e.p,{children:"Turn an rgb object into a css string, i.e. rgb(100, 100, 90)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function colorToRGBCSString(color: IRGBColor);
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { colorToRGBCSString } from '@rocketmakers/armstrong';

const result = colorToRGBCSString({ red: 0, green: 100, blue: 200 });

// result
('rgb(0, 100, 200)');

const result = colorToRGBCSString({ red: 0, green: 100, blue: 200, alpha: 1 });

// result
('rgba(0, 100, 200, 1)');
`})})]})}function j(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{j as default};
