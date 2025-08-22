import{j as n}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as a}from"./index-BLKynSmM.js";import{ae as s,af as e,ag as c}from"./index-B2HsqE-J.js";import"./blocks-CJgQ5GMp.js";import{C as t,D as d,I as h,a as l}from"./characterLimit.stories-BnVjn6WL.js";import"./index-Cqyox1Tj.js";import"./iframe-ZU79e4CW.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index-Dv9et24K.js";import"./config.context-B61qZkrf.js";import"./label.component-CknXuhjY.js";import"./useDidUpdateEffect-igSykUWQ.js";import"./extends-CF3RwP-h.js";import"./input.component-CKcQoMXG.js";import"./inputWrapper.component-Sld9-8zj.js";import"./statusWrapper.component-DucYgjxK.js";import"./spinner.component-Bc6RftQo.js";import"./validationErrors.component-CHN68oNP.js";import"./radixDialog-CBrwtQa5.js";function o(r){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Components/Character Limit",component:t}),`
`,n.jsx(i.h1,{id:"character-limit",children:"Character limit"}),`
`,n.jsx(i.p,{children:"Shows a character limit that binds with it's associated input."}),`
`,n.jsx(e,{of:d,layout:"centered",sourceState:"none"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`const formData: IFormData = { thing: '' };
const { formProp } = useForm(formData);

<Input bind={formProp('thing').bind()} />
<CharacterLimit bind={formProp('thing').bind()} limit="10" />
`})}),`
`,n.jsx(i.h2,{id:"character-limit-props",children:"Character limit Props"}),`
`,n.jsx(c,{of:t}),`
`,n.jsx(i.h2,{id:"examples",children:"Examples"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"#limit",children:n.jsx(i.code,{children:"limit"})})}),`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"#overlay",children:n.jsx(i.code,{children:"overlay"})})}),`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"#validationErrorIcon",children:n.jsx(i.code,{children:"validationErrorIcon"})})}),`
`]}),`
`,n.jsx("br",{}),`
`,n.jsx(i.h3,{id:"limit",children:n.jsx("a",{name:"limit",children:n.jsx(i.code,{children:"limit"})})}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`<Input bind={formProp('thing').bind()} />
<CharacterLimit bind={formProp('thing').bind()} limit="10" />
`})}),`
`,n.jsxs(i.p,{children:["The ",n.jsx(i.code,{children:"bind"})," prop is used for binding to an Armstrong form binder (see forms documentation)."]}),`
`,n.jsxs(i.p,{children:["The ",n.jsx(i.code,{children:"limit"})," prop shows a character limit."]}),`
`,n.jsx("br",{}),`
`,n.jsx(i.h3,{id:"overlay",children:n.jsx("a",{name:"overlay",children:n.jsx(i.code,{children:"overlay"})})}),`
`,n.jsxs(i.p,{children:["The ",n.jsx(i.code,{children:"CharacterLimit"})," component offers the option to move the character limit inside the input as an overlay."]}),`
`,n.jsx(e,{of:h,layout:"centered",sourceState:"none"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`<Input bind={formProp('thing').bind()} rightOverlay={<CharacterLimit bind={formProp('thing').bind()} limit="10" />} />
`})}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"leftOverlay"})," and ",n.jsx(i.code,{children:"rightOverlay"})," add overlays on the sides of certain components. It can be used to display the character limit inside of an input."]}),`
`,n.jsx("br",{}),`
`,n.jsx(i.h3,{id:"validationerroricon",children:n.jsx("a",{name:"validationErrorIcon",children:n.jsx(i.code,{children:"validationErrorIcon"})})}),`
`,n.jsxs(i.p,{children:["Adds a custom icon to the ",n.jsx(i.code,{children:"CharacterLimit"})," when the number of characters typed in the input is greater than the limit."]}),`
`,n.jsx(e,{of:l,layout:"centered",sourceState:"none"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`<Input bind={formProp('thing').bind()} />
<CharacterLimit bind={formProp('thing').bind()} limit="10" validationErrorIcon={<Icon />} />
`})})]})}function O(r={}){const{wrapper:i}={...a(),...r.components};return i?n.jsx(i,{...r,children:n.jsx(o,{...r})}):o(r)}export{O as default};
