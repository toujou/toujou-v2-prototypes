import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as l}from"./index-v-F0Z1jV.js";import"./iframe-BAfj2k-n.js";import"./preload-helper-C1FmrZbK.js";function n(t){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"toujou-alert",children:"<toujou-alert>"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"<toujou-alert>"})," is a custom element that renders a alert element to the page."]}),`
`,e.jsx(r.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<toujou-alert class="alert" role="alert" alert-variant="primary">
    <typo3-icon></typo3-icon>
    This is an alert
</toujou-alert>
`})}),`
`,e.jsx(r.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(r.p,{children:"There are some attributes that allow us to customize the alert element:"}),`
`,e.jsxs(r.h3,{id:"role-required",children:["role ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"<toujou-alert>"})," must have the ",e.jsx(r.code,{children:"role"})," attribute. It must be set to ",e.jsx(r.code,{children:'role="alert"'}),"."]}),`
`,e.jsxs(r.h3,{id:"alert-variant-required",children:["alert variant ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(r.p,{children:["By setting the ",e.jsx(r.code,{children:"alert-variant"})," attribute we can choose between different variants:"]}),`
`,e.jsxs(r.p,{children:[`| Name      | Attribute                   |
|-----------|-----------------------------|
| primary   | `,e.jsx(r.code,{children:'alert-variant="primary"'}),`   |
| secondary | `,e.jsx(r.code,{children:'alert-variant="secondary"'}),` |
| warning   | `,e.jsx(r.code,{children:'alert-variant="warning"'}),`   |
| success   | `,e.jsx(r.code,{children:'alert-variant="success"'}),`   |
| error     | `,e.jsx(r.code,{children:'alert-variant="success"'}),`   |
| info      | `,e.jsx(r.code,{children:'alert-variant="info"'}),"      |"]})]})}function c(t={}){const{wrapper:r}={...l(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(n,{...t})}):n(t)}const m={title:"COMPONENTS/Alert",parameters:{docs:{page:c}},argTypes:{alertVariant:{table:{category:"Alert Settings",defaultValue:{summary:"primary"}},name:"Alert variant",description:"Set the alert variant",options:["primary","secondary","warning","error","success","info"],control:{type:"radio"},required:!0}}},d=t=>`
        <toujou-alert class="alert" role="alert" alert-variant="${t.alertVariant}">
            This is an alert
        </toujou-alert>
    `,a=d.bind({});a.args={alertVariant:"primary"};var s,o,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`(args: alertStoryProps) => {
  return \`
        <toujou-alert class="alert" role="alert" alert-variant="\${args.alertVariant}">
            This is an alert
        </toujou-alert>
    \`;
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const x=["Alert"];export{a as Alert,x as __namedExportsOrder,m as default};
