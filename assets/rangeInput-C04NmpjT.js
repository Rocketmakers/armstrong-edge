import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-DVgGKjXv.js";import{ae as l,af as r,ag as d}from"./index-DoXlP5Lm.js";import"./blocks-Dl3A-eXH.js";import{R as o,D as i,L as c,S as h,C as m,a as x,b as p,V as u}from"./rangeInput.stories-B4W8VsuD.js";import"./index-DwQS_Y10.js";import"./iframe-CJfsGlR5.js";import"../sb-preview/runtime.js";import"./index-BY2j7gpI.js";import"./index-Bls5tne7.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./index-BmZcwVSF.js";import"./config.context-Db4Op3G9.js";import"./index-CWQsrU90.js";import"./index-DKCiyFsV.js";import"./index-wJcBHZIT.js";import"./index-51PM6oTJ.js";import"./index-D3JXVD-Y.js";import"./index-Dp6IY7a_.js";import"./useDidUpdateEffect-Dtjk5cbT.js";import"./radixDialog-CBrwtQa5.js";import"./label.component-DRWWDUYP.js";import"./index-n_XmvDeM.js";import"./statusWrapper.component-C9Y4RJki.js";import"./spinner.component-C8cBclXj.js";import"./validationErrors.component-Cn_dkfWO.js";function a(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/rangeInput",component:o}),`
`,e.jsx(n.h1,{id:"range-input",children:"Range input"}),`
`,e.jsx(n.p,{children:"A range slider that allows users to choose a specific value by moving a control across a set range."}),`
`,e.jsx(r,{of:i,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { formProp, formState, RangeInput } from '@rocketmakers/armstrong';

const { formProp, formState } = useForm({ value: 50 });

<RangeInput bind={formProp('value').bind()} />
<p>Value: {formState?.value}</p>
`})}),`
`,e.jsx(n.h2,{id:"range-input-props",children:"Range input props"}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#basic",children:"Basic range input example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#with-label",children:"Range input with a label"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#min-max",children:e.jsx(n.code,{children:"min max"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#step",children:e.jsx(n.code,{children:"step"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#displaySize",children:e.jsx(n.code,{children:"displaySize"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#customThumb",children:e.jsx(n.code,{children:"customThumb"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#validationErrorMessages",children:e.jsx(n.code,{children:"validationErrorMessages"})})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"basic-range-input-example",children:e.jsx("a",{name:"basic",children:"Basic range input example"})}),`
`,e.jsx(r,{of:i,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { formProp, formState } = useForm({ value: 50 });

<RangeInput bind={formProp('value').bind()} />
<p>Value: {formState?.value}</p>
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"bind"})," prop is used for binding to an Armstrong form binder (see forms documentation)."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"value"})," prop is used to set the thumb of the range input."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"range-input-with-a-label",children:e.jsx("a",{name:"with-label",children:"Range input with a label"})}),`
`,e.jsx(r,{of:c,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { formProp, formState } = useForm({ value: 50 });

<RangeInput bind={formProp('value').bind()} label="label" required={true} />;
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"displaysize",children:e.jsx("a",{name:"displaySize",children:e.jsx(n.code,{children:"displaySize"})})}),`
`,e.jsx(r,{of:h,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { formProp, formState } = useForm({ value: 50 });

<RangeInput bind={formProp('value').bind()} displaySize="small" />;
`})}),`
`,e.jsx(n.p,{children:"Sizes available:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"small"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"medium"})," (default)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"large"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"custom-<string>"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"customthumb",children:e.jsx("a",{name:"customThumb",children:e.jsx(n.code,{children:"customThumb"})})}),`
`,e.jsx(r,{of:m,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { formProp, formState } = useForm({ value: 50 });

<RangeInput bind={formProp('value').bind()} customThumb={<Icon />} />;
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"min-max",children:e.jsx("a",{name:"min-max",children:e.jsx(n.code,{children:"min max"})})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"min"})," prop can be use to set the minimum value for the range. It is ",e.jsx(n.code,{children:"0"})," by default."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"max"})," prop can be use to set the maximum value for the range. It is ",e.jsx(n.code,{children:"100"})," by default."]}),`
`,e.jsx(r,{of:x,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { formProp, formState } = useForm({ value: 50 });

<RangeInput bind={formProp('value').bind()} min="40" max="60" />;
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"step",children:e.jsx("a",{name:"step",children:e.jsx(n.code,{children:"step"})})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"step"})," prop determines how big the increments should be on the slider. Defaults to ",e.jsx(n.code,{children:"1"}),"."]}),`
`,e.jsx(r,{of:p,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { formProp, formState } = useForm({ value: 50 });

<RangeInput bind={formProp('value').bind()} step="10" />;
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"validationerrormessages",children:e.jsx("a",{name:"validationErrorMessages",children:e.jsx(n.code,{children:"validationErrorMessages"})})}),`
`,e.jsx(r,{of:u,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { formProp, formState } = useForm({ value: 50 });

<RangeInput bind={formProp('value').bind()} validationErrorMessages={['Invalid selection']} validationMode="both" />;
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"validationErrorMessages"})," are the validation errors from the binder concatenated with manually passed in errors."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"validationMode"})," determines how to render the validation errors. The ",e.jsx(n.code,{children:"validationMode"})," options are ",e.jsx(n.code,{children:"icon"}),", ",e.jsx(n.code,{children:"message"})," or ",e.jsx(n.code,{children:"both"}),"."]})]})}function G(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{G as default};
