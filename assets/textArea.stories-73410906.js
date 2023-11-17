import{a as u,j as y,F as se}from"./jsx-runtime-63e4a166.js";import{w as x,e as l,u as H}from"./index-3ffc2e85.js";import{r as d}from"./index-c4905b50.js";import{u as De,I as Ce}from"./inputWrapper.component-75dfd9e3.js";import{u as Ne}from"./useDidUpdateEffect-2528cb48.js";import{c as f}from"./classNames-9011e307.js";import{a as Le,u as Re}from"./label.component-23add95d.js";import{u as ze}from"./config.context-03ebf2cb.js";import"./index-999ec173.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";import"./statusWrapper.component-5d5028da.js";import"./spinner.component-c2b96b2c.js";import"./validationErrors.component-2d32de4a.js";import"./index-742b7287.js";import"./index-07d1f67e.js";const ie=d.forwardRef(({milliseconds:e,value:t,onValueChange:a,onChange:n,...c},g)=>{const[v,h]=De(e,t,a),C=d.useCallback(o=>{h(o.currentTarget.value),n==null||n(o)},[h,n]);return u("textarea",{ref:g,value:v,onChange:C,...c})});ie.displayName="DebounceInput";const b=d.forwardRef(({bind:e,onChange:t,value:a,className:n,validationErrorMessages:c,validationMode:g,pending:v,disabled:h,disableOnPending:C,onValueChange:o,scrollValidationErrorsIntoView:de,delay:N,validationErrorsClassName:ue,statusClassName:ce,textAreaClassName:me,label:pe,required:be,requiredIndicator:xe,displaySize:he,labelClassName:ge,labelId:fe,testId:ye,errorIcon:ve,leftOverlay:Te,rightOverlay:Ie,hideIconOnStatus:Ae,statusPosition:Ee,autoValidate:Be,...m},L)=>{const we=d.useId(),R=m.id??we,[T,z,r]=Le(e,{value:a==null?void 0:a.toString(),validationErrorMessages:c,validationErrorIcon:ve,validationMode:g,autoValidate:Be}),i=ze({validationMode:r.validationMode,disableControlOnPending:C,inputStatusPosition:Ee,inputDisplaySize:he,requiredIndicator:xe,scrollValidationErrorsIntoView:de,validationErrorIcon:r.validationErrorIcon,hideInputErrorIconOnStatus:Ae,autoValidate:r.autoValidate}),I=d.useCallback(s=>{var P,A,O;const p=((O=(A=(P=e==null?void 0:e.bindConfig)==null?void 0:P.format)==null?void 0:A.toData)==null?void 0:O.call(A,s))||s;z(p)},[z,e]),Ve=d.useCallback(s=>{t==null||t(s);const p=s.currentTarget.value;I(p),o==null||o(p)},[I,t,o]),qe=d.useCallback(s=>{I(s),o==null||o(s)},[o,I]);Ne(()=>{i.autoValidate&&r.isTouched&&r.validate()},[T]);const Se=d.useCallback(s=>{var p;return i.autoValidate&&!r.isTouched&&r.validate(),r.setTouched(!0),(p=m.onBlur)==null?void 0:p.call(m,s)},[r,i.autoValidate,m]),M={id:R,className:f("arm-text-area",me),value:(T==null?void 0:T.toString())??(e&&""),disabled:h,onBlur:Se};return y(Ce,{"data-size":i.inputDisplaySize,className:f(n,"arm-text-area-wrapper"),statusClassName:f(ce,"arm-text-area-status"),validationErrorsClassName:f(ue,"arm-text-area-validation"),validationErrorMessages:r.validationErrorMessages,errorIcon:r.validationErrorIcon,validationMode:r.validationMode,pending:v,disabled:h,statusPosition:i.inputStatusPosition,scrollValidationErrorsIntoView:i.scrollValidationErrorsIntoView,disableOnPending:i.disableControlOnPending,hideIconOnStatus:i.hideInputErrorIconOnStatus,label:pe,labelId:fe??R,labelClassName:f(ge,"arm-text-area-label"),required:be,requiredIndicator:i.requiredIndicator,"data-testid":ye,leftOverlay:Te,rightOverlay:Ie,children:[!!N&&u(ie,{...m,...M,milliseconds:N,onChange:t,onValueChange:qe,ref:L}),!N&&u("textarea",{className:"arm-text-area",...m,...M,onChange:Ve,ref:L,disabled:h||v})]})});b.displayName="Text Area";try{DebounceInput.displayName="DebounceInput",DebounceInput.__docgenInfo={description:"A component which wraps up a native text area element with some binding logic, labels and validation errors.",displayName:"DebounceInput",props:{textAreaClassName:{defaultValue:null,description:"A class name to apply to the input element",name:"textAreaClassName",required:!1,type:{name:"string"}},bind:{defaultValue:null,description:"prop for binding to an Armstrong form binder (see forms documentation)",name:"bind",required:!1,type:{name:"IBindingProps<TStringValue>"}},onValueChange:{defaultValue:null,description:"Called when the value changes, takes into account any delay values and other effects.",name:"onValueChange",required:!1,type:{name:"((value?: TStringValue) => void)"}},delay:{defaultValue:null,description:"The delay config, used to set throttle and debounce values.",name:"delay",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"The current value of the input",name:"value",required:!1,type:{name:"NullOrUndefined<string>"}},displaySize:{defaultValue:null,description:"which size variant to use",name:"displaySize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onChange:{defaultValue:null,description:"A callback function to handle onChange event",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLTextAreaElement>) => void)"}},testId:{defaultValue:null,description:"An ID for the label to use when testing",name:"testId",required:!1,type:{name:"string"}},autoValidate:{defaultValue:null,description:"should the input validate automatically against the provided schema? Default: `true`",name:"autoValidate",required:!1,type:{name:"boolean"}},validationMode:{defaultValue:null,description:"how to render the validation errors",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"message"'},{value:'"both"'}]}},scrollValidationErrorsIntoView:{defaultValue:null,description:"will scroll the validation errors into view when the length of validationErrors changes",name:"scrollValidationErrorsIntoView",required:!1,type:{name:"boolean"}},requiredIndicator:{defaultValue:null,description:'Symbol to use as the required indicator on the label, defaults to "*"',name:"requiredIndicator",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Some optional label content",name:"label",required:!1,type:{name:"ReactNode"}},validationErrorsClassName:{defaultValue:null,description:"Class name for the validation errors component",name:"validationErrorsClassName",required:!1,type:{name:"string"}},pending:{defaultValue:null,description:"show a spinner and disable",name:"pending",required:!1,type:{name:"boolean"}},disableOnPending:{defaultValue:null,description:"when pending is true should also disable the input",name:"disableOnPending",required:!1,type:{name:"boolean"}},leftOverlay:{defaultValue:null,description:"Content to show on the left of the input",name:"leftOverlay",required:!1,type:{name:"ReactNode"}},rightOverlay:{defaultValue:null,description:"Content to show on the right of the input",name:"rightOverlay",required:!1,type:{name:"ReactNode"}},statusPosition:{defaultValue:null,description:"which side of the button to show the spinner on - defaults to 'right'",name:"statusPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},labelClassName:{defaultValue:null,description:"Class name for the label component",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"Optional ID for the label element",name:"labelId",required:!1,type:{name:"string"}},statusClassName:{defaultValue:null,description:"Class name for the status component",name:"statusClassName",required:!1,type:{name:"string"}},validationErrorMessages:{defaultValue:null,description:"array of validation errors to render",name:"validationErrorMessages",required:!1,type:{name:"ValidationMessage[]"}},errorIcon:{defaultValue:null,description:"the icon to use for validation errors",name:"errorIcon",required:!1,type:{name:"Element"}},error:{defaultValue:null,description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)",name:"error",required:!1,type:{name:"boolean"}},hideIconOnStatus:{defaultValue:null,description:"hide the icon on the given side if there is an active status - defaults to true",name:"hideIconOnStatus",required:!1,type:{name:"boolean"}}}}}catch{}const at={title:"Components/TextArea",component:b,args:{type:"text"}},E={play:async({canvasElement:e})=>{const a=x(e).getByRole("textbox");l(a).toBeInTheDocument()}},B={args:{placeholder:"Placeholder content 🚀",label:"Please write below",required:!0},play:async({canvasElement:e})=>{const t=x(e),a=t.getByRole("textbox"),n=t.getByLabelText("Please write below *");l(a).toBeInTheDocument(),l(a).toHaveAttribute("placeholder","Placeholder content 🚀"),l(n).toBeInTheDocument()}},w={args:{placeholder:"Enter text here..."},render:e=>y(se,{children:[u(b,{testId:"small",label:"Small",displaySize:"small",...e}),u(b,{testId:"medium",label:"Medium (default)",...e}),u(b,{testId:"large",label:"Large",displaySize:"large",...e})]}),play:async({canvasElement:e})=>{const t=x(e),a=t.getByTestId("small"),n=t.getByTestId("medium"),c=t.getByTestId("large");l(a.getAttribute("data-size")).toEqual("small"),l(n.getAttribute("data-size")).toEqual("medium"),l(c.getAttribute("data-size")).toEqual("large")}},V={args:{placeholder:"Enter text here...",label:"Text Area Label",pending:!0},play:async({canvasElement:e})=>{const a=x(e).getByRole("status",{name:"Loading..."});l(a).toBeInTheDocument()}},q={args:{placeholder:"Enter text here...",label:"Text Area Label",required:!0,validationErrorMessages:["This field is required"],testId:"text-area-wrapper"},play:async({canvasElement:e})=>{const a=x(e).getByTestId("text-area-wrapper");l(a.getAttribute("data-error")).toBe("true")}},S={args:{disabled:!0,placeholder:"This text area has been disabled",label:"Text Area Label"},play:async({canvasElement:e})=>{const a=x(e).getByRole("textbox");l(a).toBeDisabled()}},D={args:{placeholder:"Enter text here..."},render:()=>{const{formProp:e,formState:t}=Re({text:"",debounce:""});return y(se,{children:[u(b,{testId:"bound-text-area",label:"Bound text area",bind:e("text").bind()}),y("p",{"data-testid":"bound-result",children:["Value: ",t==null?void 0:t.text]}),u(b,{label:"Bound debounce text area (400ms)",bind:e("debounce").bind(),delay:400}),y("p",{"data-testid":"debounce-result",children:["Value: ",t==null?void 0:t.debounce]})]})},play:async({canvasElement:e})=>{const t=x(e),a=t.getByLabelText("Bound text area"),n=t.getByLabelText("Bound debounce text area (400ms)"),c=t.getByTestId("bound-result"),g=t.getByTestId("debounce-result");H.type(a,"Hello, bound world"),H.type(n,"Hello, bound world (but slower)"),l(c.textContent).toBe("Value: Hello, bound world"),setTimeout(()=>{l(g.textContent).toBe("Value: Hello, bound world (but slower)")},500)}};var _,k,F;E.parameters={...E.parameters,docs:{...(_=E.parameters)==null?void 0:_.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    expect(textArea).toBeInTheDocument();
  }
}`,...(F=(k=E.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var W,j,U;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder content 🚀',
    label: 'Please write below',
    required: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textArea = (canvas.getByRole('textbox') as HTMLTextAreaElement);
    const label = canvas.getByLabelText('Please write below *');
    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveAttribute('placeholder', 'Placeholder content 🚀');
    expect(label).toBeInTheDocument();
  }
}`,...(U=(j=B.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var G,J,K;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=w.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;V.parameters={...V.parameters,docs:{...(Q=V.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=V.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;q.parameters={...q.parameters,docs:{...(Z=q.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=q.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ae,ne;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,le,oe;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
    userEvent.type(boundTextArea, 'Hello, bound world');
    userEvent.type(debounceTextArea, 'Hello, bound world (but slower)');

    // Check that the form state values match the typed input
    expect(boundResult.textContent).toBe('Value: Hello, bound world');
    setTimeout(() => {
      expect(debounceResult.textContent).toBe('Value: Hello, bound world (but slower)');
    }, 500);
  }
}`,...(oe=(le=D.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};const nt=["Default","Labelled","Sizes","Pending","ValidationError","Disabled","Bound"];export{D as Bound,E as Default,S as Disabled,B as Labelled,V as Pending,w as Sizes,q as ValidationError,nt as __namedExportsOrder,at as default};
//# sourceMappingURL=textArea.stories-73410906.js.map
