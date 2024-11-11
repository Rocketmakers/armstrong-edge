import{j as O,a as ce}from"./jsx-runtime-eae7a151.js";import{_ as g}from"./extends-98964cd2.js";import{r as t}from"./index-c4905b50.js";import{a as H,$ as se,b as N}from"./index-10b0f2c6.js";import{$ as L,a as x,c as re}from"./index-47240d79.js";import{$ as le}from"./index-97ba0010.js";import{$ as A}from"./index-1927a3af.js";import{b as ie}from"./index-981c5e3c.js";import{$ as J}from"./index-63c72c08.js";import{$ as de,h as ue,a as fe}from"./index-f7d33137.js";import{r as pe}from"./index-07d1f67e.js";import{c as j}from"./classNames-9011e307.js";import{u as $e}from"./config.context-108849f1.js";const w="focusScope.autoFocusOnMount",S="focusScope.autoFocusOnUnmount",W={bubbles:!1,cancelable:!0},me=t.forwardRef((e,n)=>{const{loop:o=!1,trapped:a=!1,onMountAutoFocus:r,onUnmountAutoFocus:s,...l}=e,[c,m]=t.useState(null),v=H(r),h=H(s),_=t.useRef(null),P=L(n,i=>m(i)),f=t.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;t.useEffect(()=>{if(a){let i=function($){if(f.paused||!c)return;const u=$.target;c.contains(u)?_.current=u:y(_.current,{select:!0})},p=function($){if(f.paused||!c)return;const u=$.relatedTarget;u!==null&&(c.contains(u)||y(_.current,{select:!0}))},d=function($){const u=document.activeElement;for(const D of $)D.removedNodes.length>0&&(c!=null&&c.contains(u)||y(c))};document.addEventListener("focusin",i),document.addEventListener("focusout",p);const b=new MutationObserver(d);return c&&b.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",i),document.removeEventListener("focusout",p),b.disconnect()}}},[a,c,f.paused]),t.useEffect(()=>{if(c){Y.add(f);const i=document.activeElement;if(!c.contains(i)){const d=new CustomEvent(w,W);c.addEventListener(w,v),c.dispatchEvent(d),d.defaultPrevented||(be(Ce(Q(c)),{select:!0}),document.activeElement===i&&y(c))}return()=>{c.removeEventListener(w,v),setTimeout(()=>{const d=new CustomEvent(S,W);c.addEventListener(S,h),c.dispatchEvent(d),d.defaultPrevented||y(i??document.body,{select:!0}),c.removeEventListener(S,h),Y.remove(f)},0)}}},[c,v,h,f]);const T=t.useCallback(i=>{if(!o&&!a||f.paused)return;const p=i.key==="Tab"&&!i.altKey&&!i.ctrlKey&&!i.metaKey,d=document.activeElement;if(p&&d){const b=i.currentTarget,[$,u]=ge(b);$&&u?!i.shiftKey&&d===u?(i.preventDefault(),o&&y($,{select:!0})):i.shiftKey&&d===$&&(i.preventDefault(),o&&y(u,{select:!0})):d===b&&i.preventDefault()}},[o,a,f.paused]);return t.createElement(x.div,g({tabIndex:-1},l,{ref:P,onKeyDown:T}))});function be(e,{select:n=!1}={}){const o=document.activeElement;for(const a of e)if(y(a,{select:n}),document.activeElement!==o)return}function ge(e){const n=Q(e),o=G(n,e),a=G(n.reverse(),e);return[o,a]}function Q(e){const n=[],o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const r=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||r?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)n.push(o.currentNode);return n}function G(e,n){for(const o of e)if(!ve(o,{upTo:n}))return o}function ve(e,{upTo:n}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(n!==void 0&&e===n)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function he(e){return e instanceof HTMLInputElement&&"select"in e}function y(e,{select:n=!1}={}){if(e&&e.focus){const o=document.activeElement;e.focus({preventScroll:!0}),e!==o&&he(e)&&n&&e.select()}}const Y=Ee();function Ee(){let e=[];return{add(n){const o=e[0];n!==o&&(o==null||o.pause()),e=Z(e,n),e.unshift(n)},remove(n){var o;e=Z(e,n),(o=e[0])===null||o===void 0||o.resume()}}}function Z(e,n){const o=[...e],a=o.indexOf(n);return a!==-1&&o.splice(a,1),o}function Ce(e){return e.filter(n=>n.tagName!=="A")}const X="Dialog",[ee,ot]=le(X),[ye,C]=ee(X),_e=e=>{const{__scopeDialog:n,children:o,open:a,defaultOpen:r,onOpenChange:s,modal:l=!0}=e,c=t.useRef(null),m=t.useRef(null),[v=!1,h]=se({prop:a,defaultProp:r,onChange:s});return t.createElement(ye,{scope:n,triggerRef:c,contentRef:m,contentId:A(),titleId:A(),descriptionId:A(),open:v,onOpenChange:h,onOpenToggle:t.useCallback(()=>h(_=>!_),[h]),modal:l},o)},Oe="DialogPortal",[nt,te]=ee(Oe,{forceMount:void 0}),M="DialogOverlay",De=t.forwardRef((e,n)=>{const o=te(M,e.__scopeDialog),{forceMount:a=o.forceMount,...r}=e,s=C(M,e.__scopeDialog);return s.modal?t.createElement(J,{present:a||s.open},t.createElement(Fe,g({},r,{ref:n}))):null}),Fe=t.forwardRef((e,n)=>{const{__scopeDialog:o,...a}=e,r=C(M,o);return t.createElement(de,{as:re,allowPinchZoom:!0,shards:[r.contentRef]},t.createElement(x.div,g({"data-state":ne(r.open)},a,{ref:n,style:{pointerEvents:"auto",...a.style}})))}),R="DialogContent",Re=t.forwardRef((e,n)=>{const o=te(R,e.__scopeDialog),{forceMount:a=o.forceMount,...r}=e,s=C(R,e.__scopeDialog);return t.createElement(J,{present:a||s.open},s.modal?t.createElement(xe,g({},r,{ref:n})):t.createElement(Ie,g({},r,{ref:n})))}),xe=t.forwardRef((e,n)=>{const o=C(R,e.__scopeDialog),a=t.useRef(null),r=L(n,o.contentRef,a);return t.useEffect(()=>{const s=a.current;if(s)return ue(s)},[]),t.createElement(oe,g({},e,{ref:r,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:N(e.onCloseAutoFocus,s=>{var l;s.preventDefault(),(l=o.triggerRef.current)===null||l===void 0||l.focus()}),onPointerDownOutside:N(e.onPointerDownOutside,s=>{const l=s.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0;(l.button===2||c)&&s.preventDefault()}),onFocusOutside:N(e.onFocusOutside,s=>s.preventDefault())}))}),Ie=t.forwardRef((e,n)=>{const o=C(R,e.__scopeDialog),a=t.useRef(!1),r=t.useRef(!1);return t.createElement(oe,g({},e,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var l;if((l=e.onCloseAutoFocus)===null||l===void 0||l.call(e,s),!s.defaultPrevented){var c;a.current||(c=o.triggerRef.current)===null||c===void 0||c.focus(),s.preventDefault()}a.current=!1,r.current=!1},onInteractOutside:s=>{var l,c;(l=e.onInteractOutside)===null||l===void 0||l.call(e,s),s.defaultPrevented||(a.current=!0,s.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const m=s.target;((c=o.triggerRef.current)===null||c===void 0?void 0:c.contains(m))&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&r.current&&s.preventDefault()}}))}),oe=t.forwardRef((e,n)=>{const{__scopeDialog:o,trapFocus:a,onOpenAutoFocus:r,onCloseAutoFocus:s,...l}=e,c=C(R,o),m=t.useRef(null),v=L(n,m);return fe(),t.createElement(t.Fragment,null,t.createElement(me,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:r,onUnmountAutoFocus:s},t.createElement(ie,g({role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":ne(c.open)},l,{ref:v,onDismiss:()=>c.onOpenChange(!1)}))),!1)}),Ne="DialogTitle",Pe=t.forwardRef((e,n)=>{const{__scopeDialog:o,...a}=e,r=C(Ne,o);return t.createElement(x.h2,g({id:r.titleId},a,{ref:n}))}),Te="DialogDescription",Ae=t.forwardRef((e,n)=>{const{__scopeDialog:o,...a}=e,r=C(Te,o);return t.createElement(x.p,g({id:r.descriptionId},a,{ref:n}))}),we="DialogClose",Se=t.forwardRef((e,n)=>{const{__scopeDialog:o,...a}=e,r=C(we,o);return t.createElement(x.button,g({type:"button"},a,{ref:n,onClick:N(e.onClick,()=>r.onOpenChange(!1))}))});function ne(e){return e?"open":"closed"}const Me=_e,ke=De,Le=Re,Ve=Pe,Ue=Ae,qe=Se,Ke=e=>{const n=t.useRef();return t.useEffect(()=>{n.current=e},[e]),n.current},z=e=>Ke(e)!==e;const k=t.forwardRef((e,n)=>{const{children:o,title:a,description:r,closeButtonIcon:s,open:l,onOpenChange:c,onClose:m,className:v,data:h,overlayClassName:_,testId:P,delayCloseFor:f,...T}=e,i=$e({dialogCloseButtonIcon:s}),[p,d]=t.useState(l?void 0:"close"),[b,$]=t.useState(l),u=t.useRef(),D=z(p),V=z(l),I=t.useRef([]),F=t.useCallback(E=>{if(d(E?void 0:"close"),!E&&f){setTimeout(()=>{$(!1)},f);return}$(E)},[f]),U=t.useCallback(()=>new Promise(E=>{F(!0),u.current=E}),[F]),q=t.useCallback(()=>d("ok"),[]),K=t.useCallback(()=>d("close"),[]),B=t.useCallback(()=>d("cancel"),[]);return t.useImperativeHandle(n,()=>({open:U,close:K,ok:q,cancel:B,isOpen:!!b,addOpenChangeListener:E=>(I.current.push(E),()=>{I.current=I.current.filter(ae=>ae!==E)})}),[U,B,K,q,b]),t.useEffect(()=>{p&&u.current&&(u.current({action:p,data:h}),u.current=void 0),D&&(c==null||c(!p),p&&(m==null||m(),f?setTimeout(()=>{$(!1)},f):$(!1)))},[D,p,h,c,m,f]),t.useEffect(()=>{V&&l!==void 0&&F(l)},[l,F,V]),t.useEffect(()=>{I.current.forEach(E=>E(!!b))},[b]),O(Me,{open:b,onOpenChange:F,children:i.globalPortalTo&&pe.createPortal(O(ke,{className:j("arm-dialog-overlay",_),"data-visible":!p,children:ce(Le,{className:j("arm-dialog",v),"data-has-title":a?!0:void 0,"data-testid":P,"data-visible":!p,...T,children:[a&&O(Ve,{className:"arm-dialog-title",children:a}),r&&O(Ue,{className:"arm-dialog-description",children:r}),o&&O("div",{className:"arm-dialog-content",children:o}),i.dialogCloseButtonIcon!==!1&&O(qe,{className:"arm-dialog-close","aria-label":"Close",children:i.dialogCloseButtonIcon})]})}),i.globalPortalTo)})});k.displayName="Dialog";try{k.displayName="Dialog",k.__docgenInfo={description:"Dialog component. Used to display a full-screen modal dialog to the user.\n- Can be state controlled with `open` and `onOpenChange` props.\n- Can be async by assigning a ref and calling the utility functions (a `useDialog` helper hook is available for this.)\n- Supports dynamic data in async mode, so that a form can be built as a reusable async dialog.",displayName:"Dialog",props:{title:{defaultValue:null,description:"Optional title to show at the top of the dialog in an H2 tag",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Optional description to show in the body of the dialog in a P tag",name:"description",required:!1,type:{name:"ReactNode"}},closeButtonIcon:{defaultValue:null,description:"Icon to use as the close button. Send `false` to hide the close button entirely",name:"closeButtonIcon",required:!1,type:{name:"false | Element"}},open:{defaultValue:null,description:"Bool denoting whether the dialog is open or closed - for state controlled dialogs",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Function called when the dialog is opened/closed - for state controlled dialogs",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},className:{defaultValue:null,description:"Optional CSS class for the dialog component",name:"className",required:!1,type:{name:"string"}},overlayClassName:{defaultValue:null,description:"Optional CSS class for the dialog overlay",name:"overlayClassName",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Optional Data to pass into the dialog. Data will be returned from the async dialog functions allowing for reusable form based dialogs",name:"data",required:!1,type:{name:"TData"}},onClose:{defaultValue:null,description:"Function called when the dialog is closed. Don't use for state control, only for side effects. `onOpenChange` should be used for state control",name:"onClose",required:!1,type:{name:"(() => void)"}},testId:{defaultValue:null,description:"Optional test ID for the dialog",name:"testId",required:!1,type:{name:"string"}},delayCloseFor:{defaultValue:null,description:"Optional time to delay closing for in MS (allows for CSS animations to complete, animate using the [data-visible] attribute)",name:"delayCloseFor",required:!1,type:{name:"number"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{k as D};
