import{a as x,j as Ae}from"./jsx-runtime-63e4a166.js";import{_ as S}from"./uniq-d447bef6.js";import{r as o}from"./index-c4905b50.js";import{a as ne,c as Ie,b as B}from"./index-c1bef199.js";import{$ as ee,b as P,a as Ne}from"./index-742b7287.js";import{$ as Pe}from"./index-97ba0010.js";import{$ as j}from"./index-92c228ee.js";import{b as Te}from"./index-f6c914d3.js";import{$ as me}from"./index-3d4ae170.js";import{r as Fe}from"./index-07d1f67e.js";import{c as re}from"./classNames-9011e307.js";import{u as ke}from"./config.context-54240269.js";const q="focusScope.autoFocusOnMount",K="focusScope.autoFocusOnUnmount",oe={bubbles:!1,cancelable:!0},Me=o.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:i,...s}=e,[c,m]=o.useState(null),g=ne(a),p=ne(i),d=o.useRef(null),h=ee(t,l=>m(l)),b=o.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.useEffect(()=>{if(r){let l=function($){if(b.paused||!c)return;const v=$.target;c.contains(v)?d.current=v:_(d.current,{select:!0})},u=function($){if(b.paused||!c)return;const v=$.relatedTarget;v!==null&&(c.contains(v)||_(d.current,{select:!0}))},f=function($){const v=document.activeElement;for(const y of $)y.removedNodes.length>0&&(c!=null&&c.contains(v)||_(c))};document.addEventListener("focusin",l),document.addEventListener("focusout",u);const E=new MutationObserver(f);return c&&E.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",l),document.removeEventListener("focusout",u),E.disconnect()}}},[r,c,b.paused]),o.useEffect(()=>{if(c){ce.add(b);const l=document.activeElement;if(!c.contains(l)){const f=new CustomEvent(q,oe);c.addEventListener(q,g),c.dispatchEvent(f),f.defaultPrevented||(Le(Ue(pe(c)),{select:!0}),document.activeElement===l&&_(c))}return()=>{c.removeEventListener(q,g),setTimeout(()=>{const f=new CustomEvent(K,oe);c.addEventListener(K,p),c.dispatchEvent(f),f.defaultPrevented||_(l??document.body,{select:!0}),c.removeEventListener(K,p),ce.remove(b)},0)}}},[c,g,p,b]);const C=o.useCallback(l=>{if(!n&&!r||b.paused)return;const u=l.key==="Tab"&&!l.altKey&&!l.ctrlKey&&!l.metaKey,f=document.activeElement;if(u&&f){const E=l.currentTarget,[$,v]=Be(E);$&&v?!l.shiftKey&&f===v?(l.preventDefault(),n&&_($,{select:!0})):l.shiftKey&&f===$&&(l.preventDefault(),n&&_(v,{select:!0})):f===E&&l.preventDefault()}},[n,r,b.paused]);return o.createElement(P.div,S({tabIndex:-1},s,{ref:h,onKeyDown:C}))});function Le(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(_(r,{select:t}),document.activeElement!==n)return}function Be(e){const t=pe(e),n=ae(t,e),r=ae(t.reverse(),e);return[n,r]}function pe(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ae(e,t){for(const n of e)if(!Ve(n,{upTo:t}))return n}function Ve(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function We(e){return e instanceof HTMLInputElement&&"select"in e}function _(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&We(e)&&t&&e.select()}}const ce=He();function He(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=ie(e,t),e.unshift(t)},remove(t){var n;e=ie(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function ie(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Ue(e){return e.filter(t=>t.tagName!=="A")}let Y=0;function je(){o.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:le()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:le()),Y++,()=>{Y===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),Y--}},[])}function le(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var w=function(){return w=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},w.apply(this,arguments)};function he(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function qe(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var V="right-scroll-bar-position",W="width-before-scroll-bar",Ke="with-scroll-bars-hidden",Ye="--removed-body-scroll-bar-size";function Xe(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Ge(e,t){var n=o.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}function Ze(e,t){return Ge(t||null,function(n){return e.forEach(function(r){return Xe(r,n)})})}function ze(e){return e}function Qe(e,t){t===void 0&&(t=ze);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var s=t(i,r);return n.push(s),function(){n=n.filter(function(c){return c!==s})}},assignSyncMedium:function(i){for(r=!0;n.length;){var s=n;n=[],s.forEach(i)}n={push:function(c){return i(c)},filter:function(){return n}}},assignMedium:function(i){r=!0;var s=[];if(n.length){var c=n;n=[],c.forEach(i),s=n}var m=function(){var p=s;s=[],p.forEach(i)},g=function(){return Promise.resolve().then(m)};g(),n={push:function(p){s.push(p),g()},filter:function(p){return s=s.filter(p),n}}}};return a}function Je(e){e===void 0&&(e={});var t=Qe(null);return t.options=w({async:!0,ssr:!1},e),t}var ge=function(e){var t=e.sideCar,n=he(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return o.createElement(r,w({},n))};ge.isSideCarExport=!0;function et(e,t){return e.useMedium(t),ge}var be=Je(),X=function(){},H=o.forwardRef(function(e,t){var n=o.useRef(null),r=o.useState({onScrollCapture:X,onWheelCapture:X,onTouchMoveCapture:X}),a=r[0],i=r[1],s=e.forwardProps,c=e.children,m=e.className,g=e.removeScrollBar,p=e.enabled,d=e.shards,h=e.sideCar,b=e.noIsolation,C=e.inert,l=e.allowPinchZoom,u=e.as,f=u===void 0?"div":u,E=he(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),$=h,v=Ze([n,t]),y=w(w({},E),a);return o.createElement(o.Fragment,null,p&&o.createElement($,{sideCar:be,removeScrollBar:g,shards:d,noIsolation:b,inert:C,setCallbacks:i,allowPinchZoom:!!l,lockRef:n}),s?o.cloneElement(o.Children.only(c),w(w({},y),{ref:v})):o.createElement(f,w({},y,{className:m,ref:v}),c))});H.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};H.classNames={fullWidth:W,zeroRight:V};var se,tt=function(){if(se)return se;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function nt(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=tt();return t&&e.setAttribute("nonce",t),e}function rt(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function ot(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var at=function(){var e=0,t=null;return{add:function(n){e==0&&(t=nt())&&(rt(t,n),ot(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},ct=function(){var e=at();return function(t,n){o.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},$e=function(){var e=ct(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},it={left:0,top:0,right:0,gap:0},G=function(e){return parseInt(e||"",10)||0},lt=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[G(n),G(r),G(a)]},st=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return it;var t=lt(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},ut=$e(),dt=function(e,t,n,r){var a=e.left,i=e.top,s=e.right,c=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Ke,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(c,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(V,` {
    right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(W,` {
    margin-right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(V," .").concat(V,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(W," .").concat(W,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(Ye,": ").concat(c,`px;
  }
`)},ft=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r,i=o.useMemo(function(){return st(a)},[a]);return o.createElement(ut,{styles:dt(i,!t,a,n?"":"!important")})},z=!1;if(typeof window<"u")try{var F=Object.defineProperty({},"passive",{get:function(){return z=!0,!0}});window.addEventListener("test",F,F),window.removeEventListener("test",F,F)}catch{z=!1}var D=z?{passive:!1}:!1,vt=function(e){return e.tagName==="TEXTAREA"},ye=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!vt(e)&&n[t]==="visible")},mt=function(e){return ye(e,"overflowY")},pt=function(e){return ye(e,"overflowX")},ue=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=Ee(e,n);if(r){var a=Ce(e,n),i=a[1],s=a[2];if(i>s)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},ht=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},gt=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Ee=function(e,t){return e==="v"?mt(t):pt(t)},Ce=function(e,t){return e==="v"?ht(t):gt(t)},bt=function(e,t){return e==="h"&&t==="rtl"?-1:1},$t=function(e,t,n,r,a){var i=bt(e,window.getComputedStyle(t).direction),s=i*r,c=n.target,m=t.contains(c),g=!1,p=s>0,d=0,h=0;do{var b=Ce(e,c),C=b[0],l=b[1],u=b[2],f=l-u-i*C;(C||f)&&Ee(e,c)&&(d+=f,h+=C),c=c.parentNode}while(!m&&c!==document.body||m&&(t.contains(c)||t===c));return(p&&(a&&d===0||!a&&s>d)||!p&&(a&&h===0||!a&&-s>h))&&(g=!0),g},k=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},de=function(e){return[e.deltaX,e.deltaY]},fe=function(e){return e&&"current"in e?e.current:e},yt=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Et=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Ct=0,O=[];function St(e){var t=o.useRef([]),n=o.useRef([0,0]),r=o.useRef(),a=o.useState(Ct++)[0],i=o.useState(function(){return $e()})[0],s=o.useRef(e);o.useEffect(function(){s.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var l=qe([e.lockRef.current],(e.shards||[]).map(fe),!0).filter(Boolean);return l.forEach(function(u){return u.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),l.forEach(function(u){return u.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var c=o.useCallback(function(l,u){if("touches"in l&&l.touches.length===2)return!s.current.allowPinchZoom;var f=k(l),E=n.current,$="deltaX"in l?l.deltaX:E[0]-f[0],v="deltaY"in l?l.deltaY:E[1]-f[1],y,U=l.target,I=Math.abs($)>Math.abs(v)?"h":"v";if("touches"in l&&I==="h"&&U.type==="range")return!1;var T=ue(I,U);if(!T)return!0;if(T?y=I:(y=I==="v"?"h":"v",T=ue(I,U)),!T)return!1;if(!r.current&&"changedTouches"in l&&($||v)&&(r.current=y),!y)return!0;var te=r.current||y;return $t(te,u,l,te==="h"?$:v,!0)},[]),m=o.useCallback(function(l){var u=l;if(!(!O.length||O[O.length-1]!==i)){var f="deltaY"in u?de(u):k(u),E=t.current.filter(function(y){return y.name===u.type&&y.target===u.target&&yt(y.delta,f)})[0];if(E&&E.should){u.cancelable&&u.preventDefault();return}if(!E){var $=(s.current.shards||[]).map(fe).filter(Boolean).filter(function(y){return y.contains(u.target)}),v=$.length>0?c(u,$[0]):!s.current.noIsolation;v&&u.cancelable&&u.preventDefault()}}},[]),g=o.useCallback(function(l,u,f,E){var $={name:l,delta:u,target:f,should:E};t.current.push($),setTimeout(function(){t.current=t.current.filter(function(v){return v!==$})},1)},[]),p=o.useCallback(function(l){n.current=k(l),r.current=void 0},[]),d=o.useCallback(function(l){g(l.type,de(l),l.target,c(l,e.lockRef.current))},[]),h=o.useCallback(function(l){g(l.type,k(l),l.target,c(l,e.lockRef.current))},[]);o.useEffect(function(){return O.push(i),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:h}),document.addEventListener("wheel",m,D),document.addEventListener("touchmove",m,D),document.addEventListener("touchstart",p,D),function(){O=O.filter(function(l){return l!==i}),document.removeEventListener("wheel",m,D),document.removeEventListener("touchmove",m,D),document.removeEventListener("touchstart",p,D)}},[]);var b=e.removeScrollBar,C=e.inert;return o.createElement(o.Fragment,null,C?o.createElement(i,{styles:Et(a)}):null,b?o.createElement(ft,{gapMode:"margin"}):null)}const wt=et(be,St);var Se=o.forwardRef(function(e,t){return o.createElement(H,w({},e,{ref:t,sideCar:wt}))});Se.classNames=H.classNames;const Rt=Se;var _t=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},A=new WeakMap,M=new WeakMap,L={},Z=0,we=function(e){return e&&(e.host||we(e.parentNode))},xt=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=we(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Dt=function(e,t,n,r){var a=xt(t,Array.isArray(e)?e:[e]);L[n]||(L[n]=new WeakMap);var i=L[n],s=[],c=new Set,m=new Set(a),g=function(d){!d||c.has(d)||(c.add(d),g(d.parentNode))};a.forEach(g);var p=function(d){!d||m.has(d)||Array.prototype.forEach.call(d.children,function(h){if(c.has(h))p(h);else{var b=h.getAttribute(r),C=b!==null&&b!=="false",l=(A.get(h)||0)+1,u=(i.get(h)||0)+1;A.set(h,l),i.set(h,u),s.push(h),l===1&&C&&M.set(h,!0),u===1&&h.setAttribute(n,"true"),C||h.setAttribute(r,"true")}})};return p(t),c.clear(),Z++,function(){s.forEach(function(d){var h=A.get(d)-1,b=i.get(d)-1;A.set(d,h),i.set(d,b),h||(M.has(d)||d.removeAttribute(r),M.delete(d)),b||d.removeAttribute(n)}),Z--,Z||(A=new WeakMap,A=new WeakMap,M=new WeakMap,L={})}},Ot=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=t||_t(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),Dt(r,a,n,"aria-hidden")):function(){return null}};const Re="Dialog",[_e,un]=Pe(Re),[At,R]=_e(Re),It=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:a,onOpenChange:i,modal:s=!0}=e,c=o.useRef(null),m=o.useRef(null),[g=!1,p]=Ie({prop:r,defaultProp:a,onChange:i});return o.createElement(At,{scope:t,triggerRef:c,contentRef:m,contentId:j(),titleId:j(),descriptionId:j(),open:g,onOpenChange:p,onOpenToggle:o.useCallback(()=>p(d=>!d),[p]),modal:s},n)},Nt="DialogPortal",[dn,xe]=_e(Nt,{forceMount:void 0}),Q="DialogOverlay",Pt=o.forwardRef((e,t)=>{const n=xe(Q,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,i=R(Q,e.__scopeDialog);return i.modal?o.createElement(me,{present:r||i.open},o.createElement(Tt,S({},a,{ref:t}))):null}),Tt=o.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=R(Q,n);return o.createElement(Rt,{as:Ne,allowPinchZoom:!0,shards:[a.contentRef]},o.createElement(P.div,S({"data-state":Oe(a.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),N="DialogContent",Ft=o.forwardRef((e,t)=>{const n=xe(N,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,i=R(N,e.__scopeDialog);return o.createElement(me,{present:r||i.open},i.modal?o.createElement(kt,S({},a,{ref:t})):o.createElement(Mt,S({},a,{ref:t})))}),kt=o.forwardRef((e,t)=>{const n=R(N,e.__scopeDialog),r=o.useRef(null),a=ee(t,n.contentRef,r);return o.useEffect(()=>{const i=r.current;if(i)return Ot(i)},[]),o.createElement(De,S({},e,{ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:B(e.onCloseAutoFocus,i=>{var s;i.preventDefault(),(s=n.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:B(e.onPointerDownOutside,i=>{const s=i.detail.originalEvent,c=s.button===0&&s.ctrlKey===!0;(s.button===2||c)&&i.preventDefault()}),onFocusOutside:B(e.onFocusOutside,i=>i.preventDefault())}))}),Mt=o.forwardRef((e,t)=>{const n=R(N,e.__scopeDialog),r=o.useRef(!1),a=o.useRef(!1);return o.createElement(De,S({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var s;if((s=e.onCloseAutoFocus)===null||s===void 0||s.call(e,i),!i.defaultPrevented){var c;r.current||(c=n.triggerRef.current)===null||c===void 0||c.focus(),i.preventDefault()}r.current=!1,a.current=!1},onInteractOutside:i=>{var s,c;(s=e.onInteractOutside)===null||s===void 0||s.call(e,i),i.defaultPrevented||(r.current=!0,i.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const m=i.target;((c=n.triggerRef.current)===null||c===void 0?void 0:c.contains(m))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&a.current&&i.preventDefault()}}))}),De=o.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:i,...s}=e,c=R(N,n),m=o.useRef(null),g=ee(t,m);return je(),o.createElement(o.Fragment,null,o.createElement(Me,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:a,onUnmountAutoFocus:i},o.createElement(Te,S({role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":Oe(c.open)},s,{ref:g,onDismiss:()=>c.onOpenChange(!1)}))),!1)}),Lt="DialogTitle",Bt=o.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=R(Lt,n);return o.createElement(P.h2,S({id:a.titleId},r,{ref:t}))}),Vt="DialogDescription",Wt=o.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=R(Vt,n);return o.createElement(P.p,S({id:a.descriptionId},r,{ref:t}))}),Ht="DialogClose",Ut=o.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,a=R(Ht,n);return o.createElement(P.button,S({type:"button"},r,{ref:t,onClick:B(e.onClick,()=>a.onOpenChange(!1))}))});function Oe(e){return e?"open":"closed"}const jt=It,qt=Pt,Kt=Ft,Yt=Bt,Xt=Wt,Gt=Ut,Zt=e=>{const t=o.useRef();return o.useEffect(()=>{t.current=e},[e]),t.current},ve=e=>Zt(e)!==e;const J=o.forwardRef((e,t)=>{const{children:n,title:r,description:a,closeButtonIcon:i,open:s,onOpenChange:c,onClose:m,className:g,data:p,overlayClassName:d,testId:h,...b}=e,C=ke({dialogCloseButtonIcon:i}),[l,u]=o.useState(s?void 0:"close"),f=o.useRef(),E=ve(l),$=ve(s),v=o.useCallback(y=>{u(y?void 0:"close")},[u]);return o.useImperativeHandle(t,()=>({open:()=>new Promise(y=>{v(!0),f.current=y}),close:()=>u("close"),ok:()=>u("ok"),cancel:()=>u("cancel")}),[v,u]),o.useEffect(()=>{l&&f.current&&(f.current({action:l,data:p}),f.current=void 0),E&&(c==null||c(!l),l&&(m==null||m()))},[E,l,p,c,m]),o.useEffect(()=>{$&&s!==void 0&&v(s)},[s,v,$]),x(jt,{open:!l,onOpenChange:v,children:Fe.createPortal(x(qt,{className:re("arm-dialog-overlay",d),children:Ae(Kt,{className:re("arm-dialog",g),"data-has-title":r?!0:void 0,"data-testid":h,...b,children:[r&&x(Yt,{className:"arm-dialog-title",children:r}),a&&x(Xt,{className:"arm-dialog-description",children:a}),n&&x("div",{className:"arm-dialog-content",children:n}),C.dialogCloseButtonIcon!==!1&&x(Gt,{className:"arm-dialog-close","aria-label":"Close",children:C.dialogCloseButtonIcon})]})}),C.globalPortalTo)})});J.displayName="Dialog";try{J.displayName="Dialog",J.__docgenInfo={description:"Dialog component. Used to display a full-screen modal dialog to the user.\n- Can be state controlled with `open` and `onOpenChange` props.\n- Can be async by assigning a ref and calling the utility functions (a `useDialog` helper hook is available for this.)\n- Supports dynamic data in async mode, so that a form can be built as a reusable async dialog.",displayName:"Dialog",props:{title:{defaultValue:null,description:"Optional title to show at the top of the dialog in an H2 tag",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Optional description to show in the body of the dialog in a P tag",name:"description",required:!1,type:{name:"ReactNode"}},closeButtonIcon:{defaultValue:null,description:"Icon to use as the close button. Send `false` to hide the close button entirely",name:"closeButtonIcon",required:!1,type:{name:"false | Element"}},open:{defaultValue:null,description:"Bool denoting whether the dialog is open or closed - for state controlled dialogs",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Function called when the dialog is opened/closed - for state controlled dialogs",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},className:{defaultValue:null,description:"Optional CSS class for the dialog component",name:"className",required:!1,type:{name:"string"}},overlayClassName:{defaultValue:null,description:"Optional CSS class for the dialog overlay",name:"overlayClassName",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Optional Data to pass into the dialog. Data will be returned from the async dialog functions allowing for reusable form based dialogs",name:"data",required:!1,type:{name:"TData"}},onClose:{defaultValue:null,description:"Function called when the dialog is closed. Don't use for state control, only for side effects. `onOpenChange` should be used for state control",name:"onClose",required:!1,type:{name:"(() => void)"}},testId:{defaultValue:null,description:"Optional test ID for the dialog",name:"testId",required:!1,type:{name:"string"}}}}}catch{}export{J as D};
//# sourceMappingURL=dialog.component-6fa91c6f.js.map
