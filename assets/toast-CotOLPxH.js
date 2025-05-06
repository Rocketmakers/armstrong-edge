import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as t}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-DWzIWEf4.js";import{ae as r,af as i}from"./index-DLyS-qDb.js";import{T as a,D as d}from"./toast.stories-D9fpDLUg.js";import"./index-Cqyox1Tj.js";import"./iframe-CyAbz7l2.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index-Dv9et24K.js";import"./extends-CF3RwP-h.js";import"./index-CcyUcsxs.js";import"./config.context-B61qZkrf.js";import"./button.component-BSUqeTdM.js";import"./spinner.component-Bc6RftQo.js";function o(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Modals/Toast",component:a}),`
`,e.jsx(s.h1,{id:"toast",children:"Toast"}),`
`,e.jsx(s.p,{children:"Toasts are small message modals that can be dispatched globally"}),`
`,e.jsx(s.h2,{id:"how-to-use-global-toast-in-your-app",children:"How to use global toast in your app"}),`
`,e.jsx(s.h3,{id:"step-1---wrap-your-app-in-the-provider",children:"Step 1 - Wrap your app in the provider"}),`
`,e.jsx(s.p,{children:"In order for global toast to work, you must first wrap your app in the unified armstrong provider, like so:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { ArmstrongProvider } from '@rocketmakers/armstrong';

export const MyApp: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ArmstrongProvider>{children}</ArmstrongProvider>;
};
`})}),`
`,e.jsxs(s.p,{children:["NOTE: The unified provider allows you to pass global Armstrong config as well as supports toast messages. If you specifically only want the toast messages, you can use ",e.jsx(s.code,{children:"<ToastProvider>"})," instead but this is not recommended."]}),`
`,e.jsx(s.h3,{id:"step-2---use-the-toast-hook-to-dispatch-a-toast-message",children:"Step 2 - Use the toast hook to dispatch a toast message"}),`
`,e.jsx(s.p,{children:"Toast messages can be dispatched from any component within the provider using the toast hook, like so:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { useToast, IToast } from '@rocketmakers/armstrong';

export const MyComponent: React.FC = () => {
  const dispatchToast = useToast();

  const toastMessage: IToast = {
    title: 'Here is a toast!',
    description: 'Here is the description for my toast',
  };

  return <button onClick={() => dispatchToast(toastMessage)}>Send a toast</button>;
};
`})}),`
`,e.jsx(s.p,{children:"See it in action here:"}),`
`,e.jsx(i,{withSource:"closed",of:d}),`
`,e.jsx(s.h3,{id:"step-3-optional---configure-your-toast-using-armstrong-global-config",children:"Step 3 (optional) - Configure your toast using Armstrong global config"}),`
`,e.jsx(s.p,{children:"Toast messages come out of the box with a sensible set of default properties, but if you need to change the way toast behaves, you can pass config into the unified Armstrong provider like so:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { ArmstrongProvider } from '@rocketmakers/armstrong';

export const MyApp: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ArmstrongProvider config={{ toastDuration: 10000, toastPosition: 'top-right' }}>{children}</ArmstrongProvider>
  );
};
`})}),`
`,e.jsxs(s.p,{children:["NOTE: These settings can also be passed in as props to the ",e.jsx(s.code,{children:"<ToastProvider>"})," if you're using that, and ",e.jsx(s.code,{children:"duration"})," can also be set on a per-toast basis"]}),`
`,e.jsx(s.h2,{id:"toastprovider-props",children:"ToastProvider Props"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"ToastProvider"})," component supplies the context and configuration for displaying toast notifications globally."]}),`
`,e.jsx(s.h3,{id:"duration",children:e.jsx(s.code,{children:"duration"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type"}),": ",e.jsx(s.code,{children:"number"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Default"}),": ",e.jsx(s.code,{children:"5000"})]}),`
`,e.jsx(s.li,{children:"Specifies how long a toast remains visible (in milliseconds) before auto-dismissal."}),`
`]}),`
`,e.jsx(s.h3,{id:"position",children:e.jsx(s.code,{children:"position"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type"}),": ",e.jsx(s.code,{children:"'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Default"}),": ",e.jsx(s.code,{children:"'bottom-right'"})]}),`
`,e.jsx(s.li,{children:"Controls where toast notifications appear on the screen."}),`
`]}),`
`,e.jsx(s.h3,{id:"closebuttonicon",children:e.jsx(s.code,{children:"closeButtonIcon"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type"}),": ",e.jsx(s.code,{children:"JSX.Element | false"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Default"}),": ",e.jsx(s.code,{children:"undefined"})]}),`
`,e.jsxs(s.li,{children:["Defines a custom icon for the close button. Use ",e.jsx(s.code,{children:"false"})," to hide the close button entirely."]}),`
`]}),`
`,e.jsx(s.h3,{id:"displaymode",children:e.jsx(s.code,{children:"displayMode"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type"}),": ",e.jsx(s.code,{children:"'add' | 'replace'"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Default"}),": ",e.jsx(s.code,{children:"'add'"})]}),`
`,e.jsxs(s.li,{children:["Determines whether new toasts are stacked (",e.jsx(s.code,{children:"'add'"}),") or replace the current toast (",e.jsx(s.code,{children:"'replace'"}),")."]}),`
`]}),`
`,e.jsx(s.h3,{id:"ignorepredicate",children:e.jsx(s.code,{children:"ignorePredicate"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type"}),": ",e.jsx(s.code,{children:"(existingToasts: IToast[], incomingToast: IToast) => boolean"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Default"}),": ",e.jsx(s.code,{children:"undefined"})]}),`
`,e.jsxs(s.li,{children:["If defined, prevents a new toast from being added if the function returns ",e.jsx(s.code,{children:"true"}),". Useful for deduplication."]}),`
`]})]})}function D(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{D as default};
