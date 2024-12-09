import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{c as B,f as U,w as v,u as p,a as b,e as i}from"./classNames-TtGgGdEV.js";import{u as de,c as me}from"./config.context-C5a6Dfld.js";import{r as S}from"./index-Cqyox1Tj.js";import{a as ue}from"./useDidUpdateEffect-CptJwHFD.js";import{C as pe}from"./checkbox.component-DITFMqEX.js";import{g as be}from"./options-Q_-Fwsn7.js";import{a as he,L as ve,u as ge}from"./label.component-D06KPTBy.js";import{V as xe}from"./validationErrors.component-CgOcudhd.js";import"./extends-CF3RwP-h.js";import"./index-CcyUcsxs.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./statusWrapper.component-BjytHTN6.js";import"./spinner.component-CCnqzpIN.js";const d=S.forwardRef(({bind:t,options:n,className:a,value:r,errorIcon:o,validationMode:E,validationErrorMessages:m,onChange:K,customIndicator:Q,error:W,displaySize:Y,label:A,labelClassName:Z,labelId:$,required:ee,disabled:q,scrollValidationErrorsIntoView:ae,validationErrorsClassName:ne,requiredIndicator:te,autoValidate:re,...ie},oe)=>{const[s,g,l]=he(t,{value:r,validationErrorMessages:m,validationErrorIcon:o,validationMode:E,onChange:K,autoValidate:re}),u=de({validationMode:l.validationMode,requiredIndicator:te,scrollValidationErrorsIntoView:ae,validationErrorIcon:l.validationErrorIcon,inputDisplaySize:Y,autoValidate:l.autoValidate}),se=S.useCallback((c,h)=>{const C=n.reduce((le,T)=>{const z=T.id===c.id,ce=(s==null?void 0:s.includes(T.id))?!z||h:z&&h;return[...le,...ce?[T.id]:[]]},[]);g==null||g(C)},[g,s,n]);return ue(()=>{u.autoValidate&&l.validate(),l.setTouched(!0)},[s]),e.jsxs(e.Fragment,{children:[A&&e.jsx(ve,{id:$,className:B("arm-checkbox-list-label",Z),required:ee,requiredIndicator:u.requiredIndicator,displaySize:u.inputDisplaySize,children:A}),e.jsxs("div",{className:B("arm-checkbox-list",a),ref:oe,"data-error":W||!!(m!=null&&m.length),"data-disabled":q,"data-size":u.inputDisplaySize,...ie,children:[n.map(c=>{const h=s==null?void 0:s.includes(c.id);return S.createElement(pe,{customIndicator:Q,...c.htmlProps??{},key:c.id,className:"arm-checkbox-list-item",checked:h,displaySize:u.inputDisplaySize,onCheckedChange:C=>se(c,C),disabled:q||c.disabled,label:be(c,h)})}),l.shouldShowValidationErrorMessage&&l.validationErrorMessages&&e.jsx(xe,{validationErrors:l.validationErrorMessages,scrollIntoView:u.scrollValidationErrorsIntoView,className:B("arm-checkbox-list-errors",ne)})]})]})});d.displayName="CheckboxList";d.__docgenInfo={description:"Render a list of radio inputs which binds to a single string",methods:[],displayName:"CheckboxList",props:{bind:{required:!1,tsType:{name:"IBindingProps",elements:[{name:"Array",elements:[{name:"Id"}],raw:"Id[]"}],raw:"IBindingProps<Id[]>"},description:"prop for binding to an Armstrong form binder (see forms documentation)"},options:{required:!0,tsType:{name:"Array",elements:[{name:"IArmstrongOption",elements:[{name:"Id"},{name:"Omit",elements:[{name:"ICheckboxProps",elements:[{name:"boolean"}],raw:"ICheckboxProps<boolean>"},{name:"union",raw:`| 'bind'
| 'checked'
| 'disabled'
| 'label'
| 'validationErrorsClassName'
| 'validationErrorMessages'
| 'scrollValidationErrorsIntoView'
| 'ref'`,elements:[{name:"literal",value:"'bind'"},{name:"literal",value:"'checked'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'label'"},{name:"literal",value:"'validationErrorsClassName'"},{name:"literal",value:"'validationErrorMessages'"},{name:"literal",value:"'scrollValidationErrorsIntoView'"},{name:"literal",value:"'ref'"}]}],raw:`Omit<
  ICheckboxProps<boolean>,
  | 'bind'
  | 'checked'
  | 'disabled'
  | 'label'
  | 'validationErrorsClassName'
  | 'validationErrorMessages'
  | 'scrollValidationErrorsIntoView'
  | 'ref'
>`}],raw:`IArmstrongOption<
  Id,
  Omit<
    ICheckboxProps<boolean>,
    | 'bind'
    | 'checked'
    | 'disabled'
    | 'label'
    | 'validationErrorsClassName'
    | 'validationErrorMessages'
    | 'scrollValidationErrorsIntoView'
    | 'ref'
  >
>`}],raw:`IArmstrongOption<
  Id,
  Omit<
    ICheckboxProps<boolean>,
    | 'bind'
    | 'checked'
    | 'disabled'
    | 'label'
    | 'validationErrorsClassName'
    | 'validationErrorMessages'
    | 'scrollValidationErrorsIntoView'
    | 'ref'
  >
>[]`},description:"The options to be shown in the input"},className:{required:!1,tsType:{name:"string"},description:"CSS className property"},value:{required:!1,tsType:{name:"Array",elements:[{name:"Id"}],raw:"Id[]"},description:"the current value of the radioInput"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newValue: Id[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Id"}],raw:"Id[]"},name:"newValue"}],return:{name:"void"}}},description:"Fired when the value changes"},error:{required:!1,tsType:{name:"boolean"},description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)"},customIndicator:{required:!1,tsType:{name:"JSX.Element"},description:"(Optional) A custom JSX.Element for the checked indicator."},displaySize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"which size variant to use"},label:{required:!1,tsType:{name:"string"},description:"Label for the whole radio group itself"},labelClassName:{required:!1,tsType:{name:"string"},description:"(Optional) Class name for the label component"},labelId:{required:!1,tsType:{name:"string"},description:"(Optional) Id to use for the checkbox. Falls back to React ID if not provided"},required:{required:!1,tsType:{name:"boolean"},description:"Indicates if field must be used to submit form"},disabled:{required:!1,tsType:{name:"boolean"},description:"wether input's value can be changed by user"},requiredIndicator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Symbol to use as the required indicator on the label, defaults to "*"'},autoValidate:{required:!1,tsType:{name:"boolean"},description:"should the input validate automatically against the provided schema? Default: `true`"}},composes:["Pick"]};const Fe={title:"Components/CheckboxList",component:d},I={args:{onChange:U()},render:t=>{var r;const{formProp:n,formState:a}=ge();return e.jsxs(e.Fragment,{children:[e.jsx(d,{label:"Checkbox list",bind:n("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],...t}),e.jsx("br",{}),e.jsxs("p",{children:["Bound value: ",(r=a==null?void 0:a.value)==null?void 0:r.join(", ")]})]})}},x={...I,play:async({canvasElement:t})=>{const n=v(t),a=n.getByText("Bound value:"),[r,o,E,m]=await n.findAllByRole("checkbox");p.click(r),await b(()=>i(a).toHaveTextContent("Bound value: 1")),p.click(o),await b(()=>i(a).toHaveTextContent("Bound value: 1, 2")),p.click(E),await b(()=>i(a).toHaveTextContent("Bound value: 1, 2, 3")),p.click(m),await b(()=>i(a).toHaveTextContent("Bound value: 1, 2, 3, 4")),p.click(o),await b(()=>i(a).toHaveTextContent("Bound value: 1, 3, 4"))}},y={...I,args:{disabled:!0},play:async({canvasElement:t})=>{(await v(t).findAllByRole("checkbox")).forEach(r=>i(r).toHaveAttribute("disabled"))}},f={...I,args:{validationErrorMessages:["Invalid selection"]},play:async({canvasElement:t})=>{const n=v(t);i(n.getByText("Invalid selection")).toBeVisible()}},k={...I,args:{customIndicator:e.jsx(me,{}),onChange:U()},play:async({canvasElement:t})=>{const n=v(t),[a,...r]=await n.findAllByRole("checkbox");p.click(a),await b(()=>i(a.getElementsByTagName("svg").length).toBeGreaterThan(0)),r.forEach(o=>i(o.getElementsByTagName("svg")).toHaveLength(0))}},w={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Large"}),e.jsx(d,{options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],displaySize:"large",label:"Large checkbox list","data-testid":"checkbox-container",required:!0}),e.jsx("h2",{children:"Medium"}),e.jsx(d,{options:[{id:"1b",content:"red"},{id:"2b",content:"blue"},{id:"3b",content:"pink"},{id:"4b",content:"brown"}],displaySize:"medium",label:"Medium checkbox list","data-testid":"checkbox-container",required:!0}),e.jsx("h2",{children:"Small"}),e.jsx(d,{options:[{id:"1c",content:"red"},{id:"2c",content:"blue"},{id:"3c",content:"pink"},{id:"4c",content:"brown"}],displaySize:"small",label:"Small checkbox list","data-testid":"checkbox-container",required:!0})]}),play:async({canvasElement:t})=>{const n=v(t),[a,r,o]=await n.findAllByTestId("checkbox-container");i(a).toHaveAttribute("data-size","large"),i(r).toHaveAttribute("data-size","medium"),i(o).toHaveAttribute("data-size","small")}};var N,V,H;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Template,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const result = canvas.getByText('Bound value:');
    const [red, blue, pink, brown] = await canvas.findAllByRole('checkbox');
    userEvent.click(red);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 1'));
    userEvent.click(blue);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 1, 2'));
    userEvent.click(pink);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 1, 2, 3'));
    userEvent.click(brown);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 1, 2, 3, 4'));
    userEvent.click(blue);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 1, 3, 4'));
  }
}`,...(H=(V=x.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var j,L,F;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Template,
  args: {
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radios = await canvas.findAllByRole('checkbox');
    radios.forEach(r => expect(r).toHaveAttribute('disabled'));
  }
}`,...(F=(L=y.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var R,O,M;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Template,
  args: {
    validationErrorMessages: ['Invalid selection']
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Invalid selection')).toBeVisible();
  }
}`,...(M=(O=f.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var P,D,_;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Template,
  args: {
    customIndicator: <ImPlus />,
    onChange: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [red, ...rest] = await canvas.findAllByRole('checkbox');
    userEvent.click(red);
    await waitFor(() => expect(red.getElementsByTagName('svg').length).toBeGreaterThan(0));
    rest.forEach(r => expect(r.getElementsByTagName('svg')).toHaveLength(0));
  }
}`,...(_=(D=k.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var G,J,X;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    return <>
        <h2>Large</h2>
        <CheckboxList options={[{
        id: '1',
        content: 'red'
      }, {
        id: '2',
        content: 'blue'
      }, {
        id: '3',
        content: 'pink'
      }, {
        id: '4',
        content: 'brown'
      }]} displaySize="large" label="Large checkbox list" data-testid="checkbox-container" required />
        <h2>Medium</h2>
        <CheckboxList options={[{
        id: '1b',
        content: 'red'
      }, {
        id: '2b',
        content: 'blue'
      }, {
        id: '3b',
        content: 'pink'
      }, {
        id: '4b',
        content: 'brown'
      }]} displaySize="medium" label="Medium checkbox list" data-testid="checkbox-container" required />
        <h2>Small</h2>
        <CheckboxList options={[{
        id: '1c',
        content: 'red'
      }, {
        id: '2c',
        content: 'blue'
      }, {
        id: '3c',
        content: 'pink'
      }, {
        id: '4c',
        content: 'brown'
      }]} displaySize="small" label="Small checkbox list" data-testid="checkbox-container" required />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [large, medium, small] = await canvas.findAllByTestId('checkbox-container');
    expect(large).toHaveAttribute('data-size', 'large');
    expect(medium).toHaveAttribute('data-size', 'medium');
    expect(small).toHaveAttribute('data-size', 'small');
  }
}`,...(X=(J=w.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};const Re=["Default","Disabled","ValidationError","CustomIcon","Sizes"];export{k as CustomIcon,x as Default,y as Disabled,w as Sizes,f as ValidationError,Re as __namedExportsOrder,Fe as default};
