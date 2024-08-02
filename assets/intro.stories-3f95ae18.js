import{M as l}from"./chunk-HLWAVYOI-2abb3c6f.js";import{j as r,a as n,F as s}from"./jsx-runtime-eae7a151.js";import{u as a}from"./index-f875e932.js";import"./iframe-2e6a0624.js";import"../sb-preview/runtime.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-18-d3dde439.js";import"./index-07d1f67e.js";import"./chunk-ZGA76URP-2b404cd8.js";import"./isNativeReflectConstruct-30e719dd.js";import"./index-11d98b33.js";import"./uniq-d447bef6.js";import"./_baseIsEqual-62e1ad13.js";import"./index-ec0b3b5e.js";import"./index-356e4a49.js";function i(t){const e=Object.assign({h1:"h1",p:"p",ol:"ol",li:"li",code:"code",h2:"h2",pre:"pre",em:"em",a:"a"},a(),t.components);return n(s,{children:[r(l,{title:"Introduction/Getting Started"}),`
`,r(e.h1,{id:"getting-started",children:"Getting Started"}),`
`,r(e.p,{children:"There are three steps to getting a project set up to use Armstrong:"}),`
`,n(e.ol,{children:[`
`,r(e.li,{children:"Install the package."}),`
`,r(e.li,{children:"Import the stylesheet."}),`
`,r(e.li,{children:"Render your first component."}),`
`]}),`
`,r(e.p,{children:"Optionally, you can also:"}),`
`,n(e.ol,{start:"4",children:[`
`,n(e.li,{children:["Wrap your app in the ",r(e.code,{children:"ArmstrongProvider"})," to enable global settings and toast notifications."]}),`
`,r(e.li,{children:"Override the default global variables."}),`
`]}),`
`,r(e.h2,{id:"1-install-the-package",children:"1. Install the package"}),`
`,r(e.p,{children:"Install the pacakge using your package manager of choice. For example, with npm:"}),`
`,r(e.pre,{children:r(e.code,{className:"language-bash",children:`npm install @rocketmakers/armstrong
`})}),`
`,r(e.p,{children:"pnpm:"}),`
`,r(e.pre,{children:r(e.code,{className:"language-bash",children:`pnpm add @rocketmakers/armstrong
`})}),`
`,r(e.p,{children:"or yarn:"}),`
`,r(e.pre,{children:r(e.code,{className:"language-bash",children:`yarn add @rocketmakers/armstrong
`})}),`
`,r(e.h2,{id:"2-import-the-stylesheet",children:"2. Import the stylesheet"}),`
`,n(e.p,{children:["We recommend importing the Armstrong stylesheet directly into the ",r(e.code,{children:"head"})," element of your HTML file. This gives you full control over the styling import order. Importing the Armstrong styles first will ensure that Armstrong classes can be easily overridden without the need for added speceficity. This can be done like this:"]}),`
`,r(e.pre,{children:r(e.code,{className:"language-html",children:`<link rel="stylesheet" href="/node_modules/@rocketmakers/armstrong/dist/style.css" />
`})}),`
`,r(e.p,{children:n(e.em,{children:["NOTE: When importing this way, the path to the stylesheet may vary depending on your project setup. Usually, importing from ",r(e.code,{children:"node_modules"})," like this will only work if done through a bundler. We recommend ",r(e.a,{href:"https://vitejs.dev",target:"_blank",rel:"nofollow noopener noreferrer",children:"Vite"}),"."]})}),`
`,r(e.p,{children:"Aternatively, the import can be done in your main stylesheet like this:"}),`
`,r(e.pre,{children:r(e.code,{className:"language-css",children:`@import '@rocketmakers/armstrong/css';
`})}),`
`,r(e.h2,{id:"3-render-your-first-component",children:"3. Render your first component"}),`
`,r(e.p,{children:"Now you can render your first Armstrong component. For example, a button being rendered in a TypeScript React app:"}),`
`,r(e.pre,{children:r(e.code,{className:"language-tsx",children:`import React from 'react';
import { Button } from '@rocketmakers/armstrong';

const App: React.FC = () => {
  return <Button>Click me</Button>;
};
`})}),`
`,n(e.h2,{id:"4-wrap-your-app-in-the-armstrongprovider-optional",children:["4. Wrap your app in the ",r(e.code,{children:"ArmstrongProvider"})," (optional)"]}),`
`,n(e.p,{children:["To enable global settings and toast notifications, wrap your app in the ",r(e.code,{children:"ArmstrongProvider"})," like this:"]}),`
`,r(e.pre,{children:r(e.code,{className:"language-tsx",children:`import React from 'react';
import { ArmstrongProvider, Button } from '@rocketmakers/armstrong';

const App: React.FC = () => {
  return (
    <ArmstrongProvider>
      <Button>Click me</Button>
    </ArmstrongProvider>
  );
};
`})}),`
`,n(e.p,{children:["More information on the ",r(e.code,{children:"ArmstrongProvider"})," can be found in the ",r(e.a,{href:"/docs/config-global-config--docs",children:"global config documentation"}),"."]}),`
`,r(e.h2,{id:"5-override-the-default-variables-optional",children:"5. Override the default variables (optional)"}),`
`,n(e.p,{children:["To override the default global variables, we recommend creating a new CSS/SCSS file and importing it after the Armstrong styles, then overriding variables inside a ",r(e.code,{children:":root"})," selector. For example:"]}),`
`,r(e.pre,{children:r(e.code,{className:"language-css",children:`:root {
  --arm-color-brand-primary: #2287c8;
  --arm-color-brand-secondary: #fdb53f;
  --arm-font-weight-bold: 600;
  --arm-color-grey-100: #ebebeb;
}
`})}),`
`,n(e.p,{children:["A full list of all global CSS variables can be fond in the ",r(e.a,{href:"/docs/introduction-css-variables--docs",children:"CSS variables documentation"}),"."]})]})}function c(t={}){const{wrapper:e}=Object.assign({},a(),t.components);return e?r(e,{...t,children:r(i,{...t})}):i(t)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const o={title:"Introduction/Getting Started",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:c};const N=["__page"];export{N as __namedExportsOrder,d as __page,o as default};
