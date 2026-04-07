import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as M,w as E,u as x,a as y,e as d}from"./index-BmZcwVSF.js";import{u as qe,e as _e}from"./config.context-BKnTehkl.js";import{r as b}from"./index-DwQS_Y10.js";import{d as Me,P as D,b as z,c as we}from"./index-CWQsrU90.js";import{u as L}from"./index-DKCiyFsV.js";import{R as ze,I as Le,c as ge}from"./index-Dv-BAVC1.js";import{u as Oe}from"./index-wJcBHZIT.js";import{u as Ve}from"./index-D3JXVD-Y.js";import{u as Ue}from"./index-51PM6oTJ.js";import{P as Ke}from"./index-CC-sFNo4.js";import{a as Xe}from"./useDidUpdateEffect-DxNflIL8.js";import{a as $e,L as Je,u as I}from"./label.component-CwmwBemr.js";import{g as We}from"./options-Q_-Fwsn7.js";import{V as Ye}from"./validationErrors.component-44eD-gIZ.js";var O="Radio",[Qe,he]=we(O),[Ze,ea]=Qe(O),xe=b.forwardRef((n,t)=>{const{__scopeRadio:e,name:r,checked:o=!1,required:i,disabled:s,value:l="on",onCheck:u,form:f,...g}=n,[p,h]=b.useState(null),c=L(t,B=>h(B)),m=b.useRef(!1),R=p?f||!!p.closest("form"):!0;return a.jsxs(Ze,{scope:e,checked:o,disabled:s,children:[a.jsx(D.button,{type:"button",role:"radio","aria-checked":o,"data-state":ke(o),"data-disabled":s?"":void 0,disabled:s,value:l,...g,ref:c,onClick:z(n.onClick,B=>{o||u==null||u(),R&&(m.current=B.isPropagationStopped(),m.current||B.stopPropagation())})}),R&&a.jsx(Be,{control:p,bubbles:!m.current,name:r,value:l,checked:o,required:i,disabled:s,form:f,style:{transform:"translateX(-100%)"}})]})});xe.displayName=O;var ye="RadioIndicator",Re=b.forwardRef((n,t)=>{const{__scopeRadio:e,forceMount:r,...o}=n,i=ea(ye,e);return a.jsx(Ke,{present:r||i.checked,children:a.jsx(D.span,{"data-state":ke(i.checked),"data-disabled":i.disabled?"":void 0,...o,ref:t})})});Re.displayName=ye;var aa="RadioBubbleInput",Be=b.forwardRef(({__scopeRadio:n,control:t,checked:e,bubbles:r=!0,...o},i)=>{const s=b.useRef(null),l=L(s,i),u=Ue(e),f=Ve(t);return b.useEffect(()=>{const g=s.current;if(!g)return;const p=window.HTMLInputElement.prototype,c=Object.getOwnPropertyDescriptor(p,"checked").set;if(u!==e&&c){const m=new Event("click",{bubbles:r});c.call(g,e),g.dispatchEvent(m)}},[u,e,r]),a.jsx(D.input,{type:"radio","aria-hidden":!0,defaultChecked:e,...o,tabIndex:-1,ref:l,style:{...o.style,...f,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});Be.displayName=aa;function ke(n){return n?"checked":"unchecked"}var ta=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],H="RadioGroup",[na]=we(H,[ge,he]),Ee=ge(),Ie=he(),[oa,ra]=na(H),Te=b.forwardRef((n,t)=>{const{__scopeRadioGroup:e,name:r,defaultValue:o,value:i,required:s=!1,disabled:l=!1,orientation:u,dir:f,loop:g=!0,onValueChange:p,...h}=n,c=Ee(e),m=Oe(f),[R,B]=Me({prop:i,defaultProp:o??null,onChange:p,caller:H});return a.jsx(oa,{scope:e,name:r,required:s,disabled:l,value:R,onValueChange:B,children:a.jsx(ze,{asChild:!0,...c,orientation:u,dir:m,loop:g,children:a.jsx(D.div,{role:"radiogroup","aria-required":s,"aria-orientation":u,"data-disabled":l?"":void 0,dir:m,...h,ref:t})})})});Te.displayName=H;var Ce="RadioGroupItem",Se=b.forwardRef((n,t)=>{const{__scopeRadioGroup:e,disabled:r,...o}=n,i=ra(Ce,e),s=i.disabled||r,l=Ee(e),u=Ie(e),f=b.useRef(null),g=L(t,f),p=i.value===o.value,h=b.useRef(!1);return b.useEffect(()=>{const c=R=>{ta.includes(R.key)&&(h.current=!0)},m=()=>h.current=!1;return document.addEventListener("keydown",c),document.addEventListener("keyup",m),()=>{document.removeEventListener("keydown",c),document.removeEventListener("keyup",m)}},[]),a.jsx(Le,{asChild:!0,...l,focusable:!s,active:p,children:a.jsx(xe,{disabled:s,required:i.required,checked:p,...u,...o,name:i.name,ref:g,onCheck:()=>i.onValueChange(o.value),onKeyDown:z(c=>{c.key==="Enter"&&c.preventDefault()}),onFocus:z(o.onFocus,()=>{var c;h.current&&((c=f.current)==null||c.click())})})})});Se.displayName=Ce;var ia="RadioGroupIndicator",je=b.forwardRef((n,t)=>{const{__scopeRadioGroup:e,...r}=n,o=Ie(e);return a.jsx(Re,{...o,...r,ref:t})});je.displayName=ia;var sa=Te,da=Se,ca=je;const w=({ref:n,bind:t,options:e,className:r,value:o,errorIcon:i,validationMode:s,validationErrorMessages:l,onChange:u,customIndicator:f,error:g,displaySize:p,label:h,labelClassName:c,required:m,disabled:R,scrollValidationErrorsIntoView:B,requiredIndicator:Fe,displayMode:N="radio",validationErrorsClassName:Pe,labelId:Ae,autoValidate:Ge,...De})=>{const[T,He,k]=$e(t,{value:o,validationErrorMessages:l,validationErrorIcon:i,validationMode:s,onChange:u,autoValidate:Ge}),q=qe({validationMode:k.validationMode,requiredIndicator:Fe,scrollValidationErrorsIntoView:B,validationErrorIcon:k.validationErrorIcon,inputDisplaySize:p,autoValidate:k.autoValidate});return Xe(()=>{q.autoValidate&&k.validate(),k.setTouched(!0)},[T]),a.jsxs(a.Fragment,{children:[h&&a.jsx(Je,{id:Ae,className:M("arm-radio-group-label",c),required:m,requiredIndicator:q.requiredIndicator,displaySize:q.inputDisplaySize,children:h}),a.jsx(sa,{className:M("arm-radio-group",r),"data-error":g||!!(l!=null&&l.length),"data-disabled":R,"data-size":p,"data-mode":N,value:(T==null?void 0:T.toString())??"undefined",onValueChange:v=>He(typeof T=="number"&&v!==null&&v!==void 0?+v:v),disabled:R,ref:n,...De,children:e.map((v,Ne)=>{var U,K,X;const _=T===v.id,V=We(v,_);return a.jsxs("div",{className:"arm-radio-group-item-container",children:[a.jsx(da,{...v.htmlProps??{},className:"arm-radio-group-item",value:((U=v.id)==null?void 0:U.toString())??"",id:(K=v.id)==null?void 0:K.toString(),disabled:v.disabled,"data-checked":_,"data-index":Ne,children:N==="radio"?a.jsx(ca,{className:"arm-radio-group-item-indicator","data-custom-icon":!!f,children:_&&f}):V}),N==="radio"&&a.jsx("label",{className:"arm-radio-label",htmlFor:(X=v.id)==null?void 0:X.toString(),children:V})]},v.id)})}),k.shouldShowValidationErrorMessage&&!!k.validationErrorMessages.length&&a.jsx(Ye,{validationErrors:k.validationErrorMessages,className:M("arm-radio-errors",Pe)})]})};w.displayName="RadioGroup";w.__docgenInfo={description:"Render a list of radio inputs which binds to a single string",methods:[],displayName:"RadioGroup",props:{displayMode:{required:!1,tsType:{name:"union",raw:"'radio' | 'button'",elements:[{name:"literal",value:"'radio'"},{name:"literal",value:"'button'"}]},description:"Whether to show a vertical list of radio buttons or a horizontal set of adjacent buttons",defaultValue:{value:"'radio'",computed:!1}},bind:{required:!1,tsType:{name:"IBindingProps",elements:[{name:"Id"}],raw:"IBindingProps<Id>"},description:"prop for binding to an Armstrong form binder (see forms documentation)"},options:{required:!0,tsType:{name:"Array",elements:[{name:"IArmstrongOption",elements:[{name:"Id"},{name:"Omit",elements:[{name:"RadixRadioGroup.RadioGroupItemProps"},{name:"literal",value:"'value'"}],raw:"Omit<RadixRadioGroup.RadioGroupItemProps, 'value'>"}],raw:`IArmstrongOption<
  Id,
  Omit<RadixRadioGroup.RadioGroupItemProps, 'value'>
>`}],raw:"RadioGroupOption<Id>[]"},description:"The options to be shown in the input"},className:{required:!1,tsType:{name:"string"},description:"CSS className property"},value:{required:!1,tsType:{name:"Id"},description:"the current value of the radioInput"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newValue: Id) => void",signature:{arguments:[{type:{name:"Id"},name:"newValue"}],return:{name:"void"}}},description:"Fired when the value changes"},error:{required:!1,tsType:{name:"boolean"},description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)"},customIndicator:{required:!1,tsType:{name:"React.JSX.Element"},description:"(Optional) A custom JSX.Element for the checked indicator."},displaySize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | CustomString",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"`custom-${string}`"}]},description:"which size variant to use"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label for the whole radio group itself"},labelClassName:{required:!1,tsType:{name:"string"},description:"(Optional) Class name for the label component"},labelId:{required:!1,tsType:{name:"string"},description:"(Optional) Id to use for the checkbox. Falls back to React ID if not provided"},required:{required:!1,tsType:{name:"boolean"},description:"Indicates if field must be used to submit form"},disabled:{required:!1,tsType:{name:"boolean"},description:"wether input's value can be changed by user"},requiredIndicator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Symbol to use as the required indicator on the label, defaults to "*"'},autoValidate:{required:!1,tsType:{name:"boolean"},description:"should the input validate automatically against the provided schema? Default: `true`"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}},composes:["Pick"]};const la={title:"Components/RadioGroup",component:w,parameters:{docs:{description:{component:"metadata"}}}},C={render:()=>{const n={value:void 0},{formProp:t,formState:e}=I(n);return a.jsxs(a.Fragment,{children:[a.jsx(w,{bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}]}),a.jsx("br",{}),a.jsxs("p",{children:["Bound value: ",e==null?void 0:e.value]})]})},play:async({canvasElement:n})=>{const t=E(n),e=t.getByText("Bound value:"),[r,o,i,s]=await t.findAllByRole("radio");await x.click(r),await y(()=>d(e).toHaveTextContent("Bound value: 1")),await x.click(o),await y(()=>d(e).toHaveTextContent("Bound value: 2")),await x.click(i),await y(()=>d(e).toHaveTextContent("Bound value: 3")),await x.click(s),await y(()=>d(e).toHaveTextContent("Bound value: 4"))}},S={render:()=>{const n={value:void 0},{formProp:t,formState:e}=I(n);return a.jsxs(a.Fragment,{children:[a.jsx(w,{displayMode:"button",bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}]}),a.jsxs("p",{children:["Bound value: ",e==null?void 0:e.value]})]})},play:async({canvasElement:n})=>{const t=E(n),e=t.getByText("Bound value:"),[r,o,i,s]=await t.findAllByRole("radio");await x.click(r),await y(()=>d(e).toHaveTextContent("Bound value: 1")),await x.click(o),await y(()=>d(e).toHaveTextContent("Bound value: 2")),await x.click(i),await y(()=>d(e).toHaveTextContent("Bound value: 3")),await x.click(s),await y(()=>d(e).toHaveTextContent("Bound value: 4"))}},j={render:()=>{const n={value:void 0},{formProp:t,formState:e}=I(n);return a.jsxs(a.Fragment,{children:[a.jsx(w,{bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],label:"Radio group",disabled:!0}),a.jsx("br",{}),a.jsxs("p",{children:["Bound value: ",e==null?void 0:e.value]})]})},play:async({canvasElement:n})=>{(await E(n).findAllByRole("radio")).forEach(r=>d(r).toHaveAttribute("data-disabled"))}},F={render:()=>{const n={value:void 0},{formProp:t,formState:e}=I(n);return a.jsxs(a.Fragment,{children:[a.jsx(w,{bind:t("value").bind(),displayMode:"button",options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],label:"Radio group",disabled:!0}),a.jsx("br",{}),a.jsxs("p",{children:["Bound value: ",e==null?void 0:e.value]})]})},play:async({canvasElement:n})=>{(await E(n).findAllByRole("radio")).forEach(r=>d(r).toHaveAttribute("data-disabled"))}},P={render:()=>{const n={value:void 0},{formProp:t,formState:e}=I(n);return a.jsxs(a.Fragment,{children:[a.jsx(w,{bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],validationErrorMessages:["Invalid selection"],label:"Radio group"}),a.jsx("br",{}),a.jsxs("p",{children:["Bound value: ",e==null?void 0:e.value]})]})},play:async({canvasElement:n})=>{const t=E(n);d(t.getByText("Invalid selection")).toBeVisible()}},A={render:()=>{const n={value:"1"},{formProp:t,formState:e}=I(n);return a.jsxs(a.Fragment,{children:[a.jsx(w,{bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],customIndicator:a.jsx(_e,{})}),a.jsx("br",{}),a.jsxs("p",{children:["Bound value: ",e==null?void 0:e.value]})]})},play:async({canvasElement:n})=>{const t=E(n),e=await t.findByRole("radio",{checked:!0});d(e.getElementsByTagName("svg").length).toBeGreaterThan(0),(await t.findAllByRole("radio",{checked:!1})).forEach(o=>d(o.getElementsByTagName("svg")).toHaveLength(0))}},G={render:()=>{const n={value:void 0},{formProp:t,formState:e}=I(n);return a.jsxs(a.Fragment,{children:[a.jsx("h2",{children:"Large"}),a.jsx(w,{bind:t("value").bind(),options:[{id:"1",content:"red"},{id:"2",content:"blue"},{id:"3",content:"pink"},{id:"4",content:"brown"}],displaySize:"large",label:"Large radio group",required:!0}),a.jsx("h2",{children:"Medium"}),a.jsx(w,{bind:t("value").bind(),options:[{id:"1b",content:"red"},{id:"2b",content:"blue"},{id:"3b",content:"pink"},{id:"4b",content:"brown"}],displaySize:"medium",label:"Medium radio group",required:!0}),a.jsx("h2",{children:"Small"}),a.jsx(w,{bind:t("value").bind(),options:[{id:"1c",content:"red"},{id:"2c",content:"blue"},{id:"3c",content:"pink"},{id:"4c",content:"brown"}],displaySize:"small",label:"Small radio group",required:!0}),a.jsx("br",{}),a.jsxs("p",{children:["Bound value: ",e==null?void 0:e.value]})]})},play:async({canvasElement:n})=>{const t=E(n),e=t.getByText("Bound value:"),[r,o,i]=await t.findAllByRole("radiogroup");d(r).toHaveAttribute("data-size","large"),d(o).toHaveAttribute("data-size","medium"),d(i).toHaveAttribute("data-size","small");const[s,l,u]=await t.findAllByText("red");await x.click(s),await y(()=>d(e).toHaveTextContent("Bound value: 1")),await x.click(l),await y(()=>d(e).toHaveTextContent("Bound value: 1b")),await x.click(u),await y(()=>d(e).toHaveTextContent("Bound value: 1c"))}};var $,J,W,Y,Q;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    interface IFormData {
      value?: string;
    }
    const data: IFormData = {
      value: undefined
    };
    const {
      formProp,
      formState
    } = useForm(data);
    return <>
        <RadioGroup bind={formProp('value').bind()} options={[{
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
      }]} />
        <br />
        <p>Bound value: {formState?.value}</p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const result = canvas.getByText('Bound value:');
    const [red, blue, pink, brown] = await canvas.findAllByRole('radio');
    await userEvent.click(red);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 1'));
    await userEvent.click(blue);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 2'));
    await userEvent.click(pink);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 3'));
    await userEvent.click(brown);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 4'));
  }
}`,...(W=(J=C.parameters)==null?void 0:J.docs)==null?void 0:W.source},description:{story:"stories",...(Q=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Q.description}}};var Z,ee,ae;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    interface IFormData {
      value?: string;
    }
    const data: IFormData = {
      value: undefined
    };
    const {
      formProp,
      formState
    } = useForm(data);
    return <>
        <RadioGroup displayMode="button" bind={formProp('value').bind()} options={[{
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
      }]} />
        <p>Bound value: {formState?.value}</p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const result = canvas.getByText('Bound value:');
    const [red, blue, pink, brown] = await canvas.findAllByRole('radio');
    await userEvent.click(red);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 1'));
    await userEvent.click(blue);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 2'));
    await userEvent.click(pink);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 3'));
    await userEvent.click(brown);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 4'));
  }
}`,...(ae=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,oe;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    interface IFormData {
      value?: string;
    }
    const data: IFormData = {
      value: undefined
    };
    const {
      formProp,
      formState
    } = useForm(data);
    return <>
        <RadioGroup bind={formProp('value').bind()} options={[{
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
      }]} label={'Radio group'} disabled />
        <br />
        <p>Bound value: {formState?.value}</p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radios = await canvas.findAllByRole('radio');
    radios.forEach(r => expect(r).toHaveAttribute('data-disabled'));
  }
}`,...(oe=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,ie,se;F.parameters={...F.parameters,docs:{...(re=F.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    interface IFormData {
      value?: string;
    }
    const data: IFormData = {
      value: undefined
    };
    const {
      formProp,
      formState
    } = useForm(data);
    return <>
        <RadioGroup bind={formProp('value').bind()} displayMode="button" options={[{
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
      }]} label={'Radio group'} disabled />
        <br />
        <p>Bound value: {formState?.value}</p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radios = await canvas.findAllByRole('radio');
    radios.forEach(r => expect(r).toHaveAttribute('data-disabled'));
  }
}`,...(se=(ie=F.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,ce,le;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    interface IFormData {
      value?: string;
    }
    const data: IFormData = {
      value: undefined
    };
    const {
      formProp,
      formState
    } = useForm(data);
    return <>
        <RadioGroup bind={formProp('value').bind()} options={[{
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
      }]} validationErrorMessages={['Invalid selection']} label={'Radio group'} />
        <br />
        <p>Bound value: {formState?.value}</p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Invalid selection')).toBeVisible();
  }
}`,...(le=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ue,pe,me;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    interface IFormData {
      value?: string;
    }
    const data: IFormData = {
      value: '1'
    };
    const {
      formProp,
      formState
    } = useForm(data);
    return <>
        <RadioGroup bind={formProp('value').bind()} options={[{
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
      }]} customIndicator={<ImCheckmark />} />
        <br />
        <p>Bound value: {formState?.value}</p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radioChecked = await canvas.findByRole('radio', {
      checked: true
    });
    expect(radioChecked.getElementsByTagName('svg').length).toBeGreaterThan(0);
    const radiosUnchecked = await canvas.findAllByRole('radio', {
      checked: false
    });
    radiosUnchecked.forEach(r => expect(r.getElementsByTagName('svg')).toHaveLength(0));
  }
}`,...(me=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ve,be,fe;G.parameters={...G.parameters,docs:{...(ve=G.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => {
    interface IFormData {
      value?: string;
    }
    const data: IFormData = {
      value: undefined
    };
    const {
      formProp,
      formState
    } = useForm(data);
    return <>
        <h2>Large</h2>
        <RadioGroup bind={formProp('value').bind()} options={[{
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
      }]} displaySize="large" label="Large radio group" required />
        <h2>Medium</h2>
        <RadioGroup bind={formProp('value').bind()} options={[{
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
      }]} displaySize="medium" label="Medium radio group" required />
        <h2>Small</h2>
        <RadioGroup bind={formProp('value').bind()} options={[{
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
      }]} displaySize="small" label="Small radio group" required />
        <br />
        <p>Bound value: {formState?.value}</p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const result = canvas.getByText('Bound value:');
    const [large, medium, small] = await canvas.findAllByRole('radiogroup');
    expect(large).toHaveAttribute('data-size', 'large');
    expect(medium).toHaveAttribute('data-size', 'medium');
    expect(small).toHaveAttribute('data-size', 'small');
    const [redLarge, redMedium, redSmall] = await canvas.findAllByText('red');
    await userEvent.click(redLarge);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 1'));
    await userEvent.click(redMedium);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 1b'));
    await userEvent.click(redSmall);
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 1c'));
  }
}`,...(fe=(be=G.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};const ua=["Default","ButtonMode","Disabled","ButtonsDisabled","ValidationError","CustomIcon","Sizes"],Ta=Object.freeze(Object.defineProperty({__proto__:null,ButtonMode:S,ButtonsDisabled:F,CustomIcon:A,Default:C,Disabled:j,Sizes:G,ValidationError:P,__namedExportsOrder:ua,default:la},Symbol.toStringTag,{value:"Module"}));export{S as B,A as C,C as D,w as R,G as S,P as V,Ta as r};
