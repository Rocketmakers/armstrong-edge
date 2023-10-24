import{j as l,a as t,F as G}from"./jsx-runtime-63e4a166.js";import{w as s,u as F,a as O,e as r}from"./index-3ffc2e85.js";import{a as Ue}from"./index.esm-6bb7939e.js";import{G as ze,u as Ke,f as Qe,g as Ye}from"./config.context-03ebf2cb.js";import{r as W}from"./index-c4905b50.js";import{u as Ze}from"./useDidUpdateEffect-2528cb48.js";import{r as X}from"./arrays-f0b52596.js";import{c as U}from"./classNames-9011e307.js";import{c as ea}from"./maths-23377890.js";import{a as aa,L as ta,u as na}from"./label.component-23add95d.js";import{S as ra}from"./statusWrapper.component-5d5028da.js";import{V as sa}from"./validationErrors.component-2d32de4a.js";import{B as ia}from"./button.component-f355d20f.js";import"./index-999ec173.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";import"./index-742b7287.js";import"./index-07d1f67e.js";import"./spinner.component-c2b96b2c.js";function la(e){return ze({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.556 11.169l-1.849-1.232.984-1.993c.148-.3.137-.654-.03-.943-.168-.29-.468-.477-.802-.498l-2.218-.143-.144-2.218c-.02-.334-.208-.635-.497-.802-.29-.167-.645-.18-.943-.03l-1.991.985-1.233-1.849c-.371-.557-1.293-.557-1.664 0l-1.234 1.848-1.992-.984c-.299-.15-.654-.137-.943.03-.29.167-.477.468-.498.802l-.143 2.217-2.218.143c-.334.022-.635.209-.802.498s-.179.644-.03.943l.984 1.993-1.849 1.233c-.278.186-.445.498-.445.832s.167.646.445.832l1.85 1.233-.985 1.992c-.148.3-.137.654.03.943s.468.477.802.498l2.218.143.143 2.218c.021.333.208.634.498.801s.642.179.943.031l1.992-.985 1.233 1.849c.186.278.498.445.832.445s.646-.167.832-.445l1.233-1.849 1.991.985c.299.148.653.136.943-.03.29-.167.477-.468.498-.802l.143-2.217 2.219-.144c.334-.021.635-.208.802-.498s.179-.644.03-.943l-.984-1.992 1.849-1.233c.278-.186.445-.498.445-.832 0-.334-.167-.647-.445-.832zm-4.032 2.997l.71 1.435-1.6.104c-.502.033-.901.432-.934.934l-.103 1.598-1.435-.709c-.45-.224-.996-.077-1.275.342l-.887 1.33-.889-1.333c-.191-.287-.508-.445-.833-.445-.149 0-.3.033-.442.104l-1.436.709-.103-1.598c-.032-.501-.432-.901-.934-.934l-1.596-.103.71-1.435c.223-.451.076-.997-.342-1.275l-1.333-.889 1.332-.888c.418-.279.564-.825.342-1.275l-.71-1.436 1.6-.103c.502-.033.901-.432.934-.934l.103-1.598 1.435.709c.448.221.996.076 1.275-.342l.887-1.331.889 1.333c.279.418.826.563 1.275.342l1.436-.71.104 1.599c.033.501.433.9.934.933l1.598.103-.709 1.437c-.223.451-.076.996.342 1.275l1.332.888-1.333.889c-.42.277-.566.823-.344 1.274z"}}]})(e)}function oa(e){return ze({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.064 10.109l1.179-2.387c.074-.149.068-.327-.015-.471-.083-.145-.234-.238-.401-.249l-2.656-.172-.172-2.656c-.011-.167-.104-.317-.249-.401-.145-.084-.322-.09-.472-.015l-2.385 1.18-1.477-2.215c-.186-.278-.646-.278-.832 0l-1.477 2.215-2.385-1.18c-.151-.075-.327-.069-.472.015-.145.083-.238.234-.249.401l-.171 2.656-2.657.171c-.167.011-.318.104-.401.249-.084.145-.089.322-.015.472l1.179 2.386-2.214 1.477c-.139.093-.223.249-.223.416s.083.323.223.416l2.215 1.477-1.18 2.386c-.074.15-.068.327.015.472.083.144.234.238.401.248l2.656.171.171 2.657c.011.167.104.317.249.401.144.083.32.088.472.015l2.386-1.179 1.477 2.214c.093.139.249.223.416.223s.323-.083.416-.223l1.477-2.214 2.386 1.179c.15.073.327.068.472-.015s.238-.234.249-.401l.171-2.656 2.656-.172c.167-.011.317-.104.401-.249.083-.145.089-.322.015-.472l-1.179-2.385 2.214-1.478c.139-.093.223-.249.223-.416s-.083-.323-.223-.416l-2.214-1.475z"}}]})(e)}const K=(e,a)=>typeof e=="function"?e(a):e;const H=W.forwardRef(({index:e,value:a,onSelectPart:n,filledIcon:u,emptyIcon:b,step:y,mode:I,readOnly:m,disabled:B},k)=>{const f=Math.floor(1/(y||1)),E=a&&a>=e+1,P=a&&a<e+1&&a>e;return l("div",{ref:k,className:"arm-rating-part",style:a?{"--rating-amount":`${ea((a-e)*100,0,100)}%`}:void 0,"data-filled":E,"data-part":P,children:[l("div",{className:"arm-rating-part-icon-wrapper",children:[u&&t("div",{className:"arm-rating-part-icon arm-rating-part-filled",children:t("div",{className:"arm-rating-part-icon-inner",children:K(u,e)})}),b&&t("div",{className:"arm-rating-part-icon arm-rating-part-empty",children:t("div",{className:"arm-rating-part-icon-inner",children:K(b,e)})})]}),!m&&I==="buttons"&&t("div",{className:"arm-rating-part-buttons",children:X(f,o=>{const p=e+(f===2?.5:1)+(o?.5:0);return t(ia,{role:"radio","aria-checked":p===a,type:"button",className:"arm-rating-button",onClick:()=>n((y||1)*(o+1)),"aria-label":p.toString(),disabled:B},o)})}),!m&&I==="radio"&&t("div",{className:"arm-rating-part-radios",children:X(f,o=>{const p=e+(f===2?.5:1)+(o?.5:0);return t("div",{className:"arm-rating-part-radio-wrapper",children:t("input",{className:"arm-rating-part-radio",type:"radio",onChange:()=>n((y||1)*(o+1)),"aria-label":p.toString(),value:p,checked:p===a,disabled:B})},o)})})]})});H.displayName="RatingPart";const d=W.forwardRef(({bind:e,value:a,onValueChange:n,filledIcon:u,emptyIcon:b,maximum:y,className:I,validationErrorMessages:m,validationMode:B,errorIcon:k,scrollValidationErrorsIntoView:f,step:E,error:P,statusPosition:o,pending:p,leftOverlay:He,rightOverlay:Fe,mode:j,disabled:_,statusClassName:ca,validationErrorsClassName:da,labelClassName:Oe,labelId:ke,label:J,required:Pe,requiredIndicator:_e,displaySize:We,autoValidate:Xe,...je},Je)=>{const[v,g,c]=aa(e,{value:a,onChange:n,validationErrorMessages:m,validationMode:B,autoValidate:Xe,validationErrorIcon:k}),w=Ke({validationMode:c.validationMode,inputDisplaySize:We,scrollValidationErrorsIntoView:f,requiredIndicator:_e,validationErrorIcon:c.validationErrorIcon,autoValidate:c.autoValidate}),$e=W.useId(),$=ke??$e;return Ze(()=>{w.autoValidate&&c.validate(),c.setTouched(!0)},[v]),l(G,{children:[l("div",{ref:Je,role:"radiogroup","aria-label":v!==void 0?`Rating: ${v}/${y}`:void 0,...je,className:U("arm-rating",I),"data-read-only":!g,"data-size":w.inputDisplaySize,children:[J&&t(ta,{id:$,className:U("arm-rating-input-label",Oe),"data-disabled":_,required:Pe,displaySize:w.inputDisplaySize,requiredIndicator:w.requiredIndicator,children:J}),t("div",{className:"arm-rating-input-inner","aria-labelledby":$,children:t(ra,{error:P,statusPosition:o,errorIcon:c.validationErrorIcon,validationMode:c.validationMode,pending:p,children:l(G,{children:[He,l("div",{className:"arm-rating-parts",children:[X(y,h=>t(H,{index:h,filledIcon:u,emptyIcon:b,value:v||void 0,onSelectPart:Ge=>g==null?void 0:g(h+Ge),step:E,mode:j,disabled:_,readOnly:!g},h)),j==="range"&&t("input",{className:"arm-rating-range",type:"range",step:E,min:0,max:y,disabled:_,value:v||void 0,onChange:h=>g==null?void 0:g(h.currentTarget.valueAsNumber)})]}),Fe]})})})]}),!!(m!=null&&m.length)&&c.shouldShowValidationErrorMessage&&t(sa,{validationErrors:m,validationMode:c.validationMode,scrollIntoView:f})]})});d.defaultProps={maximum:5,filledIcon:t(Qe,{}),emptyIcon:t(Ye,{}),step:1,mode:"buttons"};d.displayName="Rating";try{H.displayName="RatingPart",H.__docgenInfo={description:"",displayName:"RatingPart",props:{validationMode:{defaultValue:null,description:"how to render the validation errors",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"message"'},{value:'"both"'}]}},scrollValidationErrorsIntoView:{defaultValue:null,description:"will scroll the validation errors into view when the length of validationErrors changes",name:"scrollValidationErrorsIntoView",required:!1,type:{name:"boolean"}},requiredIndicator:{defaultValue:null,description:'Symbol to use as the required indicator on the label, defaults to "*"',name:"requiredIndicator",required:!1,type:{name:"ReactNode"}},autoValidate:{defaultValue:null,description:"should the input validate automatically against the provided schema? Default: `true`",name:"autoValidate",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Some optional label content",name:"label",required:!1,type:{name:"ReactNode"}},step:{defaultValue:{value:"1"},description:"the size of each possible step - defaults to 1, set to 0.5 to allow half stars",name:"step",required:!1,type:{name:"enum",value:[{value:"1"},{value:"0.5"}]}},bind:{defaultValue:null,description:"prop for binding to an Armstrong form binder (see forms documentation)",name:"bind",required:!1,type:{name:"IBindingProps<TBind>"}},value:{defaultValue:null,description:"current value, as a number, of the rating",name:"value",required:!1,type:{name:"NullOrUndefined<number>"}},disabled:{defaultValue:null,description:"Whether to disable the input",name:"disabled",required:!1,type:{name:"boolean"}},pending:{defaultValue:null,description:"show a spinner and disable",name:"pending",required:!1,type:{name:"boolean"}},displaySize:{defaultValue:null,description:"which size variant to use",name:"displaySize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},leftOverlay:{defaultValue:null,description:"icon definition for left icon, optionally uses custom JSX",name:"leftOverlay",required:!1,type:{name:"Element"}},rightOverlay:{defaultValue:null,description:"icon definition for right icon, optionally uses custom JSX",name:"rightOverlay",required:!1,type:{name:"Element"}},required:{defaultValue:null,description:"Should the label show a required indicator?",name:"required",required:!1,type:{name:"boolean"}},statusPosition:{defaultValue:null,description:"which side of the button to show the spinner on - defaults to 'right'",name:"statusPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},labelClassName:{defaultValue:null,description:"Class name for the label component",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"Optional ID for the label element",name:"labelId",required:!1,type:{name:"string"}},statusClassName:{defaultValue:null,description:"Class name for the status component",name:"statusClassName",required:!1,type:{name:"string"}},validationErrorsClassName:{defaultValue:null,description:"Class name for the validation errors component",name:"validationErrorsClassName",required:!1,type:{name:"string"}},validationErrorMessages:{defaultValue:null,description:"array of validation errors to render",name:"validationErrorMessages",required:!1,type:{name:"ValidationMessage[]"}},errorIcon:{defaultValue:null,description:"the icon to use for validation errors",name:"errorIcon",required:!1,type:{name:"Element"}},error:{defaultValue:null,description:"show an error state icon on the component (will be true automatically if validationErrorMessages are passed in or errors are in the binder)",name:"error",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"called when the value of the input changes",name:"onValueChange",required:!1,type:{name:"((newValue: TBind) => void)"}},mode:{defaultValue:{value:"buttons"},description:`the kind of elements used to handle the interaction

range will use an input with type='range' to handle the interaction, buttons will render a series of buttons, radio will render radio inputs`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"radio"'},{value:'"range"'},{value:'"buttons"'}]}},filledIcon:{defaultValue:{value:"<ImStarFull />"},description:"the icon to use for a filled star",name:"filledIcon",required:!1,type:{name:"RatingIconDefinition"}},emptyIcon:{defaultValue:{value:"<ImStarEmpty />"},description:"the icon to use for an empty star",name:"emptyIcon",required:!1,type:{name:"RatingIconDefinition"}},maximum:{defaultValue:{value:"5"},description:"the maximum possible value of the rating",name:"maximum",required:!1,type:{name:"number"}}}}}catch{}const La={title:"Components/Rating",component:d,parameters:{docs:{description:{component:"meta"}}}},i={render:e=>{const{formProp:a,formState:n}=na({rating:0});return l("div",{children:[t(d,{...e,bind:a("rating").bind()}),l("div",{"data-testid":"result",style:{marginTop:"20px"},children:["Bound value: ",n==null?void 0:n.rating]})]})}},T={...i,play:async({canvasElement:e})=>{const a=s(e).getAllByRole("radio");F.click(a[2]);const n=s(e).getByTestId("result");await O(()=>r(n).toHaveTextContent("Bound value: 3"))}},x={...i,args:{step:.5},play:async({canvasElement:e})=>{const a=s(e).getAllByRole("radio");F.click(a[4]);const n=s(e).getByTestId("result");await O(()=>r(n).toHaveTextContent("Bound value: 2.5"))}},V={...i,args:{disabled:!0},play:async({canvasElement:e})=>{s(e).getAllByRole("radio").forEach(n=>r(n).toBeDisabled())}},q={render:()=>l("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[t(d,{label:"Default"}),t(d,{label:"Required",required:!0})]}),play:async({canvasElement:e})=>{const a=s(e),n=a.getByLabelText("Default"),u=a.getByLabelText("Required *");r(n).toBeInTheDocument(),r(u).toBeInTheDocument()}},R={render:()=>l("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t(d,{label:"Small Rating",displaySize:"small",required:!0}),t(d,{label:"Medium Rating",required:!0}),t(d,{label:"Large Rating",displaySize:"large",required:!0})]})},S={...i,args:{maximum:10},play:async({canvasElement:e})=>{const a=s(e).getAllByRole("radio");F.click(a[8]);const n=s(e).getByTestId("result");await O(()=>r(n).toHaveTextContent("Bound value: 9"))}},C={...i,args:{emptyIcon:t(la,{"data-testid":"empty-custom"}),filledIcon:t(oa,{})},play:async({canvasElement:e})=>{const a=s(e).getAllByTestId("empty-custom");r(a).toHaveLength(5),a.forEach(n=>r(n).toBeVisible())}},D={...i,args:{emptyIcon:t("div",{"data-testid":"empty-custom",children:"X"}),filledIcon:t("div",{children:"X"})},play:async({canvasElement:e})=>{const a=s(e).getAllByTestId("empty-custom");r(a).toHaveLength(5),a.forEach(n=>r(n).toBeVisible())}},N={...i,args:{emptyIcon:e=>t("div",{"data-testid":"empty-custom",children:e+1}),filledIcon:e=>t("div",{children:e+1})},play:async({canvasElement:e})=>{const a=s(e).getAllByTestId("empty-custom");r(a).toHaveLength(5),a.forEach((n,u)=>{r(n).toBeVisible(),r(n).toHaveTextContent(u+1)})}},A={...i,args:{leftOverlay:t(Ue,{"data-testid":"left-icon"}),pending:!0},play:async({canvasElement:e})=>{const a=s(e).getByTestId("left-icon");r(a).toBeVisible();const n=s(e).getByRole("status",{name:"Loading..."});r(n).toBeVisible()}},L={...i,args:{validationErrorMessages:["Invalid rating"]},play:async({canvasElement:e})=>{const a=s(e).getByText("Invalid rating");r(a).toBeVisible()}},M={...i,args:{mode:"radio"},play:async({canvasElement:e})=>{const a=s(e).getAllByRole("radio");F.click(a[2]);const n=s(e).getByTestId("result");await O(()=>r(n).toHaveTextContent("Bound value: 3"))}},z={...i,args:{mode:"range"},play:async({canvasElement:e})=>{const a=s(e).getByRole("slider");r(a).toBeInTheDocument()}};var Q,Y,Z;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...Template,
  play: async ({
    canvasElement
  }) => {
    const radios = within(canvasElement).getAllByRole('radio');
    userEvent.click(radios[2]);
    const result = within(canvasElement).getByTestId('result');
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 3'));
  }
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...Template,
  args: {
    step: 0.5
  },
  play: async ({
    canvasElement
  }) => {
    const radios = within(canvasElement).getAllByRole('radio');
    userEvent.click(radios[4]);
    const result = within(canvasElement).getByTestId('result');
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 2.5'));
  }
}`,...(te=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,re,se;V.parameters={...V.parameters,docs:{...(ne=V.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...Template,
  args: {
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const radios = within(canvasElement).getAllByRole('radio');
    radios.forEach(r => expect(r).toBeDisabled());
  }
}`,...(se=(re=V.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,le,oe;q.parameters={...q.parameters,docs:{...(ie=q.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }}>
        <Rating label="Default" />
        <Rating label="Required" required={true} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const defaultInput = canvas.getByLabelText('Default');
    const requiredInput = canvas.getByLabelText('Required *');
    expect(defaultInput).toBeInTheDocument();
    expect(requiredInput).toBeInTheDocument();
  }
}`,...(oe=(le=q.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ce,de,ue;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <Rating label={'Small Rating'} displaySize="small" required={true} />
        <Rating label={'Medium Rating'} required={true} />
        <Rating label={'Large Rating'} displaySize="large" required={true} />
      </div>;
  }
}`,...(ue=(de=R.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,ge;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  ...Template,
  args: {
    maximum: 10
  },
  play: async ({
    canvasElement
  }) => {
    const radios = within(canvasElement).getAllByRole('radio');
    userEvent.click(radios[8]);
    const result = within(canvasElement).getByTestId('result');
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 9'));
  }
}`,...(ge=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ye,fe,ve;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  ...Template,
  args: {
    emptyIcon: <TiStarburstOutline data-testid="empty-custom" />,
    filledIcon: <TiStarburst />
  },
  play: async ({
    canvasElement
  }) => {
    const customs = within(canvasElement).getAllByTestId('empty-custom');
    expect(customs).toHaveLength(5);
    customs.forEach(c => expect(c).toBeVisible());
  }
}`,...(ve=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var he,be,Ie;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`{
  ...Template,
  args: {
    emptyIcon: <div data-testid="empty-custom">X</div>,
    filledIcon: <div>X</div>
  },
  play: async ({
    canvasElement
  }) => {
    const customs = within(canvasElement).getAllByTestId('empty-custom');
    expect(customs).toHaveLength(5);
    customs.forEach(c => expect(c).toBeVisible());
  }
}`,...(Ie=(be=D.parameters)==null?void 0:be.docs)==null?void 0:Ie.source}}};var Be,Ee,we;N.parameters={...N.parameters,docs:{...(Be=N.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  ...Template,
  args: {
    emptyIcon: index => <div data-testid="empty-custom">{index + 1}</div>,
    filledIcon: index => <div>{index + 1}</div>
  },
  play: async ({
    canvasElement
  }) => {
    const customs = within(canvasElement).getAllByTestId('empty-custom');
    expect(customs).toHaveLength(5);
    customs.forEach((c, i) => {
      expect(c).toBeVisible();
      expect(c).toHaveTextContent(i + 1);
    });
  }
}`,...(we=(Ee=N.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};var Te,xe,Ve;A.parameters={...A.parameters,docs:{...(Te=A.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  ...Template,
  args: {
    leftOverlay: <AiFillEye data-testid="left-icon" />,
    pending: true
  },
  play: async ({
    canvasElement
  }) => {
    const leftIcon = within(canvasElement).getByTestId('left-icon');
    expect(leftIcon).toBeVisible();
    const spinner = within(canvasElement).getByRole('status', {
      name: 'Loading...'
    });
    expect(spinner).toBeVisible();
  }
}`,...(Ve=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:Ve.source}}};var qe,Re,Se;L.parameters={...L.parameters,docs:{...(qe=L.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  ...Template,
  args: {
    validationErrorMessages: ['Invalid rating']
  },
  play: async ({
    canvasElement
  }) => {
    const leftIcon = within(canvasElement).getByText('Invalid rating');
    expect(leftIcon).toBeVisible();
  }
}`,...(Se=(Re=L.parameters)==null?void 0:Re.docs)==null?void 0:Se.source}}};var Ce,De,Ne;M.parameters={...M.parameters,docs:{...(Ce=M.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  ...Template,
  args: {
    mode: 'radio'
  },
  play: async ({
    canvasElement
  }) => {
    const radios = within(canvasElement).getAllByRole('radio');
    userEvent.click(radios[2]);
    const result = within(canvasElement).getByTestId('result');
    await waitFor(() => expect(result).toHaveTextContent('Bound value: 3'));
  }
}`,...(Ne=(De=M.parameters)==null?void 0:De.docs)==null?void 0:Ne.source}}};var Ae,Le,Me;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  ...Template,
  args: {
    mode: 'range'
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole('slider');
    expect(input).toBeInTheDocument();
  }
}`,...(Me=(Le=z.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};const Ma=["Default","Half","Disabled","Labelled","Sizes","CustomMax","CustomIcons","CustomDOM","CustomDOMFromIndex","WithIconAndStatus","WithError","Radio","Range"];export{D as CustomDOM,N as CustomDOMFromIndex,C as CustomIcons,S as CustomMax,T as Default,V as Disabled,x as Half,q as Labelled,M as Radio,z as Range,R as Sizes,L as WithError,A as WithIconAndStatus,Ma as __namedExportsOrder,La as default};
//# sourceMappingURL=rating.stories-059c814e.js.map
