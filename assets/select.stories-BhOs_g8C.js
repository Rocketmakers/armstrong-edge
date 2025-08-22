import{j as t}from"./jsx-runtime-Cl2eCCBe.js";import{f as S,w as i,u as l,a as m,e as s}from"./index-Dv9et24K.js";import{R as Z}from"./index-Cqyox1Tj.js";import{S as d,N as ne,M as ee}from"./select.component-Depg9AXd.js";import{u as b}from"./label.component-CknXuhjY.js";import"./config.context-B61qZkrf.js";import"./extends-CF3RwP-h.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./floating-ui.dom-D0xtKlXs.js";import"./useDidUpdateEffect-igSykUWQ.js";import"./radixDialog-CBrwtQa5.js";import"./options-Q_-Fwsn7.js";import"./statusWrapper.component-DucYgjxK.js";import"./spinner.component-Bc6RftQo.js";import"./validationErrors.component-CHN68oNP.js";const p=[{label:"Colours",options:[{id:1,content:"ocean"},{id:2,content:"blue"},{id:3,content:"purple"},{id:4,content:"red"},{id:5,content:"orange"},{id:6,content:"yellow"},{id:7,content:"green"},{id:8,content:"forest"},{id:9,content:"slate"},{id:10,content:"silver"}]},{label:"Flavours",options:[{id:11,content:"vanilla"},{id:12,content:"chocolate"},{id:13,content:"strawberry"}]}],v=p[0].options,we={title:"Components/Select",component:d,parameters:{docs:{description:{component:"meta"}}}},y={args:{options:p,onInputChange:S(),onSelectOption:S()},render:n=>{const{formProp:e,formState:o}=b();return t.jsxs("div",{style:{height:"20rem"},children:[t.jsx(d,{bind:e("value").bind(),...n}),t.jsxs("div",{"data-testid":"result",style:{marginTop:"10px"},children:["Current value: ",o==null?void 0:o.value]})]})}},g={...y,play:async({canvasElement:n})=>{const e=i(n),o=e.getByRole("combobox");l.click(o);const a=await m(()=>e.getByText("blue"));l.click(a);const r=e.getByTestId("result");await m(()=>s(r).toHaveTextContent("Current value: 2"))}},w={render:()=>t.jsx("div",{style:{width:"100%",height:"20rem"},children:t.jsx(d,{options:p,disabled:!0})}),play:async({canvasElement:n})=>{const e=i(n).getByRole("combobox");s(e).toBeDisabled()}},x={render:()=>{const{formProp:n}=b();return t.jsx("div",{style:{width:"100%",height:"20rem"},children:t.jsx(ne,{options:v,bind:n("value").bind()})})},play:async({canvasElement:n})=>{const e=i(n).getByRole("combobox");s(e).toBeVisible()}},B={render:()=>{var o;const{formProp:n,formState:e}=b({value:[1,3,5]});return t.jsxs("div",{style:{width:"100%",height:"20rem"},children:[t.jsx(ee,{options:v,bind:n("value").bind()}),t.jsxs("div",{"data-testid":"result",style:{marginTop:"10px"},children:["Current value: ",(o=e==null?void 0:e.value)==null?void 0:o.join(", ")]})]})},play:async({canvasElement:n})=>{const e=i(n).getByRole("combobox");s(e).toBeVisible();const o=i(n).getByTestId("result");s(o).toHaveTextContent("Current value: 1, 3, 5");const a=i(n).getByRole("button",{name:"Remove ocean"});l.click(a),await m(()=>s(o).toHaveTextContent("Current value: 3, 5"))}},T={...y,args:{},render:()=>{const{formProp:n,formState:e}=b(),[o,a]=Z.useState(v),r=c=>{const u=o.length+1,h=[...o,{id:u,content:c,wasCreated:!0}];return a(h),u};return t.jsxs("div",{style:{height:"20rem"},children:[t.jsx(d,{allowCreate:!0,bind:n("value").bind(),options:o,onOptionCreated:r}),t.jsxs("div",{"data-testid":"result",style:{marginTop:"10px"},children:["Current value: ",e==null?void 0:e.value]})]})},play:async({canvasElement:n})=>{const e=i(n).getByRole("combobox");s(e).toBeVisible(),await l.type(e,"New item"),await l.keyboard("{Enter}");const o=i(n).getByTestId("result");await m(()=>s(o).toHaveTextContent(`Current value: ${v.length+1}`))}},E={...y,render:()=>{var c;const{formProp:n,formState:e}=b(),[o,a]=Z.useState(v),r=u=>{const h=o.length+1,te=[...o,{id:h,content:u,wasCreated:!0}];return a(te),h};return t.jsxs("div",{style:{height:"20rem"},children:[t.jsx(ee,{allowCreate:!0,bind:n("value").bind(),options:o,onOptionCreated:r}),t.jsxs("div",{"data-testid":"result",style:{marginTop:"10px"},children:["Current value: ",(c=e==null?void 0:e.value)==null?void 0:c.join(", ")]})]})},play:async({canvasElement:n})=>{const e=i(n).getByRole("combobox");s(e).toBeVisible();const o=i(n).getByTestId("result");await l.type(e,"New item 1"),await l.keyboard("{Enter}");const a=v.length+1;await m(()=>s(o).toHaveTextContent(`Current value: ${a}`)),await l.type(i(n).getByRole("combobox"),"New item 2"),await l.keyboard("{Enter}");const r=a+1;await m(()=>s(o).toHaveTextContent(`Current value: ${a}, ${r}`)),await l.type(i(n).getByRole("combobox"),"New item 3"),await l.keyboard("{Enter}");const c=r+1;await m(()=>s(o).toHaveTextContent(`Current value: ${a}, ${r}, ${c}`))}},C={...y,render:n=>t.jsxs("div",{children:[t.jsx("h2",{children:"Small"}),t.jsx(d,{options:n.options,required:!0,label:"Single select",displaySize:"small","data-testid":"wrapper"}),t.jsx("h2",{children:"Medium"}),t.jsx(d,{options:n.options,required:!0,label:"Single select",displaySize:"medium","data-testid":"wrapper"}),t.jsx("h2",{children:"Large"}),t.jsx(d,{options:n.options,required:!0,label:"Single select",displaySize:"large","data-testid":"wrapper"})]}),play:async({canvasElement:n})=>{const e=i(n),[o,a,r]=e.getAllByTestId("wrapper");s(o).toHaveAttribute("data-size","small"),s(a).toHaveAttribute("data-size","medium"),s(r).toHaveAttribute("data-size","large")}},f={...y,render:()=>t.jsxs("div",{children:[t.jsxs("div",{"data-testid":"both",children:[t.jsx("h2",{children:"Validation mode - both"}),t.jsx(d,{validationMode:"both",validationErrorMessages:["This field is required"],options:p,required:!0})]}),t.jsxs("div",{"data-testid":"icon",children:[t.jsx("h2",{children:"Validation mode - icon only"}),t.jsx(d,{validationMode:"icon",validationErrorMessages:["This field is required"],options:p,required:!0})]}),t.jsxs("div",{"data-testid":"message",children:[t.jsx("h2",{children:"Validation mode - message only"}),t.jsx(d,{validationMode:"message",validationErrorMessages:["This field is required"],options:p,required:!0})]}),t.jsxs("div",{"data-testid":"left-icon",children:[t.jsx("h2",{children:"Icon on left"}),t.jsx(d,{validationMode:"icon",validationErrorMessages:["This field is required"],options:p,required:!0,statusPosition:"left"})]})]}),play:async({canvasElement:n})=>{const e=i(n),o=e.getByTestId("both");s(i(o).getByRole("status")).toBeVisible(),s(i(o).getByLabelText("Error messages")).toBeVisible();const a=e.getByTestId("icon");s(i(a).getByRole("status")).toBeVisible();const r=e.getByTestId("message");s(i(r).getByLabelText("Error messages")).toBeVisible();const c=e.getByTestId("left-icon"),u=i(c).getByRole("status");s(u).toBeVisible(),s(u).toHaveAttribute("data-position","left")}};var j,O,M,R,H;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(M=(O=g.parameters)==null?void 0:O.docs)==null?void 0:M.source},description:{story:"stories",...(H=(R=g.parameters)==null?void 0:R.docs)==null?void 0:H.description}}};var V,I,q;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(I=w.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var L,P,k;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(k=(P=x.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var z,F,$;B.parameters={...B.parameters,docs:{...(z=B.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...($=(F=B.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var N,A,D;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Template,
  args: {},
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
    await userEvent.type(input, 'New item');
    await userEvent.keyboard('{Enter}');
    const result = within(canvasElement).getByTestId('result');
    await waitFor(() => expect(result).toHaveTextContent(\`Current value: \${flatOptions.length + 1}\`));
  }
}`,...(D=(A=T.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var _,G,J;E.parameters={...E.parameters,docs:{...(_=E.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
    await userEvent.type(input, 'New item 1');
    await userEvent.keyboard('{Enter}');
    const new1id = flatOptions.length + 1;
    await waitFor(() => expect(result).toHaveTextContent(\`Current value: \${new1id}\`));
    await userEvent.type(within(canvasElement).getByRole<HTMLInputElement>('combobox'), 'New item 2');
    await userEvent.keyboard('{Enter}');
    const new2id = new1id + 1;
    await waitFor(() => expect(result).toHaveTextContent(\`Current value: \${new1id}, \${new2id}\`));
    await userEvent.type(within(canvasElement).getByRole<HTMLInputElement>('combobox'), 'New item 3');
    await userEvent.keyboard('{Enter}');
    const new3id = new2id + 1;
    await waitFor(() => expect(result).toHaveTextContent(\`Current value: \${new1id}, \${new2id}, \${new3id}\`));
  }
}`,...(J=(G=E.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const xe=["Default","Disabled","Native","Multi","Create","CreateMulti","Sizes","ValidationError"];export{T as Create,E as CreateMulti,g as Default,w as Disabled,B as Multi,x as Native,C as Sizes,f as ValidationError,xe as __namedExportsOrder,we as default};
