import{j as n}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as p}from"./index-BLKynSmM.js";import{ae as s,af as r,ag as i}from"./index-CjR57eXb.js";import"./blocks-C9_VSJSd.js";import{E as o,D as m}from"./expandable.stories-CMJP3a22.js";import"./index-Cqyox1Tj.js";import"./iframe-Dresth3c.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index-Dv9et24K.js";import"./useDidUpdateEffect-BZzz_2dE.js";import"./config.context-CQ8yCtG8.js";import"./button.component-BqSJDp5_.js";import"./spinner.component-RFiNSZIp.js";function a(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Components/Expandable",component:o}),`
`,n.jsx(e.h1,{id:"expandable",children:"Expandable"}),`
`,n.jsx(e.p,{children:"An expendable component that lets you collapse or display content."}),`
`,n.jsx(r,{of:m,layout:"centered",sourceState:"none"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const [isOpen, setIsOpen] = React.useState(false);

<Button onClick={() => setIsOpen(!isOpen)}>Toggle content</Button>
<Expandable isOpen={isOpen} data-testid="expandable">
  <div>
    Some inner content
  </div>
</Expandable>
`})}),`
`,n.jsx(e.h2,{id:"expandable-props",children:"Expandable Props"}),`
`,n.jsx(i,{of:o})]})}function S(t={}){const{wrapper:e}={...p(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{S as default};
