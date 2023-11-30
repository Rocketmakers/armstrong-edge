import{a as s,j as V,F as R}from"./jsx-runtime-63e4a166.js";import{w as f,e as a,u as g,a as C}from"./index-3ffc2e85.js";import{r as p}from"./index-c4905b50.js";import{u as Ge}from"./useDidUpdateEffect-2528cb48.js";import{f as Je}from"./arrays-f0b52596.js";import{S as Qe}from"./statusWrapper.component-5d5028da.js";import{I as X}from"./input.component-37b2e74c.js";import{c as _}from"./classNames-9011e307.js";import{a as Xe,u as L,L as Ye}from"./label.component-23add95d.js";import{u as Ze}from"./config.context-03ebf2cb.js";import{V as $e}from"./validationErrors.component-2d32de4a.js";import"./index-999ec173.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";import"./spinner.component-c2b96b2c.js";import"./inputWrapper.component-75dfd9e3.js";import"./index-742b7287.js";import"./index-07d1f67e.js";function w(o){return typeof o=="number"?o:typeof o=="string"?0:o.length}const j=p.forwardRef(({bind:o,part:e,...l},c)=>{const t=p.useMemo(()=>w(e),[e]);if(typeof e=="string")return s("p",{className:"arm-code-input-part-text",children:e});if(typeof e=="number")return s(X,{ref:c,bind:o,...l,className:"arm-code-input-part-input",style:{"--arm-code-input-length":t},"data-length":t,onClick:y=>y.currentTarget.select(),maxLength:e});const{className:x,...b}=e;return s(X,{ref:c,bind:o,className:_("arm-code-input-part-input",x),style:{...b.style||{},"--arm-code-input-length":t},"data-length":t,onClick:y=>y.currentTarget.select(),...l,...b,maxLength:e.length,displaySize:e.displaySize})});j.displayName="CodeInputPart";const E=p.forwardRef(({className:o,parts:e,bind:l,onChange:c,validationMode:t,validationErrorMessages:x,errorIcon:b,error:y,value:I,pending:B,statusPosition:fe,leftOverlay:W,rightOverlay:K,scrollValidationErrorsIntoView:ye,displaySize:be,label:U,required:Ve,requiredIndicator:xe,hideIconOnStatus:we,statusClassName:Ce,validationErrorsClassName:Ee,labelClassName:Te,labelId:He,disableOnPending:Se,disabled:Ie,autoValidate:Be,...qe},Pe)=>{var J;const q=p.useRef([]),[h,T,u]=Xe(l,{onChange:c,validationErrorMessages:x,validationMode:t,value:I,autoValidate:Be}),d=Ze({validationMode:u.validationMode,inputStatusPosition:fe,inputDisplaySize:be,requiredIndicator:xe,hideInputErrorIconOnStatus:we,disableControlOnPending:Se,scrollValidationErrorsIntoView:ye,validationErrorIcon:b,autoValidate:u.autoValidate}),P=p.useCallback(r=>{var i;const n=e.slice(r+1).findIndex(m=>typeof m!="string")+r+1;n!==-1&&((i=q.current[n])==null||i.focus())},[e]),F=p.useCallback(r=>{var i;const n=Je(e.slice(0,r),m=>typeof m!="string");n!==-1&&((i=q.current[n])==null||i.focus())},[e]),G=p.useCallback((r,n)=>{const i=e.slice(0,r).reduce((O,A)=>O+w(A),0),m=i+w(e[r]);return(n==null?void 0:n.slice(i,m))||""},[e]),Oe=p.useCallback((r,n)=>{const i=w(e[n]);(r.currentTarget.value||"").length>=i&&P(n)},[e,P]),Ne=p.useCallback(r=>{r.preventDefault();const n=r.clipboardData.getData("text/plain"),i=r.target,m=q.current.indexOf(i),O=Math.min(i.selectionStart??0,i.selectionEnd??0),A=Math.max(i.selectionStart??0,i.selectionEnd??0),Q=new Array(m).fill(null).reduce((We,et,Ke)=>{const Ue=e[Ke];return We+w(Ue)},0)+O,Fe=Q+(A-O),Ae=(h==null?void 0:h.slice(0,Q))??"",_e=(h==null?void 0:h.slice(Fe))??"",Le=Ae+n+_e;T(Le)},[T,h,e]),ke=p.useMemo(()=>e.map((r,n)=>G(n,h)),[G,e,h]),Me=p.useCallback((r,n,i)=>{var m;switch(r.key){case"Backspace":{((m=r.currentTarget.value)==null?void 0:m.length)<=0&&n>0&&F(n);break}case"ArrowLeft":{r.currentTarget.selectionStart===0&&n>0&&F(n);break}case"ArrowRight":{r.currentTarget.selectionEnd===w(i)&&n<e.length&&P(n);break}}},[F,P,e]),{formProp:ze,formState:v}=L({parts:ke});p.useEffect(()=>{var r;T==null||T((r=v==null?void 0:v.parts)==null?void 0:r.join(""))},[v]),Ge(()=>{d.autoValidate&&u.isTouched&&u.validate()},[h]);const De=p.useCallback(()=>{v!=null&&v.parts.every(r=>r)&&d.autoValidate&&!u.isTouched&&(u.validate(),u.setTouched(!0))},[u,v==null?void 0:v.parts,d.autoValidate]),Re=W&&(d.inputStatusPosition!=="left"||!d.hideInputErrorIconOnStatus||!B&&!u.shouldShowValidationErrorIcon),je=K&&(d.inputStatusPosition!=="right"||!d.hideInputErrorIconOnStatus||!B&&!u.shouldShowValidationErrorIcon);return V(R,{children:[V("div",{ref:Pe,title:"Code input",...qe,children:[U&&s(Ye,{className:_("arm-code-input-label",Te),id:He,required:Ve,requiredIndicator:d.requiredIndicator,displaySize:d.inputDisplaySize,children:U}),s("div",{className:_("arm-code-input",o),children:s(Qe,{error:y||!!u.validationErrorMessages.length,errorIcon:u.validationErrorIcon,statusPosition:d.inputStatusPosition,pending:B,validationMode:u.validationMode,className:Ce,children:V(R,{children:[Re&&W,e==null?void 0:e.map((r,n)=>s(j,{type:"text",bind:ze("parts",n).bind(),part:r,onChange:i=>Oe(i,n),onKeyDown:i=>Me(i,n,+r),onPaste:Ne,onBlur:De,disabled:Ie||B&&d.disableControlOnPending,ref:i=>{q.current[n]=i},displaySize:d.inputDisplaySize},n)),je&&K]})})})]}),!!((J=u.validationErrorMessages)!=null&&J.length)&&u.shouldShowValidationErrorMessage&&s($e,{className:Ee,validationErrors:u.validationErrorMessages,scrollIntoView:d.scrollValidationErrorsIntoView})]})});E.displayName="Code Input";try{j.displayName="CodeInputPart",j.__docgenInfo={description:"",displayName:"CodeInputPart",props:{bind:{defaultValue:null,description:"Prop for binding to an Armstrong form binder (see forms documentation)",name:"bind",required:!1,type:{name:"IBindingProps<TBind>"}},value:{defaultValue:null,description:"The current value of the input",name:"value",required:!1,type:{name:"NullOrUndefined<string>"}},onChange:{defaultValue:null,description:"Fired when the code input changes",name:"onChange",required:!1,type:{name:"((newValue: TBind) => void)"}},parts:{defaultValue:null,description:`The parts of the code input
Can be a number representing the length of an input, e.g. [1,1,1]
Can be a string representing a piece of text in-between inputs, e.g. [1,1,'-',1,1]
Can be an object representing an input with some properties`,name:"parts",required:!0,type:{name:"CodeInputPartDefinition<TBind>[]"}},className:{defaultValue:null,description:"Optional className for the code input",name:"className",required:!1,type:{name:"string"}},displaySize:{defaultValue:null,description:"which size variant to use",name:"displaySize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Some optional label content",name:"label",required:!1,type:{name:"ReactNode"}},required:{defaultValue:null,description:"Should the label show a required indicator?",name:"required",required:!1,type:{name:"boolean"}},requiredIndicator:{defaultValue:null,description:'Symbol to use as the required indicator on the label, defaults to "*"',name:"requiredIndicator",required:!1,type:{name:"ReactNode"}},autoValidate:{defaultValue:null,description:"should the input validate automatically against the provided schema? Default: `true`",name:"autoValidate",required:!1,type:{name:"boolean"}},validationMode:{defaultValue:null,description:"how to render the validation errors",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"message"'},{value:'"both"'}]}},scrollValidationErrorsIntoView:{defaultValue:null,description:"will scroll the validation errors into view when the length of validationErrors changes",name:"scrollValidationErrorsIntoView",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"disable use",name:"disabled",required:!1,type:{name:"boolean"}},validationErrorMessages:{defaultValue:null,description:"array of validation errors to render",name:"validationErrorMessages",required:!1,type:{name:"ValidationMessage[]"}},hideIconOnStatus:{defaultValue:null,description:"hide the icon on the given side if there is an active status - defaults to true",name:"hideIconOnStatus",required:!1,type:{name:"boolean"}},disableOnPending:{defaultValue:null,description:"when pending is true should also disable the input",name:"disableOnPending",required:!1,type:{name:"boolean"}},leftOverlay:{defaultValue:null,description:"Content to show on the left of the input",name:"leftOverlay",required:!1,type:{name:"ReactNode"}},rightOverlay:{defaultValue:null,description:"Content to show on the right of the input",name:"rightOverlay",required:!1,type:{name:"ReactNode"}},statusClassName:{defaultValue:null,description:"Class name for the status component",name:"statusClassName",required:!1,type:{name:"string"}},validationErrorsClassName:{defaultValue:null,description:"Class name for the validation errors component",name:"validationErrorsClassName",required:!1,type:{name:"string"}},labelClassName:{defaultValue:null,description:"Class name for the label component",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"Optional ID for the label element",name:"labelId",required:!1,type:{name:"string"}},statusPosition:{defaultValue:null,description:"which side of the button to show the spinner on - defaults to 'right'",name:"statusPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},error:{defaultValue:null,description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)",name:"error",required:!1,type:{name:"boolean"}},pending:{defaultValue:null,description:"show a spinner and disable",name:"pending",required:!1,type:{name:"boolean"}},errorIcon:{defaultValue:null,description:"the icon to use for validation errors",name:"errorIcon",required:!1,type:{name:"Element"}}}}}catch{}const Ct={title:"Components/Code Input",component:E,parameters:{docs:{description:{component:"metadata"}}}},S={render:o=>{const{formProp:e,formState:l}=L({code:""});return V(R,{children:[s(E,{...o,bind:e("code").bind()}),s("br",{}),V("p",{children:["Value: ",l==null?void 0:l.code]})]})}},H={...S,args:{parts:[1,1,1]},play:async({canvasElement:o})=>{const e=f(o),l=e.getByTitle("Code input"),c=e.getByText("Value:"),t=f(l).getAllByRole("textbox",{hidden:!0});a(t.length).toBe(3),g.type(t[0],"123"),a(t[0]).toHaveValue("1"),a(t[1]).toHaveValue("2"),a(t[2]).toHaveValue("3"),await C(()=>a(c).toHaveTextContent("Value: 123")),g.clear(t[0]),a(t[1]).toHaveValue("2"),a(t[2]).toHaveValue("3"),await C(()=>a(c).toHaveTextContent("Value: 23")),g.clear(t[0]),g.clear(t[1]),g.clear(t[2]),g.type(t[0],"4567"),a(t[0]).toHaveValue("4"),a(t[1]).toHaveValue("5"),a(t[2]).toHaveValue("6"),await C(()=>a(c).toHaveTextContent("Value: 456"))}},N={render:o=>{const{formProp:e,formState:l}=L({code:""});return V(R,{children:[s("h2",{children:"Small"}),s(E,{...o,bind:e("code").bind(),displaySize:"small"}),s("h2",{children:"Medium"}),s(E,{...o,bind:e("code").bind(),displaySize:"medium"}),s("h2",{children:"Large"}),s(E,{...o,bind:e("code").bind(),displaySize:"large"}),s("br",{}),V("p",{children:["Value: ",l==null?void 0:l.code]})]})},args:{parts:[1,1,1,1]}},k={...S,args:{parts:[2,"-",2,"-",2],validationErrorMessages:["Input is invalid"],label:"Code input",required:!0},play:async({canvasElement:o})=>{const l=f(o).getByText("Input is invalid");a(l).toBeVisible()}},M={...S,args:{parts:[4,3,8]},play:async({canvasElement:o})=>{const e=f(o),l=e.getByTitle("Code input"),c=e.getByText("Value:"),t=f(l).getAllByRole("textbox",{hidden:!0});a(t.length).toBe(3),g.type(t[0],"abcdefghijklmnop"),a(t[0]).toHaveValue("abcd"),a(t[1]).toHaveValue("efg"),a(t[2]).toHaveValue("hijklmno"),await C(()=>a(c).toHaveTextContent("Value: abcdefghijklmno"))}},z={...S,args:{parts:[4,"-",4,"-",4]},play:async({canvasElement:o})=>{var x,b,y,I;const e=f(o),l=e.getByTitle("Code input"),c=e.getByText("Value:"),t=f(l).getAllByRole("textbox",{hidden:!0});a(t.length).toBe(3),g.type(t[0],"abcdefghijklmnop"),a(t[0]).toHaveValue("abcd"),a(t[1]).toHaveValue("efgh"),a(t[2]).toHaveValue("ijkl"),await C(()=>a(c).toHaveTextContent("Value: abcdefghijkl")),a((b=(x=t[0].parentElement)==null?void 0:x.parentElement)==null?void 0:b.nextSibling).toHaveTextContent("-"),a((I=(y=t[1].parentElement)==null?void 0:y.parentElement)==null?void 0:I.nextSibling).toHaveTextContent("-")}},D={...S,args:{parts:[1,{length:1,rightOverlay:"+",leftOverlay:"+"},1],rightOverlay:"+",leftOverlay:"+"},play:async({canvasElement:o})=>{const e=f(o),l=e.getByTitle("Code input"),c=e.getByText("Value:"),t=f(l).getAllByRole("textbox",{hidden:!0});a(t.length).toBe(3),g.type(t[0],"abc"),a(t[0]).toHaveValue("a"),a(t[1]).toHaveValue("b"),a(t[2]).toHaveValue("c"),await C(()=>a(c).toHaveTextContent("Value: abc")),a(t[1].nextSibling).toHaveTextContent("+")}};var Y,Z,$,ee,te;H.parameters={...H.parameters,docs:{...(Y=H.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...Template,
  args: {
    parts: [1, 1, 1]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const wrapper = canvas.getByTitle('Code input');
    const value = canvas.getByText('Value:');
    const inputs = within(wrapper).getAllByRole('textbox', {
      hidden: true
    });
    expect(inputs.length).toBe(3);
    userEvent.type(inputs[0], '123');
    expect(inputs[0]).toHaveValue('1');
    expect(inputs[1]).toHaveValue('2');
    expect(inputs[2]).toHaveValue('3');
    await waitFor(() => expect(value).toHaveTextContent('Value: 123'));
    userEvent.clear(inputs[0]);
    expect(inputs[1]).toHaveValue('2');
    expect(inputs[2]).toHaveValue('3');
    await waitFor(() => expect(value).toHaveTextContent('Value: 23'));
    userEvent.clear(inputs[0]);
    userEvent.clear(inputs[1]);
    userEvent.clear(inputs[2]);
    userEvent.type(inputs[0], '4567');
    expect(inputs[0]).toHaveValue('4');
    expect(inputs[1]).toHaveValue('5');
    expect(inputs[2]).toHaveValue('6');
    await waitFor(() => expect(value).toHaveTextContent('Value: 456'));
  }
}`,...($=(Z=H.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"stories",...(te=(ee=H.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ae,ne,re;N.parameters={...N.parameters,docs:{...(ae=N.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => {
    interface IFormData {
      code: string | null | undefined;
    }
    const {
      formProp,
      formState
    } = useForm<IFormData>({
      code: ''
    });
    return <>
        <h2>Small</h2>
        <CodeInput {...args} bind={formProp('code').bind()} displaySize="small" />
        <h2>Medium</h2>
        <CodeInput {...args} bind={formProp('code').bind()} displaySize="medium" />
        <h2>Large</h2>
        <CodeInput {...args} bind={formProp('code').bind()} displaySize="large" />
        <br />
        <p>Value: {formState?.code}</p>
      </>;
  },
  args: {
    parts: [1, 1, 1, 1]
  }
}`,...(re=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,ie,le;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...Template,
  args: {
    parts: [2, '-', 2, '-', 2],
    validationErrorMessages: ['Input is invalid'],
    label: 'Code input',
    required: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('Input is invalid');
    expect(label).toBeVisible();
  }
}`,...(le=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var se,ue,ce;M.parameters={...M.parameters,docs:{...(se=M.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...Template,
  args: {
    parts: [4, 3, 8]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const wrapper = canvas.getByTitle('Code input');
    const value = canvas.getByText('Value:');
    const inputs = within(wrapper).getAllByRole('textbox', {
      hidden: true
    });
    expect(inputs.length).toBe(3);
    userEvent.type(inputs[0], 'abcdefghijklmnop');
    expect(inputs[0]).toHaveValue('abcd');
    expect(inputs[1]).toHaveValue('efg');
    expect(inputs[2]).toHaveValue('hijklmno');
    await waitFor(() => expect(value).toHaveTextContent('Value: abcdefghijklmno'));
  }
}`,...(ce=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var de,pe,me;z.parameters={...z.parameters,docs:{...(de=z.parameters)==null?void 0:de.docs,source:{originalSource:`{
  ...Template,
  args: {
    parts: [4, '-', 4, '-', 4]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const wrapper = canvas.getByTitle('Code input');
    const value = canvas.getByText('Value:');
    const inputs = within(wrapper).getAllByRole('textbox', {
      hidden: true
    });
    expect(inputs.length).toBe(3);
    userEvent.type(inputs[0], 'abcdefghijklmnop');
    expect(inputs[0]).toHaveValue('abcd');
    expect(inputs[1]).toHaveValue('efgh');
    expect(inputs[2]).toHaveValue('ijkl');
    await waitFor(() => expect(value).toHaveTextContent('Value: abcdefghijkl'));
    expect(inputs[0].parentElement?.parentElement?.nextSibling).toHaveTextContent('-');
    expect(inputs[1].parentElement?.parentElement?.nextSibling).toHaveTextContent('-');
  }
}`,...(me=(pe=z.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,ve,ge;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`{
  ...Template,
  args: {
    parts: [1, {
      length: 1,
      rightOverlay: '+',
      leftOverlay: '+'
    }, 1],
    rightOverlay: '+',
    leftOverlay: '+'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const wrapper = canvas.getByTitle('Code input');
    const value = canvas.getByText('Value:');
    const inputs = within(wrapper).getAllByRole('textbox', {
      hidden: true
    });
    expect(inputs.length).toBe(3);
    userEvent.type(inputs[0], 'abc');
    expect(inputs[0]).toHaveValue('a');
    expect(inputs[1]).toHaveValue('b');
    expect(inputs[2]).toHaveValue('c');
    await waitFor(() => expect(value).toHaveTextContent('Value: abc'));
    expect(inputs[1].nextSibling).toHaveTextContent('+');
  }
}`,...(ge=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};const Et=["Default","Sizes","ValidationError","DifferentLengths","WithTextBetween","WithOverlays"];export{H as Default,M as DifferentLengths,N as Sizes,k as ValidationError,D as WithOverlays,z as WithTextBetween,Et as __namedExportsOrder,Ct as default};
//# sourceMappingURL=codeInput.stories-9ec91c68.js.map
