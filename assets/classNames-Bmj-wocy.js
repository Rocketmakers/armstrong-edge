import{j as n}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as s}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-BWcGRz_c.js";import{ae as a}from"./index-D1Cxvymy.js";import"./index-Cqyox1Tj.js";import"./iframe-D0d6nTa0.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function o(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Utilities/ClassNames"}),`
`,n.jsx(e.h2,{id:"classnames",children:"ClassNames"}),`
`,n.jsx(e.h3,{id:"concat",children:"Concat"}),`
`,n.jsxs(e.p,{children:["Based on ",n.jsx(e.a,{href:"https://www.npmjs.com/package/classnames",rel:"nofollow",children:"classNames"})," but included in Armstrong to reduce dependencies."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { concat } from '@rocketmakers/armstrong';

const className = concat('thing', 'other-thing', { ['another-thing']: true, ['an-unused-thing']: false }, [
  'hello',
  'there',
]);

// className
('thing other-thing another-thing hello there');
`})}),`
`,n.jsx(e.p,{children:"This is a common example with a component with a className prop:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { concat } from '@rocketmakers/armstrong';

interface IMyCoolProps {
  className?: string;
}

const MyCoolComponent: React.FC<IMyCoolProps> = ({ className }) => {
  return <div className={concat('my-cool-component', className)} />;
};
`})})]})}function j(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{j as default};
