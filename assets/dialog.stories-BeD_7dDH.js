import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{c as de,w as p,e as c,u as m,b as w,a as u,f as ee,d as X,q as nt}from"./index-BmZcwVSF.js";import{r as f,R as d}from"./index-DwQS_Y10.js";import{d as ot,P as M,b as H,c as at,a as st,g as it}from"./index-CWQsrU90.js";import{u as te}from"./index-DKCiyFsV.js";import{u as Q}from"./index-hWMLfxWy.js";import{D as lt}from"./index-D-iaL4kR.js";import{R as ct,h as rt,u as dt,F as ut}from"./index-B2Q3jSsz.js";import{P as _e}from"./index-CC-sFNo4.js";import{r as pt}from"./index-BY2j7gpI.js";import{u as gt}from"./config.context-D0elZNgh.js";import{B as x}from"./button.component-Cl1KWafa.js";import{I as ue}from"./input.component-C3468qP-.js";import{u as mt}from"./label.component-tMLxsqsi.js";var Y="Dialog",[Ae]=at(Y),[ft,b]=Ae(Y),He=e=>{const{__scopeDialog:t,children:o,open:n,defaultOpen:i,onOpenChange:a,modal:l=!0}=e,r=f.useRef(null),g=f.useRef(null),[y,R]=ot({prop:n,defaultProp:i??!1,onChange:a,caller:Y});return s.jsx(ft,{scope:t,triggerRef:r,contentRef:g,contentId:Q(),titleId:Q(),descriptionId:Q(),open:y,onOpenChange:R,onOpenToggle:f.useCallback(()=>R(Z=>!Z),[R]),modal:l,children:o})};He.displayName=Y;var Me="DialogTrigger",yt=f.forwardRef((e,t)=>{const{__scopeDialog:o,...n}=e,i=b(Me,o),a=te(t,i.triggerRef);return s.jsx(M.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":oe(i.open),...n,ref:a,onClick:H(e.onClick,i.onOpenToggle)})});yt.displayName=Me;var vt="DialogPortal",[zt,Le]=Ae(vt,{forceMount:void 0}),z="DialogOverlay",Ue=f.forwardRef((e,t)=>{const o=Le(z,e.__scopeDialog),{forceMount:n=o.forceMount,...i}=e,a=b(z,e.__scopeDialog);return a.modal?s.jsx(_e,{present:n||a.open,children:s.jsx(wt,{...i,ref:t})}):null});Ue.displayName=z;var Bt=st("DialogOverlay.RemoveScroll"),wt=f.forwardRef((e,t)=>{const{__scopeDialog:o,...n}=e,i=b(z,o);return s.jsx(ct,{as:Bt,allowPinchZoom:!0,shards:[i.contentRef],children:s.jsx(M.div,{"data-state":oe(i.open),...n,ref:t,style:{pointerEvents:"auto",...n.style}})})}),k="DialogContent",We=f.forwardRef((e,t)=>{const o=Le(k,e.__scopeDialog),{forceMount:n=o.forceMount,...i}=e,a=b(k,e.__scopeDialog);return s.jsx(_e,{present:n||a.open,children:a.modal?s.jsx(bt,{...i,ref:t}):s.jsx(xt,{...i,ref:t})})});We.displayName=k;var bt=f.forwardRef((e,t)=>{const o=b(k,e.__scopeDialog),n=f.useRef(null),i=te(t,o.contentRef,n);return f.useEffect(()=>{const a=n.current;if(a)return rt(a)},[]),s.jsx($e,{...e,ref:i,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:H(e.onCloseAutoFocus,a=>{var l;a.preventDefault(),(l=o.triggerRef.current)==null||l.focus()}),onPointerDownOutside:H(e.onPointerDownOutside,a=>{const l=a.detail.originalEvent,r=l.button===0&&l.ctrlKey===!0;(l.button===2||r)&&a.preventDefault()}),onFocusOutside:H(e.onFocusOutside,a=>a.preventDefault())})}),xt=f.forwardRef((e,t)=>{const o=b(k,e.__scopeDialog),n=f.useRef(!1),i=f.useRef(!1);return s.jsx($e,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var l,r;(l=e.onCloseAutoFocus)==null||l.call(e,a),a.defaultPrevented||(n.current||(r=o.triggerRef.current)==null||r.focus(),a.preventDefault()),n.current=!1,i.current=!1},onInteractOutside:a=>{var g,y;(g=e.onInteractOutside)==null||g.call(e,a),a.defaultPrevented||(n.current=!0,a.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const l=a.target;((y=o.triggerRef.current)==null?void 0:y.contains(l))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&i.current&&a.preventDefault()}})}),$e=f.forwardRef((e,t)=>{const{__scopeDialog:o,trapFocus:n,onOpenAutoFocus:i,onCloseAutoFocus:a,...l}=e,r=b(k,o),g=f.useRef(null),y=te(t,g);return dt(),s.jsxs(s.Fragment,{children:[s.jsx(ut,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:i,onUnmountAutoFocus:a,children:s.jsx(lt,{role:"dialog",id:r.contentId,"aria-describedby":r.descriptionId,"aria-labelledby":r.titleId,"data-state":oe(r.open),...l,ref:y,onDismiss:()=>r.onOpenChange(!1)})}),s.jsxs(s.Fragment,{children:[s.jsx(ht,{titleId:r.titleId}),s.jsx(kt,{contentRef:g,descriptionId:r.descriptionId})]})]})}),ne="DialogTitle",Ge=f.forwardRef((e,t)=>{const{__scopeDialog:o,...n}=e,i=b(ne,o);return s.jsx(M.h2,{id:i.titleId,...n,ref:t})});Ge.displayName=ne;var qe="DialogDescription",Ke=f.forwardRef((e,t)=>{const{__scopeDialog:o,...n}=e,i=b(qe,o);return s.jsx(M.p,{id:i.descriptionId,...n,ref:t})});Ke.displayName=qe;var ze="DialogClose",Ye=f.forwardRef((e,t)=>{const{__scopeDialog:o,...n}=e,i=b(ze,o);return s.jsx(M.button,{type:"button",...n,ref:t,onClick:H(e.onClick,()=>i.onOpenChange(!1))})});Ye.displayName=ze;function oe(e){return e?"open":"closed"}var Ze="DialogTitleWarning",[Yt,Je]=it(Ze,{contentName:k,titleName:ne,docsSlug:"dialog"}),ht=({titleId:e})=>{const t=Je(Ze),o=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return f.useEffect(()=>{e&&(document.getElementById(e)||console.error(o))},[o,e]),null},Ct="DialogDescriptionWarning",kt=({contentRef:e,descriptionId:t})=>{const n=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Je(Ct).contentName}}.`;return f.useEffect(()=>{var a;const i=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");t&&i&&(document.getElementById(t)||console.warn(n))},[n,e,t]),null},Rt=He,Dt=Ue,Tt=We,Et=Ge,Ot=Ke,jt=Ye;const Nt=e=>{const t=d.useRef(void 0);return d.useEffect(()=>{t.current=e},[e]),t.current},pe=e=>Nt(e)!==e,C=e=>{const{ref:t,children:o,title:n,description:i,closeButtonIcon:a,open:l,onOpenChange:r,onClose:g,className:y,data:R,overlayClassName:Z,testId:et,delayCloseFor:D,onBeforeUnload:J,...tt}=e,U=gt({dialogCloseButtonIcon:a}),[h,W]=d.useState(l?void 0:"close"),[O,$]=d.useState(l),G=d.useRef(null),ae=pe(h),se=pe(l),q=d.useRef([]),v=d.useCallback(async B=>{if(J){const T=J(B);return T instanceof Promise?T:Promise.resolve(T)}return!0},[J]),j=d.useCallback(async B=>{if(!(B===!1&&await(v==null?void 0:v("close"))===!1)){if(W(B?void 0:"close"),!B&&D){setTimeout(()=>{$(!1)},D);return}$(B)}},[D,v]),ie=d.useCallback(()=>new Promise(B=>{j(!0),G.current=B}),[j]),le=d.useCallback(async()=>{await(v==null?void 0:v("ok"))!==!1&&W("ok")},[v]),ce=d.useCallback(async()=>{await(v==null?void 0:v("close"))!==!1&&W("close")},[v]),re=d.useCallback(async()=>{await(v==null?void 0:v("cancel"))!==!1&&W("cancel")},[v]);return d.useImperativeHandle(t,()=>({open:ie,close:ce,ok:le,cancel:re,isOpen:!!O,addOpenChangeListener:B=>(q.current.push(B),()=>{q.current=q.current.filter(T=>T!==B)})}),[ie,re,ce,le,O]),d.useEffect(()=>{h&&G.current&&(G.current({action:h,data:R}),G.current=null),ae&&(r==null||r(!h),h&&(g==null||g(),D?setTimeout(()=>{$(!1)},D):$(!1)))},[ae,h,R,r,g,D]),d.useEffect(()=>{se&&l!==void 0&&j(l)},[l,j,se]),d.useEffect(()=>{q.current.forEach(B=>B(!!O))},[O]),s.jsx(Rt,{open:O,onOpenChange:j,children:U.globalPortalTo&&pt.createPortal(s.jsx(Dt,{className:de("arm-dialog-overlay",Z),"data-visible":!h,children:s.jsxs(Tt,{className:de("arm-dialog",y),"data-has-title":n?!0:void 0,"data-testid":et,"data-visible":!h,...tt,children:[n&&s.jsx(Et,{className:"arm-dialog-title",children:n}),i&&s.jsx(Ot,{className:"arm-dialog-description",children:i}),o&&s.jsx("div",{className:"arm-dialog-content",children:o}),U.dialogCloseButtonIcon!==!1&&s.jsx(jt,{className:"arm-dialog-close","aria-label":"Close",children:U.dialogCloseButtonIcon})]})}),U.globalPortalTo)})};C.displayName="Dialog";C.__docgenInfo={description:"Dialog component. Used to display a full-screen modal dialog to the user.\n- Can be state controlled with `open` and `onOpenChange` props.\n- Can be async by assigning a ref and calling the utility functions (a `useDialog` helper hook is available for this.)\n- Supports dynamic data in async mode, so that a form can be built as a reusable async dialog.",methods:[{name:"addOpenChangeListener",docblock:null,modifiers:[],params:[{name:"listener",optional:!1,type:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}},alias:"OpenChangeListener"}}],returns:null}],displayName:"Dialog",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<DialogElement<unknown> | null>",elements:[{name:"union",raw:"DialogElement<unknown> | null",elements:[{name:"DialogElement",elements:[{name:"unknown"}],raw:"DialogElement<unknown>"},{name:"null"}]}]},description:""}}};const K=new Error("Dialog function called on an invalid dialog, are you sure you've added the ref to the Armstrong <Dialog> component?"),L=e=>{const t=d.useRef(null),[o,n]=d.useState(!1);d.useImperativeHandle(e,()=>t.current);const i=d.useCallback(()=>{if(!t.current)throw K;return t.current.open()},[]),a=d.useCallback(()=>{if(!t.current)throw K;return t.current.cancel()},[]),l=d.useCallback(()=>{if(!t.current)throw K;return t.current.close()},[]),r=d.useCallback(()=>{if(!t.current)throw K;return t.current.ok()},[]);return d.useEffect(()=>{if(t.current)return t.current.addOpenChangeListener(n)},[]),[t,{open:i,cancel:a,close:l,ok:r,isOpen:o}]},Pt={title:"Modals/Dialog",component:C,parameters:{docs:{description:{component:"metadata"}}}},E={args:{title:"Test Dialog",description:"Hello, I am a test dialog",onClose:ee()},render:e=>{const[t,o]=d.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(x,{onClick:()=>o(!0),children:"Open dialog"}),s.jsx(C,{...e,open:t,onOpenChange:o})]})}},N={...E,play:async({canvasElement:e,args:t})=>{const n=p(e).getByText("Open dialog");m.click(n);const i=await X(document.body,t.title),a=await X(document.body,t.description);await u(()=>c(i).toBeVisible()),await u(()=>c(a).toBeVisible());const l=await w(document.body,"dialog"),r=await p(l).findByRole("button",{name:"Close"});c(r).toBeVisible(),m.click(r),await u(()=>c(l).not.toBeVisible())}},P={...E,args:{...E.args,title:void 0},play:async({canvasElement:e})=>{const o=p(e).getByText("Open dialog");m.click(o);const n=await w(document.body,"dialog");await u(()=>c(n).toBeVisible()),c(n.getElementsByTagName("h2")).toHaveLength(0)}},V={...E,args:{...E.args,closeButtonIcon:!1},play:async({canvasElement:e})=>{const o=p(e).getByText("Open dialog");m.click(o);const n=await w(document.body,"dialog");await u(()=>c(n).toBeVisible()),c(nt(n,"button",{name:"Close"})).not.toBeInTheDocument()}},I={...E,args:{children:s.jsx("div",{children:s.jsx("p",{children:"Some custom content"})}),onClose:ee()},play:async({canvasElement:e})=>{const o=p(e).getByText("Open dialog");m.click(o);const n=await w(document.body,"dialog");await u(()=>c(n).toBeVisible());const i=p(n).getByText("Some custom content");c(i).toBeVisible()}},S={render:()=>{const[e,t]=d.useState(!1);return s.jsxs("div",{children:[s.jsx(C,{open:e,onOpenChange:t,title:"Simple State Dialog",children:s.jsx("div",{children:"Here is some content"})}),s.jsx(x,{onClick:()=>t(!0),children:"Open simple state dialog"})]})},play:async({canvasElement:e})=>{const o=p(e).getByText("Open simple state dialog");m.click(o);const n=await w(document.body,"dialog");await u(()=>c(n).toBeVisible());const i=p(n).getByText("Here is some content");c(i).toBeVisible();const a=await p(n).findByRole("button",{name:"Close"});c(a).toBeVisible(),m.click(a),await u(()=>c(n).not.toBeVisible())}},F={args:{onBeforeUnload:ee()},render:({onBeforeUnload:e})=>{const[t,{open:o,ok:n,cancel:i,isOpen:a}]=L(),[l,r]=d.useState("idle"),g=d.useCallback(async()=>{const{action:y}=await o();r(y)},[o,r]);return s.jsxs("div",{children:[s.jsx(C,{ref:t,title:"Are you sure?",onBeforeUnload:e,description:"Actions have consequences, would you like to continue anyway?",children:s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[s.jsx(x,{"aria-label":"OK",onClick:n,displayStatus:"positive",children:"OK"}),s.jsx(x,{"aria-label":"Cancel",onClick:i,displayStatus:"negative",children:"Cancel"})]})}),s.jsx(x,{onClick:g,children:"Open confirmation dialog"}),s.jsx("div",{"data-testid":"dialog-result",children:l}),s.jsx("div",{"data-testid":"dialog-is-open",children:a?"open":"closed"})]})},play:async({canvasElement:e,args:t})=>{const o=t.onBeforeUnload;o.mockReturnValue(!0);const n=p(e).getByTestId("dialog-is-open");c(n).toHaveTextContent("closed");const a=p(e).getByText("Open confirmation dialog");m.click(a);let l=await w(document.body,"dialog");await u(()=>c(l).toBeVisible()),c(n).toHaveTextContent("open");const r=p(e).getByTestId("dialog-result");c(r).toHaveTextContent("idle");const g=p(l).getByRole("button",{name:"OK"});c(g).toBeVisible(),m.click(g),await u(()=>c(l).not.toBeVisible()),await u(()=>c(r).toHaveTextContent("ok")),c(t.onBeforeUnload).toHaveBeenNthCalledWith(1,"ok"),m.click(a),l=await w(document.body,"dialog"),await u(()=>c(l).toBeVisible());let y=p(l).getByRole("button",{name:"Cancel"});c(y).toBeVisible(),m.click(y),await u(()=>c(l).not.toBeVisible()),await u(()=>c(r).toHaveTextContent("cancel")),c(t.onBeforeUnload).toHaveBeenNthCalledWith(2,"cancel"),o.mockReturnValue(!1),m.click(a),l=await w(document.body,"dialog"),await u(()=>c(l).toBeVisible()),y=p(l).getByRole("button",{name:"Cancel"}),m.click(y),await u(()=>c(t.onBeforeUnload).toHaveBeenNthCalledWith(3,"cancel")),await u(()=>c(l).toBeVisible()),o.mockReturnValue(!0),m.click(y),await u(()=>c(l).not.toBeVisible())}},Qe=({ref:e})=>{const[t,{cancel:o}]=L(e);return s.jsxs(C,{ref:t,title:"Reusable dialog",children:[s.jsx("div",{children:"This custom dialog can be used throughout the app just like an Armstrong dialog!"}),s.jsx(x,{onClick:o,style:{marginTop:"16px"},"aria-label":"Cancel",children:"Cancel"})]})};Qe.displayName="ReusableDialogExample";const _={render:()=>{const[e,{open:t}]=L();return s.jsxs("div",{children:[s.jsx(Qe,{ref:e}),s.jsx(x,{onClick:t,children:"Open reusable dialog"})]})},play:async({canvasElement:e})=>{const o=p(e).getByText("Open reusable dialog");m.click(o);const n=await w(document.body,"dialog");await u(()=>c(n).toBeVisible());const i=await X(document.body,"Reusable dialog");await u(()=>c(i).toBeVisible());const a=p(n).getByRole("button",{name:"Cancel"});m.click(a),await u(()=>c(n).not.toBeVisible())}},Xe=({ref:e})=>{const[t,{ok:o}]=L(e),{formProp:n,formState:i}=mt(),a=d.useCallback(l=>{l.preventDefault(),o()},[o]);return s.jsx(C,{ref:t,title:"Login",data:i,children:s.jsxs("form",{onSubmit:a,children:[s.jsx(ue,{type:"text",bind:n("username").bind(),placeholder:"Username"}),s.jsx(ue,{type:"password",bind:n("password").bind(),placeholder:"Password"}),s.jsx(x,{type:"submit","aria-label":"Login",disabled:!(i!=null&&i.username)||!(i!=null&&i.password),style:{marginTop:"16px"},children:"Login"})]})})};Xe.displayName="LoginDialog";const A={render:()=>{const[e,{open:t}]=L(),[o,n]=d.useState("idle"),i=d.useCallback(async()=>{const{action:a,data:l}=await t();n(`${a}, username: ${l==null?void 0:l.username}, password: ${l==null?void 0:l.password}`)},[t,n]);return s.jsxs("div",{children:[s.jsx(Xe,{ref:e}),s.jsx(x,{onClick:i,children:"Open login dialog"}),s.jsx("div",{"data-testid":"dialog-result",children:o})]})},play:async({canvasElement:e})=>{const t="test@example.com",o="test-password",i=p(e).getByText("Open login dialog");m.click(i);const a=await w(document.body,"dialog");await u(()=>c(a).toBeVisible());const l=p(e).getByTestId("dialog-result");c(l).toHaveTextContent("idle");const r=p(a).getByPlaceholderText("Username");await m.type(r,t);const g=p(a).getByPlaceholderText("Password");await m.type(g,o);const y=p(a).getByRole("button",{name:"Login"});m.click(y),await u(()=>c(a).not.toBeVisible()),await u(()=>c(l).toHaveTextContent(`ok, username: ${t}, password: ${o}`))}};var ge,me,fe;N.parameters={...N.parameters,docs:{...(ge=N.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(fe=(me=N.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ye,ve,Be;P.parameters={...P.parameters,docs:{...(ye=P.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Be=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:Be.source}}};var we,be,xe;V.parameters={...V.parameters,docs:{...(we=V.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(xe=(be=V.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var he,Ce,ke;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ke=(Ce=I.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var Re,De,Te;S.parameters={...S.parameters,docs:{...(Re=S.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Te=(De=S.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var Ee,Oe,je;F.parameters={...F.parameters,docs:{...(Ee=F.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(je=(Oe=F.parameters)==null?void 0:Oe.docs)==null?void 0:je.source}}};var Ne,Pe,Ve;_.parameters={..._.parameters,docs:{...(Ne=_.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ve=(Pe=_.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var Ie,Se,Fe;A.parameters={...A.parameters,docs:{...(Ie=A.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Fe=(Se=A.parameters)==null?void 0:Se.docs)==null?void 0:Fe.source}}};const Vt=["Default","NoTitle","NoCloseButton","CustomContent","SimpleStateDialog","AsyncDialog","ReusableDialog","ReusableFormDialog"],Zt=Object.freeze(Object.defineProperty({__proto__:null,AsyncDialog:F,CustomContent:I,Default:N,NoCloseButton:V,NoTitle:P,ReusableDialog:_,ReusableFormDialog:A,SimpleStateDialog:S,__namedExportsOrder:Vt,default:Pt},Symbol.toStringTag,{value:"Module"}));export{F as A,C as D,_ as R,S,N as a,A as b,Zt as d};
