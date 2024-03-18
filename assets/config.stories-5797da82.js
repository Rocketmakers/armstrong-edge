import{M as a,A as p}from"./chunk-HLWAVYOI-af1601b8.js";import{A as c}from"./config.context-ae8741c8.js";import{j as r,a as t,F as m}from"./jsx-runtime-eae7a151.js";import{u as s}from"./index-f875e932.js";import"./iframe-51884d3c.js";import"../sb-preview/runtime.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-18-d3dde439.js";import"./index-07d1f67e.js";import"./chunk-ZGA76URP-2b404cd8.js";import"./isNativeReflectConstruct-30e719dd.js";import"./index-11d98b33.js";import"./extends-98964cd2.js";import"./index-ec0b3b5e.js";import"./_baseIsEqual-62e1ad13.js";import"./uniq-4dce63e4.js";import"./index-356e4a49.js";function i(n){const o=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},s(),n.components);return t(m,{children:[r(a,{title:"Config/Global Config"}),`
`,r(o.h1,{id:"global-config",children:"Global Config"}),`
`,r(o.p,{children:"Certain settings in Armstrong can be configured globally by sending values to a provider which wraps your app."}),`
`,r(o.p,{children:"This allows you to avoid sending the same config props into the same components over and over again."}),`
`,r(o.h2,{id:"how-to-use-global-config-in-your-app",children:"How to use global config in your app"}),`
`,r(o.h3,{id:"step-1---wrap-your-app-in-the-provider",children:"Step 1 - Wrap your app in the provider"}),`
`,r(o.p,{children:"In order for global config to work, you must first wrap your app in the unified armstrong provider and pass in your config, like so:"}),`
`,r(o.pre,{children:r(o.code,{className:"language-tsx",children:`import { ArmstrongProvider, IArmstrongConfig } from '@rocketmakers/armstrong';

const armstrongConfig: IArmstrongConfig = {
  validationMode: 'both',
};

export const MyApp: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ArmstrongProvider config={armstrongConfig}>{children}</ArmstrongProvider>;
};
`})}),`
`,t(o.p,{children:["NOTE: The unified provider supports toast messages as well as allow you to pass global Armstrong config. If you specifically only want the toast messages, you can use ",r(o.code,{children:"<ConfigProvider>"})," instead but this is not recommended."]}),`
`,r(o.h3,{id:"config-options",children:"Config options"}),`
`,r(p,{of:c})]})}function d(n={}){const{wrapper:o}=Object.assign({},s(),n.components);return o?r(o,{...n,children:r(i,{...n})}):i(n)}const g=()=>{throw new Error("Docs-only story")};g.parameters={docsOnly:!0};const e={title:"Config/Global Config",tags:["stories-mdx"],includeStories:["__page"]};e.parameters=e.parameters||{};e.parameters.docs={...e.parameters.docs||{},page:d};const I=["__page"];export{I as __namedExportsOrder,g as __page,e as default};