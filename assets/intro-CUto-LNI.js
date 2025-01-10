import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as o}from"./index-BLKynSmM.js";import{ae as s}from"./index-DfX79vBM.js";import"./index-Cqyox1Tj.js";import"./iframe-CZfdSljF.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function t(r){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Introduction/Getting Started"}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.p,{children:"There are three steps to getting a project set up to use Armstrong:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Install the package."}),`
`,e.jsx(n.li,{children:"Import the stylesheet."}),`
`,e.jsx(n.li,{children:"Render your first component."}),`
`]}),`
`,e.jsx(n.p,{children:"Optionally, you can also:"}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsxs(n.li,{children:["Wrap your app in the ",e.jsx(n.code,{children:"ArmstrongProvider"})," to enable global settings and toast notifications."]}),`
`,e.jsx(n.li,{children:"Override the default global variables."}),`
`]}),`
`,e.jsx(n.h2,{id:"1-install-the-package",children:"1. Install the package"}),`
`,e.jsx(n.p,{children:"Install the pacakge using your package manager of choice. For example, with npm:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @rocketmakers/armstrong
`})}),`
`,e.jsx(n.p,{children:"pnpm:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm add @rocketmakers/armstrong
`})}),`
`,e.jsx(n.p,{children:"or yarn:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add @rocketmakers/armstrong
`})}),`
`,e.jsx(n.h2,{id:"2-import-the-stylesheet",children:"2. Import the stylesheet"}),`
`,e.jsxs(n.p,{children:["We recommend importing the Armstrong stylesheet directly into the ",e.jsx(n.code,{children:"head"})," element of your HTML file. This gives you full control over the styling import order. Importing the Armstrong styles first will ensure that Armstrong classes can be easily overridden without the need for added speceficity. This can be done like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="stylesheet" href="/node_modules/@rocketmakers/armstrong/dist/style.css" />
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["NOTE: When importing this way, the path to the stylesheet may vary depending on your project setup. Usually, importing from ",e.jsx(n.code,{children:"node_modules"})," like this will only work if done through a bundler. We recommend ",e.jsx(n.a,{href:"https://vitejs.dev",rel:"nofollow",children:"Vite"}),"."]})}),`
`,e.jsx(n.p,{children:"Aternatively, the import can be done in your main stylesheet like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import '@rocketmakers/armstrong/css';
`})}),`
`,e.jsx(n.h2,{id:"3-render-your-first-component",children:"3. Render your first component"}),`
`,e.jsx(n.p,{children:"Now you can render your first Armstrong component. For example, a button being rendered in a TypeScript React app:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';
import { Button } from '@rocketmakers/armstrong';

const App: React.FC = () => {
  return <Button>Click me</Button>;
};
`})}),`
`,e.jsxs(n.h2,{id:"4-wrap-your-app-in-the-armstrongprovider-optional",children:["4. Wrap your app in the ",e.jsx(n.code,{children:"ArmstrongProvider"})," (optional)"]}),`
`,e.jsxs(n.p,{children:["To enable global settings and toast notifications, wrap your app in the ",e.jsx(n.code,{children:"ArmstrongProvider"})," like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';
import { ArmstrongProvider, Button } from '@rocketmakers/armstrong';

const App: React.FC = () => {
  return (
    <ArmstrongProvider>
      <Button>Click me</Button>
    </ArmstrongProvider>
  );
};
`})}),`
`,e.jsxs(n.p,{children:["More information on the ",e.jsx(n.code,{children:"ArmstrongProvider"})," can be found in the ",e.jsx(n.a,{href:"/docs/config-global-config--docs",children:"global config documentation"}),"."]}),`
`,e.jsx(n.h2,{id:"5-override-the-default-variables-optional",children:"5. Override the default variables (optional)"}),`
`,e.jsxs(n.p,{children:["To override the default global variables, we recommend creating a new CSS/SCSS file and importing it after the Armstrong styles, then overriding variables inside a ",e.jsx(n.code,{children:":root"})," selector. For example:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  --arm-color-brand-primary: #2287c8;
  --arm-color-brand-secondary: #fdb53f;
  --arm-font-weight-bold: 600;
  --arm-color-grey-100: #ebebeb;
}
`})}),`
`,e.jsxs(n.p,{children:["A full list of all global CSS variables can be fond in the ",e.jsx(n.a,{href:"/docs/introduction-css-variables--docs",children:"CSS variables documentation"}),"."]})]})}function j(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{j as default};
