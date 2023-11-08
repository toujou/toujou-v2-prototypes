import{T as l}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-ccada58e.js";import{u as n}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function o(d){const a=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li"},n(),d.components);return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"media-placeholder",children:"Media placeholder"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"toujou-media-placeholder"})," is shown whenever we can't render some kind of media"]}),`
`,e.jsx(a.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`    <toujou-media-placeholder class="media-placeholder" media-type="image"></toujou-media-placeholder>
`})}),`
`,e.jsx(a.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(a.h3,{id:"media-type",children:"media-type"}),`
`,e.jsxs(a.p,{children:["With the ",e.jsx(a.code,{children:"media-type"})," attribute we can set what type of media the element is replacing. It will show the corresponding icon"]}),`
`,e.jsx(a.p,{children:"Accepted values are:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.code,{children:"image"})}),`
`,e.jsx(a.li,{children:e.jsx(a.code,{children:"video"})}),`
`,e.jsx(a.li,{children:e.jsx(a.code,{children:"audio"})}),`
`]})]})}function c(d={}){const{wrapper:a}=Object.assign({},n(),d.components);return a?e.jsx(a,Object.assign({},d,{children:e.jsx(o,d)})):o(d)}const g={title:"COMPONENTS/MediaPlaceholder",parameters:{badges:[l.DONE],docs:{page:c}},argTypes:{mediaType:{table:{category:"Single media settings",defaultValue:{summary:2}},name:"Media type",description:"Choose media type to display",options:["image","video","audio"],control:{type:"radio"},defaultValue:[2],required:!0}},tags:["autodocs"]},m=d=>`
        <div class="demo-media-placeholder-container">
            <toujou-media-placeholder media-type="${d.mediaType}" class="media-placeholder"></toujou-media-placeholder>
        </div>
    `,i=m.bind({});i.args={mediaType:"image"};var r,t,s;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`(args: MediaPlaceholdderStoryProps) => {
  return \`
        <div class="demo-media-placeholder-container">
            <toujou-media-placeholder media-type="\${args.mediaType}" class="media-placeholder"></toujou-media-placeholder>
        </div>
    \`;
}`,...(s=(t=i.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const y=["MediaPlaceholder"];export{i as MediaPlaceholder,y as __namedExportsOrder,g as default};
//# sourceMappingURL=media-placeholder.stories-954713b7.js.map
