import{j as n}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as s}from"./index-BLKynSmM.js";import{ae as l,af as a,ag as r}from"./index-BNwbscNO.js";import{D as i,a as c,S as d,A as p,R as u,b as h}from"./dialog.stories-CQ4ebwhn.js";import"./index-Cqyox1Tj.js";import"./iframe-BPZ8QADq.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index-Dv9et24K.js";import"./extends-CF3RwP-h.js";import"./index-CcyUcsxs.js";import"./index-BaW8Z0I_.js";import"./config.context-B61qZkrf.js";import"./button.component-BSUqeTdM.js";import"./spinner.component-Bc6RftQo.js";import"./label.component-Daqf1tyH.js";import"./useDidUpdateEffect-igSykUWQ.js";import"./input.component-DGlyt-Yl.js";import"./inputWrapper.component-DM_jSE10.js";import"./statusWrapper.component-DucYgjxK.js";import"./validationErrors.component-CHN68oNP.js";import"./radixDialog-CBrwtQa5.js";function t(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Modals/Dialog",component:i}),`
`,n.jsx(e.h1,{id:"dialogs",children:"Dialogs"}),`
`,n.jsx(e.p,{children:"Dialog component. Used to display a full-screen modal dialog to the user."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Can be state controlled with ",n.jsx(e.code,{children:"open"})," and ",n.jsx(e.code,{children:"onOpenChange"})," props."]}),`
`,n.jsxs(e.li,{children:["Can be async by assigning a ref and calling the utility functions (a ",n.jsx(e.code,{children:"useDialog"})," helper hook is available for this.)"]}),`
`,n.jsx(e.li,{children:"Supports dynamic data in async mode, so that a form can be built as a reusable async dialog."}),`
`]}),`
`,n.jsx(a,{withSource:"closed",of:c}),`
`,n.jsx(e.h2,{id:"contents",children:"Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#simple-state",children:"Simple state controlled dialog"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#async",children:"Async dialog"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#reusable",children:"Reusable dialog component"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#reusable-form",children:"Reusable form dialog"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#props",children:"Full props table"})}),`
`]}),`
`,n.jsx(e.h2,{id:"simple-state-controlled-dialog",children:n.jsx("a",{name:"simple-state",children:"Simple state controlled dialog"})}),`
`,n.jsx(e.p,{children:"The simplest way to use an Armstrong dialog is with a React state bool like so:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export const SimpleStateDialog: React.FC = () => {
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
`,n.jsx(e.p,{children:"See it in action here:"}),`
`,n.jsx(a,{withSource:"closed",of:d}),`
`,n.jsx(e.h2,{id:"async-dialog",children:n.jsx("a",{name:"async",children:"Async dialog"})}),`
`,n.jsx(e.p,{children:"Armstrong dialogs can also be controlled via a promise based function, allowing developers to show a dialog and capture a response with a single line of async/await."}),`
`,n.jsx(e.p,{children:"A common use case for this is a basic confirmation dialog, like so:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export const ConfirmationDialog: React.FC = () => {
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
`,n.jsx(e.p,{children:"See it in action here (this example has some simple styling added for demo purposes:)"}),`
`,n.jsx(a,{withSource:"closed",of:p}),`
`,n.jsx(e.h2,{id:"reusable-dialog-component",children:n.jsx("a",{name:"reusable",children:"Reusable dialog component"})}),`
`,n.jsxs(e.p,{children:["If you're building a dialog component to be used throughout your app, the ",n.jsx(e.code,{children:"useDialog"})," hook has you covered. Simply write your component with a ",n.jsx(e.code,{children:"forwardRef"})," and pass the ref into the ",n.jsx(e.code,{children:"useDialog"})," hook."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"NOTE:"})," Reusable dialogs can still use the utility function returned from the ",n.jsx(e.code,{children:"useDialog"})," hook just like the earlier example."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export const ReusableDialog = React.forwardRef<DialogElement>((props, ref) => {
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
`,n.jsx(e.p,{children:"See it in action here:"}),`
`,n.jsx(a,{withSource:"closed",of:u}),`
`,n.jsx(e.h2,{id:"reusable-form-dialog",children:n.jsx("a",{name:"reusable-form",children:"Reusable form dialog"})}),`
`,n.jsxs(e.p,{children:["If you're wondering whether a reusable dialog can contain a form, the answer is yes! Any internal state or form data can be passed into the ",n.jsx(e.code,{children:"data"})," prop of the Armstrong dialog. This data will then be available to consuming components through the promise result!"]}),`
`,n.jsx(e.p,{children:"A good example use case here is a login dialog, observe:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`interface ILoginData {
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
`,n.jsx(e.p,{children:"See it in action here:"}),`
`,n.jsx(e.p,{children:"P.S. Notice how the first form element within a dialog is automatically focussed, and the keyboard focus is automatically trapped within the dialog! 👌"}),`
`,n.jsx(a,{withSource:"closed",of:h}),`
`,n.jsx(e.h2,{id:"full-props-table",children:n.jsx("a",{name:"props",children:"Full props table"})}),`
`,n.jsx(r,{of:i})]})}function X(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{X as default};
