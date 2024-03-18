import{M as d,C as i,b as t,e as p}from"./chunk-HLWAVYOI-af1601b8.js";import{D as r}from"./dialog.component-34e7f0d2.js";import{j as e,a as o,F as m}from"./jsx-runtime-eae7a151.js";import{u as c}from"./index-f875e932.js";import"./iframe-51884d3c.js";import"../sb-preview/runtime.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-18-d3dde439.js";import"./index-07d1f67e.js";import"./chunk-ZGA76URP-2b404cd8.js";import"./isNativeReflectConstruct-30e719dd.js";import"./index-11d98b33.js";import"./extends-98964cd2.js";import"./index-ec0b3b5e.js";import"./_baseIsEqual-62e1ad13.js";import"./uniq-4dce63e4.js";import"./index-356e4a49.js";import"./index-c1bef199.js";import"./index-dbbbe5a9.js";import"./index-97ba0010.js";import"./index-92c228ee.js";import"./index-34db7291.js";import"./index-189695b2.js";import"./classNames-9011e307.js";import"./config.context-ae8741c8.js";function s(a){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",code:"code",h2:"h2",a:"a",pre:"pre",strong:"strong"},c(),a.components);return o(m,{children:[e(d,{title:"Modals/Dialog",component:r}),`
`,e(n.h1,{id:"dialogs",children:"Dialogs"}),`
`,e(n.p,{children:"Dialog component. Used to display a full-screen modal dialog to the user."}),`
`,o(n.ul,{children:[`
`,o(n.li,{children:["Can be state controlled with ",e(n.code,{children:"open"})," and ",e(n.code,{children:"onOpenChange"})," props."]}),`
`,o(n.li,{children:["Can be async by assigning a ref and calling the utility functions (a ",e(n.code,{children:"useDialog"})," helper hook is available for this.)"]}),`
`,e(n.li,{children:"Supports dynamic data in async mode, so that a form can be built as a reusable async dialog."}),`
`]}),`
`,e(i,{withSource:"closed",children:e(t,{id:"modals-dialog--default"})}),`
`,e(n.h2,{id:"contents",children:"Contents"}),`
`,o(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"#simple-state",children:"Simple state controlled dialog"})}),`
`,e(n.li,{children:e(n.a,{href:"#async",children:"Async dialog"})}),`
`,e(n.li,{children:e(n.a,{href:"#reusable",children:"Reusable dialog component"})}),`
`,e(n.li,{children:e(n.a,{href:"#reusable-form",children:"Reusable form dialog"})}),`
`,e(n.li,{children:e(n.a,{href:"#props",children:"Full props table"})}),`
`]}),`
`,e(n.h2,{id:"simple-state-controlled-dialog",children:e("a",{name:"simple-state",children:"Simple state controlled dialog"})}),`
`,e(n.p,{children:"The simplest way to use an Armstrong dialog is with a React state bool like so:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`export const SimpleStateDialog: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen} title="Simple State Dialog">
        <div>Here is some content</div>
      </Dialog>
      <Button onClick={() => setOpen(true)}>Open simple state dialog</Button>
    </div>
  );
};
`})}),`
`,e(n.p,{children:"See it in action here:"}),`
`,e(i,{withSource:"closed",children:e(t,{id:"modals-dialog--simple-state-dialog"})}),`
`,e(n.h2,{id:"async-dialog",children:e("a",{name:"async",children:"Async dialog"})}),`
`,e(n.p,{children:"Armstrong dialogs can also be controlled via a promise based function, allowing developers to show a dialog and capture a response with a single line of async/await."}),`
`,e(n.p,{children:"A common use case for this is a basic confirmation dialog, like so:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`export const ConfirmationDialog: React.FC = () => {
  const [dialogRef, { open, ok, cancel }] = useDialog();

  const openDialog = React.useCallback(async () => {
    const { action } = await open();
    if (action === 'ok') {
      alert('Dialog confirmed!');
    }
  }, [open]);

  return (
    <div>
      <Dialog ref={dialogRef} title="Are you sure?">
        <div>Actions have consequences, would you like to continue anyway?</div>
        <Button onClick={ok}>OK</Button>
        <Button onClick={cancel}>Cancel</Button>
      </Dialog>
      <Button onClick={openDialog}>Open confirmation dialog</Button>
    </div>
  );
};
`})}),`
`,e(n.p,{children:"See it in action here (this example has some simple styling added for demo purposes:)"}),`
`,e(i,{withSource:"closed",children:e(t,{id:"modals-dialog--async-dialog"})}),`
`,e(n.h2,{id:"reusable-dialog-component",children:e("a",{name:"reusable",children:"Reusable dialog component"})}),`
`,o(n.p,{children:["If you're building a dialog component to be used throughout your app, the ",e(n.code,{children:"useDialog"})," hook has you covered. Simply write your component with a ",e(n.code,{children:"forwardRef"})," and pass the ref into the ",e(n.code,{children:"useDialog"})," hook."]}),`
`,o(n.p,{children:[e(n.strong,{children:"NOTE:"})," Reusable dialogs can still use the utility function returned from the ",e(n.code,{children:"useDialog"})," hook just like the earlier example."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`export const ReusableDialog = React.forwardRef<DialogElement>((props, ref) => {
  const [dialogRef, { cancel }] = useDialog(ref);

  return (
    <Dialog ref={dialogRef} title="Reusable dialog">
      <div>This custom dialog can be used throughout the app just like an Armstrong dialog!</div>
      <Button onClick={cancel}>Cancel</Button>
    </Dialog>
  );
});

