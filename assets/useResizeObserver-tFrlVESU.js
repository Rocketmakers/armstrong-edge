import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as t}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-DGdAXOum.js";import{ae as o}from"./index-DEOfttk_.js";import"./index-Cqyox1Tj.js";import"./iframe-Do_ZG48p.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function s(r){const n={code:"code",h3:"h3",p:"p",pre:"pre",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Hooks/useResizeObserver"}),`
`,e.jsx(n.h3,{id:"useresizeobserver",children:"useResizeObserver"}),`
`,e.jsx(n.p,{children:"Use an resize observer to fire the passed callback - also cleans up on unmount. Can either be used by just passing in a ref, or by using the functions returned to observe and disconnect"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const ref = React.useRef<HTMLDivElement>();

useResizeObserver(onIntersect, ResizeObserverOptions, ref);

return <div ref={ref} />;
`})})]})}function b(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{b as default};
