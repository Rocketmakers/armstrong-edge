import{j as T,a as te,F as dt}from"./jsx-runtime-eae7a151.js";import{w as C,u as E,e as $,a as I}from"./index-0aa9db1d.js";import{r as n,R as pt}from"./index-c4905b50.js";import{u as ut,h as De}from"./config.context-108849f1.js";import{_}from"./uniq-d447bef6.js";import{a as ft,c as le,$ as ht,b as D}from"./index-10b0f2c6.js";import{a as j,$ as X,d as mt}from"./index-38f95ea5.js";import{$ as Ie}from"./index-97ba0010.js";import{b as gt}from"./index-ebb89dad.js";import{$ as $t}from"./index-1927a3af.js";import{u as wt,a as yt}from"./floating-ui.react-dom.esm-469a2873.js";import{$ as vt}from"./index-20dac804.js";import{B as bt,L as xt,O as Tt,A as Ct,C as Et,E as _t,a as Pt}from"./floating-ui.dom.browser.min-04af7d1d.js";import{$ as Ot,b as Rt}from"./index-6481ac97.js";import{$ as He}from"./index-bbcfa8f0.js";import{c as de}from"./classNames-9011e307.js";import{B as ke}from"./button.component-4890590c.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./index-07d1f67e.js";import"./index-e5e547b3.js";import"./spinner.component-b77c4686.js";const At=n.forwardRef((t,o)=>{const{children:e,width:r=10,height:a=5,...i}=t;return n.createElement(j.svg,_({},i,{ref:o,width:r,height:a,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),t.asChild?e:n.createElement("polygon",{points:"0,0 30,0 15,10"}))}),Bt=At,Se="Popper",[Ve,Ne]=Ie(Se),[Dt,Le]=Ve(Se),It=t=>{const{__scopePopper:o,children:e}=t,[r,a]=n.useState(null);return n.createElement(Dt,{scope:o,anchor:r,onAnchorChange:a},e)},Ht="PopperAnchor",kt=n.forwardRef((t,o)=>{const{__scopePopper:e,virtualRef:r,...a}=t,i=Le(Ht,e),s=n.useRef(null),d=X(o,s);return n.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:n.createElement(j.div,_({},a,{ref:d}))}),Me="PopperContent",[St,Vt]=Ve(Me),Nt=n.forwardRef((t,o)=>{var e,r,a,i,s,d,c,p;const{__scopePopper:l,side:u="bottom",sideOffset:g=0,align:f="center",alignOffset:m=0,arrowPadding:w=0,collisionBoundary:h=[],collisionPadding:y=0,sticky:v="partial",hideWhenDetached:x=!1,avoidCollisions:b=!0,onPlaced:O,...H}=t,N=Le(Me,l),[Z,qe]=n.useState(null),Ge=X(o,ee=>qe(ee)),[J,Ye]=n.useState(null),A=vt(J),je=(e=A==null?void 0:A.width)!==null&&e!==void 0?e:0,ae=(r=A==null?void 0:A.height)!==null&&r!==void 0?r:0,Xe=u+(f!=="center"?"-"+f:""),Ue=typeof y=="number"?y:{top:0,right:0,bottom:0,left:0,...y},ie=Array.isArray(h)?h:[h],Ke=ie.length>0,Q={padding:Ue,boundary:ie.filter(Wt),altBoundary:Ke},{refs:Ze,floatingStyles:se,placement:Je,isPositioned:L,middlewareData:B}=wt({strategy:"fixed",placement:Xe,whileElementsMounted:bt,elements:{reference:N.anchor},middleware:[xt({mainAxis:g+ae,alignmentAxis:m}),b&&Tt({mainAxis:!0,crossAxis:!1,limiter:v==="partial"?Pt():void 0,...Q}),b&&Ct({...Q}),Et({...Q,apply:({elements:ee,rects:at,availableWidth:it,availableHeight:st})=>{const{width:ct,height:lt}=at.reference,F=ee.floating.style;F.setProperty("--radix-popper-available-width",`${it}px`),F.setProperty("--radix-popper-available-height",`${st}px`),F.setProperty("--radix-popper-anchor-width",`${ct}px`),F.setProperty("--radix-popper-anchor-height",`${lt}px`)}}),J&&yt({element:J,padding:w}),zt({arrowWidth:je,arrowHeight:ae}),x&&_t({strategy:"referenceHidden"})]}),[ce,Qe]=Fe(Je),M=ft(O);le(()=>{L&&(M==null||M())},[L,M]);const et=(a=B.arrow)===null||a===void 0?void 0:a.x,tt=(i=B.arrow)===null||i===void 0?void 0:i.y,ot=((s=B.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[nt,rt]=n.useState();return le(()=>{Z&&rt(window.getComputedStyle(Z).zIndex)},[Z]),n.createElement("div",{ref:Ze.setFloating,"data-radix-popper-content-wrapper":"",style:{...se,transform:L?se.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:nt,"--radix-popper-transform-origin":[(d=B.transformOrigin)===null||d===void 0?void 0:d.x,(c=B.transformOrigin)===null||c===void 0?void 0:c.y].join(" ")},dir:t.dir},n.createElement(St,{scope:l,placedSide:ce,onArrowChange:Ye,arrowX:et,arrowY:tt,shouldHideArrow:ot},n.createElement(j.div,_({"data-side":ce,"data-align":Qe},H,{ref:Ge,style:{...H.style,animation:L?void 0:"none",opacity:(p=B.hide)!==null&&p!==void 0&&p.referenceHidden?0:void 0}}))))}),Lt="PopperArrow",Mt={top:"bottom",right:"left",bottom:"top",left:"right"},Ft=n.forwardRef(function(o,e){const{__scopePopper:r,...a}=o,i=Vt(Lt,r),s=Mt[i.placedSide];return n.createElement("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0}},n.createElement(Bt,_({},a,{ref:e,style:{...a.style,display:"block"}})))});function Wt(t){return t!==null}const zt=t=>({name:"transformOrigin",options:t,fn(o){var e,r,a,i,s;const{placement:d,rects:c,middlewareData:p}=o,u=((e=p.arrow)===null||e===void 0?void 0:e.centerOffset)!==0,g=u?0:t.arrowWidth,f=u?0:t.arrowHeight,[m,w]=Fe(d),h={start:"0%",center:"50%",end:"100%"}[w],y=((r=(a=p.arrow)===null||a===void 0?void 0:a.x)!==null&&r!==void 0?r:0)+g/2,v=((i=(s=p.arrow)===null||s===void 0?void 0:s.y)!==null&&i!==void 0?i:0)+f/2;let x="",b="";return m==="bottom"?(x=u?h:`${y}px`,b=`${-f}px`):m==="top"?(x=u?h:`${y}px`,b=`${c.floating.height+f}px`):m==="right"?(x=`${-f}px`,b=u?h:`${v}px`):m==="left"&&(x=`${c.floating.width+f}px`,b=u?h:`${v}px`),{data:{x,y:b}}}});function Fe(t){const[o,e="center"]=t.split("-");return[o,e]}const qt=It,Gt=kt,Yt=Nt,jt=Ft,[U,Xo]=Ie("Tooltip",[Ne]),K=Ne(),Xt="TooltipProvider",Ut=700,oe="tooltip.open",[Kt,ne]=U(Xt),Zt=t=>{const{__scopeTooltip:o,delayDuration:e=Ut,skipDelayDuration:r=300,disableHoverableContent:a=!1,children:i}=t,[s,d]=n.useState(!0),c=n.useRef(!1),p=n.useRef(0);return n.useEffect(()=>{const l=p.current;return()=>window.clearTimeout(l)},[]),n.createElement(Kt,{scope:o,isOpenDelayed:s,delayDuration:e,onOpen:n.useCallback(()=>{window.clearTimeout(p.current),d(!1)},[]),onClose:n.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>d(!0),r)},[r]),isPointerInTransitRef:c,onPointerInTransitChange:n.useCallback(l=>{c.current=l},[]),disableHoverableContent:a},i)},re="Tooltip",[Jt,V]=U(re),Qt=t=>{const{__scopeTooltip:o,children:e,open:r,defaultOpen:a=!1,onOpenChange:i,disableHoverableContent:s,delayDuration:d}=t,c=ne(re,t.__scopeTooltip),p=K(o),[l,u]=n.useState(null),g=$t(),f=n.useRef(0),m=s??c.disableHoverableContent,w=d??c.delayDuration,h=n.useRef(!1),[y=!1,v]=ht({prop:r,defaultProp:a,onChange:N=>{N?(c.onOpen(),document.dispatchEvent(new CustomEvent(oe))):c.onClose(),i==null||i(N)}}),x=n.useMemo(()=>y?h.current?"delayed-open":"instant-open":"closed",[y]),b=n.useCallback(()=>{window.clearTimeout(f.current),h.current=!1,v(!0)},[v]),O=n.useCallback(()=>{window.clearTimeout(f.current),v(!1)},[v]),H=n.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>{h.current=!0,v(!0)},w)},[w,v]);return n.useEffect(()=>()=>window.clearTimeout(f.current),[]),n.createElement(qt,p,n.createElement(Jt,{scope:o,contentId:g,open:y,stateAttribute:x,trigger:l,onTriggerChange:u,onTriggerEnter:n.useCallback(()=>{c.isOpenDelayed?H():b()},[c.isOpenDelayed,H,b]),onTriggerLeave:n.useCallback(()=>{m?O():window.clearTimeout(f.current)},[O,m]),onOpen:b,onClose:O,disableHoverableContent:m},e))},pe="TooltipTrigger",eo=n.forwardRef((t,o)=>{const{__scopeTooltip:e,...r}=t,a=V(pe,e),i=ne(pe,e),s=K(e),d=n.useRef(null),c=X(o,d,a.onTriggerChange),p=n.useRef(!1),l=n.useRef(!1),u=n.useCallback(()=>p.current=!1,[]);return n.useEffect(()=>()=>document.removeEventListener("pointerup",u),[u]),n.createElement(Gt,_({asChild:!0},s),n.createElement(j.button,_({"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute},r,{ref:c,onPointerMove:D(t.onPointerMove,g=>{g.pointerType!=="touch"&&!l.current&&!i.isPointerInTransitRef.current&&(a.onTriggerEnter(),l.current=!0)}),onPointerLeave:D(t.onPointerLeave,()=>{a.onTriggerLeave(),l.current=!1}),onPointerDown:D(t.onPointerDown,()=>{p.current=!0,document.addEventListener("pointerup",u,{once:!0})}),onFocus:D(t.onFocus,()=>{p.current||a.onOpen()}),onBlur:D(t.onBlur,a.onClose),onClick:D(t.onClick,a.onClose)})))}),We="TooltipPortal",[to,oo]=U(We,{forceMount:void 0}),no=t=>{const{__scopeTooltip:o,forceMount:e,children:r,container:a}=t,i=V(We,o);return n.createElement(to,{scope:o,forceMount:e},n.createElement(He,{present:e||i.open},n.createElement(Ot,{asChild:!0,container:a},r)))},S="TooltipContent",ro=n.forwardRef((t,o)=>{const e=oo(S,t.__scopeTooltip),{forceMount:r=e.forceMount,side:a="top",...i}=t,s=V(S,t.__scopeTooltip);return n.createElement(He,{present:r||s.open},s.disableHoverableContent?n.createElement(ze,_({side:a},i,{ref:o})):n.createElement(ao,_({side:a},i,{ref:o})))}),ao=n.forwardRef((t,o)=>{const e=V(S,t.__scopeTooltip),r=ne(S,t.__scopeTooltip),a=n.useRef(null),i=X(o,a),[s,d]=n.useState(null),{trigger:c,onClose:p}=e,l=a.current,{onPointerInTransitChange:u}=r,g=n.useCallback(()=>{d(null),u(!1)},[u]),f=n.useCallback((m,w)=>{const h=m.currentTarget,y={x:m.clientX,y:m.clientY},v=po(y,h.getBoundingClientRect()),x=uo(y,v),b=fo(w.getBoundingClientRect()),O=mo([...x,...b]);d(O),u(!0)},[u]);return n.useEffect(()=>()=>g(),[g]),n.useEffect(()=>{if(c&&l){const m=h=>f(h,l),w=h=>f(h,c);return c.addEventListener("pointerleave",m),l.addEventListener("pointerleave",w),()=>{c.removeEventListener("pointerleave",m),l.removeEventListener("pointerleave",w)}}},[c,l,f,g]),n.useEffect(()=>{if(s){const m=w=>{const h=w.target,y={x:w.clientX,y:w.clientY},v=(c==null?void 0:c.contains(h))||(l==null?void 0:l.contains(h)),x=!ho(y,s);v?g():x&&(g(),p())};return document.addEventListener("pointermove",m),()=>document.removeEventListener("pointermove",m)}},[c,l,s,p,g]),n.createElement(ze,_({},t,{ref:i}))}),[io,so]=U(re,{isInside:!1}),ze=n.forwardRef((t,o)=>{const{__scopeTooltip:e,children:r,"aria-label":a,onEscapeKeyDown:i,onPointerDownOutside:s,...d}=t,c=V(S,e),p=K(e),{onClose:l}=c;return n.useEffect(()=>(document.addEventListener(oe,l),()=>document.removeEventListener(oe,l)),[l]),n.useEffect(()=>{if(c.trigger){const u=g=>{const f=g.target;f!=null&&f.contains(c.trigger)&&l()};return window.addEventListener("scroll",u,{capture:!0}),()=>window.removeEventListener("scroll",u,{capture:!0})}},[c.trigger,l]),n.createElement(gt,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:u=>u.preventDefault(),onDismiss:l},n.createElement(Yt,_({"data-state":c.stateAttribute},p,d,{ref:o,style:{...d.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),n.createElement(mt,null,r),n.createElement(io,{scope:e,isInside:!0},n.createElement(Rt,{id:c.contentId,role:"tooltip"},a||r))))}),co="TooltipArrow",lo=n.forwardRef((t,o)=>{const{__scopeTooltip:e,...r}=t,a=K(e);return so(co,e).isInside?null:n.createElement(jt,_({},a,r,{ref:o}))});function po(t,o){const e=Math.abs(o.top-t.y),r=Math.abs(o.bottom-t.y),a=Math.abs(o.right-t.x),i=Math.abs(o.left-t.x);switch(Math.min(e,r,a,i)){case i:return"left";case a:return"right";case e:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function uo(t,o,e=5){const r=[];switch(o){case"top":r.push({x:t.x-e,y:t.y+e},{x:t.x+e,y:t.y+e});break;case"bottom":r.push({x:t.x-e,y:t.y-e},{x:t.x+e,y:t.y-e});break;case"left":r.push({x:t.x+e,y:t.y-e},{x:t.x+e,y:t.y+e});break;case"right":r.push({x:t.x-e,y:t.y-e},{x:t.x-e,y:t.y+e});break}return r}function fo(t){const{top:o,right:e,bottom:r,left:a}=t;return[{x:a,y:o},{x:e,y:o},{x:e,y:r},{x:a,y:r}]}function ho(t,o){const{x:e,y:r}=t;let a=!1;for(let i=0,s=o.length-1;i<o.length;s=i++){const d=o[i].x,c=o[i].y,p=o[s].x,l=o[s].y;c>r!=l>r&&e<(p-d)*(r-c)/(l-c)+d&&(a=!a)}return a}function mo(t){const o=t.slice();return o.sort((e,r)=>e.x<r.x?-1:e.x>r.x?1:e.y<r.y?-1:e.y>r.y?1:0),go(o)}function go(t){if(t.length<=1)return t.slice();const o=[];for(let r=0;r<t.length;r++){const a=t[r];for(;o.length>=2;){const i=o[o.length-1],s=o[o.length-2];if((i.x-s.x)*(a.y-s.y)>=(i.y-s.y)*(a.x-s.x))o.pop();else break}o.push(a)}o.pop();const e=[];for(let r=t.length-1;r>=0;r--){const a=t[r];for(;e.length>=2;){const i=e[e.length-1],s=e[e.length-2];if((i.x-s.x)*(a.y-s.y)>=(i.y-s.y)*(a.x-s.x))e.pop();else break}e.push(a)}return e.pop(),o.length===1&&e.length===1&&o[0].x===e[0].x&&o[0].y===e[0].y?o:o.concat(e)}const $o=Zt,wo=Qt,yo=eo,vo=no,bo=ro,xo=lo;const R=n.forwardRef(({children:t,content:o,delay:e,open:r,onOpenChange:a,showArrow:i,className:s,arrowClassName:d,side:c,...p},l)=>{const{tooltipDelay:u,tooltipShowArrow:g,tooltipSide:f}=ut({tooltipDelay:e,tooltipShowArrow:i,tooltipSide:c});return T($o,{delayDuration:u,children:te(wo,{open:r,onOpenChange:a,children:[T(yo,{asChild:!0,children:t}),T(vo,{children:te(bo,{ref:l,className:de(s,"arm-tooltip-content"),side:f,...p,children:[o,g&&T(xo,{className:de(d,"arm-tooltip-arrow")})]})})]})})});R.displayName="Tooltip";R.defaultProps={sideOffset:5};try{R.displayName="Tooltip",R.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"The content to display in the tooltip",name:"content",required:!1,type:{name:"ReactNode"}},delay:{defaultValue:{value:"700"},description:"How long in ms to wait after hover before displaying the tooltip",name:"delay",required:!1,type:{name:"number"}},open:{defaultValue:null,description:"Whether the tooltip is open. Must be used in conjunction with `onOpenChange`\nWARNING: This will override the default behaviour and should not normally be needed.",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Call when a controlled tooltip opens/closes. Must be used in conjunction with `open`\nWARNING: Use for a manually controlled tooltip only, should not normally be needed.",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},showArrow:{defaultValue:{value:"false;"},description:"Whether to show an arrow on the tooltip pointing to the element",name:"showArrow",required:!1,type:{name:"boolean"}},arrowClassName:{defaultValue:null,description:"Optional className to add to the arrow element",name:"arrowClassName",required:!1,type:{name:"string"}},side:{defaultValue:{value:"top"},description:"Which side to render the tooltip",name:"side",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Uo={title:"Modals/Tooltip",component:R,parameters:{docs:{description:{component:"metadata"}}}},P={args:{content:"Here is some tooltip text, it has a delay of 700ms"},render:t=>T(R,{...t,children:T(ke,{displaySize:"small",style:{backgroundColor:"transparent",padding:0},"data-testid":"trigger",children:T(De,{size:36,style:{fill:"black"}})})})},k={...P,play:async({canvasElement:t})=>{const o=C(t).getByTestId("trigger");E.hover(o);const e=await C(document.body).findByRole("tooltip");$(e).toBeVisible(),$(e).toHaveTextContent("Here is some tooltip text, it has a delay of 700ms"),E.unhover(o),await I(()=>$(e).not.toBeVisible())}},W={...P,args:{...P.args,content:"This tooltip displays instantly",delay:0},play:async({canvasElement:t})=>{const o=C(t).getByTestId("trigger");E.hover(o);const e=await C(document.body).findByRole("tooltip");$(e).toBeVisible(),$(e).toHaveTextContent("This tooltip displays instantly"),E.unhover(o),await I(()=>$(e).not.toBeVisible())}},z={...P,args:{...P.args,content:te(dt,{children:[T("p",{style:{marginTop:"0"},children:"Here is some long content that will wrap onto multiple lines. Look at it wrapping there onto multiple lines"}),T("p",{style:{marginBottom:"0"},children:"It has more than one paragraph too. This is probably too much content or a tooltip but at least it's being displayed sensibly"})]})},play:async({canvasElement:t})=>{const o=C(t).getByTestId("trigger");E.hover(o);const e=await C(document.body).findByRole("tooltip");$(e).toBeVisible(),$(e).toHaveTextContent("Here is some long content that will wrap onto multiple lines. Look at it wrapping there onto multiple linesIt has more than one paragraph too. This is probably too much content or a tooltip but at least it's being displayed sensibly"),E.unhover(o),await I(()=>$(e).not.toBeVisible())}},q={...P,args:{...P.args,side:"bottom",content:"This tooltip renders underneath the element"},play:async({canvasElement:t})=>{const o=C(t).getByTestId("trigger");E.hover(o);const e=await C(document.body).findByRole("tooltip");$(e).toBeVisible(),$(e).toHaveTextContent("This tooltip renders underneath the element"),E.unhover(o),await I(()=>$(e).not.toBeVisible())}},G={...P,args:{...P.args,showArrow:!0,content:"This tooltip shows an arrow pointing to the element"},play:async({canvasElement:t})=>{const o=C(t).getByTestId("trigger");E.hover(o);const e=await C(document.body).findByRole("tooltip");$(e).toBeVisible(),$(e).toHaveTextContent("This tooltip shows an arrow pointing to the element"),E.unhover(o),await I(()=>$(e).not.toBeVisible())}},Y={render:()=>{const[t,o]=pt.useState(!1);return T(R,{open:t,onOpenChange:o,content:"This controlled tooltip will show when the button is clicked, useful for dedicated help buttons",children:T(ke,{displaySize:"small",style:{backgroundColor:"transparent",padding:0},"data-testid":"trigger",onClick:()=>o(!0),children:T(De,{size:36,style:{fill:"black"}})})})},play:async({canvasElement:t})=>{const o=C(t).getByTestId("trigger");E.click(o);const e=await C(document.body).findByRole("tooltip");$(e).toBeVisible(),$(e).toHaveTextContent("This controlled tooltip will show when the button is clicked, useful for dedicated help buttons"),E.click(document.body),await I(()=>$(e).not.toBeVisible())}};var ue,fe,he,me,ge;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  ...Template,
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByTestId('trigger');
    userEvent.hover(trigger);
    const tooltip = await within(document.body).findByRole('tooltip');
    expect(tooltip).toBeVisible();
    expect(tooltip).toHaveTextContent('Here is some tooltip text, it has a delay of 700ms');
    userEvent.unhover(trigger);
    await waitFor(() => expect(tooltip).not.toBeVisible());
  }
}`,...(he=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:he.source},description:{story:"stories",...(ge=(me=k.parameters)==null?void 0:me.docs)==null?void 0:ge.description}}};var $e,we,ye;W.parameters={...W.parameters,docs:{...($e=W.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(ye=(we=W.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var ve,be,xe;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(xe=(be=z.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var Te,Ce,Ee;q.parameters={...q.parameters,docs:{...(Te=q.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ee=(Ce=q.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};var _e,Pe,Oe;G.parameters={...G.parameters,docs:{...(_e=G.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Oe=(Pe=G.parameters)==null?void 0:Pe.docs)==null?void 0:Oe.source}}};var Re,Ae,Be;Y.parameters={...Y.parameters,docs:{...(Re=Y.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
    userEvent.click(document.body);
    await waitFor(() => expect(tooltip).not.toBeVisible());
  }
}`,...(Be=(Ae=Y.parameters)==null?void 0:Ae.docs)==null?void 0:Be.source}}};const Ko=["Default","Instant","Long","Bottom","WithArrow","Controlled"];export{q as Bottom,Y as Controlled,k as Default,W as Instant,z as Long,G as WithArrow,Ko as __namedExportsOrder,Uo as default};
