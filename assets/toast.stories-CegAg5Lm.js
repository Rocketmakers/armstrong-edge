import{j as E}from"./jsx-runtime-Cl2eCCBe.js";import{c as Pt,w as L,u as A,b as oe,e as P,d as de,a as q,g as xe}from"./index-Dv9et24K.js";import{r as o,R as k}from"./index-Cqyox1Tj.js";import{_ as S}from"./extends-CF3RwP-h.js";import{r as ue,$ as St}from"./index-QqxU7g3h.js";import{$ as D}from"./index-CcyUcsxs.js";import{u as Rt,A as At}from"./config.context-B61qZkrf.js";import{B as le}from"./button.component-BSUqeTdM.js";function Dt(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Ce(...e){return t=>e.forEach(n=>Dt(n,t))}function K(...e){return o.useCallback(Ce(...e),e)}function lt(e,t=[]){let n=[];function s(a,i){const l=o.createContext(i),d=n.length;n=[...n,i];function c(f){const{scope:x,children:T,...y}=f,m=(x==null?void 0:x[e][d])||l,u=o.useMemo(()=>y,Object.values(y));return o.createElement(m.Provider,{value:u},T)}function p(f,x){const T=(x==null?void 0:x[e][d])||l,y=o.useContext(T);if(y)return y;if(i!==void 0)return i;throw new Error(`\`${f}\` must be used within \`${a}\``)}return c.displayName=a+"Provider",[c,p]}const r=()=>{const a=n.map(i=>o.createContext(i));return function(l){const d=(l==null?void 0:l[e])||a;return o.useMemo(()=>({[`__scope${e}`]:{...l,[e]:d}}),[l,d])}};return r.scopeName=e,[s,Nt(r,...t)]}function Nt(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const s=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(a){const i=s.reduce((l,{useScope:d,scopeName:c})=>{const f=d(a)[`__scope${c}`];return{...l,...f}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}const ye=o.forwardRef((e,t)=>{const{children:n,...s}=e,r=o.Children.toArray(n),a=r.find(_t);if(a){const i=a.props.children,l=r.map(d=>d===a?o.Children.count(i)>1?o.Children.only(null):o.isValidElement(i)?i.props.children:null:d);return o.createElement(Te,S({},s,{ref:t}),o.isValidElement(i)?o.cloneElement(i,void 0,l):null)}return o.createElement(Te,S({},s,{ref:t}),n)});ye.displayName="Slot";const Te=o.forwardRef((e,t)=>{const{children:n,...s}=e;return o.isValidElement(n)?o.cloneElement(n,{...Bt(s,n.props),ref:t?Ce(t,n.ref):n.ref}):o.Children.count(n)>1?o.Children.only(null):null});Te.displayName="SlotClone";const It=({children:e})=>o.createElement(o.Fragment,null,e);function _t(e){return o.isValidElement(e)&&e.type===It}function Bt(e,t){const n={...t};for(const s in t){const r=e[s],a=t[s];/^on[A-Z]/.test(s)?r&&a?n[s]=(...l)=>{a(...l),r(...l)}:r&&(n[s]=r):s==="style"?n[s]={...r,...a}:s==="className"&&(n[s]=[r,a].filter(Boolean).join(" "))}return{...e,...n}}function Ot(e){const t=e+"CollectionProvider",[n,s]=lt(t),[r,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),i=T=>{const{scope:y,children:m}=T,u=k.useRef(null),$=k.useRef(new Map).current;return k.createElement(r,{scope:y,itemMap:$,collectionRef:u},m)},l=e+"CollectionSlot",d=k.forwardRef((T,y)=>{const{scope:m,children:u}=T,$=a(l,m),b=K(y,$.collectionRef);return k.createElement(ye,{ref:b},u)}),c=e+"CollectionItemSlot",p="data-radix-collection-item",f=k.forwardRef((T,y)=>{const{scope:m,children:u,...$}=T,b=k.useRef(null),g=K(y,b),h=a(c,m);return k.useEffect(()=>(h.itemMap.set(b,{ref:b,...$}),()=>void h.itemMap.delete(b))),k.createElement(ye,{[p]:"",ref:g},u)});function x(T){const y=a(e+"CollectionConsumer",T);return k.useCallback(()=>{const u=y.collectionRef.current;if(!u)return[];const $=Array.from(u.querySelectorAll(`[${p}]`));return Array.from(y.itemMap.values()).sort((h,C)=>$.indexOf(h.ref.current)-$.indexOf(C.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:i,Slot:d,ItemSlot:f},x,s]}const dt=o.forwardRef((e,t)=>{const{children:n,...s}=e,r=o.Children.toArray(n),a=r.find(Lt);if(a){const i=a.props.children,l=r.map(d=>d===a?o.Children.count(i)>1?o.Children.only(null):o.isValidElement(i)?i.props.children:null:d);return o.createElement(Ee,S({},s,{ref:t}),o.isValidElement(i)?o.cloneElement(i,void 0,l):null)}return o.createElement(Ee,S({},s,{ref:t}),n)});dt.displayName="Slot";const Ee=o.forwardRef((e,t)=>{const{children:n,...s}=e;return o.isValidElement(n)?o.cloneElement(n,{...Mt(s,n.props),ref:t?Ce(t,n.ref):n.ref}):o.Children.count(n)>1?o.Children.only(null):null});Ee.displayName="SlotClone";const kt=({children:e})=>o.createElement(o.Fragment,null,e);function Lt(e){return o.isValidElement(e)&&e.type===kt}function Mt(e,t){const n={...t};for(const s in t){const r=e[s],a=t[s];/^on[A-Z]/.test(s)?r&&a?n[s]=(...l)=>{a(...l),r(...l)}:r&&(n[s]=r):s==="style"?n[s]={...r,...a}:s==="className"&&(n[s]=[r,a].filter(Boolean).join(" "))}return{...e,...n}}const Ft=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],M=Ft.reduce((e,t)=>{const n=o.forwardRef((s,r)=>{const{asChild:a,...i}=s,l=a?dt:t;return o.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.createElement(l,S({},i,{ref:r}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function ut(e,t){e&&ue.flushSync(()=>e.dispatchEvent(t))}function F(e){const t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...n)=>{var s;return(s=t.current)===null||s===void 0?void 0:s.call(t,...n)},[])}function Vt(e,t=globalThis==null?void 0:globalThis.document){const n=F(e);o.useEffect(()=>{const s=r=>{r.key==="Escape"&&n(r)};return t.addEventListener("keydown",s),()=>t.removeEventListener("keydown",s)},[n,t])}const $e="dismissableLayer.update",jt="dismissableLayer.pointerDownOutside",Kt="dismissableLayer.focusOutside";let De;const ft=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ht=o.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:s=!1,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:i,onInteractOutside:l,onDismiss:d,...c}=e,p=o.useContext(ft),[f,x]=o.useState(null),T=(n=f==null?void 0:f.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,y]=o.useState({}),m=K(t,w=>x(w)),u=Array.from(p.layers),[$]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),b=u.indexOf($),g=f?u.indexOf(f):-1,h=p.layersWithOutsidePointerEventsDisabled.size>0,C=g>=b,R=Wt(w=>{const I=w.target,U=[...p.branches].some(B=>B.contains(I));!C||U||(a==null||a(w),l==null||l(w),w.defaultPrevented||d==null||d())},T),N=qt(w=>{const I=w.target;[...p.branches].some(B=>B.contains(I))||(i==null||i(w),l==null||l(w),w.defaultPrevented||d==null||d())},T);return Vt(w=>{g===p.layers.size-1&&(r==null||r(w),!w.defaultPrevented&&d&&(w.preventDefault(),d()))},T),o.useEffect(()=>{if(f)return s&&(p.layersWithOutsidePointerEventsDisabled.size===0&&(De=T.body.style.pointerEvents,T.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(f)),p.layers.add(f),Ne(),()=>{s&&p.layersWithOutsidePointerEventsDisabled.size===1&&(T.body.style.pointerEvents=De)}},[f,T,s,p]),o.useEffect(()=>()=>{f&&(p.layers.delete(f),p.layersWithOutsidePointerEventsDisabled.delete(f),Ne())},[f,p]),o.useEffect(()=>{const w=()=>y({});return document.addEventListener($e,w),()=>document.removeEventListener($e,w)},[]),o.createElement(M.div,S({},c,{ref:m,style:{pointerEvents:h?C?"auto":"none":void 0,...e.style},onFocusCapture:D(e.onFocusCapture,N.onFocusCapture),onBlurCapture:D(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:D(e.onPointerDownCapture,R.onPointerDownCapture)}))}),Ut=o.forwardRef((e,t)=>{const n=o.useContext(ft),s=o.useRef(null),r=K(t,s);return o.useEffect(()=>{const a=s.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),o.createElement(M.div,S({},e,{ref:r}))});function Wt(e,t=globalThis==null?void 0:globalThis.document){const n=F(e),s=o.useRef(!1),r=o.useRef(()=>{});return o.useEffect(()=>{const a=l=>{if(l.target&&!s.current){let c=function(){pt(jt,n,d,{discrete:!0})};const d={originalEvent:l};l.pointerType==="touch"?(t.removeEventListener("click",r.current),r.current=c,t.addEventListener("click",r.current,{once:!0})):c()}s.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",a),t.removeEventListener("click",r.current)}},[t,n]),{onPointerDownCapture:()=>s.current=!0}}function qt(e,t=globalThis==null?void 0:globalThis.document){const n=F(e),s=o.useRef(!1);return o.useEffect(()=>{const r=a=>{a.target&&!s.current&&pt(Kt,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,n]),{onFocusCapture:()=>s.current=!0,onBlurCapture:()=>s.current=!1}}function Ne(){const e=new CustomEvent($e);document.dispatchEvent(e)}function pt(e,t,n,{discrete:s}){const r=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),s?ut(r,a):r.dispatchEvent(a)}const Xt=Ht,zt=Ut,Yt=o.forwardRef((e,t)=>{var n;const{container:s=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...r}=e;return s?St.createPortal(o.createElement(M.div,S({},r,{ref:t})),s):null}),he=globalThis!=null&&globalThis.document?o.useLayoutEffect:()=>{};function Jt(e,t){return o.useReducer((n,s)=>{const r=t[n][s];return r??n},e)}const mt=e=>{const{present:t,children:n}=e,s=Zt(t),r=typeof n=="function"?n({present:s.isPresent}):o.Children.only(n),a=K(s.ref,r.ref);return typeof n=="function"||s.isPresent?o.cloneElement(r,{ref:a}):null};mt.displayName="Presence";function Zt(e){const[t,n]=o.useState(),s=o.useRef({}),r=o.useRef(e),a=o.useRef("none"),i=e?"mounted":"unmounted",[l,d]=Jt(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.useEffect(()=>{const c=ie(s.current);a.current=l==="mounted"?c:"none"},[l]),he(()=>{const c=s.current,p=r.current;if(p!==e){const x=a.current,T=ie(c);e?d("MOUNT"):T==="none"||(c==null?void 0:c.display)==="none"?d("UNMOUNT"):d(p&&x!==T?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,d]),he(()=>{if(t){const c=f=>{const T=ie(s.current).includes(f.animationName);f.target===t&&T&&ue.flushSync(()=>d("ANIMATION_END"))},p=f=>{f.target===t&&(a.current=ie(s.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",c),t.addEventListener("animationend",c),()=>{t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",c),t.removeEventListener("animationend",c)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:o.useCallback(c=>{c&&(s.current=getComputedStyle(c)),n(c)},[])}}function ie(e){return(e==null?void 0:e.animationName)||"none"}function Gt({prop:e,defaultProp:t,onChange:n=()=>{}}){const[s,r]=Qt({defaultProp:t,onChange:n}),a=e!==void 0,i=a?e:s,l=F(n),d=o.useCallback(c=>{if(a){const f=typeof c=="function"?c(e):c;f!==e&&l(f)}else r(c)},[a,e,r,l]);return[i,d]}function Qt({defaultProp:e,onChange:t}){const n=o.useState(e),[s]=n,r=o.useRef(s),a=F(t);return o.useEffect(()=>{r.current!==s&&(a(s),r.current=s)},[s,r,a]),n}const bt=o.forwardRef((e,t)=>o.createElement(M.span,S({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),vt="ToastProvider",[Pe,en,tn]=Ot("Toast"),[yt,Kn]=lt("Toast",[tn]),[nn,fe]=yt(vt),Tt=e=>{const{__scopeToast:t,label:n="Notification",duration:s=5e3,swipeDirection:r="right",swipeThreshold:a=50,children:i}=e,[l,d]=o.useState(null),[c,p]=o.useState(0),f=o.useRef(!1),x=o.useRef(!1);return o.createElement(Pe.Provider,{scope:t},o.createElement(nn,{scope:t,label:n,duration:s,swipeDirection:r,swipeThreshold:a,toastCount:c,viewport:l,onViewportChange:d,onToastAdd:o.useCallback(()=>p(T=>T+1),[]),onToastRemove:o.useCallback(()=>p(T=>T-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:x},i))};Tt.propTypes={label(e){if(e.label&&typeof e.label=="string"&&!e.label.trim()){const t=`Invalid prop \`label\` supplied to \`${vt}\`. Expected non-empty \`string\`.`;return new Error(t)}return null}};const on="ToastViewport",sn=["F8"],we="toast.viewportPause",ge="toast.viewportResume",rn=o.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:s=sn,label:r="Notifications ({hotkey})",...a}=e,i=fe(on,n),l=en(n),d=o.useRef(null),c=o.useRef(null),p=o.useRef(null),f=o.useRef(null),x=K(t,f,i.onViewportChange),T=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),y=i.toastCount>0;o.useEffect(()=>{const u=$=>{var b;s.every(h=>$[h]||$.code===h)&&((b=f.current)===null||b===void 0||b.focus())};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[s]),o.useEffect(()=>{const u=d.current,$=f.current;if(y&&u&&$){const b=()=>{if(!i.isClosePausedRef.current){const R=new CustomEvent(we);$.dispatchEvent(R),i.isClosePausedRef.current=!0}},g=()=>{if(i.isClosePausedRef.current){const R=new CustomEvent(ge);$.dispatchEvent(R),i.isClosePausedRef.current=!1}},h=R=>{!u.contains(R.relatedTarget)&&g()},C=()=>{u.contains(document.activeElement)||g()};return u.addEventListener("focusin",b),u.addEventListener("focusout",h),u.addEventListener("pointermove",b),u.addEventListener("pointerleave",C),window.addEventListener("blur",b),window.addEventListener("focus",g),()=>{u.removeEventListener("focusin",b),u.removeEventListener("focusout",h),u.removeEventListener("pointermove",b),u.removeEventListener("pointerleave",C),window.removeEventListener("blur",b),window.removeEventListener("focus",g)}}},[y,i.isClosePausedRef]);const m=o.useCallback(({tabbingDirection:u})=>{const b=l().map(g=>{const h=g.ref.current,C=[h,...gn(h)];return u==="forwards"?C:C.reverse()});return(u==="forwards"?b.reverse():b).flat()},[l]);return o.useEffect(()=>{const u=f.current;if(u){const $=b=>{const g=b.altKey||b.ctrlKey||b.metaKey;if(b.key==="Tab"&&!g){const w=document.activeElement,I=b.shiftKey;if(b.target===u&&I){var C;(C=c.current)===null||C===void 0||C.focus();return}const j=m({tabbingDirection:I?"backwards":"forwards"}),se=j.findIndex(v=>v===w);if(ve(j.slice(se+1)))b.preventDefault();else{var R,N;I?(R=c.current)===null||R===void 0||R.focus():(N=p.current)===null||N===void 0||N.focus()}}};return u.addEventListener("keydown",$),()=>u.removeEventListener("keydown",$)}},[l,m]),o.createElement(zt,{ref:d,role:"region","aria-label":r.replace("{hotkey}",T),tabIndex:-1,style:{pointerEvents:y?void 0:"none"}},y&&o.createElement(Ie,{ref:c,onFocusFromOutsideViewport:()=>{const u=m({tabbingDirection:"forwards"});ve(u)}}),o.createElement(Pe.Slot,{scope:n},o.createElement(M.ol,S({tabIndex:-1},a,{ref:x}))),y&&o.createElement(Ie,{ref:p,onFocusFromOutsideViewport:()=>{const u=m({tabbingDirection:"backwards"});ve(u)}}))}),an="ToastFocusProxy",Ie=o.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:s,...r}=e,a=fe(an,n);return o.createElement(bt,S({"aria-hidden":!0,tabIndex:0},r,{ref:t,style:{position:"fixed"},onFocus:i=>{var l;const d=i.relatedTarget;!((l=a.viewport)!==null&&l!==void 0&&l.contains(d))&&s()}}))}),pe="Toast",cn="toast.swipeStart",ln="toast.swipeMove",dn="toast.swipeCancel",un="toast.swipeEnd",fn=o.forwardRef((e,t)=>{const{forceMount:n,open:s,defaultOpen:r,onOpenChange:a,...i}=e,[l=!0,d]=Gt({prop:s,defaultProp:r,onChange:a});return o.createElement(mt,{present:n||l},o.createElement(Et,S({open:l},i,{ref:t,onClose:()=>d(!1),onPause:F(e.onPause),onResume:F(e.onResume),onSwipeStart:D(e.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:D(e.onSwipeMove,c=>{const{x:p,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${p}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${f}px`)}),onSwipeCancel:D(e.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:D(e.onSwipeEnd,c=>{const{x:p,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${p}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${f}px`),d(!1)})})))}),[pn,mn]=yt(pe,{onClose(){}}),Et=o.forwardRef((e,t)=>{const{__scopeToast:n,type:s="foreground",duration:r,open:a,onClose:i,onEscapeKeyDown:l,onPause:d,onResume:c,onSwipeStart:p,onSwipeMove:f,onSwipeCancel:x,onSwipeEnd:T,...y}=e,m=fe(pe,n),[u,$]=o.useState(null),b=K(t,v=>$(v)),g=o.useRef(null),h=o.useRef(null),C=r||m.duration,R=o.useRef(0),N=o.useRef(C),w=o.useRef(0),{onToastAdd:I,onToastRemove:U}=m,B=F(()=>{var v;(u==null?void 0:u.contains(document.activeElement))&&((v=m.viewport)===null||v===void 0||v.focus()),i()}),j=o.useCallback(v=>{!v||v===1/0||(window.clearTimeout(w.current),R.current=new Date().getTime(),w.current=window.setTimeout(B,v))},[B]);o.useEffect(()=>{const v=m.viewport;if(v){const O=()=>{j(N.current),c==null||c()},V=()=>{const X=new Date().getTime()-R.current;N.current=N.current-X,window.clearTimeout(w.current),d==null||d()};return v.addEventListener(we,V),v.addEventListener(ge,O),()=>{v.removeEventListener(we,V),v.removeEventListener(ge,O)}}},[m.viewport,C,d,c,j]),o.useEffect(()=>{a&&!m.isClosePausedRef.current&&j(C)},[a,C,m.isClosePausedRef,j]),o.useEffect(()=>(I(),()=>U()),[I,U]);const se=o.useMemo(()=>u?wt(u):null,[u]);return m.viewport?o.createElement(o.Fragment,null,se&&o.createElement(bn,{__scopeToast:n,role:"status","aria-live":s==="foreground"?"assertive":"polite","aria-atomic":!0},se),o.createElement(pn,{scope:n,onClose:B},ue.createPortal(o.createElement(Pe.ItemSlot,{scope:n},o.createElement(Xt,{asChild:!0,onEscapeKeyDown:D(l,()=>{m.isFocusedToastEscapeKeyDownRef.current||B(),m.isFocusedToastEscapeKeyDownRef.current=!1})},o.createElement(M.li,S({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":a?"open":"closed","data-swipe-direction":m.swipeDirection},y,{ref:b,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:D(e.onKeyDown,v=>{v.key==="Escape"&&(l==null||l(v.nativeEvent),v.nativeEvent.defaultPrevented||(m.isFocusedToastEscapeKeyDownRef.current=!0,B()))}),onPointerDown:D(e.onPointerDown,v=>{v.button===0&&(g.current={x:v.clientX,y:v.clientY})}),onPointerMove:D(e.onPointerMove,v=>{if(!g.current)return;const O=v.clientX-g.current.x,V=v.clientY-g.current.y,X=!!h.current,z=["left","right"].includes(m.swipeDirection),re=["left","up"].includes(m.swipeDirection)?Math.min:Math.max,xt=z?re(0,O):0,Ct=z?0:re(0,V),be=v.pointerType==="touch"?10:2,ae={x:xt,y:Ct},Ae={originalEvent:v,delta:ae};X?(h.current=ae,ce(ln,f,Ae,{discrete:!1})):_e(ae,m.swipeDirection,be)?(h.current=ae,ce(cn,p,Ae,{discrete:!1}),v.target.setPointerCapture(v.pointerId)):(Math.abs(O)>be||Math.abs(V)>be)&&(g.current=null)}),onPointerUp:D(e.onPointerUp,v=>{const O=h.current,V=v.target;if(V.hasPointerCapture(v.pointerId)&&V.releasePointerCapture(v.pointerId),h.current=null,g.current=null,O){const X=v.currentTarget,z={originalEvent:v,delta:O};_e(O,m.swipeDirection,m.swipeThreshold)?ce(un,T,z,{discrete:!0}):ce(dn,x,z,{discrete:!0}),X.addEventListener("click",re=>re.preventDefault(),{once:!0})}})})))),m.viewport))):null});Et.propTypes={type(e){if(e.type&&!["foreground","background"].includes(e.type)){const t=`Invalid prop \`type\` supplied to \`${pe}\`. Expected \`foreground | background\`.`;return new Error(t)}return null}};const bn=e=>{const{__scopeToast:t,children:n,...s}=e,r=fe(pe,t),[a,i]=o.useState(!1),[l,d]=o.useState(!1);return hn(()=>i(!0)),o.useEffect(()=>{const c=window.setTimeout(()=>d(!0),1e3);return()=>window.clearTimeout(c)},[]),l?null:o.createElement(Yt,{asChild:!0},o.createElement(bt,s,a&&o.createElement(o.Fragment,null,r.label," ",n)))},vn=o.forwardRef((e,t)=>{const{__scopeToast:n,...s}=e;return o.createElement(M.div,S({},s,{ref:t}))}),yn=o.forwardRef((e,t)=>{const{__scopeToast:n,...s}=e;return o.createElement(M.div,S({},s,{ref:t}))}),Tn="ToastAction",En=o.forwardRef((e,t)=>{const{altText:n,...s}=e;return n?o.createElement(ht,{altText:n,asChild:!0},o.createElement($t,S({},s,{ref:t}))):null});En.propTypes={altText(e){return e.altText?null:new Error(`Missing prop \`altText\` expected on \`${Tn}\``)}};const $n="ToastClose",$t=o.forwardRef((e,t)=>{const{__scopeToast:n,...s}=e,r=mn($n,n);return o.createElement(ht,{asChild:!0},o.createElement(M.button,S({type:"button"},s,{ref:t,onClick:D(e.onClick,r.onClose)})))}),ht=o.forwardRef((e,t)=>{const{__scopeToast:n,altText:s,...r}=e;return o.createElement(M.div,S({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":s||void 0},r,{ref:t}))});function wt(e){const t=[];return Array.from(e.childNodes).forEach(s=>{if(s.nodeType===s.TEXT_NODE&&s.textContent&&t.push(s.textContent),wn(s)){const r=s.ariaHidden||s.hidden||s.style.display==="none",a=s.dataset.radixToastAnnounceExclude==="";if(!r)if(a){const i=s.dataset.radixToastAnnounceAlt;i&&t.push(i)}else t.push(...wt(s))}}),t}function ce(e,t,n,{discrete:s}){const r=n.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),s?ut(r,a):r.dispatchEvent(a)}const _e=(e,t,n=0)=>{const s=Math.abs(e.x),r=Math.abs(e.y),a=s>r;return t==="left"||t==="right"?a&&s>n:!a&&r>n};function hn(e=()=>{}){const t=F(e);he(()=>{let n=0,s=0;return n=window.requestAnimationFrame(()=>s=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(s)}},[t])}function wn(e){return e.nodeType===e.ELEMENT_NODE}function gn(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const r=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||r?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ve(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}const xn=Tt,Cn=rn,Pn=fn,Sn=vn,Rn=yn,An=$t,me=({title:e,description:t,content:n,duration:s,position:r,closeButtonIcon:a,hideClose:i,className:l,testId:d,onExit:c,additionalProps:p={}})=>E.jsxs(Pn,{className:Pt("arm-toast",l),duration:s,"data-position":r,"data-testid":d,"aria-label":"Notification",onOpenChange:f=>{!f&&c&&c()},...p,children:[e&&E.jsx(Sn,{className:"arm-toast-title",children:e}),t&&E.jsx(Rn,{className:"arm-toast-description",children:t}),a!==!1&&!i&&E.jsx(An,{className:"arm-toast-close","aria-label":"Close",children:a}),n]});me.displayName="Toast";me.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{title:{required:!1,tsType:{name:"string"},description:"optional title for the toast popup (will be displayed above description & content)"},description:{required:!1,tsType:{name:"string"},description:"optional text content for the toast popup (will be displayed below title & above content)"},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"optional JSX content for the toast popup (will be displayed below title & description)"},duration:{required:!1,tsType:{name:"number"},description:"how long to show the toast in ms for (will default to global setting or failing that 5000)"},hideClose:{required:!1,tsType:{name:"boolean"},description:"hide the close button entirely?"},className:{required:!1,tsType:{name:"string"},description:"optional class name to add to the toast element"},testId:{required:!1,tsType:{name:"string"},description:"optional test id to add to the toast element"},additionalProps:{required:!1,tsType:{name:"ReactRefAttributes",raw:"React.RefAttributes<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},description:"optional additional props to spread onto the toast component",defaultValue:{value:"{}",computed:!1}},position:{required:!0,tsType:{name:"union",raw:"'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'",elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"}]},description:'where to position the toast, defaults to "bottom-right"'},closeButtonIcon:{required:!0,tsType:{name:"union",raw:"JSX.Element | false",elements:[{name:"JSX.Element"},{name:"literal",value:"false"}]},description:"the icon to use for the dialog close button"},onExit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"called when the toast has left the screen"}}};const Dn={addToast:()=>{throw new Error("Unable to dispatch toast, are you sure you've added either the <ArmstrongProvider> or <ToastProvider>?")},dismissToastByKey:()=>{throw new Error("Unable to dismiss toast, are you sure you've added either the <ArmstrongProvider> or <ToastProvider>?")}},Se=o.createContext(Dn),Re=({children:e,duration:t,position:n,closeButtonIcon:s,displayMode:r,ignorePredicate:a})=>{const i=Rt({toastDuration:t,toastPosition:n,toastCloseButtonIcon:s,toastDisplayMode:r,toastIgnorePredicate:a}),l=o.useRef(1),[d,c]=o.useState([]),p=i.toastPosition==="bottom-left"||i.toastPosition==="top-left"?"left":"right",f=o.useCallback(y=>{var $;if(($=i.toastIgnorePredicate)!=null&&$.call(i,d.filter(b=>!b.exited).map(({key:b,exited:g,...h})=>h),y))return;const m=`toast-${l.current}`;l.current+=1;const u={...y,key:m,exited:!1};return c(b=>i.toastDisplayMode==="add"?[...b,u]:[u]),m},[i,d]),x=o.useCallback(y=>{c(m=>m.map(u=>u.key===y?{...u,exited:!0}:u))},[]),T=o.useCallback(y=>{c(m=>m.filter(u=>u.key!==y))},[]);return E.jsx(Se.Provider,{value:{addToast:f,dismissToastByKey:T},children:E.jsxs(xn,{swipeDirection:p,duration:i.toastDuration,children:[e,d.map(({key:y,...m})=>E.jsx(me,{duration:i.toastDuration,position:i.toastPosition,closeButtonIcon:i.toastCloseButtonIcon,onExit:()=>x(y),...m},y)),i.globalPortalTo&&ue.createPortal(E.jsx(Cn,{className:"arm-toast-viewport","data-position":i.toastPosition}),i.globalPortalTo)]})})};Re.displayName="ToastProvider";Re.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{duration:{required:!1,tsType:{name:"number"},description:"how long ot show toast messages for in ms, defaults to 5000"},position:{required:!1,tsType:{name:"union",raw:"'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'",elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"}]},description:'where to position the toast, defaults to "bottom-right"'},closeButtonIcon:{required:!1,tsType:{name:"union",raw:"JSX.Element | false",elements:[{name:"JSX.Element"},{name:"literal",value:"false"}]},description:"the icon to use for the dialog close button"},displayMode:{required:!1,tsType:{name:"union",raw:"'add' | 'replace'",elements:[{name:"literal",value:"'add'"},{name:"literal",value:"'replace'"}]},description:"whether to add toasts to a stack or display one at a time"},ignorePredicate:{required:!1,tsType:{name:"signature",type:"function",raw:"(existingToasts: IToast[], incomingToast: IToast) => boolean",signature:{arguments:[{type:{name:"Array",elements:[{name:"IToast"}],raw:"IToast[]"},name:"existingToasts"},{type:{name:"IToast"},name:"incomingToast"}],return:{name:"boolean"}}},description:"ignore toasts if an existing toast matches this predicate"}}};const gt=()=>{const{addToast:e}=o.useContext(Se);return e},Nn=()=>{const{dismissToastByKey:e}=o.useContext(Se);return e},H=({children:e,config:t={}})=>E.jsx(At,{...t,children:E.jsx(Re,{children:e})});H.__docgenInfo={description:"",methods:[],displayName:"ArmstrongProvider",props:{config:{required:!1,tsType:{name:"IArmstrongConfig"},description:"A dictionary of optional global config, overrides the system defaults",defaultValue:{value:"{}",computed:!1}}}};const In={title:"Modals/Toast",component:me,parameters:{docs:{description:{component:"metadata"}}}},_={args:{title:"Here is a toast!",description:"Here is the description for my toast"},decorators:[e=>E.jsx(H,{children:E.jsx(e,{})})],render:e=>{const t=gt();return E.jsx(le,{onClick:()=>t(e),children:"Send a toast"})}},W={..._,play:async({canvasElement:e,args:t})=>{const n=L(e).getByText("Send a toast");A.click(n);const s=await oe(document.body,t.title??""),r=await oe(document.body,t.description??"");P(s).toBeVisible(),P(r).toBeVisible();const a=await de(document.body,"button",{name:"Close"});await q(()=>A.click(a)),await q(()=>Promise.all([P(s).not.toBeVisible(),P(r).not.toBeVisible()])),await A.click(n),await A.click(n);const i=await xe(document.body,t.title??"");await q(()=>P(i).toHaveLength(2))}},Y={..._,args:{..._.args,duration:100},play:async({canvasElement:e,args:t})=>{const n=L(e).getByText("Send a toast");A.click(n);const s=await oe(document.body,t.title??"");P(s).toBeVisible(),await q(()=>P(s).not.toBeVisible(),{timeout:400})}},J={..._,decorators:[e=>E.jsx(H,{config:{toastPosition:"top-left"},children:E.jsx(e,{})})],play:async({canvasElement:e})=>{const t=L(e).getByText("Send a toast");A.click(t);const n=await de(document.body,"status",{name:"Notification"});P(n).toBeVisible(),P(n).toHaveAttribute("data-position","top-left")}},Z={..._,decorators:[e=>E.jsx(H,{config:{toastPosition:"top-right"},children:E.jsx(e,{})})],play:async({canvasElement:e})=>{const t=L(e).getByText("Send a toast");A.click(t);const n=await de(document.body,"status",{name:"Notification"});P(n).toBeVisible(),P(n).toHaveAttribute("data-position","top-right")}},G={..._,decorators:[e=>E.jsx(H,{config:{toastPosition:"bottom-left"},children:E.jsx(e,{})})],play:async({canvasElement:e})=>{const t=L(e).getByText("Send a toast");A.click(t);const n=await de(document.body,"status",{name:"Notification"});P(n).toBeVisible(),P(n).toHaveAttribute("data-position","bottom-left")}},Q={..._,args:{..._.args,content:E.jsx(le,{children:"Custom button"})},play:async({canvasElement:e})=>{const t=L(e).getByText("Send a toast");A.click(t);const n=await oe(document.body,"Custom button");P(n).toBeVisible()}},ee={..._,decorators:[e=>E.jsx(H,{config:{toastIgnorePredicate:(t,n)=>t.some(s=>s.title===n.title&&s.description===n.description)},children:E.jsx(e,{})})],play:async({canvasElement:e,args:t})=>{const n=L(e).getByText("Send a toast");await A.click(n),await A.click(n);const s=await xe(document.body,t.title??"");P(s.length).toBe(1)}},te={..._,decorators:[e=>E.jsx(H,{config:{toastDisplayMode:"replace"},children:E.jsx(e,{})})],play:async({canvasElement:e,args:t})=>{const n=L(e).getByText("Send a toast");await A.click(n),await A.click(n);const s=await xe(document.body,t.title??"");P(s.length).toBe(1)}},ne={..._,render:e=>{const t=o.useRef(),[n,s]=o.useReducer(i=>i+1,1),r=gt(),a=Nn();return E.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"flex-start"},children:[E.jsx(le,{onClick:()=>{t.current=r({...e,content:E.jsxs("span",{children:["Toast #",n]})}),s()},children:"Send a toast"}),E.jsx(le,{onClick:()=>{t.current&&(a(t.current),t.current=void 0)},children:"Dismiss the last toast"})]})},play:async({canvasElement:e,args:t})=>{const n=L(e).getByText("Send a toast");A.click(n);const s=await oe(document.body,t.title??"");P(s).toBeVisible();const r=L(e).getByText("Dismiss the last toast");await q(()=>A.click(r)),await q(()=>P(s).not.toBeVisible())}};var Be,Oe,ke,Le,Me;W.parameters={...W.parameters,docs:{...(Be=W.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  ...Template,
  play: async ({
    canvasElement,
    args
  }) => {
    // launch toast
    const button = within(canvasElement).getByText('Send a toast');
    userEvent.click(button);

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
}`,...(ke=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:ke.source},description:{story:"stories",...(Me=(Le=W.parameters)==null?void 0:Le.docs)==null?void 0:Me.description}}};var Fe,Ve,je;Y.parameters={...Y.parameters,docs:{...(Fe=Y.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
    userEvent.click(button);
    const title = await findByText(document.body, args.title ?? '');
    expect(title).toBeVisible();
    // check auto-dismiss after custom dismiss time of 100ms + 300ms for animation
    await waitFor(() => expect(title).not.toBeVisible(), {
      timeout: 400
    });
  }
}`,...(je=(Ve=Y.parameters)==null?void 0:Ve.docs)==null?void 0:je.source}}};var Ke,He,Ue;J.parameters={...J.parameters,docs:{...(Ke=J.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
    userEvent.click(button);
    const toast = await findByRole(document.body, 'status', {
      name: 'Notification'
    });
    expect(toast).toBeVisible();
    expect(toast).toHaveAttribute('data-position', 'top-left');
  }
}`,...(Ue=(He=J.parameters)==null?void 0:He.docs)==null?void 0:Ue.source}}};var We,qe,Xe;Z.parameters={...Z.parameters,docs:{...(We=Z.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
    userEvent.click(button);
    const toast = await findByRole(document.body, 'status', {
      name: 'Notification'
    });
    expect(toast).toBeVisible();
    expect(toast).toHaveAttribute('data-position', 'top-right');
  }
}`,...(Xe=(qe=Z.parameters)==null?void 0:qe.docs)==null?void 0:Xe.source}}};var ze,Ye,Je;G.parameters={...G.parameters,docs:{...(ze=G.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
    userEvent.click(button);
    const toast = await findByRole(document.body, 'status', {
      name: 'Notification'
    });
    expect(toast).toBeVisible();
    expect(toast).toHaveAttribute('data-position', 'bottom-left');
  }
}`,...(Je=(Ye=G.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var Ze,Ge,Qe;Q.parameters={...Q.parameters,docs:{...(Ze=Q.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    content: <Button>Custom button</Button>
  },
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByText('Send a toast');
    userEvent.click(button);
    const customButton = await findByText(document.body, 'Custom button');
    expect(customButton).toBeVisible();
  }
}`,...(Qe=(Ge=Q.parameters)==null?void 0:Ge.docs)==null?void 0:Qe.source}}};var et,tt,nt;ee.parameters={...ee.parameters,docs:{...(et=ee.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(nt=(tt=ee.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var ot,st,rt;te.parameters={...te.parameters,docs:{...(ot=te.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(rt=(st=te.parameters)==null?void 0:st.docs)==null?void 0:rt.source}}};var at,it,ct;ne.parameters={...ne.parameters,docs:{...(at=ne.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
    userEvent.click(button);
    const title = await findByText(document.body, args.title ?? '');
    expect(title).toBeVisible();

    // check close
    const close = within(canvasElement).getByText('Dismiss the last toast');
    await waitFor(() => userEvent.click(close));
    await waitFor(() => expect(title).not.toBeVisible());
  }
}`,...(ct=(it=ne.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};const _n=["Default","CustomDuration","TopLeft","TopRight","BottomLeft","CustomContent","IgnoreDuplicateToast","ReplaceDisplayMode","DismissToast"],Hn=Object.freeze(Object.defineProperty({__proto__:null,BottomLeft:G,CustomContent:Q,CustomDuration:Y,Default:W,DismissToast:ne,IgnoreDuplicateToast:ee,ReplaceDisplayMode:te,TopLeft:J,TopRight:Z,__namedExportsOrder:_n,default:In},Symbol.toStringTag,{value:"Module"}));export{W as D,me as T,Hn as t};
