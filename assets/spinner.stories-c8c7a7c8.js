import{T as c}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-ac05983f.js";import{u as p}from"./index-a9a8c754.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";function t(r){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},p(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"spinner",children:"spinner"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<toujou-spinner>"})," element renders a spinner on the page so show that something is loading."]}),`
`,e.jsx("toujou-spinner",{class:"spinner"}),`
`,e.jsx(n.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`    <toujou-spinner class="spinner"></toujou-spinner>
`})}),`
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(n.p,{children:"There are some attributes that allow us to customize the spinner element."}),`
`,e.jsx(n.h3,{id:"centered-on-page",children:"centered-on-page"}),`
`,e.jsxs(n.p,{children:["By default the ",e.jsx(n.code,{children:"<toujou-spinner>"})," element is rendered inline. If we need to show it centered on the page and on top of all the content we can give it the ",e.jsx(n.code,{children:"centered-on-page"})," attribute."]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`    <toujou-spinner class="spinner" centered-on-page></toujou-spinner>
`})})]})}function d(r={}){const{wrapper:n}=Object.assign({},p(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(t,r)})):t(r)}const x={title:"COMPONENTS/Spinner",parameters:{badges:[c.DONE],docs:{page:d}},argTypes:{isCenteredOnPage:{table:{category:"Spinner settings",defaultValue:{summary:!1}},name:"Center on page",description:"Center the spinner on the page, on top of all content",control:{type:"boolean"},defaultValue:[!1],required:!0}}},l=r=>`<toujou-spinner class="spinner" ${r.isCenteredOnPage?"centered-on-page":""}></toujou-spinner>`,s=l.bind({});s.args={isCenteredOnPage:!1};var o,a,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`(args: SpinnerStoryProps) => {
  return \`<toujou-spinner class="spinner" \${args.isCenteredOnPage ? 'centered-on-page' : ''}></toujou-spinner>\`;
}`,...(i=(a=s.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const f=["Spinner"];export{s as Spinner,f as __namedExportsOrder,x as default};
//# sourceMappingURL=spinner.stories-c8c7a7c8.js.map
