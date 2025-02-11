import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as t}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-DqFVvXTV.js";import{ae as s}from"./index-wECEJOws.js";import"./index-Cqyox1Tj.js";import"./iframe-dytDekFQ.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function r(n){const o={code:"code",h3:"h3",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Hooks/usePreviousValue"}),`
`,e.jsx(o.h3,{id:"usepreviousvalue",children:"usePreviousValue"}),`
`,e.jsx(o.p,{children:"Will return the previous value for an incoming prop or potential dependency for comparison"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`const previousValue = usePreviousValue(props.value);

React.useEffect(() => {
  if (previousValue != props.value) {
    // do something
  }
}, [previousValue, props.value]);
`})})]})}function h(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{h as default};
