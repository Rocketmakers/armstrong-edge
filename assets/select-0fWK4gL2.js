import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as l}from"./index-BLKynSmM.js";import{ae as a,af as o,ag as c}from"./index-BRiGjUMD.js";import"./blocks-c3fi8Do-.js";import{S as i}from"./select.component-CJxq8Mka.js";import{Default as r,Multi as d,Create as p,CreateMulti as h,Native as x,Sizes as m,ValidationError as j}from"./select.stories-D6LBObXc.js";import"./index-Cqyox1Tj.js";import"./iframe-DmThDVqy.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./config.context-B61qZkrf.js";import"./extends-CF3RwP-h.js";import"./floating-ui.dom-D0xtKlXs.js";import"./useDidUpdateEffect-igSykUWQ.js";import"./radixDialog-CBrwtQa5.js";import"./label.component-Daqf1tyH.js";import"./index-Dv9et24K.js";import"./options-Q_-Fwsn7.js";import"./statusWrapper.component-DucYgjxK.js";import"./spinner.component-Bc6RftQo.js";import"./validationErrors.component-CHN68oNP.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/select",component:i}),`
`,e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsx(n.p,{children:"A select component that offers single or multiple selection, customizable sizes, and validation."}),`
`,e.jsx(o,{of:r,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { formProp, formState, Select } from '@rocketmakers/armstrong';

const { formProp, formState } = useForm<{ value?: number }>();

<Select bind={formProp('value').bind()} options={options} />;
<p>Current value: {formState?.value}</p>;
`})}),`
`,e.jsx(n.h2,{id:"select-props",children:"Select props"}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#single-select",children:"Single select example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#multi-select",children:"Multi select example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#create-option",children:"Create option example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#native",children:"Native select example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#displaySize",children:e.jsx(n.code,{children:"displaySize"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#validationErrorMessages",children:e.jsx(n.code,{children:"validationErrorMessages"})})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"single-select-example",children:e.jsx("a",{name:"single-select",children:"Single select example"})}),`
`,e.jsx(o,{of:r,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const options = [
  {
    label: 'Colours',
    options: [
      { id: 1, content: 'ocean' },
      { id: 2, content: 'blue' },
      { id: 3, content: 'purple' },
      { id: 4, content: 'red' },
      { id: 5, content: 'orange' },
      { id: 6, content: 'yellow' },
      { id: 7, content: 'green' },
      { id: 8, content: 'forest' },
      { id: 9, content: 'slate' },
      { id: 10, content: 'silver' },
    ],
  },
  {
    label: 'Flavours',
    options: [
      { id: 11, content: 'vanilla' },
      { id: 12, content: 'chocolate' },
      { id: 13, content: 'strawberry' },
    ],
  },
];

const { formProp, formState } = useForm<{ value?: number }>();

<Select bind={formProp('value').bind()} options={options} />;
<p>Current value: {formState?.value}</p>;
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"bind"})," prop is used for binding to an Armstrong form binder (see forms documentation)."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"options"})," prop can be an array of options or an array of grouped options with a label:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// flat options
const options = [
  { id: 1, content: 'ocean' },
  { id: 2, content: 'blue' },
  { id: 3, content: 'purple' },
  { id: 4, content: 'red' },
];

// grouped options
const groupedOptions = [
  {
    label: 'Colours',
    options: [
      { id: 1, content: 'ocean' },
      { id: 2, content: 'blue' },
    ],
  },
  {
    label: 'Flavours',
    options: [
      { id: 11, content: 'vanilla' },
      { id: 12, content: 'chocolate' },
    ],
  },
];
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"multi-select-example",children:e.jsx("a",{name:"multi-select",children:"Multi select example"})}),`
`,e.jsx(o,{of:d,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<MultiSelect bind={formProp('value').bind()} options={options} />
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"create-option-example",children:e.jsx("a",{name:"create-option",children:"Create option example"})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"for-a-single-select",children:"For a single select"}),`
`,e.jsx(o,{of:p,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Select bind={formProp('value').bind()} options={options} allowCreate={true} onOptionCreated={onOptionCreated} />
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"allowCreate"})," enables the user to create select options by typing into the input."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onOptionCreated"})," is called when a new option is created."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"for-a-multi-select",children:"For a multi select"}),`
`,e.jsx(o,{of:h,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<MultiSelect bind={formProp('value').bind()} options={options} allowCreate={true} onOptionCreated={onOptionCreated} />
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"allowCreate"})," enables the user to create select options by typing into the input."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onOptionCreated"})," is called when a new option is created."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"native-select-example",children:e.jsx("a",{name:"native",children:"Native select example"})}),`
`,e.jsx(o,{of:x,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<NativeSelect bind={formProp('value').bind()} options={options} />
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"displaysize",children:e.jsx("a",{name:"displaySize",children:e.jsx(n.code,{children:"displaySize"})})}),`
`,e.jsx(o,{of:m,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Select bind={formProp('value').bind()} options={options} displaySize="small" />
`})}),`
`,e.jsx(n.p,{children:"Size options:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"small"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"medium"})," (default)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"large"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"custom-<string>"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"validationerrormessages",children:e.jsx("a",{name:"validationErrorMessages",children:e.jsx(n.code,{children:"validationErrorMessages"})})}),`
`,e.jsx(o,{of:j,layout:"centered",sourceState:"none"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Select
  bind={formProp('value').bind()}
  options={options}
  validationMode="both"
  validationErrorMessages={['This field is required']}
  required
/>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"validationErrorMessages"})," are the validation errors from the binder concatenated with manually passed in errors."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"validationMode"})," determines how to render the validation errors. The ",e.jsx(n.code,{children:"validationMode"})," options are ",e.jsx(n.code,{children:"icon"}),", ",e.jsx(n.code,{children:"message"})," or ",e.jsx(n.code,{children:"both"}),"."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"required"})," prop displays a required indicator at the end of the label."]})]})}function R(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{R as default};
