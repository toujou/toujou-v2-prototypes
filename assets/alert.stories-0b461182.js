import{T as c}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-ac05983f.js";import{u as l}from"./index-a9a8c754.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";function n(t){const r=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},l(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"toujou-alert",children:"<toujou-alert>"}),`
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
| info      | `,e.jsx(r.code,{children:'alert-variant="info"'}),"      |"]})]})}function d(t={}){const{wrapper:r}=Object.assign({},l(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(n,t)})):n(t)}const g={title:"COMPONENTS/Alert",parameters:{badges:[c.DONE],docs:{page:d}},argTypes:{alertVariant:{table:{category:"Alert Settings",defaultValue:{summary:"primary"}},name:"Alert variant",description:"Set the alert variant",options:["primary","secondary","warning","error","success","info"],control:{type:"radio"},defaultValue:["primary"],required:!0}}},u=t=>`
        <toujou-alert class="alert" role="alert" alert-variant="${t.alertVariant}">
            This is an alert
        </toujou-alert>
    `,a=u.bind({});a.args={alertVariant:"primary"};var s,i,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`(args: alertStoryProps) => {
  return \`
        <toujou-alert class="alert" role="alert" alert-variant="\${args.alertVariant}">
            This is an alert
        </toujou-alert>
    \`;
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const y=["Alert"];export{a as Alert,y as __namedExportsOrder,g as default};
//# sourceMappingURL=alert.stories-0b461182.js.map
