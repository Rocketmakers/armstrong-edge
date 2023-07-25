import{a as b,j,F as L}from"./jsx-runtime-63e4a166.js";import{w as N,e as f,u as v,a as F}from"./index-3ffc2e85.js";import{r as s}from"./index-c4905b50.js";import{u as M,a as q}from"./useContentMemo-75732a9d.js";import{c as x}from"./config.context-240cf8e4.js";import{c as A}from"./classNames-9011e307.js";import{B as P}from"./button.component-76d3030f.js";import"./index-999ec173.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-62e1ad13.js";import"./index-890dd1b5.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";import"./spinner.component-6fee5c63.js";const a=typeof window>"u"?void 0:window,g=typeof document>"u"?void 0:document,T=!!(a!=null&&a.ResizeObserver);a!=null&&a.IntersectionObserver;a!=null&&a.MutationObserver;a!=null&&a.PerformanceObserver;const V=!!a;function H(t,r){const e=s.useRef(!1);return s.useEffect(()=>{if(!e.current){e.current=!0;return}return t()},r)}function h(t,r,e=a,n={passive:!0},u=!0){s.useEffect(()=>{if(e&&u)return e.addEventListener(t,r,n),()=>{if(typeof n=="object"){const{once:d,passive:o,...c}=n;e.removeEventListener(t,r,c)}else e.removeEventListener(t,r,n)}},[r,e,t,u,n])}function U(t,r,e){const n=s.useRef(),u=M(r),d=s.useCallback(i=>{n.current=new ResizeObserver(t),n.current.observe(i,u)},[t,u]),o=s.useCallback(i=>{n.current&&n.current.unobserve(i)},[]),c=s.useCallback(()=>{var i;(i=n.current)==null||i.disconnect()},[]);return q(()=>{if(e!=null&&e.current&&V&&T)return d(e.current),()=>{e.current&&o(e.current)}},[d,o,e]),s.useEffect(()=>c,[c]),{observer:n,unobserve:o,disconnect:c}}function $(t,r,e=!0){var i;const[n,u]=s.useState(((i=t.current)==null?void 0:i.getBoundingClientRect())||new DOMRect(0,0,0,0)),d=s.useCallback(l=>{const{top:k,right:w,bottom:_,left:C,width:z,height:S,x:I,y:D}=l;return{top:k,right:w,bottom:_,left:C,width:z,height:S,x:I,y:D}},[]),o=s.useCallback(()=>{if(t.current){const l=t.current.getBoundingClientRect();x(d(l))!==x(d(n))&&(r==null||r(l),u(l))}},[t,d,n,r]);U(o,{},t),H(()=>{e&&o()},[e]);const c=s.useCallback(()=>{e&&o()},[e,o]);return h("resize",o,g),h("scroll",c,g,{capture:!0}),s.useEffect(()=>{o()},[]),[n,o]}const p=s.forwardRef(({className:t,children:r,style:e,animate:n,isOpen:u,...d},o)=>{const c=s.useRef(null),[{height:i}]=$(c);return b("div",{...d,className:A("arm-expandable",t),style:{...n?{"--arm-expandable-height":`${i}px`}:{},...e||{}},"data-animate":!!n,"data-is-open":!!u,ref:o,children:b("div",{ref:c,className:"arm-expandable-content",children:r})})});p.displayName="Expandable";p.defaultProps={animate:!0};try{p.displayName="Expandable",p.__docgenInfo={description:"A div which will automatically resize depending on the size of its children",displayName:"Expandable",props:{animate:{defaultValue:{value:"true"},description:"Should animate the height expansion",name:"animate",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"is the expandable region open, if false will take up no space",name:"isOpen",required:!1,type:{name:"boolean"}}}}}catch{}const ie={title:"Components/Expandable",component:p,parameters:{docs:{description:{component:"An region that can expand/contract with animation"}}}},m={render:()=>{const[t,r]=s.useState(!1);return j(L,{children:[b(P,{onClick:()=>r(!t),children:"Toggle content"}),b(p,{isOpen:t,"data-testid":"expandable",children:b("div",{style:{height:"200px",backgroundColor:"#dbdbdb",padding:"20px",boxSizing:"border-box"},children:"Some inner content"})})]})},play:async({canvasElement:t})=>{const r=N(t),e=r.getByTestId("expandable");f(e.offsetHeight).toBe(0);const n=r.getByRole("button");v.click(n),await F(()=>f(e.offsetHeight).toBe(200)),v.click(n)}};var E,y,R,O,B;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(y=m.parameters)==null?void 0:y.docs)==null?void 0:R.source},description:{story:"stories",...(B=(O=m.parameters)==null?void 0:O.docs)==null?void 0:B.description}}};const ce=["Default"];export{m as Default,ce as __namedExportsOrder,ie as default};
//# sourceMappingURL=expandable.stories-d3ede658.js.map
