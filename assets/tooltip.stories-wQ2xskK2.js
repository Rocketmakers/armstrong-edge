import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as X,w,u as T,e as m,a as R,f as ke}from"./index-BmZcwVSF.js";import{r as s,R as je}from"./index-DwQS_Y10.js";import{u as He,f as ge}from"./config.context-Db4Op3G9.js";import{d as Oe,P as _e,b as B,c as De,f as Ae}from"./index-CWQsrU90.js";import{u as ye}from"./index-DKCiyFsV.js";import{D as Le}from"./index-D-iaL4kR.js";import{u as Se}from"./index-hWMLfxWy.js";import{R as Ve,A as Me,a as Ne,c as fe,C as Fe}from"./index-DYVRbH_s.js";import{P as Ge,R as ze}from"./index-DHRVNcCi.js";import{P as ve}from"./index-CC-sFNo4.js";import{B as we}from"./button.component-DGjVvDTT.js";import"./index-BY2j7gpI.js";import"./index-Bls5tne7.js";import"./index-Bgmmd5SI.js";import"./floating-ui.react-dom-BSaGsYCm.js";import"./floating-ui.dom-9Spud0fE.js";import"./index-D3JXVD-Y.js";import"./spinner.component-C8cBclXj.js";var[N]=De("Tooltip",[fe]),F=fe(),Te="TooltipProvider",qe=700,G="tooltip.open",[Ue,q]=N(Te),xe=t=>{const{__scopeTooltip:o,delayDuration:e=qe,skipDelayDuration:n=300,disableHoverableContent:r=!1,children:l}=t,c=s.useRef(!0),g=s.useRef(!1),i=s.useRef(0);return s.useEffect(()=>{const d=i.current;return()=>window.clearTimeout(d)},[]),a.jsx(Ue,{scope:o,isOpenDelayedRef:c,delayDuration:e,onOpen:s.useCallback(()=>{window.clearTimeout(i.current),c.current=!1},[]),onClose:s.useCallback(()=>{window.clearTimeout(i.current),i.current=window.setTimeout(()=>c.current=!0,n)},[n]),isPointerInTransitRef:g,onPointerInTransitChange:s.useCallback(d=>{g.current=d},[]),disableHoverableContent:r,children:l})};xe.displayName=Te;var O="Tooltip",[We,_]=N(O),be=t=>{const{__scopeTooltip:o,children:e,open:n,defaultOpen:r,onOpenChange:l,disableHoverableContent:c,delayDuration:g}=t,i=q(O,t.__scopeTooltip),d=F(o),[p,h]=s.useState(null),y=Se(),u=s.useRef(0),f=c??i.disableHoverableContent,x=g??i.delayDuration,v=s.useRef(!1),[E,b]=Oe({prop:n,defaultProp:r??!1,onChange:Y=>{Y?(i.onOpen(),document.dispatchEvent(new CustomEvent(G))):i.onClose(),l==null||l(Y)},caller:O}),I=s.useMemo(()=>E?v.current?"delayed-open":"instant-open":"closed",[E]),k=s.useCallback(()=>{window.clearTimeout(u.current),u.current=0,v.current=!1,b(!0)},[b]),j=s.useCallback(()=>{window.clearTimeout(u.current),u.current=0,b(!1)},[b]),W=s.useCallback(()=>{window.clearTimeout(u.current),u.current=window.setTimeout(()=>{v.current=!0,b(!0),u.current=0},x)},[x,b]);return s.useEffect(()=>()=>{u.current&&(window.clearTimeout(u.current),u.current=0)},[]),a.jsx(Ve,{...d,children:a.jsx(We,{scope:o,contentId:y,open:E,stateAttribute:I,trigger:p,onTriggerChange:h,onTriggerEnter:s.useCallback(()=>{i.isOpenDelayedRef.current?W():k()},[i.isOpenDelayedRef,W,k]),onTriggerLeave:s.useCallback(()=>{f?j():(window.clearTimeout(u.current),u.current=0)},[j,f]),onOpen:k,onClose:j,disableHoverableContent:f,children:e})})};be.displayName=O;var z="TooltipTrigger",Ce=s.forwardRef((t,o)=>{const{__scopeTooltip:e,...n}=t,r=_(z,e),l=q(z,e),c=F(e),g=s.useRef(null),i=ye(o,g,r.onTriggerChange),d=s.useRef(!1),p=s.useRef(!1),h=s.useCallback(()=>d.current=!1,[]);return s.useEffect(()=>()=>document.removeEventListener("pointerup",h),[h]),a.jsx(Me,{asChild:!0,...c,children:a.jsx(_e.button,{"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute,...n,ref:i,onPointerMove:B(t.onPointerMove,y=>{y.pointerType!=="touch"&&!p.current&&!l.isPointerInTransitRef.current&&(r.onTriggerEnter(),p.current=!0)}),onPointerLeave:B(t.onPointerLeave,()=>{r.onTriggerLeave(),p.current=!1}),onPointerDown:B(t.onPointerDown,()=>{r.open&&r.onClose(),d.current=!0,document.addEventListener("pointerup",h,{once:!0})}),onFocus:B(t.onFocus,()=>{d.current||r.onOpen()}),onBlur:B(t.onBlur,r.onClose),onClick:B(t.onClick,r.onClose)})})});Ce.displayName=z;var U="TooltipPortal",[Ye,Xe]=N(U,{forceMount:void 0}),Ee=t=>{const{__scopeTooltip:o,forceMount:e,children:n,container:r}=t,l=_(U,o);return a.jsx(Ye,{scope:o,forceMount:e,children:a.jsx(ve,{present:e||l.open,children:a.jsx(Ge,{asChild:!0,container:r,children:n})})})};Ee.displayName=U;var P="TooltipContent",Re=s.forwardRef((t,o)=>{const e=Xe(P,t.__scopeTooltip),{forceMount:n=e.forceMount,side:r="top",...l}=t,c=_(P,t.__scopeTooltip);return a.jsx(ve,{present:n||c.open,children:c.disableHoverableContent?a.jsx(Be,{side:r,...l,ref:o}):a.jsx($e,{side:r,...l,ref:o})})}),$e=s.forwardRef((t,o)=>{const e=_(P,t.__scopeTooltip),n=q(P,t.__scopeTooltip),r=s.useRef(null),l=ye(o,r),[c,g]=s.useState(null),{trigger:i,onClose:d}=e,p=r.current,{onPointerInTransitChange:h}=n,y=s.useCallback(()=>{g(null),h(!1)},[h]),u=s.useCallback((f,x)=>{const v=f.currentTarget,E={x:f.clientX,y:f.clientY},b=Ze(E,v.getBoundingClientRect()),I=et(E,b),k=tt(x.getBoundingClientRect()),j=nt([...I,...k]);g(j),h(!0)},[h]);return s.useEffect(()=>()=>y(),[y]),s.useEffect(()=>{if(i&&p){const f=v=>u(v,p),x=v=>u(v,i);return i.addEventListener("pointerleave",f),p.addEventListener("pointerleave",x),()=>{i.removeEventListener("pointerleave",f),p.removeEventListener("pointerleave",x)}}},[i,p,u,y]),s.useEffect(()=>{if(c){const f=x=>{const v=x.target,E={x:x.clientX,y:x.clientY},b=(i==null?void 0:i.contains(v))||(p==null?void 0:p.contains(v)),I=!ot(E,c);b?y():I&&(y(),d())};return document.addEventListener("pointermove",f),()=>document.removeEventListener("pointermove",f)}},[i,p,c,d,y]),a.jsx(Be,{...t,ref:l})}),[Ke,Je]=N(O,{isInside:!1}),Qe=Ae("TooltipContent"),Be=s.forwardRef((t,o)=>{const{__scopeTooltip:e,children:n,"aria-label":r,onEscapeKeyDown:l,onPointerDownOutside:c,...g}=t,i=_(P,e),d=F(e),{onClose:p}=i;return s.useEffect(()=>(document.addEventListener(G,p),()=>document.removeEventListener(G,p)),[p]),s.useEffect(()=>{if(i.trigger){const h=y=>{const u=y.target;u!=null&&u.contains(i.trigger)&&p()};return window.addEventListener("scroll",h,{capture:!0}),()=>window.removeEventListener("scroll",h,{capture:!0})}},[i.trigger,p]),a.jsx(Le,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:h=>h.preventDefault(),onDismiss:p,children:a.jsxs(Fe,{"data-state":i.stateAttribute,...d,...g,ref:o,style:{...g.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[a.jsx(Qe,{children:n}),a.jsx(Ke,{scope:e,isInside:!0,children:a.jsx(ze,{id:i.contentId,role:"tooltip",children:r||n})})]})})});Re.displayName=P;var Pe="TooltipArrow",Ie=s.forwardRef((t,o)=>{const{__scopeTooltip:e,...n}=t,r=F(e);return Je(Pe,e).isInside?null:a.jsx(Ne,{...r,...n,ref:o})});Ie.displayName=Pe;function Ze(t,o){const e=Math.abs(o.top-t.y),n=Math.abs(o.bottom-t.y),r=Math.abs(o.right-t.x),l=Math.abs(o.left-t.x);switch(Math.min(e,n,r,l)){case l:return"left";case r:return"right";case e:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function et(t,o,e=5){const n=[];switch(o){case"top":n.push({x:t.x-e,y:t.y+e},{x:t.x+e,y:t.y+e});break;case"bottom":n.push({x:t.x-e,y:t.y-e},{x:t.x+e,y:t.y-e});break;case"left":n.push({x:t.x+e,y:t.y-e},{x:t.x+e,y:t.y+e});break;case"right":n.push({x:t.x-e,y:t.y-e},{x:t.x-e,y:t.y+e});break}return n}function tt(t){const{top:o,right:e,bottom:n,left:r}=t;return[{x:r,y:o},{x:e,y:o},{x:e,y:n},{x:r,y:n}]}function ot(t,o){const{x:e,y:n}=t;let r=!1;for(let l=0,c=o.length-1;l<o.length;c=l++){const g=o[l],i=o[c],d=g.x,p=g.y,h=i.x,y=i.y;p>n!=y>n&&e<(h-d)*(n-p)/(y-p)+d&&(r=!r)}return r}function nt(t){const o=t.slice();return o.sort((e,n)=>e.x<n.x?-1:e.x>n.x?1:e.y<n.y?-1:e.y>n.y?1:0),rt(o)}function rt(t){if(t.length<=1)return t.slice();const o=[];for(let n=0;n<t.length;n++){const r=t[n];for(;o.length>=2;){const l=o[o.length-1],c=o[o.length-2];if((l.x-c.x)*(r.y-c.y)>=(l.y-c.y)*(r.x-c.x))o.pop();else break}o.push(r)}o.pop();const e=[];for(let n=t.length-1;n>=0;n--){const r=t[n];for(;e.length>=2;){const l=e[e.length-1],c=e[e.length-2];if((l.x-c.x)*(r.y-c.y)>=(l.y-c.y)*(r.x-c.x))e.pop();else break}e.push(r)}return e.pop(),o.length===1&&e.length===1&&o[0].x===e[0].x&&o[0].y===e[0].y?o:o.concat(e)}var st=xe,it=be,at=Ce,lt=Ee,ct=Re,pt=Ie;const D=({ref:t,children:o,content:e,delay:n,open:r,onOpenChange:l,showArrow:c,className:g,arrowClassName:i,side:d,sideOffset:p=5,...h})=>{const{tooltipDelay:y,tooltipShowArrow:u,tooltipSide:f}=He({tooltipDelay:n,tooltipShowArrow:c,tooltipSide:d});return a.jsx(st,{delayDuration:y,children:a.jsxs(it,{open:r,onOpenChange:l,children:[a.jsx(at,{asChild:!0,children:o}),a.jsx(lt,{children:a.jsxs(ct,{ref:t,className:X(g,"arm-tooltip-content"),side:f,sideOffset:p,...h,children:[e,u&&a.jsx(pt,{className:X(i,"arm-tooltip-arrow")})]})})]})})};D.displayName="Tooltip";D.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},sideOffset:{defaultValue:{value:"5",computed:!1},required:!1}}};const jt={title:"Modals/Tooltip",component:D,parameters:{docs:{description:{component:"metadata"}}}},C={args:{content:"Here is some tooltip text, it has a delay of 700ms",onOpenChange:ke()},render:t=>a.jsx(D,{...t,children:a.jsx(we,{displaySize:"small",style:{backgroundColor:"transparent",padding:0},"data-testid":"trigger",children:a.jsx(ge,{size:36,style:{fill:"black"}})})})},H={...C,play:async({canvasElement:t})=>{const o=w(t).getByTestId("trigger");T.hover(o);const e=await w(document.body).findByRole("tooltip");await R(()=>m(e).toBeVisible()),await R(()=>m(e).toHaveTextContent("Here is some tooltip text, it has a delay of 700ms")),T.unhover(o),await R(()=>m(e).not.toBeVisible())}},A={...C,args:{...C.args,content:"This tooltip displays instantly",delay:0},play:async({canvasElement:t})=>{const o=w(t).getByTestId("trigger");T.hover(o);const e=await w(document.body).findByRole("tooltip");m(e).toBeVisible(),m(e).toHaveTextContent("This tooltip displays instantly"),T.unhover(o),await R(()=>m(e).not.toBeVisible())}},L={...C,args:{...C.args,content:a.jsxs(a.Fragment,{children:[a.jsx("p",{style:{marginTop:"0"},children:"Here is some long content that will wrap onto multiple lines. Look at it wrapping there onto multiple lines"}),a.jsx("p",{style:{marginBottom:"0"},children:"It has more than one paragraph too. This is probably too much content or a tooltip but at least it's being displayed sensibly"})]})},play:async({canvasElement:t})=>{const o=w(t).getByTestId("trigger");T.hover(o);const e=await w(document.body).findByRole("tooltip");m(e).toBeVisible(),m(e).toHaveTextContent("Here is some long content that will wrap onto multiple lines. Look at it wrapping there onto multiple linesIt has more than one paragraph too. This is probably too much content or a tooltip but at least it's being displayed sensibly"),T.unhover(o),await R(()=>m(e).not.toBeVisible())}},S={...C,args:{...C.args,side:"bottom",content:"This tooltip renders underneath the element"},play:async({canvasElement:t})=>{const o=w(t).getByTestId("trigger");T.hover(o);const e=await w(document.body).findByRole("tooltip");m(e).toBeVisible(),m(e).toHaveTextContent("This tooltip renders underneath the element"),T.unhover(o),await R(()=>m(e).not.toBeVisible())}},V={...C,args:{...C.args,showArrow:!0,content:"This tooltip shows an arrow pointing to the element"},play:async({canvasElement:t})=>{const o=w(t).getByTestId("trigger");T.hover(o);const e=await w(document.body).findByRole("tooltip");m(e).toBeVisible(),m(e).toHaveTextContent("This tooltip shows an arrow pointing to the element"),T.unhover(o),await R(()=>m(e).not.toBeVisible())}},M={render:()=>{const[t,o]=je.useState(!1);return a.jsx(D,{open:t,onOpenChange:o,content:"This controlled tooltip will show when the button is clicked, useful for dedicated help buttons",children:a.jsx(we,{displaySize:"small",style:{backgroundColor:"transparent",padding:0},"data-testid":"trigger",onClick:()=>o(!0),children:a.jsx(ge,{size:36,style:{fill:"black"}})})})},play:async({canvasElement:t})=>{const o=w(t).getByTestId("trigger");T.click(o);const e=await w(document.body).findByRole("tooltip");m(e).toBeVisible(),m(e).toHaveTextContent("This controlled tooltip will show when the button is clicked, useful for dedicated help buttons"),await T.click(document.body),await R(()=>m(e).not.toBeVisible())}};var $,K,J,Q,Z;H.parameters={...H.parameters,docs:{...($=H.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Template,
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByTestId('trigger');
    userEvent.hover(trigger);
    const tooltip = await within(document.body).findByRole('tooltip');
    await waitFor(() => expect(tooltip).toBeVisible());
    await waitFor(() => expect(tooltip).toHaveTextContent('Here is some tooltip text, it has a delay of 700ms'));
    userEvent.unhover(trigger);
    await waitFor(() => expect(tooltip).not.toBeVisible());
  }
}`,...(J=(K=H.parameters)==null?void 0:K.docs)==null?void 0:J.source},description:{story:"stories",...(Z=(Q=H.parameters)==null?void 0:Q.docs)==null?void 0:Z.description}}};var ee,te,oe;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    content: 'This tooltip displays instantly',
    delay: 0
  },
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByTestId('trigger');
    userEvent.hover(trigger);
    const tooltip = await within(document.body).findByRole('tooltip');
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('This tooltip displays instantly');
    userEvent.unhover(trigger);
    await waitFor(() => expect(tooltip).not.toBeVisible());
  }
}`,...(oe=(te=A.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,re,se;L.parameters={...L.parameters,docs:{...(ne=L.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    content: <>
        <p style={{
        marginTop: '0'
      }}>
          Here is some long content that will wrap onto multiple lines. Look at it wrapping there onto multiple lines
        </p>
        <p style={{
        marginBottom: '0'
      }}>
          It has more than one paragraph too. This is probably too much content or a tooltip but at least it&apos;s
          being displayed sensibly
        </p>
      </>
  },
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByTestId('trigger');
    userEvent.hover(trigger);
    const tooltip = await within(document.body).findByRole('tooltip');
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent("Here is some long content that will wrap onto multiple lines. Look at it wrapping there onto multiple linesIt has more than one paragraph too. This is probably too much content or a tooltip but at least it's being displayed sensibly");
    userEvent.unhover(trigger);
    await waitFor(() => expect(tooltip).not.toBeVisible());
  }
}`,...(se=(re=L.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ae,le;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    side: 'bottom',
    content: 'This tooltip renders underneath the element'
  },
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByTestId('trigger');
    userEvent.hover(trigger);
    const tooltip = await within(document.body).findByRole('tooltip');
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('This tooltip renders underneath the element');
    userEvent.unhover(trigger);
    await waitFor(() => expect(tooltip).not.toBeVisible());
  }
}`,...(le=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var ce,pe,ue;V.parameters={...V.parameters,docs:{...(ce=V.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    showArrow: true,
    content: 'This tooltip shows an arrow pointing to the element'
  },
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByTestId('trigger');
    userEvent.hover(trigger);
    const tooltip = await within(document.body).findByRole('tooltip');
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('This tooltip shows an arrow pointing to the element');
    userEvent.unhover(trigger);
    await waitFor(() => expect(tooltip).not.toBeVisible());
  }
}`,...(ue=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var de,he,me;M.parameters={...M.parameters,docs:{...(de=M.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <Tooltip open={isOpen} onOpenChange={setIsOpen} content="This controlled tooltip will show when the button is clicked, useful for dedicated help buttons">
        <Button displaySize="small" style={{
        backgroundColor: 'transparent',
        padding: 0
      }} data-testid="trigger" onClick={() => setIsOpen(true)}>
          <IoIosHelpCircle size={36} style={{
          fill: 'black'
        }} />
        </Button>
      </Tooltip>;
  },
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByTestId('trigger');
    userEvent.click(trigger);
    const tooltip = await within(document.body).findByRole('tooltip');
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('This controlled tooltip will show when the button is clicked, useful for dedicated help buttons');
    await userEvent.click(document.body);
    await waitFor(() => expect(tooltip).not.toBeVisible());
  }
}`,...(me=(he=M.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};const Ht=["Default","Instant","Long","Bottom","WithArrow","Controlled"];export{S as Bottom,M as Controlled,H as Default,A as Instant,L as Long,V as WithArrow,Ht as __namedExportsOrder,jt as default};
