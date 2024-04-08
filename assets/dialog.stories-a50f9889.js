import{j as l,a as y,F as ie}from"./jsx-runtime-eae7a151.js";import{w as r,u as p,f as V,a as d,e as o,b as B,q as se}from"./index-aeb91708.js";import{r as u}from"./index-c4905b50.js";import{D as b}from"./dialog.component-01a441e2.js";import{B as m}from"./button.component-1c2f3deb.js";import{u as le}from"./label.component-f65136f5.js";import{I as S}from"./input.component-211f5777.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-d447bef6.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./index-c1bef199.js";import"./index-742b7287.js";import"./index-07d1f67e.js";import"./index-97ba0010.js";import"./index-92c228ee.js";import"./index-f6c914d3.js";import"./index-3d4ae170.js";import"./classNames-9011e307.js";import"./config.context-ae8741c8.js";import"./spinner.component-a9fcb2ea.js";import"./useDidUpdateEffect-8696afbd.js";import"./inputWrapper.component-e6a41289.js";import"./statusWrapper.component-ecb2e7af.js";import"./validationErrors.component-73671d2f.js";const h=new Error("Dialog function called on an invalid dialog, are you sure you've added the ref to the Armstrong <Dialog> component?"),v=n=>{const e=u.useRef(null),[i,t]=u.useState(!1);u.useImperativeHandle(n,()=>e.current);const s=u.useCallback(()=>{if(!e.current)throw h;return e.current.open()},[]),a=u.useCallback(()=>{if(!e.current)throw h;return e.current.cancel()},[]),c=u.useCallback(()=>{if(!e.current)throw h;return e.current.close()},[]),g=u.useCallback(()=>{if(!e.current)throw h;return e.current.ok()},[]);return u.useEffect(()=>{if(e.current)return e.current.addOpenChangeListener(t)},[]),[e,{open:s,cancel:a,close:c,ok:g,isOpen:i}]},Pe={title:"Modals/Dialog",component:b,parameters:{docs:{description:{component:"metadata"}}}},w={args:{title:"Test Dialog",description:"Hello, I am a test dialog"},render:n=>{const[e,i]=u.useState(!1);return y(ie,{children:[l(m,{onClick:()=>i(!0),children:"Open dialog"}),l(b,{...n,open:e,onOpenChange:i})]})}},x={...w,play:async({canvasElement:n,args:e})=>{const t=r(n).getByText("Open dialog");p.click(t);const s=await V(document.body,e.title),a=await V(document.body,e.description);await d(()=>o(s).toBeVisible()),await d(()=>o(a).toBeVisible());const c=await B(document.body,"dialog"),g=await r(c).findByRole("button",{name:"Close"});o(g).toBeVisible(),p.click(g),await d(()=>o(c).not.toBeVisible())}},f={...w,args:{...w.args,title:void 0},play:async({canvasElement:n})=>{const i=r(n).getByText("Open dialog");p.click(i);const t=await B(document.body,"dialog");await d(()=>o(t).toBeVisible()),o(t.getElementsByTagName("h2")).toHaveLength(0)}},k={...w,args:{...w.args,closeButtonIcon:!1},play:async({canvasElement:n})=>{const i=r(n).getByText("Open dialog");p.click(i);const t=await B(document.body,"dialog");await d(()=>o(t).toBeVisible()),o(se(t,"button",{name:"Close"})).not.toBeInTheDocument()}},T={...w,args:{children:l("div",{children:l("p",{children:"Some custom content"})})},play:async({canvasElement:n})=>{const i=r(n).getByText("Open dialog");p.click(i);const t=await B(document.body,"dialog");await d(()=>o(t).toBeVisible());const s=r(t).getByText("Some custom content");o(s).toBeVisible()}},C={render:()=>{const[n,e]=u.useState(!1);return y("div",{children:[l(b,{open:n,onOpenChange:e,title:"Simple State Dialog",children:l("div",{children:"Here is some content"})}),l(m,{onClick:()=>e(!0),children:"Open simple state dialog"})]})},play:async({canvasElement:n})=>{const i=r(n).getByText("Open simple state dialog");p.click(i);const t=await B(document.body,"dialog");await d(()=>o(t).toBeVisible());const s=r(t).getByText("Here is some content");o(s).toBeVisible();const a=await r(t).findByRole("button",{name:"Close"});o(a).toBeVisible(),p.click(a),await d(()=>o(t).not.toBeVisible())}},R={render:()=>{const[n,{open:e,ok:i,cancel:t,isOpen:s}]=v(),[a,c]=u.useState("idle"),g=u.useCallback(async()=>{const{action:E}=await e();c(E)},[e,c]);return y("div",{children:[l(b,{ref:n,title:"Are you sure?",description:"Actions have consequences, would you like to continue anyway?",children:y("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[l(m,{"aria-label":"OK",onClick:i,displayStatus:"positive",children:"OK"}),l(m,{"aria-label":"Cancel",onClick:t,displayStatus:"negative",children:"Cancel"})]})}),l(m,{onClick:g,children:"Open confirmation dialog"}),l("div",{"data-testid":"dialog-result",children:a}),l("div",{"data-testid":"dialog-is-open",children:s?"open":"closed"})]})},play:async({canvasElement:n})=>{const e=r(n).getByTestId("dialog-is-open");o(e).toHaveTextContent("closed");const t=r(n).getByText("Open confirmation dialog");p.click(t);let s=await B(document.body,"dialog");await d(()=>o(s).toBeVisible()),o(e).toHaveTextContent("open");const a=r(n).getByTestId("dialog-result");o(a).toHaveTextContent("idle");const c=r(s).getByRole("button",{name:"OK"});o(c).toBeVisible(),p.click(c),await d(()=>o(s).not.toBeVisible()),await d(()=>o(a).toHaveTextContent("ok")),p.click(t),s=await B(document.body,"dialog"),await d(()=>o(s).toBeVisible());const g=r(s).getByRole("button",{name:"Cancel"});o(g).toBeVisible(),p.click(g),await d(()=>o(s).not.toBeVisible()),await d(()=>o(a).toHaveTextContent("cancel"))}},ne=u.forwardRef((n,e)=>{const[i,{cancel:t}]=v(e);return y(b,{ref:i,title:"Reusable dialog",children:[l("div",{children:"This custom dialog can be used throughout the app just like an Armstrong dialog!"}),l(m,{onClick:t,style:{marginTop:"16px"},"aria-label":"Cancel",children:"Cancel"})]})});ne.displayName="ReusableDialogExample";const D={render:()=>{const[n,{open:e}]=v();return y("div",{children:[l(ne,{ref:n}),l(m,{onClick:e,children:"Open reusable dialog"})]})},play:async({canvasElement:n})=>{const i=r(n).getByText("Open reusable dialog");p.click(i);const t=await B(document.body,"dialog");await d(()=>o(t).toBeVisible());const s=await V(document.body,"Reusable dialog");await d(()=>o(s).toBeVisible());const a=r(t).getByRole("button",{name:"Cancel"});p.click(a),await d(()=>o(t).not.toBeVisible())}},oe=u.forwardRef((n,e)=>{const[i,{ok:t}]=v(e),{formProp:s,formState:a}=le(),c=u.useCallback(g=>{g.preventDefault(),t()},[t]);return l(b,{ref:i,title:"Login",data:a,children:y("form",{onSubmit:c,children:[l(S,{type:"text",bind:s("username").bind(),placeholder:"Username"}),l(S,{type:"password",bind:s("password").bind(),placeholder:"Password"}),l(m,{type:"submit","aria-label":"Login",disabled:!(a!=null&&a.username)||!(a!=null&&a.password),style:{marginTop:"16px"},children:"Login"})]})})});oe.displayName="LoginDialog";const O={render:()=>{const[n,{open:e}]=v(),[i,t]=u.useState("idle"),s=u.useCallback(async()=>{const{action:a,data:c}=await e();t(`${a}, username: ${c==null?void 0:c.username}, password: ${c==null?void 0:c.password}`)},[e,t]);return y("div",{children:[l(oe,{ref:n}),l(m,{onClick:s,children:"Open login dialog"}),l("div",{"data-testid":"dialog-result",children:i})]})},play:async({canvasElement:n})=>{const e="test@example.com",i="test-password",s=r(n).getByText("Open login dialog");p.click(s);const a=await B(document.body,"dialog");await d(()=>o(a).toBeVisible());const c=r(n).getByTestId("dialog-result");o(c).toHaveTextContent("idle");const g=r(a).getByPlaceholderText("Username");p.type(g,e);const E=r(a).getByPlaceholderText("Password");p.type(E,i);const ae=r(a).getByRole("button",{name:"Login"});p.click(ae),await d(()=>o(a).not.toBeVisible()),await d(()=>o(c).toHaveTextContent(`ok, username: ${e}, password: ${i}`))}};var F,H,I;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(I=(H=x.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var P,L,N;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(N=(L=f.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var $,A,U;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(U=(A=k.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var K,q,j;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(j=(q=T.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var M,_,z;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(z=(_=C.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var G,J,Q;R.parameters={...R.parameters,docs:{...(G=R.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [dialogRef, {
      open,
      ok,
      cancel,
      isOpen
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
        <div data-testid="dialog-is-open">{isOpen ? 'open' : 'closed'}</div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    // expect open state closed
    const openState = within(canvasElement).getByTestId('dialog-is-open');
    expect(openState).toHaveTextContent('closed');

    // open dialog
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open confirmation dialog');
    userEvent.click(openButton);

    // wait for visibility
    let dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // expect open state open
    expect(openState).toHaveTextContent('open');

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
}`,...(Q=(J=R.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var W,X,Y;D.parameters={...D.parameters,docs:{...(W=D.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=D.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;O.parameters={...O.parameters,docs:{...(Z=O.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=O.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Le=["Default","NoTitle","NoCloseButton","CustomContent","SimpleStateDialog","AsyncDialog","ReusableDialog","ReusableFormDialog"];export{R as AsyncDialog,T as CustomContent,x as Default,k as NoCloseButton,f as NoTitle,D as ReusableDialog,O as ReusableFormDialog,C as SimpleStateDialog,Le as __namedExportsOrder,Pe as default};
