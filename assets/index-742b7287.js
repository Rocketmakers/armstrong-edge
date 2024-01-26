import{_ as s}from"./uniq-d447bef6.js";import{r as n}from"./index-c4905b50.js";import{r as $}from"./index-07d1f67e.js";function m(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function u(...e){return r=>e.forEach(t=>m(t,r))}function N(...e){return n.useCallback(u(...e),e)}const p=n.forwardRef((e,r)=>{const{children:t,...c}=e,l=n.Children.toArray(t),o=l.find(E);if(o){const i=o.props.children,f=l.map(d=>d===o?n.Children.count(i)>1?n.Children.only(null):n.isValidElement(i)?i.props.children:null:d);return n.createElement(a,s({},c,{ref:r}),n.isValidElement(i)?n.cloneElement(i,void 0,f):null)}return n.createElement(a,s({},c,{ref:r}),t)});p.displayName="Slot";const a=n.forwardRef((e,r)=>{const{children:t,...c}=e;return n.isValidElement(t)?n.cloneElement(t,{...b(c,t.props),ref:r?u(r,t.ref):t.ref}):n.Children.count(t)>1?n.Children.only(null):null});a.displayName="SlotClone";const h=({children:e})=>n.createElement(n.Fragment,null,e);function E(e){return n.isValidElement(e)&&e.type===h}function b(e,r){const t={...r};for(const c in r){const l=e[c],o=r[c];/^on[A-Z]/.test(c)?l&&o?t[c]=(...f)=>{o(...f),l(...f)}:l&&(t[c]=l):c==="style"?t[c]={...l,...o}:c==="className"&&(t[c]=[l,o].filter(Boolean).join(" "))}return{...e,...t}}const y=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],S=y.reduce((e,r)=>{const t=n.forwardRef((c,l)=>{const{asChild:o,...i}=c,f=o?p:r;return n.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),n.createElement(f,s({},i,{ref:l}))});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function V(e,r){e&&$.flushSync(()=>e.dispatchEvent(r))}export{N as $,p as a,S as b,V as c,h as d};
