import{j as b,a as j,F as L}from"./jsx-runtime-eae7a151.js";import{w as N,e as f,u as v,a as F}from"./index-16752634.js";import{r as o}from"./index-c4905b50.js";import{a as M,b as q,u as A}from"./useDidUpdateEffect-7dd0d6b2.js";import{d as x}from"./config.context-ae8741c8.js";import{c as P}from"./classNames-9011e307.js";import{B as T}from"./button.component-1c2f3deb.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-4dce63e4.js";import"./index-a6c8ef6f.js";import"./index-356e4a49.js";import"./spinner.component-a9fcb2ea.js";const a=typeof window>"u"?void 0:window,g=typeof document>"u"?void 0:document,V=!!(a!=null&&a.ResizeObserver);a!=null&&a.IntersectionObserver;a!=null&&a.MutationObserver;a!=null&&a.PerformanceObserver;const H=!!a;function h(n,s,e=a,t={passive:!0},u=!0){o.useEffect(()=>{if(e&&u)return e.addEventListener(n,s,t),()=>{if(typeof t=="object"){const{once:d,passive:r,...c}=t;e.removeEventListener(n,s,c)}else e.removeEventListener(n,s,t)}},[s,e,n,u,t])}function U(n,s,e){const t=o.useRef(),u=M(s),d=o.useCallback(i=>{t.current=new ResizeObserver(n),t.current.observe(i,u)},[n,u]),r=o.useCallback(i=>{t.current&&t.current.unobserve(i)},[]),c=o.useCallback(()=>{var i;(i=t.current)==null||i.disconnect()},[]);return q(()=>{if(e!=null&&e.current&&H&&V)return d(e.current),()=>{e.current&&r(e.current)}},[d,r,e]),o.useEffect(()=>c,[c]),{observer:t,unobserve:r,disconnect:c}}function $(n,s,e=!0){var i;const[t,u]=o.useState(((i=n.current)==null?void 0:i.getBoundingClientRect())||new DOMRect(0,0,0,0)),d=o.useCallback(l=>{const{top:k,right:w,bottom:_,left:C,width:z,height:S,x:I,y:D}=l;return{top:k,right:w,bottom:_,left:C,width:z,height:S,x:I,y:D}},[]),r=o.useCallback(()=>{if(n.current){const l=n.current.getBoundingClientRect();x(d(l))!==x(d(t))&&(s==null||s(l),u(l))}},[n,d,t,s]);U(r,{},n),A(()=>{e&&r()},[e]);const c=o.useCallback(()=>{e&&r()},[e,r]);return h("resize",r,g),h("scroll",c,g,{capture:!0}),o.useEffect(()=>{r()},[]),[t,r]}const p=o.forwardRef(({className:n,children:s,style:e,animate:t,isOpen:u,...d},r)=>{const c=o.useRef(null),[{height:i}]=$(c);return b("div",{...d,className:P("arm-expandable",n),style:{...t?{"--arm-expandable-height":`${i}px`}:{},...e||{}},"data-animate":!!t,"data-is-open":!!u,ref:r,children:b("div",{ref:c,className:"arm-expandable-content",children:s})})});p.displayName="Expandable";p.defaultProps={animate:!0};try{p.displayName="Expandable",p.__docgenInfo={description:"A div which will automatically resize depending on the size of its children",displayName:"Expandable",props:{animate:{defaultValue:{value:"true"},description:"Should animate the height expansion",name:"animate",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"is the expandable region open, if false will take up no space",name:"isOpen",required:!1,type:{name:"boolean"}}}}}catch{}const ae={title:"Components/Expandable",component:p,parameters:{docs:{description:{component:"An region that can expand/contract with animation"}}}},m={render:()=>{const[n,s]=o.useState(!1);return j(L,{children:[b(T,{onClick:()=>s(!n),children:"Toggle content"}),b(p,{isOpen:n,"data-testid":"expandable",children:b("div",{style:{height:"200px",backgroundColor:"#dbdbdb",padding:"20px",boxSizing:"border-box"},children:"Some inner content"})})]})},play:async({canvasElement:n})=>{const s=N(n),e=s.getByTestId("expandable");f(e.offsetHeight).toBe(0);const t=s.getByRole("button");v.click(t),await F(()=>f(e.offsetHeight).toBe(200)),v.click(t)}};var y,E,O,R,B;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <>
        <Button onClick={() => setIsOpen(!isOpen)}>Toggle content</Button>
        <Expandable isOpen={isOpen} data-testid="expandable">
          <div style={{
          height: '200px',
          backgroundColor: '#dbdbdb',
          padding: '20px',
          boxSizing: 'border-box'
        }}>
            Some inner content
          </div>
        </Expandable>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const inner = canvas.getByTestId('expandable');
    expect(inner.offsetHeight).toBe(0);
    const button = canvas.getByRole('button');
    userEvent.click(button);
    await waitFor(() => expect(inner.offsetHeight).toBe(200));
    userEvent.click(button);
  }
}`,...(O=(E=m.parameters)==null?void 0:E.docs)==null?void 0:O.source},description:{story:"stories",...(B=(R=m.parameters)==null?void 0:R.docs)==null?void 0:B.description}}};const ie=["Default"];export{m as Default,ie as __namedExportsOrder,ae as default};
