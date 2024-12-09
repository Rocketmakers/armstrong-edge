import{j as g}from"./jsx-runtime-Cl2eCCBe.js";import{c as Oe,f as gt,w as B,u as S,b as ye,a as T,e as b,d as I,q as Lt}from"./classNames-TtGgGdEV.js";import{r as a,b as _t}from"./index-Cqyox1Tj.js";import{_ as O}from"./extends-CF3RwP-h.js";import{$ as M}from"./index-CcyUcsxs.js";import{r as xe}from"./index-QqxU7g3h.js";import{_,a as bt,g as Vt,b as Mt,h as jt}from"./index-BaW8Z0I_.js";import{u as Ht}from"./config.context-C5a6Dfld.js";import{B as N}from"./button.component-C6dxt20C.js";import{u as Ut}from"./label.component-D06KPTBy.js";import{I as ke}from"./input.component-gtL_kyBd.js";function Wt(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function ht(...e){return t=>e.forEach(n=>Wt(n,t))}function oe(...e){return a.useCallback(ht(...e),e)}function Kt(e,t=[]){let n=[];function o(s,c){const i=a.createContext(c),u=n.length;n=[...n,c];function d(p){const{scope:C,children:v,...R}=p,l=(C==null?void 0:C[e][u])||i,m=a.useMemo(()=>R,Object.values(R));return a.createElement(l.Provider,{value:m},v)}function f(p,C){const v=(C==null?void 0:C[e][u])||i,R=a.useContext(v);if(R)return R;if(c!==void 0)return c;throw new Error(`\`${p}\` must be used within \`${s}\``)}return d.displayName=s+"Provider",[d,f]}const r=()=>{const s=n.map(c=>a.createContext(c));return function(i){const u=(i==null?void 0:i[e])||s;return a.useMemo(()=>({[`__scope${e}`]:{...i,[e]:u}}),[i,u])}};return r.scopeName=e,[o,qt(r,...t)]}function qt(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const c=o.reduce((i,{useScope:u,scopeName:d})=>{const p=u(s)[`__scope${d}`];return{...i,...p}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}const Xt=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{},Yt=_t.useId||(()=>{});let zt=0;function fe(e){const[t,n]=a.useState(Yt());return Xt(()=>{e||n(o=>o??String(zt++))},[e]),e||(t?`radix-${t}`:"")}function yt(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}function Gt({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,r]=Zt({defaultProp:t,onChange:n}),s=e!==void 0,c=s?e:o,i=yt(n),u=a.useCallback(d=>{if(s){const p=typeof d=="function"?d(e):d;p!==e&&i(p)}else r(d)},[s,e,r,i]);return[c,u]}function Zt({defaultProp:e,onChange:t}){const n=a.useState(e),[o]=n,r=a.useRef(o),s=yt(t);return a.useEffect(()=>{r.current!==o&&(s(o),r.current=o)},[o,r,s]),n}const Be=a.forwardRef((e,t)=>{const{children:n,...o}=e,r=a.Children.toArray(n),s=r.find(Jt);if(s){const c=s.props.children,i=r.map(u=>u===s?a.Children.count(c)>1?a.Children.only(null):a.isValidElement(c)?c.props.children:null:u);return a.createElement($e,O({},o,{ref:t}),a.isValidElement(c)?a.cloneElement(c,void 0,i):null)}return a.createElement($e,O({},o,{ref:t}),n)});Be.displayName="Slot";const $e=a.forwardRef((e,t)=>{const{children:n,...o}=e;return a.isValidElement(n)?a.cloneElement(n,{...en(o,n.props),ref:t?ht(t,n.ref):n.ref}):a.Children.count(n)>1?a.Children.only(null):null});$e.displayName="SlotClone";const Qt=({children:e})=>a.createElement(a.Fragment,null,e);function Jt(e){return a.isValidElement(e)&&e.type===Qt}function en(e,t){const n={...t};for(const o in t){const r=e[o],s=t[o];/^on[A-Z]/.test(o)?r&&s?n[o]=(...i)=>{s(...i),r(...i)}:r&&(n[o]=r):o==="style"?n[o]={...r,...s}:o==="className"&&(n[o]=[r,s].filter(Boolean).join(" "))}return{...e,...n}}const tn=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],q=tn.reduce((e,t)=>{const n=a.forwardRef((o,r)=>{const{asChild:s,...c}=o,i=s?Be:t;return a.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),a.createElement(i,O({},c,{ref:r}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function nn(e,t){e&&xe.flushSync(()=>e.dispatchEvent(t))}function Re(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}function on(e,t=globalThis==null?void 0:globalThis.document){const n=Re(e);a.useEffect(()=>{const o=r=>{r.key==="Escape"&&n(r)};return t.addEventListener("keydown",o),()=>t.removeEventListener("keydown",o)},[n,t])}const we="dismissableLayer.update",an="dismissableLayer.pointerDownOutside",rn="dismissableLayer.focusOutside";let De;const sn=a.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),cn=a.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:r,onPointerDownOutside:s,onFocusOutside:c,onInteractOutside:i,onDismiss:u,...d}=e,f=a.useContext(sn),[p,C]=a.useState(null),v=(n=p==null?void 0:p.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,R]=a.useState({}),l=oe(t,w=>C(w)),m=Array.from(f.layers),[h]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),E=m.indexOf(h),y=p?m.indexOf(p):-1,$=f.layersWithOutsidePointerEventsDisabled.size>0,x=y>=E,A=ln(w=>{const D=w.target,X=[...f.branches].some(j=>j.contains(D));!x||X||(s==null||s(w),i==null||i(w),w.defaultPrevented||u==null||u())},v),k=un(w=>{const D=w.target;[...f.branches].some(j=>j.contains(D))||(c==null||c(w),i==null||i(w),w.defaultPrevented||u==null||u())},v);return on(w=>{y===f.layers.size-1&&(r==null||r(w),!w.defaultPrevented&&u&&(w.preventDefault(),u()))},v),a.useEffect(()=>{if(p)return o&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(De=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(p)),f.layers.add(p),Pe(),()=>{o&&f.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=De)}},[p,v,o,f]),a.useEffect(()=>()=>{p&&(f.layers.delete(p),f.layersWithOutsidePointerEventsDisabled.delete(p),Pe())},[p,f]),a.useEffect(()=>{const w=()=>R({});return document.addEventListener(we,w),()=>document.removeEventListener(we,w)},[]),a.createElement(q.div,O({},d,{ref:l,style:{pointerEvents:$?x?"auto":"none":void 0,...e.style},onFocusCapture:M(e.onFocusCapture,k.onFocusCapture),onBlurCapture:M(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:M(e.onPointerDownCapture,A.onPointerDownCapture)}))});function ln(e,t=globalThis==null?void 0:globalThis.document){const n=Re(e),o=a.useRef(!1),r=a.useRef(()=>{});return a.useEffect(()=>{const s=i=>{if(i.target&&!o.current){let d=function(){$t(an,n,u,{discrete:!0})};const u={originalEvent:i};i.pointerType==="touch"?(t.removeEventListener("click",r.current),r.current=d,t.addEventListener("click",r.current,{once:!0})):d()}o.current=!1},c=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(c),t.removeEventListener("pointerdown",s),t.removeEventListener("click",r.current)}},[t,n]),{onPointerDownCapture:()=>o.current=!0}}function un(e,t=globalThis==null?void 0:globalThis.document){const n=Re(e),o=a.useRef(!1);return a.useEffect(()=>{const r=s=>{s.target&&!o.current&&$t(rn,n,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function Pe(){const e=new CustomEvent(we);document.dispatchEvent(e)}function $t(e,t,n,{discrete:o}){const r=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),o?nn(r,s):r.dispatchEvent(s)}function Ne(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}const pe="focusScope.autoFocusOnMount",me="focusScope.autoFocusOnUnmount",Ie={bubbles:!1,cancelable:!0},dn=a.forwardRef((e,t)=>{const{loop:n=!1,trapped:o=!1,onMountAutoFocus:r,onUnmountAutoFocus:s,...c}=e,[i,u]=a.useState(null),d=Ne(r),f=Ne(s),p=a.useRef(null),C=oe(t,l=>u(l)),v=a.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;a.useEffect(()=>{if(o){let l=function(y){if(v.paused||!i)return;const $=y.target;i.contains($)?p.current=$:L(p.current,{select:!0})},m=function(y){if(v.paused||!i)return;const $=y.relatedTarget;$!==null&&(i.contains($)||L(p.current,{select:!0}))},h=function(y){const $=document.activeElement;for(const x of y)x.removedNodes.length>0&&(i!=null&&i.contains($)||L(i))};document.addEventListener("focusin",l),document.addEventListener("focusout",m);const E=new MutationObserver(h);return i&&E.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",l),document.removeEventListener("focusout",m),E.disconnect()}}},[o,i,v.paused]),a.useEffect(()=>{if(i){Ae.add(v);const l=document.activeElement;if(!i.contains(l)){const h=new CustomEvent(pe,Ie);i.addEventListener(pe,d),i.dispatchEvent(h),h.defaultPrevented||(fn(bn(wt(i)),{select:!0}),document.activeElement===l&&L(i))}return()=>{i.removeEventListener(pe,d),setTimeout(()=>{const h=new CustomEvent(me,Ie);i.addEventListener(me,f),i.dispatchEvent(h),h.defaultPrevented||L(l??document.body,{select:!0}),i.removeEventListener(me,f),Ae.remove(v)},0)}}},[i,d,f,v]);const R=a.useCallback(l=>{if(!n&&!o||v.paused)return;const m=l.key==="Tab"&&!l.altKey&&!l.ctrlKey&&!l.metaKey,h=document.activeElement;if(m&&h){const E=l.currentTarget,[y,$]=pn(E);y&&$?!l.shiftKey&&h===$?(l.preventDefault(),n&&L(y,{select:!0})):l.shiftKey&&h===y&&(l.preventDefault(),n&&L($,{select:!0})):h===E&&l.preventDefault()}},[n,o,v.paused]);return a.createElement(q.div,O({tabIndex:-1},c,{ref:C,onKeyDown:R}))});function fn(e,{select:t=!1}={}){const n=document.activeElement;for(const o of e)if(L(o,{select:t}),document.activeElement!==n)return}function pn(e){const t=wt(e),n=Fe(t,e),o=Fe(t.reverse(),e);return[n,o]}function wt(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Fe(e,t){for(const n of e)if(!mn(n,{upTo:t}))return n}function mn(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function vn(e){return e instanceof HTMLInputElement&&"select"in e}function L(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&vn(e)&&t&&e.select()}}const Ae=gn();function gn(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Le(e,t),e.unshift(t)},remove(t){var n;e=Le(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function Le(e,t){const n=[...e],o=n.indexOf(t);return o!==-1&&n.splice(o,1),n}function bn(e){return e.filter(t=>t.tagName!=="A")}const _e=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{};function hn(e,t){return a.useReducer((n,o)=>{const r=t[n][o];return r??n},e)}const Te=e=>{const{present:t,children:n}=e,o=yn(t),r=typeof n=="function"?n({present:o.isPresent}):a.Children.only(n),s=oe(o.ref,r.ref);return typeof n=="function"||o.isPresent?a.cloneElement(r,{ref:s}):null};Te.displayName="Presence";function yn(e){const[t,n]=a.useState(),o=a.useRef({}),r=a.useRef(e),s=a.useRef("none"),c=e?"mounted":"unmounted",[i,u]=hn(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{const d=re(o.current);s.current=i==="mounted"?d:"none"},[i]),_e(()=>{const d=o.current,f=r.current;if(f!==e){const C=s.current,v=re(d);e?u("MOUNT"):v==="none"||(d==null?void 0:d.display)==="none"?u("UNMOUNT"):u(f&&C!==v?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),_e(()=>{if(t){const d=p=>{const v=re(o.current).includes(p.animationName);p.target===t&&v&&xe.flushSync(()=>u("ANIMATION_END"))},f=p=>{p.target===t&&(s.current=re(o.current))};return t.addEventListener("animationstart",f),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",f),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:a.useCallback(d=>{d&&(o.current=getComputedStyle(d)),n(d)},[])}}function re(e){return(e==null?void 0:e.animationName)||"none"}let ve=0;function $n(){a.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:Ve()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:Ve()),ve++,()=>{ve===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(o=>o.remove()),ve--}},[])}function Ve(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var le="right-scroll-bar-position",ue="width-before-scroll-bar",wn="with-scroll-bars-hidden",En="--removed-body-scroll-bar-size";function ge(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Cn(e,t){var n=a.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(o){var r=n.value;r!==o&&(n.value=o,n.callback(o,r))}}}})[0];return n.callback=t,n.facade}var xn=typeof window<"u"?a.useLayoutEffect:a.useEffect,Me=new WeakMap;function Bn(e,t){var n=Cn(null,function(o){return e.forEach(function(r){return ge(r,o)})});return xn(function(){var o=Me.get(n);if(o){var r=new Set(o),s=new Set(e),c=n.current;r.forEach(function(i){s.has(i)||ge(i,null)}),s.forEach(function(i){r.has(i)||ge(i,c)})}Me.set(n,e)},[e]),n}function Rn(e){return e}function Tn(e,t){t===void 0&&(t=Rn);var n=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(s){var c=t(s,o);return n.push(c),function(){n=n.filter(function(i){return i!==c})}},assignSyncMedium:function(s){for(o=!0;n.length;){var c=n;n=[],c.forEach(s)}n={push:function(i){return s(i)},filter:function(){return n}}},assignMedium:function(s){o=!0;var c=[];if(n.length){var i=n;n=[],i.forEach(s),c=n}var u=function(){var f=c;c=[],f.forEach(s)},d=function(){return Promise.resolve().then(u)};d(),n={push:function(f){c.push(f),d()},filter:function(f){return c=c.filter(f),n}}}};return r}function Sn(e){e===void 0&&(e={});var t=Tn(null);return t.options=_({async:!0,ssr:!1},e),t}var Et=function(e){var t=e.sideCar,n=bt(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return a.createElement(o,_({},n))};Et.isSideCarExport=!0;function On(e,t){return e.useMedium(t),Et}var Ct=Sn(),be=function(){},de=a.forwardRef(function(e,t){var n=a.useRef(null),o=a.useState({onScrollCapture:be,onWheelCapture:be,onTouchMoveCapture:be}),r=o[0],s=o[1],c=e.forwardProps,i=e.children,u=e.className,d=e.removeScrollBar,f=e.enabled,p=e.shards,C=e.sideCar,v=e.noIsolation,R=e.inert,l=e.allowPinchZoom,m=e.as,h=m===void 0?"div":m,E=bt(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),y=C,$=Bn([n,t]),x=_(_({},E),r);return a.createElement(a.Fragment,null,f&&a.createElement(y,{sideCar:Ct,removeScrollBar:d,shards:p,noIsolation:v,inert:R,setCallbacks:s,allowPinchZoom:!!l,lockRef:n}),c?a.cloneElement(a.Children.only(i),_(_({},x),{ref:$})):a.createElement(h,_({},x,{className:u,ref:$}),i))});de.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};de.classNames={fullWidth:ue,zeroRight:le};function kn(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Vt();return t&&e.setAttribute("nonce",t),e}function Dn(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Pn(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Nn=function(){var e=0,t=null;return{add:function(n){e==0&&(t=kn())&&(Dn(t,n),Pn(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},In=function(){var e=Nn();return function(t,n){a.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},xt=function(){var e=In(),t=function(n){var o=n.styles,r=n.dynamic;return e(o,r),null};return t},Fn={left:0,top:0,right:0,gap:0},he=function(e){return parseInt(e||"",10)||0},An=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[he(n),he(o),he(r)]},Ln=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Fn;var t=An(e),n=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-n+t[2]-t[0])}},_n=xt(),W="data-scroll-locked",Vn=function(e,t,n,o){var r=e.left,s=e.top,c=e.right,i=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(wn,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(i,"px ").concat(o,`;
  }
  body[`).concat(W,`] {
    overflow: hidden `).concat(o,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(o,";"),n==="margin"&&`
    padding-left: `.concat(r,`px;
    padding-top: `).concat(s,`px;
    padding-right: `).concat(c,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(o,`;
    `),n==="padding"&&"padding-right: ".concat(i,"px ").concat(o,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(le,` {
    right: `).concat(i,"px ").concat(o,`;
  }
  
  .`).concat(ue,` {
    margin-right: `).concat(i,"px ").concat(o,`;
  }
  
  .`).concat(le," .").concat(le,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(ue," .").concat(ue,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(W,`] {
    `).concat(En,": ").concat(i,`px;
  }
`)},je=function(){var e=parseInt(document.body.getAttribute(W)||"0",10);return isFinite(e)?e:0},Mn=function(){a.useEffect(function(){return document.body.setAttribute(W,(je()+1).toString()),function(){var e=je()-1;e<=0?document.body.removeAttribute(W):document.body.setAttribute(W,e.toString())}},[])},jn=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;Mn();var s=a.useMemo(function(){return Ln(r)},[r]);return a.createElement(_n,{styles:Vn(s,!t,r,n?"":"!important")})},Ee=!1;if(typeof window<"u")try{var se=Object.defineProperty({},"passive",{get:function(){return Ee=!0,!0}});window.addEventListener("test",se,se),window.removeEventListener("test",se,se)}catch{Ee=!1}var H=Ee?{passive:!1}:!1,Hn=function(e){return e.tagName==="TEXTAREA"},Bt=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Hn(e)&&n[t]==="visible")},Un=function(e){return Bt(e,"overflowY")},Wn=function(e){return Bt(e,"overflowX")},He=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var o=Rt(e,n);if(o){var r=Tt(e,n),s=r[1],c=r[2];if(s>c)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},Kn=function(e){var t=e.scrollTop,n=e.scrollHeight,o=e.clientHeight;return[t,n,o]},qn=function(e){var t=e.scrollLeft,n=e.scrollWidth,o=e.clientWidth;return[t,n,o]},Rt=function(e,t){return e==="v"?Un(t):Wn(t)},Tt=function(e,t){return e==="v"?Kn(t):qn(t)},Xn=function(e,t){return e==="h"&&t==="rtl"?-1:1},Yn=function(e,t,n,o,r){var s=Xn(e,window.getComputedStyle(t).direction),c=s*o,i=n.target,u=t.contains(i),d=!1,f=c>0,p=0,C=0;do{var v=Tt(e,i),R=v[0],l=v[1],m=v[2],h=l-m-s*R;(R||h)&&Rt(e,i)&&(p+=h,C+=R),i=i.parentNode}while(!u&&i!==document.body||u&&(t.contains(i)||t===i));return(f&&(p===0||!r)||!f&&(C===0||!r))&&(d=!0),d},ie=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Ue=function(e){return[e.deltaX,e.deltaY]},We=function(e){return e&&"current"in e?e.current:e},zn=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Gn=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Zn=0,U=[];function Qn(e){var t=a.useRef([]),n=a.useRef([0,0]),o=a.useRef(),r=a.useState(Zn++)[0],s=a.useState(function(){return xt()})[0],c=a.useRef(e);a.useEffect(function(){c.current=e},[e]),a.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var l=Mt([e.lockRef.current],(e.shards||[]).map(We),!0).filter(Boolean);return l.forEach(function(m){return m.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),l.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var i=a.useCallback(function(l,m){if("touches"in l&&l.touches.length===2)return!c.current.allowPinchZoom;var h=ie(l),E=n.current,y="deltaX"in l?l.deltaX:E[0]-h[0],$="deltaY"in l?l.deltaY:E[1]-h[1],x,A=l.target,k=Math.abs(y)>Math.abs($)?"h":"v";if("touches"in l&&k==="h"&&A.type==="range")return!1;var w=He(k,A);if(!w)return!0;if(w?x=k:(x=k==="v"?"h":"v",w=He(k,A)),!w)return!1;if(!o.current&&"changedTouches"in l&&(y||$)&&(o.current=x),!x)return!0;var D=o.current||x;return Yn(D,m,l,D==="h"?y:$,!0)},[]),u=a.useCallback(function(l){var m=l;if(!(!U.length||U[U.length-1]!==s)){var h="deltaY"in m?Ue(m):ie(m),E=t.current.filter(function(x){return x.name===m.type&&x.target===m.target&&zn(x.delta,h)})[0];if(E&&E.should){m.cancelable&&m.preventDefault();return}if(!E){var y=(c.current.shards||[]).map(We).filter(Boolean).filter(function(x){return x.contains(m.target)}),$=y.length>0?i(m,y[0]):!c.current.noIsolation;$&&m.cancelable&&m.preventDefault()}}},[]),d=a.useCallback(function(l,m,h,E){var y={name:l,delta:m,target:h,should:E};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function($){return $!==y})},1)},[]),f=a.useCallback(function(l){n.current=ie(l),o.current=void 0},[]),p=a.useCallback(function(l){d(l.type,Ue(l),l.target,i(l,e.lockRef.current))},[]),C=a.useCallback(function(l){d(l.type,ie(l),l.target,i(l,e.lockRef.current))},[]);a.useEffect(function(){return U.push(s),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:C}),document.addEventListener("wheel",u,H),document.addEventListener("touchmove",u,H),document.addEventListener("touchstart",f,H),function(){U=U.filter(function(l){return l!==s}),document.removeEventListener("wheel",u,H),document.removeEventListener("touchmove",u,H),document.removeEventListener("touchstart",f,H)}},[]);var v=e.removeScrollBar,R=e.inert;return a.createElement(a.Fragment,null,R?a.createElement(s,{styles:Gn(r)}):null,v?a.createElement(jn,{gapMode:"margin"}):null)}const Jn=On(Ct,Qn);var St=a.forwardRef(function(e,t){return a.createElement(de,_({},e,{ref:t,sideCar:Jn}))});St.classNames=de.classNames;const Ot="Dialog",[kt,Fo]=Kt(Ot),[eo,F]=kt(Ot),to=e=>{const{__scopeDialog:t,children:n,open:o,defaultOpen:r,onOpenChange:s,modal:c=!0}=e,i=a.useRef(null),u=a.useRef(null),[d=!1,f]=Gt({prop:o,defaultProp:r,onChange:s});return a.createElement(eo,{scope:t,triggerRef:i,contentRef:u,contentId:fe(),titleId:fe(),descriptionId:fe(),open:d,onOpenChange:f,onOpenToggle:a.useCallback(()=>f(p=>!p),[f]),modal:c},n)},no="DialogPortal",[Ao,Dt]=kt(no,{forceMount:void 0}),Ce="DialogOverlay",oo=a.forwardRef((e,t)=>{const n=Dt(Ce,e.__scopeDialog),{forceMount:o=n.forceMount,...r}=e,s=F(Ce,e.__scopeDialog);return s.modal?a.createElement(Te,{present:o||s.open},a.createElement(ao,O({},r,{ref:t}))):null}),ao=a.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=F(Ce,n);return a.createElement(St,{as:Be,allowPinchZoom:!0,shards:[r.contentRef]},a.createElement(q.div,O({"data-state":Nt(r.open)},o,{ref:t,style:{pointerEvents:"auto",...o.style}})))}),ne="DialogContent",ro=a.forwardRef((e,t)=>{const n=Dt(ne,e.__scopeDialog),{forceMount:o=n.forceMount,...r}=e,s=F(ne,e.__scopeDialog);return a.createElement(Te,{present:o||s.open},s.modal?a.createElement(so,O({},r,{ref:t})):a.createElement(io,O({},r,{ref:t})))}),so=a.forwardRef((e,t)=>{const n=F(ne,e.__scopeDialog),o=a.useRef(null),r=oe(t,n.contentRef,o);return a.useEffect(()=>{const s=o.current;if(s)return jt(s)},[]),a.createElement(Pt,O({},e,{ref:r,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:M(e.onCloseAutoFocus,s=>{var c;s.preventDefault(),(c=n.triggerRef.current)===null||c===void 0||c.focus()}),onPointerDownOutside:M(e.onPointerDownOutside,s=>{const c=s.detail.originalEvent,i=c.button===0&&c.ctrlKey===!0;(c.button===2||i)&&s.preventDefault()}),onFocusOutside:M(e.onFocusOutside,s=>s.preventDefault())}))}),io=a.forwardRef((e,t)=>{const n=F(ne,e.__scopeDialog),o=a.useRef(!1),r=a.useRef(!1);return a.createElement(Pt,O({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var c;if((c=e.onCloseAutoFocus)===null||c===void 0||c.call(e,s),!s.defaultPrevented){var i;o.current||(i=n.triggerRef.current)===null||i===void 0||i.focus(),s.preventDefault()}o.current=!1,r.current=!1},onInteractOutside:s=>{var c,i;(c=e.onInteractOutside)===null||c===void 0||c.call(e,s),s.defaultPrevented||(o.current=!0,s.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const u=s.target;((i=n.triggerRef.current)===null||i===void 0?void 0:i.contains(u))&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&r.current&&s.preventDefault()}}))}),Pt=a.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:r,onCloseAutoFocus:s,...c}=e,i=F(ne,n),u=a.useRef(null),d=oe(t,u);return $n(),a.createElement(a.Fragment,null,a.createElement(dn,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:r,onUnmountAutoFocus:s},a.createElement(cn,O({role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":Nt(i.open)},c,{ref:d,onDismiss:()=>i.onOpenChange(!1)}))),!1)}),co="DialogTitle",lo=a.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=F(co,n);return a.createElement(q.h2,O({id:r.titleId},o,{ref:t}))}),uo="DialogDescription",fo=a.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=F(uo,n);return a.createElement(q.p,O({id:r.descriptionId},o,{ref:t}))}),po="DialogClose",mo=a.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=F(po,n);return a.createElement(q.button,O({type:"button"},o,{ref:t,onClick:M(e.onClick,()=>r.onOpenChange(!1))}))});function Nt(e){return e?"open":"closed"}const vo=to,go=oo,bo=ro,ho=lo,yo=fo,$o=mo,wo=e=>{const t=a.useRef();return a.useEffect(()=>{t.current=e},[e]),t.current},Ke=e=>wo(e)!==e,V=a.forwardRef((e,t)=>{const{children:n,title:o,description:r,closeButtonIcon:s,open:c,onOpenChange:i,onClose:u,className:d,data:f,overlayClassName:p,testId:C,delayCloseFor:v,...R}=e,l=Ht({dialogCloseButtonIcon:s}),[m,h]=a.useState(c?void 0:"close"),[E,y]=a.useState(c),$=a.useRef(),x=Ke(m),A=Ke(c),k=a.useRef([]),w=a.useCallback(P=>{if(h(P?void 0:"close"),!P&&v){setTimeout(()=>{y(!1)},v);return}y(P)},[v]),D=a.useCallback(()=>new Promise(P=>{w(!0),$.current=P}),[w]),X=a.useCallback(()=>h("ok"),[]),j=a.useCallback(()=>h("close"),[]),Se=a.useCallback(()=>h("cancel"),[]);return a.useImperativeHandle(t,()=>({open:D,close:j,ok:X,cancel:Se,isOpen:!!E,addOpenChangeListener:P=>(k.current.push(P),()=>{k.current=k.current.filter(At=>At!==P)})}),[D,Se,j,X,E]),a.useEffect(()=>{m&&$.current&&($.current({action:m,data:f}),$.current=void 0),x&&(i==null||i(!m),m&&(u==null||u(),v?setTimeout(()=>{y(!1)},v):y(!1)))},[x,m,f,i,u,v]),a.useEffect(()=>{A&&c!==void 0&&w(c)},[c,w,A]),a.useEffect(()=>{k.current.forEach(P=>P(!!E))},[E]),g.jsx(vo,{open:E,onOpenChange:w,children:l.globalPortalTo&&xe.createPortal(g.jsx(go,{className:Oe("arm-dialog-overlay",p),"data-visible":!m,children:g.jsxs(bo,{className:Oe("arm-dialog",d),"data-has-title":o?!0:void 0,"data-testid":C,"data-visible":!m,...R,children:[o&&g.jsx(ho,{className:"arm-dialog-title",children:o}),r&&g.jsx(yo,{className:"arm-dialog-description",children:r}),n&&g.jsx("div",{className:"arm-dialog-content",children:n}),l.dialogCloseButtonIcon!==!1&&g.jsx($o,{className:"arm-dialog-close","aria-label":"Close",children:l.dialogCloseButtonIcon})]})}),l.globalPortalTo)})});V.displayName="Dialog";V.__docgenInfo={description:"Dialog component. Used to display a full-screen modal dialog to the user.\n- Can be state controlled with `open` and `onOpenChange` props.\n- Can be async by assigning a ref and calling the utility functions (a `useDialog` helper hook is available for this.)\n- Supports dynamic data in async mode, so that a form can be built as a reusable async dialog.",methods:[{name:"addOpenChangeListener",docblock:null,modifiers:[],params:[{name:"listener",optional:!1,type:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}},alias:"OpenChangeListener"}}],returns:null}],displayName:"Dialog",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional title to show at the top of the dialog in an H2 tag"},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional description to show in the body of the dialog in a P tag"},closeButtonIcon:{required:!1,tsType:{name:"union",raw:"JSX.Element | false",elements:[{name:"JSX.Element"},{name:"literal",value:"false"}]},description:"Icon to use as the close button. Send `false` to hide the close button entirely"},open:{required:!1,tsType:{name:"boolean"},description:"Bool denoting whether the dialog is open or closed - for state controlled dialogs"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Function called when the dialog is opened/closed - for state controlled dialogs"},className:{required:!1,tsType:{name:"string"},description:"Optional CSS class for the dialog component"},overlayClassName:{required:!1,tsType:{name:"string"},description:"Optional CSS class for the dialog overlay"},data:{required:!1,tsType:{name:"TData"},description:"Optional Data to pass into the dialog. Data will be returned from the async dialog functions allowing for reusable form based dialogs"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function called when the dialog is closed. Don't use for state control, only for side effects. `onOpenChange` should be used for state control"},testId:{required:!1,tsType:{name:"string"},description:"Optional test ID for the dialog"},delayCloseFor:{required:!1,tsType:{name:"number"},description:"Optional time to delay closing for in MS (allows for CSS animations to complete, animate using the [data-visible] attribute)"}},composes:["Omit"]};const ce=new Error("Dialog function called on an invalid dialog, are you sure you've added the ref to the Armstrong <Dialog> component?"),ae=e=>{const t=a.useRef(null),[n,o]=a.useState(!1);a.useImperativeHandle(e,()=>t.current);const r=a.useCallback(()=>{if(!t.current)throw ce;return t.current.open()},[]),s=a.useCallback(()=>{if(!t.current)throw ce;return t.current.cancel()},[]),c=a.useCallback(()=>{if(!t.current)throw ce;return t.current.close()},[]),i=a.useCallback(()=>{if(!t.current)throw ce;return t.current.ok()},[]);return a.useEffect(()=>{if(t.current)return t.current.addOpenChangeListener(o)},[]),[t,{open:r,cancel:s,close:c,ok:i,isOpen:n}]},Eo={title:"Modals/Dialog",component:V,parameters:{docs:{description:{component:"metadata"}}}},K={args:{title:"Test Dialog",description:"Hello, I am a test dialog",onClose:gt()},render:e=>{const[t,n]=a.useState(!1);return g.jsxs(g.Fragment,{children:[g.jsx(N,{onClick:()=>n(!0),children:"Open dialog"}),g.jsx(V,{...e,open:t,onOpenChange:n})]})}},Y={...K,play:async({canvasElement:e,args:t})=>{const o=B(e).getByText("Open dialog");S.click(o);const r=await ye(document.body,t.title),s=await ye(document.body,t.description);await T(()=>b(r).toBeVisible()),await T(()=>b(s).toBeVisible());const c=await I(document.body,"dialog"),i=await B(c).findByRole("button",{name:"Close"});b(i).toBeVisible(),S.click(i),await T(()=>b(c).not.toBeVisible())}},z={...K,args:{...K.args,title:void 0},play:async({canvasElement:e})=>{const n=B(e).getByText("Open dialog");S.click(n);const o=await I(document.body,"dialog");await T(()=>b(o).toBeVisible()),b(o.getElementsByTagName("h2")).toHaveLength(0)}},G={...K,args:{...K.args,closeButtonIcon:!1},play:async({canvasElement:e})=>{const n=B(e).getByText("Open dialog");S.click(n);const o=await I(document.body,"dialog");await T(()=>b(o).toBeVisible()),b(Lt(o,"button",{name:"Close"})).not.toBeInTheDocument()}},Z={...K,args:{children:g.jsx("div",{children:g.jsx("p",{children:"Some custom content"})}),onClose:gt()},play:async({canvasElement:e})=>{const n=B(e).getByText("Open dialog");S.click(n);const o=await I(document.body,"dialog");await T(()=>b(o).toBeVisible());const r=B(o).getByText("Some custom content");b(r).toBeVisible()}},Q={render:()=>{const[e,t]=a.useState(!1);return g.jsxs("div",{children:[g.jsx(V,{open:e,onOpenChange:t,title:"Simple State Dialog",children:g.jsx("div",{children:"Here is some content"})}),g.jsx(N,{onClick:()=>t(!0),children:"Open simple state dialog"})]})},play:async({canvasElement:e})=>{const n=B(e).getByText("Open simple state dialog");S.click(n);const o=await I(document.body,"dialog");await T(()=>b(o).toBeVisible());const r=B(o).getByText("Here is some content");b(r).toBeVisible();const s=await B(o).findByRole("button",{name:"Close"});b(s).toBeVisible(),S.click(s),await T(()=>b(o).not.toBeVisible())}},J={render:()=>{const[e,{open:t,ok:n,cancel:o,isOpen:r}]=ae(),[s,c]=a.useState("idle"),i=a.useCallback(async()=>{const{action:u}=await t();c(u)},[t,c]);return g.jsxs("div",{children:[g.jsx(V,{ref:e,title:"Are you sure?",description:"Actions have consequences, would you like to continue anyway?",children:g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[g.jsx(N,{"aria-label":"OK",onClick:n,displayStatus:"positive",children:"OK"}),g.jsx(N,{"aria-label":"Cancel",onClick:o,displayStatus:"negative",children:"Cancel"})]})}),g.jsx(N,{onClick:i,children:"Open confirmation dialog"}),g.jsx("div",{"data-testid":"dialog-result",children:s}),g.jsx("div",{"data-testid":"dialog-is-open",children:r?"open":"closed"})]})},play:async({canvasElement:e})=>{const t=B(e).getByTestId("dialog-is-open");b(t).toHaveTextContent("closed");const o=B(e).getByText("Open confirmation dialog");S.click(o);let r=await I(document.body,"dialog");await T(()=>b(r).toBeVisible()),b(t).toHaveTextContent("open");const s=B(e).getByTestId("dialog-result");b(s).toHaveTextContent("idle");const c=B(r).getByRole("button",{name:"OK"});b(c).toBeVisible(),S.click(c),await T(()=>b(r).not.toBeVisible()),await T(()=>b(s).toHaveTextContent("ok")),S.click(o),r=await I(document.body,"dialog"),await T(()=>b(r).toBeVisible());const i=B(r).getByRole("button",{name:"Cancel"});b(i).toBeVisible(),S.click(i),await T(()=>b(r).not.toBeVisible()),await T(()=>b(s).toHaveTextContent("cancel"))}},It=a.forwardRef((e,t)=>{const[n,{cancel:o}]=ae(t);return g.jsxs(V,{ref:n,title:"Reusable dialog",children:[g.jsx("div",{children:"This custom dialog can be used throughout the app just like an Armstrong dialog!"}),g.jsx(N,{onClick:o,style:{marginTop:"16px"},"aria-label":"Cancel",children:"Cancel"})]})});It.displayName="ReusableDialogExample";const ee={render:()=>{const[e,{open:t}]=ae();return g.jsxs("div",{children:[g.jsx(It,{ref:e}),g.jsx(N,{onClick:t,children:"Open reusable dialog"})]})},play:async({canvasElement:e})=>{const n=B(e).getByText("Open reusable dialog");S.click(n);const o=await I(document.body,"dialog");await T(()=>b(o).toBeVisible());const r=await ye(document.body,"Reusable dialog");await T(()=>b(r).toBeVisible());const s=B(o).getByRole("button",{name:"Cancel"});S.click(s),await T(()=>b(o).not.toBeVisible())}},Ft=a.forwardRef((e,t)=>{const[n,{ok:o}]=ae(t),{formProp:r,formState:s}=Ut(),c=a.useCallback(i=>{i.preventDefault(),o()},[o]);return g.jsx(V,{ref:n,title:"Login",data:s,children:g.jsxs("form",{onSubmit:c,children:[g.jsx(ke,{type:"text",bind:r("username").bind(),placeholder:"Username"}),g.jsx(ke,{type:"password",bind:r("password").bind(),placeholder:"Password"}),g.jsx(N,{type:"submit","aria-label":"Login",disabled:!(s!=null&&s.username)||!(s!=null&&s.password),style:{marginTop:"16px"},children:"Login"})]})})});Ft.displayName="LoginDialog";const te={render:()=>{const[e,{open:t}]=ae(),[n,o]=a.useState("idle"),r=a.useCallback(async()=>{const{action:s,data:c}=await t();o(`${s}, username: ${c==null?void 0:c.username}, password: ${c==null?void 0:c.password}`)},[t,o]);return g.jsxs("div",{children:[g.jsx(Ft,{ref:e}),g.jsx(N,{onClick:r,children:"Open login dialog"}),g.jsx("div",{"data-testid":"dialog-result",children:n})]})},play:async({canvasElement:e})=>{const t="test@example.com",n="test-password",r=B(e).getByText("Open login dialog");S.click(r);const s=await I(document.body,"dialog");await T(()=>b(s).toBeVisible());const c=B(e).getByTestId("dialog-result");b(c).toHaveTextContent("idle");const i=B(s).getByPlaceholderText("Username");await S.type(i,t);const u=B(s).getByPlaceholderText("Password");await S.type(u,n);const d=B(s).getByRole("button",{name:"Login"});S.click(d),await T(()=>b(s).not.toBeVisible()),await T(()=>b(c).toHaveTextContent(`ok, username: ${t}, password: ${n}`))}};var qe,Xe,Ye;Y.parameters={...Y.parameters,docs:{...(qe=Y.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=Y.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var ze,Ge,Ze;z.parameters={...z.parameters,docs:{...(ze=z.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ze=(Ge=z.parameters)==null?void 0:Ge.docs)==null?void 0:Ze.source}}};var Qe,Je,et;G.parameters={...G.parameters,docs:{...(Qe=G.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(et=(Je=G.parameters)==null?void 0:Je.docs)==null?void 0:et.source}}};var tt,nt,ot;Z.parameters={...Z.parameters,docs:{...(tt=Z.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(ot=(nt=Z.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var at,rt,st;Q.parameters={...Q.parameters,docs:{...(at=Q.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(st=(rt=Q.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var it,ct,lt;J.parameters={...J.parameters,docs:{...(it=J.parameters)==null?void 0:it.docs,source:{originalSource:`{
  render: () => {
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
        <Dialog ref={dialogRef} title="Are you sure?" description="Actions have consequences, would you like to continue anyway?">
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
    canvasElement
  }) => {
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

    // re-open dialog
    userEvent.click(openButton);
    dialog = await findByRole(document.body, 'dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    // cancel button check
    const cancelButton = within(dialog).getByRole('button', {
      name: 'Cancel'
    });
    expect(cancelButton).toBeVisible();
    userEvent.click(cancelButton);
    await waitFor(() => expect(dialog).not.toBeVisible());
    await waitFor(() => expect(result).toHaveTextContent('cancel'));
  }
}`,...(lt=(ct=J.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var ut,dt,ft;ee.parameters={...ee.parameters,docs:{...(ut=ee.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(ft=(dt=ee.parameters)==null?void 0:dt.docs)==null?void 0:ft.source}}};var pt,mt,vt;te.parameters={...te.parameters,docs:{...(pt=te.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(vt=(mt=te.parameters)==null?void 0:mt.docs)==null?void 0:vt.source}}};const Co=["Default","NoTitle","NoCloseButton","CustomContent","SimpleStateDialog","AsyncDialog","ReusableDialog","ReusableFormDialog"],Lo=Object.freeze(Object.defineProperty({__proto__:null,AsyncDialog:J,CustomContent:Z,Default:Y,NoCloseButton:G,NoTitle:z,ReusableDialog:ee,ReusableFormDialog:te,SimpleStateDialog:Q,__namedExportsOrder:Co,default:Eo},Symbol.toStringTag,{value:"Module"}));export{J as A,V as D,ee as R,Q as S,Y as a,te as b,Lo as d};
