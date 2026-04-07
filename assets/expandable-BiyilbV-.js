import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as p}from"./index-DVgGKjXv.js";import{ae as s,af as r,ag as i}from"./index-C0Bv-37P.js";import"./blocks-DoBq5Quk.js";import{E as o,D as m}from"./expandable.stories-Dxik4BKn.js";import"./index-DwQS_Y10.js";import"./iframe-BFU3q-Hh.js";import"../sb-preview/runtime.js";import"./index-BY2j7gpI.js";import"./index-Bls5tne7.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./index-BmZcwVSF.js";import"./useDidUpdateEffect-DxNflIL8.js";import"./config.context-BKnTehkl.js";import"./button.component-XCqawbKw.js";import"./spinner.component-DY-93A6g.js";function a(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Components/Expandable",component:o}),`
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
