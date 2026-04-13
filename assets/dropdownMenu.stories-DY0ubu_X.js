import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as Ee,w as I,u as S,a as j,e as x,f as ae}from"./index-BmZcwVSF.js";import{r as c,R as N}from"./index-DwQS_Y10.js";import{g as Vt,e as Gt}from"./config.context-D0elZNgh.js";import{b as w,P as G,c as Qe,e as Kt,a as Ht,d as Ut}from"./index-CWQsrU90.js";import{u as Q,c as et}from"./index-DKCiyFsV.js";import{c as $t}from"./index-Dp6IY7a_.js";import{u as Wt}from"./index-wJcBHZIT.js";import{D as Xt}from"./index-D-iaL4kR.js";import{h as Yt,u as zt,R as qt,F as Zt}from"./index-B2Q3jSsz.js";import{R as Jt,A as Qt,c as tt,C as en,a as tn}from"./index-DYVRbH_s.js";import{P as he}from"./index-CC-sFNo4.js";import{I as nn,c as nt,R as on}from"./index-Dv-BAVC1.js";import{u as ot}from"./index-Bgmmd5SI.js";import{u as Se}from"./index-hWMLfxWy.js";import{B as P}from"./button.component-Cl1KWafa.js";var we=["Enter"," "],rn=["ArrowDown","PageUp","Home"],rt=["ArrowUp","PageDown","End"],an=[...rn,...rt],sn={ltr:[...we,"ArrowRight"],rtl:[...we,"ArrowLeft"]},cn={ltr:["ArrowLeft"],rtl:["ArrowRight"]},ee="Menu",[Z,dn,un]=$t(ee),[k,at]=Qe(ee,[un,tt,nt]),ie=tt(),st=nt(),[ln,K]=k(ee),[pn,te]=k(ee),ct=e=>{const{__scopeMenu:t,open:n=!1,children:o,dir:a,onOpenChange:s,modal:d=!0}=e,u=ie(t),[f,g]=c.useState(null),p=c.useRef(!1),i=ot(s),m=Wt(a);return c.useEffect(()=>{const y=()=>{p.current=!0,document.addEventListener("pointerdown",v,{capture:!0,once:!0}),document.addEventListener("pointermove",v,{capture:!0,once:!0})},v=()=>p.current=!1;return document.addEventListener("keydown",y,{capture:!0}),()=>{document.removeEventListener("keydown",y,{capture:!0}),document.removeEventListener("pointerdown",v,{capture:!0}),document.removeEventListener("pointermove",v,{capture:!0})}},[]),r.jsx(Jt,{...u,children:r.jsx(ln,{scope:t,open:n,onOpenChange:i,content:f,onContentChange:g,children:r.jsx(pn,{scope:t,onClose:c.useCallback(()=>i(!1),[i]),isUsingKeyboardRef:p,dir:m,modal:d,children:o})})})};ct.displayName=ee;var mn="MenuAnchor",xe=c.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e,a=ie(n);return r.jsx(Qt,{...a,...o,ref:t})});xe.displayName=mn;var fn="MenuPortal",[Lo,it]=k(fn,{forceMount:void 0}),C="MenuContent",[gn,ye]=k(C),dt=c.forwardRef((e,t)=>{const n=it(C,e.__scopeMenu),{forceMount:o=n.forceMount,...a}=e,s=K(C,e.__scopeMenu),d=te(C,e.__scopeMenu);return r.jsx(Z.Provider,{scope:e.__scopeMenu,children:r.jsx(he,{present:o||s.open,children:r.jsx(Z.Slot,{scope:e.__scopeMenu,children:d.modal?r.jsx(wn,{...a,ref:t}):r.jsx(vn,{...a,ref:t})})})})}),wn=c.forwardRef((e,t)=>{const n=K(C,e.__scopeMenu),o=c.useRef(null),a=Q(t,o);return c.useEffect(()=>{const s=o.current;if(s)return Yt(s)},[]),r.jsx(Me,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:w(e.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),vn=c.forwardRef((e,t)=>{const n=K(C,e.__scopeMenu);return r.jsx(Me,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),hn=Ht("MenuContent.ScrollLock"),Me=c.forwardRef((e,t)=>{const{__scopeMenu:n,loop:o=!1,trapFocus:a,onOpenAutoFocus:s,onCloseAutoFocus:d,disableOutsidePointerEvents:u,onEntryFocus:f,onEscapeKeyDown:g,onPointerDownOutside:p,onFocusOutside:i,onInteractOutside:m,onDismiss:y,disableOutsideScroll:v,...R}=e,D=K(C,n),h=te(C,n),A=ie(n),O=st(n),H=dn(n),[At,_e]=c.useState(null),ne=c.useRef(null),Nt=Q(t,ne,D.onContentChange),oe=c.useRef(0),re=c.useRef(""),kt=c.useRef(0),pe=c.useRef(null),Te=c.useRef("right"),me=c.useRef(0),Ot=v?qt:c.Fragment,Ft=v?{as:hn,allowPinchZoom:!0}:void 0,Lt=l=>{var L,De;const b=re.current+l,_=H().filter(B=>!B.disabled),E=document.activeElement,fe=(L=_.find(B=>B.ref.current===E))==null?void 0:L.textValue,ge=_.map(B=>B.textValue),Re=En(ge,b,fe),U=(De=_.find(B=>B.textValue===Re))==null?void 0:De.ref.current;(function B(Be){re.current=Be,window.clearTimeout(oe.current),Be!==""&&(oe.current=window.setTimeout(()=>B(""),1e3))})(b),U&&setTimeout(()=>U.focus())};c.useEffect(()=>()=>window.clearTimeout(oe.current),[]),zt();const F=c.useCallback(l=>{var _,E;return Te.current===((_=pe.current)==null?void 0:_.side)&&jn(l,(E=pe.current)==null?void 0:E.area)},[]);return r.jsx(gn,{scope:n,searchRef:re,onItemEnter:c.useCallback(l=>{F(l)&&l.preventDefault()},[F]),onItemLeave:c.useCallback(l=>{var b;F(l)||((b=ne.current)==null||b.focus(),_e(null))},[F]),onTriggerLeave:c.useCallback(l=>{F(l)&&l.preventDefault()},[F]),pointerGraceTimerRef:kt,onPointerGraceIntentChange:c.useCallback(l=>{pe.current=l},[]),children:r.jsx(Ot,{...Ft,children:r.jsx(Zt,{asChild:!0,trapped:a,onMountAutoFocus:w(s,l=>{var b;l.preventDefault(),(b=ne.current)==null||b.focus({preventScroll:!0})}),onUnmountAutoFocus:d,children:r.jsx(Xt,{asChild:!0,disableOutsidePointerEvents:u,onEscapeKeyDown:g,onPointerDownOutside:p,onFocusOutside:i,onInteractOutside:m,onDismiss:y,children:r.jsx(on,{asChild:!0,...O,dir:h.dir,orientation:"vertical",loop:o,currentTabStopId:At,onCurrentTabStopIdChange:_e,onEntryFocus:w(f,l=>{h.isUsingKeyboardRef.current||l.preventDefault()}),preventScrollOnEntryFocus:!0,children:r.jsx(en,{role:"menu","aria-orientation":"vertical","data-state":_t(D.open),"data-radix-menu-content":"",dir:h.dir,...A,...R,ref:Nt,style:{outline:"none",...R.style},onKeyDown:w(R.onKeyDown,l=>{const _=l.target.closest("[data-radix-menu-content]")===l.currentTarget,E=l.ctrlKey||l.altKey||l.metaKey,fe=l.key.length===1;_&&(l.key==="Tab"&&l.preventDefault(),!E&&fe&&Lt(l.key));const ge=ne.current;if(l.target!==ge||!an.includes(l.key))return;l.preventDefault();const U=H().filter(L=>!L.disabled).map(L=>L.ref.current);rt.includes(l.key)&&U.reverse(),Dn(U)}),onBlur:w(e.onBlur,l=>{l.currentTarget.contains(l.target)||(window.clearTimeout(oe.current),re.current="")}),onPointerMove:w(e.onPointerMove,J(l=>{const b=l.target,_=me.current!==l.clientX;if(l.currentTarget.contains(b)&&_){const E=l.clientX>me.current?"right":"left";Te.current=E,me.current=l.clientX}}))})})})})})})});dt.displayName=C;var xn="MenuGroup",be=c.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return r.jsx(G.div,{role:"group",...o,ref:t})});be.displayName=xn;var yn="MenuLabel",ut=c.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return r.jsx(G.div,{...o,ref:t})});ut.displayName=yn;var se="MenuItem",je="menu.itemSelect",de=c.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:o,...a}=e,s=c.useRef(null),d=te(se,e.__scopeMenu),u=ye(se,e.__scopeMenu),f=Q(t,s),g=c.useRef(!1),p=()=>{const i=s.current;if(!n&&i){const m=new CustomEvent(je,{bubbles:!0,cancelable:!0});i.addEventListener(je,y=>o==null?void 0:o(y),{once:!0}),Kt(i,m),m.defaultPrevented?g.current=!1:d.onClose()}};return r.jsx(lt,{...a,ref:f,disabled:n,onClick:w(e.onClick,p),onPointerDown:i=>{var m;(m=e.onPointerDown)==null||m.call(e,i),g.current=!0},onPointerUp:w(e.onPointerUp,i=>{var m;g.current||(m=i.currentTarget)==null||m.click()}),onKeyDown:w(e.onKeyDown,i=>{const m=u.searchRef.current!=="";n||m&&i.key===" "||we.includes(i.key)&&(i.currentTarget.click(),i.preventDefault())})})});de.displayName=se;var lt=c.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:o=!1,textValue:a,...s}=e,d=ye(se,n),u=st(n),f=c.useRef(null),g=Q(t,f),[p,i]=c.useState(!1),[m,y]=c.useState("");return c.useEffect(()=>{const v=f.current;v&&y((v.textContent??"").trim())},[s.children]),r.jsx(Z.ItemSlot,{scope:n,disabled:o,textValue:a??m,children:r.jsx(nn,{asChild:!0,...u,focusable:!o,children:r.jsx(G.div,{role:"menuitem","data-highlighted":p?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,...s,ref:g,onPointerMove:w(e.onPointerMove,J(v=>{o?d.onItemLeave(v):(d.onItemEnter(v),v.defaultPrevented||v.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:w(e.onPointerLeave,J(v=>d.onItemLeave(v))),onFocus:w(e.onFocus,()=>i(!0)),onBlur:w(e.onBlur,()=>i(!1))})})})}),Mn="MenuCheckboxItem",pt=c.forwardRef((e,t)=>{const{checked:n=!1,onCheckedChange:o,...a}=e;return r.jsx(vt,{scope:e.__scopeMenu,checked:n,children:r.jsx(de,{role:"menuitemcheckbox","aria-checked":ce(n)?"mixed":n,...a,ref:t,"data-state":Ce(n),onSelect:w(a.onSelect,()=>o==null?void 0:o(ce(n)?!0:!n),{checkForDefaultPrevented:!1})})})});pt.displayName=Mn;var mt="MenuRadioGroup",[bn,In]=k(mt,{value:void 0,onValueChange:()=>{}}),ft=c.forwardRef((e,t)=>{const{value:n,onValueChange:o,...a}=e,s=ot(o);return r.jsx(bn,{scope:e.__scopeMenu,value:n,onValueChange:s,children:r.jsx(be,{...a,ref:t})})});ft.displayName=mt;var gt="MenuRadioItem",wt=c.forwardRef((e,t)=>{const{value:n,...o}=e,a=In(gt,e.__scopeMenu),s=n===a.value;return r.jsx(vt,{scope:e.__scopeMenu,checked:s,children:r.jsx(de,{role:"menuitemradio","aria-checked":s,...o,ref:t,"data-state":Ce(s),onSelect:w(o.onSelect,()=>{var d;return(d=a.onValueChange)==null?void 0:d.call(a,n)},{checkForDefaultPrevented:!1})})})});wt.displayName=gt;var Ie="MenuItemIndicator",[vt,Cn]=k(Ie,{checked:!1}),ht=c.forwardRef((e,t)=>{const{__scopeMenu:n,forceMount:o,...a}=e,s=Cn(Ie,n);return r.jsx(he,{present:o||ce(s.checked)||s.checked===!0,children:r.jsx(G.span,{...a,ref:t,"data-state":Ce(s.checked)})})});ht.displayName=Ie;var _n="MenuSeparator",xt=c.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return r.jsx(G.div,{role:"separator","aria-orientation":"horizontal",...o,ref:t})});xt.displayName=_n;var Tn="MenuArrow",yt=c.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e,a=ie(n);return r.jsx(tn,{...a,...o,ref:t})});yt.displayName=Tn;var Rn="MenuSub",[Vo,Mt]=k(Rn),$="MenuSubTrigger",bt=c.forwardRef((e,t)=>{const n=K($,e.__scopeMenu),o=te($,e.__scopeMenu),a=Mt($,e.__scopeMenu),s=ye($,e.__scopeMenu),d=c.useRef(null),{pointerGraceTimerRef:u,onPointerGraceIntentChange:f}=s,g={__scopeMenu:e.__scopeMenu},p=c.useCallback(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return c.useEffect(()=>p,[p]),c.useEffect(()=>{const i=u.current;return()=>{window.clearTimeout(i),f(null)}},[u,f]),r.jsx(xe,{asChild:!0,...g,children:r.jsx(lt,{id:a.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":a.contentId,"data-state":_t(n.open),...e,ref:et(t,a.onTriggerChange),onClick:i=>{var m;(m=e.onClick)==null||m.call(e,i),!(e.disabled||i.defaultPrevented)&&(i.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:w(e.onPointerMove,J(i=>{s.onItemEnter(i),!i.defaultPrevented&&!e.disabled&&!n.open&&!d.current&&(s.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{n.onOpenChange(!0),p()},100))})),onPointerLeave:w(e.onPointerLeave,J(i=>{var y,v;p();const m=(y=n.content)==null?void 0:y.getBoundingClientRect();if(m){const R=(v=n.content)==null?void 0:v.dataset.side,D=R==="right",h=D?-5:5,A=m[D?"left":"right"],O=m[D?"right":"left"];s.onPointerGraceIntentChange({area:[{x:i.clientX+h,y:i.clientY},{x:A,y:m.top},{x:O,y:m.top},{x:O,y:m.bottom},{x:A,y:m.bottom}],side:R}),window.clearTimeout(u.current),u.current=window.setTimeout(()=>s.onPointerGraceIntentChange(null),300)}else{if(s.onTriggerLeave(i),i.defaultPrevented)return;s.onPointerGraceIntentChange(null)}})),onKeyDown:w(e.onKeyDown,i=>{var y;const m=s.searchRef.current!=="";e.disabled||m&&i.key===" "||sn[o.dir].includes(i.key)&&(n.onOpenChange(!0),(y=n.content)==null||y.focus(),i.preventDefault())})})})});bt.displayName=$;var It="MenuSubContent",Ct=c.forwardRef((e,t)=>{const n=it(C,e.__scopeMenu),{forceMount:o=n.forceMount,...a}=e,s=K(C,e.__scopeMenu),d=te(C,e.__scopeMenu),u=Mt(It,e.__scopeMenu),f=c.useRef(null),g=Q(t,f);return r.jsx(Z.Provider,{scope:e.__scopeMenu,children:r.jsx(he,{present:o||s.open,children:r.jsx(Z.Slot,{scope:e.__scopeMenu,children:r.jsx(Me,{id:u.contentId,"aria-labelledby":u.triggerId,...a,ref:g,align:"start",side:d.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:p=>{var i;d.isUsingKeyboardRef.current&&((i=f.current)==null||i.focus()),p.preventDefault()},onCloseAutoFocus:p=>p.preventDefault(),onFocusOutside:w(e.onFocusOutside,p=>{p.target!==u.trigger&&s.onOpenChange(!1)}),onEscapeKeyDown:w(e.onEscapeKeyDown,p=>{d.onClose(),p.preventDefault()}),onKeyDown:w(e.onKeyDown,p=>{var y;const i=p.currentTarget.contains(p.target),m=cn[d.dir].includes(p.key);i&&m&&(s.onOpenChange(!1),(y=u.trigger)==null||y.focus(),p.preventDefault())})})})})})});Ct.displayName=It;function _t(e){return e?"open":"closed"}function ce(e){return e==="indeterminate"}function Ce(e){return ce(e)?"indeterminate":e?"checked":"unchecked"}function Dn(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function Bn(e,t){return e.map((n,o)=>e[(t+o)%e.length])}function En(e,t,n){const a=t.length>1&&Array.from(t).every(g=>g===t[0])?t[0]:t,s=n?e.indexOf(n):-1;let d=Bn(e,Math.max(s,0));a.length===1&&(d=d.filter(g=>g!==n));const f=d.find(g=>g.toLowerCase().startsWith(a.toLowerCase()));return f!==n?f:void 0}function Sn(e,t){const{x:n,y:o}=e;let a=!1;for(let s=0,d=t.length-1;s<t.length;d=s++){const u=t[s],f=t[d],g=u.x,p=u.y,i=f.x,m=f.y;p>o!=m>o&&n<(i-g)*(o-p)/(m-p)+g&&(a=!a)}return a}function jn(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return Sn(n,t)}function J(e){return t=>t.pointerType==="mouse"?e(t):void 0}var Pn=ct,An=xe,Nn=dt,kn=be,On=ut,Fn=de,Ln=pt,Vn=ft,Gn=wt,Kn=ht,Hn=xt,Un=yt,$n=bt,Wn=Ct,ue="DropdownMenu",[Xn]=Qe(ue,[at]),M=at(),[Yn,Tt]=Xn(ue),Rt=e=>{const{__scopeDropdownMenu:t,children:n,dir:o,open:a,defaultOpen:s,onOpenChange:d,modal:u=!0}=e,f=M(t),g=c.useRef(null),[p,i]=Ut({prop:a,defaultProp:s??!1,onChange:d,caller:ue});return r.jsx(Yn,{scope:t,triggerId:Se(),triggerRef:g,contentId:Se(),open:p,onOpenChange:i,onOpenToggle:c.useCallback(()=>i(m=>!m),[i]),modal:u,children:r.jsx(Pn,{...f,open:p,onOpenChange:i,dir:o,modal:u,children:n})})};Rt.displayName=ue;var Dt="DropdownMenuTrigger",Bt=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:o=!1,...a}=e,s=Tt(Dt,n),d=M(n);return r.jsx(An,{asChild:!0,...d,children:r.jsx(G.button,{type:"button",id:s.triggerId,"aria-haspopup":"menu","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":s.open?"open":"closed","data-disabled":o?"":void 0,disabled:o,...a,ref:et(t,s.triggerRef),onPointerDown:w(e.onPointerDown,u=>{!o&&u.button===0&&u.ctrlKey===!1&&(s.onOpenToggle(),s.open||u.preventDefault())}),onKeyDown:w(e.onKeyDown,u=>{o||(["Enter"," "].includes(u.key)&&s.onOpenToggle(),u.key==="ArrowDown"&&s.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})});Bt.displayName=Dt;var Et="DropdownMenuContent",St=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=Tt(Et,n),s=M(n),d=c.useRef(!1);return r.jsx(Nn,{id:a.contentId,"aria-labelledby":a.triggerId,...s,...o,ref:t,onCloseAutoFocus:w(e.onCloseAutoFocus,u=>{var f;d.current||(f=a.triggerRef.current)==null||f.focus(),d.current=!1,u.preventDefault()}),onInteractOutside:w(e.onInteractOutside,u=>{const f=u.detail.originalEvent,g=f.button===0&&f.ctrlKey===!0,p=f.button===2||g;(!a.modal||p)&&(d.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});St.displayName=Et;var zn="DropdownMenuGroup",qn=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(kn,{...a,...o,ref:t})});qn.displayName=zn;var Zn="DropdownMenuLabel",Jn=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(On,{...a,...o,ref:t})});Jn.displayName=Zn;var Qn="DropdownMenuItem",jt=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(Fn,{...a,...o,ref:t})});jt.displayName=Qn;var eo="DropdownMenuCheckboxItem",to=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(Ln,{...a,...o,ref:t})});to.displayName=eo;var no="DropdownMenuRadioGroup",oo=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(Vn,{...a,...o,ref:t})});oo.displayName=no;var ro="DropdownMenuRadioItem",ao=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(Gn,{...a,...o,ref:t})});ao.displayName=ro;var so="DropdownMenuItemIndicator",co=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(Kn,{...a,...o,ref:t})});co.displayName=so;var io="DropdownMenuSeparator",Pt=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(Hn,{...a,...o,ref:t})});Pt.displayName=io;var uo="DropdownMenuArrow",lo=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(Un,{...a,...o,ref:t})});lo.displayName=uo;var po="DropdownMenuSubTrigger",mo=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx($n,{...a,...o,ref:t})});mo.displayName=po;var fo="DropdownMenuSubContent",go=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=M(n);return r.jsx(Wn,{...a,...o,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});go.displayName=fo;var wo=Rt,vo=Bt,ho=St,xo=jt,yo=Pt;const T=({ref:e,items:t,children:n,className:o,showArrow:a,open:s,defaultOpen:d,onOpenChange:u,footerContent:f,headerContent:g,disabled:p,modal:i,...m})=>{const[y,v]=N.useState(s??d??!1);N.useEffect(()=>{s!==void 0&&v(s)},[s]);const R=N.useCallback(h=>{u?u(h):v(h)},[u]),D=N.useMemo(()=>{if(N.isValidElement(t))return t;if(Array.isArray(t))return t.map((h,A)=>r.jsxs(N.Fragment,{children:[r.jsxs(xo,{className:Ee(h.className,"arm-dropdown-menu-item",h.onClick&&"arm-dropdown-menu-item-clickable"),disabled:h.disabled,"data-disabled":h.disabled,onSelect:h.onClick&&(O=>{var H;v(!1),(H=h.onClick)==null||H.call(h,A,O)}),children:[h.leftOverlay&&r.jsx("div",{className:"arm-dropdown-menu-item-left-overlay",children:h.leftOverlay}),h.label&&r.jsx("div",{className:"arm-dropdown-menu-item-label",children:h.label}),h.rightOverlay&&r.jsx("div",{className:"arm-dropdown-menu-item-right-overlay",children:h.rightOverlay})]}),h.addSeparatorUnder&&r.jsx(yo,{className:"arm-dropdown-menu-separator"})]},A));throw new Error("Invalid content passed to DropdownMenu. Must be an array of items or a single React element.")},[t]);return r.jsxs(wo,{open:y,onOpenChange:R,defaultOpen:d,modal:i,children:[n&&r.jsx(vo,{asChild:!0,disabled:p,children:n}),r.jsxs(ho,{...m,"data-has-arrow":!!a,className:Ee(o,"arm-dropdown-menu-content"),ref:e,children:[!f&&!g?D:r.jsxs(r.Fragment,{children:[g&&r.jsx("div",{className:"arm-dropdown-menu-header",children:g}),r.jsx("div",{className:"arm-dropdown-menu-items",children:D}),f&&r.jsx("div",{className:"arm-dropdown-menu-footer",children:f})]}),a&&r.jsx("div",{className:"arm-dropdown-menu-arrow","data-testid":"arm-dropdown-arrow"})]})]})};T.displayName="DropdownMenu";T.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}}};const ve=ae(),le=[{label:"Item 1",onClick:ve},{label:"Item 2 (not clickable)"},{label:"Item 3 disabled",disabled:!0,addSeparatorUnder:!0},{label:"Item 4",onClick:ae()},{label:"Item 5 (left icon)",leftOverlay:r.jsx(Vt,{"data-testid":"user-icon"}),onClick:ae()},{label:"Item 6 (right icon)",rightOverlay:r.jsx(Gt,{"data-testid":"check-icon"}),onClick:ae()}],Mo={title:"Components/DropdownMenu",component:T,parameters:{docs:{description:{component:"A simple menu that can be toggled open/closed with a trigger button"}}}},V={render:()=>r.jsx("div",{style:{height:"350px",display:"flex",flexDirection:"column",alignItems:"center"},children:r.jsx(T,{items:le,"data-testid":"dropdown",children:r.jsx(P,{type:"button","data-testid":"button",children:"Toggle item list menu"})})}),play:async({canvasElement:e})=>{const t=I(e),n=t.getByTestId("button");S.click(n),await j(()=>x(t.getByTestId("dropdown")).toBeVisible());const o=t.getAllByRole("menuitem");x(o).toHaveLength(6),x(o[0]).toHaveTextContent("Item 1"),S.click(o[0]),await j(()=>x(ve).toHaveBeenCalledTimes(1)),x(ve).toHaveBeenCalledWith(0,x.anything()),x(o[2]).toHaveTextContent("Item 3 disabled"),x(o[2]).toHaveAttribute("data-disabled");const a=t.getAllByRole("separator");x(a).toHaveLength(1)}},W={render:()=>r.jsx("div",{style:{height:"350px",display:"flex",flexDirection:"column",alignItems:"center"},children:r.jsx(T,{items:le,"data-testid":"dropdown",showArrow:!0,children:r.jsx(P,{type:"button","data-testid":"button",children:"Toggle with arrow"})})}),play:async({canvasElement:e})=>{const t=I(e),n=t.getByTestId("button");S.click(n),await j(()=>x(t.getByTestId("dropdown")).toBeVisible());const o=I(t.getByTestId("dropdown")).getByTestId("arm-dropdown-arrow");x(o).toBeVisible()}},X={render:()=>r.jsx("div",{style:{height:"400px",display:"flex",flexDirection:"column",alignItems:"center"},children:r.jsx(T,{items:le,"data-testid":"dropdown",headerContent:r.jsx("div",{"data-testid":"header",style:{padding:"16px",textAlign:"center",fontSize:"14px",backgroundColor:"#e3e3e3"},children:"Header content"}),footerContent:r.jsx("div",{"data-testid":"footer",style:{padding:"16px",textAlign:"center",fontSize:"14px",backgroundColor:"#e3e3e3"},children:"Footer content"}),children:r.jsx(P,{type:"button","data-testid":"button",children:"Toggle with header/footer"})})}),play:async({canvasElement:e})=>{const t=I(e),n=t.getByTestId("button");S.click(n),await j(()=>x(t.getByTestId("dropdown")).toBeVisible());const o=I(t.getByTestId("dropdown")).getByTestId("header");x(o).toBeVisible();const a=I(t.getByTestId("dropdown")).getByTestId("footer");x(a).toBeVisible()}},Y={render:()=>{const[e,t]=N.useState(!1);return r.jsxs("div",{style:{height:"350px",display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:[r.jsx(P,{type:"button","data-testid":"state-button",onClick:()=>t(!0),children:"Toggle from elsewhere"}),r.jsx(T,{items:le,"data-testid":"dropdown",open:e,onOpenChange:t,children:r.jsx(P,{type:"button","data-testid":"trigger-button",onClick:()=>t(!0),children:"Trigger button"})})]})},play:async({canvasElement:e})=>{const t=I(e),n=t.getByTestId("state-button");S.click(n),await j(()=>x(t.getByTestId("dropdown")).toBeVisible())}},z={render:()=>r.jsx("div",{style:{height:"350px",display:"flex",flexDirection:"column",alignItems:"center"},children:r.jsx(T,{items:r.jsx("div",{"data-testid":"custom-content",style:{height:"100px",display:"flex",alignItems:"center",justifyContent:"center"},children:"Some custom content"}),"data-testid":"dropdown",children:r.jsx(P,{type:"button","data-testid":"button",children:"Toggle custom content menu"})})}),play:async({canvasElement:e})=>{const t=I(e),n=t.getByTestId("button");S.click(n),await j(()=>x(t.getByTestId("dropdown")).toBeVisible());const o=I(t.getByTestId("dropdown")).getByTestId("custom-content");x(o).toBeVisible()}},q={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"16px"},children:[r.jsx(T,{items:r.jsx("div",{"data-testid":"item-1",children:"Item 1"}),"data-testid":"dropdown-1",modal:!1,children:r.jsx(P,{type:"button","data-testid":"button-1",children:"None Modal Dropdown"})}),r.jsx(T,{items:r.jsx("div",{"data-testid":"item-2",children:"Item 2"}),"data-testid":"dropdown-2",modal:!1,children:r.jsx(P,{type:"button","data-testid":"button-2",children:"Another None Modal Dropdown"})})]}),play:async({canvasElement:e})=>{const t=I(e),n=t.getByTestId("button-1");S.click(n),await j(()=>x(t.getByTestId("dropdown-1")).toBeVisible());const o=I(t.getByTestId("dropdown-1")).getByTestId("item-1");x(o).toBeVisible();const a=t.getByTestId("button-2");S.click(a),await j(()=>x(t.getByTestId("dropdown-2")).toBeVisible());const s=I(t.getByTestId("dropdown-2")).getByTestId("item-2");x(s).toBeVisible(),x(o).not.toBeVisible()}};var Pe,Ae,Ne,ke,Oe;V.parameters={...V.parameters,docs:{...(Pe=V.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ne=(Ae=V.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source},description:{story:"stories",...(Oe=(ke=V.parameters)==null?void 0:ke.docs)==null?void 0:Oe.description}}};var Fe,Le,Ve;W.parameters={...W.parameters,docs:{...(Fe=W.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ve=(Le=W.parameters)==null?void 0:Le.docs)==null?void 0:Ve.source}}};var Ge,Ke,He;X.parameters={...X.parameters,docs:{...(Ge=X.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(He=(Ke=X.parameters)==null?void 0:Ke.docs)==null?void 0:He.source}}};var Ue,$e,We;Y.parameters={...Y.parameters,docs:{...(Ue=Y.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(We=($e=Y.parameters)==null?void 0:$e.docs)==null?void 0:We.source}}};var Xe,Ye,ze;z.parameters={...z.parameters,docs:{...(Xe=z.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(ze=(Ye=z.parameters)==null?void 0:Ye.docs)==null?void 0:ze.source}}};var qe,Ze,Je;q.parameters={...q.parameters,docs:{...(qe=q.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Je=(Ze=q.parameters)==null?void 0:Ze.docs)==null?void 0:Je.source}}};const bo=["Default","WithArrow","WithHeaderAndFooter","StateDriven","CustomContent","NonModal"],Go=Object.freeze(Object.defineProperty({__proto__:null,CustomContent:z,Default:V,NonModal:q,StateDriven:Y,WithArrow:W,WithHeaderAndFooter:X,__namedExportsOrder:bo,default:Mo},Symbol.toStringTag,{value:"Module"}));export{T as D,V as a,Go as d};
