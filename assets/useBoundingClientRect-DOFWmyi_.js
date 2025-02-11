import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as i}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-DqFVvXTV.js";import{ae as s}from"./index-wECEJOws.js";import"./index-Cqyox1Tj.js";import"./iframe-dytDekFQ.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function o(n){const t={code:"code",h3:"h3",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Hooks/useBoundingClientRect"}),`
`,e.jsx(t.h3,{id:"useboundingclientrect",children:"useBoundingClientRect"}),`
`,e.jsx(t.p,{children:"Get the size of the element with the given ref - uses a resize observer, listens to scroll events, and listens to resize events"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const contentRef = React.useRef<HTMLDivElement>(null);

const [{ height, width, bottom, left, right, top, x, y }] = useBoundingClientRect(contentRef);

return <div ref={contentRef} />;
`})})]})}function g(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{g as default};
