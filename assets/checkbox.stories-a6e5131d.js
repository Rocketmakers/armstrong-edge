import{a as c,j as p,F as D}from"./jsx-runtime-63e4a166.js";import{w as s,a as h,e as n,u as q}from"./index-3ffc2e85.js";import{a as L}from"./config.context-03ebf2cb.js";import{C as r}from"./checkbox.component-32fa2106.js";import{u as V}from"./label.component-c51d3d45.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-999ec173.js";import"./index-d475d2ea.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";import"./index-742b7287.js";import"./index-07d1f67e.js";import"./index-97ba0010.js";import"./index-c1bef199.js";import"./index-b8d80492.js";import"./index-1381309a.js";import"./index-3d4ae170.js";import"./useDidUpdateEffect-2528cb48.js";import"./classNames-9011e307.js";import"./statusWrapper.component-5d5028da.js";import"./spinner.component-c2b96b2c.js";import"./validationErrors.component-2d32de4a.js";const de={title:"Components/Checkbox",component:r},i={args:{label:"Here is label"},play:async({canvasElement:a})=>{const t=s(a).getByRole("checkbox");t.click(),await h(()=>n(t.getAttribute("aria-checked")).toBe("true"))}},l={args:{label:"Checkbox is disabled",disabled:!0,testId:"arm-checkbox-container"},play:({canvasElement:a})=>{const o=s(a).getByTestId("arm-checkbox-container").getAttribute("data-disabled");n(o).toBe("true")}},d={args:{label:"Check for Custom Indicator",testId:"arm-checkbox-container",customIndicator:c(L,{"data-testid":"rocket-indicator"})},play:async({canvasElement:a})=>{const e=s(a);e.getByRole("checkbox").click();const o=await h(()=>e.getByTestId("rocket-indicator"));n(o)}},m={args:{label:"Option 1",validationErrorMessages:["This field is required"]},play:({canvasElement:a})=>{const t=s(a).getAllByText("This field is required");n(t[0]).toBeVisible()}},b={args:{label:"Bound checkbox"},render:()=>{const{formProp:a,formState:e}=V({checked:!1});return p(D,{children:[c(r,{bind:a("checked").bind()}),p("p",{"data-testid":"bound-result",children:["Bound value is ",e!=null&&e.checked?"checked":"not checked"]})]})},play:async({canvasElement:a})=>{const e=s(a),t=e.getByRole("checkbox"),o=e.getByTestId("bound-result");q.click(t),await h(()=>n(o).toHaveTextContent("Bound value is checked"))}},u={render:()=>p(D,{children:[c("h2",{children:"Large"}),c(r,{displaySize:"large",label:"Large checkbox","data-testid":"cb-container"}),c("h2",{children:"Medium"}),c(r,{displaySize:"medium",label:"Medium checkbox","data-testid":"cb-container"}),c("h2",{children:"Small"}),c(r,{displaySize:"small",label:"Small checkbox","data-testid":"cb-container"})]}),play:async({canvasElement:a})=>{const e=s(a),[t,o,M]=await e.findAllByTestId("cb-container");n(t).toHaveAttribute("data-size","large"),n(o).toHaveAttribute("data-size","medium"),n(M).toHaveAttribute("data-size","small")}};var k,x,v;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Here is label'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    checkbox.click();
    await waitFor(() => expect(checkbox.getAttribute('aria-checked')).toBe('true'));
  }
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var g,y,B;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(B=(y=l.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var f,w,I;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Check for Custom Indicator',
    testId: 'arm-checkbox-container',
    customIndicator: <ImRocket data-testid={'rocket-indicator'} />
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
}`,...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var E,S,C;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Option 1',
    validationErrorMessages: ['This field is required']
  },
  play: ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getAllByText('This field is required');
    expect(label[0]).toBeVisible();
  }
}`,...(C=(S=m.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var T,z,A;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Bound checkbox'
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
}`,...(A=(z=b.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var R,H,F;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(H=u.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};const me=["Default","Disabled","CustomIndicator","ValidationError","Bound","Sizes"];export{b as Bound,d as CustomIndicator,i as Default,l as Disabled,u as Sizes,m as ValidationError,me as __namedExportsOrder,de as default};
//# sourceMappingURL=checkbox.stories-a6e5131d.js.map
