import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{c as be,w as S,u as h,g as it,e as v,d as Z,a as M,b as xe,h as Tt}from"./index-BmZcwVSF.js";import{r as a}from"./index-DwQS_Y10.js";import{r as oe}from"./index-BY2j7gpI.js";import{d as he,b as B,P as O,e as Ee,c as Pe,u as Ce}from"./index-CWQsrU90.js";import{u as ne}from"./index-DKCiyFsV.js";import{c as Re}from"./index-Dp6IY7a_.js";import{R as Se,B as Be}from"./index-D-iaL4kR.js";import{P as Ae,V as se}from"./index-DHRVNcCi.js";import{P as ke}from"./index-CC-sFNo4.js";import{u as at}from"./index-Bgmmd5SI.js";import{u as Ie,A as De}from"./config.context-Db4Op3G9.js";import{B as rt}from"./button.component-DGjVvDTT.js";var wt="ToastProvider",[vt,Ne,je]=Re("Toast"),[ae]=Pe("Toast",[je]),[_e,ct]=ae(wt),re=t=>{const{__scopeToast:e,label:o="Notification",duration:n=5e3,swipeDirection:l="right",swipeThreshold:p=50,children:c}=t,[y,T]=a.useState(null),[r,g]=a.useState(0),b=a.useRef(!1),N=a.useRef(!1);return o.trim()||console.error(`Invalid prop \`label\` supplied to \`${wt}\`. Expected non-empty \`string\`.`),s.jsx(vt.Provider,{scope:e,children:s.jsx(_e,{scope:e,label:o,duration:n,swipeDirection:l,swipeThreshold:p,toastCount:r,viewport:y,onViewportChange:T,onToastAdd:a.useCallback(()=>g(A=>A+1),[]),onToastRemove:a.useCallback(()=>g(A=>A-1),[]),isFocusedToastEscapeKeyDownRef:b,isClosePausedRef:N,children:c})})};re.displayName=wt;var ie="ToastViewport",Fe=["F8"],mt="toast.viewportPause",ft="toast.viewportResume",ce=a.forwardRef((t,e)=>{const{__scopeToast:o,hotkey:n=Fe,label:l="Notifications ({hotkey})",...p}=t,c=ct(ie,o),y=Ne(o),T=a.useRef(null),r=a.useRef(null),g=a.useRef(null),b=a.useRef(null),N=ne(e,b,c.onViewportChange),A=n.join("+").replace(/Key/g,"").replace(/Digit/g,""),k=c.toastCount>0;a.useEffect(()=>{const i=w=>{var f;n.length!==0&&n.every(x=>w[x]||w.code===x)&&((f=b.current)==null||f.focus())};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[n]),a.useEffect(()=>{const i=T.current,w=b.current;if(k&&i&&w){const m=()=>{if(!c.isClosePausedRef.current){const P=new CustomEvent(mt);w.dispatchEvent(P),c.isClosePausedRef.current=!0}},f=()=>{if(c.isClosePausedRef.current){const P=new CustomEvent(ft);w.dispatchEvent(P),c.isClosePausedRef.current=!1}},x=P=>{!i.contains(P.relatedTarget)&&f()},E=()=>{i.contains(document.activeElement)||f()};return i.addEventListener("focusin",m),i.addEventListener("focusout",x),i.addEventListener("pointermove",m),i.addEventListener("pointerleave",E),window.addEventListener("blur",m),window.addEventListener("focus",f),()=>{i.removeEventListener("focusin",m),i.removeEventListener("focusout",x),i.removeEventListener("pointermove",m),i.removeEventListener("pointerleave",E),window.removeEventListener("blur",m),window.removeEventListener("focus",f)}}},[k,c.isClosePausedRef]);const u=a.useCallback(({tabbingDirection:i})=>{const m=y().map(f=>{const x=f.ref.current,E=[x,...ze(x)];return i==="forwards"?E:E.reverse()});return(i==="forwards"?m.reverse():m).flat()},[y]);return a.useEffect(()=>{const i=b.current;if(i){const w=m=>{var E,P,j;const f=m.altKey||m.ctrlKey||m.metaKey;if(m.key==="Tab"&&!f){const H=document.activeElement,F=m.shiftKey;if(m.target===i&&F){(E=r.current)==null||E.focus();return}const _=u({tabbingDirection:F?"backwards":"forwards"}),et=_.findIndex(d=>d===H);pt(_.slice(et+1))?m.preventDefault():F?(P=r.current)==null||P.focus():(j=g.current)==null||j.focus()}};return i.addEventListener("keydown",w),()=>i.removeEventListener("keydown",w)}},[y,u]),s.jsxs(Be,{ref:T,role:"region","aria-label":l.replace("{hotkey}",A),tabIndex:-1,style:{pointerEvents:k?void 0:"none"},children:[k&&s.jsx(yt,{ref:r,onFocusFromOutsideViewport:()=>{const i=u({tabbingDirection:"forwards"});pt(i)}}),s.jsx(vt.Slot,{scope:o,children:s.jsx(O.ol,{tabIndex:-1,...p,ref:N})}),k&&s.jsx(yt,{ref:g,onFocusFromOutsideViewport:()=>{const i=u({tabbingDirection:"backwards"});pt(i)}})]})});ce.displayName=ie;var le="ToastFocusProxy",yt=a.forwardRef((t,e)=>{const{__scopeToast:o,onFocusFromOutsideViewport:n,...l}=t,p=ct(le,o);return s.jsx(se,{tabIndex:0,...l,ref:e,style:{position:"fixed"},onFocus:c=>{var r;const y=c.relatedTarget;!((r=p.viewport)!=null&&r.contains(y))&&n()}})});yt.displayName=le;var tt="Toast",Le="toast.swipeStart",Ve="toast.swipeMove",Me="toast.swipeCancel",Oe="toast.swipeEnd",de=a.forwardRef((t,e)=>{const{forceMount:o,open:n,defaultOpen:l,onOpenChange:p,...c}=t,[y,T]=he({prop:n,defaultProp:l??!0,onChange:p,caller:tt});return s.jsx(ke,{present:o||y,children:s.jsx(qe,{open:y,...c,ref:e,onClose:()=>T(!1),onPause:at(t.onPause),onResume:at(t.onResume),onSwipeStart:B(t.onSwipeStart,r=>{r.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:B(t.onSwipeMove,r=>{const{x:g,y:b}=r.detail.delta;r.currentTarget.setAttribute("data-swipe","move"),r.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${g}px`),r.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${b}px`)}),onSwipeCancel:B(t.onSwipeCancel,r=>{r.currentTarget.setAttribute("data-swipe","cancel"),r.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),r.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),r.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),r.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:B(t.onSwipeEnd,r=>{const{x:g,y:b}=r.detail.delta;r.currentTarget.setAttribute("data-swipe","end"),r.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),r.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),r.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${g}px`),r.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${b}px`),T(!1)})})})});de.displayName=tt;var[He,Ke]=ae(tt,{onClose(){}}),qe=a.forwardRef((t,e)=>{const{__scopeToast:o,type:n="foreground",duration:l,open:p,onClose:c,onEscapeKeyDown:y,onPause:T,onResume:r,onSwipeStart:g,onSwipeMove:b,onSwipeCancel:N,onSwipeEnd:A,...k}=t,u=ct(tt,o),[i,w]=a.useState(null),m=ne(e,d=>w(d)),f=a.useRef(null),x=a.useRef(null),E=l||u.duration,P=a.useRef(0),j=a.useRef(E),H=a.useRef(0),{onToastAdd:F,onToastRemove:dt}=u,L=at(()=>{var C;(i==null?void 0:i.contains(document.activeElement))&&((C=u.viewport)==null||C.focus()),c()}),_=a.useCallback(d=>{!d||d===1/0||(window.clearTimeout(H.current),P.current=new Date().getTime(),H.current=window.setTimeout(L,d))},[L]);a.useEffect(()=>{const d=u.viewport;if(d){const C=()=>{_(j.current),r==null||r()},I=()=>{const K=new Date().getTime()-P.current;j.current=j.current-K,window.clearTimeout(H.current),T==null||T()};return d.addEventListener(mt,I),d.addEventListener(ft,C),()=>{d.removeEventListener(mt,I),d.removeEventListener(ft,C)}}},[u.viewport,E,T,r,_]),a.useEffect(()=>{p&&!u.isClosePausedRef.current&&_(E)},[p,E,u.isClosePausedRef,_]),a.useEffect(()=>(F(),()=>dt()),[F,dt]);const et=a.useMemo(()=>i?Te(i):null,[i]);return u.viewport?s.jsxs(s.Fragment,{children:[et&&s.jsx(Xe,{__scopeToast:o,role:"status","aria-live":n==="foreground"?"assertive":"polite",children:et}),s.jsx(He,{scope:o,onClose:L,children:oe.createPortal(s.jsx(vt.ItemSlot,{scope:o,children:s.jsx(Se,{asChild:!0,onEscapeKeyDown:B(y,()=>{u.isFocusedToastEscapeKeyDownRef.current||L(),u.isFocusedToastEscapeKeyDownRef.current=!1}),children:s.jsx(O.li,{tabIndex:0,"data-state":p?"open":"closed","data-swipe-direction":u.swipeDirection,...k,ref:m,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:B(t.onKeyDown,d=>{d.key==="Escape"&&(y==null||y(d.nativeEvent),d.nativeEvent.defaultPrevented||(u.isFocusedToastEscapeKeyDownRef.current=!0,L()))}),onPointerDown:B(t.onPointerDown,d=>{d.button===0&&(f.current={x:d.clientX,y:d.clientY})}),onPointerMove:B(t.onPointerMove,d=>{if(!f.current)return;const C=d.clientX-f.current.x,I=d.clientY-f.current.y,K=!!x.current,q=["left","right"].includes(u.swipeDirection),ot=["left","up"].includes(u.swipeDirection)?Math.min:Math.max,ve=q?ot(0,C):0,ge=q?0:ot(0,I),ut=d.pointerType==="touch"?10:2,nt={x:ve,y:ge},ht={originalEvent:d,delta:nt};K?(x.current=nt,st(Ve,b,ht,{discrete:!1})):Et(nt,u.swipeDirection,ut)?(x.current=nt,st(Le,g,ht,{discrete:!1}),d.target.setPointerCapture(d.pointerId)):(Math.abs(C)>ut||Math.abs(I)>ut)&&(f.current=null)}),onPointerUp:B(t.onPointerUp,d=>{const C=x.current,I=d.target;if(I.hasPointerCapture(d.pointerId)&&I.releasePointerCapture(d.pointerId),x.current=null,f.current=null,C){const K=d.currentTarget,q={originalEvent:d,delta:C};Et(C,u.swipeDirection,u.swipeThreshold)?st(Oe,A,q,{discrete:!0}):st(Me,N,q,{discrete:!0}),K.addEventListener("click",ot=>ot.preventDefault(),{once:!0})}})})})}),u.viewport)})]}):null}),Xe=t=>{const{__scopeToast:e,children:o,...n}=t,l=ct(tt,e),[p,c]=a.useState(!1),[y,T]=a.useState(!1);return Ye(()=>c(!0)),a.useEffect(()=>{const r=window.setTimeout(()=>T(!0),1e3);return()=>window.clearTimeout(r)},[]),y?null:s.jsx(Ae,{asChild:!0,children:s.jsx(se,{...n,children:p&&s.jsxs(s.Fragment,{children:[l.label," ",o]})})})},We="ToastTitle",ue=a.forwardRef((t,e)=>{const{__scopeToast:o,...n}=t;return s.jsx(O.div,{...n,ref:e})});ue.displayName=We;var $e="ToastDescription",pe=a.forwardRef((t,e)=>{const{__scopeToast:o,...n}=t;return s.jsx(O.div,{...n,ref:e})});pe.displayName=$e;var me="ToastAction",Ue=a.forwardRef((t,e)=>{const{altText:o,...n}=t;return o.trim()?s.jsx(ye,{altText:o,asChild:!0,children:s.jsx(gt,{...n,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${me}\`. Expected non-empty \`string\`.`),null)});Ue.displayName=me;var fe="ToastClose",gt=a.forwardRef((t,e)=>{const{__scopeToast:o,...n}=t,l=Ke(fe,o);return s.jsx(ye,{asChild:!0,children:s.jsx(O.button,{type:"button",...n,ref:e,onClick:B(t.onClick,l.onClose)})})});gt.displayName=fe;var ye=a.forwardRef((t,e)=>{const{__scopeToast:o,altText:n,...l}=t;return s.jsx(O.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":n||void 0,...l,ref:e})});function Te(t){const e=[];return Array.from(t.childNodes).forEach(n=>{if(n.nodeType===n.TEXT_NODE&&n.textContent&&e.push(n.textContent),Je(n)){const l=n.ariaHidden||n.hidden||n.style.display==="none",p=n.dataset.radixToastAnnounceExclude==="";if(!l)if(p){const c=n.dataset.radixToastAnnounceAlt;c&&e.push(c)}else e.push(...Te(n))}}),e}function st(t,e,o,{discrete:n}){const l=o.originalEvent.currentTarget,p=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:o});e&&l.addEventListener(t,e,{once:!0}),n?Ee(l,p):l.dispatchEvent(p)}var Et=(t,e,o=0)=>{const n=Math.abs(t.x),l=Math.abs(t.y),p=n>l;return e==="left"||e==="right"?p&&n>o:!p&&l>o};function Ye(t=()=>{}){const e=at(t);Ce(()=>{let o=0,n=0;return o=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(o),window.cancelAnimationFrame(n)}},[e])}function Je(t){return t.nodeType===t.ELEMENT_NODE}function ze(t){const e=[],o=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const l=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||l?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)e.push(o.currentNode);return e}function pt(t){const e=document.activeElement;return t.some(o=>o===e?!0:(o.focus(),document.activeElement!==e))}var Ge=re,Qe=ce,Ze=de,to=ue,eo=pe,oo=gt;const lt=({title:t,description:e,content:o,duration:n,position:l,closeButtonIcon:p,hideClose:c,className:y,testId:T,onExit:r,additionalProps:g={}})=>s.jsxs(Ze,{className:be("arm-toast",y),duration:n,"data-position":l,"data-testid":T,"aria-label":"Notification",onOpenChange:b=>{!b&&r&&r()},...g,children:[t&&s.jsx(to,{className:"arm-toast-title",children:t}),e&&s.jsx(eo,{className:"arm-toast-description",children:e}),p!==!1&&!c&&s.jsx(oo,{className:"arm-toast-close","aria-label":"Close",children:p}),o]});lt.displayName="Toast";lt.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{title:{required:!1,tsType:{name:"string"},description:"optional title for the toast popup (will be displayed above description & content)"},description:{required:!1,tsType:{name:"string"},description:"optional text content for the toast popup (will be displayed below title & above content)"},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"optional JSX content for the toast popup (will be displayed below title & description)"},duration:{required:!1,tsType:{name:"number"},description:"how long to show the toast in ms for (will default to global setting or failing that 5000)"},hideClose:{required:!1,tsType:{name:"boolean"},description:"hide the close button entirely?"},className:{required:!1,tsType:{name:"string"},description:"optional class name to add to the toast element"},testId:{required:!1,tsType:{name:"string"},description:"optional test id to add to the toast element"},additionalProps:{required:!1,tsType:{name:"ReactRefAttributes",raw:"React.RefAttributes<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},description:"optional additional props to spread onto the toast component",defaultValue:{value:"{}",computed:!1}},position:{required:!0,tsType:{name:"union",raw:"'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'",elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"}]},description:'where to position the toast, defaults to "bottom-right"'},closeButtonIcon:{required:!0,tsType:{name:"union",raw:"React.JSX.Element | false",elements:[{name:"React.JSX.Element"},{name:"literal",value:"false"}]},description:"the icon to use for the dialog close button"},onExit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"called when the toast has left the screen"}}};const no={addToast:()=>{throw new Error("Unable to dispatch toast, are you sure you've added either the <ArmstrongProvider> or <ToastProvider>?")},dismissToastByKey:()=>{throw new Error("Unable to dismiss toast, are you sure you've added either the <ArmstrongProvider> or <ToastProvider>?")}},bt=a.createContext(no),xt=({children:t,duration:e,position:o,closeButtonIcon:n,displayMode:l,ignorePredicate:p})=>{const c=Ie({toastDuration:e,toastPosition:o,toastCloseButtonIcon:n,toastDisplayMode:l,toastIgnorePredicate:p}),y=a.useRef(1),[T,r]=a.useState([]),g=a.useRef(T);g.current=T;const b=c.toastPosition==="bottom-left"||c.toastPosition==="top-left"?"left":"right",N=a.useCallback(u=>{var m;if((m=c.toastIgnorePredicate)!=null&&m.call(c,g.current.filter(f=>!f.exited).map(({key:f,exited:x,...E})=>E),u))return;const i=`toast-${y.current}`;y.current+=1;const w={...u,key:i,exited:!1};return r(f=>c.toastDisplayMode==="add"?[...f,w]:[w]),i},[c]),A=a.useCallback(u=>{r(i=>i.map(w=>w.key===u?{...w,exited:!0}:w))},[]),k=a.useCallback(u=>{r(i=>i.filter(w=>w.key!==u))},[]);return s.jsx(bt.Provider,{value:{addToast:N,dismissToastByKey:k},children:s.jsxs(Ge,{swipeDirection:b,duration:c.toastDuration,children:[t,T.map(({key:u,...i})=>s.jsx(lt,{duration:c.toastDuration,position:c.toastPosition,closeButtonIcon:c.toastCloseButtonIcon,onExit:()=>A(u),...i},u)),c.globalPortalTo&&oe.createPortal(s.jsx(Qe,{className:"arm-toast-viewport","data-position":c.toastPosition}),c.globalPortalTo)]})})};xt.displayName="ToastProvider";xt.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{duration:{required:!1,tsType:{name:"number"},description:"how long ot show toast messages for in ms, defaults to 5000"},position:{required:!1,tsType:{name:"union",raw:"'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'",elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"}]},description:'where to position the toast, defaults to "bottom-right"'},closeButtonIcon:{required:!1,tsType:{name:"union",raw:"React.JSX.Element | false",elements:[{name:"React.JSX.Element"},{name:"literal",value:"false"}]},description:"the icon to use for the dialog close button"},displayMode:{required:!1,tsType:{name:"union",raw:"'add' | 'replace'",elements:[{name:"literal",value:"'add'"},{name:"literal",value:"'replace'"}]},description:"whether to add toasts to a stack or display one at a time"},ignorePredicate:{required:!1,tsType:{name:"signature",type:"function",raw:"(existingToasts: IToast[], incomingToast: IToast) => boolean",signature:{arguments:[{type:{name:"Array",elements:[{name:"IToast"}],raw:"IToast[]"},name:"existingToasts"},{type:{name:"IToast"},name:"incomingToast"}],return:{name:"boolean"}}},description:"ignore toasts if an existing toast matches this predicate"}}};const we=()=>{const{addToast:t}=a.useContext(bt);return t},so=()=>{const{dismissToastByKey:t}=a.useContext(bt);return t},D=({children:t,config:e={}})=>s.jsx(De,{...e,children:s.jsx(xt,{children:t})});D.__docgenInfo={description:"",methods:[],displayName:"ArmstrongProvider",props:{config:{required:!1,tsType:{name:"IArmstrongConfig"},description:"A dictionary of optional global config, overrides the system defaults",defaultValue:{value:"{}",computed:!1}}}};const ao={title:"Modals/Toast",component:lt,parameters:{docs:{description:{component:"metadata"}}}},R={args:{title:"Here is a toast!",description:"Here is the description for my toast"},decorators:[t=>s.jsx(D,{children:s.jsx(t,{})})],render:t=>{const e=we();return s.jsx(rt,{onClick:()=>e(t),children:"Send a toast"})}},V={...R,play:async({canvasElement:t,args:e})=>{const o=S(t).getByText("Send a toast");await h.click(o);const n=await Z(document.body,e.title??""),l=await Z(document.body,e.description??"");v(n).toBeVisible(),v(l).toBeVisible();const p=await xe(document.body,"button",{name:"Close"});await M(()=>h.click(p)),await M(()=>Promise.all([v(n).not.toBeVisible(),v(l).not.toBeVisible()])),await h.click(o),await h.click(o);const c=await Tt(document.body,e.title??"");await M(()=>v(c).toHaveLength(2))}},X={...R,args:{...R.args,duration:100},play:async({canvasElement:t,args:e})=>{const o=S(t).getByText("Send a toast");await h.click(o);const n=await Z(document.body,e.title??"");v(n).toBeVisible(),await M(()=>v(n).not.toBeVisible(),{timeout:400})}},W={...R,decorators:[t=>s.jsx(D,{config:{toastPosition:"top-left"},children:s.jsx(t,{})})],play:async({canvasElement:t})=>{const e=S(t).getByText("Send a toast");await h.click(e);const o=await it(document.body,"Notification");v(o).toBeVisible(),v(o).toHaveAttribute("data-position","top-left")}},$={...R,decorators:[t=>s.jsx(D,{config:{toastPosition:"top-right"},children:s.jsx(t,{})})],play:async({canvasElement:t})=>{const e=S(t).getByText("Send a toast");await h.click(e);const o=await it(document.body,"Notification");v(o).toBeVisible(),v(o).toHaveAttribute("data-position","top-right")}},U={...R,decorators:[t=>s.jsx(D,{config:{toastPosition:"bottom-left"},children:s.jsx(t,{})})],play:async({canvasElement:t})=>{const e=S(t).getByText("Send a toast");await h.click(e);const o=await it(document.body,"Notification");v(o).toBeVisible(),v(o).toHaveAttribute("data-position","bottom-left")}},Y={...R,decorators:[t=>s.jsx(D,{config:{toastPosition:"bottom-right"},children:s.jsx(t,{})})],play:async({canvasElement:t})=>{const e=S(t).getByText("Send a toast");await h.click(e);const o=await it(document.body,"Notification");v(o).toBeVisible(),v(o).toHaveAttribute("data-position","bottom-right")}},J={...R,args:{...R.args,content:s.jsx(rt,{children:"Custom button"})},play:async({canvasElement:t})=>{const e=S(t).getByText("Send a toast");await h.click(e);const o=await Z(document.body,"Custom button");v(o).toBeVisible()}},z={...R,decorators:[t=>s.jsx(D,{config:{toastIgnorePredicate:(e,o)=>e.some(n=>n.title===o.title&&n.description===o.description)},children:s.jsx(t,{})})],play:async({canvasElement:t,args:e})=>{const o=S(t).getByText("Send a toast");await h.click(o),await h.click(o);const n=await Tt(document.body,e.title??"");v(n.length).toBe(1)}},G={...R,decorators:[t=>s.jsx(D,{config:{toastDisplayMode:"replace"},children:s.jsx(t,{})})],play:async({canvasElement:t,args:e})=>{const o=S(t).getByText("Send a toast");await h.click(o),await h.click(o);const n=await Tt(document.body,e.title??"");v(n.length).toBe(1)}},Q={...R,render:t=>{const e=a.useRef(),[o,n]=a.useReducer(c=>c+1,1),l=we(),p=so();return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"flex-start"},children:[s.jsx(rt,{onClick:()=>{e.current=l({...t,content:s.jsxs("span",{children:["Toast #",o]})}),n()},children:"Send a toast"}),s.jsx(rt,{onClick:()=>{e.current&&(p(e.current),e.current=void 0)},children:"Dismiss the last toast"})]})},play:async({canvasElement:t,args:e})=>{const o=S(t).getByText("Send a toast");await h.click(o);const n=await Z(document.body,e.title??"");v(n).toBeVisible();const l=S(t).getByText("Dismiss the last toast");await M(()=>h.click(l)),await M(()=>v(n).not.toBeVisible())}};var Pt,Ct,Rt,St,Bt;V.parameters={...V.parameters,docs:{...(Pt=V.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(Rt=(Ct=V.parameters)==null?void 0:Ct.docs)==null?void 0:Rt.source},description:{story:"stories",...(Bt=(St=V.parameters)==null?void 0:St.docs)==null?void 0:Bt.description}}};var At,kt,It;X.parameters={...X.parameters,docs:{...(At=X.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(It=(kt=X.parameters)==null?void 0:kt.docs)==null?void 0:It.source}}};var Dt,Nt,jt;W.parameters={...W.parameters,docs:{...(Dt=W.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(jt=(Nt=W.parameters)==null?void 0:Nt.docs)==null?void 0:jt.source}}};var _t,Ft,Lt;$.parameters={...$.parameters,docs:{...(_t=$.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Lt=(Ft=$.parameters)==null?void 0:Ft.docs)==null?void 0:Lt.source}}};var Vt,Mt,Ot;U.parameters={...U.parameters,docs:{...(Vt=U.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Ot=(Mt=U.parameters)==null?void 0:Mt.docs)==null?void 0:Ot.source}}};var Ht,Kt,qt;Y.parameters={...Y.parameters,docs:{...(Ht=Y.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(qt=(Kt=Y.parameters)==null?void 0:Kt.docs)==null?void 0:qt.source}}};var Xt,Wt,$t;J.parameters={...J.parameters,docs:{...(Xt=J.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...($t=(Wt=J.parameters)==null?void 0:Wt.docs)==null?void 0:$t.source}}};var Ut,Yt,Jt;z.parameters={...z.parameters,docs:{...(Ut=z.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Jt=(Yt=z.parameters)==null?void 0:Yt.docs)==null?void 0:Jt.source}}};var zt,Gt,Qt;G.parameters={...G.parameters,docs:{...(zt=G.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Qt=(Gt=G.parameters)==null?void 0:Gt.docs)==null?void 0:Qt.source}}};var Zt,te,ee;Q.parameters={...Q.parameters,docs:{...(Zt=Q.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(ee=(te=Q.parameters)==null?void 0:te.docs)==null?void 0:ee.source}}};const ro=["Default","CustomDuration","TopLeft","TopRight","BottomLeft","BottomRight","CustomContent","IgnoreDuplicateToast","ReplaceDisplayMode","DismissToast"],xo=Object.freeze(Object.defineProperty({__proto__:null,BottomLeft:U,BottomRight:Y,CustomContent:J,CustomDuration:X,Default:V,DismissToast:Q,IgnoreDuplicateToast:z,ReplaceDisplayMode:G,TopLeft:W,TopRight:$,__namedExportsOrder:ro,default:ao},Symbol.toStringTag,{value:"Module"}));export{V as D,lt as T,xo as t};
