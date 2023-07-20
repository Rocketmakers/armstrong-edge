import{M as c}from"./chunk-PCJTTTQV-b674a044.js";import{a as n,j as r,F as m}from"./jsx-runtime-63e4a166.js";import{u as s}from"./index-f875e932.js";import"./iframe-99c3f6ce.js";import"../sb-preview/runtime.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d3777853.js";import"./index-07d1f67e.js";import"./_baseIsEqual-62e1ad13.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./isNativeReflectConstruct-30e719dd.js";import"./index-d37d4223.js";import"./uniq-d447bef6.js";import"./index-356e4a49.js";function a(t){const e=Object.assign({h2:"h2",h3:"h3",p:"p",a:"a",pre:"pre",code:"code"},s(),t.components);return r(m,{children:[n(c,{title:"Utilities/ClassNames"}),`
`,n(e.h2,{id:"classnames",children:"ClassNames"}),`
`,n(e.h3,{id:"concat",children:"Concat"}),`
`,r(e.p,{children:["Based on ",n(e.a,{href:"https://www.npmjs.com/package/classnames",target:"_blank",rel:"nofollow noopener noreferrer",children:"classNames"})," but included in Armstrong to reduce dependencies."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`import { concat } from '@rocketmakers/armstrong';

const className = concat('thing', 'other-thing', { ['another-thing']: true, ['an-unused-thing']: false }, [
  'hello',
  'there',
]);

// className
('thing other-thing another-thing hello there');
`})}),`
`,n(e.p,{children:"This is a common example with a component with a className prop:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import { concat } from '@rocketmakers/armstrong';

interface IMyCoolProps {
  className?: string;
}

const MyCoolComponent: React.FC<IMyCoolProps> = ({ className }) => {
  return <div className={concat('my-cool-component', className)} />;
};
`})})]})}function i(t={}){const{wrapper:e}=Object.assign({},s(),t.components);return e?n(e,{...t,children:n(a,{...t})}):a(t)}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const o={title:"Utilities/ClassNames",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:i};const D=["__page"];export{D as __namedExportsOrder,l as __page,o as default};
//# sourceMappingURL=classNames.stories-acfe78f9.js.map