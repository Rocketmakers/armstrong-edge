import{j as o}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as r}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-k040cQL7.js";import{ae as n,af as a}from"./index-DBy7xP5v.js";import{T as i,D as p}from"./toast.stories-Cy9wGvdw.js";import"./index-Cqyox1Tj.js";import"./iframe-CA4J50BD.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index-Dv9et24K.js";import"./extends-CF3RwP-h.js";import"./index-CcyUcsxs.js";import"./config.context-CQ8yCtG8.js";import"./button.component-BqSJDp5_.js";import"./spinner.component-RFiNSZIp.js";function s(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{title:"Modals/Toast",component:i}),`
`,o.jsx(t.h1,{id:"toast",children:"Toast"}),`
`,o.jsx(t.p,{children:"Toasts are small message modals that can be dispatched globally"}),`
`,o.jsx(t.h2,{id:"how-to-use-global-toast-in-your-app",children:"How to use global toast in your app"}),`
`,o.jsx(t.h3,{id:"step-1---wrap-your-app-in-the-provider",children:"Step 1 - Wrap your app in the provider"}),`
`,o.jsx(t.p,{children:"In order for global toast to work, you must first wrap your app in the unified armstrong provider, like so:"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`import { ArmstrongProvider } from '@rocketmakers/armstrong';

export const MyApp: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ArmstrongProvider>{children}</ArmstrongProvider>;
};
`})}),`
`,o.jsxs(t.p,{children:["NOTE: The unified provider allows you to pass global Armstrong config as well as supports toast messages. If you specifically only want the toast messages, you can use ",o.jsx(t.code,{children:"<ToastProvider>"})," instead but this is not recommended."]}),`
`,o.jsx(t.h3,{id:"step-2---use-the-toast-hook-to-dispatch-a-toast-message",children:"Step 2 - Use the toast hook to dispatch a toast message"}),`
`,o.jsx(t.p,{children:"Toast messages can be dispatched from any component within the provider using the toast hook, like so:"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`import { useToast, IToast } from '@rocketmakers/armstrong';

export const MyComponent: React.FC = () => {
  const dispatchToast = useToast();

  const toastMessage: IToast = {
    title: 'Here is a toast!',
    description: 'Here is the description for my toast',
  };

  return <button onClick={() => dispatchToast(toastMessage)}>Send a toast</button>;
};
`})}),`
`,o.jsx(t.p,{children:"See it in action here:"}),`
`,o.jsx(a,{withSource:"closed",of:p}),`
`,o.jsx(t.h3,{id:"step-3-optional---configure-your-toast-using-armstrong-global-config",children:"Step 3 (optional) - Configure your toast using Armstrong global config"}),`
`,o.jsx(t.p,{children:"Toast messages come out of the box with a sensible set of default properties, but if you need to change the way toast behaves, you can pass config into the unified Armstrong provider like so:"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`import { ArmstrongProvider } from '@rocketmakers/armstrong';

export const MyApp: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ArmstrongProvider config={{ toastDuration: 10000, toastPosition: 'top-right' }}>{children}</ArmstrongProvider>
  );
};
`})}),`
`,o.jsxs(t.p,{children:["NOTE: These settings can also be passed in as props to the ",o.jsx(t.code,{children:"<ToastProvider>"})," if you're using that, and ",o.jsx(t.code,{children:"duration"})," can also be set on a per-toast basis"]})]})}function M(e={}){const{wrapper:t}={...r(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(s,{...e})}):s(e)}export{M as default};
