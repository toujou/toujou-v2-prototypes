import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as p}from"./index-PJZUo48P.js";import"./iframe-StHTXG2s.js";import"./preload-helper-C1FmrZbK.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"spinner",children:"spinner"}),`
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
`})})]})}function c(r={}){const{wrapper:n}={...p(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}const j={title:"COMPONENTS/Spinner",parameters:{docs:{page:c}},argTypes:{isCenteredOnPage:{table:{category:"Spinner settings"},name:"Center on page",description:"Center the spinner on the page, on top of all content",control:{type:"boolean"},required:!0}}},d=r=>`<toujou-spinner class="spinner" ${r.isCenteredOnPage?"centered-on-page":""}></toujou-spinner>`,t=d.bind({});t.args={isCenteredOnPage:!1};var o,i,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`(args: SpinnerStoryProps) => {
  return \`<toujou-spinner class="spinner" \${args.isCenteredOnPage ? 'centered-on-page' : ''}></toujou-spinner>\`;
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const g=["Spinner"];export{t as Spinner,g as __namedExportsOrder,j as default};
