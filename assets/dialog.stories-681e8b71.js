import{a as s,j as y,F as ie}from"./jsx-runtime-63e4a166.js";import{w as r,u,f as V,a as c,e as o,b as m,q as se}from"./index-3ffc2e85.js";import{r as p}from"./index-c4905b50.js";import{D as b}from"./dialog.component-056d6725.js";import{B as g}from"./button.component-f355d20f.js";import{u as le}from"./label.component-23add95d.js";import{I as O}from"./input.component-b297c724.js";import"./index-999ec173.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";import"./index-c1bef199.js";import"./index-742b7287.js";import"./index-07d1f67e.js";import"./index-97ba0010.js";import"./index-92c228ee.js";import"./index-f6c914d3.js";import"./index-3d4ae170.js";import"./classNames-9011e307.js";import"./config.context-03ebf2cb.js";import"./spinner.component-c2b96b2c.js";import"./useDidUpdateEffect-2528cb48.js";import"./inputWrapper.component-75dfd9e3.js";import"./statusWrapper.component-5d5028da.js";import"./validationErrors.component-2d32de4a.js";const h="Dialog function called on an invalid dialog, are you sure you've added the ref to the Armstrong <Dialog> component?";function ce(e){return{open:()=>{if(!e.current)throw new Error(h);return e.current.open()},cancel:()=>{if(!e.current)throw new Error(h);return e.current.cancel()},close:()=>{if(!e.current)throw new Error(h);return e.current.close()},ok:()=>{if(!e.current)throw new Error(h);return e.current.ok()}}}const v=e=>{const n=p.useRef(null);return p.useImperativeHandle(e,()=>n.current),[n,ce(n)]},Ne={title:"Modals/Dialog",component:b,parameters:{docs:{description:{component:"metadata"}}}},w={args:{title:"Test Dialog",description:"Hello, I am a test dialog"},render:e=>{const[n,i]=p.useState(!1);return y(ie,{children:[s(g,{onClick:()=>i(!0),children:"Open dialog"}),s(b,{...e,open:n,onOpenChange:i})]})}},x={...w,play:async({canvasElement:e,args:n})=>{const t=r(e).getByText("Open dialog");u.click(t);const l=await V(document.body,n.title),a=await V(document.body,n.description);await c(()=>o(l).toBeVisible()),await c(()=>o(a).toBeVisible());const d=await m(document.body,"dialog"),B=await r(d).findByRole("button",{name:"Close"});o(B).toBeVisible(),u.click(B),await c(()=>o(d).not.toBeVisible())}},k={...w,args:{...w.args,title:void 0},play:async({canvasElement:e})=>{const i=r(e).getByText("Open dialog");u.click(i);const t=await m(document.body,"dialog");await c(()=>o(t).toBeVisible()),o(t.getElementsByTagName("h2")).toHaveLength(0)}},f={...w,args:{...w.args,closeButtonIcon:!1},play:async({canvasElement:e})=>{const i=r(e).getByText("Open dialog");u.click(i);const t=await m(document.body,"dialog");await c(()=>o(t).toBeVisible()),o(se(t,"button",{name:"Close"})).not.toBeInTheDocument()}},T={...w,args:{children:s("div",{children:s("p",{children:"Some custom content"})})},play:async({canvasElement:e})=>{const i=r(e).getByText("Open dialog");u.click(i);const t=await m(document.body,"dialog");await c(()=>o(t).toBeVisible());const l=r(t).getByText("Some custom content");o(l).toBeVisible()}},R={render:()=>{const[e,n]=p.useState(!1);return y("div",{children:[s(b,{open:e,onOpenChange:n,title:"Simple State Dialog",children:s("div",{children:"Here is some content"})}),s(g,{onClick:()=>n(!0),children:"Open simple state dialog"})]})},play:async({canvasElement:e})=>{const i=r(e).getByText("Open simple state dialog");u.click(i);const t=await m(document.body,"dialog");await c(()=>o(t).toBeVisible());const l=r(t).getByText("Here is some content");o(l).toBeVisible();const a=await r(t).findByRole("button",{name:"Close"});o(a).toBeVisible(),u.click(a),await c(()=>o(t).not.toBeVisible())}},C={render:()=>{const[e,{open:n,ok:i,cancel:t}]=v(),[l,a]=p.useState("idle"),d=p.useCallback(async()=>{const{action:B}=await n();a(B)},[n,a]);return y("div",{children:[s(b,{ref:e,title:"Are you sure?",description:"Actions have consequences, would you like to continue anyway?",children:y("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[s(g,{"aria-label":"OK",onClick:i,displayStatus:"positive",children:"OK"}),s(g,{"aria-label":"Cancel",onClick:t,displayStatus:"negative",children:"Cancel"})]})}),s(g,{onClick:d,children:"Open confirmation dialog"}),s("div",{"data-testid":"dialog-result",children:l})]})},play:async({canvasElement:e})=>{const i=r(e).getByText("Open confirmation dialog");u.click(i);let t=await m(document.body,"dialog");await c(()=>o(t).toBeVisible());const l=r(e).getByTestId("dialog-result");o(l).toHaveTextContent("idle");const a=r(t).getByRole("button",{name:"OK"});o(a).toBeVisible(),u.click(a),await c(()=>o(t).not.toBeVisible()),await c(()=>o(l).toHaveTextContent("ok")),u.click(i),t=await m(document.body,"dialog"),await c(()=>o(t).toBeVisible());const d=r(t).getByRole("button",{name:"Cancel"});o(d).toBeVisible(),u.click(d),await c(()=>o(t).not.toBeVisible()),await c(()=>o(l).toHaveTextContent("cancel"))}},te=p.forwardRef((e,n)=>{const[i,{cancel:t}]=v(n);return y(b,{ref:i,title:"Reusable dialog",children:[s("div",{children:"This custom dialog can be used throughout the app just like an Armstrong dialog!"}),s(g,{onClick:t,style:{marginTop:"16px"},"aria-label":"Cancel",children:"Cancel"})]})});te.displayName="ReusableDialogExample";const E={render:()=>{const[e,{open:n}]=v();return y("div",{children:[s(te,{ref:e}),s(g,{onClick:n,children:"Open reusable dialog"})]})},play:async({canvasElement:e})=>{const i=r(e).getByText("Open reusable dialog");u.click(i);const t=await m(document.body,"dialog");await c(()=>o(t).toBeVisible());const l=await V(document.body,"Reusable dialog");await c(()=>o(l).toBeVisible());const a=r(t).getByRole("button",{name:"Cancel"});u.click(a),await c(()=>o(t).not.toBeVisible())}},ne=p.forwardRef((e,n)=>{const[i,{ok:t}]=v(n),{formProp:l,formState:a}=le(),d=p.useCallback(B=>{B.preventDefault(),t()},[t]);return s(b,{ref:i,title:"Login",data:a,children:y("form",{onSubmit:d,children:[s(O,{type:"text",bind:l("username").bind(),placeholder:"Username"}),s(O,{type:"password",bind:l("password").bind(),placeholder:"Password"}),s(g,{type:"submit","aria-label":"Login",disabled:!(a!=null&&a.username)||!(a!=null&&a.password),style:{marginTop:"16px"},children:"Login"})]})})});ne.displayName="LoginDialog";const D={render:()=>{const[e,{open:n}]=v(),[i,t]=p.useState("idle"),l=p.useCallback(async()=>{const{action:a,data:d}=await n();t(`${a}, username: ${d==null?void 0:d.username}, password: ${d==null?void 0:d.password}`)},[n,t]);return y("div",{children:[s(ne,{ref:e}),s(g,{onClick:l,children:"Open login dialog"}),s("div",{"data-testid":"dialog-result",children:i})]})},play:async({canvasElement:e})=>{const n="test@example.com",i="test-password",l=r(e).getByText("Open login dialog");u.click(l);const a=await m(document.body,"dialog");await c(()=>o(a).toBeVisible());const d=r(e).getByTestId("dialog-result");o(d).toHaveTextContent("idle");const B=r(a).getByPlaceholderText("Username");u.type(B,n);const oe=r(a).getByPlaceholderText("Password");u.type(oe,i);const ae=r(a).getByRole("button",{name:"Login"});u.click(ae),await c(()=>o(a).not.toBeVisible()),await c(()=>o(d).toHaveTextContent(`ok, username: ${n}, password: ${i}`))}};var S,F,H;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Template,
  play: async ({
    canvasElement,
    args
  }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open dialog');
    userEvent.click(openButton);

    // title / description check
    const title = await findByText(document.body, (args.title as string));
    const description = await findByText(document.body, (args.description as string));
    await waitFor(() => expect(title).toBeVisible());
    await waitFor(() => expect(description).toBeVisible());

    // close button check
    const dialog = await findByRole(document.body, 'dialog');
    const closeButton = await within(dialog).findByRole('button', {
      name: 'Close'
    });
    expect(closeButton).toBeVisible();
    userEvent.click(closeButton);
    await waitFor(() => expect(dialog).not.toBeVisible());
  }
}`,...(H=(F=x.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var P,I,L;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    title: undefined
  },
  play: async ({
    canvasElement
  }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open dialog');
    userEvent.click(openButton);

    // wait for visibility
    const dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // NO title check
    expect(dialog.getElementsByTagName('h2')).toHaveLength(0);
  }
}`,...(L=(I=k.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var N,$,A;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    closeButtonIcon: false
  },
  play: async ({
    canvasElement
  }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open dialog');
    userEvent.click(openButton);

    // wait for visibility
    const dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // NO close button check
    expect(queryByRole(dialog, 'button', {
      name: 'Close'
    })).not.toBeInTheDocument();
  }
}`,...(A=($=f.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var U,K,q;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Template,
  args: {
    children: <div>
        <p>Some custom content</p>
      </div>
  },
  play: async ({
    canvasElement
  }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open dialog');
    userEvent.click(openButton);

    // wait for visibility
    const dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // custom content check
    const customParagraph = within(dialog).getByText('Some custom content');
    expect(customParagraph).toBeVisible();
  }
}`,...(q=(K=T.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var j,M,_;R.parameters={...R.parameters,docs:{...(j=R.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div>
        <Dialog open={open} onOpenChange={setOpen} title="Simple State Dialog">
          <div>Here is some content</div>
        </Dialog>
        <Button onClick={() => setOpen(true)}>Open simple state dialog</Button>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open simple state dialog');
    userEvent.click(openButton);

    // wait for visibility
    const dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // content check
    const customParagraph = within(dialog).getByText('Here is some content');
    expect(customParagraph).toBeVisible();

    // close button check
    const closeButton = await within(dialog).findByRole('button', {
      name: 'Close'
    });
    expect(closeButton).toBeVisible();
    userEvent.click(closeButton);
    await waitFor(() => expect(dialog).not.toBeVisible());
  }
}`,...(_=(M=R.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var z,G,J;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [dialogRef, {
      open,
      ok,
      cancel
    }] = useDialog();
    const [result, setResult] = React.useState('idle');
    const openDialog = React.useCallback(async () => {
      const {
        action
      } = await open();
      setResult(action);
    }, [open, setResult]);
    return <div>
        <Dialog ref={dialogRef} title="Are you sure?" description="Actions have consequences, would you like to continue anyway?">
          <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px'
        }}>
            <Button aria-label="OK" onClick={ok} displayStatus="positive">
              OK
            </Button>
            <Button aria-label="Cancel" onClick={cancel} displayStatus="negative">
              Cancel
            </Button>
          </div>
        </Dialog>
        <Button onClick={openDialog}>Open confirmation dialog</Button>
        <div data-testid="dialog-result">{result}</div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open confirmation dialog');
    userEvent.click(openButton);

    // wait for visibility
    let dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // idle result check
    const result = within(canvasElement).getByTestId('dialog-result');
    expect(result).toHaveTextContent('idle');

    // ok button check
    const okButton = within(dialog).getByRole('button', {
      name: 'OK'
    });
    expect(okButton).toBeVisible();
    userEvent.click(okButton);
    await waitFor(() => expect(dialog).not.toBeVisible());
    await waitFor(() => expect(result).toHaveTextContent('ok'));

    // re-open dialog
    userEvent.click(openButton);
    dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // cancel button check
    const cancelButton = within(dialog).getByRole('button', {
      name: 'Cancel'
    });
    expect(cancelButton).toBeVisible();
    userEvent.click(cancelButton);
    await waitFor(() => expect(dialog).not.toBeVisible());
    await waitFor(() => expect(result).toHaveTextContent('cancel'));
  }
}`,...(J=(G=C.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,W,X;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [customDialogRef, {
      open
    }] = useDialog();
    return <div>
        <ReusableDialogExample ref={customDialogRef} />
        <Button onClick={open}>Open reusable dialog</Button>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open reusable dialog');
    userEvent.click(openButton);

    // wait for visibility
    const dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // title on inner component check
    const title = await findByText(document.body, 'Reusable dialog');
    await waitFor(() => expect(title).toBeVisible());

    // custom cancel button check
    const closeButton = within(dialog).getByRole('button', {
      name: 'Cancel'
    });
    userEvent.click(closeButton);
    await waitFor(() => expect(dialog).not.toBeVisible());
  }
}`,...(X=(W=E.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [customDialogRef, {
      open
    }] = useDialog<ILoginData>();
    const [result, setResult] = React.useState('idle');
    const openDialog = React.useCallback(async () => {
      const {
        action,
        data
      } = await open();
      setResult(\`\${action}, username: \${data?.username}, password: \${data?.password}\`);
    }, [open, setResult]);
    return <div>
        <LoginDialog ref={customDialogRef} />
        <Button onClick={openDialog}>Open login dialog</Button>
        <div data-testid="dialog-result">{result}</div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    // constants
    const testUsername = 'test@example.com';
    const testPassword = 'test-password';

    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open login dialog');
    userEvent.click(openButton);

    // wait for visibility
    const dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // idle result check
    const result = within(canvasElement).getByTestId('dialog-result');
    expect(result).toHaveTextContent('idle');

    // fill inputs
    const username = within(dialog).getByPlaceholderText<HTMLInputElement>('Username');
    userEvent.type(username, testUsername);
    const password = within(dialog).getByPlaceholderText<HTMLInputElement>('Password');
    userEvent.type(password, testPassword);

    // click login
    const login = within(dialog).getByRole('button', {
      name: 'Login'
    });
    userEvent.click(login);

    // wait for dialog to close
    await waitFor(() => expect(dialog).not.toBeVisible());

    // check final result matches input
    await waitFor(() => expect(result).toHaveTextContent(\`ok, username: \${testUsername}, password: \${testPassword}\`));
  }
}`,...(ee=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const $e=["Default","NoTitle","NoCloseButton","CustomContent","SimpleStateDialog","AsyncDialog","ReusableDialog","ReusableFormDialog"];export{C as AsyncDialog,T as CustomContent,x as Default,f as NoCloseButton,k as NoTitle,E as ReusableDialog,D as ReusableFormDialog,R as SimpleStateDialog,$e as __namedExportsOrder,Ne as default};
//# sourceMappingURL=dialog.stories-681e8b71.js.map
