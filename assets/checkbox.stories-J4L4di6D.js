import{j as t}from"./jsx-runtime-Cl2eCCBe.js";import{f as u,w as o,a as k,e as c,u as D}from"./classNames-TtGgGdEV.js";import{a as M}from"./config.context-DSGy4VcJ.js";import{C as r}from"./checkbox.component-CadRwpES.js";import{u as q}from"./label.component-BjYIJ-30.js";import"./index-Cqyox1Tj.js";import"./extends-CF3RwP-h.js";import"./index-CcyUcsxs.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./useDidUpdateEffect-CQd39TVK.js";import"./statusWrapper.component-DCIbvlN0.js";import"./spinner.component-GjtI7h28.js";import"./validationErrors.component-CrXQH9ID.js";const Z={title:"Components/Checkbox",component:r},i={args:{label:"Here is label",onCheckedChange:u()},play:async({canvasElement:a})=>{const n=o(a).getByRole("checkbox");n.click(),await k(()=>c(n.getAttribute("aria-checked")).toBe("true"))}},d={args:{label:"Checkbox is disabled",disabled:!0,testId:"arm-checkbox-container"},play:({canvasElement:a})=>{const s=o(a).getByTestId("arm-checkbox-container").getAttribute("data-disabled");c(s).toBe("true")}},l={args:{label:"Check for Custom Indicator",testId:"arm-checkbox-container",customIndicator:t.jsx(M,{"data-testid":"rocket-indicator"}),onCheckedChange:u()},play:async({canvasElement:a})=>{const e=o(a);e.getByRole("checkbox").click();const s=await k(()=>e.getByTestId("rocket-indicator"));c(s)}},m={args:{label:"Option 1",validationErrorMessages:["This field is required"],onCheckedChange:u()},play:({canvasElement:a})=>{const n=o(a).getAllByText("This field is required");c(n[0]).toBeVisible()}},b={args:{label:"Bound checkbox",onCheckedChange:u()},render:()=>{const{formProp:a,formState:e}=q({checked:!1});return t.jsxs(t.Fragment,{children:[t.jsx(r,{bind:a("checked").bind()}),t.jsxs("p",{"data-testid":"bound-result",children:["Bound value is ",e!=null&&e.checked?"checked":"not checked"]})]})},play:async({canvasElement:a})=>{const e=o(a),n=e.getByRole("checkbox"),s=e.getByTestId("bound-result");D.click(n),await k(()=>c(s).toHaveTextContent("Bound value is checked"))}},h={render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:"Large"}),t.jsx(r,{displaySize:"large",label:"Large checkbox","data-testid":"cb-container"}),t.jsx("h2",{children:"Medium"}),t.jsx(r,{displaySize:"medium",label:"Medium checkbox","data-testid":"cb-container"}),t.jsx("h2",{children:"Small"}),t.jsx(r,{displaySize:"small",label:"Small checkbox","data-testid":"cb-container"})]}),play:async({canvasElement:a})=>{const e=o(a),[n,s,F]=await e.findAllByTestId("cb-container");c(n).toHaveAttribute("data-size","large"),c(s).toHaveAttribute("data-size","medium"),c(F).toHaveAttribute("data-size","small")}};var p,x,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Here is label',
    onCheckedChange: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    checkbox.click();
    await waitFor(() => expect(checkbox.getAttribute('aria-checked')).toBe('true'));
  }
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,y,C;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox is disabled',
    disabled: true,
    testId: 'arm-checkbox-container'
  },
  play: ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByTestId('arm-checkbox-container');
    const isDisabled = checkbox.getAttribute('data-disabled');
    expect(isDisabled).toBe('true');
  }
}`,...(C=(y=d.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var B,f,w;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Check for Custom Indicator',
    testId: 'arm-checkbox-container',
    customIndicator: <ImRocket data-testid={'rocket-indicator'} />,
    onCheckedChange: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    checkbox.click();
    const indicator = await waitFor(() => canvas.getByTestId('rocket-indicator'));
    expect(indicator);
  }
}`,...(w=(f=l.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var E,I,S;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Option 1',
    validationErrorMessages: ['This field is required'],
    onCheckedChange: fn()
  },
  play: ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getAllByText('This field is required');
    expect(label[0]).toBeVisible();
  }
}`,...(S=(I=m.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var T,z,A;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Bound checkbox',
    onCheckedChange: fn()
  },
  render: () => {
    const {
      formProp,
      formState
    } = useForm({
      checked: false
    });
    return <>
        <Checkbox bind={formProp('checked').bind()} />
        <p data-testid={'bound-result'}>Bound value is {formState?.checked ? 'checked' : 'not checked'}</p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    const boundResult = canvas.getByTestId('bound-result');
    userEvent.click(checkbox);
    await waitFor(() => expect(boundResult).toHaveTextContent('Bound value is checked'));
  }
}`,...(A=(z=b.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var j,R,H;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return <>
        <h2>Large</h2>
        <Checkbox displaySize="large" label="Large checkbox" data-testid="cb-container" />
        <h2>Medium</h2>
        <Checkbox displaySize="medium" label="Medium checkbox" data-testid="cb-container" />
        <h2>Small</h2>
        <Checkbox displaySize="small" label="Small checkbox" data-testid="cb-container" />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [large, medium, small] = await canvas.findAllByTestId('cb-container');
    expect(large).toHaveAttribute('data-size', 'large');
    expect(medium).toHaveAttribute('data-size', 'medium');
    expect(small).toHaveAttribute('data-size', 'small');
  }
}`,...(H=(R=h.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};const $=["Default","Disabled","CustomIndicator","ValidationError","Bound","Sizes"];export{b as Bound,l as CustomIndicator,i as Default,d as Disabled,h as Sizes,m as ValidationError,$ as __namedExportsOrder,Z as default};
