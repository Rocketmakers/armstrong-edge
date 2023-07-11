import{a as n,j as W}from"./jsx-runtime-63e4a166.js";import{w as l,u as i,f as v,e as a,b as T,a as P,c as X}from"./index-3ffc2e85.js";import{$ as Y,T as G,a as Z}from"./toast.component-0dc3f896.js";import{r as E}from"./index-c4905b50.js";import{r as tt}from"./index-07d1f67e.js";import{u as ot,A as et}from"./config.context-54240269.js";import{B as J}from"./button.component-53ebb88b.js";import"./index-999ec173.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";import"./index-c1bef199.js";import"./index-742b7287.js";import"./index-981f8501.js";import"./index-97ba0010.js";import"./index-f6c914d3.js";import"./index-56da5f9a.js";import"./index-3d4ae170.js";import"./classNames-9011e307.js";import"./spinner.component-5b0c70a5.js";const nt={addToast:()=>{throw new Error("Unable to dispatch toast, are you sure you've added either the <ArmstrongProvider> or <ToastProvider>?")}},K=E.createContext(nt),x=({children:t,duration:o,position:e,closeButtonIcon:c})=>{const[p,h]=E.useReducer((u,w)=>[...u,w],[]),s=ot({toastDuration:o,toastPosition:e,toastCloseButtonIcon:c}),Q=s.toastPosition==="bottom-left"||s.toastPosition==="top-left"?"left":"right";return n(K.Provider,{value:{addToast:h},children:W(Y,{swipeDirection:Q,duration:s.toastDuration,children:[t,p.map((u,w)=>n(G,{duration:s.toastDuration,position:s.toastPosition,closeButtonIcon:s.toastCloseButtonIcon,...u},`${u.title}-${w}`)),tt.createPortal(n(Z,{className:"arm-toast-viewport","data-position":s.toastPosition}),s.globalPortalTo)]})})};x.displayName="ToastProvider";try{x.displayName="ToastProvider",x.__docgenInfo={description:"The global toast context",displayName:"ToastProvider",props:{}}}catch{}const at=()=>{const{addToast:t}=E.useContext(K);return t},d=({children:t,config:o={}})=>n(et,{...o,children:n(x,{children:t})});try{d.displayName="ArmstrongProvider",d.__docgenInfo={description:"",displayName:"ArmstrongProvider",props:{config:{defaultValue:{value:"{}"},description:"A dictionary of optional global config, overrides the system defaults",name:"config",required:!1,type:{name:"IArmstrongConfig"}}}}}catch{}const At={title:"Modals/Toast",component:G,parameters:{docs:{description:{component:"metadata"}}}},r={args:{title:"Here is a toast!",description:"Here is the description for my toast"},decorators:[t=>n(d,{children:n(t,{})})],render:t=>{const o=at();return n(J,{onClick:()=>o(t),children:"Send a toast"})}},m={...r,play:async({canvasElement:t,args:o})=>{const e=l(t).getByText("Send a toast");i.click(e);const c=await v(document.body,o.title??""),p=await v(document.body,o.description??"");a(c).toBeVisible(),a(p).toBeVisible();const h=await T(document.body,"button",{name:"Close"});await P(()=>i.click(h)),await P(()=>Promise.all([a(c).not.toBeVisible(),a(p).not.toBeVisible()])),i.click(e),i.click(e);const s=await X(document.body,o.title??"");a(s).toHaveLength(2)}},y={...r,args:{...r.args,duration:100},play:async({canvasElement:t,args:o})=>{const e=l(t).getByText("Send a toast");i.click(e);const c=await v(document.body,o.title??"");a(c).toBeVisible(),await P(()=>a(c).not.toBeVisible(),{timeout:400})}},b={...r,decorators:[t=>n(d,{config:{toastPosition:"top-left"},children:n(t,{})})],play:async({canvasElement:t})=>{const o=l(t).getByText("Send a toast");i.click(o);const e=await T(document.body,"status",{name:"Notification"});a(e).toBeVisible(),a(e).toHaveAttribute("data-position","top-left")}},g={...r,decorators:[t=>n(d,{config:{toastPosition:"top-right"},children:n(t,{})})],play:async({canvasElement:t})=>{const o=l(t).getByText("Send a toast");i.click(o);const e=await T(document.body,"status",{name:"Notification"});a(e).toBeVisible(),a(e).toHaveAttribute("data-position","top-right")}},f={...r,decorators:[t=>n(d,{config:{toastPosition:"bottom-left"},children:n(t,{})})],play:async({canvasElement:t})=>{const o=l(t).getByText("Send a toast");i.click(o);const e=await T(document.body,"status",{name:"Notification"});a(e).toBeVisible(),a(e).toHaveAttribute("data-position","bottom-left")}},B={...r,args:{...r.args,content:n(J,{children:"Custom button"})},play:async({canvasElement:t})=>{const o=l(t).getByText("Send a toast");i.click(o);const e=await v(document.body,"Custom button");a(e).toBeVisible()}};var S,k,A,C,V;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Template,
  play: async ({
    canvasElement,
    args
  }) => {
    // launch toast
    const button = within(canvasElement).getByText('Send a toast');
    userEvent.click(button);

    // check title and description
    const title = await findByText(document.body, args.title ?? '');
    const description = await findByText(document.body, args.description ?? '');
    expect(title).toBeVisible();
    expect(description).toBeVisible();

    // check close
    const close = await findByRole(document.body, 'button', {
      name: 'Close'
    });
    await waitFor(() => userEvent.click(close));
    await waitFor(() => Promise.all([expect(title).not.toBeVisible(), expect(description).not.toBeVisible()]));

    // check multiple toasts
    userEvent.click(button);
    userEvent.click(button);
    const titles = await findAllByText(document.body, args.title ?? '');
    expect(titles).toHaveLength(2);
  }
}`,...(A=(k=m.parameters)==null?void 0:k.docs)==null?void 0:A.source},description:{story:"stories",...(V=(C=m.parameters)==null?void 0:C.docs)==null?void 0:V.description}}};var _,N,H;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    duration: 100
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByText('Send a toast');
    userEvent.click(button);
    const title = await findByText(document.body, args.title ?? '');
    expect(title).toBeVisible();
    // check auto-dismiss after custom dismiss time of 100ms + 300ms for animation
    await waitFor(() => expect(title).not.toBeVisible(), {
      timeout: 400
    });
  }
}`,...(H=(N=y.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var D,$,R;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Template,
  decorators: [Story => <ArmstrongProvider config={{
    toastPosition: 'top-left'
  }}>
        <Story />
      </ArmstrongProvider>],
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByText('Send a toast');
    userEvent.click(button);
    const toast = await findByRole(document.body, 'status', {
      name: 'Notification'
    });
    expect(toast).toBeVisible();
    expect(toast).toHaveAttribute('data-position', 'top-left');
  }
}`,...(R=($=b.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var I,L,F;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template,
  decorators: [Story => <ArmstrongProvider config={{
    toastPosition: 'top-right'
  }}>
        <Story />
      </ArmstrongProvider>],
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByText('Send a toast');
    userEvent.click(button);
    const toast = await findByRole(document.body, 'status', {
      name: 'Notification'
    });
    expect(toast).toBeVisible();
    expect(toast).toHaveAttribute('data-position', 'top-right');
  }
}`,...(F=(L=g.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var j,q,M;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Template,
  decorators: [Story => <ArmstrongProvider config={{
    toastPosition: 'bottom-left'
  }}>
        <Story />
      </ArmstrongProvider>],
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByText('Send a toast');
    userEvent.click(button);
    const toast = await findByRole(document.body, 'status', {
      name: 'Notification'
    });
    expect(toast).toBeVisible();
    expect(toast).toHaveAttribute('data-position', 'bottom-left');
  }
}`,...(M=(q=f.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var O,U,z;B.parameters={...B.parameters,docs:{...(O=B.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    content: <Button>Custom button</Button>
  },
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByText('Send a toast');
    userEvent.click(button);
    const customButton = await findByText(document.body, 'Custom button');
    expect(customButton).toBeVisible();
  }
}`,...(z=(U=B.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};const Ct=["Default","CustomDuration","TopLeft","TopRight","BottomLeft","CustomContent"];export{f as BottomLeft,B as CustomContent,y as CustomDuration,m as Default,b as TopLeft,g as TopRight,Ct as __namedExportsOrder,At as default};
//# sourceMappingURL=toast.stories-637de3bd.js.map
