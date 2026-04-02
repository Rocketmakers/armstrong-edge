import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as Be,w as I,u as S,a as j,e as x,f as re}from"./index-BmZcwVSF.js";import{r as s}from"./index-DwQS_Y10.js";import{g as Lt,e as Vt}from"./config.context-Db4Op3G9.js";import{b as w,P as V,c as Je,e as Gt,a as Kt,d as Ht}from"./index-CWQsrU90.js";import{u as J,c as Qe}from"./index-DKCiyFsV.js";import{c as Ut}from"./index-Dp6IY7a_.js";import{u as $t}from"./index-wJcBHZIT.js";import{D as Wt}from"./index-D-iaL4kR.js";import{h as Xt,u as Yt,R as zt,F as qt}from"./index-B2Q3jSsz.js";import{R as Zt,A as Jt,c as et,C as Qt,a as en}from"./index-DYVRbH_s.js";import{P as ve}from"./index-CC-sFNo4.js";import{I as tn,c as tt,R as nn}from"./index-Dv-BAVC1.js";import{u as nt}from"./index-Bgmmd5SI.js";import{u as Ee}from"./index-hWMLfxWy.js";import{B as P}from"./button.component-DGjVvDTT.js";var ge=["Enter"," "],on=["ArrowDown","PageUp","Home"],ot=["ArrowUp","PageDown","End"],rn=[...on,...ot],an={ltr:[...ge,"ArrowRight"],rtl:[...ge,"ArrowLeft"]},sn={ltr:["ArrowLeft"],rtl:["ArrowRight"]},Q="Menu",[q,cn,dn]=Ut(Q),[N,rt]=Je(Q,[dn,et,tt]),ce=et(),at=tt(),[un,G]=N(Q),[ln,ee]=N(Q),st=e=>{const{__scopeMenu:t,open:n=!1,children:o,dir:a,onOpenChange:c,modal:d=!0}=e,u=ce(t),[f,g]=s.useState(null),p=s.useRef(!1),i=nt(c),m=$t(a);return s.useEffect(()=>{const y=()=>{p.current=!0,document.addEventListener("pointerdown",v,{capture:!0,once:!0}),document.addEventListener("pointermove",v,{capture:!0,once:!0})},v=()=>p.current=!1;return document.addEventListener("keydown",y,{capture:!0}),()=>{document.removeEventListener("keydown",y,{capture:!0}),document.removeEventListener("pointerdown",v,{capture:!0}),document.removeEventListener("pointermove",v,{capture:!0})}},[]),r.jsx(Zt,{...u,children:r.jsx(un,{scope:t,open:n,onOpenChange:i,content:f,onContentChange:g,children:r.jsx(ln,{scope:t,onClose:s.useCallback(()=>i(!1),[i]),isUsingKeyboardRef:p,dir:m,modal:d,children:o})})})};st.displayName=Q;var pn="MenuAnchor",he=s.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e,a=ce(n);return r.jsx(Jt,{...a,...o,ref:t})});he.displayName=pn;var mn="MenuPortal",[Fo,ct]=N(mn,{forceMount:void 0}),C="MenuContent",[fn,xe]=N(C),it=s.forwardRef((e,t)=>{const n=ct(C,e.__scopeMenu),{forceMount:o=n.forceMount,...a}=e,c=G(C,e.__scopeMenu),d=ee(C,e.__scopeMenu);return r.jsx(q.Provider,{scope:e.__scopeMenu,children:r.jsx(ve,{present:o||c.open,children:r.jsx(q.Slot,{scope:e.__scopeMenu,children:d.modal?r.jsx(gn,{...a,ref:t}):r.jsx(wn,{...a,ref:t})})})})}),gn=s.forwardRef((e,t)=>{const n=G(C,e.__scopeMenu),o=s.useRef(null),a=J(t,o);return s.useEffect(()=>{const c=o.current;if(c)return Xt(c)},[]),r.jsx(ye,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:w(e.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),wn=s.forwardRef((e,t)=>{const n=G(C,e.__scopeMenu);return r.jsx(ye,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),vn=Kt("MenuContent.ScrollLock"),ye=s.forwardRef((e,t)=>{const{__scopeMenu:n,loop:o=!1,trapFocus:a,onOpenAutoFocus:c,onCloseAutoFocus:d,disableOutsidePointerEvents:u,onEntryFocus:f,onEscapeKeyDown:g,onPointerDownOutside:p,onFocusOutside:i,onInteractOutside:m,onDismiss:y,disableOutsideScroll:v,...D}=e,R=G(C,n),h=ee(C,n),A=ce(n),k=at(n),K=cn(n),[Pt,Ce]=s.useState(null),te=s.useRef(null),At=J(t,te,R.onContentChange),ne=s.useRef(0),oe=s.useRef(""),Nt=s.useRef(0),le=s.useRef(null),_e=s.useRef("right"),pe=s.useRef(0),kt=v?zt:s.Fragment,Ot=v?{as:vn,allowPinchZoom:!0}:void 0,Ft=l=>{var F,De;const b=oe.current+l,_=K().filter(B=>!B.disabled),E=document.activeElement,me=(F=_.find(B=>B.ref.current===E))==null?void 0:F.textValue,fe=_.map(B=>B.textValue),Te=Bn(fe,b,me),H=(De=_.find(B=>B.textValue===Te))==null?void 0:De.ref.current;(function B(Re){oe.current=Re,window.clearTimeout(ne.current),Re!==""&&(ne.current=window.setTimeout(()=>B(""),1e3))})(b),H&&setTimeout(()=>H.focus())};s.useEffect(()=>()=>window.clearTimeout(ne.current),[]),Yt();const O=s.useCallback(l=>{var _,E;return _e.current===((_=le.current)==null?void 0:_.side)&&Sn(l,(E=le.current)==null?void 0:E.area)},[]);return r.jsx(fn,{scope:n,searchRef:oe,onItemEnter:s.useCallback(l=>{O(l)&&l.preventDefault()},[O]),onItemLeave:s.useCallback(l=>{var b;O(l)||((b=te.current)==null||b.focus(),Ce(null))},[O]),onTriggerLeave:s.useCallback(l=>{O(l)&&l.preventDefault()},[O]),pointerGraceTimerRef:Nt,onPointerGraceIntentChange:s.useCallback(l=>{le.current=l},[]),children:r.jsx(kt,{...Ot,children:r.jsx(qt,{asChild:!0,trapped:a,onMountAutoFocus:w(c,l=>{var b;l.preventDefault(),(b=te.current)==null||b.focus({preventScroll:!0})}),onUnmountAutoFocus:d,children:r.jsx(Wt,{asChild:!0,disableOutsidePointerEvents:u,onEscapeKeyDown:g,onPointerDownOutside:p,onFocusOutside:i,onInteractOutside:m,onDismiss:y,children:r.jsx(nn,{asChild:!0,...k,dir:h.dir,orientation:"vertical",loop:o,currentTabStopId:Pt,onCurrentTabStopIdChange:Ce,onEntryFocus:w(f,l=>{h.isUsingKeyboardRef.current||l.preventDefault()}),preventScrollOnEntryFocus:!0,children:r.jsx(Qt,{role:"menu","aria-orientation":"vertical","data-state":Ct(R.open),"data-radix-menu-content":"",dir:h.dir,...A,...D,ref:At,style:{outline:"none",...D.style},onKeyDown:w(D.onKeyDown,l=>{const _=l.target.closest("[data-radix-menu-content]")===l.currentTarget,E=l.ctrlKey||l.altKey||l.metaKey,me=l.key.length===1;_&&(l.key==="Tab"&&l.preventDefault(),!E&&me&&Ft(l.key));const fe=te.current;if(l.target!==fe||!rn.includes(l.key))return;l.preventDefault();const H=K().filter(F=>!F.disabled).map(F=>F.ref.current);ot.includes(l.key)&&H.reverse(),Dn(H)}),onBlur:w(e.onBlur,l=>{l.currentTarget.contains(l.target)||(window.clearTimeout(ne.current),oe.current="")}),onPointerMove:w(e.onPointerMove,Z(l=>{const b=l.target,_=pe.current!==l.clientX;if(l.currentTarget.contains(b)&&_){const E=l.clientX>pe.current?"right":"left";_e.current=E,pe.current=l.clientX}}))})})})})})})});it.displayName=C;var hn="MenuGroup",Me=s.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return r.jsx(V.div,{role:"group",...o,ref:t})});Me.displayName=hn;var xn="MenuLabel",dt=s.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return r.jsx(V.div,{...o,ref:t})});dt.displayName=xn;var ae="MenuItem",Se="menu.itemSelect",ie=s.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:o,...a}=e,c=s.useRef(null),d=ee(ae,e.__scopeMenu),u=xe(ae,e.__scopeMenu),f=J(t,c),g=s.useRef(!1),p=()=>{const i=c.current;if(!n&&i){const m=new CustomEvent(Se,{bubbles:!0,cancelable:!0});i.addEventListener(Se,y=>o==null?void 0:o(y),{once:!0}),Gt(i,m),m.defaultPrevented?g.current=!1:d.onClose()}};return r.jsx(ut,{...a,ref:f,disabled:n,onClick:w(e.onClick,p),onPointerDown:i=>{var m;(m=e.onPointerDown)==null||m.call(e,i),g.current=!0},onPointerUp:w(e.onPointerUp,i=>{var m;g.current||(m=i.currentTarget)==null||m.click()}),onKeyDown:w(e.onKeyDown,i=>{const m=u.searchRef.current!=="";n||m&&i.key===" "||ge.includes(i.key)&&(i.currentTarget.click(),i.preventDefault())})})});ie.displayName=ae;var ut=s.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:o=!1,textValue:a,...c}=e,d=xe(ae,n),u=at(n),f=s.useRef(null),g=J(t,f),[p,i]=s.useState(!1),[m,y]=s.useState("");return s.useEffect(()=>{const v=f.current;v&&y((v.textContent??"").trim())},[c.children]),r.jsx(q.ItemSlot,{scope:n,disabled:o,textValue:a??m,children:r.jsx(tn,{asChild:!0,...u,focusable:!o,children:r.jsx(V.div,{role:"menuitem","data-highlighted":p?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,...c,ref:g,onPointerMove:w(e.onPointerMove,Z(v=>{o?d.onItemLeave(v):(d.onItemEnter(v),v.defaultPrevented||v.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:w(e.onPointerLeave,Z(v=>d.onItemLeave(v))),onFocus:w(e.onFocus,()=>i(!0)),onBlur:w(e.onBlur,()=>i(!1))})})})}),yn="MenuCheckboxItem",lt=s.forwardRef((e,t)=>{const{checked:n=!1,onCheckedChange:o,...a}=e;return r.jsx(wt,{scope:e.__scopeMenu,checked:n,children:r.jsx(ie,{role:"menuitemcheckbox","aria-checked":se(n)?"mixed":n,...a,ref:t,"data-state":Ie(n),onSelect:w(a.onSelect,()=>o==null?void 0:o(se(n)?!0:!n),{checkForDefaultPrevented:!1})})})});lt.displayName=yn;var pt="MenuRadioGroup",[Mn,bn]=N(pt,{value:void 0,onValueChange:()=>{}}),mt=s.forwardRef((e,t)=>{const{value:n,onValueChange:o,...a}=e,c=nt(o);return r.jsx(Mn,{scope:e.__scopeMenu,value:n,onValueChange:c,children:r.jsx(Me,{...a,ref:t})})});mt.displayName=pt;var ft="MenuRadioItem",gt=s.forwardRef((e,t)=>{const{value:n,...o}=e,a=bn(ft,e.__scopeMenu),c=n===a.value;return r.jsx(wt,{scope:e.__scopeMenu,checked:c,children:r.jsx(ie,{role:"menuitemradio","aria-checked":c,...o,ref:t,"data-state":Ie(c),onSelect:w(o.onSelect,()=>{var d;return(d=a.onValueChange)==null?void 0:d.call(a,n)},{checkForDefaultPrevented:!1})})})});gt.displayName=ft;var be="MenuItemIndicator",[wt,In]=N(be,{checked:!1}),vt=s.forwardRef((e,t)=>{const{__scopeMenu:n,forceMount:o,...a}=e,c=In(be,n);return r.jsx(ve,{present:o||se(c.checked)||c.checked===!0,children:r.jsx(V.span,{...a,ref:t,"data-state":Ie(c.checked)})})});vt.displayName=be;var Cn="MenuSeparator",ht=s.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return r.jsx(V.div,{role:"separator","aria-orientation":"horizontal",...o,ref:t})});ht.displayName=Cn;var _n="MenuArrow",xt=s.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e,a=ce(n);return r.jsx(en,{...a,...o,ref:t})});xt.displayName=_n;var Tn="MenuSub",[Lo,yt]=N(Tn),U="MenuSubTrigger",Mt=s.forwardRef((e,t)=>{const n=G(U,e.__scopeMenu),o=ee(U,e.__scopeMenu),a=yt(U,e.__scopeMenu),c=xe(U,e.__scopeMenu),d=s.useRef(null),{pointerGraceTimerRef:u,onPointerGraceIntentChange:f}=c,g={__scopeMenu:e.__scopeMenu},p=s.useCallback(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return s.useEffect(()=>p,[p]),s.useEffect(()=>{const i=u.current;return()=>{window.clearTimeout(i),f(null)}},[u,f]),r.jsx(he,{asChild:!0,...g,children:r.jsx(ut,{id:a.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":a.contentId,"data-state":Ct(n.open),...e,ref:Qe(t,a.onTriggerChange),onClick:i=>{var m;(m=e.onClick)==null||m.call(e,i),!(e.disabled||i.defaultPrevented)&&(i.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:w(e.onPointerMove,Z(i=>{c.onItemEnter(i),!i.defaultPrevented&&!e.disabled&&!n.open&&!d.current&&(c.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{n.onOpenChange(!0),p()},100))})),onPointerLeave:w(e.onPointerLeave,Z(i=>{var y,v;p();const m=(y=n.content)==null?void 0:y.getBoundingClientRect();if(m){const D=(v=n.content)==null?void 0:v.dataset.side,R=D==="right",h=R?-5:5,A=m[R?"left":"right"],k=m[R?"right":"left"];c.onPointerGraceIntentChange({area:[{x:i.clientX+h,y:i.clientY},{x:A,y:m.top},{x:k,y:m.top},{x:k,y:m.bottom},{x:A,y:m.bottom}],side:D}),window.clearTimeout(u.current),u.current=window.setTimeout(()=>c.onPointerGraceIntentChange(null),300)}else{if(c.onTriggerLeave(i),i.defaultPrevented)return;c.onPointerGraceIntentChange(null)}})),onKeyDown:w(e.onKeyDown,i=>{var y;const m=c.searchRef.current!=="";e.disabled||m&&i.key===" "||an[o.dir].includes(i.key)&&(n.onOpenChange(!0),(y=n.content)==null||y.focus(),i.preventDefault())})})})});Mt.displayName=U;var bt="MenuSubContent",It=s.forwardRef((e,t)=>{const n=ct(C,e.__scopeMenu),{forceMount:o=n.forceMount,...a}=e,c=G(C,e.__scopeMenu),d=ee(C,e.__scopeMenu),u=yt(bt,e.__scopeMenu),f=s.useRef(null),g=J(t,f);return r.jsx(q.Provider,{scope:e.__scopeMenu,children:r.jsx(ve,{present:o||c.open,children:r.jsx(q.Slot,{scope:e.__scopeMenu,children:r.jsx(ye,{id:u.contentId,"aria-labelledby":u.triggerId,...a,ref:g,align:"start",side:d.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:p=>{var i;d.isUsingKeyboardRef.current&&((i=f.current)==null||i.focus()),p.preventDefault()},onCloseAutoFocus:p=>p.preventDefault(),onFocusOutside:w(e.onFocusOutside,p=>{p.target!==u.trigger&&c.onOpenChange(!1)}),onEscapeKeyDown:w(e.onEscapeKeyDown,p=>{d.onClose(),p.preventDefault()}),onKeyDown:w(e.onKeyDown,p=>{var y;const i=p.currentTarget.contains(p.target),m=sn[d.dir].includes(p.key);i&&m&&(c.onOpenChange(!1),(y=u.trigger)==null||y.focus(),p.preventDefault())})})})})})});It.displayName=bt;function Ct(e){return e?"open":"closed"}function se(e){return e==="indeterminate"}function Ie(e){return se(e)?"indeterminate":e?"checked":"unchecked"}function Dn(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function Rn(e,t){return e.map((n,o)=>e[(t+o)%e.length])}function Bn(e,t,n){const a=t.length>1&&Array.from(t).every(g=>g===t[0])?t[0]:t,c=n?e.indexOf(n):-1;let d=Rn(e,Math.max(c,0));a.length===1&&(d=d.filter(g=>g!==n));const f=d.find(g=>g.toLowerCase().startsWith(a.toLowerCase()));return f!==n?f:void 0}function En(e,t){const{x:n,y:o}=e;let a=!1;for(let c=0,d=t.length-1;c<t.length;d=c++){const u=t[c],f=t[d],g=u.x,p=u.y,i=f.x,m=f.y;p>o!=m>o&&n<(i-g)*(o-p)/(m-p)+g&&(a=!a)}return a}function Sn(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return En(n,t)}function Z(e){return t=>t.pointerType==="mouse"?e(t):void 0}var jn=st,Pn=he,An=it,Nn=Me,kn=dt,On=ie,Fn=lt,Ln=mt,Vn=gt,Gn=vt,Kn=ht,Hn=xt,Un=Mt,$n=It,de="DropdownMenu",[Wn]=Je(de,[rt]),M=rt(),[Xn,_t]=Wn(de),Tt=e=>{const{__scopeDropdownMenu:t,children:n,dir:o,open:a,defaultOpen:c,onOpenChange:d,modal:u=!0}=e,f=M(t),g=s.useRef(null),[p,i]=Ht({prop:a,defaultProp:c??!1,onChange:d,caller:de});return r.jsx(Xn,{scope:t,triggerId:Ee(),triggerRef:g,contentId:Ee(),open:p,onOpenChange:i,onOpenToggle:s.useCallback(()=>i(m=>!m),[i]),modal:u,children:r.jsx(jn,{...f,open:p,onOpenChange:i,dir:o,modal:u,children:n})})};Tt.displayName=de;var Dt="DropdownMenuTrigger",Rt=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:o=!1,...a}=e,c=_t(Dt,n),d=M(n);return r.jsx(Pn,{asChild:!0,...d,children:r.jsx(V.button,{type:"button",id:c.triggerId,"aria-haspopup":"menu","aria-expanded":c.open,"aria-controls":c.open?c.contentId:void 0,"data-state":c.open?"open":"closed","data-disabled":o?"":void 0,disabled:o,...a,ref:Qe(t,c.triggerRef),onPointerDown:w(e.onPointerDown,u=>{!o&&u.button===0&&u.ctrlKey===!1&&(c.onOpenToggle(),c.open||u.preventDefault())}),onKeyDown:w(e.onKeyDown,u=>{o||(["Enter"," "].includes(u.key)&&c.onOpenToggle(),u.key==="ArrowDown"&&c.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})});Rt.displayName=Dt;var Bt="DropdownMenuContent",Et=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=_t(Bt,n),c=M(n),d=s.useRef(!1);return r.jsx(An,{id:a.contentId,"aria-labelledby":a.triggerId,...c,...o,ref:t,onCloseAutoFocus:w(e.onCloseAutoFocus,u=>{var f;d.current||(f=a.triggerRef.current)==null||f.focus(),d.current=!1,u.preventDefault()}),onInteractOutside:w(e.onInteractOutside,u=>{const f=u.detail.originalEvent,g=f.button===0&&f.ctrlKey===!0,p=f.button===2||g;(!a.modal||p)&&(d.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Et.displayName=Bt;var Yn="DropdownMenuGroup",zn=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(Nn,{...a,...o,ref:t})});zn.displayName=Yn;var qn="DropdownMenuLabel",Zn=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(kn,{...a,...o,ref:t})});Zn.displayName=qn;var Jn="DropdownMenuItem",St=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(On,{...a,...o,ref:t})});St.displayName=Jn;var Qn="DropdownMenuCheckboxItem",eo=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(Fn,{...a,...o,ref:t})});eo.displayName=Qn;var to="DropdownMenuRadioGroup",no=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(Ln,{...a,...o,ref:t})});no.displayName=to;var oo="DropdownMenuRadioItem",ro=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(Vn,{...a,...o,ref:t})});ro.displayName=oo;var ao="DropdownMenuItemIndicator",so=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(Gn,{...a,...o,ref:t})});so.displayName=ao;var co="DropdownMenuSeparator",jt=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(Kn,{...a,...o,ref:t})});jt.displayName=co;var io="DropdownMenuArrow",uo=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(Hn,{...a,...o,ref:t})});uo.displayName=io;var lo="DropdownMenuSubTrigger",po=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(Un,{...a,...o,ref:t})});po.displayName=lo;var mo="DropdownMenuSubContent",fo=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx($n,{...a,...o,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});fo.displayName=mo;var go=Tt,wo=Rt,vo=Et,ho=St,xo=jt;const T=({ref:e,items:t,children:n,className:o,showArrow:a,open:c,defaultOpen:d,onOpenChange:u,footerContent:f,headerContent:g,disabled:p,modal:i,...m})=>{const[y,v]=s.useState(c??d??!1);s.useEffect(()=>{c!==void 0&&v(c)},[c]);const D=s.useCallback(h=>{u?u(h):v(h)},[u]),R=s.useMemo(()=>{if(s.isValidElement(t))return t;if(Array.isArray(t))return t.map((h,A)=>r.jsxs(s.Fragment,{children:[r.jsxs(ho,{className:Be(h.className,"arm-dropdown-menu-item",h.onClick&&"arm-dropdown-menu-item-clickable"),disabled:h.disabled,"data-disabled":h.disabled,onSelect:h.onClick&&(k=>{var K;v(!1),(K=h.onClick)==null||K.call(h,A,k)}),children:[h.leftOverlay&&r.jsx("div",{className:"arm-dropdown-menu-item-left-overlay",children:h.leftOverlay}),h.label&&r.jsx("div",{className:"arm-dropdown-menu-item-label",children:h.label}),h.rightOverlay&&r.jsx("div",{className:"arm-dropdown-menu-item-right-overlay",children:h.rightOverlay})]}),h.addSeparatorUnder&&r.jsx(xo,{className:"arm-dropdown-menu-separator"})]},A));throw new Error("Invalid content passed to DropdownMenu. Must be an array of items or a single React element.")},[t]);return r.jsxs(go,{open:y,onOpenChange:D,defaultOpen:d,modal:i,children:[n&&r.jsx(wo,{asChild:!0,disabled:p,children:n}),r.jsxs(vo,{...m,"data-has-arrow":!!a,className:Be(o,"arm-dropdown-menu-content"),ref:e,children:[!f&&!g?R:r.jsxs(r.Fragment,{children:[g&&r.jsx("div",{className:"arm-dropdown-menu-header",children:g}),r.jsx("div",{className:"arm-dropdown-menu-items",children:R}),f&&r.jsx("div",{className:"arm-dropdown-menu-footer",children:f})]}),a&&r.jsx("div",{className:"arm-dropdown-menu-arrow","data-testid":"arm-dropdown-arrow"})]})]})};T.displayName="DropdownMenu";T.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}}};const we=re(),ue=[{label:"Item 1",onClick:we},{label:"Item 2 (not clickable)"},{label:"Item 3 disabled",disabled:!0,addSeparatorUnder:!0},{label:"Item 4",onClick:re()},{label:"Item 5 (left icon)",leftOverlay:r.jsx(Lt,{"data-testid":"user-icon"}),onClick:re()},{label:"Item 6 (right icon)",rightOverlay:r.jsx(Vt,{"data-testid":"check-icon"}),onClick:re()}],yo={title:"Components/DropdownMenu",component:T,parameters:{docs:{description:{component:"A simple menu that can be toggled open/closed with a trigger button"}}}},L={render:()=>r.jsx("div",{style:{height:"350px",display:"flex",flexDirection:"column",alignItems:"center"},children:r.jsx(T,{items:ue,"data-testid":"dropdown",children:r.jsx(P,{type:"button","data-testid":"button",children:"Toggle item list menu"})})}),play:async({canvasElement:e})=>{const t=I(e),n=t.getByTestId("button");S.click(n),await j(()=>x(t.getByTestId("dropdown")).toBeVisible());const o=t.getAllByRole("menuitem");x(o).toHaveLength(6),x(o[0]).toHaveTextContent("Item 1"),S.click(o[0]),await j(()=>x(we).toHaveBeenCalledTimes(1)),x(we).toHaveBeenCalledWith(0,x.anything()),x(o[2]).toHaveTextContent("Item 3 disabled"),x(o[2]).toHaveAttribute("data-disabled");const a=t.getAllByRole("separator");x(a).toHaveLength(1)}},$={render:()=>r.jsx("div",{style:{height:"350px",display:"flex",flexDirection:"column",alignItems:"center"},children:r.jsx(T,{items:ue,"data-testid":"dropdown",showArrow:!0,children:r.jsx(P,{type:"button","data-testid":"button",children:"Toggle with arrow"})})}),play:async({canvasElement:e})=>{const t=I(e),n=t.getByTestId("button");S.click(n),await j(()=>x(t.getByTestId("dropdown")).toBeVisible());const o=I(t.getByTestId("dropdown")).getByTestId("arm-dropdown-arrow");x(o).toBeVisible()}},W={render:()=>r.jsx("div",{style:{height:"400px",display:"flex",flexDirection:"column",alignItems:"center"},children:r.jsx(T,{items:ue,"data-testid":"dropdown",headerContent:r.jsx("div",{"data-testid":"header",style:{padding:"16px",textAlign:"center",fontSize:"14px",backgroundColor:"#e3e3e3"},children:"Header content"}),footerContent:r.jsx("div",{"data-testid":"footer",style:{padding:"16px",textAlign:"center",fontSize:"14px",backgroundColor:"#e3e3e3"},children:"Footer content"}),children:r.jsx(P,{type:"button","data-testid":"button",children:"Toggle with header/footer"})})}),play:async({canvasElement:e})=>{const t=I(e),n=t.getByTestId("button");S.click(n),await j(()=>x(t.getByTestId("dropdown")).toBeVisible());const o=I(t.getByTestId("dropdown")).getByTestId("header");x(o).toBeVisible();const a=I(t.getByTestId("dropdown")).getByTestId("footer");x(a).toBeVisible()}},X={render:()=>{const[e,t]=s.useState(!1);return r.jsxs("div",{style:{height:"350px",display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:[r.jsx(P,{type:"button","data-testid":"state-button",onClick:()=>t(!0),children:"Toggle from elsewhere"}),r.jsx(T,{items:ue,"data-testid":"dropdown",open:e,onOpenChange:t,children:r.jsx(P,{type:"button","data-testid":"trigger-button",onClick:()=>t(!0),children:"Trigger button"})})]})},play:async({canvasElement:e})=>{const t=I(e),n=t.getByTestId("state-button");S.click(n),await j(()=>x(t.getByTestId("dropdown")).toBeVisible())}},Y={render:()=>r.jsx("div",{style:{height:"350px",display:"flex",flexDirection:"column",alignItems:"center"},children:r.jsx(T,{items:r.jsx("div",{"data-testid":"custom-content",style:{height:"100px",display:"flex",alignItems:"center",justifyContent:"center"},children:"Some custom content"}),"data-testid":"dropdown",children:r.jsx(P,{type:"button","data-testid":"button",children:"Toggle custom content menu"})})}),play:async({canvasElement:e})=>{const t=I(e),n=t.getByTestId("button");S.click(n),await j(()=>x(t.getByTestId("dropdown")).toBeVisible());const o=I(t.getByTestId("dropdown")).getByTestId("custom-content");x(o).toBeVisible()}},z={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"16px"},children:[r.jsx(T,{items:r.jsx("div",{"data-testid":"item-1",children:"Item 1"}),"data-testid":"dropdown-1",modal:!1,children:r.jsx(P,{type:"button","data-testid":"button-1",children:"None Modal Dropdown"})}),r.jsx(T,{items:r.jsx("div",{"data-testid":"item-2",children:"Item 2"}),"data-testid":"dropdown-2",modal:!1,children:r.jsx(P,{type:"button","data-testid":"button-2",children:"Another None Modal Dropdown"})})]}),play:async({canvasElement:e})=>{const t=I(e),n=t.getByTestId("button-1");S.click(n),await j(()=>x(t.getByTestId("dropdown-1")).toBeVisible());const o=I(t.getByTestId("dropdown-1")).getByTestId("item-1");x(o).toBeVisible();const a=t.getByTestId("button-2");S.click(a),await j(()=>x(t.getByTestId("dropdown-2")).toBeVisible());const c=I(t.getByTestId("dropdown-2")).getByTestId("item-2");x(c).toBeVisible(),x(o).not.toBeVisible()}};var je,Pe,Ae,Ne,ke;L.parameters={...L.parameters,docs:{...(je=L.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
    await waitFor(() => expect(item1change).toHaveBeenCalledTimes(1));
    expect(item1change).toHaveBeenCalledWith(0, expect.anything());
    expect(menuItems[2]).toHaveTextContent('Item 3 disabled');
    expect(menuItems[2]).toHaveAttribute('data-disabled');
    const separator = canvas.getAllByRole('separator');
    expect(separator).toHaveLength(1);
  }
}`,...(Ae=(Pe=L.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source},description:{story:"stories",...(ke=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:ke.description}}};var Oe,Fe,Le;$.parameters={...$.parameters,docs:{...(Oe=$.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Le=(Fe=$.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source}}};var Ve,Ge,Ke;W.parameters={...W.parameters,docs:{...(Ve=W.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: '400px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
        <DropdownMenu items={items} data-testid="dropdown" headerContent={<div data-testid="header" style={{
        padding: '16px',
        textAlign: 'center',
        fontSize: '14px',
        backgroundColor: '#e3e3e3'
      }}>
              Header content
            </div>} footerContent={<div data-testid="footer" style={{
        padding: '16px',
        textAlign: 'center',
        fontSize: '14px',
        backgroundColor: '#e3e3e3'
      }}>
              Footer content
            </div>}>
          <Button type="button" data-testid="button">
            Toggle with header/footer
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
    const header = within(canvas.getByTestId('dropdown')).getByTestId('header');
    expect(header).toBeVisible();
    const footer = within(canvas.getByTestId('dropdown')).getByTestId('footer');
    expect(footer).toBeVisible();
  }
}`,...(Ke=(Ge=W.parameters)==null?void 0:Ge.docs)==null?void 0:Ke.source}}};var He,Ue,$e;X.parameters={...X.parameters,docs:{...(He=X.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...($e=(Ue=X.parameters)==null?void 0:Ue.docs)==null?void 0:$e.source}}};var We,Xe,Ye;Y.parameters={...Y.parameters,docs:{...(We=Y.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=Y.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var ze,qe,Ze;z.parameters={...z.parameters,docs:{...(ze=z.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '16px'
    }}>
        <DropdownMenu items={<div data-testid={'item-1'}>Item 1</div>} data-testid="dropdown-1" modal={false}>
          <Button type="button" data-testid="button-1">
            None Modal Dropdown
          </Button>
        </DropdownMenu>
        <DropdownMenu items={<div data-testid={'item-2'}>Item 2</div>} data-testid="dropdown-2" modal={false}>
          <Button type="button" data-testid="button-2">
            Another None Modal Dropdown
          </Button>
        </DropdownMenu>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton1 = canvas.getByTestId('button-1');
    userEvent.click(openButton1);
    await waitFor(() => expect(canvas.getByTestId('dropdown-1')).toBeVisible());
    const item1 = within(canvas.getByTestId('dropdown-1')).getByTestId('item-1');
    expect(item1).toBeVisible();
    const openButton2 = canvas.getByTestId('button-2');
    userEvent.click(openButton2);
    await waitFor(() => expect(canvas.getByTestId('dropdown-2')).toBeVisible());
    const item2 = within(canvas.getByTestId('dropdown-2')).getByTestId('item-2');
    expect(item2).toBeVisible();
    expect(item1).not.toBeVisible();
  }
}`,...(Ze=(qe=z.parameters)==null?void 0:qe.docs)==null?void 0:Ze.source}}};const Mo=["Default","WithArrow","WithHeaderAndFooter","StateDriven","CustomContent","NonModal"],Vo=Object.freeze(Object.defineProperty({__proto__:null,CustomContent:Y,Default:L,NonModal:z,StateDriven:X,WithArrow:$,WithHeaderAndFooter:W,__namedExportsOrder:Mo,default:yo},Symbol.toStringTag,{value:"Module"}));export{T as D,L as a,Vo as d};
