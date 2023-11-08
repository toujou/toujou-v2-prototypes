import{T as c}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-ccada58e.js";import{u as p}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function r(s){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},p(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"spinner",children:"spinner"}),`
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
`})})]})}function d(s={}){const{wrapper:n}=Object.assign({},p(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(r,s)})):r(s)}const x={title:"COMPONENTS/Spinner",parameters:{badges:[c.DONE],docs:{page:d}},argTypes:{isCenteredOnPage:{table:{category:"Spinner settings",defaultValue:{summary:!1}},name:"Center on page",description:"Center the spinner on the page, on top of all content",control:{type:"boolean"},defaultValue:[!1],required:!0}},tags:["autodocs"]},l=s=>`<toujou-spinner class="spinner" ${s.isCenteredOnPage?"centered-on-page":""}></toujou-spinner>`,t=l.bind({});t.args={isCenteredOnPage:!1};var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`(args: SpinnerStoryProps) => {
  return \`<toujou-spinner class="spinner" \${args.isCenteredOnPage ? 'centered-on-page' : ''}></toujou-spinner>\`;
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const f=["Spinner"];export{t as Spinner,f as __namedExportsOrder,x as default};
//# sourceMappingURL=spinner.stories-dec399a1.js.map
