import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DVgGKjXv.js";import{ae as s,af as m,ag as p}from"./index-C_u2dCB0.js";import"./blocks-DDq_SNkI.js";import{C as e,D as c}from"./checkboxList.stories-cLTze-WN.js";import"./index-DwQS_Y10.js";import"./iframe-D8z_w2h2.js";import"../sb-preview/runtime.js";import"./index-BY2j7gpI.js";import"./index-Bls5tne7.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./index-BmZcwVSF.js";import"./config.context-BKnTehkl.js";import"./useDidUpdateEffect-DxNflIL8.js";import"./checkbox.component-RQZqYkVJ.js";import"./index-DKCiyFsV.js";import"./index-CWQsrU90.js";import"./index-51PM6oTJ.js";import"./index-D3JXVD-Y.js";import"./index-CC-sFNo4.js";import"./label.component-CwmwBemr.js";import"./index-n_XmvDeM.js";import"./statusWrapper.component-BN4VJEUZ.js";import"./spinner.component-DY-93A6g.js";import"./validationErrors.component-44eD-gIZ.js";import"./options-Q_-Fwsn7.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"Components/CheckboxList",component:e}),`
`,o.jsx(t.h1,{id:"checkbox-list",children:"Checkbox list"}),`
`,o.jsxs(t.p,{children:["A list of ",o.jsx(t.code,{children:"checkboxes"})," that binds with your form."]}),`
`,o.jsx(m,{of:c,layout:"centered",sourceState:"none"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`interface IFormData {
  value?: ArmstrongId[];
}

const { formProp, formState } = useForm<IFormData>();

<CheckboxList
  label="Checkbox list"
  bind={formProp('value').bind()}
  options={[
    { id: '1', content: 'red' },
    { id: '2', content: 'blue' },
    { id: '3', content: 'pink' },
    { id: '4', content: 'brown' },
  ]}
/>

<p>Bound value: {formState?.value?.join(', ')}</p>
`})}),`
`,o.jsx(t.h2,{id:"checkbox-list-props",children:"Checkbox list Props"}),`
`,o.jsx(p,{of:e})]})}function N(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(r,{...n})}):r(n)}export{N as default};
