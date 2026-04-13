import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{c as xe,w as B,u as h,g as ct,e as v,d as tt,a as O,b as he,h as wt}from"./index-BmZcwVSF.js";import{r as l,R as S}from"./index-DwQS_Y10.js";import{r as ne}from"./index-BY2j7gpI.js";import{d as Ee,b as A,P as H,e as Pe,c as Ce,u as Re}from"./index-CWQsrU90.js";import{u as se}from"./index-DKCiyFsV.js";import{c as Se}from"./index-Dp6IY7a_.js";import{R as Be,B as Ae}from"./index-D-iaL4kR.js";import{P as ke,V as ae}from"./index-DHRVNcCi.js";import{P as Ie}from"./index-CC-sFNo4.js";import{u as rt}from"./index-Bgmmd5SI.js";import{u as De,A as Ne}from"./config.context-D0elZNgh.js";import{B as it}from"./button.component-Cl1KWafa.js";var vt="ToastProvider",[gt,je,_e]=Se("Toast"),[re]=Ce("Toast",[_e]),[Fe,lt]=re(vt),ie=t=>{const{__scopeToast:e,label:o="Notification",duration:n=5e3,swipeDirection:c="right",swipeThreshold:p=50,children:i}=t,[y,T]=l.useState(null),[a,g]=l.useState(0),b=l.useRef(!1),j=l.useRef(!1);return o.trim()||console.error(`Invalid prop \`label\` supplied to \`${vt}\`. Expected non-empty \`string\`.`),s.jsx(gt.Provider,{scope:e,children:s.jsx(Fe,{scope:e,label:o,duration:n,swipeDirection:c,swipeThreshold:p,toastCount:a,viewport:y,onViewportChange:T,onToastAdd:l.useCallback(()=>g(k=>k+1),[]),onToastRemove:l.useCallback(()=>g(k=>k-1),[]),isFocusedToastEscapeKeyDownRef:b,isClosePausedRef:j,children:i})})};ie.displayName=vt;var ce="ToastViewport",Le=["F8"],ft="toast.viewportPause",yt="toast.viewportResume",le=l.forwardRef((t,e)=>{const{__scopeToast:o,hotkey:n=Le,label:c="Notifications ({hotkey})",...p}=t,i=lt(ce,o),y=je(o),T=l.useRef(null),a=l.useRef(null),g=l.useRef(null),b=l.useRef(null),j=se(e,b,i.onViewportChange),k=n.join("+").replace(/Key/g,"").replace(/Digit/g,""),I=i.toastCount>0;l.useEffect(()=>{const r=w=>{var f;n.length!==0&&n.every(x=>w[x]||w.code===x)&&((f=b.current)==null||f.focus())};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[n]),l.useEffect(()=>{const r=T.current,w=b.current;if(I&&r&&w){const m=()=>{if(!i.isClosePausedRef.current){const P=new CustomEvent(ft);w.dispatchEvent(P),i.isClosePausedRef.current=!0}},f=()=>{if(i.isClosePausedRef.current){const P=new CustomEvent(yt);w.dispatchEvent(P),i.isClosePausedRef.current=!1}},x=P=>{!r.contains(P.relatedTarget)&&f()},E=()=>{r.contains(document.activeElement)||f()};return r.addEventListener("focusin",m),r.addEventListener("focusout",x),r.addEventListener("pointermove",m),r.addEventListener("pointerleave",E),window.addEventListener("blur",m),window.addEventListener("focus",f),()=>{r.removeEventListener("focusin",m),r.removeEventListener("focusout",x),r.removeEventListener("pointermove",m),r.removeEventListener("pointerleave",E),window.removeEventListener("blur",m),window.removeEventListener("focus",f)}}},[I,i.isClosePausedRef]);const u=l.useCallback(({tabbingDirection:r})=>{const m=y().map(f=>{const x=f.ref.current,E=[x,...Ge(x)];return r==="forwards"?E:E.reverse()});return(r==="forwards"?m.reverse():m).flat()},[y]);return l.useEffect(()=>{const r=b.current;if(r){const w=m=>{var E,P,_;const f=m.altKey||m.ctrlKey||m.metaKey;if(m.key==="Tab"&&!f){const K=document.activeElement,L=m.shiftKey;if(m.target===r&&L){(E=a.current)==null||E.focus();return}const F=u({tabbingDirection:L?"backwards":"forwards"}),ot=F.findIndex(d=>d===K);mt(F.slice(ot+1))?m.preventDefault():L?(P=a.current)==null||P.focus():(_=g.current)==null||_.focus()}};return r.addEventListener("keydown",w),()=>r.removeEventListener("keydown",w)}},[y,u]),s.jsxs(Ae,{ref:T,role:"region","aria-label":c.replace("{hotkey}",k),tabIndex:-1,style:{pointerEvents:I?void 0:"none"},children:[I&&s.jsx(Tt,{ref:a,onFocusFromOutsideViewport:()=>{const r=u({tabbingDirection:"forwards"});mt(r)}}),s.jsx(gt.Slot,{scope:o,children:s.jsx(H.ol,{tabIndex:-1,...p,ref:j})}),I&&s.jsx(Tt,{ref:g,onFocusFromOutsideViewport:()=>{const r=u({tabbingDirection:"backwards"});mt(r)}})]})});le.displayName=ce;var de="ToastFocusProxy",Tt=l.forwardRef((t,e)=>{const{__scopeToast:o,onFocusFromOutsideViewport:n,...c}=t,p=lt(de,o);return s.jsx(ae,{tabIndex:0,...c,ref:e,style:{position:"fixed"},onFocus:i=>{var a;const y=i.relatedTarget;!((a=p.viewport)!=null&&a.contains(y))&&n()}})});Tt.displayName=de;var et="Toast",Ve="toast.swipeStart",Me="toast.swipeMove",Oe="toast.swipeCancel",He="toast.swipeEnd",ue=l.forwardRef((t,e)=>{const{forceMount:o,open:n,defaultOpen:c,onOpenChange:p,...i}=t,[y,T]=Ee({prop:n,defaultProp:c??!0,onChange:p,caller:et});return s.jsx(Ie,{present:o||y,children:s.jsx(Xe,{open:y,...i,ref:e,onClose:()=>T(!1),onPause:rt(t.onPause),onResume:rt(t.onResume),onSwipeStart:A(t.onSwipeStart,a=>{a.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:A(t.onSwipeMove,a=>{const{x:g,y:b}=a.detail.delta;a.currentTarget.setAttribute("data-swipe","move"),a.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${g}px`),a.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${b}px`)}),onSwipeCancel:A(t.onSwipeCancel,a=>{a.currentTarget.setAttribute("data-swipe","cancel"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),a.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),a.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:A(t.onSwipeEnd,a=>{const{x:g,y:b}=a.detail.delta;a.currentTarget.setAttribute("data-swipe","end"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),a.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${g}px`),a.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${b}px`),T(!1)})})})});ue.displayName=et;var[Ke,qe]=re(et,{onClose(){}}),Xe=l.forwardRef((t,e)=>{const{__scopeToast:o,type:n="foreground",duration:c,open:p,onClose:i,onEscapeKeyDown:y,onPause:T,onResume:a,onSwipeStart:g,onSwipeMove:b,onSwipeCancel:j,onSwipeEnd:k,...I}=t,u=lt(et,o),[r,w]=l.useState(null),m=se(e,d=>w(d)),f=l.useRef(null),x=l.useRef(null),E=c||u.duration,P=l.useRef(0),_=l.useRef(E),K=l.useRef(0),{onToastAdd:L,onToastRemove:ut}=u,V=rt(()=>{var C;(r==null?void 0:r.contains(document.activeElement))&&((C=u.viewport)==null||C.focus()),i()}),F=l.useCallback(d=>{!d||d===1/0||(window.clearTimeout(K.current),P.current=new Date().getTime(),K.current=window.setTimeout(V,d))},[V]);l.useEffect(()=>{const d=u.viewport;if(d){const C=()=>{F(_.current),a==null||a()},D=()=>{const q=new Date().getTime()-P.current;_.current=_.current-q,window.clearTimeout(K.current),T==null||T()};return d.addEventListener(ft,D),d.addEventListener(yt,C),()=>{d.removeEventListener(ft,D),d.removeEventListener(yt,C)}}},[u.viewport,E,T,a,F]),l.useEffect(()=>{p&&!u.isClosePausedRef.current&&F(E)},[p,E,u.isClosePausedRef,F]),l.useEffect(()=>(L(),()=>ut()),[L,ut]);const ot=l.useMemo(()=>r?we(r):null,[r]);return u.viewport?s.jsxs(s.Fragment,{children:[ot&&s.jsx(We,{__scopeToast:o,role:"status","aria-live":n==="foreground"?"assertive":"polite",children:ot}),s.jsx(Ke,{scope:o,onClose:V,children:ne.createPortal(s.jsx(gt.ItemSlot,{scope:o,children:s.jsx(Be,{asChild:!0,onEscapeKeyDown:A(y,()=>{u.isFocusedToastEscapeKeyDownRef.current||V(),u.isFocusedToastEscapeKeyDownRef.current=!1}),children:s.jsx(H.li,{tabIndex:0,"data-state":p?"open":"closed","data-swipe-direction":u.swipeDirection,...I,ref:m,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:A(t.onKeyDown,d=>{d.key==="Escape"&&(y==null||y(d.nativeEvent),d.nativeEvent.defaultPrevented||(u.isFocusedToastEscapeKeyDownRef.current=!0,V()))}),onPointerDown:A(t.onPointerDown,d=>{d.button===0&&(f.current={x:d.clientX,y:d.clientY})}),onPointerMove:A(t.onPointerMove,d=>{if(!f.current)return;const C=d.clientX-f.current.x,D=d.clientY-f.current.y,q=!!x.current,X=["left","right"].includes(u.swipeDirection),nt=["left","up"].includes(u.swipeDirection)?Math.min:Math.max,ge=X?nt(0,C):0,be=X?0:nt(0,D),pt=d.pointerType==="touch"?10:2,st={x:ge,y:be},Et={originalEvent:d,delta:st};q?(x.current=st,at(Me,b,Et,{discrete:!1})):Pt(st,u.swipeDirection,pt)?(x.current=st,at(Ve,g,Et,{discrete:!1}),d.target.setPointerCapture(d.pointerId)):(Math.abs(C)>pt||Math.abs(D)>pt)&&(f.current=null)}),onPointerUp:A(t.onPointerUp,d=>{const C=x.current,D=d.target;if(D.hasPointerCapture(d.pointerId)&&D.releasePointerCapture(d.pointerId),x.current=null,f.current=null,C){const q=d.currentTarget,X={originalEvent:d,delta:C};Pt(C,u.swipeDirection,u.swipeThreshold)?at(He,k,X,{discrete:!0}):at(Oe,j,X,{discrete:!0}),q.addEventListener("click",nt=>nt.preventDefault(),{once:!0})}})})})}),u.viewport)})]}):null}),We=t=>{const{__scopeToast:e,children:o,...n}=t,c=lt(et,e),[p,i]=l.useState(!1),[y,T]=l.useState(!1);return Je(()=>i(!0)),l.useEffect(()=>{const a=window.setTimeout(()=>T(!0),1e3);return()=>window.clearTimeout(a)},[]),y?null:s.jsx(ke,{asChild:!0,children:s.jsx(ae,{...n,children:p&&s.jsxs(s.Fragment,{children:[c.label," ",o]})})})},$e="ToastTitle",pe=l.forwardRef((t,e)=>{const{__scopeToast:o,...n}=t;return s.jsx(H.div,{...n,ref:e})});pe.displayName=$e;var Ue="ToastDescription",me=l.forwardRef((t,e)=>{const{__scopeToast:o,...n}=t;return s.jsx(H.div,{...n,ref:e})});me.displayName=Ue;var fe="ToastAction",Ye=l.forwardRef((t,e)=>{const{altText:o,...n}=t;return o.trim()?s.jsx(Te,{altText:o,asChild:!0,children:s.jsx(bt,{...n,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${fe}\`. Expected non-empty \`string\`.`),null)});Ye.displayName=fe;var ye="ToastClose",bt=l.forwardRef((t,e)=>{const{__scopeToast:o,...n}=t,c=qe(ye,o);return s.jsx(Te,{asChild:!0,children:s.jsx(H.button,{type:"button",...n,ref:e,onClick:A(t.onClick,c.onClose)})})});bt.displayName=ye;var Te=l.forwardRef((t,e)=>{const{__scopeToast:o,altText:n,...c}=t;return s.jsx(H.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":n||void 0,...c,ref:e})});function we(t){const e=[];return Array.from(t.childNodes).forEach(n=>{if(n.nodeType===n.TEXT_NODE&&n.textContent&&e.push(n.textContent),ze(n)){const c=n.ariaHidden||n.hidden||n.style.display==="none",p=n.dataset.radixToastAnnounceExclude==="";if(!c)if(p){const i=n.dataset.radixToastAnnounceAlt;i&&e.push(i)}else e.push(...we(n))}}),e}function at(t,e,o,{discrete:n}){const c=o.originalEvent.currentTarget,p=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:o});e&&c.addEventListener(t,e,{once:!0}),n?Pe(c,p):c.dispatchEvent(p)}var Pt=(t,e,o=0)=>{const n=Math.abs(t.x),c=Math.abs(t.y),p=n>c;return e==="left"||e==="right"?p&&n>o:!p&&c>o};function Je(t=()=>{}){const e=rt(t);Re(()=>{let o=0,n=0;return o=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(o),window.cancelAnimationFrame(n)}},[e])}function ze(t){return t.nodeType===t.ELEMENT_NODE}function Ge(t){const e=[],o=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const c=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||c?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)e.push(o.currentNode);return e}function mt(t){const e=document.activeElement;return t.some(o=>o===e?!0:(o.focus(),document.activeElement!==e))}var Qe=ie,Ze=le,to=ue,eo=pe,oo=me,no=bt;const dt=({title:t,description:e,content:o,duration:n,position:c,closeButtonIcon:p,hideClose:i,className:y,testId:T,onExit:a,additionalProps:g={}})=>s.jsxs(to,{className:xe("arm-toast",y),duration:n,"data-position":c,"data-testid":T,"aria-label":"Notification",onOpenChange:b=>{!b&&a&&a()},...g,children:[t&&s.jsx(eo,{className:"arm-toast-title",children:t}),e&&s.jsx(oo,{className:"arm-toast-description",children:e}),p!==!1&&!i&&s.jsx(no,{className:"arm-toast-close","aria-label":"Close",children:p}),o]});dt.displayName="Toast";dt.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{title:{required:!1,tsType:{name:"string"},description:"optional title for the toast popup (will be displayed above description & content)"},description:{required:!1,tsType:{name:"string"},description:"optional text content for the toast popup (will be displayed below title & above content)"},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"optional JSX content for the toast popup (will be displayed below title & description)"},duration:{required:!1,tsType:{name:"number"},description:"how long to show the toast in ms for (will default to global setting or failing that 5000)"},hideClose:{required:!1,tsType:{name:"boolean"},description:"hide the close button entirely?"},className:{required:!1,tsType:{name:"string"},description:"optional class name to add to the toast element"},testId:{required:!1,tsType:{name:"string"},description:"optional test id to add to the toast element"},additionalProps:{required:!1,tsType:{name:"ReactRefAttributes",raw:"React.RefAttributes<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},description:"optional additional props to spread onto the toast component",defaultValue:{value:"{}",computed:!1}},position:{required:!0,tsType:{name:"union",raw:"'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'",elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"}]},description:'where to position the toast, defaults to "bottom-right"'},closeButtonIcon:{required:!0,tsType:{name:"union",raw:"React.JSX.Element | false",elements:[{name:"React.JSX.Element"},{name:"literal",value:"false"}]},description:"the icon to use for the dialog close button"},onExit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"called when the toast has left the screen"}}};const so={addToast:()=>{throw new Error("Unable to dispatch toast, are you sure you've added either the <ArmstrongProvider> or <ToastProvider>?")},dismissToastByKey:()=>{throw new Error("Unable to dismiss toast, are you sure you've added either the <ArmstrongProvider> or <ToastProvider>?")}},xt=S.createContext(so),ht=({children:t,duration:e,position:o,closeButtonIcon:n,displayMode:c,ignorePredicate:p})=>{const i=De({toastDuration:e,toastPosition:o,toastCloseButtonIcon:n,toastDisplayMode:c,toastIgnorePredicate:p}),y=S.useRef(1),[T,a]=S.useState([]),g=S.useRef(T);g.current=T;const b=i.toastPosition==="bottom-left"||i.toastPosition==="top-left"?"left":"right",j=S.useCallback(u=>{var m;if((m=i.toastIgnorePredicate)!=null&&m.call(i,g.current.filter(f=>!f.exited).map(({key:f,exited:x,...E})=>E),u))return;const r=`toast-${y.current}`;y.current+=1;const w={...u,key:r,exited:!1};return a(f=>i.toastDisplayMode==="add"?[...f,w]:[w]),r},[i]),k=S.useCallback(u=>{a(r=>r.map(w=>w.key===u?{...w,exited:!0}:w))},[]),I=S.useCallback(u=>{a(r=>r.filter(w=>w.key!==u))},[]);return s.jsx(xt.Provider,{value:{addToast:j,dismissToastByKey:I},children:s.jsxs(Qe,{swipeDirection:b,duration:i.toastDuration,children:[t,T.map(({key:u,...r})=>s.jsx(dt,{duration:i.toastDuration,position:i.toastPosition,closeButtonIcon:i.toastCloseButtonIcon,onExit:()=>k(u),...r},u)),i.globalPortalTo&&ne.createPortal(s.jsx(Ze,{className:"arm-toast-viewport","data-position":i.toastPosition}),i.globalPortalTo)]})})};ht.displayName="ToastProvider";ht.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{duration:{required:!1,tsType:{name:"number"},description:"how long ot show toast messages for in ms, defaults to 5000"},position:{required:!1,tsType:{name:"union",raw:"'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'",elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"}]},description:'where to position the toast, defaults to "bottom-right"'},closeButtonIcon:{required:!1,tsType:{name:"union",raw:"React.JSX.Element | false",elements:[{name:"React.JSX.Element"},{name:"literal",value:"false"}]},description:"the icon to use for the dialog close button"},displayMode:{required:!1,tsType:{name:"union",raw:"'add' | 'replace'",elements:[{name:"literal",value:"'add'"},{name:"literal",value:"'replace'"}]},description:"whether to add toasts to a stack or display one at a time"},ignorePredicate:{required:!1,tsType:{name:"signature",type:"function",raw:"(existingToasts: IToast[], incomingToast: IToast) => boolean",signature:{arguments:[{type:{name:"Array",elements:[{name:"IToast"}],raw:"IToast[]"},name:"existingToasts"},{type:{name:"IToast"},name:"incomingToast"}],return:{name:"boolean"}}},description:"ignore toasts if an existing toast matches this predicate"}}};const ve=()=>{const{addToast:t}=S.useContext(xt);return t},ao=()=>{const{dismissToastByKey:t}=S.useContext(xt);return t},N=({children:t,config:e={}})=>s.jsx(Ne,{...e,children:s.jsx(ht,{children:t})});N.__docgenInfo={description:"",methods:[],displayName:"ArmstrongProvider",props:{config:{required:!1,tsType:{name:"IArmstrongConfig"},description:"A dictionary of optional global config, overrides the system defaults",defaultValue:{value:"{}",computed:!1}}}};const ro={title:"Modals/Toast",component:dt,parameters:{docs:{description:{component:"metadata"}}}},R={args:{title:"Here is a toast!",description:"Here is the description for my toast"},decorators:[t=>s.jsx(N,{children:s.jsx(t,{})})],render:t=>{const e=ve();return s.jsx(it,{onClick:()=>e(t),children:"Send a toast"})}},M={...R,play:async({canvasElement:t,args:e})=>{const o=B(t).getByText("Send a toast");await h.click(o);const n=await tt(document.body,e.title??""),c=await tt(document.body,e.description??"");v(n).toBeVisible(),v(c).toBeVisible();const p=await he(document.body,"button",{name:"Close"});await O(()=>h.click(p)),await O(()=>Promise.all([v(n).not.toBeVisible(),v(c).not.toBeVisible()])),await h.click(o),await h.click(o);const i=await wt(document.body,e.title??"");await O(()=>v(i).toHaveLength(2))}},W={...R,args:{...R.args,duration:100},play:async({canvasElement:t,args:e})=>{const o=B(t).getByText("Send a toast");await h.click(o);const n=await tt(document.body,e.title??"");v(n).toBeVisible(),await O(()=>v(n).not.toBeVisible(),{timeout:400})}},$={...R,decorators:[t=>s.jsx(N,{config:{toastPosition:"top-left"},children:s.jsx(t,{})})],play:async({canvasElement:t})=>{const e=B(t).getByText("Send a toast");await h.click(e);const o=await ct(document.body,"Notification");v(o).toBeVisible(),v(o).toHaveAttribute("data-position","top-left")}},U={...R,decorators:[t=>s.jsx(N,{config:{toastPosition:"top-right"},children:s.jsx(t,{})})],play:async({canvasElement:t})=>{const e=B(t).getByText("Send a toast");await h.click(e);const o=await ct(document.body,"Notification");v(o).toBeVisible(),v(o).toHaveAttribute("data-position","top-right")}},Y={...R,decorators:[t=>s.jsx(N,{config:{toastPosition:"bottom-left"},children:s.jsx(t,{})})],play:async({canvasElement:t})=>{const e=B(t).getByText("Send a toast");await h.click(e);const o=await ct(document.body,"Notification");v(o).toBeVisible(),v(o).toHaveAttribute("data-position","bottom-left")}},J={...R,decorators:[t=>s.jsx(N,{config:{toastPosition:"bottom-right"},children:s.jsx(t,{})})],play:async({canvasElement:t})=>{const e=B(t).getByText("Send a toast");await h.click(e);const o=await ct(document.body,"Notification");v(o).toBeVisible(),v(o).toHaveAttribute("data-position","bottom-right")}},z={...R,args:{...R.args,content:s.jsx(it,{children:"Custom button"})},play:async({canvasElement:t})=>{const e=B(t).getByText("Send a toast");await h.click(e);const o=await tt(document.body,"Custom button");v(o).toBeVisible()}},G={...R,decorators:[t=>s.jsx(N,{config:{toastIgnorePredicate:(e,o)=>e.some(n=>n.title===o.title&&n.description===o.description)},children:s.jsx(t,{})})],play:async({canvasElement:t,args:e})=>{const o=B(t).getByText("Send a toast");await h.click(o),await h.click(o);const n=await wt(document.body,e.title??"");v(n.length).toBe(1)}},Q={...R,decorators:[t=>s.jsx(N,{config:{toastDisplayMode:"replace"},children:s.jsx(t,{})})],play:async({canvasElement:t,args:e})=>{const o=B(t).getByText("Send a toast");await h.click(o),await h.click(o);const n=await wt(document.body,e.title??"");v(n.length).toBe(1)}},Z={...R,render:t=>{const e=S.useRef(),[o,n]=S.useReducer(i=>i+1,1),c=ve(),p=ao();return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"flex-start"},children:[s.jsx(it,{onClick:()=>{e.current=c({...t,content:s.jsxs("span",{children:["Toast #",o]})}),n()},children:"Send a toast"}),s.jsx(it,{onClick:()=>{e.current&&(p(e.current),e.current=void 0)},children:"Dismiss the last toast"})]})},play:async({canvasElement:t,args:e})=>{const o=B(t).getByText("Send a toast");await h.click(o);const n=await tt(document.body,e.title??"");v(n).toBeVisible();const c=B(t).getByText("Dismiss the last toast");await O(()=>h.click(c)),await O(()=>v(n).not.toBeVisible())}};var Ct,Rt,St,Bt,At;M.parameters={...M.parameters,docs:{...(Ct=M.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  ...Template,
  play: async ({
    canvasElement,
    args
  }) => {
    // launch toast
    const button = within(canvasElement).getByText('Send a toast');
    await userEvent.click(button);

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
    await userEvent.click(button);
    await userEvent.click(button);
    const titles = await findAllByText(document.body, args.title ?? '');
    await waitFor(() => expect(titles).toHaveLength(2));
  }
}`,...(St=(Rt=M.parameters)==null?void 0:Rt.docs)==null?void 0:St.source},description:{story:"stories",...(At=(Bt=M.parameters)==null?void 0:Bt.docs)==null?void 0:At.description}}};var kt,It,Dt;W.parameters={...W.parameters,docs:{...(kt=W.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
    await userEvent.click(button);
    const title = await findByText(document.body, args.title ?? '');
    expect(title).toBeVisible();
    // check auto-dismiss after custom dismiss time of 100ms + 300ms for animation
    await waitFor(() => expect(title).not.toBeVisible(), {
      timeout: 400
    });
  }
}`,...(Dt=(It=W.parameters)==null?void 0:It.docs)==null?void 0:Dt.source}}};var Nt,jt,_t;$.parameters={...$.parameters,docs:{...(Nt=$.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
    await userEvent.click(button);
    const toast = await findByLabelText(document.body, 'Notification');
    expect(toast).toBeVisible();
    expect(toast).toHaveAttribute('data-position', 'top-left');
  }
}`,...(_t=(jt=$.parameters)==null?void 0:jt.docs)==null?void 0:_t.source}}};var Ft,Lt,Vt;U.parameters={...U.parameters,docs:{...(Ft=U.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
    await userEvent.click(button);
    const toast = await findByLabelText(document.body, 'Notification');
    expect(toast).toBeVisible();
    expect(toast).toHaveAttribute('data-position', 'top-right');
  }
}`,...(Vt=(Lt=U.parameters)==null?void 0:Lt.docs)==null?void 0:Vt.source}}};var Mt,Ot,Ht;Y.parameters={...Y.parameters,docs:{...(Mt=Y.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
    await userEvent.click(button);
    const toast = await findByLabelText(document.body, 'Notification');
    expect(toast).toBeVisible();
    expect(toast).toHaveAttribute('data-position', 'bottom-left');
  }
}`,...(Ht=(Ot=Y.parameters)==null?void 0:Ot.docs)==null?void 0:Ht.source}}};var Kt,qt,Xt;J.parameters={...J.parameters,docs:{...(Kt=J.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  ...Template,
  decorators: [Story => <ArmstrongProvider config={{
    toastPosition: 'bottom-right'
  }}>
        <Story />
      </ArmstrongProvider>],
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByText('Send a toast');
    await userEvent.click(button);
    const toast = await findByLabelText(document.body, 'Notification');
    expect(toast).toBeVisible();
    expect(toast).toHaveAttribute('data-position', 'bottom-right');
  }
}`,...(Xt=(qt=J.parameters)==null?void 0:qt.docs)==null?void 0:Xt.source}}};var Wt,$t,Ut;z.parameters={...z.parameters,docs:{...(Wt=z.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    content: <Button>Custom button</Button>
  },
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByText('Send a toast');
    await userEvent.click(button);
    const customButton = await findByText(document.body, 'Custom button');
    expect(customButton).toBeVisible();
  }
}`,...(Ut=($t=z.parameters)==null?void 0:$t.docs)==null?void 0:Ut.source}}};var Yt,Jt,zt;G.parameters={...G.parameters,docs:{...(Yt=G.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
  ...Template,
  decorators: [Story => <ArmstrongProvider config={{
    toastIgnorePredicate: (existing, incoming) => existing.some(t => t.title === incoming.title && t.description === incoming.description)
  }}>
        <Story />
      </ArmstrongProvider>],
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByText('Send a toast');
    await userEvent.click(button);
    await userEvent.click(button); // should be ignored

    const toasts = await findAllByText(document.body, args.title ?? '');
    expect(toasts.length).toBe(1);
  }
}`,...(zt=(Jt=G.parameters)==null?void 0:Jt.docs)==null?void 0:zt.source}}};var Gt,Qt,Zt;Q.parameters={...Q.parameters,docs:{...(Gt=Q.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
  ...Template,
  decorators: [Story => <ArmstrongProvider config={{
    toastDisplayMode: 'replace'
  }}>
        <Story />
      </ArmstrongProvider>],
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByText('Send a toast');
    await userEvent.click(button);
    await userEvent.click(button); // should replace the previous toast

    const toasts = await findAllByText(document.body, args.title ?? '');
    expect(toasts.length).toBe(1);
  }
}`,...(Zt=(Qt=Q.parameters)==null?void 0:Qt.docs)==null?void 0:Zt.source}}};var te,ee,oe;Z.parameters={...Z.parameters,docs:{...(te=Z.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...Template,
  render: args => {
    const lastToastRef = React.useRef<string | undefined>();
    const [incrementor, increment] = React.useReducer(n => n + 1, 1);
    const dispatch = useToast();
    const dismiss = useDismissToast();
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'flex-start'
    }}>
        <Button onClick={() => {
        lastToastRef.current = dispatch({
          ...args,
          content: <span>Toast #{incrementor}</span>
        });
        increment();
      }}>
          Send a toast
        </Button>
        <Button onClick={() => {
        if (lastToastRef.current) {
          dismiss(lastToastRef.current);
          lastToastRef.current = undefined;
        }
      }}>
          Dismiss the last toast
        </Button>
      </div>;
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByText('Send a toast');
    await userEvent.click(button);
    const title = await findByText(document.body, args.title ?? '');
    expect(title).toBeVisible();

    // check close
    const close = within(canvasElement).getByText('Dismiss the last toast');
    await waitFor(() => userEvent.click(close));
    await waitFor(() => expect(title).not.toBeVisible());
  }
}`,...(oe=(ee=Z.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};const io=["Default","CustomDuration","TopLeft","TopRight","BottomLeft","BottomRight","CustomContent","IgnoreDuplicateToast","ReplaceDisplayMode","DismissToast"],ho=Object.freeze(Object.defineProperty({__proto__:null,BottomLeft:Y,BottomRight:J,CustomContent:z,CustomDuration:W,Default:M,DismissToast:Z,IgnoreDuplicateToast:G,ReplaceDisplayMode:Q,TopLeft:$,TopRight:U,__namedExportsOrder:io,default:ro},Symbol.toStringTag,{value:"Module"}));export{M as D,dt as T,ho as t};
