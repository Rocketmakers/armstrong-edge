import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DVgGKjXv.js";import"./index-DQiRpXr8.js";import{ae as r}from"./index-DoXlP5Lm.js";import"./index-DwQS_Y10.js";import"./iframe-CJfsGlR5.js";import"../sb-preview/runtime.js";import"./client-BKcTqz1J.js";import"./index-Bls5tne7.js";import"./index-BY2j7gpI.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";function o(n){const t={code:"code",h3:"h3",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Hooks/useBoundingClientRect"}),`
`,e.jsx(t.h3,{id:"useboundingclientrect",children:"useBoundingClientRect"}),`
`,e.jsx(t.p,{children:"Get the size of the element with the given ref - uses a resize observer, listens to scroll events, and listens to resize events"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const contentRef = React.useRef<HTMLDivElement>(null);

const [{ height, width, bottom, left, right, top, x, y }] = useBoundingClientRect(contentRef);

return <div ref={contentRef} />;
`})})]})}function j(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{j as default};
