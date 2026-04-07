import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-DVgGKjXv.js";import"./index-eB6Hi8Lj.js";import{T as i,D as r}from"./toast.stories-CvQLPtIL.js";import{ae as a,af as d}from"./index-C0Bv-37P.js";import"./index-DwQS_Y10.js";import"./iframe-BFU3q-Hh.js";import"../sb-preview/runtime.js";import"./client-BKcTqz1J.js";import"./index-Bls5tne7.js";import"./index-BmZcwVSF.js";import"./index-BY2j7gpI.js";import"./index-CWQsrU90.js";import"./index-DKCiyFsV.js";import"./index-Dp6IY7a_.js";import"./index-D-iaL4kR.js";import"./index-Bgmmd5SI.js";import"./index-DHRVNcCi.js";import"./index-CC-sFNo4.js";import"./config.context-BKnTehkl.js";import"./button.component-XCqawbKw.js";import"./spinner.component-DY-93A6g.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function o(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(a,{title:"Modals/Toast",component:i}),`
`,s.jsx(e.h1,{id:"toast",children:"Toast"}),`
`,s.jsx(e.p,{children:"Toasts are small message modals that can be dispatched globally"}),`
`,s.jsx(e.h2,{id:"how-to-use-global-toast-in-your-app",children:"How to use global toast in your app"}),`
`,s.jsx(e.h3,{id:"step-1---wrap-your-app-in-the-provider",children:"Step 1 - Wrap your app in the provider"}),`
`,s.jsx(e.p,{children:"In order for global toast to work, you must first wrap your app in the unified armstrong provider, like so:"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-tsx",children:`import { ArmstrongProvider } from '@rocketmakers/armstrong';

export const MyApp: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ArmstrongProvider>{children}</ArmstrongProvider>;
};
`})}),`
`,s.jsxs(e.p,{children:["NOTE: The unified provider allows you to pass global Armstrong config as well as supports toast messages. If you specifically only want the toast messages, you can use ",s.jsx(e.code,{children:"<ToastProvider>"})," instead but this is not recommended."]}),`
`,s.jsx(e.h3,{id:"step-2---use-the-toast-hook-to-dispatch-a-toast-message",children:"Step 2 - Use the toast hook to dispatch a toast message"}),`
`,s.jsx(e.p,{children:"Toast messages can be dispatched from any component within the provider using the toast hook, like so:"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-tsx",children:`import { useToast, IToast } from '@rocketmakers/armstrong';

export const MyComponent: React.FC = () => {
  const dispatchToast = useToast();

  const toastMessage: IToast = {
    title: 'Here is a toast!',
    description: 'Here is the description for my toast',
  };

  return <button onClick={() => dispatchToast(toastMessage)}>Send a toast</button>;
};
`})}),`
`,s.jsx(e.p,{children:"See it in action here:"}),`
`,s.jsx(d,{withSource:"closed",of:r}),`
`,s.jsx(e.h3,{id:"step-3-optional---configure-your-toast-using-armstrong-global-config",children:"Step 3 (optional) - Configure your toast using Armstrong global config"}),`
`,s.jsx(e.p,{children:"Toast messages come out of the box with a sensible set of default properties, but if you need to change the way toast behaves, you can pass config into the unified Armstrong provider like so:"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-tsx",children:`import { ArmstrongProvider } from '@rocketmakers/armstrong';

export const MyApp: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ArmstrongProvider config={{ toastDuration: 10000, toastPosition: 'top-right' }}>{children}</ArmstrongProvider>
  );
};
`})}),`
`,s.jsxs(e.p,{children:["NOTE: These settings can also be passed in as props to the ",s.jsx(e.code,{children:"<ToastProvider>"})," if you're using that, and ",s.jsx(e.code,{children:"duration"})," can also be set on a per-toast basis"]}),`
`,s.jsx(e.h2,{id:"toastprovider-props",children:"ToastProvider Props"}),`
`,s.jsxs(e.p,{children:["The ",s.jsx(e.code,{children:"ToastProvider"})," component supplies the context and configuration for displaying toast notifications globally."]}),`
`,s.jsx(e.h3,{id:"duration",children:s.jsx(e.code,{children:"duration"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Type"}),": ",s.jsx(e.code,{children:"number"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Default"}),": ",s.jsx(e.code,{children:"5000"})]}),`
`,s.jsx(e.li,{children:"Specifies how long a toast remains visible (in milliseconds) before auto-dismissal."}),`
`]}),`
`,s.jsx(e.h3,{id:"position",children:s.jsx(e.code,{children:"position"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Type"}),": ",s.jsx(e.code,{children:"'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Default"}),": ",s.jsx(e.code,{children:"'bottom-right'"})]}),`
`,s.jsx(e.li,{children:"Controls where toast notifications appear on the screen."}),`
`]}),`
`,s.jsx(e.h3,{id:"closebuttonicon",children:s.jsx(e.code,{children:"closeButtonIcon"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Type"}),": ",s.jsx(e.code,{children:"JSX.Element | false"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Default"}),": ",s.jsx(e.code,{children:"undefined"})]}),`
`,s.jsxs(e.li,{children:["Defines a custom icon for the close button. Use ",s.jsx(e.code,{children:"false"})," to hide the close button entirely."]}),`
`]}),`
`,s.jsx(e.h3,{id:"displaymode",children:s.jsx(e.code,{children:"displayMode"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Type"}),": ",s.jsx(e.code,{children:"'add' | 'replace'"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Default"}),": ",s.jsx(e.code,{children:"'add'"})]}),`
`,s.jsxs(e.li,{children:["Determines whether new toasts are stacked (",s.jsx(e.code,{children:"'add'"}),") or replace the current toast (",s.jsx(e.code,{children:"'replace'"}),")."]}),`
`]}),`
`,s.jsx(e.h3,{id:"ignorepredicate",children:s.jsx(e.code,{children:"ignorePredicate"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Type"}),": ",s.jsx(e.code,{children:"(existingToasts: IToast[], incomingToast: IToast) => boolean"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Default"}),": ",s.jsx(e.code,{children:"undefined"})]}),`
`,s.jsxs(e.li,{children:["If defined, prevents a new toast from being added if the function returns ",s.jsx(e.code,{children:"true"}),". Useful for deduplication."]}),`
`]}),`
`,s.jsx(e.h2,{id:"how-to-dismiss-toasts-programmatically",children:"How to dismiss toasts programmatically"}),`
`,s.jsxs(e.p,{children:["To dismiss a toast programmatically, you can use the ",s.jsx(e.code,{children:"dismissToastByKey"})," function provided by the ",s.jsx(e.code,{children:"useDismissToast"})," hook. This hook can be used in any component that is a descendant of the ",s.jsx(e.code,{children:"ToastProvider"}),"."]}),`
`,s.jsx(e.p,{children:"Here's an example of how to use it:"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-tsx",children:`import { useDismissToast } from '@rocketmakers/armstrong';

export const MyComponent: React.FC = () => {
  const dispatchToast = useToast();
  const dismissToast = useDismissToast();

  const myToastKey = React.useRef<string | undefined>();

  const sendToast = () => {
    myToastKey.current = dispatchToast({
      title: 'Toast 1',
      description: 'This is the first toast message.',
    });
  };

  const handleDismiss = () => {
    if (myToastKey.current) {
      dismissToast(myToastKey.current);
      myToastKey.current = undefined;
    }
  };

  return (
    <>
      <button onClick={sendToast}>Send Toast 1</button>
      <button onClick={handleDismiss}>Dismiss Toast 1</button>
    </>
  );
};
`})})]})}function K(n={}){const{wrapper:e}={...t(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(o,{...n})}):o(n)}export{K as default};
