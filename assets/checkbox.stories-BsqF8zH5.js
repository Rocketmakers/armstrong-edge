import{j as c}from"./jsx-runtime-Cl2eCCBe.js";import{f as h,w as o,a as p,e as n,u as F}from"./index-Dv9et24K.js";import{a as q}from"./config.context-CQ8yCtG8.js";import{C as r}from"./checkbox.component-Cp_D69j3.js";import{u as M}from"./label.component-CP0bZKSj.js";import"./index-Cqyox1Tj.js";import"./extends-CF3RwP-h.js";import"./index-CcyUcsxs.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./useDidUpdateEffect-BZzz_2dE.js";import"./statusWrapper.component-CaGPkh9Y.js";import"./spinner.component-RFiNSZIp.js";import"./validationErrors.component-eWW5zj5P.js";const Z={title:"Components/Checkbox",component:r},i={args:{label:"Here is label",onCheckedChange:h()},play:async({canvasElement:a})=>{const t=o(a).getByRole("checkbox");t.click(),await p(()=>n(t.getAttribute("aria-checked")).toBe("true"))}},l={args:{label:"Checkbox is disabled",disabled:!0,testId:"arm-checkbox-container"},play:({canvasElement:a})=>{const s=o(a).getByTestId("arm-checkbox-container").getAttribute("data-disabled");n(s).toBe("true")}},d={args:{label:"Check for Custom Indicator",testId:"arm-checkbox-container",customIndicator:c.jsx(q,{"data-testid":"rocket-indicator"}),onCheckedChange:h()},play:async({canvasElement:a})=>{const e=o(a);e.getByRole("checkbox").click();const s=await p(()=>e.getByTestId("rocket-indicator"));n(s)}},m={args:{label:"Option 1",validationErrorMessages:["This field is required"],onCheckedChange:h()},play:({canvasElement:a})=>{const t=o(a).getAllByText("This field is required");n(t[0]).toBeVisible()}},b={args:{label:"Bound checkbox",onCheckedChange:h()},render:()=>{const{formProp:a,formState:e}=M({checked:!1});return c.jsxs(c.Fragment,{children:[c.jsx(r,{bind:a("checked").bind()}),c.jsxs("p",{"data-testid":"bound-result",children:["Bound value is ",e!=null&&e.checked?"checked":"not checked"]})]})},play:async({canvasElement:a})=>{const e=o(a),t=e.getByRole("checkbox"),s=e.getByTestId("bound-result");F.click(t),await p(()=>n(s).toHaveTextContent("Bound value is checked"))}},u={render:()=>c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[c.jsx(r,{displaySize:"large",label:"Large checkbox","data-testid":"cb-container"}),c.jsx(r,{displaySize:"medium",label:"Medium checkbox","data-testid":"cb-container"}),c.jsx(r,{displaySize:"small",label:"Small checkbox","data-testid":"cb-container"})]}),play:async({canvasElement:a})=>{const e=o(a),[t,s,D]=await e.findAllByTestId("cb-container");n(t).toHaveAttribute("data-size","large"),n(s).toHaveAttribute("data-size","medium"),n(D).toHaveAttribute("data-size","small")}};var k,x,g;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,y,C;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(y=l.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var f,B,w;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(w=(B=d.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var E,I,S;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(A=(z=b.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var R,j,H;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Checkbox displaySize="large" label="Large checkbox" data-testid="cb-container" />
        <Checkbox displaySize="medium" label="Medium checkbox" data-testid="cb-container" />
        <Checkbox displaySize="small" label="Small checkbox" data-testid="cb-container" />
      </div>;
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
}`,...(H=(j=u.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};const $=["Default","Disabled","CustomIndicator","ValidationError","Bound","Sizes"];export{b as Bound,d as CustomIndicator,i as Default,l as Disabled,u as Sizes,m as ValidationError,$ as __namedExportsOrder,Z as default};
