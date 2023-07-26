import{j as l,a as o,F as y}from"./jsx-runtime-63e4a166.js";import{w as p,e as a,u as c}from"./index-3ffc2e85.js";import{u as j,b as U}from"./config.context-240cf8e4.js";import{r as T}from"./index-c4905b50.js";import{c as $}from"./classNames-9011e307.js";import{a as k,u as b}from"./label.component-da3470d8.js";import{I as x}from"./input.component-29f18d90.js";import"./index-999ec173.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";import"./useContentMemo-75732a9d.js";import"./index-742b7287.js";import"./index-07d1f67e.js";import"./inputWrapper.component-54599bb1.js";import"./statusWrapper.component-af0746af.js";import"./spinner.component-6fee5c63.js";import"./validationErrors.component-7077216a.js";const m=T.forwardRef(({bind:e,limit:n,shouldEnforce:r,value:i,className:t,validationErrorIcon:E,validationErrorsClassName:V,validationErrorsTitle:S,validationMode:A,...O},M)=>{const C=j({validationErrorIcon:E,validationMode:A}),[s,d]=k(e,{value:i}),u=s&&s.length>n;return T.useLayoutEffect(()=>{r&&u&&(d==null||d(s==null?void 0:s.slice(0,n)))},[s,u,n,d,r]),l("div",{ref:M,className:$("arm-character-limit",t),"data-exceeded":u,...O,children:[l("div",{className:"arm-character-limit-text",children:[s==null?void 0:s.length,"/",n]}),u&&o("div",{className:$("arm-character-limit-icon",V),title:S??"Character limit exceeded",children:(C.validationMode==="both"||C.validationMode==="icon")&&C.validationErrorIcon})]})});m.displayName="CharacterLimit";try{m.displayName="CharacterLimit",m.__docgenInfo={description:"Render a character limit from a bound value, showing as an error if the user",displayName:"CharacterLimit",props:{bind:{defaultValue:null,description:"prop for binding to an Armstrong form binder (see forms documentation)",name:"bind",required:!0,type:{name:"IBindingProps<TBind>"}},value:{defaultValue:null,description:"the current value of the string to count",name:"value",required:!1,type:{name:"NullOrUndefined<string>"}},limit:{defaultValue:null,description:"the character limit for the bound input",name:"limit",required:!0,type:{name:"number"}},shouldEnforce:{defaultValue:null,description:"the limit should be enforced by the bind in this component - by default you will have to handle this yourself",name:"shouldEnforce",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"CSS className property",name:"className",required:!1,type:{name:"string"}},validationErrorIcon:{defaultValue:null,description:"the icon to use for the validation errors",name:"validationErrorIcon",required:!1,type:{name:"Element"}},validationErrorsClassName:{defaultValue:null,description:"(Optional) Class name for the validation errors",name:"validationErrorsClassName",required:!1,type:{name:"string"}},validationErrorsTitle:{defaultValue:null,description:"(Optional) Title for the validation errors",name:"validationErrorsTitle",required:!1,type:{name:"string"}},validationMode:{defaultValue:null,description:"how to render the validation errors",name:"validationMode",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"message"'},{value:'"both"'}]}}}}}catch{}const dt={title:"Components/Character Limit",component:m,args:{limit:10},parameters:{docs:{description:{component:"metadata"}}}},h={render:e=>{const{bind:n,...r}=e,i={thing:""},{formProp:t}=b(i);return l(y,{children:[o(x,{bind:t("thing").bind()}),o(m,{bind:t("thing").bind(),...r})]})},play:async({canvasElement:e,args:n})=>{const r=p(e),i=r.getByRole("textbox",{hidden:!0}),t=r.getByText(`0/${n.limit}`).parentElement;a(t),c.type(i,"a"),a(t).toHaveTextContent(`1/${n.limit}`),c.type(i,"a".repeat(n.limit-1)),a(t).toHaveTextContent(`${n.limit}/${n.limit}`),c.type(i,"a"),a(t).toHaveTextContent(`${n.limit+1}/${n.limit}`),a(t).toHaveAttribute("data-exceeded","true")}},g={render:e=>{const{bind:n,...r}=e,i={thing:""},{formProp:t}=b(i);return l(y,{children:[o(x,{bind:t("thing").bind()}),o(m,{bind:t("thing").bind(),...r})]})},args:{shouldEnforce:!0},play:async({args:e,canvasElement:n})=>{const r=p(n),i=r.getByRole("textbox",{hidden:!0}),t=r.getByText(`0/${e.limit}`).parentElement;a(t),c.type(i,"a"),a(t).toHaveTextContent(`1/${e.limit}`),c.type(i,"a".repeat(e.limit-1)),a(t).toHaveTextContent(`${e.limit}/${e.limit}`),c.type(i,"a"),a(i).toHaveValue("a".repeat(e.limit)),a(t).toHaveTextContent(`${e.limit}/${e.limit}`),a(t).toHaveAttribute("data-exceeded","false")}},f={render:e=>{const{bind:n,...r}=e,i={thing:""},{formProp:t}=b(i);return o(y,{children:o(x,{bind:t("thing").bind(),rightOverlay:o(m,{bind:t("thing").bind(),...r})})})},play:async({args:e,canvasElement:n})=>{const r=p(n),i=r.getByRole("textbox",{hidden:!0}),t=r.getByText(`0/${e.limit}`).parentElement;a(t),a(i.parentElement).toContainElement(t)}},v={render:e=>{const{bind:n,...r}=e,i={thing:""},{formProp:t}=b(i);return l(y,{children:[o(x,{bind:t("thing").bind()}),o(m,{bind:t("thing").bind(),...r})]})},args:{validationErrorIcon:o(U,{})},play:async({args:e,canvasElement:n})=>{const r=p(n),i=r.getByRole("textbox",{hidden:!0}),t=r.getByText(`0/${e.limit}`).parentElement;a(t),c.type(i,"a".repeat(e.limit+1));const E=p(t).getByTitle("Character limit exceeded");a(E).toBeVisible()}};var I,B,H;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const {
      bind,
      ...props
    } = args;
    const formData: IFormData = {
      thing: ''
    };
    const {
      formProp
    } = useForm(formData);
    return <>
        <Input bind={formProp('thing').bind()} />
        <CharacterLimit bind={formProp('thing').bind()} {...props} />
      </>;
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      hidden: true
    });
    const limit = canvas.getByText(\`0/\${args.limit}\`).parentElement;
    expect(limit);
    userEvent.type(input, 'a');
    expect(limit).toHaveTextContent(\`1/\${args.limit}\`);
    userEvent.type(input, 'a'.repeat(args.limit - 1));
    expect(limit).toHaveTextContent(\`\${args.limit}/\${args.limit}\`);
    userEvent.type(input, 'a');
    expect(limit).toHaveTextContent(\`\${args.limit + 1}/\${args.limit}\`);
    expect(limit).toHaveAttribute('data-exceeded', 'true');
  }
}`,...(H=(B=h.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var D,P,L;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const {
      bind,
      ...props
    } = args;
    const formData: IFormData = {
      thing: ''
    };
    const {
      formProp
    } = useForm(formData);
    return <>
        <Input bind={formProp('thing').bind()} />
        <CharacterLimit bind={formProp('thing').bind()} {...props} />
      </>;
  },
  args: {
    shouldEnforce: true
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      hidden: true
    });
    const limit = canvas.getByText(\`0/\${args.limit}\`).parentElement;
    expect(limit);
    userEvent.type(input, 'a');
    expect(limit).toHaveTextContent(\`1/\${args.limit}\`);
    userEvent.type(input, 'a'.repeat(args.limit - 1));
    expect(limit).toHaveTextContent(\`\${args.limit}/\${args.limit}\`);
    userEvent.type(input, 'a');
    expect(input).toHaveValue('a'.repeat(args.limit));
    expect(limit).toHaveTextContent(\`\${args.limit}/\${args.limit}\`);
    expect(limit).toHaveAttribute('data-exceeded', 'false');
  }
}`,...(L=(P=g.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var N,_,w;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const {
      bind,
      ...props
    } = args;
    const formData: IFormData = {
      thing: ''
    };
    const {
      formProp
    } = useForm(formData);
    return <>
        <Input bind={formProp('thing').bind()} rightOverlay={<CharacterLimit bind={formProp('thing').bind()} {...props} />} />
      </>;
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      hidden: true
    });
    const limit = canvas.getByText(\`0/\${args.limit}\`).parentElement;
    expect(limit);
    expect(input.parentElement).toContainElement(limit);
  }
}`,...(w=(_=f.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var F,R,q;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const {
      bind,
      ...props
    } = args;
    const formData: IFormData = {
      thing: ''
    };
    const {
      formProp
    } = useForm(formData);
    return <>
        <Input bind={formProp('thing').bind()} />
        <CharacterLimit bind={formProp('thing').bind()} {...props} />
      </>;
  },
  args: {
    validationErrorIcon: <ImTree />
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      hidden: true
    });
    const limit = (canvas.getByText(\`0/\${args.limit}\`).parentElement as HTMLParagraphElement);
    expect(limit);
    userEvent.type(input, 'a'.repeat(args.limit + 1));
    const icon = within(limit).getByTitle('Character limit exceeded');
    expect(icon).toBeVisible();
  }
}`,...(q=(R=v.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const ut=["Default","Enforce","InsideInput","CustomIcon"];export{v as CustomIcon,h as Default,g as Enforce,f as InsideInput,ut as __namedExportsOrder,dt as default};
//# sourceMappingURL=characterLimit.stories-bebddf06.js.map
