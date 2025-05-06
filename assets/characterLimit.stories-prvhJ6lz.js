import{j as r}from"./jsx-runtime-Cl2eCCBe.js";import{c as w,w as g,e as o,u as c,a as v}from"./index-Dv9et24K.js";import{u as M,b as z}from"./config.context-B61qZkrf.js";import{r as T}from"./index-Cqyox1Tj.js";import{a as J,u as f}from"./label.component-Daqf1tyH.js";import{I as b}from"./input.component-CT4O1P-t.js";const m=T.forwardRef(({bind:e,limit:n,shouldEnforce:a,value:i,className:t,validationErrorIcon:y,validationErrorsClassName:_,validationErrorsTitle:q,validationMode:N,...O},A)=>{const E=M({validationErrorIcon:y,validationMode:N}),[s,h]=J(e,{value:i}),x=s&&s.length>n;return T.useLayoutEffect(()=>{a&&x&&(h==null||h(s==null?void 0:s.slice(0,n)))},[s,x,n,h,a]),r.jsxs("div",{ref:A,className:w("arm-character-limit",t),"data-exceeded":x,...O,children:[r.jsxs("div",{className:"arm-character-limit-text",children:[s==null?void 0:s.length,"/",n]}),x&&r.jsx("div",{className:w("arm-character-limit-icon",_),title:q??"Character limit exceeded",children:(E.validationMode==="both"||E.validationMode==="icon")&&E.validationErrorIcon})]})});m.displayName="CharacterLimit";m.__docgenInfo={description:"Render a character limit from a bound value, showing as an error if the user",methods:[],displayName:"CharacterLimit",props:{bind:{required:!0,tsType:{name:"IBindingProps",elements:[{name:"TBind"}],raw:"IBindingProps<TBind>"},description:"prop for binding to an Armstrong form binder (see forms documentation)"},value:{required:!1,tsType:{name:"TBind"},description:"the current value of the string to count"},limit:{required:!0,tsType:{name:"number"},description:"the character limit for the bound input"},shouldEnforce:{required:!1,tsType:{name:"boolean"},description:"the limit should be enforced by the bind in this component - by default you will have to handle this yourself"},className:{required:!1,tsType:{name:"string"},description:"CSS className property"},validationErrorIcon:{required:!1,tsType:{name:"JSX.Element"},description:"the icon to use for the validation errors"},validationErrorsClassName:{required:!1,tsType:{name:"string"},description:"(Optional) Class name for the validation errors"},validationErrorsTitle:{required:!1,tsType:{name:"string"},description:"(Optional) Title for the validation errors"},validationMode:{required:!1,tsType:{name:"union",raw:"'icon' | 'message' | 'both'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'message'"},{name:"literal",value:"'both'"}]},description:"how to render the validation errors"}},composes:["Omit"]};const X={title:"Components/Character Limit",component:m,args:{limit:10},parameters:{docs:{description:{component:"metadata"}}}},l={render:e=>{const{bind:n,...a}=e,i={thing:""},{formProp:t}=f(i);return r.jsxs(r.Fragment,{children:[r.jsx(b,{bind:t("thing").bind()}),r.jsx(m,{bind:t("thing").bind(),...a})]})},play:async({canvasElement:e,args:n})=>{const a=g(e),i=a.getByRole("textbox",{hidden:!0}),t=a.getByText(`0/${n.limit}`).parentElement;o(t),await c.type(i,"a"),await v(()=>o(t).toHaveTextContent(`1/${n.limit}`)),await c.type(i,"a".repeat(n.limit-1)),await v(()=>o(t).toHaveTextContent(`${n.limit}/${n.limit}`)),await c.type(i,"a"),await v(()=>o(t).toHaveTextContent(`${n.limit+1}/${n.limit}`)),await v(()=>o(t).toHaveAttribute("data-exceeded","true"))}},p={render:e=>{const{bind:n,...a}=e,i={thing:""},{formProp:t}=f(i);return r.jsxs(r.Fragment,{children:[r.jsx(b,{bind:t("thing").bind()}),r.jsx(m,{bind:t("thing").bind(),...a})]})},args:{shouldEnforce:!0},play:async({args:e,canvasElement:n})=>{const a=g(n),i=a.getByRole("textbox",{hidden:!0}),t=a.getByText(`0/${e.limit}`).parentElement;o(t),await c.type(i,"a"),o(t).toHaveTextContent(`1/${e.limit}`),await c.type(i,"a".repeat(e.limit-1)),o(t).toHaveTextContent(`${e.limit}/${e.limit}`),await c.type(i,"a"),o(i).toHaveValue("a".repeat(e.limit)),o(t).toHaveTextContent(`${e.limit}/${e.limit}`),o(t).toHaveAttribute("data-exceeded","false")}},d={render:e=>{const{bind:n,...a}=e,i={thing:""},{formProp:t}=f(i);return r.jsx(r.Fragment,{children:r.jsx(b,{bind:t("thing").bind(),rightOverlay:r.jsx(m,{bind:t("thing").bind(),...a})})})},play:async({args:e,canvasElement:n})=>{const a=g(n),i=a.getByRole("textbox",{hidden:!0}),t=a.getByText(`0/${e.limit}`).parentElement;o(t),o(i.parentElement).toContainElement(t)}},u={render:e=>{const{bind:n,...a}=e,i={thing:""},{formProp:t}=f(i);return r.jsxs(r.Fragment,{children:[r.jsx(b,{bind:t("thing").bind()}),r.jsx(m,{bind:t("thing").bind(),...a})]})},args:{validationErrorIcon:r.jsx(z,{})},play:async({args:e,canvasElement:n})=>{const a=g(n),i=a.getByRole("textbox",{hidden:!0}),t=a.getByText(`0/${e.limit}`).parentElement;o(t),await c.type(i,"a".repeat(e.limit+1));const y=g(t).getByTitle("Character limit exceeded");o(y).toBeVisible()}};var C,$,I;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
    await userEvent.type(input, 'a');
    await waitFor(() => expect(limit).toHaveTextContent(\`1/\${args.limit}\`));
    await userEvent.type(input, 'a'.repeat(args.limit - 1));
    await waitFor(() => expect(limit).toHaveTextContent(\`\${args.limit}/\${args.limit}\`));
    await userEvent.type(input, 'a');
    await waitFor(() => expect(limit).toHaveTextContent(\`\${args.limit + 1}/\${args.limit}\`));
    await waitFor(() => expect(limit).toHaveAttribute('data-exceeded', 'true'));
  }
}`,...(I=($=l.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var B,j,P;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    await userEvent.type(input, 'a');
    expect(limit).toHaveTextContent(\`1/\${args.limit}\`);
    await userEvent.type(input, 'a'.repeat(args.limit - 1));
    expect(limit).toHaveTextContent(\`\${args.limit}/\${args.limit}\`);
    await userEvent.type(input, 'a');
    expect(input).toHaveValue('a'.repeat(args.limit));
    expect(limit).toHaveTextContent(\`\${args.limit}/\${args.limit}\`);
    expect(limit).toHaveAttribute('data-exceeded', 'false');
  }
}`,...(P=(j=p.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var D,H,F;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(F=(H=d.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var L,R,S;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    const limit = canvas.getByText(\`0/\${args.limit}\`).parentElement as HTMLParagraphElement;
    expect(limit);
    await userEvent.type(input, 'a'.repeat(args.limit + 1));
    const icon = within(limit).getByTitle('Character limit exceeded');
    expect(icon).toBeVisible();
  }
}`,...(S=(R=u.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const k=["Default","Enforce","InsideInput","CustomIcon"],Y=Object.freeze(Object.defineProperty({__proto__:null,CustomIcon:u,Default:l,Enforce:p,InsideInput:d,__namedExportsOrder:k,default:X},Symbol.toStringTag,{value:"Module"}));export{m as C,l as D,d as I,u as a,Y as c};
