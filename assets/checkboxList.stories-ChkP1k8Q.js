import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as S,w as f,u,a as p,e as i,f as U}from"./index-BmZcwVSF.js";import{u as de,c as me}from"./config.context-Db4Op3G9.js";import{r as H}from"./index-DwQS_Y10.js";import{a as ue}from"./useDidUpdateEffect-Dtjk5cbT.js";import{C as pe}from"./checkbox.component-BYKGWf9r.js";import{a as be,L as he,u as ve}from"./label.component-DRWWDUYP.js";import{g as ge}from"./options-Q_-Fwsn7.js";import{V as xe}from"./validationErrors.component-Cn_dkfWO.js";const d=({ref:n,bind:t,options:e,className:r,value:o,errorIcon:C,validationMode:I,validationErrorMessages:k,onChange:K,customIndicator:Q,error:W,displaySize:Y,label:q,labelClassName:Z,labelId:ee,required:ae,disabled:A,scrollValidationErrorsIntoView:ne,validationErrorsClassName:te,requiredIndicator:re,autoValidate:ie,...oe})=>{const[s,w,l]=be(t,{value:o,validationErrorMessages:k,validationErrorIcon:C,validationMode:I,onChange:K,autoValidate:ie}),m=de({validationMode:l.validationMode,requiredIndicator:re,scrollValidationErrorsIntoView:ne,validationErrorIcon:l.validationErrorIcon,inputDisplaySize:Y,autoValidate:l.autoValidate}),se=H.useCallback((c,b)=>{const T=e.reduce((le,B)=>{const z=B.id===c.id,ce=(s==null?void 0:s.includes(B.id))?!z||b:z&&b;return[...le,...ce?[B.id]:[]]},[]);w==null||w(T)},[w,s,e]);return ue(()=>{m.autoValidate&&l.validate(),l.setTouched(!0)},[s]),a.jsxs(a.Fragment,{children:[q&&a.jsx(he,{id:ee,className:S("arm-checkbox-list-label",Z),required:ae,requiredIndicator:m.requiredIndicator,displaySize:m.inputDisplaySize,children:q}),a.jsxs("div",{className:S("arm-checkbox-list",r),ref:n,"data-error":W||!!(k!=null&&k.length),"data-disabled":A,"data-size":m.inputDisplaySize,...oe,children:[e.map(c=>{const b=s==null?void 0:s.includes(c.id);return H.createElement(pe,{customIndicator:Q,...c.htmlProps??{},key:c.id,className:"arm-checkbox-list-item",checked:b,displaySize:m.inputDisplaySize,onCheckedChange:T=>se(c,T),disabled:A||c.disabled,label:ge(c,b)})}),l.shouldShowValidationErrorMessage&&!!l.validationErrorMessages.length&&a.jsx(xe,{validationErrors:l.validationErrorMessages,scrollIntoView:m.scrollValidationErrorsIntoView,className:S("arm-checkbox-list-errors",te)})]})]})};d.displayName="CheckboxList";d.__docgenInfo={description:"Render a list of radio inputs which binds to a single string",methods:[],displayName:"CheckboxList",props:{bind:{required:!1,tsType:{name:"IBindingProps",elements:[{name:"Array",elements:[{name:"Id"}],raw:"Id[]"}],raw:"IBindingProps<Id[]>"},description:"prop for binding to an Armstrong form binder (see forms documentation)"},options:{required:!0,tsType:{name:"Array",elements:[{name:"IArmstrongOption",elements:[{name:"Id"},{name:"Omit",elements:[{name:"ICheckboxProps",elements:[{name:"boolean"}],raw:"ICheckboxProps<boolean>"},{name:"union",raw:`| 'bind'
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
>[]`},description:"The options to be shown in the input"},className:{required:!1,tsType:{name:"string"},description:"CSS className property"},value:{required:!1,tsType:{name:"Array",elements:[{name:"Id"}],raw:"Id[]"},description:"the current value of the radioInput"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newValue: Id[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Id"}],raw:"Id[]"},name:"newValue"}],return:{name:"void"}}},description:"Fired when the value changes"},error:{required:!1,tsType:{name:"boolean"},description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)"},customIndicator:{required:!1,tsType:{name:"React.JSX.Element"},description:"(Optional) A custom JSX.Element for the checked indicator."},displaySize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | CustomString",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"`custom-${string}`"}]},description:"which size variant to use"},label:{required:!1,tsType:{name:"string"},description:"Label for the whole radio group itself"},labelClassName:{required:!1,tsType:{name:"string"},description:"(Optional) Class name for the label component"},labelId:{required:!1,tsType:{name:"string"},description:"(Optional) Id to use for the checkbox. Falls back to React ID if not provided"},required:{required:!1,tsType:{name:"boolean"},description:"Indicates if field must be used to submit form"},disabled:{required:!1,tsType:{name:"boolean"},description:"wether input's value can be changed by user"},requiredIndicator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Symbol to use as the required indicator on the label, defaults to "*"'},autoValidate:{required:!1,tsType:{name:"boolean"},description:"should the input validate automatically against the provided schema? Default: `true`"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}},composes:["Pick"]};const ye={title:"Components/CheckboxList",component:d},E={args:{onChange:U()},render:n=>{var r;const{formProp:t,formState:e}=ve();return a.jsxs(a.Fragment,{children:[a.jsx(d,{label:"Checkbox list",bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],...n}),a.jsx("br",{}),a.jsxs("p",{children:["Bound value: ",(r=e==null?void 0:e.value)==null?void 0:r.join(", ")]})]})}},h={...E,play:async({canvasElement:n})=>{const t=f(n),e=t.getByText("Bound value:"),[r,o,C,I]=await t.findAllByRole("checkbox");u.click(r),await p(()=>i(e).toHaveTextContent("Bound value: 1")),u.click(o),await p(()=>i(e).toHaveTextContent("Bound value: 1, 2")),u.click(C),await p(()=>i(e).toHaveTextContent("Bound value: 1, 2, 3")),u.click(I),await p(()=>i(e).toHaveTextContent("Bound value: 1, 2, 3, 4")),u.click(o),await p(()=>i(e).toHaveTextContent("Bound value: 1, 3, 4"))}},v={...E,args:{disabled:!0},play:async({canvasElement:n})=>{(await f(n).findAllByRole("checkbox")).forEach(r=>i(r).toHaveAttribute("disabled"))}},g={...E,args:{validationErrorMessages:["Invalid selection"]},play:async({canvasElement:n})=>{const t=f(n);i(t.getByText("Invalid selection")).toBeVisible()}},x={...E,args:{customIndicator:a.jsx(me,{}),onChange:U()},play:async({canvasElement:n})=>{const t=f(n),[e,...r]=await t.findAllByRole("checkbox");u.click(e),await p(()=>i(e.getElementsByTagName("svg").length).toBeGreaterThan(0)),r.forEach(o=>i(o.getElementsByTagName("svg")).toHaveLength(0))}},y={render:()=>a.jsxs(a.Fragment,{children:[a.jsx("h2",{children:"Large"}),a.jsx(d,{options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],displaySize:"large",label:"Large checkbox list","data-testid":"checkbox-container",required:!0}),a.jsx("h2",{children:"Medium"}),a.jsx(d,{options:[{id:"1b",content:"red"},{id:"2b",content:"blue"},{id:"3b",content:"pink"},{id:"4b",content:"brown"}],displaySize:"medium",label:"Medium checkbox list","data-testid":"checkbox-container",required:!0}),a.jsx("h2",{children:"Small"}),a.jsx(d,{options:[{id:"1c",content:"red"},{id:"2c",content:"blue"},{id:"3c",content:"pink"},{id:"4c",content:"brown"}],displaySize:"small",label:"Small checkbox list","data-testid":"checkbox-container",required:!0})]}),play:async({canvasElement:n})=>{const t=f(n),[e,r,o]=await t.findAllByTestId("checkbox-container");i(e).toHaveAttribute("data-size","large"),i(r).toHaveAttribute("data-size","medium"),i(o).toHaveAttribute("data-size","small")}};var N,V,j;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=(V=h.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var L,R,M;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(M=(R=v.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var O,D,F;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(D=g.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var P,_,G;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(_=x.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var J,X,$;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...($=(X=y.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};const fe=["Default","Disabled","ValidationError","CustomIcon","Sizes"],Ne=Object.freeze(Object.defineProperty({__proto__:null,CustomIcon:x,Default:h,Disabled:v,Sizes:y,ValidationError:g,__namedExportsOrder:fe,default:ye},Symbol.toStringTag,{value:"Module"}));export{d as C,h as D,Ne as c};
