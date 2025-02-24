import{j as t}from"./jsx-runtime-Cl2eCCBe.js";import{f as d,w as r,e as n,u as U,a as X}from"./index-Dv9et24K.js";import{I as B}from"./config.context-CQ8yCtG8.js";import{B as e}from"./button.component-BqSJDp5_.js";import"./index-Cqyox1Tj.js";import"./spinner.component-RFiNSZIp.js";const st={title:"Components/Button",component:e,args:{children:"Click me please"},parameters:{docs:{description:{component:"metadata"}}}},i={render:s=>t.jsx(e,{...s})},c={...i,args:{onClick:d()},play:async({args:s,canvasElement:l})=>{const a=r(l).getByRole("button");n(a).toHaveTextContent(s.children),await U.click(a),await X(()=>n(s.onClick).toHaveBeenCalled())}},y={...i,render:()=>t.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t.jsx(e,{displaySize:"small",children:"Small"}),t.jsx(e,{children:"Medium"}),t.jsx(e,{displaySize:"large",children:"Large"})]})},u={...i,render:()=>t.jsx(t.Fragment,{children:t.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t.jsx(e,{displayStatus:"normal",children:"Normal"}),t.jsx(e,{displayStatus:"positive",children:"Positive"}),t.jsx(e,{displayStatus:"negative",children:"Negative"}),t.jsx(e,{displayStatus:"warning",children:"Warning"}),t.jsx(e,{displayStatus:"info",children:"Info"})]})}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/f6yAoBwAQop8YahTF2ASSG/Block-up-design-system?node-id=197%3A3561&t=ccw4zqPQDfhSLCVL-1"}}},m={...i,render:()=>t.jsx(t.Fragment,{children:t.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t.jsx(e,{displayStyle:"primary",children:"Primary"}),t.jsx(e,{displayStyle:"secondary",children:"Secondary"}),t.jsx(e,{displayStyle:"outline",children:"Outline"}),t.jsx(e,{displayStyle:"blank",children:"Blank"})]})}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/f6yAoBwAQop8YahTF2ASSG/Block-up-design-system?node-id=197%3A3561&t=ccw4zqPQDfhSLCVL-1"}}},g={...i,render:()=>t.jsxs(t.Fragment,{children:[t.jsx("h3",{children:"Status - Normal"}),t.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t.jsx(e,{displayStyle:"primary",children:"Primary"}),t.jsx(e,{displayStyle:"secondary",children:"Secondary"}),t.jsx(e,{displayStyle:"outline",children:"Outline"})]}),t.jsx("h3",{children:"Status - Positive"}),t.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t.jsx(e,{displayStyle:"primary",displayStatus:"positive",children:"Primary"}),t.jsx(e,{displayStyle:"secondary",displayStatus:"positive",children:"Secondary"}),t.jsx(e,{displayStyle:"outline",displayStatus:"positive",children:"Outline"})]}),t.jsx("h3",{children:"Status - Negative"}),t.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t.jsx(e,{displayStyle:"primary",displayStatus:"negative",children:"Primary"}),t.jsx(e,{displayStyle:"secondary",displayStatus:"negative",children:"Secondary"}),t.jsx(e,{displayStyle:"outline",displayStatus:"negative",children:"Outline"})]}),t.jsx("h3",{children:"Status - Warning"}),t.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t.jsx(e,{displayStyle:"primary",displayStatus:"warning",children:"Primary"}),t.jsx(e,{displayStyle:"secondary",displayStatus:"warning",children:"Secondary"}),t.jsx(e,{displayStyle:"outline",displayStatus:"warning",children:"Outline"})]}),t.jsx("h3",{children:"Status - Info"}),t.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[t.jsx(e,{displayStyle:"primary",displayStatus:"info",children:"Primary"}),t.jsx(e,{displayStyle:"secondary",displayStatus:"info",children:"Secondary"}),t.jsx(e,{displayStyle:"outline",displayStatus:"info",children:"Outline"})]})]}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/f6yAoBwAQop8YahTF2ASSG/Block-up-design-system?node-id=197%3A3561&t=ccw4zqPQDfhSLCVL-1"}}},S={...i,args:{onClick:d(),leftOverlay:t.jsx(B,{title:"left-icon-test"})},play:async({args:s,canvasElement:l})=>{const a=r(l).getByRole("button"),p=r(a).getByTitle("left-icon-test");n(a).toHaveTextContent(s.children),n(p).toBeVisible(),await U.click(a),await X(()=>n(s.onClick).toHaveBeenCalled())}},x={...i,args:{onClick:d(),leftOverlay:t.jsx(B,{title:"left-icon-test"}),disabled:!0},play:async({args:s,canvasElement:l})=>{const a=r(l).getByRole("button");n(a).toHaveTextContent(s.children),n(a).toBeDisabled(),n(a).toHaveAttribute("data-disabled","true")}},v={...i,args:{onClick:d(),leftOverlay:t.jsx(B,{title:"left-icon-test"}),pending:!0},play:async({args:s,canvasElement:l})=>{const a=r(l).getByRole("button"),p=r(a).getByRole("status");n(a.lastChild).toContainElement(p),n(a).toHaveTextContent(s.children),n(a).toBeDisabled(),n(a).toHaveAttribute("data-disabled","true"),n(p).toBeVisible()}},h={...i,args:{onClick:d(),leftOverlay:t.jsx(B,{title:"left-icon-test"}),pending:!0,pendingPosition:"left"},play:async({canvasElement:s})=>{const o=r(s).getByRole("button"),a=r(o).getByRole("status");n(o.firstChild).toContainElement(a)}};var f,w,b,j,C;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  args: {
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    expect(button).toHaveTextContent(args.children as string);
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
}`,...(b=(w=c.parameters)==null?void 0:w.docs)==null?void 0:b.source},description:{story:"stories",...(C=(j=c.parameters)==null?void 0:j.docs)==null?void 0:C.description}}};var P,A,k;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Template,
  render: () => {
    return <div style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }}>
        <Button displaySize="small">Small</Button>
        <Button>Medium</Button>
        <Button displaySize="large">Large</Button>
      </div>;
  }
}`,...(k=(A=y.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var I,T,O;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template,
  render: () => {
    return <>
        <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
          <Button displayStatus="normal">Normal</Button>
          <Button displayStatus="positive">Positive</Button>
          <Button displayStatus="negative">Negative</Button>
          <Button displayStatus="warning">Warning</Button>
          <Button displayStatus="info">Info</Button>
        </div>
      </>;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/f6yAoBwAQop8YahTF2ASSG/Block-up-design-system?node-id=197%3A3561&t=ccw4zqPQDfhSLCVL-1'
    }
  }
}`,...(O=(T=u.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var E,H,L;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template,
  render: () => {
    return <>
        <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
          <Button displayStyle="primary">Primary</Button>
          <Button displayStyle="secondary">Secondary</Button>
          <Button displayStyle="outline">Outline</Button>
          <Button displayStyle="blank">Blank</Button>
        </div>
      </>;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/f6yAoBwAQop8YahTF2ASSG/Block-up-design-system?node-id=197%3A3561&t=ccw4zqPQDfhSLCVL-1'
    }
  }
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var R,z,D;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Template,
  render: () => {
    return <>
        <h3>Status - Normal</h3>
        <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
          <Button displayStyle="primary">Primary</Button>
          <Button displayStyle="secondary">Secondary</Button>
          <Button displayStyle="outline">Outline</Button>
        </div>
        <h3>Status - Positive</h3>
        <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
          <Button displayStyle="primary" displayStatus="positive">
            Primary
          </Button>
          <Button displayStyle="secondary" displayStatus="positive">
            Secondary
          </Button>
          <Button displayStyle="outline" displayStatus="positive">
            Outline
          </Button>
        </div>
        <h3>Status - Negative</h3>
        <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
          <Button displayStyle="primary" displayStatus="negative">
            Primary
          </Button>
          <Button displayStyle="secondary" displayStatus="negative">
            Secondary
          </Button>
          <Button displayStyle="outline" displayStatus="negative">
            Outline
          </Button>
        </div>
        <h3>Status - Warning</h3>
        <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
          <Button displayStyle="primary" displayStatus="warning">
            Primary
          </Button>
          <Button displayStyle="secondary" displayStatus="warning">
            Secondary
          </Button>
          <Button displayStyle="outline" displayStatus="warning">
            Outline
          </Button>
        </div>
        <h3>Status - Info</h3>
        <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
          <Button displayStyle="primary" displayStatus="info">
            Primary
          </Button>
          <Button displayStyle="secondary" displayStatus="info">
            Secondary
          </Button>
          <Button displayStyle="outline" displayStatus="info">
            Outline
          </Button>
        </div>
      </>;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/f6yAoBwAQop8YahTF2ASSG/Block-up-design-system?node-id=197%3A3561&t=ccw4zqPQDfhSLCVL-1'
    }
  }
}`,...(D=(z=g.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var F,Q,V;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Template,
  args: {
    onClick: fn(),
    leftOverlay: <ImPencil title="left-icon-test" />
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    const icon = within(button).getByTitle('left-icon-test');
    expect(button).toHaveTextContent(args.children as string);
    expect(icon).toBeVisible();
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  }
}`,...(V=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var N,q,G;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Template,
  args: {
    onClick: fn(),
    leftOverlay: <ImPencil title="left-icon-test" />,
    disabled: true
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    expect(button).toHaveTextContent(args.children as string);
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('data-disabled', 'true');
  }
}`,...(G=(q=x.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var W,Y,M;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Template,
  args: {
    onClick: fn(),
    leftOverlay: <ImPencil title="left-icon-test" />,
    pending: true
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    const spinner = within(button).getByRole('status');
    expect(button.lastChild).toContainElement(spinner as HTMLElement);
    expect(button).toHaveTextContent(args.children as string);
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('data-disabled', 'true');
    expect(spinner).toBeVisible();
  }
}`,...(M=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:M.source}}};var _,J,K;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Template,
  args: {
    onClick: fn(),
    leftOverlay: <ImPencil title="left-icon-test" />,
    pending: true,
    pendingPosition: 'left'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    const spinner = within(button).getByRole('status');
    expect(button.firstChild).toContainElement(spinner as HTMLElement);
  }
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const it=["Primary","Sizes","Statuses","Styles","AllStyles","WithIcons","Disabled","Pending","PendingOnLeft"];export{g as AllStyles,x as Disabled,v as Pending,h as PendingOnLeft,c as Primary,y as Sizes,u as Statuses,m as Styles,S as WithIcons,it as __namedExportsOrder,st as default};
