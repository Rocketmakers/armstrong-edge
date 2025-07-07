import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as r}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-UzLMooUb.js";import{ae as a}from"./index-DHsLBuvM.js";import"./index-Cqyox1Tj.js";import"./iframe-Cu9UudiL.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function t(o){const n={code:"code",h3:"h3",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Hooks/useCompareValues"}),`
`,e.jsx(n.h3,{id:"usecomparevalues",children:"useCompareValues"}),`
`,e.jsx(n.p,{children:"Compares an incoming prop or potential dependency to it's value on the previous render, useful for forming an effect trigger which runs when a value or reference changes"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const hasValueChanged = useCompareValues(props.value);

React.useEffect(() => {
  // trigger something based on the fact that a value has changed
}, [hasValueChanged]);
`})})]})}function x(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{x as default};
