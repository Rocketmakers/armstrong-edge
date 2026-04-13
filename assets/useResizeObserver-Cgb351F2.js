import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-DVgGKjXv.js";import"./index-Cq3Rc422.js";import{ae as o}from"./index-BbZ_Hiba.js";import"./index-DwQS_Y10.js";import"./iframe-BpkiNJRp.js";import"../sb-preview/runtime.js";import"./client-BKcTqz1J.js";import"./index-Bls5tne7.js";import"./index-BY2j7gpI.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function s(n){const r={code:"code",h3:"h3",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Hooks/useResizeObserver"}),`
`,e.jsx(r.h3,{id:"useresizeobserver",children:"useResizeObserver"}),`
`,e.jsx(r.p,{children:"Use an resize observer to fire the passed callback - also cleans up on unmount. Can either be used by just passing in a ref, or by using the functions returned to observe and disconnect"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`const ref = React.useRef<HTMLDivElement>();

useResizeObserver(onIntersect, ResizeObserverOptions, ref);

return <div ref={ref} />;
`})})]})}function j(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{j as default};
