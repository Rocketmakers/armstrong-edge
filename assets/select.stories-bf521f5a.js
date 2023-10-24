import{a as o,j as a}from"./jsx-runtime-63e4a166.js";import{w as s,u as d,a as v,e as i}from"./index-3ffc2e85.js";import{R as Z}from"./index-c4905b50.js";import{S as c,N as ne,M as ee}from"./select.component-fc5f5428.js";import{u as y}from"./label.component-23add95d.js";import"./index-999ec173.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";import"./config.context-03ebf2cb.js";import"./isNativeReflectConstruct-30e719dd.js";import"./index-07d1f67e.js";import"./floating-ui.dom.browser.min-04af7d1d.js";import"./useDidUpdateEffect-2528cb48.js";import"./options-d4d63b36.js";import"./statusWrapper.component-5d5028da.js";import"./classNames-9011e307.js";import"./spinner.component-c2b96b2c.js";import"./validationErrors.component-2d32de4a.js";import"./index-742b7287.js";const m=[{label:"Colours",options:[{id:1,content:"ocean"},{id:2,content:"blue"},{id:3,content:"purple"},{id:4,content:"red"},{id:5,content:"orange"},{id:6,content:"yellow"},{id:7,content:"green"},{id:8,content:"forest"},{id:9,content:"slate"},{id:10,content:"silver"}]},{label:"Flavours",options:[{id:11,content:"vanilla"},{id:12,content:"chocolate"},{id:13,content:"strawberry"}]}],g=m[0].options,Se={title:"Components/Select",component:c,parameters:{docs:{description:{component:"meta"}}}},h={args:{options:m},render:t=>{const{formProp:e,formState:n}=y();return a("div",{style:{height:"20rem"},children:[o(c,{bind:e("value").bind(),...t}),a("div",{"data-testid":"result",style:{marginTop:"10px"},children:["Current value: ",n==null?void 0:n.value]})]})}},b={...h,play:async({canvasElement:t})=>{const e=s(t),n=e.getByRole("combobox");d.click(n);const r=await v(()=>e.getByText("blue"));d.click(r);const l=e.getByTestId("result");await v(()=>i(l).toHaveTextContent("Current value: 2"))}},B={render:()=>o("div",{style:{width:"100%",height:"20rem"},children:o(c,{options:m,disabled:!0})}),play:async({canvasElement:t})=>{const e=s(t).getByRole("combobox");i(e).toBeDisabled()}},x={render:()=>{const{formProp:t}=y();return o("div",{style:{width:"100%",height:"20rem"},children:o(ne,{options:g,bind:t("value").bind()})})},play:async({canvasElement:t})=>{const e=s(t).getByRole("combobox");i(e).toBeVisible()}},T={render:()=>{var n;const{formProp:t,formState:e}=y({value:[1,3,5]});return a("div",{style:{width:"100%",height:"20rem"},children:[o(ee,{options:g,bind:t("value").bind()}),a("div",{"data-testid":"result",style:{marginTop:"10px"},children:["Current value: ",(n=e==null?void 0:e.value)==null?void 0:n.join(", ")]})]})},play:async({canvasElement:t})=>{const e=s(t).getByRole("combobox");i(e).toBeVisible();const n=s(t).getByTestId("result");i(n).toHaveTextContent("Current value: 1, 3, 5");const r=s(t).getByRole("button",{name:"Remove ocean"});d.click(r),await v(()=>i(n).toHaveTextContent("Current value: 3, 5"))}},E={...h,render:()=>{const{formProp:t,formState:e}=y(),[n,r]=Z.useState(g),l=u=>{const p=n.length+1,w=[...n,{id:p,content:u,wasCreated:!0}];return r(w),p};return a("div",{style:{height:"20rem"},children:[o(c,{allowCreate:!0,bind:t("value").bind(),options:n,onOptionCreated:l}),a("div",{"data-testid":"result",style:{marginTop:"10px"},children:["Current value: ",e==null?void 0:e.value]})]})},play:async({canvasElement:t})=>{const e=s(t).getByRole("combobox");i(e).toBeVisible(),d.type(e,"New item"),d.keyboard("{Enter}");const n=s(t).getByTestId("result");await v(()=>i(n).toHaveTextContent(`Current value: ${g.length+1}`))}},C={...h,render:()=>{var u;const{formProp:t,formState:e}=y(),[n,r]=Z.useState(g),l=p=>{const w=n.length+1,te=[...n,{id:w,content:p,wasCreated:!0}];return r(te),w};return a("div",{style:{height:"20rem"},children:[o(ee,{allowCreate:!0,bind:t("value").bind(),options:n,onOptionCreated:l}),a("div",{"data-testid":"result",style:{marginTop:"10px"},children:["Current value: ",(u=e==null?void 0:e.value)==null?void 0:u.join(", ")]})]})},play:async({canvasElement:t})=>{const e=s(t).getByRole("combobox");i(e).toBeVisible();const n=s(t).getByTestId("result");d.type(e,"New item 1"),d.keyboard("{Enter}");const r=g.length+1;await v(()=>i(n).toHaveTextContent(`Current value: ${r}`)),d.type(s(t).getByRole("combobox"),"New item 2"),d.keyboard("{Enter}");const l=r+1;await v(()=>i(n).toHaveTextContent(`Current value: ${r}, ${l}`)),d.type(s(t).getByRole("combobox"),"New item 3"),d.keyboard("{Enter}");const u=l+1;await v(()=>i(n).toHaveTextContent(`Current value: ${r}, ${l}, ${u}`))}},f={...h,render:t=>a("div",{children:[o("h2",{children:"Small"}),o(c,{options:t.options,required:!0,label:"Single select",displaySize:"small","data-testid":"wrapper"}),o("h2",{children:"Medium"}),o(c,{options:t.options,required:!0,label:"Single select",displaySize:"medium","data-testid":"wrapper"}),o("h2",{children:"Large"}),o(c,{options:t.options,required:!0,label:"Single select",displaySize:"large","data-testid":"wrapper"})]}),play:async({canvasElement:t})=>{const e=s(t),[n,r,l]=e.getAllByTestId("wrapper");i(n).toHaveAttribute("data-size","small"),i(r).toHaveAttribute("data-size","medium"),i(l).toHaveAttribute("data-size","large")}},S={...h,render:()=>a("div",{children:[a("div",{"data-testid":"both",children:[o("h2",{children:"Validation mode - both"}),o(c,{validationMode:"both",validationErrorMessages:["This field is required"],options:m,required:!0})]}),a("div",{"data-testid":"icon",children:[o("h2",{children:"Validation mode - icon only"}),o(c,{validationMode:"icon",validationErrorMessages:["This field is required"],options:m,required:!0})]}),a("div",{"data-testid":"message",children:[o("h2",{children:"Validation mode - message only"}),o(c,{validationMode:"message",validationErrorMessages:["This field is required"],options:m,required:!0})]}),a("div",{"data-testid":"left-icon",children:[o("h2",{children:"Icon on left"}),o(c,{validationMode:"icon",validationErrorMessages:["This field is required"],options:m,required:!0,statusPosition:"left"})]})]}),play:async({canvasElement:t})=>{const e=s(t),n=e.getByTestId("both");i(s(n).getByRole("status")).toBeVisible(),i(s(n).getByLabelText("Error messages")).toBeVisible();const r=e.getByTestId("icon");i(s(r).getByRole("status")).toBeVisible();const l=e.getByTestId("message");i(s(l).getByLabelText("Error messages")).toBeVisible();const u=e.getByTestId("left-icon"),p=s(u).getByRole("status");i(p).toBeVisible(),i(p).toHaveAttribute("data-position","left")}};var M,O,H,R,V;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Template,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole<HTMLInputElement>('combobox');
    userEvent.click(input);
    const blue = await waitFor(() => canvas.getByText('blue'));
    userEvent.click(blue);
    const result = canvas.getByTestId('result');
    await waitFor(() => expect(result).toHaveTextContent(\`Current value: 2\`));
  }
}`,...(H=(O=b.parameters)==null?void 0:O.docs)==null?void 0:H.source},description:{story:"stories",...(V=(R=b.parameters)==null?void 0:R.docs)==null?void 0:V.description}}};var I,q,L;B.parameters={...B.parameters,docs:{...(I=B.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: '100%',
      height: '20rem'
    }}>
        <Select options={groupedOptions} disabled />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole<HTMLInputElement>('combobox');
    expect(input).toBeDisabled();
  }
}`,...(L=(q=B.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var P,k,z;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const {
      formProp
    } = useForm<{
      value?: number;
    }>();
    return <div style={{
      width: '100%',
      height: '20rem'
    }}>
        <NativeSelect options={flatOptions} bind={formProp('value').bind()} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole<HTMLSelectElement>('combobox');
    expect(input).toBeVisible();
  }
}`,...(z=(k=x.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var F,$,N;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const {
      formProp,
      formState
    } = useForm<{
      value: number[];
    }>({
      value: [1, 3, 5]
    });
    return <div style={{
      width: '100%',
      height: '20rem'
    }}>
        <MultiSelect options={flatOptions} bind={formProp('value').bind()} />
        <div data-testid="result" style={{
        marginTop: '10px'
      }}>
          Current value: {formState?.value?.join(', ')}
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole<HTMLInputElement>('combobox');
    expect(input).toBeVisible();
    const result = within(canvasElement).getByTestId('result');
    expect(result).toHaveTextContent('Current value: 1, 3, 5');
    const removeButton = within(canvasElement).getByRole('button', {
      name: 'Remove ocean'
    });
    userEvent.click(removeButton);
    await waitFor(() => expect(result).toHaveTextContent('Current value: 3, 5'));
  }
}`,...(N=($=T.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var A,j,D;E.parameters={...E.parameters,docs:{...(A=E.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Template,
  render: () => {
    const {
      formProp,
      formState
    } = useForm<{
      value?: number;
    }>();
    const [options, setOptions] = React.useState(flatOptions);
    const onOptionCreated = (newValue: string) => {
      const id = options.length + 1;
      const newOptions = [...options, {
        id,
        content: newValue,
        wasCreated: true
      }];
      setOptions(newOptions);
      return id;
    };
    return <div style={{
      height: '20rem'
    }}>
        <Select allowCreate={true} bind={formProp('value').bind()} options={options} onOptionCreated={onOptionCreated} />
        <div data-testid="result" style={{
        marginTop: '10px'
      }}>
          Current value: {formState?.value}
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole<HTMLInputElement>('combobox');
    expect(input).toBeVisible();
    userEvent.type(input, 'New item');
    userEvent.keyboard('{Enter}');
    const result = within(canvasElement).getByTestId('result');
    await waitFor(() => expect(result).toHaveTextContent(\`Current value: \${flatOptions.length + 1}\`));
  }
}`,...(D=(j=E.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var _,G,J;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Template,
  render: () => {
    const {
      formProp,
      formState
    } = useForm<{
      value?: number[];
    }>();
    const [options, setOptions] = React.useState(flatOptions);
    const onOptionCreated = (newValue: string) => {
      const id = options.length + 1;
      const newOptions = [...options, {
        id,
        content: newValue,
        wasCreated: true
      }];
      setOptions(newOptions);
      return id;
    };
    return <div style={{
      height: '20rem'
    }}>
        <MultiSelect allowCreate={true} bind={formProp('value').bind()} options={options} onOptionCreated={onOptionCreated} />
        <div data-testid="result" style={{
        marginTop: '10px'
      }}>
          Current value: {formState?.value?.join(', ')}
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole<HTMLInputElement>('combobox');
    expect(input).toBeVisible();
    const result = within(canvasElement).getByTestId('result');
    userEvent.type(input, 'New item 1');
    userEvent.keyboard('{Enter}');
    const new1id = flatOptions.length + 1;
    await waitFor(() => expect(result).toHaveTextContent(\`Current value: \${new1id}\`));
    userEvent.type(within(canvasElement).getByRole<HTMLInputElement>('combobox'), 'New item 2');
    userEvent.keyboard('{Enter}');
    const new2id = new1id + 1;
    await waitFor(() => expect(result).toHaveTextContent(\`Current value: \${new1id}, \${new2id}\`));
    userEvent.type(within(canvasElement).getByRole<HTMLInputElement>('combobox'), 'New item 3');
    userEvent.keyboard('{Enter}');
    const new3id = new2id + 1;
    await waitFor(() => expect(result).toHaveTextContent(\`Current value: \${new1id}, \${new2id}, \${new3id}\`));
  }
}`,...(J=(G=C.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Template,
  render: args => {
    return <div>
        <h2>Small</h2>
        <Select options={args.options} required label="Single select" displaySize="small" data-testid="wrapper" />
        <h2>Medium</h2>
        <Select options={args.options} required label="Single select" displaySize="medium" data-testid="wrapper" />
        <h2>Large</h2>
        <Select options={args.options} required label="Single select" displaySize="large" data-testid="wrapper" />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [small, medium, large] = canvas.getAllByTestId('wrapper');
    expect(small).toHaveAttribute('data-size', 'small');
    expect(medium).toHaveAttribute('data-size', 'medium');
    expect(large).toHaveAttribute('data-size', 'large');
  }
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Template,
  render: () => {
    return <div>
        <div data-testid="both">
          <h2>Validation mode - both</h2>
          <Select validationMode="both" validationErrorMessages={['This field is required']} options={groupedOptions} required />
        </div>
        <div data-testid="icon">
          <h2>Validation mode - icon only</h2>
          <Select validationMode="icon" validationErrorMessages={['This field is required']} options={groupedOptions} required />
        </div>
        <div data-testid="message">
          <h2>Validation mode - message only</h2>
          <Select validationMode="message" validationErrorMessages={['This field is required']} options={groupedOptions} required />
        </div>
        <div data-testid="left-icon">
          <h2>Icon on left</h2>
          <Select validationMode="icon" validationErrorMessages={['This field is required']} options={groupedOptions} required statusPosition="left" />
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const both = canvas.getByTestId('both');
    expect(within(both).getByRole('status')).toBeVisible();
    expect(within(both).getByLabelText('Error messages')).toBeVisible();
    const icon = canvas.getByTestId('icon');
    expect(within(icon).getByRole('status')).toBeVisible();
    const message = canvas.getByTestId('message');
    expect(within(message).getByLabelText('Error messages')).toBeVisible();
    const iconLeft = canvas.getByTestId('left-icon');
    const status = within(iconLeft).getByRole('status');
    expect(status).toBeVisible();
    expect(status).toHaveAttribute('data-position', 'left');
  }
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Me=["Default","Disabled","Native","Multi","Create","CreateMulti","Sizes","ValidationError"];export{E as Create,C as CreateMulti,b as Default,B as Disabled,T as Multi,x as Native,f as Sizes,S as ValidationError,Me as __namedExportsOrder,Se as default};
//# sourceMappingURL=select.stories-bf521f5a.js.map
