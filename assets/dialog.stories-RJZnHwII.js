import{j as v}from"./jsx-runtime-Cl2eCCBe.js";import{c as Ne,f as xe,w as k,u as S,b as we,a as B,e as b,d as N,q as Vt}from"./index-Dv9et24K.js";import{r as a,b as Mt}from"./index-Cqyox1Tj.js";import{_ as O}from"./extends-CF3RwP-h.js";import{$ as U}from"./index-CcyUcsxs.js";import{r as Re}from"./index-QqxU7g3h.js";import{_ as V,a as wt,g as Ut,b as jt,h as Ht}from"./index-BaW8Z0I_.js";import{u as Wt}from"./config.context-CQ8yCtG8.js";import{B as F}from"./button.component-BqSJDp5_.js";import{u as Kt}from"./label.component-V5A9lJAL.js";import{I as Fe}from"./input.component-uSgF6HZm.js";function qt(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function $t(...e){return t=>e.forEach(n=>qt(n,t))}function ae(...e){return a.useCallback($t(...e),e)}function Xt(e,t=[]){let n=[];function o(i,c){const s=a.createContext(c),l=n.length;n=[...n,c];function d(p){const{scope:x,children:m,...T}=p,u=(x==null?void 0:x[e][l])||s,g=a.useMemo(()=>T,Object.values(T));return a.createElement(u.Provider,{value:g},m)}function f(p,x){const m=(x==null?void 0:x[e][l])||s,T=a.useContext(m);if(T)return T;if(c!==void 0)return c;throw new Error(`\`${p}\` must be used within \`${i}\``)}return d.displayName=i+"Provider",[d,f]}const r=()=>{const i=n.map(c=>a.createContext(c));return function(s){const l=(s==null?void 0:s[e])||i;return a.useMemo(()=>({[`__scope${e}`]:{...s,[e]:l}}),[s,l])}};return r.scopeName=e,[o,Yt(r,...t)]}function Yt(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(i){const c=o.reduce((s,{useScope:l,scopeName:d})=>{const p=l(i)[`__scope${d}`];return{...s,...p}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}const zt=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{},Gt=Mt.useId||(()=>{});let Zt=0;function pe(e){const[t,n]=a.useState(Gt());return zt(()=>{e||n(o=>o??String(Zt++))},[e]),e||(t?`radix-${t}`:"")}function Et(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}function Qt({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,r]=Jt({defaultProp:t,onChange:n}),i=e!==void 0,c=i?e:o,s=Et(n),l=a.useCallback(d=>{if(i){const p=typeof d=="function"?d(e):d;p!==e&&s(p)}else r(d)},[i,e,r,s]);return[c,l]}function Jt({defaultProp:e,onChange:t}){const n=a.useState(e),[o]=n,r=a.useRef(o),i=Et(t);return a.useEffect(()=>{r.current!==o&&(i(o),r.current=o)},[o,r,i]),n}const Te=a.forwardRef((e,t)=>{const{children:n,...o}=e,r=a.Children.toArray(n),i=r.find(tn);if(i){const c=i.props.children,s=r.map(l=>l===i?a.Children.count(c)>1?a.Children.only(null):a.isValidElement(c)?c.props.children:null:l);return a.createElement($e,O({},o,{ref:t}),a.isValidElement(c)?a.cloneElement(c,void 0,s):null)}return a.createElement($e,O({},o,{ref:t}),n)});Te.displayName="Slot";const $e=a.forwardRef((e,t)=>{const{children:n,...o}=e;return a.isValidElement(n)?a.cloneElement(n,{...nn(o,n.props),ref:t?$t(t,n.ref):n.ref}):a.Children.count(n)>1?a.Children.only(null):null});$e.displayName="SlotClone";const en=({children:e})=>a.createElement(a.Fragment,null,e);function tn(e){return a.isValidElement(e)&&e.type===en}function nn(e,t){const n={...t};for(const o in t){const r=e[o],i=t[o];/^on[A-Z]/.test(o)?r&&i?n[o]=(...s)=>{i(...s),r(...s)}:r&&(n[o]=r):o==="style"?n[o]={...r,...i}:o==="className"&&(n[o]=[r,i].filter(Boolean).join(" "))}return{...e,...n}}const on=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Y=on.reduce((e,t)=>{const n=a.forwardRef((o,r)=>{const{asChild:i,...c}=o,s=i?Te:t;return a.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),a.createElement(s,O({},c,{ref:r}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function an(e,t){e&&Re.flushSync(()=>e.dispatchEvent(t))}function ke(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}function rn(e,t=globalThis==null?void 0:globalThis.document){const n=ke(e);a.useEffect(()=>{const o=r=>{r.key==="Escape"&&n(r)};return t.addEventListener("keydown",o),()=>t.removeEventListener("keydown",o)},[n,t])}const Ee="dismissableLayer.update",sn="dismissableLayer.pointerDownOutside",cn="dismissableLayer.focusOutside";let Ie;const ln=a.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),un=a.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:c,onInteractOutside:s,onDismiss:l,...d}=e,f=a.useContext(ln),[p,x]=a.useState(null),m=(n=p==null?void 0:p.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,T]=a.useState({}),u=ae(t,$=>x($)),g=Array.from(f.layers),[h]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),R=g.indexOf(h),y=p?g.indexOf(p):-1,w=f.layersWithOutsidePointerEventsDisabled.size>0,E=y>=R,A=dn($=>{const C=$.target,L=[...f.branches].some(j=>j.contains(C));!E||L||(i==null||i($),s==null||s($),$.defaultPrevented||l==null||l())},m),P=fn($=>{const C=$.target;[...f.branches].some(j=>j.contains(C))||(c==null||c($),s==null||s($),$.defaultPrevented||l==null||l())},m);return rn($=>{y===f.layers.size-1&&(r==null||r($),!$.defaultPrevented&&l&&($.preventDefault(),l()))},m),a.useEffect(()=>{if(p)return o&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(Ie=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(p)),f.layers.add(p),Ae(),()=>{o&&f.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=Ie)}},[p,m,o,f]),a.useEffect(()=>()=>{p&&(f.layers.delete(p),f.layersWithOutsidePointerEventsDisabled.delete(p),Ae())},[p,f]),a.useEffect(()=>{const $=()=>T({});return document.addEventListener(Ee,$),()=>document.removeEventListener(Ee,$)},[]),a.createElement(Y.div,O({},d,{ref:u,style:{pointerEvents:w?E?"auto":"none":void 0,...e.style},onFocusCapture:U(e.onFocusCapture,P.onFocusCapture),onBlurCapture:U(e.onBlurCapture,P.onBlurCapture),onPointerDownCapture:U(e.onPointerDownCapture,A.onPointerDownCapture)}))});function dn(e,t=globalThis==null?void 0:globalThis.document){const n=ke(e),o=a.useRef(!1),r=a.useRef(()=>{});return a.useEffect(()=>{const i=s=>{if(s.target&&!o.current){let d=function(){Ct(sn,n,l,{discrete:!0})};const l={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",r.current),r.current=d,t.addEventListener("click",r.current,{once:!0})):d()}o.current=!1},c=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(c),t.removeEventListener("pointerdown",i),t.removeEventListener("click",r.current)}},[t,n]),{onPointerDownCapture:()=>o.current=!0}}function fn(e,t=globalThis==null?void 0:globalThis.document){const n=ke(e),o=a.useRef(!1);return a.useEffect(()=>{const r=i=>{i.target&&!o.current&&Ct(cn,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function Ae(){const e=new CustomEvent(Ee);document.dispatchEvent(e)}function Ct(e,t,n,{discrete:o}){const r=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),o?an(r,i):r.dispatchEvent(i)}function Le(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}const me="focusScope.autoFocusOnMount",ge="focusScope.autoFocusOnUnmount",_e={bubbles:!1,cancelable:!0},pn=a.forwardRef((e,t)=>{const{loop:n=!1,trapped:o=!1,onMountAutoFocus:r,onUnmountAutoFocus:i,...c}=e,[s,l]=a.useState(null),d=Le(r),f=Le(i),p=a.useRef(null),x=ae(t,u=>l(u)),m=a.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;a.useEffect(()=>{if(o){let u=function(y){if(m.paused||!s)return;const w=y.target;s.contains(w)?p.current=w:_(p.current,{select:!0})},g=function(y){if(m.paused||!s)return;const w=y.relatedTarget;w!==null&&(s.contains(w)||_(p.current,{select:!0}))},h=function(y){const w=document.activeElement;for(const E of y)E.removedNodes.length>0&&(s!=null&&s.contains(w)||_(s))};document.addEventListener("focusin",u),document.addEventListener("focusout",g);const R=new MutationObserver(h);return s&&R.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",g),R.disconnect()}}},[o,s,m.paused]),a.useEffect(()=>{if(s){Me.add(m);const u=document.activeElement;if(!s.contains(u)){const h=new CustomEvent(me,_e);s.addEventListener(me,d),s.dispatchEvent(h),h.defaultPrevented||(mn(yn(Bt(s)),{select:!0}),document.activeElement===u&&_(s))}return()=>{s.removeEventListener(me,d),setTimeout(()=>{const h=new CustomEvent(ge,_e);s.addEventListener(ge,f),s.dispatchEvent(h),h.defaultPrevented||_(u??document.body,{select:!0}),s.removeEventListener(ge,f),Me.remove(m)},0)}}},[s,d,f,m]);const T=a.useCallback(u=>{if(!n&&!o||m.paused)return;const g=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,h=document.activeElement;if(g&&h){const R=u.currentTarget,[y,w]=gn(R);y&&w?!u.shiftKey&&h===w?(u.preventDefault(),n&&_(y,{select:!0})):u.shiftKey&&h===y&&(u.preventDefault(),n&&_(w,{select:!0})):h===R&&u.preventDefault()}},[n,o,m.paused]);return a.createElement(Y.div,O({tabIndex:-1},c,{ref:x,onKeyDown:T}))});function mn(e,{select:t=!1}={}){const n=document.activeElement;for(const o of e)if(_(o,{select:t}),document.activeElement!==n)return}function gn(e){const t=Bt(e),n=Ve(t,e),o=Ve(t.reverse(),e);return[n,o]}function Bt(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Ve(e,t){for(const n of e)if(!vn(n,{upTo:t}))return n}function vn(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function bn(e){return e instanceof HTMLInputElement&&"select"in e}function _(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&bn(e)&&t&&e.select()}}const Me=hn();function hn(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Ue(e,t),e.unshift(t)},remove(t){var n;e=Ue(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function Ue(e,t){const n=[...e],o=n.indexOf(t);return o!==-1&&n.splice(o,1),n}function yn(e){return e.filter(t=>t.tagName!=="A")}const je=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{};function wn(e,t){return a.useReducer((n,o)=>{const r=t[n][o];return r??n},e)}const Se=e=>{const{present:t,children:n}=e,o=$n(t),r=typeof n=="function"?n({present:o.isPresent}):a.Children.only(n),i=ae(o.ref,r.ref);return typeof n=="function"||o.isPresent?a.cloneElement(r,{ref:i}):null};Se.displayName="Presence";function $n(e){const[t,n]=a.useState(),o=a.useRef({}),r=a.useRef(e),i=a.useRef("none"),c=e?"mounted":"unmounted",[s,l]=wn(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{const d=ie(o.current);i.current=s==="mounted"?d:"none"},[s]),je(()=>{const d=o.current,f=r.current;if(f!==e){const x=i.current,m=ie(d);e?l("MOUNT"):m==="none"||(d==null?void 0:d.display)==="none"?l("UNMOUNT"):l(f&&x!==m?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,l]),je(()=>{if(t){const d=p=>{const m=ie(o.current).includes(p.animationName);p.target===t&&m&&Re.flushSync(()=>l("ANIMATION_END"))},f=p=>{p.target===t&&(i.current=ie(o.current))};return t.addEventListener("animationstart",f),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",f),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:a.useCallback(d=>{d&&(o.current=getComputedStyle(d)),n(d)},[])}}function ie(e){return(e==null?void 0:e.animationName)||"none"}let ve=0;function En(){a.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:He()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:He()),ve++,()=>{ve===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(o=>o.remove()),ve--}},[])}function He(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var ue="right-scroll-bar-position",de="width-before-scroll-bar",Cn="with-scroll-bars-hidden",Bn="--removed-body-scroll-bar-size";function be(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function xn(e,t){var n=a.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(o){var r=n.value;r!==o&&(n.value=o,n.callback(o,r))}}}})[0];return n.callback=t,n.facade}var Rn=typeof window<"u"?a.useLayoutEffect:a.useEffect,We=new WeakMap;function Tn(e,t){var n=xn(null,function(o){return e.forEach(function(r){return be(r,o)})});return Rn(function(){var o=We.get(n);if(o){var r=new Set(o),i=new Set(e),c=n.current;r.forEach(function(s){i.has(s)||be(s,null)}),i.forEach(function(s){r.has(s)||be(s,c)})}We.set(n,e)},[e]),n}function kn(e){return e}function Sn(e,t){t===void 0&&(t=kn);var n=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var c=t(i,o);return n.push(c),function(){n=n.filter(function(s){return s!==c})}},assignSyncMedium:function(i){for(o=!0;n.length;){var c=n;n=[],c.forEach(i)}n={push:function(s){return i(s)},filter:function(){return n}}},assignMedium:function(i){o=!0;var c=[];if(n.length){var s=n;n=[],s.forEach(i),c=n}var l=function(){var f=c;c=[],f.forEach(i)},d=function(){return Promise.resolve().then(l)};d(),n={push:function(f){c.push(f),d()},filter:function(f){return c=c.filter(f),n}}}};return r}function On(e){e===void 0&&(e={});var t=Sn(null);return t.options=V({async:!0,ssr:!1},e),t}var xt=function(e){var t=e.sideCar,n=wt(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return a.createElement(o,V({},n))};xt.isSideCarExport=!0;function Dn(e,t){return e.useMedium(t),xt}var Rt=On(),he=function(){},fe=a.forwardRef(function(e,t){var n=a.useRef(null),o=a.useState({onScrollCapture:he,onWheelCapture:he,onTouchMoveCapture:he}),r=o[0],i=o[1],c=e.forwardProps,s=e.children,l=e.className,d=e.removeScrollBar,f=e.enabled,p=e.shards,x=e.sideCar,m=e.noIsolation,T=e.inert,u=e.allowPinchZoom,g=e.as,h=g===void 0?"div":g,R=wt(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),y=x,w=Tn([n,t]),E=V(V({},R),r);return a.createElement(a.Fragment,null,f&&a.createElement(y,{sideCar:Rt,removeScrollBar:d,shards:p,noIsolation:m,inert:T,setCallbacks:i,allowPinchZoom:!!u,lockRef:n}),c?a.cloneElement(a.Children.only(s),V(V({},E),{ref:w})):a.createElement(h,V({},E,{className:l,ref:w}),s))});fe.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};fe.classNames={fullWidth:de,zeroRight:ue};function Pn(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Ut();return t&&e.setAttribute("nonce",t),e}function Nn(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Fn(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var In=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Pn())&&(Nn(t,n),Fn(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},An=function(){var e=In();return function(t,n){a.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Tt=function(){var e=An(),t=function(n){var o=n.styles,r=n.dynamic;return e(o,r),null};return t},Ln={left:0,top:0,right:0,gap:0},ye=function(e){return parseInt(e||"",10)||0},_n=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[ye(n),ye(o),ye(r)]},Vn=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Ln;var t=_n(e),n=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-n+t[2]-t[0])}},Mn=Tt(),q="data-scroll-locked",Un=function(e,t,n,o){var r=e.left,i=e.top,c=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Cn,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(s,"px ").concat(o,`;
  }
  body[`).concat(q,`] {
    overflow: hidden `).concat(o,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(o,";"),n==="margin"&&`
    padding-left: `.concat(r,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(c,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(o,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(o,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ue,` {
    right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(de,` {
    margin-right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(ue," .").concat(ue,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(de," .").concat(de,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(q,`] {
    `).concat(Bn,": ").concat(s,`px;
  }
`)},Ke=function(){var e=parseInt(document.body.getAttribute(q)||"0",10);return isFinite(e)?e:0},jn=function(){a.useEffect(function(){return document.body.setAttribute(q,(Ke()+1).toString()),function(){var e=Ke()-1;e<=0?document.body.removeAttribute(q):document.body.setAttribute(q,e.toString())}},[])},Hn=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;jn();var i=a.useMemo(function(){return Vn(r)},[r]);return a.createElement(Mn,{styles:Un(i,!t,r,n?"":"!important")})},Ce=!1;if(typeof window<"u")try{var se=Object.defineProperty({},"passive",{get:function(){return Ce=!0,!0}});window.addEventListener("test",se,se),window.removeEventListener("test",se,se)}catch{Ce=!1}var W=Ce?{passive:!1}:!1,Wn=function(e){return e.tagName==="TEXTAREA"},kt=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Wn(e)&&n[t]==="visible")},Kn=function(e){return kt(e,"overflowY")},qn=function(e){return kt(e,"overflowX")},qe=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var o=St(e,n);if(o){var r=Ot(e,n),i=r[1],c=r[2];if(i>c)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},Xn=function(e){var t=e.scrollTop,n=e.scrollHeight,o=e.clientHeight;return[t,n,o]},Yn=function(e){var t=e.scrollLeft,n=e.scrollWidth,o=e.clientWidth;return[t,n,o]},St=function(e,t){return e==="v"?Kn(t):qn(t)},Ot=function(e,t){return e==="v"?Xn(t):Yn(t)},zn=function(e,t){return e==="h"&&t==="rtl"?-1:1},Gn=function(e,t,n,o,r){var i=zn(e,window.getComputedStyle(t).direction),c=i*o,s=n.target,l=t.contains(s),d=!1,f=c>0,p=0,x=0;do{var m=Ot(e,s),T=m[0],u=m[1],g=m[2],h=u-g-i*T;(T||h)&&St(e,s)&&(p+=h,x+=T),s=s.parentNode}while(!l&&s!==document.body||l&&(t.contains(s)||t===s));return(f&&(p===0||!r)||!f&&(x===0||!r))&&(d=!0),d},ce=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Xe=function(e){return[e.deltaX,e.deltaY]},Ye=function(e){return e&&"current"in e?e.current:e},Zn=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Qn=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Jn=0,K=[];function eo(e){var t=a.useRef([]),n=a.useRef([0,0]),o=a.useRef(),r=a.useState(Jn++)[0],i=a.useState(function(){return Tt()})[0],c=a.useRef(e);a.useEffect(function(){c.current=e},[e]),a.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var u=jt([e.lockRef.current],(e.shards||[]).map(Ye),!0).filter(Boolean);return u.forEach(function(g){return g.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),u.forEach(function(g){return g.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var s=a.useCallback(function(u,g){if("touches"in u&&u.touches.length===2)return!c.current.allowPinchZoom;var h=ce(u),R=n.current,y="deltaX"in u?u.deltaX:R[0]-h[0],w="deltaY"in u?u.deltaY:R[1]-h[1],E,A=u.target,P=Math.abs(y)>Math.abs(w)?"h":"v";if("touches"in u&&P==="h"&&A.type==="range")return!1;var $=qe(P,A);if(!$)return!0;if($?E=P:(E=P==="v"?"h":"v",$=qe(P,A)),!$)return!1;if(!o.current&&"changedTouches"in u&&(y||w)&&(o.current=E),!E)return!0;var C=o.current||E;return Gn(C,g,u,C==="h"?y:w,!0)},[]),l=a.useCallback(function(u){var g=u;if(!(!K.length||K[K.length-1]!==i)){var h="deltaY"in g?Xe(g):ce(g),R=t.current.filter(function(E){return E.name===g.type&&E.target===g.target&&Zn(E.delta,h)})[0];if(R&&R.should){g.cancelable&&g.preventDefault();return}if(!R){var y=(c.current.shards||[]).map(Ye).filter(Boolean).filter(function(E){return E.contains(g.target)}),w=y.length>0?s(g,y[0]):!c.current.noIsolation;w&&g.cancelable&&g.preventDefault()}}},[]),d=a.useCallback(function(u,g,h,R){var y={name:u,delta:g,target:h,should:R};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(w){return w!==y})},1)},[]),f=a.useCallback(function(u){n.current=ce(u),o.current=void 0},[]),p=a.useCallback(function(u){d(u.type,Xe(u),u.target,s(u,e.lockRef.current))},[]),x=a.useCallback(function(u){d(u.type,ce(u),u.target,s(u,e.lockRef.current))},[]);a.useEffect(function(){return K.push(i),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:x}),document.addEventListener("wheel",l,W),document.addEventListener("touchmove",l,W),document.addEventListener("touchstart",f,W),function(){K=K.filter(function(u){return u!==i}),document.removeEventListener("wheel",l,W),document.removeEventListener("touchmove",l,W),document.removeEventListener("touchstart",f,W)}},[]);var m=e.removeScrollBar,T=e.inert;return a.createElement(a.Fragment,null,T?a.createElement(i,{styles:Qn(r)}):null,m?a.createElement(Hn,{gapMode:"margin"}):null)}const to=Dn(Rt,eo);var Dt=a.forwardRef(function(e,t){return a.createElement(fe,V({},e,{ref:t,sideCar:to}))});Dt.classNames=fe.classNames;const Pt="Dialog",[Nt,Lo]=Xt(Pt),[no,I]=Nt(Pt),oo=e=>{const{__scopeDialog:t,children:n,open:o,defaultOpen:r,onOpenChange:i,modal:c=!0}=e,s=a.useRef(null),l=a.useRef(null),[d=!1,f]=Qt({prop:o,defaultProp:r,onChange:i});return a.createElement(no,{scope:t,triggerRef:s,contentRef:l,contentId:pe(),titleId:pe(),descriptionId:pe(),open:d,onOpenChange:f,onOpenToggle:a.useCallback(()=>f(p=>!p),[f]),modal:c},n)},ao="DialogPortal",[_o,Ft]=Nt(ao,{forceMount:void 0}),Be="DialogOverlay",ro=a.forwardRef((e,t)=>{const n=Ft(Be,e.__scopeDialog),{forceMount:o=n.forceMount,...r}=e,i=I(Be,e.__scopeDialog);return i.modal?a.createElement(Se,{present:o||i.open},a.createElement(io,O({},r,{ref:t}))):null}),io=a.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=I(Be,n);return a.createElement(Dt,{as:Te,allowPinchZoom:!0,shards:[r.contentRef]},a.createElement(Y.div,O({"data-state":At(r.open)},o,{ref:t,style:{pointerEvents:"auto",...o.style}})))}),oe="DialogContent",so=a.forwardRef((e,t)=>{const n=Ft(oe,e.__scopeDialog),{forceMount:o=n.forceMount,...r}=e,i=I(oe,e.__scopeDialog);return a.createElement(Se,{present:o||i.open},i.modal?a.createElement(co,O({},r,{ref:t})):a.createElement(lo,O({},r,{ref:t})))}),co=a.forwardRef((e,t)=>{const n=I(oe,e.__scopeDialog),o=a.useRef(null),r=ae(t,n.contentRef,o);return a.useEffect(()=>{const i=o.current;if(i)return Ht(i)},[]),a.createElement(It,O({},e,{ref:r,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:U(e.onCloseAutoFocus,i=>{var c;i.preventDefault(),(c=n.triggerRef.current)===null||c===void 0||c.focus()}),onPointerDownOutside:U(e.onPointerDownOutside,i=>{const c=i.detail.originalEvent,s=c.button===0&&c.ctrlKey===!0;(c.button===2||s)&&i.preventDefault()}),onFocusOutside:U(e.onFocusOutside,i=>i.preventDefault())}))}),lo=a.forwardRef((e,t)=>{const n=I(oe,e.__scopeDialog),o=a.useRef(!1),r=a.useRef(!1);return a.createElement(It,O({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var c;if((c=e.onCloseAutoFocus)===null||c===void 0||c.call(e,i),!i.defaultPrevented){var s;o.current||(s=n.triggerRef.current)===null||s===void 0||s.focus(),i.preventDefault()}o.current=!1,r.current=!1},onInteractOutside:i=>{var c,s;(c=e.onInteractOutside)===null||c===void 0||c.call(e,i),i.defaultPrevented||(o.current=!0,i.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const l=i.target;((s=n.triggerRef.current)===null||s===void 0?void 0:s.contains(l))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&r.current&&i.preventDefault()}}))}),It=a.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:r,onCloseAutoFocus:i,...c}=e,s=I(oe,n),l=a.useRef(null),d=ae(t,l);return En(),a.createElement(a.Fragment,null,a.createElement(pn,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:r,onUnmountAutoFocus:i},a.createElement(un,O({role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":At(s.open)},c,{ref:d,onDismiss:()=>s.onOpenChange(!1)}))),!1)}),uo="DialogTitle",fo=a.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=I(uo,n);return a.createElement(Y.h2,O({id:r.titleId},o,{ref:t}))}),po="DialogDescription",mo=a.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=I(po,n);return a.createElement(Y.p,O({id:r.descriptionId},o,{ref:t}))}),go="DialogClose",vo=a.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=I(go,n);return a.createElement(Y.button,O({type:"button"},o,{ref:t,onClick:U(e.onClick,()=>r.onOpenChange(!1))}))});function At(e){return e?"open":"closed"}const bo=oo,ho=ro,yo=so,wo=fo,$o=mo,Eo=vo,Co=e=>{const t=a.useRef();return a.useEffect(()=>{t.current=e},[e]),t.current},ze=e=>Co(e)!==e,M=a.forwardRef((e,t)=>{const{children:n,title:o,description:r,closeButtonIcon:i,open:c,onOpenChange:s,onClose:l,className:d,data:f,overlayClassName:p,testId:x,delayCloseFor:m,onBeforeUnload:T,...u}=e,g=Wt({dialogCloseButtonIcon:i}),[h,R]=a.useState(c?void 0:"close"),[y,w]=a.useState(c),E=a.useRef(),A=ze(h),P=ze(c),$=a.useRef([]),C=a.useCallback(async D=>{if(T){const H=T(D);return H instanceof Promise?H:Promise.resolve(H)}return!0},[T]),L=a.useCallback(async D=>{if(!(D===!1&&await(C==null?void 0:C("close"))===!1)){if(R(D?void 0:"close"),!D&&m){setTimeout(()=>{w(!1)},m);return}w(D)}},[m,C]),j=a.useCallback(()=>new Promise(D=>{L(!0),E.current=D}),[L]),Oe=a.useCallback(async()=>{await(C==null?void 0:C("ok"))!==!1&&R("ok")},[C]),De=a.useCallback(async()=>{await(C==null?void 0:C("close"))!==!1&&R("close")},[C]),Pe=a.useCallback(async()=>{await(C==null?void 0:C("cancel"))!==!1&&R("cancel")},[C]);return a.useImperativeHandle(t,()=>({open:j,close:De,ok:Oe,cancel:Pe,isOpen:!!y,addOpenChangeListener:D=>($.current.push(D),()=>{$.current=$.current.filter(H=>H!==D)})}),[j,Pe,De,Oe,y]),a.useEffect(()=>{h&&E.current&&(E.current({action:h,data:f}),E.current=void 0),A&&(s==null||s(!h),h&&(l==null||l(),m?setTimeout(()=>{w(!1)},m):w(!1)))},[A,h,f,s,l,m]),a.useEffect(()=>{P&&c!==void 0&&L(c)},[c,L,P]),a.useEffect(()=>{$.current.forEach(D=>D(!!y))},[y]),v.jsx(bo,{open:y,onOpenChange:L,children:g.globalPortalTo&&Re.createPortal(v.jsx(ho,{className:Ne("arm-dialog-overlay",p),"data-visible":!h,children:v.jsxs(yo,{className:Ne("arm-dialog",d),"data-has-title":o?!0:void 0,"data-testid":x,"data-visible":!h,...u,children:[o&&v.jsx(wo,{className:"arm-dialog-title",children:o}),r&&v.jsx($o,{className:"arm-dialog-description",children:r}),n&&v.jsx("div",{className:"arm-dialog-content",children:n}),g.dialogCloseButtonIcon!==!1&&v.jsx(Eo,{className:"arm-dialog-close","aria-label":"Close",children:g.dialogCloseButtonIcon})]})}),g.globalPortalTo)})});M.displayName="Dialog";M.__docgenInfo={description:"Dialog component. Used to display a full-screen modal dialog to the user.\n- Can be state controlled with `open` and `onOpenChange` props.\n- Can be async by assigning a ref and calling the utility functions (a `useDialog` helper hook is available for this.)\n- Supports dynamic data in async mode, so that a form can be built as a reusable async dialog.",methods:[{name:"addOpenChangeListener",docblock:null,modifiers:[],params:[{name:"listener",optional:!1,type:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}},alias:"OpenChangeListener"}}],returns:null}],displayName:"Dialog",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional title to show at the top of the dialog in an H2 tag"},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional description to show in the body of the dialog in a P tag"},closeButtonIcon:{required:!1,tsType:{name:"union",raw:"JSX.Element | false",elements:[{name:"JSX.Element"},{name:"literal",value:"false"}]},description:"Icon to use as the close button. Send `false` to hide the close button entirely"},open:{required:!1,tsType:{name:"boolean"},description:"Bool denoting whether the dialog is open or closed - for state controlled dialogs"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Function called when the dialog is opened/closed - for state controlled dialogs"},onBeforeUnload:{required:!1,tsType:{name:"signature",type:"function",raw:"(finishAction: DialogFinishAction) => boolean | Promise<boolean>",signature:{arguments:[{type:{name:"Omit",elements:[{name:"DialogElement",elements:[{name:"unknown"}],raw:"DialogElement<unknown>"},{name:"literal",value:"'open'"}],raw:"Omit<DialogElement<unknown>, 'open'>"},name:"finishAction"}],return:{name:"union",raw:"boolean | Promise<boolean>",elements:[{name:"boolean"},{name:"Promise",elements:[{name:"boolean"}],raw:"Promise<boolean>"}]}}},description:"Function called when the dialog is about to close. Return `false` or a promise of `false` to prevent the dialog from closing"},className:{required:!1,tsType:{name:"string"},description:"Optional CSS class for the dialog component"},overlayClassName:{required:!1,tsType:{name:"string"},description:"Optional CSS class for the dialog overlay"},data:{required:!1,tsType:{name:"TData"},description:"Optional Data to pass into the dialog. Data will be returned from the async dialog functions allowing for reusable form based dialogs"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function called when the dialog is closed. Don't use for state control, only for side effects. `onOpenChange` should be used for state control"},testId:{required:!1,tsType:{name:"string"},description:"Optional test ID for the dialog"},delayCloseFor:{required:!1,tsType:{name:"number"},description:"Optional time to delay closing for in MS (allows for CSS animations to complete, animate using the [data-visible] attribute)"}},composes:["Omit"]};const le=new Error("Dialog function called on an invalid dialog, are you sure you've added the ref to the Armstrong <Dialog> component?"),re=e=>{const t=a.useRef(null),[n,o]=a.useState(!1);a.useImperativeHandle(e,()=>t.current);const r=a.useCallback(()=>{if(!t.current)throw le;return t.current.open()},[]),i=a.useCallback(()=>{if(!t.current)throw le;return t.current.cancel()},[]),c=a.useCallback(()=>{if(!t.current)throw le;return t.current.close()},[]),s=a.useCallback(()=>{if(!t.current)throw le;return t.current.ok()},[]);return a.useEffect(()=>{if(t.current)return t.current.addOpenChangeListener(o)},[]),[t,{open:r,cancel:i,close:c,ok:s,isOpen:n}]},Bo={title:"Modals/Dialog",component:M,parameters:{docs:{description:{component:"metadata"}}}},X={args:{title:"Test Dialog",description:"Hello, I am a test dialog",onClose:xe()},render:e=>{const[t,n]=a.useState(!1);return v.jsxs(v.Fragment,{children:[v.jsx(F,{onClick:()=>n(!0),children:"Open dialog"}),v.jsx(M,{...e,open:t,onOpenChange:n})]})}},z={...X,play:async({canvasElement:e,args:t})=>{const o=k(e).getByText("Open dialog");S.click(o);const r=await we(document.body,t.title),i=await we(document.body,t.description);await B(()=>b(r).toBeVisible()),await B(()=>b(i).toBeVisible());const c=await N(document.body,"dialog"),s=await k(c).findByRole("button",{name:"Close"});b(s).toBeVisible(),S.click(s),await B(()=>b(c).not.toBeVisible())}},G={...X,args:{...X.args,title:void 0},play:async({canvasElement:e})=>{const n=k(e).getByText("Open dialog");S.click(n);const o=await N(document.body,"dialog");await B(()=>b(o).toBeVisible()),b(o.getElementsByTagName("h2")).toHaveLength(0)}},Z={...X,args:{...X.args,closeButtonIcon:!1},play:async({canvasElement:e})=>{const n=k(e).getByText("Open dialog");S.click(n);const o=await N(document.body,"dialog");await B(()=>b(o).toBeVisible()),b(Vt(o,"button",{name:"Close"})).not.toBeInTheDocument()}},Q={...X,args:{children:v.jsx("div",{children:v.jsx("p",{children:"Some custom content"})}),onClose:xe()},play:async({canvasElement:e})=>{const n=k(e).getByText("Open dialog");S.click(n);const o=await N(document.body,"dialog");await B(()=>b(o).toBeVisible());const r=k(o).getByText("Some custom content");b(r).toBeVisible()}},J={render:()=>{const[e,t]=a.useState(!1);return v.jsxs("div",{children:[v.jsx(M,{open:e,onOpenChange:t,title:"Simple State Dialog",children:v.jsx("div",{children:"Here is some content"})}),v.jsx(F,{onClick:()=>t(!0),children:"Open simple state dialog"})]})},play:async({canvasElement:e})=>{const n=k(e).getByText("Open simple state dialog");S.click(n);const o=await N(document.body,"dialog");await B(()=>b(o).toBeVisible());const r=k(o).getByText("Here is some content");b(r).toBeVisible();const i=await k(o).findByRole("button",{name:"Close"});b(i).toBeVisible(),S.click(i),await B(()=>b(o).not.toBeVisible())}},ee={args:{onBeforeUnload:xe()},render:({onBeforeUnload:e})=>{const[t,{open:n,ok:o,cancel:r,isOpen:i}]=re(),[c,s]=a.useState("idle"),l=a.useCallback(async()=>{const{action:d}=await n();s(d)},[n,s]);return v.jsxs("div",{children:[v.jsx(M,{ref:t,title:"Are you sure?",onBeforeUnload:e,description:"Actions have consequences, would you like to continue anyway?",children:v.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[v.jsx(F,{"aria-label":"OK",onClick:o,displayStatus:"positive",children:"OK"}),v.jsx(F,{"aria-label":"Cancel",onClick:r,displayStatus:"negative",children:"Cancel"})]})}),v.jsx(F,{onClick:l,children:"Open confirmation dialog"}),v.jsx("div",{"data-testid":"dialog-result",children:c}),v.jsx("div",{"data-testid":"dialog-is-open",children:i?"open":"closed"})]})},play:async({canvasElement:e,args:t})=>{const n=t.onBeforeUnload;n.mockReturnValue(!0);const o=k(e).getByTestId("dialog-is-open");b(o).toHaveTextContent("closed");const i=k(e).getByText("Open confirmation dialog");S.click(i);let c=await N(document.body,"dialog");await B(()=>b(c).toBeVisible()),b(o).toHaveTextContent("open");const s=k(e).getByTestId("dialog-result");b(s).toHaveTextContent("idle");const l=k(c).getByRole("button",{name:"OK"});b(l).toBeVisible(),S.click(l),await B(()=>b(c).not.toBeVisible()),await B(()=>b(s).toHaveTextContent("ok")),b(t.onBeforeUnload).toHaveBeenNthCalledWith(1,"ok"),S.click(i),c=await N(document.body,"dialog"),await B(()=>b(c).toBeVisible());let d=k(c).getByRole("button",{name:"Cancel"});b(d).toBeVisible(),S.click(d),await B(()=>b(c).not.toBeVisible()),await B(()=>b(s).toHaveTextContent("cancel")),b(t.onBeforeUnload).toHaveBeenNthCalledWith(2,"cancel"),n.mockReturnValue(!1),S.click(i),c=await N(document.body,"dialog"),await B(()=>b(c).toBeVisible()),d=k(c).getByRole("button",{name:"Cancel"}),S.click(d),await B(()=>b(t.onBeforeUnload).toHaveBeenNthCalledWith(3,"cancel")),await B(()=>b(c).toBeVisible()),n.mockReturnValue(!0),S.click(d),await B(()=>b(c).not.toBeVisible())}},Lt=a.forwardRef((e,t)=>{const[n,{cancel:o}]=re(t);return v.jsxs(M,{ref:n,title:"Reusable dialog",children:[v.jsx("div",{children:"This custom dialog can be used throughout the app just like an Armstrong dialog!"}),v.jsx(F,{onClick:o,style:{marginTop:"16px"},"aria-label":"Cancel",children:"Cancel"})]})});Lt.displayName="ReusableDialogExample";const te={render:()=>{const[e,{open:t}]=re();return v.jsxs("div",{children:[v.jsx(Lt,{ref:e}),v.jsx(F,{onClick:t,children:"Open reusable dialog"})]})},play:async({canvasElement:e})=>{const n=k(e).getByText("Open reusable dialog");S.click(n);const o=await N(document.body,"dialog");await B(()=>b(o).toBeVisible());const r=await we(document.body,"Reusable dialog");await B(()=>b(r).toBeVisible());const i=k(o).getByRole("button",{name:"Cancel"});S.click(i),await B(()=>b(o).not.toBeVisible())}},_t=a.forwardRef((e,t)=>{const[n,{ok:o}]=re(t),{formProp:r,formState:i}=Kt(),c=a.useCallback(s=>{s.preventDefault(),o()},[o]);return v.jsx(M,{ref:n,title:"Login",data:i,children:v.jsxs("form",{onSubmit:c,children:[v.jsx(Fe,{type:"text",bind:r("username").bind(),placeholder:"Username"}),v.jsx(Fe,{type:"password",bind:r("password").bind(),placeholder:"Password"}),v.jsx(F,{type:"submit","aria-label":"Login",disabled:!(i!=null&&i.username)||!(i!=null&&i.password),style:{marginTop:"16px"},children:"Login"})]})})});_t.displayName="LoginDialog";const ne={render:()=>{const[e,{open:t}]=re(),[n,o]=a.useState("idle"),r=a.useCallback(async()=>{const{action:i,data:c}=await t();o(`${i}, username: ${c==null?void 0:c.username}, password: ${c==null?void 0:c.password}`)},[t,o]);return v.jsxs("div",{children:[v.jsx(_t,{ref:e}),v.jsx(F,{onClick:r,children:"Open login dialog"}),v.jsx("div",{"data-testid":"dialog-result",children:n})]})},play:async({canvasElement:e})=>{const t="test@example.com",n="test-password",r=k(e).getByText("Open login dialog");S.click(r);const i=await N(document.body,"dialog");await B(()=>b(i).toBeVisible());const c=k(e).getByTestId("dialog-result");b(c).toHaveTextContent("idle");const s=k(i).getByPlaceholderText("Username");await S.type(s,t);const l=k(i).getByPlaceholderText("Password");await S.type(l,n);const d=k(i).getByRole("button",{name:"Login"});S.click(d),await B(()=>b(i).not.toBeVisible()),await B(()=>b(c).toHaveTextContent(`ok, username: ${t}, password: ${n}`))}};var Ge,Ze,Qe;z.parameters={...z.parameters,docs:{...(Ge=z.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Qe=(Ze=z.parameters)==null?void 0:Ze.docs)==null?void 0:Qe.source}}};var Je,et,tt;G.parameters={...G.parameters,docs:{...(Je=G.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(tt=(et=G.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,ot,at;Z.parameters={...Z.parameters,docs:{...(nt=Z.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(at=(ot=Z.parameters)==null?void 0:ot.docs)==null?void 0:at.source}}};var rt,it,st;Q.parameters={...Q.parameters,docs:{...(rt=Q.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(st=(it=Q.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};var ct,lt,ut;J.parameters={...J.parameters,docs:{...(ct=J.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(ut=(lt=J.parameters)==null?void 0:lt.docs)==null?void 0:ut.source}}};var dt,ft,pt;ee.parameters={...ee.parameters,docs:{...(dt=ee.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(pt=(ft=ee.parameters)==null?void 0:ft.docs)==null?void 0:pt.source}}};var mt,gt,vt;te.parameters={...te.parameters,docs:{...(mt=te.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(vt=(gt=te.parameters)==null?void 0:gt.docs)==null?void 0:vt.source}}};var bt,ht,yt;ne.parameters={...ne.parameters,docs:{...(bt=ne.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(yt=(ht=ne.parameters)==null?void 0:ht.docs)==null?void 0:yt.source}}};const xo=["Default","NoTitle","NoCloseButton","CustomContent","SimpleStateDialog","AsyncDialog","ReusableDialog","ReusableFormDialog"],Vo=Object.freeze(Object.defineProperty({__proto__:null,AsyncDialog:ee,CustomContent:Q,Default:z,NoCloseButton:Z,NoTitle:G,ReusableDialog:te,ReusableFormDialog:ne,SimpleStateDialog:J,__namedExportsOrder:xo,default:Bo},Symbol.toStringTag,{value:"Module"}));export{ee as A,M as D,te as R,J as S,z as a,ne as b,Vo as d};
