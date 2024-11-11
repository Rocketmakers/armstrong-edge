import{_ as x}from"./extends-98964cd2.js";import{r as e}from"./index-c4905b50.js";import{b as h,a as C}from"./index-10b0f2c6.js";import{$ as T,a as L,b as z}from"./index-47240d79.js";import{$ as A}from"./index-e5e547b3.js";const p="dismissableLayer.update",N="dismissableLayer.pointerDownOutside",H="dismissableLayer.focusOutside";let g;const R=e.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),K=e.forwardRef((o,n)=>{var r;const{disableOutsidePointerEvents:i=!1,onEscapeKeyDown:s,onPointerDownOutside:a,onFocusOutside:b,onInteractOutside:u,onDismiss:l,...v}=o,c=e.useContext(R),[d,I]=e.useState(null),f=(r=d==null?void 0:d.ownerDocument)!==null&&r!==void 0?r:globalThis==null?void 0:globalThis.document,[,W]=e.useState({}),B=T(n,t=>I(t)),y=Array.from(c.layers),[S]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),_=y.indexOf(S),m=d?y.indexOf(d):-1,U=c.layersWithOutsidePointerEventsDisabled.size>0,O=m>=_,k=j(t=>{const $=t.target,P=[...c.branches].some(E=>E.contains($));!O||P||(a==null||a(t),u==null||u(t),t.defaultPrevented||l==null||l())},f),D=q(t=>{const $=t.target;[...c.branches].some(E=>E.contains($))||(b==null||b(t),u==null||u(t),t.defaultPrevented||l==null||l())},f);return A(t=>{m===c.layers.size-1&&(s==null||s(t),!t.defaultPrevented&&l&&(t.preventDefault(),l()))},f),e.useEffect(()=>{if(d)return i&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(g=f.body.style.pointerEvents,f.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(d)),c.layers.add(d),w(),()=>{i&&c.layersWithOutsidePointerEventsDisabled.size===1&&(f.body.style.pointerEvents=g)}},[d,f,i,c]),e.useEffect(()=>()=>{d&&(c.layers.delete(d),c.layersWithOutsidePointerEventsDisabled.delete(d),w())},[d,c]),e.useEffect(()=>{const t=()=>W({});return document.addEventListener(p,t),()=>document.removeEventListener(p,t)},[]),e.createElement(L.div,x({},v,{ref:B,style:{pointerEvents:U?O?"auto":"none":void 0,...o.style},onFocusCapture:h(o.onFocusCapture,D.onFocusCapture),onBlurCapture:h(o.onBlurCapture,D.onBlurCapture),onPointerDownCapture:h(o.onPointerDownCapture,k.onPointerDownCapture)}))}),X=e.forwardRef((o,n)=>{const r=e.useContext(R),i=e.useRef(null),s=T(n,i);return e.useEffect(()=>{const a=i.current;if(a)return r.branches.add(a),()=>{r.branches.delete(a)}},[r.branches]),e.createElement(L.div,x({},o,{ref:s}))});function j(o,n=globalThis==null?void 0:globalThis.document){const r=C(o),i=e.useRef(!1),s=e.useRef(()=>{});return e.useEffect(()=>{const a=u=>{if(u.target&&!i.current){let v=function(){F(N,r,l,{discrete:!0})};const l={originalEvent:u};u.pointerType==="touch"?(n.removeEventListener("click",s.current),s.current=v,n.addEventListener("click",s.current,{once:!0})):v()}i.current=!1},b=window.setTimeout(()=>{n.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(b),n.removeEventListener("pointerdown",a),n.removeEventListener("click",s.current)}},[n,r]),{onPointerDownCapture:()=>i.current=!0}}function q(o,n=globalThis==null?void 0:globalThis.document){const r=C(o),i=e.useRef(!1);return e.useEffect(()=>{const s=a=>{a.target&&!i.current&&F(H,r,{originalEvent:a},{discrete:!1})};return n.addEventListener("focusin",s),()=>n.removeEventListener("focusin",s)},[n,r]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function w(){const o=new CustomEvent(p);document.dispatchEvent(o)}function F(o,n,r,{discrete:i}){const s=r.originalEvent.target,a=new CustomEvent(o,{bubbles:!1,cancelable:!0,detail:r});n&&s.addEventListener(o,n,{once:!0}),i?z(s,a):s.dispatchEvent(a)}const Y=K,Z=X;export{Y as $,Z as a,K as b};