export const ConsumingComponent: React.FC = () => {
  const [customDialogRef, { open }] = useDialog();

  return (
    <div>
      <ReusableDialog ref={customDialogRef} />
      <Button onClick={open}>Open reusable dialog</Button>
    </div>
  );
};
`})}),`
`,e(n.p,{children:"See it in action here:"}),`
`,e(i,{withSource:"closed",children:e(t,{id:"modals-dialog--reusable-dialog"})}),`
`,e(n.h2,{id:"reusable-form-dialog",children:e("a",{name:"reusable-form",children:"Reusable form dialog"})}),`
`,o(n.p,{children:["If you're wondering whether a reusable dialog can contain a form, the answer is yes! Any internal state or form data can be passed into the ",e(n.code,{children:"data"})," prop of the Armstrong dialog. This data will then be available to consuming components through the promise result!"]}),`
`,e(n.p,{children:"A good example use case here is a login dialog, observe:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:`interface ILoginData {
  username: string;
  password: string;
}

export const LoginDialog = React.forwardRef<DialogElement<ILoginData>>((props, ref) => {
  const [dialogRef, { ok }] = useDialog(ref);
  const { formProp, formState } = useForm<ILoginData>();

  const onSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      ok();
    },
    [ok]
  );

  return (
    <Dialog ref={dialogRef} title="Login" data={formState}>
      <form onSubmit={onSubmit}>
        <Input type="text" bind={formProp('username').bind()} placeholder="Username" />
        <Input type="password" bind={formProp('password').bind()} placeholder="Password" />
        <Button type="submit" disabled={!formState?.username || !formState?.password}>
          Login
        </Button>
      </form>
    </Dialog>
  );
});

export const ConsumingComponent: StoryObj<typeof Dialog> = {
  render: () => {
    const [customDialogRef, { open }] = useDialog<ILoginData>();

    const openDialog = React.useCallback(async () => {
      const { action, data } = await open();
      if (action === 'ok') {
        alert(\`Logging in as "\${data?.username}" with password: \${data?.password}\`);
      }
    }, [open]);

    return (
      <div>
        <LoginDialog ref={customDialogRef} />
        <Button onClick={openDialog}>Open login dialog</Button>
      </div>
    );
  },
};
`})}),`
`,e(n.p,{children:"See it in action here:"}),`
`,e(n.p,{children:"P.S. Notice how the first form element within a dialog is automatically focussed, and the keyboard focus is automatically trapped within the dialog! 👌"}),`
`,e(i,{withSource:"closed",children:e(t,{id:"modals-dialog--reusable-form-dialog"})}),`
`,e(n.h2,{id:"full-props-table",children:e("a",{name:"props",children:"Full props table"})}),`
`,e(p,{of:r})]})}function g(a={}){const{wrapper:n}=Object.assign({},c(),a.components);return n?e(n,{...a,children:e(s,{...a})}):s(a)}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const l={title:"Modals/Dialog",component:r,tags:["stories-mdx"],includeStories:["__page"]};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:g};const H=["__page"];export{H as __namedExportsOrder,h as __page,l as default};
