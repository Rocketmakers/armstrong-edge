import{a as pe,j as Y}from"./jsx-runtime-eae7a151.js";import{_ as g}from"./extends-98964cd2.js";import{r as e}from"./index-c4905b50.js";import{r as fe}from"./index-07d1f67e.js";import{$ as be,a as q,b as h,c as me}from"./index-10b0f2c6.js";import{$ as te,a as A,b as $e}from"./index-47240d79.js";import{$ as we}from"./index-89a7c115.js";import{$ as ve}from"./index-97ba0010.js";import{$ as Te,a as Ee}from"./index-981c5e3c.js";import{$ as xe,a as oe}from"./index-4dc7303c.js";import{$ as ye}from"./index-63c72c08.js";import{c as he}from"./classNames-9011e307.js";const ne="ToastProvider",[G,ge,Ce]=we("Toast"),[re,lt]=ve("Toast",[Ce]),[Pe,H]=re(ne),se=t=>{const{__scopeToast:n,label:r="Notification",duration:o=5e3,swipeDirection:c="right",swipeThreshold:l=50,children:p}=t,[f,b]=e.useState(null),[a,x]=e.useState(0),T=e.useRef(!1),F=e.useRef(!1);return e.createElement(G.Provider,{scope:n},e.createElement(Pe,{scope:n,label:r,duration:o,swipeDirection:c,swipeThreshold:l,toastCount:a,viewport:f,onViewportChange:b,onToastAdd:e.useCallback(()=>x(_=>_+1),[]),onToastRemove:e.useCallback(()=>x(_=>_-1),[]),isFocusedToastEscapeKeyDownRef:T,isClosePausedRef:F},p))};se.propTypes={label(t){if(t.label&&typeof t.label=="string"&&!t.label.trim()){const n=`Invalid prop \`label\` supplied to \`${ne}\`. Expected non-empty \`string\`.`;return new Error(n)}return null}};const _e="ToastViewport",Re=["F8"],B="toast.viewportPause",z="toast.viewportResume",Se=e.forwardRef((t,n)=>{const{__scopeToast:r,hotkey:o=Re,label:c="Notifications ({hotkey})",...l}=t,p=H(_e,r),f=ge(r),b=e.useRef(null),a=e.useRef(null),x=e.useRef(null),T=e.useRef(null),F=te(n,T,p.onViewportChange),_=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),R=p.toastCount>0;e.useEffect(()=>{const i=E=>{var u;o.every($=>E[$]||E.code===$)&&((u=T.current)===null||u===void 0||u.focus())};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[o]),e.useEffect(()=>{const i=b.current,E=T.current;if(R&&i&&E){const u=()=>{if(!p.isClosePausedRef.current){const v=new CustomEvent(B);E.dispatchEvent(v),p.isClosePausedRef.current=!0}},m=()=>{if(p.isClosePausedRef.current){const v=new CustomEvent(z);E.dispatchEvent(v),p.isClosePausedRef.current=!1}},$=v=>{!i.contains(v.relatedTarget)&&m()},w=()=>{i.contains(document.activeElement)||m()};return i.addEventListener("focusin",u),i.addEventListener("focusout",$),i.addEventListener("pointermove",u),i.addEventListener("pointerleave",w),window.addEventListener("blur",u),window.addEventListener("focus",m),()=>{i.removeEventListener("focusin",u),i.removeEventListener("focusout",$),i.removeEventListener("pointermove",u),i.removeEventListener("pointerleave",w),window.removeEventListener("blur",u),window.removeEventListener("focus",m)}}},[R,p.isClosePausedRef]);const d=e.useCallback(({tabbingDirection:i})=>{const u=f().map(m=>{const $=m.ref.current,w=[$,...Ye($)];return i==="forwards"?w:w.reverse()});return(i==="forwards"?u.reverse():u).flat()},[f]);return e.useEffect(()=>{const i=T.current;if(i){const E=u=>{const m=u.altKey||u.ctrlKey||u.metaKey;if(u.key==="Tab"&&!m){const N=document.activeElement,I=u.shiftKey;if(u.target===i&&I){var w;(w=a.current)===null||w===void 0||w.focus();return}const S=d({tabbingDirection:I?"backwards":"forwards"}),O=S.findIndex(s=>s===N);if(j(S.slice(O+1)))u.preventDefault();else{var v,C;I?(v=a.current)===null||v===void 0||v.focus():(C=x.current)===null||C===void 0||C.focus()}}};return i.addEventListener("keydown",E),()=>i.removeEventListener("keydown",E)}},[f,d]),e.createElement(Ee,{ref:b,role:"region","aria-label":c.replace("{hotkey}",_),tabIndex:-1,style:{pointerEvents:R?void 0:"none"}},R&&e.createElement(Z,{ref:a,onFocusFromOutsideViewport:()=>{const i=d({tabbingDirection:"forwards"});j(i)}}),e.createElement(G.Slot,{scope:r},e.createElement(A.ol,g({tabIndex:-1},l,{ref:F}))),R&&e.createElement(Z,{ref:x,onFocusFromOutsideViewport:()=>{const i=d({tabbingDirection:"backwards"});j(i)}}))}),Ie="ToastFocusProxy",Z=e.forwardRef((t,n)=>{const{__scopeToast:r,onFocusFromOutsideViewport:o,...c}=t,l=H(Ie,r);return e.createElement(oe,g({"aria-hidden":!0,tabIndex:0},c,{ref:n,style:{position:"fixed"},onFocus:p=>{var f;const b=p.relatedTarget;!((f=l.viewport)!==null&&f!==void 0&&f.contains(b))&&o()}}))}),W="Toast",De="toast.swipeStart",Ae="toast.swipeMove",Fe="toast.swipeCancel",Ne="toast.swipeEnd",Le=e.forwardRef((t,n)=>{const{forceMount:r,open:o,defaultOpen:c,onOpenChange:l,...p}=t,[f=!0,b]=be({prop:o,defaultProp:c,onChange:l});return e.createElement(ye,{present:r||f},e.createElement(ae,g({open:f},p,{ref:n,onClose:()=>b(!1),onPause:q(t.onPause),onResume:q(t.onResume),onSwipeStart:h(t.onSwipeStart,a=>{a.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:h(t.onSwipeMove,a=>{const{x,y:T}=a.detail.delta;a.currentTarget.setAttribute("data-swipe","move"),a.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${x}px`),a.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${T}px`)}),onSwipeCancel:h(t.onSwipeCancel,a=>{a.currentTarget.setAttribute("data-swipe","cancel"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),a.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),a.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:h(t.onSwipeEnd,a=>{const{x,y:T}=a.detail.delta;a.currentTarget.setAttribute("data-swipe","end"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),a.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${x}px`),a.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${T}px`),b(!1)})})))}),[Me,Oe]=re(W,{onClose(){}}),ae=e.forwardRef((t,n)=>{const{__scopeToast:r,type:o="foreground",duration:c,open:l,onClose:p,onEscapeKeyDown:f,onPause:b,onResume:a,onSwipeStart:x,onSwipeMove:T,onSwipeCancel:F,onSwipeEnd:_,...R}=t,d=H(W,r),[i,E]=e.useState(null),u=te(n,s=>E(s)),m=e.useRef(null),$=e.useRef(null),w=c||d.duration,v=e.useRef(0),C=e.useRef(w),N=e.useRef(0),{onToastAdd:I,onToastRemove:X}=d,D=q(()=>{var s;(i==null?void 0:i.contains(document.activeElement))&&((s=d.viewport)===null||s===void 0||s.focus()),p()}),S=e.useCallback(s=>{!s||s===1/0||(window.clearTimeout(N.current),v.current=new Date().getTime(),N.current=window.setTimeout(D,s))},[D]);e.useEffect(()=>{const s=d.viewport;if(s){const y=()=>{S(C.current),a==null||a()},P=()=>{const L=new Date().getTime()-v.current;C.current=C.current-L,window.clearTimeout(N.current),b==null||b()};return s.addEventListener(B,P),s.addEventListener(z,y),()=>{s.removeEventListener(B,P),s.removeEventListener(z,y)}}},[d.viewport,w,b,a,S]),e.useEffect(()=>{l&&!d.isClosePausedRef.current&&S(w)},[l,w,d.isClosePausedRef,S]),e.useEffect(()=>(I(),()=>X()),[I,X]);const O=e.useMemo(()=>i?le(i):null,[i]);return d.viewport?e.createElement(e.Fragment,null,O&&e.createElement(Ve,{__scopeToast:r,role:"status","aria-live":o==="foreground"?"assertive":"polite","aria-atomic":!0},O),e.createElement(Me,{scope:r,onClose:D},fe.createPortal(e.createElement(G.ItemSlot,{scope:r},e.createElement(Te,{asChild:!0,onEscapeKeyDown:h(f,()=>{d.isFocusedToastEscapeKeyDownRef.current||D(),d.isFocusedToastEscapeKeyDownRef.current=!1})},e.createElement(A.li,g({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":l?"open":"closed","data-swipe-direction":d.swipeDirection},R,{ref:u,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:h(t.onKeyDown,s=>{s.key==="Escape"&&(f==null||f(s.nativeEvent),s.nativeEvent.defaultPrevented||(d.isFocusedToastEscapeKeyDownRef.current=!0,D()))}),onPointerDown:h(t.onPointerDown,s=>{s.button===0&&(m.current={x:s.clientX,y:s.clientY})}),onPointerMove:h(t.onPointerMove,s=>{if(!m.current)return;const y=s.clientX-m.current.x,P=s.clientY-m.current.y,L=!!$.current,M=["left","right"].includes(d.swipeDirection),V=["left","up"].includes(d.swipeDirection)?Math.min:Math.max,de=M?V(0,y):0,ue=M?0:V(0,P),U=s.pointerType==="touch"?10:2,k={x:de,y:ue},Q={originalEvent:s,delta:k};L?($.current=k,K(Ae,T,Q,{discrete:!1})):ee(k,d.swipeDirection,U)?($.current=k,K(De,x,Q,{discrete:!1}),s.target.setPointerCapture(s.pointerId)):(Math.abs(y)>U||Math.abs(P)>U)&&(m.current=null)}),onPointerUp:h(t.onPointerUp,s=>{const y=$.current,P=s.target;if(P.hasPointerCapture(s.pointerId)&&P.releasePointerCapture(s.pointerId),$.current=null,m.current=null,y){const L=s.currentTarget,M={originalEvent:s,delta:y};ee(y,d.swipeDirection,d.swipeThreshold)?K(Ne,_,M,{discrete:!0}):K(Fe,F,M,{discrete:!0}),L.addEventListener("click",V=>V.preventDefault(),{once:!0})}})})))),d.viewport))):null});ae.propTypes={type(t){if(t.type&&!["foreground","background"].includes(t.type)){const n=`Invalid prop \`type\` supplied to \`${W}\`. Expected \`foreground | background\`.`;return new Error(n)}return null}};const Ve=t=>{const{__scopeToast:n,children:r,...o}=t,c=H(W,n),[l,p]=e.useState(!1),[f,b]=e.useState(!1);return Xe(()=>p(!0)),e.useEffect(()=>{const a=window.setTimeout(()=>b(!0),1e3);return()=>window.clearTimeout(a)},[]),f?null:e.createElement(xe,{asChild:!0},e.createElement(oe,o,l&&e.createElement(e.Fragment,null,c.label," ",r)))},ke=e.forwardRef((t,n)=>{const{__scopeToast:r,...o}=t;return e.createElement(A.div,g({},o,{ref:n}))}),Ke=e.forwardRef((t,n)=>{const{__scopeToast:r,...o}=t;return e.createElement(A.div,g({},o,{ref:n}))}),qe="ToastAction",He=e.forwardRef((t,n)=>{const{altText:r,...o}=t;return r?e.createElement(ce,{altText:r,asChild:!0},e.createElement(ie,g({},o,{ref:n}))):null});He.propTypes={altText(t){return t.altText?null:new Error(`Missing prop \`altText\` expected on \`${qe}\``)}};const We="ToastClose",ie=e.forwardRef((t,n)=>{const{__scopeToast:r,...o}=t,c=Oe(We,r);return e.createElement(ce,{asChild:!0},e.createElement(A.button,g({type:"button"},o,{ref:n,onClick:h(t.onClick,c.onClose)})))}),ce=e.forwardRef((t,n)=>{const{__scopeToast:r,altText:o,...c}=t;return e.createElement(A.div,g({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":o||void 0},c,{ref:n}))});function le(t){const n=[];return Array.from(t.childNodes).forEach(o=>{if(o.nodeType===o.TEXT_NODE&&o.textContent&&n.push(o.textContent),Ue(o)){const c=o.ariaHidden||o.hidden||o.style.display==="none",l=o.dataset.radixToastAnnounceExclude==="";if(!c)if(l){const p=o.dataset.radixToastAnnounceAlt;p&&n.push(p)}else n.push(...le(o))}}),n}function K(t,n,r,{discrete:o}){const c=r.originalEvent.currentTarget,l=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:r});n&&c.addEventListener(t,n,{once:!0}),o?$e(c,l):c.dispatchEvent(l)}const ee=(t,n,r=0)=>{const o=Math.abs(t.x),c=Math.abs(t.y),l=o>c;return n==="left"||n==="right"?l&&o>r:!l&&c>r};function Xe(t=()=>{}){const n=q(t);me(()=>{let r=0,o=0;return r=window.requestAnimationFrame(()=>o=window.requestAnimationFrame(n)),()=>{window.cancelAnimationFrame(r),window.cancelAnimationFrame(o)}},[n])}function Ue(t){return t.nodeType===t.ELEMENT_NODE}function Ye(t){const n=[],r=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const c=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||c?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)n.push(r.currentNode);return n}function j(t){const n=document.activeElement;return t.some(r=>r===n?!0:(r.focus(),document.activeElement!==n))}const dt=se,ut=Se,je=Le,Be=ke,ze=Ke,Je=ie;const J=({title:t,description:n,content:r,duration:o,position:c,closeButtonIcon:l,hideClose:p,className:f,testId:b,additionalProps:a={}})=>pe(je,{className:he("arm-toast",f),duration:o,"data-position":c,"data-testid":b,"aria-label":"Notification",...a,children:[t&&Y(Be,{className:"arm-toast-title",children:t}),n&&Y(ze,{className:"arm-toast-description",children:n}),l!==!1&&!p&&Y(Je,{className:"arm-toast-close","aria-label":"Close",children:l}),r]});J.displayName="Toast";try{J.displayName="Toast",J.__docgenInfo={description:"",displayName:"Toast",props:{position:{defaultValue:null,description:'where to position the toast, defaults to "bottom-right"',name:"position",required:!0,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},closeButtonIcon:{defaultValue:null,description:"the icon to use for the dialog close button",name:"closeButtonIcon",required:!0,type:{name:"false | Element"}},title:{defaultValue:null,description:"optional title for the toast popup (will be displayed above description & content)",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"optional text content for the toast popup (will be displayed below title & above content)",name:"description",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"optional JSX content for the toast popup (will be displayed below title & description)",name:"content",required:!1,type:{name:"ReactNode"}},duration:{defaultValue:null,description:"how long to show the toast in ms for (will default to global setting or failing that 5000)",name:"duration",required:!1,type:{name:"number"}},hideClose:{defaultValue:null,description:"hide the close button entirely?",name:"hideClose",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"optional class name to add to the toast element",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"optional test id to add to the toast element",name:"testId",required:!1,type:{name:"string"}},additionalProps:{defaultValue:{value:"{}"},description:"optional additional props to spread onto the toast component",name:"additionalProps",required:!1,type:{name:"RefAttributes<HTMLLIElement>"}}}}}catch{}export{dt as $,J as T,ut as a};
