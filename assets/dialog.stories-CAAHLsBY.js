import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{c as re,w as p,e as r,u as m,b as B,a as u,f as X,d as Q,q as tt}from"./index-BmZcwVSF.js";import{r as c}from"./index-DwQS_Y10.js";import{d as nt,P as H,b as A,c as ot,a as at,g as st}from"./index-CWQsrU90.js";import{u as ee}from"./index-DKCiyFsV.js";import{u as J}from"./index-hWMLfxWy.js";import{D as it}from"./index-D-iaL4kR.js";import{R as lt,h as ct,u as rt,F as dt}from"./index-B2Q3jSsz.js";import{P as Fe}from"./index-CC-sFNo4.js";import{r as ut}from"./index-BY2j7gpI.js";import{u as pt}from"./config.context-Db4Op3G9.js";import{B as b}from"./button.component-DGjVvDTT.js";import{I as de}from"./input.component-BYPt_Hb7.js";import{u as gt}from"./label.component-DRWWDUYP.js";var z="Dialog",[_e]=ot(z),[mt,w]=_e(z),Ae=e=>{const{__scopeDialog:t,children:o,open:n,defaultOpen:i,onOpenChange:a,modal:l=!0}=e,d=c.useRef(null),g=c.useRef(null),[f,k]=nt({prop:n,defaultProp:i??!1,onChange:a,caller:z});return s.jsx(mt,{scope:t,triggerRef:d,contentRef:g,contentId:J(),titleId:J(),descriptionId:J(),open:f,onOpenChange:k,onOpenToggle:c.useCallback(()=>k(Y=>!Y),[k]),modal:l,children:o})};Ae.displayName=z;var He="DialogTrigger",ft=c.forwardRef((e,t)=>{const{__scopeDialog:o,...n}=e,i=w(He,o),a=ee(t,i.triggerRef);return s.jsx(H.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":ne(i.open),...n,ref:a,onClick:A(e.onClick,i.onOpenToggle)})});ft.displayName=He;var yt="DialogPortal",[Kt,Me]=_e(yt,{forceMount:void 0}),K="DialogOverlay",Le=c.forwardRef((e,t)=>{const o=Me(K,e.__scopeDialog),{forceMount:n=o.forceMount,...i}=e,a=w(K,e.__scopeDialog);return a.modal?s.jsx(Fe,{present:n||a.open,children:s.jsx(Bt,{...i,ref:t})}):null});Le.displayName=K;var vt=at("DialogOverlay.RemoveScroll"),Bt=c.forwardRef((e,t)=>{const{__scopeDialog:o,...n}=e,i=w(K,o);return s.jsx(lt,{as:vt,allowPinchZoom:!0,shards:[i.contentRef],children:s.jsx(H.div,{"data-state":ne(i.open),...n,ref:t,style:{pointerEvents:"auto",...n.style}})})}),C="DialogContent",Ue=c.forwardRef((e,t)=>{const o=Me(C,e.__scopeDialog),{forceMount:n=o.forceMount,...i}=e,a=w(C,e.__scopeDialog);return s.jsx(Fe,{present:n||a.open,children:a.modal?s.jsx(wt,{...i,ref:t}):s.jsx(bt,{...i,ref:t})})});Ue.displayName=C;var wt=c.forwardRef((e,t)=>{const o=w(C,e.__scopeDialog),n=c.useRef(null),i=ee(t,o.contentRef,n);return c.useEffect(()=>{const a=n.current;if(a)return ct(a)},[]),s.jsx(We,{...e,ref:i,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:A(e.onCloseAutoFocus,a=>{var l;a.preventDefault(),(l=o.triggerRef.current)==null||l.focus()}),onPointerDownOutside:A(e.onPointerDownOutside,a=>{const l=a.detail.originalEvent,d=l.button===0&&l.ctrlKey===!0;(l.button===2||d)&&a.preventDefault()}),onFocusOutside:A(e.onFocusOutside,a=>a.preventDefault())})}),bt=c.forwardRef((e,t)=>{const o=w(C,e.__scopeDialog),n=c.useRef(!1),i=c.useRef(!1);return s.jsx(We,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var l,d;(l=e.onCloseAutoFocus)==null||l.call(e,a),a.defaultPrevented||(n.current||(d=o.triggerRef.current)==null||d.focus(),a.preventDefault()),n.current=!1,i.current=!1},onInteractOutside:a=>{var g,f;(g=e.onInteractOutside)==null||g.call(e,a),a.defaultPrevented||(n.current=!0,a.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const l=a.target;((f=o.triggerRef.current)==null?void 0:f.contains(l))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&i.current&&a.preventDefault()}})}),We=c.forwardRef((e,t)=>{const{__scopeDialog:o,trapFocus:n,onOpenAutoFocus:i,onCloseAutoFocus:a,...l}=e,d=w(C,o),g=c.useRef(null),f=ee(t,g);return rt(),s.jsxs(s.Fragment,{children:[s.jsx(dt,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:i,onUnmountAutoFocus:a,children:s.jsx(it,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":ne(d.open),...l,ref:f,onDismiss:()=>d.onOpenChange(!1)})}),s.jsxs(s.Fragment,{children:[s.jsx(xt,{titleId:d.titleId}),s.jsx(Ct,{contentRef:g,descriptionId:d.descriptionId})]})]})}),te="DialogTitle",$e=c.forwardRef((e,t)=>{const{__scopeDialog:o,...n}=e,i=w(te,o);return s.jsx(H.h2,{id:i.titleId,...n,ref:t})});$e.displayName=te;var Ge="DialogDescription",qe=c.forwardRef((e,t)=>{const{__scopeDialog:o,...n}=e,i=w(Ge,o);return s.jsx(H.p,{id:i.descriptionId,...n,ref:t})});qe.displayName=Ge;var Ke="DialogClose",ze=c.forwardRef((e,t)=>{const{__scopeDialog:o,...n}=e,i=w(Ke,o);return s.jsx(H.button,{type:"button",...n,ref:t,onClick:A(e.onClick,()=>i.onOpenChange(!1))})});ze.displayName=Ke;function ne(e){return e?"open":"closed"}var Ye="DialogTitleWarning",[zt,Ze]=st(Ye,{contentName:C,titleName:te,docsSlug:"dialog"}),xt=({titleId:e})=>{const t=Ze(Ye),o=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return c.useEffect(()=>{e&&(document.getElementById(e)||console.error(o))},[o,e]),null},ht="DialogDescriptionWarning",Ct=({contentRef:e,descriptionId:t})=>{const n=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ze(ht).contentName}}.`;return c.useEffect(()=>{var a;const i=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");t&&i&&(document.getElementById(t)||console.warn(n))},[n,e,t]),null},kt=Ae,Rt=Le,Dt=Ue,Tt=$e,Et=qe,Ot=ze;const jt=e=>{const t=c.useRef(void 0);return c.useEffect(()=>{t.current=e},[e]),t.current},ue=e=>jt(e)!==e,h=e=>{const{ref:t,children:o,title:n,description:i,closeButtonIcon:a,open:l,onOpenChange:d,onClose:g,className:f,data:k,overlayClassName:Y,testId:Xe,delayCloseFor:R,onBeforeUnload:Z,...et}=e,L=pt({dialogCloseButtonIcon:a}),[x,U]=c.useState(l?void 0:"close"),[E,W]=c.useState(l),$=c.useRef(null),oe=ue(x),ae=ue(l),G=c.useRef([]),y=c.useCallback(async v=>{if(Z){const D=Z(v);return D instanceof Promise?D:Promise.resolve(D)}return!0},[Z]),O=c.useCallback(async v=>{if(!(v===!1&&await(y==null?void 0:y("close"))===!1)){if(U(v?void 0:"close"),!v&&R){setTimeout(()=>{W(!1)},R);return}W(v)}},[R,y]),se=c.useCallback(()=>new Promise(v=>{O(!0),$.current=v}),[O]),ie=c.useCallback(async()=>{await(y==null?void 0:y("ok"))!==!1&&U("ok")},[y]),le=c.useCallback(async()=>{await(y==null?void 0:y("close"))!==!1&&U("close")},[y]),ce=c.useCallback(async()=>{await(y==null?void 0:y("cancel"))!==!1&&U("cancel")},[y]);return c.useImperativeHandle(t,()=>({open:se,close:le,ok:ie,cancel:ce,isOpen:!!E,addOpenChangeListener:v=>(G.current.push(v),()=>{G.current=G.current.filter(D=>D!==v)})}),[se,ce,le,ie,E]),c.useEffect(()=>{x&&$.current&&($.current({action:x,data:k}),$.current=null),oe&&(d==null||d(!x),x&&(g==null||g(),R?setTimeout(()=>{W(!1)},R):W(!1)))},[oe,x,k,d,g,R]),c.useEffect(()=>{ae&&l!==void 0&&O(l)},[l,O,ae]),c.useEffect(()=>{G.current.forEach(v=>v(!!E))},[E]),s.jsx(kt,{open:E,onOpenChange:O,children:L.globalPortalTo&&ut.createPortal(s.jsx(Rt,{className:re("arm-dialog-overlay",Y),"data-visible":!x,children:s.jsxs(Dt,{className:re("arm-dialog",f),"data-has-title":n?!0:void 0,"data-testid":Xe,"data-visible":!x,...et,children:[n&&s.jsx(Tt,{className:"arm-dialog-title",children:n}),i&&s.jsx(Et,{className:"arm-dialog-description",children:i}),o&&s.jsx("div",{className:"arm-dialog-content",children:o}),L.dialogCloseButtonIcon!==!1&&s.jsx(Ot,{className:"arm-dialog-close","aria-label":"Close",children:L.dialogCloseButtonIcon})]})}),L.globalPortalTo)})};h.displayName="Dialog";h.__docgenInfo={description:"Dialog component. Used to display a full-screen modal dialog to the user.\n- Can be state controlled with `open` and `onOpenChange` props.\n- Can be async by assigning a ref and calling the utility functions (a `useDialog` helper hook is available for this.)\n- Supports dynamic data in async mode, so that a form can be built as a reusable async dialog.",methods:[{name:"addOpenChangeListener",docblock:null,modifiers:[],params:[{name:"listener",optional:!1,type:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}},alias:"OpenChangeListener"}}],returns:null}],displayName:"Dialog",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<DialogElement<unknown> | null>",elements:[{name:"union",raw:"DialogElement<unknown> | null",elements:[{name:"DialogElement",elements:[{name:"unknown"}],raw:"DialogElement<unknown>"},{name:"null"}]}]},description:""}}};const q=new Error("Dialog function called on an invalid dialog, are you sure you've added the ref to the Armstrong <Dialog> component?"),M=e=>{const t=c.useRef(null),[o,n]=c.useState(!1);c.useImperativeHandle(e,()=>t.current);const i=c.useCallback(()=>{if(!t.current)throw q;return t.current.open()},[]),a=c.useCallback(()=>{if(!t.current)throw q;return t.current.cancel()},[]),l=c.useCallback(()=>{if(!t.current)throw q;return t.current.close()},[]),d=c.useCallback(()=>{if(!t.current)throw q;return t.current.ok()},[]);return c.useEffect(()=>{if(t.current)return t.current.addOpenChangeListener(n)},[]),[t,{open:i,cancel:a,close:l,ok:d,isOpen:o}]},Nt={title:"Modals/Dialog",component:h,parameters:{docs:{description:{component:"metadata"}}}},T={args:{title:"Test Dialog",description:"Hello, I am a test dialog",onClose:X()},render:e=>{const[t,o]=c.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(b,{onClick:()=>o(!0),children:"Open dialog"}),s.jsx(h,{...e,open:t,onOpenChange:o})]})}},j={...T,play:async({canvasElement:e,args:t})=>{const n=p(e).getByText("Open dialog");m.click(n);const i=await Q(document.body,t.title),a=await Q(document.body,t.description);await u(()=>r(i).toBeVisible()),await u(()=>r(a).toBeVisible());const l=await B(document.body,"dialog"),d=await p(l).findByRole("button",{name:"Close"});r(d).toBeVisible(),m.click(d),await u(()=>r(l).not.toBeVisible())}},N={...T,args:{...T.args,title:void 0},play:async({canvasElement:e})=>{const o=p(e).getByText("Open dialog");m.click(o);const n=await B(document.body,"dialog");await u(()=>r(n).toBeVisible()),r(n.getElementsByTagName("h2")).toHaveLength(0)}},P={...T,args:{...T.args,closeButtonIcon:!1},play:async({canvasElement:e})=>{const o=p(e).getByText("Open dialog");m.click(o);const n=await B(document.body,"dialog");await u(()=>r(n).toBeVisible()),r(tt(n,"button",{name:"Close"})).not.toBeInTheDocument()}},V={...T,args:{children:s.jsx("div",{children:s.jsx("p",{children:"Some custom content"})}),onClose:X()},play:async({canvasElement:e})=>{const o=p(e).getByText("Open dialog");m.click(o);const n=await B(document.body,"dialog");await u(()=>r(n).toBeVisible());const i=p(n).getByText("Some custom content");r(i).toBeVisible()}},I={render:()=>{const[e,t]=c.useState(!1);return s.jsxs("div",{children:[s.jsx(h,{open:e,onOpenChange:t,title:"Simple State Dialog",children:s.jsx("div",{children:"Here is some content"})}),s.jsx(b,{onClick:()=>t(!0),children:"Open simple state dialog"})]})},play:async({canvasElement:e})=>{const o=p(e).getByText("Open simple state dialog");m.click(o);const n=await B(document.body,"dialog");await u(()=>r(n).toBeVisible());const i=p(n).getByText("Here is some content");r(i).toBeVisible();const a=await p(n).findByRole("button",{name:"Close"});r(a).toBeVisible(),m.click(a),await u(()=>r(n).not.toBeVisible())}},S={args:{onBeforeUnload:X()},render:({onBeforeUnload:e})=>{const[t,{open:o,ok:n,cancel:i,isOpen:a}]=M(),[l,d]=c.useState("idle"),g=c.useCallback(async()=>{const{action:f}=await o();d(f)},[o,d]);return s.jsxs("div",{children:[s.jsx(h,{ref:t,title:"Are you sure?",onBeforeUnload:e,description:"Actions have consequences, would you like to continue anyway?",children:s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[s.jsx(b,{"aria-label":"OK",onClick:n,displayStatus:"positive",children:"OK"}),s.jsx(b,{"aria-label":"Cancel",onClick:i,displayStatus:"negative",children:"Cancel"})]})}),s.jsx(b,{onClick:g,children:"Open confirmation dialog"}),s.jsx("div",{"data-testid":"dialog-result",children:l}),s.jsx("div",{"data-testid":"dialog-is-open",children:a?"open":"closed"})]})},play:async({canvasElement:e,args:t})=>{const o=t.onBeforeUnload;o.mockReturnValue(!0);const n=p(e).getByTestId("dialog-is-open");r(n).toHaveTextContent("closed");const a=p(e).getByText("Open confirmation dialog");m.click(a);let l=await B(document.body,"dialog");await u(()=>r(l).toBeVisible()),r(n).toHaveTextContent("open");const d=p(e).getByTestId("dialog-result");r(d).toHaveTextContent("idle");const g=p(l).getByRole("button",{name:"OK"});r(g).toBeVisible(),m.click(g),await u(()=>r(l).not.toBeVisible()),await u(()=>r(d).toHaveTextContent("ok")),r(t.onBeforeUnload).toHaveBeenNthCalledWith(1,"ok"),m.click(a),l=await B(document.body,"dialog"),await u(()=>r(l).toBeVisible());let f=p(l).getByRole("button",{name:"Cancel"});r(f).toBeVisible(),m.click(f),await u(()=>r(l).not.toBeVisible()),await u(()=>r(d).toHaveTextContent("cancel")),r(t.onBeforeUnload).toHaveBeenNthCalledWith(2,"cancel"),o.mockReturnValue(!1),m.click(a),l=await B(document.body,"dialog"),await u(()=>r(l).toBeVisible()),f=p(l).getByRole("button",{name:"Cancel"}),m.click(f),await u(()=>r(t.onBeforeUnload).toHaveBeenNthCalledWith(3,"cancel")),await u(()=>r(l).toBeVisible()),o.mockReturnValue(!0),m.click(f),await u(()=>r(l).not.toBeVisible())}},Je=({ref:e})=>{const[t,{cancel:o}]=M(e);return s.jsxs(h,{ref:t,title:"Reusable dialog",children:[s.jsx("div",{children:"This custom dialog can be used throughout the app just like an Armstrong dialog!"}),s.jsx(b,{onClick:o,style:{marginTop:"16px"},"aria-label":"Cancel",children:"Cancel"})]})};Je.displayName="ReusableDialogExample";const F={render:()=>{const[e,{open:t}]=M();return s.jsxs("div",{children:[s.jsx(Je,{ref:e}),s.jsx(b,{onClick:t,children:"Open reusable dialog"})]})},play:async({canvasElement:e})=>{const o=p(e).getByText("Open reusable dialog");m.click(o);const n=await B(document.body,"dialog");await u(()=>r(n).toBeVisible());const i=await Q(document.body,"Reusable dialog");await u(()=>r(i).toBeVisible());const a=p(n).getByRole("button",{name:"Cancel"});m.click(a),await u(()=>r(n).not.toBeVisible())}},Qe=({ref:e})=>{const[t,{ok:o}]=M(e),{formProp:n,formState:i}=gt(),a=c.useCallback(l=>{l.preventDefault(),o()},[o]);return s.jsx(h,{ref:t,title:"Login",data:i,children:s.jsxs("form",{onSubmit:a,children:[s.jsx(de,{type:"text",bind:n("username").bind(),placeholder:"Username"}),s.jsx(de,{type:"password",bind:n("password").bind(),placeholder:"Password"}),s.jsx(b,{type:"submit","aria-label":"Login",disabled:!(i!=null&&i.username)||!(i!=null&&i.password),style:{marginTop:"16px"},children:"Login"})]})})};Qe.displayName="LoginDialog";const _={render:()=>{const[e,{open:t}]=M(),[o,n]=c.useState("idle"),i=c.useCallback(async()=>{const{action:a,data:l}=await t();n(`${a}, username: ${l==null?void 0:l.username}, password: ${l==null?void 0:l.password}`)},[t,n]);return s.jsxs("div",{children:[s.jsx(Qe,{ref:e}),s.jsx(b,{onClick:i,children:"Open login dialog"}),s.jsx("div",{"data-testid":"dialog-result",children:o})]})},play:async({canvasElement:e})=>{const t="test@example.com",o="test-password",i=p(e).getByText("Open login dialog");m.click(i);const a=await B(document.body,"dialog");await u(()=>r(a).toBeVisible());const l=p(e).getByTestId("dialog-result");r(l).toHaveTextContent("idle");const d=p(a).getByPlaceholderText("Username");await m.type(d,t);const g=p(a).getByPlaceholderText("Password");await m.type(g,o);const f=p(a).getByRole("button",{name:"Login"});m.click(f),await u(()=>r(a).not.toBeVisible()),await u(()=>r(l).toHaveTextContent(`ok, username: ${t}, password: ${o}`))}};var pe,ge,me;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
    const title = await findByText(document.body, args.title as string);
    const description = await findByText(document.body, args.description as string);
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
}`,...(me=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var fe,ye,ve;N.parameters={...N.parameters,docs:{...(fe=N.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ve=(ye=N.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var Be,we,be;P.parameters={...P.parameters,docs:{...(Be=P.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(be=(we=P.parameters)==null?void 0:we.docs)==null?void 0:be.source}}};var xe,he,Ce;V.parameters={...V.parameters,docs:{...(xe=V.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  ...Template,
  args: {
    children: <div>
        <p>Some custom content</p>
      </div>,
    onClose: fn()
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
}`,...(Ce=(he=V.parameters)==null?void 0:he.docs)==null?void 0:Ce.source}}};var ke,Re,De;I.parameters={...I.parameters,docs:{...(ke=I.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(De=(Re=I.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};var Te,Ee,Oe;S.parameters={...S.parameters,docs:{...(Te=S.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    onBeforeUnload: fn()
  },
  render: ({
    onBeforeUnload
  }) => {
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
        <Dialog ref={dialogRef} title="Are you sure?" onBeforeUnload={onBeforeUnload} description="Actions have consequences, would you like to continue anyway?">
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
    canvasElement,
    args
  }) => {
    const castMockBeforeUnload = args.onBeforeUnload as Mock;
    castMockBeforeUnload.mockReturnValue(true);

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

    // onBeforeUnload check
    expect(args.onBeforeUnload).toHaveBeenNthCalledWith(1, 'ok');

    // re-open dialog
    userEvent.click(openButton);
    dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // cancel button check
    let cancelButton = within(dialog).getByRole('button', {
      name: 'Cancel'
    });
    expect(cancelButton).toBeVisible();
    userEvent.click(cancelButton);
    await waitFor(() => expect(dialog).not.toBeVisible());
    await waitFor(() => expect(result).toHaveTextContent('cancel'));

    // onBeforeUnload check
    expect(args.onBeforeUnload).toHaveBeenNthCalledWith(2, 'cancel');

    // prevent close
    castMockBeforeUnload.mockReturnValue(false);

    // re-open dialog
    userEvent.click(openButton);
    dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());
    cancelButton = within(dialog).getByRole('button', {
      name: 'Cancel'
    });
    userEvent.click(cancelButton);
    await waitFor(() => expect(args.onBeforeUnload).toHaveBeenNthCalledWith(3, 'cancel'));
    await waitFor(() => expect(dialog).toBeVisible());

    // allow close again and close
    castMockBeforeUnload.mockReturnValue(true);
    userEvent.click(cancelButton);
    await waitFor(() => expect(dialog).not.toBeVisible());
  }
}`,...(Oe=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Oe.source}}};var je,Ne,Pe;F.parameters={...F.parameters,docs:{...(je=F.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Pe=(Ne=F.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.source}}};var Ve,Ie,Se;_.parameters={..._.parameters,docs:{...(Ve=_.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
    await userEvent.type(username, testUsername);
    const password = within(dialog).getByPlaceholderText<HTMLInputElement>('Password');
    await userEvent.type(password, testPassword);

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
}`,...(Se=(Ie=_.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}};const Pt=["Default","NoTitle","NoCloseButton","CustomContent","SimpleStateDialog","AsyncDialog","ReusableDialog","ReusableFormDialog"],Yt=Object.freeze(Object.defineProperty({__proto__:null,AsyncDialog:S,CustomContent:V,Default:j,NoCloseButton:P,NoTitle:N,ReusableDialog:F,ReusableFormDialog:_,SimpleStateDialog:I,__namedExportsOrder:Pt,default:Nt},Symbol.toStringTag,{value:"Module"}));export{S as A,h as D,F as R,I as S,j as a,_ as b,Yt as d};
