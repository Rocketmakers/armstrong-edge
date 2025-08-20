import{j as o}from"./jsx-runtime-Cl2eCCBe.js";import{c as N,f as P,w as x,e as n,u as h,a as C}from"./index-Dv9et24K.js";import{r as d}from"./index-Cqyox1Tj.js";import{a as $e}from"./useDidUpdateEffect-igSykUWQ.js";import{a as Ue,f as Ge,u as A,L as Je}from"./label.component-Daqf1tyH.js";import{S as Qe}from"./statusWrapper.component-DucYgjxK.js";import{I as G}from"./input.component-CpfvZaIt.js";import{u as Xe}from"./config.context-B61qZkrf.js";import{V as Ye}from"./validationErrors.component-CHN68oNP.js";function V(r){return typeof r=="number"?r:typeof r=="string"?0:r.length}const ve=d.forwardRef(({bind:r,part:e,...l},u)=>{const t=d.useMemo(()=>V(e),[e]);if(typeof e=="string")return o.jsx("p",{className:"arm-code-input-part-text",children:e});if(typeof e=="number")return o.jsx(G,{ref:u,bind:r,...l,className:"arm-code-input-part-input",style:{"--arm-code-input-length":t},"data-length":t,onClick:y=>y.currentTarget.select(),maxLength:e});const{className:w,...f}=e;return o.jsx(G,{ref:u,bind:r,className:N("arm-code-input-part-input",w),style:{...f.style||{},"--arm-code-input-length":t},"data-length":t,onClick:y=>y.currentTarget.select(),...l,...f,maxLength:e.length,displaySize:e.displaySize})});ve.displayName="CodeInputPart";const b=d.forwardRef(({className:r,parts:e,bind:l,onChange:u,validationMode:t,validationErrorMessages:w,errorIcon:f,error:y,value:R,pending:O,statusPosition:he,leftOverlay:L,rightOverlay:_,scrollValidationErrorsIntoView:xe,displaySize:ye,label:W,required:fe,requiredIndicator:be,hideIconOnStatus:we,statusClassName:Ve,validationErrorsClassName:Te,labelClassName:Ce,labelId:Ee,disableOnPending:Se,disabled:He,autoValidate:Be,...Ie},je)=>{var $;const M=d.useRef([]),[g,E,c]=Ue(l,{onChange:u,validationErrorMessages:w,validationMode:t,value:R,autoValidate:Be}),p=Xe({validationMode:c.validationMode,inputStatusPosition:he,inputDisplaySize:ye,requiredIndicator:be,hideInputErrorIconOnStatus:we,disableControlOnPending:Se,scrollValidationErrorsIntoView:xe,validationErrorIcon:f,autoValidate:c.autoValidate}),q=d.useCallback(s=>{var i;const a=e.slice(s+1).findIndex(m=>typeof m!="string")+s+1;a!==-1&&((i=M.current[a])==null||i.focus())},[e]),D=d.useCallback(s=>{var i;const a=Ge(e.slice(0,s),m=>typeof m!="string");a!==-1&&((i=M.current[a])==null||i.focus())},[e]),K=d.useCallback((s,a)=>{const i=e.slice(0,s).reduce((z,F)=>z+V(F),0),m=i+V(e[s]);return(a==null?void 0:a.slice(i,m))||""},[e]),Pe=d.useCallback((s,a)=>{const i=V(e[a]);(s.currentTarget.value||"").length>=i&&q(a)},[e,q]),ke=d.useCallback(s=>{s.preventDefault();const a=s.clipboardData.getData("text/plain"),i=s.target,m=M.current.indexOf(i),z=Math.min(i.selectionStart??0,i.selectionEnd??0),F=Math.max(i.selectionStart??0,i.selectionEnd??0),U=new Array(m).fill(null).reduce((_e,tt,We)=>{const Ke=e[We];return _e+V(Ke)},0)+z,Fe=U+(F-z),Ne=(g==null?void 0:g.slice(0,U))??"",Ae=(g==null?void 0:g.slice(Fe))??"",Le=Ne+a+Ae;E(Le)},[E,g,e]),Re=d.useMemo(()=>e.map((s,a)=>K(a,g)),[K,e,g]),Oe=d.useCallback((s,a,i)=>{var m;switch(s.key){case"Backspace":{((m=s.currentTarget.value)==null?void 0:m.length)<=0&&a>0&&D(a);break}case"ArrowLeft":{s.currentTarget.selectionStart===0&&a>0&&D(a);break}case"ArrowRight":{s.currentTarget.selectionEnd===V(i)&&a<e.length&&q(a);break}}},[D,q,e]),{formProp:Me,formState:v}=A({parts:Re});d.useEffect(()=>{var s;E==null||E((s=v==null?void 0:v.parts)==null?void 0:s.join(""))},[v]),$e(()=>{p.autoValidate&&c.isTouched&&c.validate()},[g]);const qe=d.useCallback(()=>{v!=null&&v.parts.every(s=>s)&&p.autoValidate&&!c.isTouched&&(c.validate(),c.setTouched(!0))},[c,v==null?void 0:v.parts,p.autoValidate]),ze=L&&(p.inputStatusPosition!=="left"||!p.hideInputErrorIconOnStatus||!O&&(!c.shouldShowValidationErrorIcon||!c.validationErrorMessages.length)),De=_&&(p.inputStatusPosition!=="right"||!p.hideInputErrorIconOnStatus||!O&&(!c.shouldShowValidationErrorIcon||!c.validationErrorMessages.length));return o.jsxs(o.Fragment,{children:[o.jsxs("div",{ref:je,title:"Code input",...Ie,children:[W&&o.jsx(Je,{className:N("arm-code-input-label",Ce),id:Ee,required:fe,requiredIndicator:p.requiredIndicator,displaySize:p.inputDisplaySize,children:W}),o.jsx("div",{className:N("arm-code-input",r),children:o.jsx(Qe,{error:y||!!c.validationErrorMessages.length,errorIcon:c.validationErrorIcon,statusPosition:p.inputStatusPosition,pending:O,validationMode:c.validationMode,className:Ve,children:o.jsxs(o.Fragment,{children:[ze&&L,e==null?void 0:e.map((s,a)=>o.jsx(ve,{type:"text",bind:Me("parts",a).bind(),part:s,onChange:i=>Pe(i,a),onKeyDown:i=>Oe(i,a,+s),onPaste:ke,onBlur:qe,disabled:He||O&&p.disableControlOnPending,ref:i=>{M.current[a]=i},displaySize:p.inputDisplaySize},a)),De&&_]})})})]}),!!(($=c.validationErrorMessages)!=null&&$.length)&&c.shouldShowValidationErrorMessage&&o.jsx(Ye,{className:Te,validationErrors:c.validationErrorMessages,scrollIntoView:p.scrollValidationErrorsIntoView})]})});b.displayName="Code Input";b.__docgenInfo={description:"",methods:[],displayName:"Code Input",props:{bind:{required:!1,tsType:{name:"IBindingProps",elements:[{name:"TBind"}],raw:"IBindingProps<TBind>"},description:"Prop for binding to an Armstrong form binder (see forms documentation)"},value:{required:!1,tsType:{name:"TBind"},description:"The current value of the input"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newValue: TBind) => void",signature:{arguments:[{type:{name:"TBind"},name:"newValue"}],return:{name:"void"}}},description:"Fired when the code input changes"},parts:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"ICodeInputInput<TBind> | string | number",elements:[{name:"ICodeInputInput",elements:[{name:"TBind"}],raw:"ICodeInputInput<TBind>"},{name:"string"},{name:"number"}]}],raw:"CodeInputPartDefinition<TBind>[]"},description:`The parts of the code input
Can be a number representing the length of an input, e.g. [1,1,1]
Can be a string representing a piece of text in-between inputs, e.g. [1,1,'-',1,1]
Can be an object representing an input with some properties`},className:{required:!1,tsType:{name:"string"},description:"Optional className for the code input"},displaySize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | CustomString",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"`custom-${string}`"}]},description:"which size variant to use"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Some optional label content"},required:{required:!1,tsType:{name:"boolean"},description:"Should the label show a required indicator?"},requiredIndicator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Symbol to use as the required indicator on the label, defaults to "*"'},autoValidate:{required:!1,tsType:{name:"boolean"},description:"should the input validate automatically against the provided schema? Default: `true`"}},composes:["Pick","Omit"]};const Ze={title:"Components/Code Input",component:b,parameters:{docs:{description:{component:"metadata"}}}},k={render:r=>{const{formProp:e,formState:l}=A({code:""});return o.jsxs(o.Fragment,{children:[o.jsx(b,{...r,bind:e("code").bind()}),o.jsx("br",{}),o.jsxs("p",{children:["Value: ",l==null?void 0:l.code]})]})}},T={...k,args:{parts:[1,1,1],onChange:P()},play:async({canvasElement:r})=>{const e=x(r),l=e.getByTitle("Code input"),u=e.getByText("Value:"),t=x(l).getAllByRole("textbox",{hidden:!0});n(t.length).toBe(3),await h.type(t[0],"123"),n(t[0]).toHaveValue("1"),n(t[1]).toHaveValue("2"),n(t[2]).toHaveValue("3"),await C(()=>n(u).toHaveTextContent("Value: 123")),h.clear(t[0]),n(t[1]).toHaveValue("2"),n(t[2]).toHaveValue("3"),await C(()=>n(u).toHaveTextContent("Value: 23")),h.clear(t[0]),h.clear(t[1]),h.clear(t[2]),await h.type(t[0],"4567"),n(t[0]).toHaveValue("4"),n(t[1]).toHaveValue("5"),n(t[2]).toHaveValue("6"),await C(()=>n(u).toHaveTextContent("Value: 456"))}},S={render:r=>{const{formProp:e,formState:l}=A({code:""});return o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Small"}),o.jsx(b,{...r,bind:e("code").bind(),displaySize:"small"}),o.jsx("h2",{children:"Medium"}),o.jsx(b,{...r,bind:e("code").bind(),displaySize:"medium"}),o.jsx("h2",{children:"Large"}),o.jsx(b,{...r,bind:e("code").bind(),displaySize:"large"}),o.jsx("br",{}),o.jsxs("p",{children:["Value: ",l==null?void 0:l.code]})]})},args:{parts:[1,1,1,1]}},H={...k,args:{parts:[2,"-",2,"-",2],validationErrorMessages:["Input is invalid"],label:"Code input",required:!0,onChange:P()},play:async({canvasElement:r})=>{const l=x(r).getByText("Input is invalid");n(l).toBeVisible()}},B={...k,args:{parts:[4,3,8],onChange:P()},play:async({canvasElement:r})=>{const e=x(r),l=e.getByTitle("Code input"),u=e.getByText("Value:"),t=x(l).getAllByRole("textbox",{hidden:!0});n(t.length).toBe(3),await h.type(t[0],"abcdefghijklmnop"),n(t[0]).toHaveValue("abcd"),n(t[1]).toHaveValue("efg"),n(t[2]).toHaveValue("hijklmno"),await C(()=>n(u).toHaveTextContent("Value: abcdefghijklmno"))}},I={...k,args:{parts:[4,"-",4,"-",4],onChange:P()},play:async({canvasElement:r})=>{var w,f,y,R;const e=x(r),l=e.getByTitle("Code input"),u=e.getByText("Value:"),t=x(l).getAllByRole("textbox",{hidden:!0});n(t.length).toBe(3),await h.type(t[0],"abcdefghijklmnop"),n(t[0]).toHaveValue("abcd"),n(t[1]).toHaveValue("efgh"),n(t[2]).toHaveValue("ijkl"),await C(()=>n(u).toHaveTextContent("Value: abcdefghijkl")),n((f=(w=t[0].parentElement)==null?void 0:w.parentElement)==null?void 0:f.nextSibling).toHaveTextContent("-"),n((R=(y=t[1].parentElement)==null?void 0:y.parentElement)==null?void 0:R.nextSibling).toHaveTextContent("-")}},j={...k,args:{onChange:P(),parts:[1,{length:1,rightOverlay:"+",leftOverlay:"+"},1],rightOverlay:"+",leftOverlay:"+"},play:async({canvasElement:r})=>{const e=x(r),l=e.getByTitle("Code input"),u=e.getByText("Value:"),t=x(l).getAllByRole("textbox",{hidden:!0});n(t.length).toBe(3),await h.type(t[0],"abc"),n(t[0]).toHaveValue("a"),n(t[1]).toHaveValue("b"),n(t[2]).toHaveValue("c"),await C(()=>n(u).toHaveTextContent("Value: abc")),n(t[1].nextSibling).toHaveTextContent("+")}};var J,Q,X,Y,Z;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...Template,
  args: {
    parts: [1, 1, 1],
    onChange: fn()
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
    await userEvent.type(inputs[0], '123');
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
    await userEvent.type(inputs[0], '4567');
    expect(inputs[0]).toHaveValue('4');
    expect(inputs[1]).toHaveValue('5');
    expect(inputs[2]).toHaveValue('6');
    await waitFor(() => expect(value).toHaveTextContent('Value: 456'));
  }
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"stories",...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,te,ne;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,se;H.parameters={...H.parameters,docs:{...(ae=H.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...Template,
  args: {
    parts: [2, '-', 2, '-', 2],
    validationErrorMessages: ['Input is invalid'],
    label: 'Code input',
    required: true,
    onChange: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('Input is invalid');
    expect(label).toBeVisible();
  }
}`,...(se=(oe=H.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,ie,le;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...Template,
  args: {
    parts: [4, 3, 8],
    onChange: fn()
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
    await userEvent.type(inputs[0], 'abcdefghijklmnop');
    expect(inputs[0]).toHaveValue('abcd');
    expect(inputs[1]).toHaveValue('efg');
    expect(inputs[2]).toHaveValue('hijklmno');
    await waitFor(() => expect(value).toHaveTextContent('Value: abcdefghijklmno'));
  }
}`,...(le=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,ue,pe;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  ...Template,
  args: {
    parts: [4, '-', 4, '-', 4],
    onChange: fn()
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
    await userEvent.type(inputs[0], 'abcdefghijklmnop');
    expect(inputs[0]).toHaveValue('abcd');
    expect(inputs[1]).toHaveValue('efgh');
    expect(inputs[2]).toHaveValue('ijkl');
    await waitFor(() => expect(value).toHaveTextContent('Value: abcdefghijkl'));
    expect(inputs[0].parentElement?.parentElement?.nextSibling).toHaveTextContent('-');
    expect(inputs[1].parentElement?.parentElement?.nextSibling).toHaveTextContent('-');
  }
}`,...(pe=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var de,me,ge;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
  ...Template,
  args: {
    onChange: fn(),
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
    await userEvent.type(inputs[0], 'abc');
    expect(inputs[0]).toHaveValue('a');
    expect(inputs[1]).toHaveValue('b');
    expect(inputs[2]).toHaveValue('c');
    await waitFor(() => expect(value).toHaveTextContent('Value: abc'));
    expect(inputs[1].nextSibling).toHaveTextContent('+');
  }
}`,...(ge=(me=j.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};const et=["Default","Sizes","ValidationError","DifferentLengths","WithTextBetween","WithOverlays"],pt=Object.freeze(Object.defineProperty({__proto__:null,Default:T,DifferentLengths:B,Sizes:S,ValidationError:H,WithOverlays:j,WithTextBetween:I,__namedExportsOrder:et,default:Ze},Symbol.toStringTag,{value:"Module"}));export{b as C,T as D,S,H as V,I as W,j as a,pt as c};
