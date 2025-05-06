import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as d}from"./index-BLKynSmM.js";import{ae as a,af as s,ag as l}from"./index-DLyS-qDb.js";import"./blocks-K5EwK_fY.js";import{C as i,D as o,W as c,S as p,a as h,V as x}from"./codeInput.stories-m7B8zv7i.js";import"./index-Cqyox1Tj.js";import"./iframe-CyAbz7l2.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index-Dv9et24K.js";import"./useDidUpdateEffect-igSykUWQ.js";import"./config.context-B61qZkrf.js";import"./label.component-Daqf1tyH.js";import"./extends-CF3RwP-h.js";import"./statusWrapper.component-DucYgjxK.js";import"./spinner.component-Bc6RftQo.js";import"./input.component-CT4O1P-t.js";import"./inputWrapper.component-DM_jSE10.js";import"./validationErrors.component-CHN68oNP.js";import"./radixDialog-CBrwtQa5.js";function t(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/Code Input",component:i}),`
`,e.jsx(n.h1,{id:"code-input",children:"Code input"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"CodeInput"})," is a text input where the value is split between multiple inputs, where focus is automatically moved between them as the user edits."]}),`
`,e.jsx(s,{of:o,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useForm, Button } from '@rocketmakers/armstrong';

const { formProp } = useForm({ code: '' });

<CodeInput bind={formProp('code').bind()} parts={[1, 1, 1]} />;
<p>Value: {formState?.code}</p>;
`})}),`
`,e.jsx(n.h2,{id:"code-input-props",children:"Code input Props"}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#basic",children:"Basic example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#text-between-and-sizes",children:"With text between or different size inputs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#displaySize",children:e.jsx(n.code,{children:"displaySize"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overlay",children:e.jsx(n.code,{children:"overlay"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#validationError",children:e.jsx(n.code,{children:"validationError"})})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"basic-example",children:e.jsx("a",{name:"basic",children:"Basic example"})}),`
`,e.jsx(s,{of:o,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { formProp, formState } = useForm({ code: '' });

<CodeInput bind={formProp('code').bind()} parts={[1, 1, 1]} />;
<p>Value: {formState?.code}</p>;
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"bind"})," prop is used for binding to an Armstrong form binder (see forms documentation)."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"parts"})," prop represents the length of the input. In this example, the ",e.jsx(n.code,{children:"CodeInput"})," is made of three parts containing one character each."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"with-text-between-or-different-size-inputs",children:e.jsx("a",{name:"text-between-and-sizes",children:"With text between or different size inputs"})}),`
`,e.jsx(s,{of:c,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<CodeInput bind={formProp('code').bind()} parts={[4, '-', 4, '-', 4]} />
`})}),`
`,e.jsxs(n.p,{children:["In this example the ",e.jsx(n.code,{children:"parts"})," prop includes strings representing a piece of text in-between inputs, and each input accepts 2 characters."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"displaysize",children:e.jsx("a",{name:"displaySize",children:e.jsx(n.code,{children:"displaySize"})})}),`
`,e.jsx(s,{of:p,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<CodeInput bind={formProp('code').bind()} parts={[1, 1, 1]} displaySize="small" />
`})}),`
`,e.jsx(n.p,{children:"Size options:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"small"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"medium"})," (default)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"large"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"custom-<string>"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"overlay",children:e.jsx("a",{name:"overlay",children:e.jsx(n.code,{children:"overlay"})})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"leftOverlay"})," and ",e.jsx(n.code,{children:"rightOverlay"})," as props add overlays on the sides of the ",e.jsx(n.code,{children:"CodeInput"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"leftOverlay"})," and ",e.jsx(n.code,{children:"rightOverlay"})," inside the ",e.jsx(n.code,{children:"parts"})," props adds overlays to the part itself."]}),`
`,e.jsx(s,{of:h,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<CodeInput
  bind={formProp('code').bind()}
  parts={[
    1,
    {
      length: 1,
      rightOverlay: '+',
      leftOverlay: '+',
    },
    ,
    1,
  ]}
  rightOverlay="+"
/>
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"validationerror",children:e.jsx("a",{name:"validationError",children:e.jsx(n.code,{children:"validationError"})})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"label"})," prop displays a ",e.jsx(n.code,{children:"<label>"})," on top of the component."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"required"})," prop displays a required indicator at the end of the label."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"validationErrorMessages"})," takes an array of error messages to display on validation error."]}),`
`,e.jsx(s,{of:x,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<CodeInput
  bind={formProp('code').bind()}
  label="Code input"
  parts={[2, '-', 2, '-', 2]}
  validationErrorMessages={['Input is invalid']}
  required={true}
/>
`})})]})}function V(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{V as default};
