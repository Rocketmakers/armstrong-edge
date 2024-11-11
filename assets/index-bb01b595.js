import{_ as S}from"./extends-98964cd2.js";import{r as t}from"./index-c4905b50.js";import{$ as k,a as K,b as $}from"./index-10b0f2c6.js";import{$ as B}from"./index-89a7c115.js";import{$ as Y,a as D}from"./index-47240d79.js";import{$ as V}from"./index-97ba0010.js";import{$ as z}from"./index-1927a3af.js";import{$ as H}from"./index-5277ee67.js";const x="rovingFocusGroup.onEntryFocus",j={bubbles:!1,cancelable:!0},_="RovingFocusGroup",[C,P,q]=B(_),[J,pe]=V(_,[q]),[Q,W]=J(_),X=t.forwardRef((e,o)=>t.createElement(C.Provider,{scope:e.__scopeRovingFocusGroup},t.createElement(C.Slot,{scope:e.__scopeRovingFocusGroup},t.createElement(Z,S({},e,{ref:o}))))),Z=t.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:c,orientation:r,loop:v=!1,dir:I,currentTabStopId:F,defaultCurrentTabStopId:g,onCurrentTabStopIdChange:i,onEntryFocus:s,...E}=e,l=t.useRef(null),p=Y(o,l),m=H(I),[f=null,u]=k({prop:F,defaultProp:g,onChange:i}),[R,a]=t.useState(!1),d=K(s),y=P(c),T=t.useRef(!1),[O,A]=t.useState(0);return t.useEffect(()=>{const n=l.current;if(n)return n.addEventListener(x,d),()=>n.removeEventListener(x,d)},[d]),t.createElement(Q,{scope:c,orientation:r,dir:m,loop:v,currentTabStopId:f,onItemFocus:t.useCallback(n=>u(n),[u]),onItemShiftTab:t.useCallback(()=>a(!0),[]),onFocusableItemAdd:t.useCallback(()=>A(n=>n+1),[]),onFocusableItemRemove:t.useCallback(()=>A(n=>n-1),[])},t.createElement(D.div,S({tabIndex:R||O===0?-1:0,"data-orientation":r},E,{ref:p,style:{outline:"none",...e.style},onMouseDown:$(e.onMouseDown,()=>{T.current=!0}),onFocus:$(e.onFocus,n=>{const N=!T.current;if(n.target===n.currentTarget&&N&&!R){const h=new CustomEvent(x,j);if(n.currentTarget.dispatchEvent(h),!h.defaultPrevented){const w=y().filter(b=>b.focusable),M=w.find(b=>b.active),L=w.find(b=>b.id===f),U=[M,L,...w].filter(Boolean).map(b=>b.ref.current);G(U)}}T.current=!1}),onBlur:$(e.onBlur,()=>a(!1))})))}),ee="RovingFocusGroupItem",te=t.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:c,focusable:r=!0,active:v=!1,tabStopId:I,...F}=e,g=z(),i=I||g,s=W(ee,c),E=s.currentTabStopId===i,l=P(c),{onFocusableItemAdd:p,onFocusableItemRemove:m}=s;return t.useEffect(()=>{if(r)return p(),()=>m()},[r,p,m]),t.createElement(C.ItemSlot,{scope:c,id:i,focusable:r,active:v},t.createElement(D.span,S({tabIndex:E?0:-1,"data-orientation":s.orientation},F,{ref:o,onMouseDown:$(e.onMouseDown,f=>{r?s.onItemFocus(i):f.preventDefault()}),onFocus:$(e.onFocus,()=>s.onItemFocus(i)),onKeyDown:$(e.onKeyDown,f=>{if(f.key==="Tab"&&f.shiftKey){s.onItemShiftTab();return}if(f.target!==f.currentTarget)return;const u=ne(f,s.orientation,s.dir);if(u!==void 0){f.preventDefault();let a=l().filter(d=>d.focusable).map(d=>d.ref.current);if(u==="last")a.reverse();else if(u==="prev"||u==="next"){u==="prev"&&a.reverse();const d=a.indexOf(f.currentTarget);a=s.loop?ce(a,d+1):a.slice(d+1)}setTimeout(()=>G(a))}})})))}),oe={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function re(e,o){return o!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function ne(e,o,c){const r=re(e.key,c);if(!(o==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(o==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return oe[r]}function G(e){const o=document.activeElement;for(const c of e)if(c===o||(c.focus(),document.activeElement!==o))return}function ce(e,o){return e.map((c,r)=>e[(o+r)%e.length])}const me=X,ve=te;export{pe as $,me as a,ve as b};
