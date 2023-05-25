import{T as c}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-ac05983f.js";import{u as o}from"./index-a9a8c754.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";function s(i){const r=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},o(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"divider",children:"divider"}),`
`,e.jsxs(r.p,{children:["The divider (or the ",e.jsx(r.code,{children:"hr"}),") provides a thematic break block to be used between paragraph level elements, like a change of story or shift in topic within a section"]}),`
`,e.jsx(r.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<hr class="divider" divider-type="primary">
`})}),`
`,e.jsx(r.p,{children:"or"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<hr divider-type="primary">
`})}),`
`,e.jsx(r.p,{children:"or even"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<hr>
`})}),`
`,e.jsx(r.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(r.h3,{id:"divider-type",children:"divider-type"}),`
`,e.jsx(r.p,{children:"The divider type can be set by the user on the BE and it defines the style of the divider element."}),`
`,e.jsxs(r.p,{children:["Possible values are ",e.jsx(r.code,{children:"background"}),", ",e.jsx(r.code,{children:"primary"}),", ",e.jsx(r.code,{children:"secondary"})," and ",e.jsx(r.code,{children:"grey"})]})]})}function p(i={}){const{wrapper:r}=Object.assign({},o(),i.components);return r?e.jsx(r,Object.assign({},i,{children:e.jsx(s,i)})):s(i)}const x={title:"COMPONENTS/Divider",parameters:{badges:[c.DONE],docs:{page:p}},argTypes:{dividerType:{table:{category:"Divider Settings",defaultValue:{summary:"primary"}},name:"Divider type",description:"Choose between the different divider types",options:["background","primary","secondary","grey"],control:{type:"radio"},defaultValue:["false"],required:!0}},tags:["autodocs"]},l=i=>`
        <hr class="divider" divider-type="${i.dividerType}">
    `,d=l.bind({});d.args={dividerType:"primary"};var n,t,a;d.parameters={...d.parameters,docs:{...(n=d.parameters)==null?void 0:n.docs,source:{originalSource:`(args: DividerStoryProps) => {
  return \`
        <hr class="divider" divider-type="\${args.dividerType}">
    \`;
}`,...(a=(t=d.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const j=["Divider"];export{d as Divider,j as __namedExportsOrder,x as default};
//# sourceMappingURL=divider.stories-26be9d69.js.map
