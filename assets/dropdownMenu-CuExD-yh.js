import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DVgGKjXv.js";import{ae as d,af as s,ag as a}from"./index-DoXlP5Lm.js";import"./blocks-Dl3A-eXH.js";import{D as t,a as l}from"./dropdownMenu.stories-CAX0tvwX.js";import"./index-DwQS_Y10.js";import"./iframe-CJfsGlR5.js";import"../sb-preview/runtime.js";import"./index-BY2j7gpI.js";import"./index-Bls5tne7.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./index-BmZcwVSF.js";import"./config.context-Db4Op3G9.js";import"./index-CWQsrU90.js";import"./index-DKCiyFsV.js";import"./index-Dp6IY7a_.js";import"./index-wJcBHZIT.js";import"./index-D-iaL4kR.js";import"./index-Bgmmd5SI.js";import"./index-B2Q3jSsz.js";import"./index-DYVRbH_s.js";import"./floating-ui.react-dom-BSaGsYCm.js";import"./floating-ui.dom-9Spud0fE.js";import"./index-D3JXVD-Y.js";import"./index-CC-sFNo4.js";import"./index-Dv-BAVC1.js";import"./index-hWMLfxWy.js";import"./button.component-DGjVvDTT.js";import"./spinner.component-C8cBclXj.js";function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Components/DropdownMenu",component:t}),`
`,n.jsx(e.h1,{id:"dropdown-menu",children:"Dropdown menu"}),`
`,n.jsx(e.p,{children:"A dropdown menu featuring section dividers and icon overlays."}),`
`,n.jsx(s,{of:l,layout:"centered",sourceState:"none"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { DropdownMenu, Button } from '@rocketmakers/armstrong';

const items = [
  {
    label: 'Item',
    onClick: () => {},
  },
]

<DropdownMenu items={items}>
  <Button>Toggle item list menu</Button>
</DropdownMenu>
`})}),`
`,n.jsx(e.h2,{id:"dropdown-menu-props",children:"Dropdown menu props"}),`
`,n.jsx(a,{of:t}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#items",children:"Dropdown menu items"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#header-footer",children:"Dropdown menu header and footer"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#arrow",children:"Dropdown menu with arrow"})}),`
`]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h3,{id:"dropdown-menu-items",children:n.jsx("a",{name:"items",children:"Dropdown menu items"})}),`
`,n.jsx(e.h3,{id:"basic-item",children:"Basic item"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<DropdownMenu items={[{ label: 'Item', onClick: () => {} }]}>
  <Button>Button</Button>
</DropdownMenu>
`})}),`
`,n.jsx(e.h3,{id:"non-clickable-item",children:"Non-clickable item"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<DropdownMenu items={[{ label: 'Non-clickable item' }]}>
  <Button>Button</Button>
</DropdownMenu>
`})}),`
`,n.jsx(e.h3,{id:"disabled-item",children:"Disabled item"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<DropdownMenu items={[{ label: 'Disabled item', disabled: true }]}>
  <Button>Button</Button>
</DropdownMenu>
`})}),`
`,n.jsx(e.h3,{id:"item-with-icon-overlay",children:"Item with icon overlay"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<DropdownMenu
  items={[
    {
      label: 'Icon on the left',
      leftOverlay: <Icon />,
    },
    {
      label: 'Icon on the right',
      rightOverlay: <Icon />,
    },
  ]}
>
  <Button>Button</Button>
</DropdownMenu>
`})}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h3,{id:"dropdown-menu-header-and-footer",children:n.jsx("a",{name:"header-footer",children:"Dropdown menu header and footer"})}),`
`,n.jsx(e.h3,{id:"header",children:"Header"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<DropdownMenu items={items} headerContent={<div>Header content</div>}>
  <Button>Button</Button>
</DropdownMenu>
`})}),`
`,n.jsx(e.h3,{id:"footer",children:"Footer"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<DropdownMenu items={items} footerContent={<div>Footer content</div>}>
  <Button>Button</Button>
</DropdownMenu>
`})}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h3,{id:"dropdown-menu-with-arrow",children:n.jsx("a",{name:"arrow",children:"Dropdown menu with arrow"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<DropdownMenu items={items} showArrow>
  <Button>Button</Button>
</DropdownMenu>
`})}),`
`,n.jsx(e.h3,{id:"non-modal-dropdown-menu",children:"Non-modal dropdown menu"}),`
`,n.jsx(e.p,{children:"Stops the dropdown menu blocking interaction with the rest of the page when open."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<DropdownMenu items={items} modal={false}>
  <Button>Button</Button>
</DropdownMenu>
`})})]})}function R(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{R as default};
