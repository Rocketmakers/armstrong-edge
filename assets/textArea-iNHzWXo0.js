import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as d}from"./index-BLKynSmM.js";import{ae as t,af as r,ag as o}from"./index-DHsLBuvM.js";import"./blocks-Crah3fyZ.js";import{T as s,D as i,L as c,S as x,P as h,B as p,V as j}from"./textArea.stories-BDZEMHE1.js";import"./index-Cqyox1Tj.js";import"./iframe-Cu9UudiL.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index-Dv9et24K.js";import"./inputWrapper.component-DM_jSE10.js";import"./statusWrapper.component-DucYgjxK.js";import"./spinner.component-Bc6RftQo.js";import"./config.context-B61qZkrf.js";import"./label.component-Daqf1tyH.js";import"./useDidUpdateEffect-igSykUWQ.js";import"./extends-CF3RwP-h.js";import"./validationErrors.component-CHN68oNP.js";import"./radixDialog-CBrwtQa5.js";function l(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Components/TextArea",component:s}),`
`,e.jsx(n.h1,{id:"textarea",children:"TextArea"}),`
`,e.jsx(n.p,{children:"A textarea component that captures multi-line input."}),`
`,e.jsx(r,{of:i,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TextArea } from '@rocketmakers/armstrong';

<TextArea />;
`})}),`
`,e.jsx(n.h2,{id:"text-area-props",children:"Text Area props"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#basic",children:"Basic TextArea example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#label-placeholder",children:"Label and placeholder example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#displaySize",children:e.jsx(n.code,{children:"displaySize"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#pending",children:e.jsx(n.code,{children:"pending"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#delay",children:e.jsx(n.code,{children:"delay"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#validationErrorMessages",children:e.jsx(n.code,{children:"validationErrorMessages"})})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"basic-textarea-example",children:e.jsx("a",{name:"basic",children:"Basic TextArea example"})}),`
`,e.jsx(r,{of:i,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TextArea />
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"label-and-placeholder",children:e.jsx("a",{name:"label-placeholder",children:"Label and placeholder"})}),`
`,e.jsx(r,{of:c,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TextArea label="Please write below" placeholder="Placeholder content 🚀" required />
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"displaysize",children:e.jsx("a",{name:"displaySize",children:e.jsx(n.code,{children:"displaySize"})})}),`
`,e.jsx(r,{of:x,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TextArea placeholder="Enter text here..." label="large" displaySize="large" />
`})}),`
`,e.jsx(n.p,{children:"Sizes available:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"small"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"medium"})," (default)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"large"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"custom-<string>"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"pending",children:e.jsx("a",{name:"pending",children:e.jsx(n.code,{children:"pending"})})}),`
`,e.jsx(r,{of:h,layout:"centered",sourceState:"none"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"pending"})," is ",e.jsx(n.code,{children:"true"}),", the text area is disabled and a spinner is displayed."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// pending textArea
<TextArea label="Text Area Label" pending={true} />

// disabled textArea
<TextArea disabled />
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"delay",children:e.jsx("a",{name:"delay",children:e.jsx(n.code,{children:"delay"})})}),`
`,e.jsx(r,{of:p,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { formProp, formState } = useForm({ text: '', debounce: '' });

<TextArea bind={formProp('text').bind()} label="Bound text area" />
<p>Value: {formState?.text}</p>
<TextArea bind={formProp('debounce').bind()} label="Bound debounce text area (400ms)" delay={400} />
<>Value: {formState?.debounce}</p>
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"bind"})," prop is used for binding to an Armstrong form binder (see forms documentation)."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"delay"})," prop is the time in ms to delay the debounce or throttle effect."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"validationerrormessages",children:e.jsx("a",{name:"validationErrorMessages",children:e.jsx(n.code,{children:"validationErrorMessages"})})}),`
`,e.jsx(r,{of:j,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TextArea
  label="Text Area Label"
  placeholder="Enter text here..."
  validationErrorMessages={['This field is required']}
  required
/>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"validationErrorMessages"})," are the validation errors from the binder concatenated with manually passed in errors."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"required"})," prop displays a required indicator at the end of the label."]})]})}function X(a={}){const{wrapper:n}={...d(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(l,{...a})}):l(a)}export{X as default};
