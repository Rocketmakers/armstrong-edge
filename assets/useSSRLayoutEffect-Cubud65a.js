import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as s}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-k040cQL7.js";import{ae as r}from"./index-DBy7xP5v.js";import"./index-Cqyox1Tj.js";import"./iframe-CA4J50BD.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function o(n){const t={code:"code",h3:"h3",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Hooks/useSSRLayoutEffect"}),`
`,e.jsx(t.h3,{id:"usessrlayouteffect",children:"useSSRLayoutEffect"}),`
`,e.jsxs(t.p,{children:["A version of React's ",e.jsx(t.code,{children:"useLayoutEffect"})," that falls back to a ",e.jsx(t.code,{children:"useEffect"})," on the server. The code in the effect won't run on the server so watch out for that, but it will at least supress the warning."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`useSSRLayoutEffect(() => {
  // do something that needs a layout effect on the client but doesn't need to run on the server.
}, []);
`})}),`
`,e.jsx(t.h3,{id:"usedidupdatessrlayouteffect",children:"useDidUpdateSSRLayoutEffect"}),`
`,e.jsxs(t.p,{children:[`A "did update" version of React's `,e.jsx(t.code,{children:"useLayoutEffect"})," that falls back to a ",e.jsx(t.code,{children:"useEffect"})," on the server. The code in the effect won't run on the server so watch out for that, but it will at least supress the warning. This won't run on first render on the client."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`useDidUpdateSSRLayoutEffect(() => {
  // do something that needs a layout effect on the client, doesn't need to run on the server, and shouldn't run first render.
}, []);
`})})]})}function j(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{j as default};
