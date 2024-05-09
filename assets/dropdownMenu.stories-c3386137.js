import{a as ne,F as Dt,j as E}from"./jsx-runtime-eae7a151.js";import{j as Ot,w as H,u as oe,a as me,e as _}from"./index-0aa9db1d.js";import{r as o}from"./index-c4905b50.js";import{i as Pt,e as _t}from"./config.context-108849f1.js";import{_ as x}from"./uniq-d447bef6.js";import{b as I,a as J,c as Me,$ as Tt}from"./index-10b0f2c6.js";import{$ as G,a as Y,b as tt,c as Mt,e as Rt}from"./index-38f95ea5.js";import{$ as De}from"./index-97ba0010.js";import{$ as St}from"./index-f92d1054.js";import{$ as Bt}from"./index-5277ee67.js";import{$ as At}from"./index-e5e547b3.js";import{h as Ft,a as kt,$ as Nt}from"./index-f7d33137.js";import{u as Lt,a as Kt}from"./floating-ui.react-dom.esm-469a2873.js";import{$ as Ut}from"./index-20dac804.js";import{B as Ht,L as Vt,O as Wt,a as Gt,A as jt,C as zt,E as Xt}from"./floating-ui.dom.browser.min-04af7d1d.js";import{$ as Yt}from"./index-bbcfa8f0.js";import{$ as nt,a as Zt,b as qt}from"./index-8417d5e9.js";import{$ as Re}from"./index-1927a3af.js";import{c as Se}from"./classNames-9011e307.js";import{B as re}from"./button.component-4890590c.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./index-07d1f67e.js";import"./spinner.component-b77c4686.js";const ye="dismissableLayer.update",Jt="dismissableLayer.pointerDownOutside",Qt="dismissableLayer.focusOutside";let Be;const en=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),tn=o.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:a,onPointerDownOutside:s,onFocusOutside:u,onInteractOutside:c,onDismiss:l,...p}=e,d=o.useContext(en),[i,v]=o.useState(null),$=(n=i==null?void 0:i.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,b]=o.useState({}),m=G(t,y=>v(y)),D=Array.from(d.layers),[h]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),O=D.indexOf(h),g=i?D.indexOf(i):-1,w=d.layersWithOutsidePointerEventsDisabled.size>0,A=g>=O,q=nn(y=>{const M=y.target,F=[...d.branches].some(j=>j.contains(M));!A||F||(s==null||s(y),c==null||c(y),y.defaultPrevented||l==null||l())},$),S=on(y=>{const M=y.target;[...d.branches].some(j=>j.contains(M))||(u==null||u(y),c==null||c(y),y.defaultPrevented||l==null||l())},$);return At(y=>{g===d.layers.size-1&&(a==null||a(y),!y.defaultPrevented&&l&&(y.preventDefault(),l()))},$),o.useEffect(()=>{if(i)return r&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(Be=$.body.style.pointerEvents,$.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(i)),d.layers.add(i),Ae(),()=>{r&&d.layersWithOutsidePointerEventsDisabled.size===1&&($.body.style.pointerEvents=Be)}},[i,$,r,d]),o.useEffect(()=>()=>{i&&(d.layers.delete(i),d.layersWithOutsidePointerEventsDisabled.delete(i),Ae())},[i,d]),o.useEffect(()=>{const y=()=>b({});return document.addEventListener(ye,y),()=>document.removeEventListener(ye,y)},[]),o.createElement(Y.div,x({},p,{ref:m,style:{pointerEvents:w?A?"auto":"none":void 0,...e.style},onFocusCapture:I(e.onFocusCapture,S.onFocusCapture),onBlurCapture:I(e.onBlurCapture,S.onBlurCapture),onPointerDownCapture:I(e.onPointerDownCapture,q.onPointerDownCapture)}))});function nn(e,t=globalThis==null?void 0:globalThis.document){const n=J(e),r=o.useRef(!1),a=o.useRef(()=>{});return o.useEffect(()=>{const s=c=>{if(c.target&&!r.current){let p=function(){ot(Jt,n,l,{discrete:!0})};const l={originalEvent:c};c.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=p,t.addEventListener("click",a.current,{once:!0})):p()}else t.removeEventListener("click",a.current);r.current=!1},u=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(u),t.removeEventListener("pointerdown",s),t.removeEventListener("click",a.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function on(e,t=globalThis==null?void 0:globalThis.document){const n=J(e),r=o.useRef(!1);return o.useEffect(()=>{const a=s=>{s.target&&!r.current&&ot(Qt,n,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Ae(){const e=new CustomEvent(ye);document.dispatchEvent(e)}function ot(e,t,n,{discrete:r}){const a=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),r?tt(a,s):a.dispatchEvent(s)}const we="focusScope.autoFocusOnMount",ge="focusScope.autoFocusOnUnmount",Fe={bubbles:!1,cancelable:!0},rn=o.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:s,...u}=e,[c,l]=o.useState(null),p=J(a),d=J(s),i=o.useRef(null),v=G(t,m=>l(m)),$=o.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.useEffect(()=>{if(r){let m=function(g){if($.paused||!c)return;const w=g.target;c.contains(w)?i.current=w:U(i.current,{select:!0})},D=function(g){if($.paused||!c)return;const w=g.relatedTarget;w!==null&&(c.contains(w)||U(i.current,{select:!0}))},h=function(g){if(document.activeElement===document.body)for(const A of g)A.removedNodes.length>0&&U(c)};document.addEventListener("focusin",m),document.addEventListener("focusout",D);const O=new MutationObserver(h);return c&&O.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",m),document.removeEventListener("focusout",D),O.disconnect()}}},[r,c,$.paused]),o.useEffect(()=>{if(c){Ne.add($);const m=document.activeElement;if(!c.contains(m)){const h=new CustomEvent(we,Fe);c.addEventListener(we,p),c.dispatchEvent(h),h.defaultPrevented||(an(ln(rt(c)),{select:!0}),document.activeElement===m&&U(c))}return()=>{c.removeEventListener(we,p),setTimeout(()=>{const h=new CustomEvent(ge,Fe);c.addEventListener(ge,d),c.dispatchEvent(h),h.defaultPrevented||U(m??document.body,{select:!0}),c.removeEventListener(ge,d),Ne.remove($)},0)}}},[c,p,d,$]);const b=o.useCallback(m=>{if(!n&&!r||$.paused)return;const D=m.key==="Tab"&&!m.altKey&&!m.ctrlKey&&!m.metaKey,h=document.activeElement;if(D&&h){const O=m.currentTarget,[g,w]=cn(O);g&&w?!m.shiftKey&&h===w?(m.preventDefault(),n&&U(g,{select:!0})):m.shiftKey&&h===g&&(m.preventDefault(),n&&U(w,{select:!0})):h===O&&m.preventDefault()}},[n,r,$.paused]);return o.createElement(Y.div,x({tabIndex:-1},u,{ref:v,onKeyDown:b}))});function an(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(U(r,{select:t}),document.activeElement!==n)return}function cn(e){const t=rt(e),n=ke(t,e),r=ke(t.reverse(),e);return[n,r]}function rt(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ke(e,t){for(const n of e)if(!sn(n,{upTo:t}))return n}function sn(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function dn(e){return e instanceof HTMLInputElement&&"select"in e}function U(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&dn(e)&&t&&e.select()}}const Ne=un();function un(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Le(e,t),e.unshift(t)},remove(t){var n;e=Le(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function Le(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function ln(e){return e.filter(t=>t.tagName!=="A")}const at="Popper",[ct,st]=De(at),[fn,it]=ct(at),pn=e=>{const{__scopePopper:t,children:n}=e,[r,a]=o.useState(null);return o.createElement(fn,{scope:t,anchor:r,onAnchorChange:a},n)},mn="PopperAnchor",$n=o.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...a}=e,s=it(mn,n),u=o.useRef(null),c=G(t,u);return o.useEffect(()=>{s.onAnchorChange((r==null?void 0:r.current)||u.current)}),r?null:o.createElement(Y.div,x({},a,{ref:c}))}),dt="PopperContent",[vn,Vo]=ct(dt),bn=o.forwardRef((e,t)=>{var n,r,a,s,u,c,l,p;const{__scopePopper:d,side:i="bottom",sideOffset:v=0,align:$="center",alignOffset:b=0,arrowPadding:m=0,avoidCollisions:D=!0,collisionBoundary:h=[],collisionPadding:O=0,sticky:g="partial",hideWhenDetached:w=!1,updatePositionStrategy:A="optimized",onPlaced:q,...S}=e,y=it(dt,d),[M,F]=o.useState(null),j=G(t,ee=>F(ee)),[z,ce]=o.useState(null),B=Ut(z),be=(n=B==null?void 0:B.width)!==null&&n!==void 0?n:0,se=(r=B==null?void 0:B.height)!==null&&r!==void 0?r:0,he=i+($!=="center"?"-"+$:""),N=typeof O=="number"?O:{top:0,right:0,bottom:0,left:0,...O},f=Array.isArray(h)?h:[h],C=f.length>0,P={padding:N,boundary:f.filter(hn),altBoundary:C},{refs:k,floatingStyles:L,placement:Q,isPositioned:X,middlewareData:R}=Lt({strategy:"fixed",placement:he,whileElementsMounted:(...ee)=>Ht(...ee,{animationFrame:A==="always"}),elements:{reference:y.anchor},middleware:[Vt({mainAxis:v+se,alignmentAxis:b}),D&&Wt({mainAxis:!0,crossAxis:!1,limiter:g==="partial"?Gt():void 0,...P}),D&&jt({...P}),zt({...P,apply:({elements:ee,rects:Te,availableWidth:Et,availableHeight:xt})=>{const{width:Ct,height:It}=Te.reference,ue=ee.floating.style;ue.setProperty("--radix-popper-available-width",`${Et}px`),ue.setProperty("--radix-popper-available-height",`${xt}px`),ue.setProperty("--radix-popper-anchor-width",`${Ct}px`),ue.setProperty("--radix-popper-anchor-height",`${It}px`)}}),z&&Kt({element:z,padding:m}),wn({arrowWidth:be,arrowHeight:se}),w&&Xt({strategy:"referenceHidden",...P})]}),[K,ie]=ut(Q),T=J(q);Me(()=>{X&&(T==null||T())},[X,T]);const de=(a=R.arrow)===null||a===void 0?void 0:a.x,ht=(s=R.arrow)===null||s===void 0?void 0:s.y,wt=((u=R.arrow)===null||u===void 0?void 0:u.centerOffset)!==0,[gt,yt]=o.useState();return Me(()=>{M&&yt(window.getComputedStyle(M).zIndex)},[M]),o.createElement("div",{ref:k.setFloating,"data-radix-popper-content-wrapper":"",style:{...L,transform:X?L.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:gt,"--radix-popper-transform-origin":[(c=R.transformOrigin)===null||c===void 0?void 0:c.x,(l=R.transformOrigin)===null||l===void 0?void 0:l.y].join(" ")},dir:e.dir},o.createElement(vn,{scope:d,placedSide:K,onArrowChange:ce,arrowX:de,arrowY:ht,shouldHideArrow:wt},o.createElement(Y.div,x({"data-side":K,"data-align":ie},S,{ref:j,style:{...S.style,animation:X?void 0:"none",opacity:(p=R.hide)!==null&&p!==void 0&&p.referenceHidden?0:void 0}}))))});function hn(e){return e!==null}const wn=e=>({name:"transformOrigin",options:e,fn(t){var n,r,a,s,u;const{placement:c,rects:l,middlewareData:p}=t,i=((n=p.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,v=i?0:e.arrowWidth,$=i?0:e.arrowHeight,[b,m]=ut(c),D={start:"0%",center:"50%",end:"100%"}[m],h=((r=(a=p.arrow)===null||a===void 0?void 0:a.x)!==null&&r!==void 0?r:0)+v/2,O=((s=(u=p.arrow)===null||u===void 0?void 0:u.y)!==null&&s!==void 0?s:0)+$/2;let g="",w="";return b==="bottom"?(g=i?D:`${h}px`,w=`${-$}px`):b==="top"?(g=i?D:`${h}px`,w=`${l.floating.height+$}px`):b==="right"?(g=`${-$}px`,w=i?D:`${O}px`):b==="left"&&(g=`${l.floating.width+$}px`,w=i?D:`${O}px`),{data:{x:g,y:w}}}});function ut(e){const[t,n="center"]=e.split("-");return[t,n]}const gn=pn,yn=$n,En=bn,xn=["Enter"," "],Cn=["ArrowDown","PageUp","Home"],lt=["ArrowUp","PageDown","End"],In=[...Cn,...lt],$e="Menu",[Ee,Dn,On]=St($e),[Z,ft]=De($e,[On,st,nt]),Oe=st(),pt=nt(),[Pn,ve]=Z($e),[_n,Pe]=Z($e),Tn=e=>{const{__scopeMenu:t,open:n=!1,children:r,dir:a,onOpenChange:s,modal:u=!0}=e,c=Oe(t),[l,p]=o.useState(null),d=o.useRef(!1),i=J(s),v=Bt(a);return o.useEffect(()=>{const $=()=>{d.current=!0,document.addEventListener("pointerdown",b,{capture:!0,once:!0}),document.addEventListener("pointermove",b,{capture:!0,once:!0})},b=()=>d.current=!1;return document.addEventListener("keydown",$,{capture:!0}),()=>{document.removeEventListener("keydown",$,{capture:!0}),document.removeEventListener("pointerdown",b,{capture:!0}),document.removeEventListener("pointermove",b,{capture:!0})}},[]),o.createElement(gn,c,o.createElement(Pn,{scope:t,open:n,onOpenChange:i,content:l,onContentChange:p},o.createElement(_n,{scope:t,onClose:o.useCallback(()=>i(!1),[i]),isUsingKeyboardRef:d,dir:v,modal:u},r)))},Mn=o.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e,a=Oe(n);return o.createElement(yn,x({},a,r,{ref:t}))}),Rn="MenuPortal",[Wo,Sn]=Z(Rn,{forceMount:void 0}),V="MenuContent",[Bn,mt]=Z(V),An=o.forwardRef((e,t)=>{const n=Sn(V,e.__scopeMenu),{forceMount:r=n.forceMount,...a}=e,s=ve(V,e.__scopeMenu),u=Pe(V,e.__scopeMenu);return o.createElement(Ee.Provider,{scope:e.__scopeMenu},o.createElement(Yt,{present:r||s.open},o.createElement(Ee.Slot,{scope:e.__scopeMenu},u.modal?o.createElement(Fn,x({},a,{ref:t})):o.createElement(kn,x({},a,{ref:t})))))}),Fn=o.forwardRef((e,t)=>{const n=ve(V,e.__scopeMenu),r=o.useRef(null),a=G(t,r);return o.useEffect(()=>{const s=r.current;if(s)return Ft(s)},[]),o.createElement($t,x({},e,{ref:a,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:I(e.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)}))}),kn=o.forwardRef((e,t)=>{const n=ve(V,e.__scopeMenu);return o.createElement($t,x({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)}))}),$t=o.forwardRef((e,t)=>{const{__scopeMenu:n,loop:r=!1,trapFocus:a,onOpenAutoFocus:s,onCloseAutoFocus:u,disableOutsidePointerEvents:c,onEntryFocus:l,onEscapeKeyDown:p,onPointerDownOutside:d,onFocusOutside:i,onInteractOutside:v,onDismiss:$,disableOutsideScroll:b,...m}=e,D=ve(V,n),h=Pe(V,n),O=Oe(n),g=pt(n),w=Dn(n),[A,q]=o.useState(null),S=o.useRef(null),y=G(t,S,D.onContentChange),M=o.useRef(0),F=o.useRef(""),j=o.useRef(0),z=o.useRef(null),ce=o.useRef("right"),B=o.useRef(0),be=b?Nt:o.Fragment,se=b?{as:Mt,allowPinchZoom:!0}:void 0,he=f=>{var C,P;const k=F.current+f,L=w().filter(T=>!T.disabled),Q=document.activeElement,X=(C=L.find(T=>T.ref.current===Q))===null||C===void 0?void 0:C.textValue,R=L.map(T=>T.textValue),K=zn(R,k,X),ie=(P=L.find(T=>T.textValue===K))===null||P===void 0?void 0:P.ref.current;(function T(de){F.current=de,window.clearTimeout(M.current),de!==""&&(M.current=window.setTimeout(()=>T(""),1e3))})(k),ie&&setTimeout(()=>ie.focus())};o.useEffect(()=>()=>window.clearTimeout(M.current),[]),kt();const N=o.useCallback(f=>{var C,P;return ce.current===((C=z.current)===null||C===void 0?void 0:C.side)&&Yn(f,(P=z.current)===null||P===void 0?void 0:P.area)},[]);return o.createElement(Bn,{scope:n,searchRef:F,onItemEnter:o.useCallback(f=>{N(f)&&f.preventDefault()},[N]),onItemLeave:o.useCallback(f=>{var C;N(f)||((C=S.current)===null||C===void 0||C.focus(),q(null))},[N]),onTriggerLeave:o.useCallback(f=>{N(f)&&f.preventDefault()},[N]),pointerGraceTimerRef:j,onPointerGraceIntentChange:o.useCallback(f=>{z.current=f},[])},o.createElement(be,se,o.createElement(rn,{asChild:!0,trapped:a,onMountAutoFocus:I(s,f=>{var C;f.preventDefault(),(C=S.current)===null||C===void 0||C.focus()}),onUnmountAutoFocus:u},o.createElement(tn,{asChild:!0,disableOutsidePointerEvents:c,onEscapeKeyDown:p,onPointerDownOutside:d,onFocusOutside:i,onInteractOutside:v,onDismiss:$},o.createElement(Zt,x({asChild:!0},g,{dir:h.dir,orientation:"vertical",loop:r,currentTabStopId:A,onCurrentTabStopIdChange:q,onEntryFocus:I(l,f=>{h.isUsingKeyboardRef.current||f.preventDefault()})}),o.createElement(En,x({role:"menu","aria-orientation":"vertical","data-state":Wn(D.open),"data-radix-menu-content":"",dir:h.dir},O,m,{ref:y,style:{outline:"none",...m.style},onKeyDown:I(m.onKeyDown,f=>{const P=f.target.closest("[data-radix-menu-content]")===f.currentTarget,k=f.ctrlKey||f.altKey||f.metaKey,L=f.key.length===1;P&&(f.key==="Tab"&&f.preventDefault(),!k&&L&&he(f.key));const Q=S.current;if(f.target!==Q||!In.includes(f.key))return;f.preventDefault();const R=w().filter(K=>!K.disabled).map(K=>K.ref.current);lt.includes(f.key)&&R.reverse(),Gn(R)}),onBlur:I(e.onBlur,f=>{f.currentTarget.contains(f.target)||(window.clearTimeout(M.current),F.current="")}),onPointerMove:I(e.onPointerMove,Ce(f=>{const C=f.target,P=B.current!==f.clientX;if(f.currentTarget.contains(C)&&P){const k=f.clientX>B.current?"right":"left";ce.current=k,B.current=f.clientX}}))})))))))}),xe="MenuItem",Ke="menu.itemSelect",Nn=o.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:r,...a}=e,s=o.useRef(null),u=Pe(xe,e.__scopeMenu),c=mt(xe,e.__scopeMenu),l=G(t,s),p=o.useRef(!1),d=()=>{const i=s.current;if(!n&&i){const v=new CustomEvent(Ke,{bubbles:!0,cancelable:!0});i.addEventListener(Ke,$=>r==null?void 0:r($),{once:!0}),tt(i,v),v.defaultPrevented?p.current=!1:u.onClose()}};return o.createElement(Ln,x({},a,{ref:l,disabled:n,onClick:I(e.onClick,d),onPointerDown:i=>{var v;(v=e.onPointerDown)===null||v===void 0||v.call(e,i),p.current=!0},onPointerUp:I(e.onPointerUp,i=>{var v;p.current||(v=i.currentTarget)===null||v===void 0||v.click()}),onKeyDown:I(e.onKeyDown,i=>{const v=c.searchRef.current!=="";n||v&&i.key===" "||xn.includes(i.key)&&(i.currentTarget.click(),i.preventDefault())})}))}),Ln=o.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:r=!1,textValue:a,...s}=e,u=mt(xe,n),c=pt(n),l=o.useRef(null),p=G(t,l),[d,i]=o.useState(!1),[v,$]=o.useState("");return o.useEffect(()=>{const b=l.current;if(b){var m;$(((m=b.textContent)!==null&&m!==void 0?m:"").trim())}},[s.children]),o.createElement(Ee.ItemSlot,{scope:n,disabled:r,textValue:a??v},o.createElement(qt,x({asChild:!0},c,{focusable:!r}),o.createElement(Y.div,x({role:"menuitem","data-highlighted":d?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0},s,{ref:p,onPointerMove:I(e.onPointerMove,Ce(b=>{r?u.onItemLeave(b):(u.onItemEnter(b),b.defaultPrevented||b.currentTarget.focus())})),onPointerLeave:I(e.onPointerLeave,Ce(b=>u.onItemLeave(b))),onFocus:I(e.onFocus,()=>i(!0)),onBlur:I(e.onBlur,()=>i(!1))}))))}),Kn="MenuRadioGroup";Z(Kn,{value:void 0,onValueChange:()=>{}});const Un="MenuItemIndicator";Z(Un,{checked:!1});const Hn=o.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return o.createElement(Y.div,x({role:"separator","aria-orientation":"horizontal"},r,{ref:t}))}),Vn="MenuSub";Z(Vn);function Wn(e){return e?"open":"closed"}function Gn(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function jn(e,t){return e.map((n,r)=>e[(t+r)%e.length])}function zn(e,t,n){const a=t.length>1&&Array.from(t).every(p=>p===t[0])?t[0]:t,s=n?e.indexOf(n):-1;let u=jn(e,Math.max(s,0));a.length===1&&(u=u.filter(p=>p!==n));const l=u.find(p=>p.toLowerCase().startsWith(a.toLowerCase()));return l!==n?l:void 0}function Xn(e,t){const{x:n,y:r}=e;let a=!1;for(let s=0,u=t.length-1;s<t.length;u=s++){const c=t[s].x,l=t[s].y,p=t[u].x,d=t[u].y;l>r!=d>r&&n<(p-c)*(r-l)/(d-l)+c&&(a=!a)}return a}function Yn(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return Xn(n,t)}function Ce(e){return t=>t.pointerType==="mouse"?e(t):void 0}const Zn=Tn,qn=Mn,Jn=An,Qn=Nn,eo=Hn,vt="DropdownMenu",[to,Go]=De(vt,[ft]),ae=ft(),[no,bt]=to(vt),oo=e=>{const{__scopeDropdownMenu:t,children:n,dir:r,open:a,defaultOpen:s,onOpenChange:u,modal:c=!0}=e,l=ae(t),p=o.useRef(null),[d=!1,i]=Tt({prop:a,defaultProp:s,onChange:u});return o.createElement(no,{scope:t,triggerId:Re(),triggerRef:p,contentId:Re(),open:d,onOpenChange:i,onOpenToggle:o.useCallback(()=>i(v=>!v),[i]),modal:c},o.createElement(Zn,x({},l,{open:d,onOpenChange:i,dir:r,modal:c}),n))},ro="DropdownMenuTrigger",ao=o.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:r=!1,...a}=e,s=bt(ro,n),u=ae(n);return o.createElement(qn,x({asChild:!0},u),o.createElement(Y.button,x({type:"button",id:s.triggerId,"aria-haspopup":"menu","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":s.open?"open":"closed","data-disabled":r?"":void 0,disabled:r},a,{ref:Rt(t,s.triggerRef),onPointerDown:I(e.onPointerDown,c=>{!r&&c.button===0&&c.ctrlKey===!1&&(s.onOpenToggle(),s.open||c.preventDefault())}),onKeyDown:I(e.onKeyDown,c=>{r||(["Enter"," "].includes(c.key)&&s.onOpenToggle(),c.key==="ArrowDown"&&s.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(c.key)&&c.preventDefault())})})))}),co="DropdownMenuContent",so=o.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,a=bt(co,n),s=ae(n),u=o.useRef(!1);return o.createElement(Jn,x({id:a.contentId,"aria-labelledby":a.triggerId},s,r,{ref:t,onCloseAutoFocus:I(e.onCloseAutoFocus,c=>{var l;u.current||(l=a.triggerRef.current)===null||l===void 0||l.focus(),u.current=!1,c.preventDefault()}),onInteractOutside:I(e.onInteractOutside,c=>{const l=c.detail.originalEvent,p=l.button===0&&l.ctrlKey===!0,d=l.button===2||p;(!a.modal||d)&&(u.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),io=o.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,a=ae(n);return o.createElement(Qn,x({},a,r,{ref:t}))}),uo=o.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,a=ae(n);return o.createElement(eo,x({},a,r,{ref:t}))}),lo=oo,fo=ao,po=so,mo=io,$o=uo;const W=o.forwardRef(({items:e,children:t,className:n,showArrow:r,open:a,defaultOpen:s,onOpenChange:u,...c},l)=>{const p=o.useMemo(()=>{if(o.isValidElement(e))return e;if(Array.isArray(e))return e.map((d,i)=>ne(Dt,{children:[ne(mo,{className:Se(d.className,"arm-dropdown-menu-item"),disabled:d.disabled,onSelect:()=>{var v;return(v=d.onClick)==null?void 0:v.call(d,i)},children:[d.leftOverlay&&E("div",{className:"arm-dropdown-menu-item-left-overlay",children:d.leftOverlay}),d.label&&E("div",{className:"arm-dropdown-menu-item-label",children:d.label}),d.rightOverlay&&E("div",{className:"arm-dropdown-menu-item-right-overlay",children:d.rightOverlay})]},i),d.addSeparatorUnder&&E($o,{className:"arm-dropdown-menu-separator"})]}));throw new Error("Invalid content passed to DropdownMenu. Must be an array of items or a single React element.")},[e]);return ne(lo,{open:a,onOpenChange:u,defaultOpen:s,children:[t&&E(fo,{asChild:!0,children:t}),ne(po,{...c,"data-has-arrow":!!r,className:Se(n,"arm-dropdown-menu-content"),ref:l,children:[p,r&&E("div",{className:"arm-dropdown-menu-arrow","data-testid":"arm-dropdown-arrow"})]})]})});W.displayName="DropdownMenu";try{W.displayName="DropdownMenu",W.__docgenInfo={description:"",displayName:"DropdownMenu",props:{showArrow:{defaultValue:null,description:"Specifies whether to show an arrow indicator next on the menu.",name:"showArrow",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Array of dropdown menu items, or a custom React node to render.",name:"items",required:!1,type:{name:"ReactNode | IDropdownMenuItem[]"}}}}}catch{}const Ie=Ot.fn(),_e=[{label:"Item 1",onClick:Ie},{label:"Item 2"},{label:"Item 3 disabled",disabled:!0,addSeparatorUnder:!0},{label:"Item 4"},{label:"Item 5 (left icon)",leftOverlay:E(Pt,{"data-testid":"user-icon"})},{label:"Item 6 (right icon)",rightOverlay:E(_t,{"data-testid":"check-icon"})}],jo={title:"Components/DropdownMenu",component:W,parameters:{docs:{description:{component:"A simple menu that can be toggled open/closed with a trigger button"}}}},te={render:()=>E("div",{style:{height:"350px",display:"flex",flexDirection:"column",alignItems:"center"},children:E(W,{items:_e,"data-testid":"dropdown",children:E(re,{type:"button","data-testid":"button",children:"Toggle item list menu"})})}),play:async({canvasElement:e})=>{const t=H(e),n=t.getByTestId("button");oe.click(n),await me(()=>_(t.getByTestId("dropdown")).toBeVisible());const r=t.getAllByRole("menuitem");_(r).toHaveLength(6),_(r[0]).toHaveTextContent("Item 1"),oe.click(r[0]),_(Ie).toHaveBeenCalledTimes(1),_(Ie).toHaveBeenCalledWith(0),_(r[2]).toHaveTextContent("Item 3 disabled"),_(r[2]).toHaveAttribute("data-disabled");const a=t.getAllByRole("separator");_(a).toHaveLength(1);const s=H(r[4]).getByTestId("user-icon");_(s).toBeVisible();const u=H(r[5]).getByTestId("check-icon");_(u).toBeVisible()}},le={render:()=>E("div",{style:{height:"350px",display:"flex",flexDirection:"column",alignItems:"center"},children:E(W,{items:_e,"data-testid":"dropdown",showArrow:!0,children:E(re,{type:"button","data-testid":"button",children:"Toggle with arrow"})})}),play:async({canvasElement:e})=>{const t=H(e),n=t.getByTestId("button");oe.click(n),await me(()=>_(t.getByTestId("dropdown")).toBeVisible());const r=H(t.getByTestId("dropdown")).getByTestId("arm-dropdown-arrow");_(r).toBeVisible()}},fe={render:()=>{const[e,t]=o.useState(!1);return ne("div",{style:{height:"350px",display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:[E(re,{type:"button","data-testid":"state-button",onClick:()=>t(!0),children:"Toggle from elsewhere"}),E(W,{items:_e,"data-testid":"dropdown",open:e,onOpenChange:t,children:E(re,{type:"button","data-testid":"trigger-button",onClick:()=>t(!0),children:"Trigger button"})})]})},play:async({canvasElement:e})=>{const t=H(e),n=t.getByTestId("state-button");oe.click(n),await me(()=>_(t.getByTestId("dropdown")).toBeVisible())}},pe={render:()=>E("div",{style:{height:"350px",display:"flex",flexDirection:"column",alignItems:"center"},children:E(W,{items:E("div",{"data-testid":"custom-content",style:{height:"100px",display:"flex",alignItems:"center",justifyContent:"center"},children:"Some custom content"}),"data-testid":"dropdown",children:E(re,{type:"button","data-testid":"button",children:"Toggle custom content menu"})})}),play:async({canvasElement:e})=>{const t=H(e),n=t.getByTestId("button");oe.click(n),await me(()=>_(t.getByTestId("dropdown")).toBeVisible());const r=H(t.getByTestId("dropdown")).getByTestId("custom-content");_(r).toBeVisible()}};var Ue,He,Ve,We,Ge;te.parameters={...te.parameters,docs:{...(Ue=te.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: '350px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
        <DropdownMenu items={items} data-testid="dropdown">
          <Button type="button" data-testid="button">
            Toggle item list menu
          </Button>
        </DropdownMenu>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId('button');
    userEvent.click(openButton);
    await waitFor(() => expect(canvas.getByTestId('dropdown')).toBeVisible());
    const menuItems = canvas.getAllByRole('menuitem');
    expect(menuItems).toHaveLength(6);
    expect(menuItems[0]).toHaveTextContent('Item 1');
    userEvent.click(menuItems[0]);
    expect(item1change).toHaveBeenCalledTimes(1);
    expect(item1change).toHaveBeenCalledWith(0);
    expect(menuItems[2]).toHaveTextContent('Item 3 disabled');
    expect(menuItems[2]).toHaveAttribute('data-disabled');
    const separator = canvas.getAllByRole('separator');
    expect(separator).toHaveLength(1);
    const leftOverlay = within(menuItems[4]).getByTestId('user-icon');
    expect(leftOverlay).toBeVisible();
    const rightOverlay = within(menuItems[5]).getByTestId('check-icon');
    expect(rightOverlay).toBeVisible();
  }
}`,...(Ve=(He=te.parameters)==null?void 0:He.docs)==null?void 0:Ve.source},description:{story:"stories",...(Ge=(We=te.parameters)==null?void 0:We.docs)==null?void 0:Ge.description}}};var je,ze,Xe;le.parameters={...le.parameters,docs:{...(je=le.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: '350px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
        <DropdownMenu items={items} data-testid="dropdown" showArrow>
          <Button type="button" data-testid="button">
            Toggle with arrow
          </Button>
        </DropdownMenu>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId('button');
    userEvent.click(openButton);
    await waitFor(() => expect(canvas.getByTestId('dropdown')).toBeVisible());
    const arrow = within(canvas.getByTestId('dropdown')).getByTestId('arm-dropdown-arrow');
    expect(arrow).toBeVisible();
  }
}`,...(Xe=(ze=le.parameters)==null?void 0:ze.docs)==null?void 0:Xe.source}}};var Ye,Ze,qe;fe.parameters={...fe.parameters,docs:{...(Ye=fe.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div style={{
      height: '350px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }}>
        <Button type="button" data-testid="state-button" onClick={() => setOpen(true)}>
          Toggle from elsewhere
        </Button>
        <DropdownMenu items={items} data-testid="dropdown" open={open} onOpenChange={setOpen}>
          <Button type="button" data-testid="trigger-button" onClick={() => setOpen(true)}>
            Trigger button
          </Button>
        </DropdownMenu>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId('state-button');
    userEvent.click(openButton);
    await waitFor(() => expect(canvas.getByTestId('dropdown')).toBeVisible());
  }
}`,...(qe=(Ze=fe.parameters)==null?void 0:Ze.docs)==null?void 0:qe.source}}};var Je,Qe,et;pe.parameters={...pe.parameters,docs:{...(Je=pe.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: '350px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
        <DropdownMenu items={<div data-testid="custom-content" style={{
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
              Some custom content
            </div>} data-testid="dropdown">
          <Button type="button" data-testid="button">
            Toggle custom content menu
          </Button>
        </DropdownMenu>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByTestId('button');
    userEvent.click(openButton);
    await waitFor(() => expect(canvas.getByTestId('dropdown')).toBeVisible());
    const customContent = within(canvas.getByTestId('dropdown')).getByTestId('custom-content');
    expect(customContent).toBeVisible();
  }
}`,...(et=(Qe=pe.parameters)==null?void 0:Qe.docs)==null?void 0:et.source}}};const zo=["Default","WithArrow","StateDriven","CustomContent"];export{pe as CustomContent,te as Default,fe as StateDriven,le as WithArrow,zo as __namedExportsOrder,jo as default};
