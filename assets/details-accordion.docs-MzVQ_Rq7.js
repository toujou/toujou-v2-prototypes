import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as i}from"./index-D_Kao2mr.js";function t(n){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"toujou-details",children:"<toujou-details>"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"<toujou-details-accordion>"})," renders an accordion element consisting of multiple ",e.jsx(o.code,{children:"<toujou-details>"})," elements"]}),`
`,e.jsx(o.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<toujou-details-accordion class="details-accordion" single-expand-mode>
    <toujou-details id="details-1" class="details" is-open element-design="default">
        <h3 slot="summary" class="details__title">This is the first summary</h3>
        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </toujou-details>
    <toujou-details id="details-1" class="details" element-design="default">
        <h3 slot="summary" class="details__title">Just another summary</h3>
        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </toujou-details>
</toujou-details-accordion>
`})}),`
`,e.jsx(o.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(o.p,{children:"There are some attributes that allow us to customize the button"}),`
`,e.jsx(o.h3,{id:"single-expand-mode",children:"single-expand-mode"}),`
`,e.jsxs(o.p,{children:["When the ",e.jsx(o.code,{children:"single-expand-mode"})," attribute is set, only one ",e.jsx(o.code,{children:"<toujou-details>"})," element can be open at a time. When we open one accordion item, all others close."]}),`
`,e.jsx(o.p,{children:"This attribute is set when the corresponding option on the BE is selected."}),`
`,e.jsx(o.p,{children:"Example:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<toujou-details-accordion class="details-accordion" single-expand-mode>
    ...
</toujou-details-accordion>
`})})]})}function d(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{d as M};
