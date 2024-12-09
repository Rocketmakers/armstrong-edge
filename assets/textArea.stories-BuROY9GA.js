import{j as r}from"./jsx-runtime-Cl2eCCBe.js";import{c as y,w as b,e as o,u as C}from"./classNames-TtGgGdEV.js";import{r as i}from"./index-Cqyox1Tj.js";import{u as qe,I as De}from"./inputWrapper.component-CzAv4_Mf.js";import{a as Le}from"./useDidUpdateEffect-CptJwHFD.js";import{o as Re}from"./radixDialog-CBrwtQa5.js";import{a as Ve,u as ze}from"./label.component-D06KPTBy.js";import{u as Pe}from"./config.context-C5a6Dfld.js";import"./statusWrapper.component-BjytHTN6.js";import"./spinner.component-CCnqzpIN.js";import"./validationErrors.component-CgOcudhd.js";import"./extends-CF3RwP-h.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";const oe=i.forwardRef(({milliseconds:t,value:e,onValueChange:a,onChange:n,...m},T)=>{const[v,g]=qe(t,e,a),L=i.useCallback(l=>{g(l.currentTarget.value),n==null||n(l)},[g,n]);return r.jsx("textarea",{ref:T,value:v,onChange:L,...m})});oe.displayName="DebounceInput";const u=i.forwardRef(({bind:t,onChange:e,value:a,className:n,validationErrorMessages:m,validationMode:T,pending:v,disabled:g,disableOnPending:L,onValueChange:l,scrollValidationErrorsIntoView:le,delay:R,validationErrorsClassName:de,statusClassName:ce,textAreaClassName:ie,label:ue,required:me,requiredIndicator:pe,displaySize:xe,labelClassName:be,labelId:ge,testId:Te,errorIcon:ye,leftOverlay:ve,rightOverlay:he,hideIconOnStatus:Ae,statusPosition:Be,autoValidate:Ee,...p},V)=>{const Ie=i.useId(),z=p.id??Ie,[h,P,s]=Ve(t,{value:a==null?void 0:a.toString(),validationErrorMessages:m,validationErrorIcon:ye,validationMode:T,autoValidate:Ee}),c=Pe({validationMode:s.validationMode,disableControlOnPending:L,inputStatusPosition:Be,inputDisplaySize:xe,requiredIndicator:pe,scrollValidationErrorsIntoView:le,validationErrorIcon:s.validationErrorIcon,hideInputErrorIconOnStatus:Ae,autoValidate:s.autoValidate}),A=i.useCallback(d=>{var H,B,M;const x=((M=(B=(H=t==null?void 0:t.bindConfig)==null?void 0:H.format)==null?void 0:B.toData)==null?void 0:M.call(B,d))||d;P(x)},[P,t]),fe=i.useCallback(d=>{e==null||e(d);const x=d.currentTarget.value;A(x),l==null||l(x)},[A,e,l]),we=i.useCallback(d=>{A(d),l==null||l(d)},[l,A]);Le(()=>{c.autoValidate&&s.isTouched&&s.validate()},[h]);const Se=i.useCallback(d=>{var x;return c.autoValidate&&!s.isTouched&&s.validate(),s.setTouched(!0),Re(d),(x=p.onBlur)==null?void 0:x.call(p,d)},[s,c.autoValidate,p]),j={id:z,className:y("arm-text-area",ie),value:(h==null?void 0:h.toString())??(t&&""),disabled:g,onBlur:Se};return r.jsxs(De,{"data-size":c.inputDisplaySize,className:y(n,"arm-text-area-wrapper"),statusClassName:y(ce,"arm-text-area-status"),validationErrorsClassName:y(de,"arm-text-area-validation"),validationErrorMessages:s.validationErrorMessages,errorIcon:s.validationErrorIcon,validationMode:s.validationMode,pending:v,disabled:g,statusPosition:c.inputStatusPosition,scrollValidationErrorsIntoView:c.scrollValidationErrorsIntoView,disableOnPending:c.disableControlOnPending,hideIconOnStatus:c.hideInputErrorIconOnStatus,label:ue,labelId:ge??z,labelClassName:y(be,"arm-text-area-label"),required:me,requiredIndicator:c.requiredIndicator,"data-testid":Te,leftOverlay:ve,rightOverlay:he,children:[!!R&&r.jsx(oe,{...p,...j,milliseconds:R,onChange:e,onValueChange:we,ref:V}),!R&&r.jsx("textarea",{className:"arm-text-area",...p,...j,onChange:fe,ref:V,disabled:g||v})]})});u.displayName="Text Area";u.__docgenInfo={description:"A component which wraps up a native text area element with some binding logic, labels and validation errors.",methods:[],displayName:"Text Area",props:{textAreaClassName:{required:!1,tsType:{name:"string"},description:"A class name to apply to the input element"},bind:{required:!1,tsType:{name:"IBindingProps",elements:[{name:"TValue"}],raw:"IBindingProps<TValue>"},description:"prop for binding to an Armstrong form binder (see forms documentation)"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: TValue) => void",signature:{arguments:[{type:{name:"TValue"},name:"value"}],return:{name:"void"}}},description:"Called when the value changes, takes into account any delay values and other effects."},delay:{required:!1,tsType:{name:"number"},description:"The delay config, used to set throttle and debounce values."},value:{required:!1,tsType:{name:"TValue"},description:"The current value of the input"},displaySize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"which size variant to use"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"e"}],return:{name:"void"}}},description:"A callback function to handle onChange event"},testId:{required:!1,tsType:{name:"string"},description:"An ID for the label to use when testing"},autoValidate:{required:!1,tsType:{name:"boolean"},description:"should the input validate automatically against the provided schema? Default: `true`"}},composes:["NativeTextAreaProps","Omit"]};const Qe={title:"Components/TextArea",component:u,args:{type:"text"}},E={play:async({canvasElement:t})=>{const a=b(t).getByRole("textbox");o(a).toBeInTheDocument()}},I={args:{placeholder:"Placeholder content 🚀",label:"Please write below",required:!0},play:async({canvasElement:t})=>{const e=b(t),a=e.getByRole("textbox"),n=e.getByLabelText("Please write below *");o(a).toBeInTheDocument(),o(a).toHaveAttribute("placeholder","Placeholder content 🚀"),o(n).toBeInTheDocument()}},f={args:{placeholder:"Enter text here..."},render:t=>r.jsxs(r.Fragment,{children:[r.jsx(u,{testId:"small",label:"Small",displaySize:"small",...t}),r.jsx(u,{testId:"medium",label:"Medium (default)",...t}),r.jsx(u,{testId:"large",label:"Large",displaySize:"large",...t})]}),play:async({canvasElement:t})=>{const e=b(t),a=e.getByTestId("small"),n=e.getByTestId("medium"),m=e.getByTestId("large");o(a.getAttribute("data-size")).toEqual("small"),o(n.getAttribute("data-size")).toEqual("medium"),o(m.getAttribute("data-size")).toEqual("large")}},w={args:{placeholder:"Enter text here...",label:"Text Area Label",pending:!0},play:async({canvasElement:t})=>{const a=b(t).getByRole("status",{name:"Loading..."});o(a).toBeInTheDocument()}},S={args:{placeholder:"Enter text here...",label:"Text Area Label",required:!0,validationErrorMessages:["This field is required"],testId:"text-area-wrapper"},play:async({canvasElement:t})=>{const a=b(t).getByTestId("text-area-wrapper");o(a.getAttribute("data-error")).toBe("true")}},q={args:{disabled:!0,placeholder:"This text area has been disabled",label:"Text Area Label"},play:async({canvasElement:t})=>{const a=b(t).getByRole("textbox");o(a).toBeDisabled()}},D={args:{placeholder:"Enter text here..."},render:()=>{const{formProp:t,formState:e}=ze({text:"",debounce:""});return r.jsxs(r.Fragment,{children:[r.jsx(u,{testId:"bound-text-area",label:"Bound text area",bind:t("text").bind()}),r.jsxs("p",{"data-testid":"bound-result",children:["Value: ",e==null?void 0:e.text]}),r.jsx(u,{label:"Bound debounce text area (400ms)",bind:t("debounce").bind(),delay:400}),r.jsxs("p",{"data-testid":"debounce-result",children:["Value: ",e==null?void 0:e.debounce]})]})},play:async({canvasElement:t})=>{const e=b(t),a=e.getByLabelText("Bound text area"),n=e.getByLabelText("Bound debounce text area (400ms)"),m=e.getByTestId("bound-result"),T=e.getByTestId("debounce-result");await C.type(a,"Hello, bound world"),await C.type(n,"Hello, bound world (but slower)"),o(m.textContent).toBe("Value: Hello, bound world"),setTimeout(()=>{o(T.textContent).toBe("Value: Hello, bound world (but slower)")},500)}};var N,k,O;E.parameters={...E.parameters,docs:{...(N=E.parameters)==null?void 0:N.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    expect(textArea).toBeInTheDocument();
  }
}`,...(O=(k=E.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var W,_,F;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder content 🚀',
    label: 'Please write below',
    required: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox') as HTMLTextAreaElement;
    const label = canvas.getByLabelText('Please write below *');
    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveAttribute('placeholder', 'Placeholder content 🚀');
    expect(label).toBeInTheDocument();
  }
}`,...(F=(_=I.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var G,U,J;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text here...'
  },
  render: args => {
    return <>
        <TextArea testId={'small'} label={'Small'} displaySize="small" {...args} />
        <TextArea testId={'medium'} label={'Medium (default)'} {...args} />
        <TextArea testId={'large'} label={'Large'} displaySize="large" {...args} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const smallTextArea = canvas.getByTestId('small');
    const mediumTextArea = canvas.getByTestId('medium');
    const largeTextArea = canvas.getByTestId('large');
    expect(smallTextArea.getAttribute('data-size')).toEqual('small');
    expect(mediumTextArea.getAttribute('data-size')).toEqual('medium');
    expect(largeTextArea.getAttribute('data-size')).toEqual('large');
  }
}`,...(J=(U=f.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,Q,X;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text here...',
    label: 'Text Area Label',
    pending: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByRole('status', {
      name: 'Loading...'
    });
    expect(spinner).toBeInTheDocument();
  }
}`,...(X=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text here...',
    label: 'Text Area Label',
    required: true,
    validationErrorMessages: ['This field is required'],
    testId: 'text-area-wrapper'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textAreaWrapper = canvas.getByTestId('text-area-wrapper');
    expect(textAreaWrapper.getAttribute('data-error')).toBe('true');
  }
}`,...($=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ae;q.parameters={...q.parameters,docs:{...(ee=q.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'This text area has been disabled',
    label: 'Text Area Label'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    expect(textArea).toBeDisabled();
  }
}`,...(ae=(te=q.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,ne,se;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text here...'
  },
  render: () => {
    const {
      formProp,
      formState
    } = useForm({
      text: '',
      debounce: ''
    });
    return <>
        <TextArea testId={'bound-text-area'} label="Bound text area" bind={formProp('text').bind()} />
        <p data-testid={'bound-result'}>Value: {formState?.text}</p>
        <TextArea label="Bound debounce text area (400ms)" bind={formProp('debounce').bind()} delay={400} />
        <p data-testid={'debounce-result'}>Value: {formState?.debounce}</p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Get the text areas
    const boundTextArea = canvas.getByLabelText('Bound text area');
    const debounceTextArea = canvas.getByLabelText('Bound debounce text area (400ms)');
    const boundResult = canvas.getByTestId('bound-result');
    const debounceResult = canvas.getByTestId('debounce-result');
    // Test Bound Text Area
    await userEvent.type(boundTextArea, 'Hello, bound world');
    await userEvent.type(debounceTextArea, 'Hello, bound world (but slower)');

    // Check that the form state values match the typed input
    expect(boundResult.textContent).toBe('Value: Hello, bound world');
    setTimeout(() => {
      expect(debounceResult.textContent).toBe('Value: Hello, bound world (but slower)');
    }, 500);
  }
}`,...(se=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const Xe=["Default","Labelled","Sizes","Pending","ValidationError","Disabled","Bound"];export{D as Bound,E as Default,q as Disabled,I as Labelled,w as Pending,f as Sizes,S as ValidationError,Xe as __namedExportsOrder,Qe as default};
