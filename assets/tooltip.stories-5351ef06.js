import{j as P,a as pe,F as gt}from"./jsx-runtime-eae7a151.js";import{w as _,u as R,e as b,a as F}from"./index-16752634.js";import{r as n,R as $t}from"./index-c4905b50.js";import{u as wt,h as je}from"./config.context-ae8741c8.js";import{_ as A}from"./extends-98964cd2.js";import{a as yt,$ as $e,c as vt,b as N}from"./index-c1bef199.js";import{b as ae,$ as ie,d as bt}from"./index-dbbbe5a9.js";import{$ as qe}from"./index-97ba0010.js";import{b as xt}from"./index-34db7291.js";import{$ as Tt}from"./index-92c228ee.js";import{g as we,N as Ct,B as Et,L as Pt,O as _t,A as Rt,C as Ot,E as At,a as Bt}from"./floating-ui.dom.browser.min-04af7d1d.js";import{r as Dt}from"./index-07d1f67e.js";import{$ as It}from"./index-1381309a.js";import{$ as St,b as kt}from"./index-fe9e7dbf.js";import{$ as ze}from"./index-189695b2.js";import{c as ye}from"./classNames-9011e307.js";import{B as Ge}from"./button.component-1c2f3deb.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-4dce63e4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./spinner.component-a9fcb2ea.js";const Ht=t=>{function o(e){return{}.hasOwnProperty.call(e,"current")}return{name:"arrow",options:t,fn(e){const{element:r,padding:a}=typeof t=="function"?t(e):t;return r&&o(r)?r.current!=null?we({element:r.current,padding:a}).fn(e):{}:r?we({element:r,padding:a}).fn(e):{}}}};var ne=typeof document<"u"?n.useLayoutEffect:n.useEffect;function re(t,o){if(t===o)return!0;if(typeof t!=typeof o)return!1;if(typeof t=="function"&&t.toString()===o.toString())return!0;let e,r,a;if(t&&o&&typeof t=="object"){if(Array.isArray(t)){if(e=t.length,e!=o.length)return!1;for(r=e;r--!==0;)if(!re(t[r],o[r]))return!1;return!0}if(a=Object.keys(t),e=a.length,e!==Object.keys(o).length)return!1;for(r=e;r--!==0;)if(!{}.hasOwnProperty.call(o,a[r]))return!1;for(r=e;r--!==0;){const i=a[r];if(!(i==="_owner"&&t.$$typeof)&&!re(t[i],o[i]))return!1}return!0}return t!==t&&o!==o}function Ye(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function ve(t,o){const e=Ye(t);return Math.round(o*e)/e}function be(t){const o=n.useRef(t);return ne(()=>{o.current=t}),o}function Mt(t){t===void 0&&(t={});const{placement:o="bottom",strategy:e="absolute",middleware:r=[],platform:a,elements:{reference:i,floating:s}={},transform:d=!0,whileElementsMounted:c,open:p}=t,[l,u]=n.useState({x:0,y:0,strategy:e,placement:o,middlewareData:{},isPositioned:!1}),[m,f]=n.useState(r);re(m,r)||f(r);const[g,w]=n.useState(null),[h,y]=n.useState(null),v=n.useCallback(x=>{x!=E.current&&(E.current=x,w(x))},[w]),T=n.useCallback(x=>{x!==O.current&&(O.current=x,y(x))},[y]),$=i||g,C=s||h,E=n.useRef(null),O=n.useRef(null),H=n.useRef(l),W=be(c),j=be(a),B=n.useCallback(()=>{if(!E.current||!O.current)return;const x={placement:o,strategy:e,middleware:m};j.current&&(x.platform=j.current),Ct(E.current,O.current,x).then(V=>{const S={...V,isPositioned:!0};q.current&&!re(H.current,S)&&(H.current=S,Dt.flushSync(()=>{u(S)}))})},[m,o,e,j]);ne(()=>{p===!1&&H.current.isPositioned&&(H.current.isPositioned=!1,u(x=>({...x,isPositioned:!1})))},[p]);const q=n.useRef(!1);ne(()=>(q.current=!0,()=>{q.current=!1}),[]),ne(()=>{if($&&(E.current=$),C&&(O.current=C),$&&C){if(W.current)return W.current($,C,B);B()}},[$,C,B,W]);const D=n.useMemo(()=>({reference:E,floating:O,setReference:v,setFloating:T}),[v,T]),I=n.useMemo(()=>({reference:$,floating:C}),[$,C]),z=n.useMemo(()=>{const x={position:e,left:0,top:0};if(!I.floating)return x;const V=ve(I.floating,l.x),S=ve(I.floating,l.y);return d?{...x,transform:"translate("+V+"px, "+S+"px)",...Ye(I.floating)>=1.5&&{willChange:"transform"}}:{position:e,left:V,top:S}},[e,d,I.floating,l.x,l.y]);return n.useMemo(()=>({...l,update:B,refs:D,elements:I,floatingStyles:z}),[l,B,D,I,z])}const Vt=n.forwardRef((t,o)=>{const{children:e,width:r=10,height:a=5,...i}=t;return n.createElement(ae.svg,A({},i,{ref:o,width:r,height:a,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),t.asChild?e:n.createElement("polygon",{points:"0,0 30,0 15,10"}))}),Lt=Vt,Xe="Popper",[Ue,Ke]=qe(Xe),[Nt,Ze]=Ue(Xe),Ft=t=>{const{__scopePopper:o,children:e}=t,[r,a]=n.useState(null);return n.createElement(Nt,{scope:o,anchor:r,onAnchorChange:a},e)},Wt="PopperAnchor",jt=n.forwardRef((t,o)=>{const{__scopePopper:e,virtualRef:r,...a}=t,i=Ze(Wt,e),s=n.useRef(null),d=ie(o,s);return n.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:n.createElement(ae.div,A({},a,{ref:d}))}),Je="PopperContent",[qt,zt]=Ue(Je),Gt=n.forwardRef((t,o)=>{var e,r,a,i,s,d,c,p;const{__scopePopper:l,side:u="bottom",sideOffset:m=0,align:f="center",alignOffset:g=0,arrowPadding:w=0,collisionBoundary:h=[],collisionPadding:y=0,sticky:v="partial",hideWhenDetached:T=!1,avoidCollisions:$=!0,onPlaced:C,...E}=t,O=Ze(Je,l),[H,W]=n.useState(null),j=ie(o,de=>W(de)),[B,q]=n.useState(null),D=It(B),I=(e=D==null?void 0:D.width)!==null&&e!==void 0?e:0,z=(r=D==null?void 0:D.height)!==null&&r!==void 0?r:0,x=u+(f!=="center"?"-"+f:""),V=typeof y=="number"?y:{top:0,right:0,bottom:0,left:0,...y},S=Array.isArray(h)?h:[h],ot=S.length>0,le={padding:V,boundary:S.filter(Kt),altBoundary:ot},{refs:nt,floatingStyles:me,placement:rt,isPositioned:U,middlewareData:L}=Mt({strategy:"fixed",placement:x,whileElementsMounted:Et,elements:{reference:O.anchor},middleware:[Pt({mainAxis:m+z,alignmentAxis:g}),$&&_t({mainAxis:!0,crossAxis:!1,limiter:v==="partial"?Bt():void 0,...le}),$&&Rt({...le}),Ot({...le,apply:({elements:de,rects:pt,availableWidth:ut,availableHeight:ft})=>{const{width:ht,height:mt}=pt.reference,Z=de.floating.style;Z.setProperty("--radix-popper-available-width",`${ut}px`),Z.setProperty("--radix-popper-available-height",`${ft}px`),Z.setProperty("--radix-popper-anchor-width",`${ht}px`),Z.setProperty("--radix-popper-anchor-height",`${mt}px`)}}),B&&Ht({element:B,padding:w}),Zt({arrowWidth:I,arrowHeight:z}),T&&At({strategy:"referenceHidden"})]}),[ge,at]=Qe(rt),K=yt(C);$e(()=>{U&&(K==null||K())},[U,K]);const it=(a=L.arrow)===null||a===void 0?void 0:a.x,st=(i=L.arrow)===null||i===void 0?void 0:i.y,ct=((s=L.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[lt,dt]=n.useState();return $e(()=>{H&&dt(window.getComputedStyle(H).zIndex)},[H]),n.createElement("div",{ref:nt.setFloating,"data-radix-popper-content-wrapper":"",style:{...me,transform:U?me.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:lt,"--radix-popper-transform-origin":[(d=L.transformOrigin)===null||d===void 0?void 0:d.x,(c=L.transformOrigin)===null||c===void 0?void 0:c.y].join(" ")},dir:t.dir},n.createElement(qt,{scope:l,placedSide:ge,onArrowChange:q,arrowX:it,arrowY:st,shouldHideArrow:ct},n.createElement(ae.div,A({"data-side":ge,"data-align":at},E,{ref:j,style:{...E.style,animation:U?void 0:"none",opacity:(p=L.hide)!==null&&p!==void 0&&p.referenceHidden?0:void 0}}))))}),Yt="PopperArrow",Xt={top:"bottom",right:"left",bottom:"top",left:"right"},Ut=n.forwardRef(function(o,e){const{__scopePopper:r,...a}=o,i=zt(Yt,r),s=Xt[i.placedSide];return n.createElement("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0}},n.createElement(Lt,A({},a,{ref:e,style:{...a.style,display:"block"}})))});function Kt(t){return t!==null}const Zt=t=>({name:"transformOrigin",options:t,fn(o){var e,r,a,i,s;const{placement:d,rects:c,middlewareData:p}=o,u=((e=p.arrow)===null||e===void 0?void 0:e.centerOffset)!==0,m=u?0:t.arrowWidth,f=u?0:t.arrowHeight,[g,w]=Qe(d),h={start:"0%",center:"50%",end:"100%"}[w],y=((r=(a=p.arrow)===null||a===void 0?void 0:a.x)!==null&&r!==void 0?r:0)+m/2,v=((i=(s=p.arrow)===null||s===void 0?void 0:s.y)!==null&&i!==void 0?i:0)+f/2;let T="",$="";return g==="bottom"?(T=u?h:`${y}px`,$=`${-f}px`):g==="top"?(T=u?h:`${y}px`,$=`${c.floating.height+f}px`):g==="right"?(T=`${-f}px`,$=u?h:`${v}px`):g==="left"&&(T=`${c.floating.width+f}px`,$=u?h:`${v}px`),{data:{x:T,y:$}}}});function Qe(t){const[o,e="center"]=t.split("-");return[o,e]}const Jt=Ft,Qt=jt,eo=Gt,to=Ut,[se,tn]=qe("Tooltip",[Ke]),ce=Ke(),oo="TooltipProvider",no=700,ue="tooltip.open",[ro,fe]=se(oo),ao=t=>{const{__scopeTooltip:o,delayDuration:e=no,skipDelayDuration:r=300,disableHoverableContent:a=!1,children:i}=t,[s,d]=n.useState(!0),c=n.useRef(!1),p=n.useRef(0);return n.useEffect(()=>{const l=p.current;return()=>window.clearTimeout(l)},[]),n.createElement(ro,{scope:o,isOpenDelayed:s,delayDuration:e,onOpen:n.useCallback(()=>{window.clearTimeout(p.current),d(!1)},[]),onClose:n.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>d(!0),r)},[r]),isPointerInTransitRef:c,onPointerInTransitChange:n.useCallback(l=>{c.current=l},[]),disableHoverableContent:a},i)},he="Tooltip",[io,X]=se(he),so=t=>{const{__scopeTooltip:o,children:e,open:r,defaultOpen:a=!1,onOpenChange:i,disableHoverableContent:s,delayDuration:d}=t,c=fe(he,t.__scopeTooltip),p=ce(o),[l,u]=n.useState(null),m=Tt(),f=n.useRef(0),g=s??c.disableHoverableContent,w=d??c.delayDuration,h=n.useRef(!1),[y=!1,v]=vt({prop:r,defaultProp:a,onChange:O=>{O?(c.onOpen(),document.dispatchEvent(new CustomEvent(ue))):c.onClose(),i==null||i(O)}}),T=n.useMemo(()=>y?h.current?"delayed-open":"instant-open":"closed",[y]),$=n.useCallback(()=>{window.clearTimeout(f.current),h.current=!1,v(!0)},[v]),C=n.useCallback(()=>{window.clearTimeout(f.current),v(!1)},[v]),E=n.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>{h.current=!0,v(!0)},w)},[w,v]);return n.useEffect(()=>()=>window.clearTimeout(f.current),[]),n.createElement(Jt,p,n.createElement(io,{scope:o,contentId:m,open:y,stateAttribute:T,trigger:l,onTriggerChange:u,onTriggerEnter:n.useCallback(()=>{c.isOpenDelayed?E():$()},[c.isOpenDelayed,E,$]),onTriggerLeave:n.useCallback(()=>{g?C():window.clearTimeout(f.current)},[C,g]),onOpen:$,onClose:C,disableHoverableContent:g},e))},xe="TooltipTrigger",co=n.forwardRef((t,o)=>{const{__scopeTooltip:e,...r}=t,a=X(xe,e),i=fe(xe,e),s=ce(e),d=n.useRef(null),c=ie(o,d,a.onTriggerChange),p=n.useRef(!1),l=n.useRef(!1),u=n.useCallback(()=>p.current=!1,[]);return n.useEffect(()=>()=>document.removeEventListener("pointerup",u),[u]),n.createElement(Qt,A({asChild:!0},s),n.createElement(ae.button,A({"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute},r,{ref:c,onPointerMove:N(t.onPointerMove,m=>{m.pointerType!=="touch"&&!l.current&&!i.isPointerInTransitRef.current&&(a.onTriggerEnter(),l.current=!0)}),onPointerLeave:N(t.onPointerLeave,()=>{a.onTriggerLeave(),l.current=!1}),onPointerDown:N(t.onPointerDown,()=>{p.current=!0,document.addEventListener("pointerup",u,{once:!0})}),onFocus:N(t.onFocus,()=>{p.current||a.onOpen()}),onBlur:N(t.onBlur,a.onClose),onClick:N(t.onClick,a.onClose)})))}),et="TooltipPortal",[lo,po]=se(et,{forceMount:void 0}),uo=t=>{const{__scopeTooltip:o,forceMount:e,children:r,container:a}=t,i=X(et,o);return n.createElement(lo,{scope:o,forceMount:e},n.createElement(ze,{present:e||i.open},n.createElement(St,{asChild:!0,container:a},r)))},Y="TooltipContent",fo=n.forwardRef((t,o)=>{const e=po(Y,t.__scopeTooltip),{forceMount:r=e.forceMount,side:a="top",...i}=t,s=X(Y,t.__scopeTooltip);return n.createElement(ze,{present:r||s.open},s.disableHoverableContent?n.createElement(tt,A({side:a},i,{ref:o})):n.createElement(ho,A({side:a},i,{ref:o})))}),ho=n.forwardRef((t,o)=>{const e=X(Y,t.__scopeTooltip),r=fe(Y,t.__scopeTooltip),a=n.useRef(null),i=ie(o,a),[s,d]=n.useState(null),{trigger:c,onClose:p}=e,l=a.current,{onPointerInTransitChange:u}=r,m=n.useCallback(()=>{d(null),u(!1)},[u]),f=n.useCallback((g,w)=>{const h=g.currentTarget,y={x:g.clientX,y:g.clientY},v=yo(y,h.getBoundingClientRect()),T=vo(y,v),$=bo(w.getBoundingClientRect()),C=To([...T,...$]);d(C),u(!0)},[u]);return n.useEffect(()=>()=>m(),[m]),n.useEffect(()=>{if(c&&l){const g=h=>f(h,l),w=h=>f(h,c);return c.addEventListener("pointerleave",g),l.addEventListener("pointerleave",w),()=>{c.removeEventListener("pointerleave",g),l.removeEventListener("pointerleave",w)}}},[c,l,f,m]),n.useEffect(()=>{if(s){const g=w=>{const h=w.target,y={x:w.clientX,y:w.clientY},v=(c==null?void 0:c.contains(h))||(l==null?void 0:l.contains(h)),T=!xo(y,s);v?m():T&&(m(),p())};return document.addEventListener("pointermove",g),()=>document.removeEventListener("pointermove",g)}},[c,l,s,p,m]),n.createElement(tt,A({},t,{ref:i}))}),[mo,go]=se(he,{isInside:!1}),tt=n.forwardRef((t,o)=>{const{__scopeTooltip:e,children:r,"aria-label":a,onEscapeKeyDown:i,onPointerDownOutside:s,...d}=t,c=X(Y,e),p=ce(e),{onClose:l}=c;return n.useEffect(()=>(document.addEventListener(ue,l),()=>document.removeEventListener(ue,l)),[l]),n.useEffect(()=>{if(c.trigger){const u=m=>{const f=m.target;f!=null&&f.contains(c.trigger)&&l()};return window.addEventListener("scroll",u,{capture:!0}),()=>window.removeEventListener("scroll",u,{capture:!0})}},[c.trigger,l]),n.createElement(xt,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:u=>u.preventDefault(),onDismiss:l},n.createElement(eo,A({"data-state":c.stateAttribute},p,d,{ref:o,style:{...d.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),n.createElement(bt,null,r),n.createElement(mo,{scope:e,isInside:!0},n.createElement(kt,{id:c.contentId,role:"tooltip"},a||r))))}),$o="TooltipArrow",wo=n.forwardRef((t,o)=>{const{__scopeTooltip:e,...r}=t,a=ce(e);return go($o,e).isInside?null:n.createElement(to,A({},a,r,{ref:o}))});function yo(t,o){const e=Math.abs(o.top-t.y),r=Math.abs(o.bottom-t.y),a=Math.abs(o.right-t.x),i=Math.abs(o.left-t.x);switch(Math.min(e,r,a,i)){case i:return"left";case a:return"right";case e:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function vo(t,o,e=5){const r=[];switch(o){case"top":r.push({x:t.x-e,y:t.y+e},{x:t.x+e,y:t.y+e});break;case"bottom":r.push({x:t.x-e,y:t.y-e},{x:t.x+e,y:t.y-e});break;case"left":r.push({x:t.x+e,y:t.y-e},{x:t.x+e,y:t.y+e});break;case"right":r.push({x:t.x-e,y:t.y-e},{x:t.x-e,y:t.y+e});break}return r}function bo(t){const{top:o,right:e,bottom:r,left:a}=t;return[{x:a,y:o},{x:e,y:o},{x:e,y:r},{x:a,y:r}]}function xo(t,o){const{x:e,y:r}=t;let a=!1;for(let i=0,s=o.length-1;i<o.length;s=i++){const d=o[i].x,c=o[i].y,p=o[s].x,l=o[s].y;c>r!=l>r&&e<(p-d)*(r-c)/(l-c)+d&&(a=!a)}return a}function To(t){const o=t.slice();return o.sort((e,r)=>e.x<r.x?-1:e.x>r.x?1:e.y<r.y?-1:e.y>r.y?1:0),Co(o)}function Co(t){if(t.length<=1)return t.slice();const o=[];for(let r=0;r<t.length;r++){const a=t[r];for(;o.length>=2;){const i=o[o.length-1],s=o[o.length-2];if((i.x-s.x)*(a.y-s.y)>=(i.y-s.y)*(a.x-s.x))o.pop();else break}o.push(a)}o.pop();const e=[];for(let r=t.length-1;r>=0;r--){const a=t[r];for(;e.length>=2;){const i=e[e.length-1],s=e[e.length-2];if((i.x-s.x)*(a.y-s.y)>=(i.y-s.y)*(a.x-s.x))e.pop();else break}e.push(a)}return e.pop(),o.length===1&&e.length===1&&o[0].x===e[0].x&&o[0].y===e[0].y?o:o.concat(e)}const Eo=ao,Po=so,_o=co,Ro=uo,Oo=fo,Ao=wo;const M=n.forwardRef(({children:t,content:o,delay:e,open:r,onOpenChange:a,showArrow:i,className:s,arrowClassName:d,side:c,...p},l)=>{const{tooltipDelay:u,tooltipShowArrow:m,tooltipSide:f}=wt({tooltipDelay:e,tooltipShowArrow:i,tooltipSide:c});return P(Eo,{delayDuration:u,children:pe(Po,{open:r,onOpenChange:a,children:[P(_o,{asChild:!0,children:t}),P(Ro,{children:pe(Oo,{ref:l,className:ye(s,"arm-tooltip-content"),side:f,...p,children:[o,m&&P(Ao,{className:ye(d,"arm-tooltip-arrow")})]})})]})})});M.displayName="Tooltip";M.defaultProps={sideOffset:5};try{M.displayName="Tooltip",M.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"The content to display in the tooltip",name:"content",required:!1,type:{name:"ReactNode"}},delay:{defaultValue:{value:"700"},description:"How long in ms to wait after hover before displaying the tooltip",name:"delay",required:!1,type:{name:"number"}},open:{defaultValue:null,description:"Whether the tooltip is open. Must be used in conjunction with `onOpenChange`\nWARNING: This will override the default behaviour and should not normally be needed.",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Call when a controlled tooltip opens/closes. Must be used in conjunction with `open`\nWARNING: Use for a manually controlled tooltip only, should not normally be needed.",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},showArrow:{defaultValue:{value:"false;"},description:"Whether to show an arrow on the tooltip pointing to the element",name:"showArrow",required:!1,type:{name:"boolean"}},arrowClassName:{defaultValue:null,description:"Optional className to add to the arrow element",name:"arrowClassName",required:!1,type:{name:"string"}},side:{defaultValue:{value:"top"},description:"Which side to render the tooltip",name:"side",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const on={title:"Modals/Tooltip",component:M,parameters:{docs:{description:{component:"metadata"}}}},k={args:{content:"Here is some tooltip text, it has a delay of 700ms"},render:t=>P(M,{...t,children:P(Ge,{displaySize:"small",style:{backgroundColor:"transparent",padding:0},"data-testid":"trigger",children:P(je,{size:36,style:{fill:"black"}})})})},G={...k,play:async({canvasElement:t})=>{const o=_(t).getByTestId("trigger");R.hover(o);const e=await _(document.body).findByRole("tooltip");b(e).toBeVisible(),b(e).toHaveTextContent("Here is some tooltip text, it has a delay of 700ms"),R.unhover(o),await F(()=>b(e).not.toBeVisible())}},J={...k,args:{...k.args,content:"This tooltip displays instantly",delay:0},play:async({canvasElement:t})=>{const o=_(t).getByTestId("trigger");R.hover(o);const e=await _(document.body).findByRole("tooltip");b(e).toBeVisible(),b(e).toHaveTextContent("This tooltip displays instantly"),R.unhover(o),await F(()=>b(e).not.toBeVisible())}},Q={...k,args:{...k.args,content:pe(gt,{children:[P("p",{style:{marginTop:"0"},children:"Here is some long content that will wrap onto multiple lines. Look at it wrapping there onto multiple lines"}),P("p",{style:{marginBottom:"0"},children:"It has more than one paragraph too. This is probably too much content or a tooltip but at least it's being displayed sensibly"})]})},play:async({canvasElement:t})=>{const o=_(t).getByTestId("trigger");R.hover(o);const e=await _(document.body).findByRole("tooltip");b(e).toBeVisible(),b(e).toHaveTextContent("Here is some long content that will wrap onto multiple lines. Look at it wrapping there onto multiple linesIt has more than one paragraph too. This is probably too much content or a tooltip but at least it's being displayed sensibly"),R.unhover(o),await F(()=>b(e).not.toBeVisible())}},ee={...k,args:{...k.args,side:"bottom",content:"This tooltip renders underneath the element"},play:async({canvasElement:t})=>{const o=_(t).getByTestId("trigger");R.hover(o);const e=await _(document.body).findByRole("tooltip");b(e).toBeVisible(),b(e).toHaveTextContent("This tooltip renders underneath the element"),R.unhover(o),await F(()=>b(e).not.toBeVisible())}},te={...k,args:{...k.args,showArrow:!0,content:"This tooltip shows an arrow pointing to the element"},play:async({canvasElement:t})=>{const o=_(t).getByTestId("trigger");R.hover(o);const e=await _(document.body).findByRole("tooltip");b(e).toBeVisible(),b(e).toHaveTextContent("This tooltip shows an arrow pointing to the element"),R.unhover(o),await F(()=>b(e).not.toBeVisible())}},oe={render:()=>{const[t,o]=$t.useState(!1);return P(M,{open:t,onOpenChange:o,content:"This controlled tooltip will show when the button is clicked, useful for dedicated help buttons",children:P(Ge,{displaySize:"small",style:{backgroundColor:"transparent",padding:0},"data-testid":"trigger",onClick:()=>o(!0),children:P(je,{size:36,style:{fill:"black"}})})})},play:async({canvasElement:t})=>{const o=_(t).getByTestId("trigger");R.click(o);const e=await _(document.body).findByRole("tooltip");b(e).toBeVisible(),b(e).toHaveTextContent("This controlled tooltip will show when the button is clicked, useful for dedicated help buttons"),R.click(document.body),await F(()=>b(e).not.toBeVisible())}};var Te,Ce,Ee,Pe,_e;G.parameters={...G.parameters,docs:{...(Te=G.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ee=(Ce=G.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source},description:{story:"stories",...(_e=(Pe=G.parameters)==null?void 0:Pe.docs)==null?void 0:_e.description}}};var Re,Oe,Ae;J.parameters={...J.parameters,docs:{...(Re=J.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ae=(Oe=J.parameters)==null?void 0:Oe.docs)==null?void 0:Ae.source}}};var Be,De,Ie;Q.parameters={...Q.parameters,docs:{...(Be=Q.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ie=(De=Q.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var Se,ke,He;ee.parameters={...ee.parameters,docs:{...(Se=ee.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(He=(ke=ee.parameters)==null?void 0:ke.docs)==null?void 0:He.source}}};var Me,Ve,Le;te.parameters={...te.parameters,docs:{...(Me=te.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Le=(Ve=te.parameters)==null?void 0:Ve.docs)==null?void 0:Le.source}}};var Ne,Fe,We;oe.parameters={...oe.parameters,docs:{...(Ne=oe.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(We=(Fe=oe.parameters)==null?void 0:Fe.docs)==null?void 0:We.source}}};const nn=["Default","Instant","Long","Bottom","WithArrow","Controlled"];export{ee as Bottom,oe as Controlled,G as Default,J as Instant,Q as Long,te as WithArrow,nn as __namedExportsOrder,on as default};