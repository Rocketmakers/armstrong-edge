import{j as o}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as i}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-BKWULR57.js";import{ae as t,af as s}from"./index-DfX79vBM.js";import{A as a}from"./config.context-DSGy4VcJ.js";import"./index-Cqyox1Tj.js";import"./iframe-CZfdSljF.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function e(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(t,{title:"Config/Global Config"}),`
`,o.jsx(n.h1,{id:"global-config",children:"Global Config"}),`
`,o.jsx(n.p,{children:"Certain settings in Armstrong can be configured globally by sending values to a provider which wraps your app."}),`
`,o.jsx(n.p,{children:"This allows you to avoid sending the same config props into the same components over and over again."}),`
`,o.jsx(n.h2,{id:"how-to-use-global-config-in-your-app",children:"How to use global config in your app"}),`
`,o.jsx(n.h3,{id:"step-1---wrap-your-app-in-the-provider",children:"Step 1 - Wrap your app in the provider"}),`
`,o.jsx(n.p,{children:"In order for global config to work, you must first wrap your app in the unified armstrong provider and pass in your config, like so:"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`import { ArmstrongProvider, IArmstrongConfig } from '@rocketmakers/armstrong';

const armstrongConfig: IArmstrongConfig = {
  validationMode: 'both',
};

export const MyApp: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ArmstrongProvider config={armstrongConfig}>{children}</ArmstrongProvider>;
};
`})}),`
`,o.jsxs(n.p,{children:["NOTE: The unified provider supports toast messages as well as allow you to pass global Armstrong config. If you specifically only want the toast messages, you can use ",o.jsx(n.code,{children:"<ConfigProvider>"})," instead but this is not recommended."]}),`
`,o.jsx(n.h3,{id:"config-options",children:"Config options"}),`
`,o.jsx(s,{of:a})]})}function C(r={}){const{wrapper:n}={...i(),...r.components};return n?o.jsx(n,{...r,children:o.jsx(e,{...r})}):e(r)}export{C as default};
