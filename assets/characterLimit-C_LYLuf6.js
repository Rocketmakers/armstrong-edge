import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-DVgGKjXv.js";import{ae as s,af as e,ag as c}from"./index-DoXlP5Lm.js";import"./blocks-Dl3A-eXH.js";import{C as t,D as d,I as h,a as l}from"./characterLimit.stories-D0v8otaW.js";import"./index-DwQS_Y10.js";import"./iframe-CJfsGlR5.js";import"../sb-preview/runtime.js";import"./index-BY2j7gpI.js";import"./index-Bls5tne7.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./index-BmZcwVSF.js";import"./config.context-Db4Op3G9.js";import"./label.component-DRWWDUYP.js";import"./useDidUpdateEffect-Dtjk5cbT.js";import"./index-n_XmvDeM.js";import"./index-DKCiyFsV.js";import"./input.component-BYPt_Hb7.js";import"./inputWrapper.component-DeBVb2xf.js";import"./statusWrapper.component-C9Y4RJki.js";import"./spinner.component-C8cBclXj.js";import"./validationErrors.component-Cn_dkfWO.js";import"./radixDialog-CBrwtQa5.js";function o(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...r.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{title:"Components/Character Limit",component:t}),`
`,i.jsx(n.h1,{id:"character-limit",children:"Character limit"}),`
`,i.jsx(n.p,{children:"Shows a character limit that binds with it's associated input."}),`
`,i.jsx(e,{of:d,layout:"centered",sourceState:"none"}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`const formData: IFormData = { thing: '' };
const { formProp } = useForm(formData);

<Input bind={formProp('thing').bind()} />
<CharacterLimit bind={formProp('thing').bind()} limit="10" />
`})}),`
`,i.jsx(n.h2,{id:"character-limit-props",children:"Character limit Props"}),`
`,i.jsx(c,{of:t}),`
`,i.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:i.jsx(n.a,{href:"#limit",children:i.jsx(n.code,{children:"limit"})})}),`
`,i.jsx(n.li,{children:i.jsx(n.a,{href:"#overlay",children:i.jsx(n.code,{children:"overlay"})})}),`
`,i.jsx(n.li,{children:i.jsx(n.a,{href:"#validationErrorIcon",children:i.jsx(n.code,{children:"validationErrorIcon"})})}),`
`]}),`
`,i.jsx("br",{}),`
`,i.jsx(n.h3,{id:"limit",children:i.jsx("a",{name:"limit",children:i.jsx(n.code,{children:"limit"})})}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`<Input bind={formProp('thing').bind()} />
<CharacterLimit bind={formProp('thing').bind()} limit="10" />
`})}),`
`,i.jsxs(n.p,{children:["The ",i.jsx(n.code,{children:"bind"})," prop is used for binding to an Armstrong form binder (see forms documentation)."]}),`
`,i.jsxs(n.p,{children:["The ",i.jsx(n.code,{children:"limit"})," prop shows a character limit."]}),`
`,i.jsx("br",{}),`
`,i.jsx(n.h3,{id:"overlay",children:i.jsx("a",{name:"overlay",children:i.jsx(n.code,{children:"overlay"})})}),`
`,i.jsxs(n.p,{children:["The ",i.jsx(n.code,{children:"CharacterLimit"})," component offers the option to move the character limit inside the input as an overlay."]}),`
`,i.jsx(e,{of:h,layout:"centered",sourceState:"none"}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`<Input bind={formProp('thing').bind()} rightOverlay={<CharacterLimit bind={formProp('thing').bind()} limit="10" />} />
`})}),`
`,i.jsxs(n.p,{children:[i.jsx(n.code,{children:"leftOverlay"})," and ",i.jsx(n.code,{children:"rightOverlay"})," add overlays on the sides of certain components. It can be used to display the character limit inside of an input."]}),`
`,i.jsx("br",{}),`
`,i.jsx(n.h3,{id:"validationerroricon",children:i.jsx("a",{name:"validationErrorIcon",children:i.jsx(n.code,{children:"validationErrorIcon"})})}),`
`,i.jsxs(n.p,{children:["Adds a custom icon to the ",i.jsx(n.code,{children:"CharacterLimit"})," when the number of characters typed in the input is greater than the limit."]}),`
`,i.jsx(e,{of:l,layout:"centered",sourceState:"none"}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`<Input bind={formProp('thing').bind()} />
<CharacterLimit bind={formProp('thing').bind()} limit="10" validationErrorIcon={<Icon />} />
`})})]})}function X(r={}){const{wrapper:n}={...a(),...r.components};return n?i.jsx(n,{...r,children:i.jsx(o,{...r})}):o(r)}export{X as default};
