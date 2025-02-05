import{j as r}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as e}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-CFaFSlYO.js";import{ae as m}from"./index-DTizwzfy.js";import"./index-Cqyox1Tj.js";import"./iframe-BAkUojWy.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function o(n){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...e(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{title:"Introduction/CSS Variables"}),`
`,r.jsx(a.h1,{id:"css-variables",children:"CSS Variables"}),`
`,r.jsx(a.p,{children:"The following list of CSS variables are used throughout Armstrong. They are used to define the default values for Armstrong components and can be overridden to customise the look and feel of your app."}),`
`,r.jsx(a.h2,{id:"global-variables",children:"Global Variables"}),`
`,r.jsx(a.pre,{children:r.jsx(a.code,{className:"language-css",children:`/* Colors - monochrome */
--arm-color-black: #000;
--arm-color-grey-1000: #333;
--arm-color-grey-900: #474747;
--arm-color-grey-800: #5c5c5c;
--arm-color-grey-700: #707070;
--arm-color-grey-600: #848484;
--arm-color-grey-500: #999;
--arm-color-grey-400: #adadad;
--arm-color-grey-300: #c2c2c2;
--arm-color-grey-200: #d6d6d6;
--arm-color-grey-100: #ebebeb;
--arm-color-white: #fff;

/* Colors - status */
--arm-color-positive: #27ae60;
--arm-color-positive-secondary: #27ae5f2b;
--arm-color-warning: #f78e52;
--arm-color-warning-secondary: #f78f522b;
--arm-color-negative: #eb5757;
--arm-color-negative-secondary: #eb57572b;
--arm-color-info: #3498d8;
--arm-color-info-secondary: #3499d82b;

/* Colors - brand */
--arm-color-brand-primary: #cd3939;
--arm-color-brand-secondary: #3d4144;

/* Font sizes */
--arm-font-size-xsmall: 0.875rem;
--arm-font-size-small: 1rem;
--arm-font-size-medium: 1.125rem;
--arm-font-size-large: 1.25rem;
--arm-font-size-xlarge: 1.5rem;
--arm-font-size-xxlarge: 2rem;
--arm-font-size-xxxlarge: 2.5rem;

/** Font weights */
--arm-font-weight-medium: 500;
--arm-font-weight-bold: 700;

/* Spacing */
--arm-spacing-xxxsmall: 0.375rem;
--arm-spacing-xxsmall: 0.5rem;
--arm-spacing-xsmall: 0.625rem;
--arm-spacing-small: 0.75rem;
--arm-spacing-medium: 1rem;
--arm-spacing-large: 1.25rem;
--arm-spacing-xlarge: 1.5rem;
--arm-spacing-xxlarge: 2rem;
--arm-spacing-xxxlarge: 2.5rem;
--arm-spacing-xxxxlarge: 3rem;

/* Accessibility */
--arm-focus-visible-color: var(--arm-color-grey-1000);

/* Button */
--arm-button-border-radius: 6px;
--arm-button-primary-bg-color: var(--arm-color-grey-1000);
--arm-button-primary-fg-color: var(--arm-color-white);
--arm-button-secondary-bg-color: var(--arm-color-grey-100);
--arm-button-secondary-fg-color: var(--arm-color-grey-1000);
--arm-button-outline-stroke-color: var(--arm-button-primary-bg-color);
--arm-button-outline-stroke-thickness: 2px;
--arm-button-outline-bg-color: transparent;
--arm-button-outline-fg-color: var(--arm-button-outline-stroke-color);

/* Inputs */
--arm-input-width: 23.4375rem;
--arm-input-width-large: 26.25rem;
--arm-input-height: 2.25rem;
--arm-input-height-medium: 3rem;
--arm-input-height-large: 3.5rem;

/* Spinner */
--arm-spinner-speed: 500ms;

/* Form - shared */
--arm-form-border-radius: 5px;
--arm-form-border-thickness: 1px;
--arm-form-border-thickness-highlight: 1px;
--arm-form-border-color: var(--arm-color-grey-600);
--arm-form-square-size: 25px;
--arm-form-checked-bg-color: var(--arm-color-grey-600);
--arm-form-checked-fg-color: var(--arm-color-white);
--arm-form-input-max-width: 23.4375rem;

/* Dropdown menu */
--arm-dropdown-menu-bg-color: var(--arm-color-white);
--arm-dropdown-menu-border-color: var(--arm-color-grey-200);
--arm-dropdown-menu-arrow-size: 12px;

/* Dialog */
--arm-dialog-overlay-color: rgb(0 0 0 / 40%);
--arm-dialog-overlay-animation: arm-overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1);
--arm-dialog-z-index: 1;
--arm-dialog-border-radius: var(--arm-button-border-radius);
--arm-dialog-box-shadow: hsl(206deg 22% 7% / 35%) 0 10px 38px -10px, hsl(206deg 22% 7% / 20%) 0 10px 20px -15px;
--arm-dialog-width: 90vw;
--arm-dialog-max-width: 450px;
--arm-dialog-max-height: 85vh;
--arm-dialog-content-animation: arm-content-show 150ms cubic-bezier(0.16, 1, 0.3, 1);

/* Expandable */
--arm-expandable-transition-duration: 300ms;

/* Progress bar */
--arm-progress-bar-height: 12px;
--arm-progress-bar-bg-color: var(--arm-color-grey-100);
--arm-progress-bar-fg-color: var(--arm-color-grey-1000);
--arm-progress-bar-animation-duration: 200ms;

/* Range input */
--arm-range-input-width: 600px;
--arm-range-input-thumb-size: var(--arm-spacing-xlarge);
--arm-range-input-track-height: calc(var(--arm-range-input-thumb-size) / 2);
--arm-range-input-width-small: 400px;
--arm-range-input-thumb-size-small: var(--arm-spacing-medium);
--arm-range-input-width-large: 800px;
--arm-range-input-thumb-size-large: var(--arm-spacing-xxlarge);

/* Rating input */
--arm-rating-part-size: 1.8rem;
--arm-rating-part-size-small: 1.2rem;
--arm-rating-part-size-large: 2.4rem;

/* Switch input */
--arm-switch-width: 2.5rem;
--arm-switch-height: 1.5rem;
--arm-switch-nub-size: 1.5rem;
--arm-switch-width-small: 2rem;
--arm-switch-nub-size-small: 1.2rem;
--arm-switch-height-small: 1.2rem;
--arm-switch-width-large: 4rem;
--arm-switch-nub-size-large: 2rem;
--arm-switch-height-large: 2rem;

/* Toast */
--arm-toast-viewport-padding: var(--arm-spacing-xlarge);
--arm-toast-width: 390px;
--arm-toast-max-width: 100vw;
--arm-toast-z-index: 2;
--arm-toast-border-radius: var(--arm-button-border-radius);
--arm-toast-box-shadow: 0 4px 50px rgb(0 0 0 / 3%);
--arm-toast-slide-speed: 150ms;
--arm-toast-swipe-speed: 100ms;
--arm-toast-hide-speed: 200ms;

/* Tooltip */
--arm-tooltip-bg-color: var(--arm-color-grey-800);
--arm-tooltip-fg-color: var(--arm-color-white);
--arm-tooltip-max-width: 300px;
--arm-tooltip-animation-duration: 400ms;
`})})]})}function x(n={}){const{wrapper:a}={...e(),...n.components};return a?r.jsx(a,{...n,children:r.jsx(o,{...n})}):o(n)}export{x as default};
