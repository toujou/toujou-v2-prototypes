import{T as c}from"./badgeCustomConfig-oxGPBDYz.js";import{j as e}from"./jsx-runtime-DPda6Ybg.js";import{useMDXComponents as o}from"./index-4_AlzpT7.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";function n(i){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"divider",children:"divider"}),`
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
`,e.jsxs(r.p,{children:["Possible values are ",e.jsx(r.code,{children:"background"}),", ",e.jsx(r.code,{children:"primary"}),", ",e.jsx(r.code,{children:"secondary"})," and ",e.jsx(r.code,{children:"grey"})]})]})}function p(i={}){const{wrapper:r}={...o(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(n,{...i})}):n(i)}const x={title:"COMPONENTS/Divider",parameters:{badges:[c.DONE],docs:{page:p}},argTypes:{dividerType:{table:{category:"Divider Settings",defaultValue:{summary:"primary"}},name:"Divider type",description:"Choose between the different divider types",options:["background","primary","secondary","grey"],control:{type:"radio"},defaultValue:["false"],required:!0}},tags:["autodocs"]},l=i=>`
        <hr class="divider" divider-type="${i.dividerType}">
    `,d=l.bind({});d.args={dividerType:"primary"};var s,t,a;d.parameters={...d.parameters,docs:{...(s=d.parameters)==null?void 0:s.docs,source:{originalSource:`(args: DividerStoryProps) => {
  return \`
        <hr class="divider" divider-type="\${args.dividerType}">
    \`;
}`,...(a=(t=d.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const j=["Divider"];export{d as Divider,j as __namedExportsOrder,x as default};
