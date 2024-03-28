import{T as s}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-6a2ad889.js";import{u as n}from"./index-1b6e96e1.js";import"./index-56d4de0b.js";import"./_commonjsHelpers-042e6b4d.js";function o(d){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...n(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"media-placeholder",children:"Media placeholder"}),`
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
`]})]})}function c(d={}){const{wrapper:a}={...n(),...d.components};return a?e.jsx(a,{...d,children:e.jsx(o,{...d})}):o(d)}const g={title:"COMPONENTS/MediaPlaceholder",parameters:{badges:[s.DONE],docs:{page:c}},argTypes:{mediaType:{table:{category:"Single media settings",defaultValue:{summary:2}},name:"Media type",description:"Choose media type to display",options:["image","video","audio"],control:{type:"radio"},defaultValue:[2],required:!0}},tags:["autodocs"]},m=d=>`
        <div class="demo-media-placeholder-container">
            <toujou-media-placeholder media-type="${d.mediaType}" class="media-placeholder"></toujou-media-placeholder>
        </div>
    `,i=m.bind({});i.args={mediaType:"image"};var r,t,l;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`(args: MediaPlaceholdderStoryProps) => {
  return \`
        <div class="demo-media-placeholder-container">
            <toujou-media-placeholder media-type="\${args.mediaType}" class="media-placeholder"></toujou-media-placeholder>
        </div>
    \`;
}`,...(l=(t=i.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const y=["MediaPlaceholder"];export{i as MediaPlaceholder,y as __namedExportsOrder,g as default};
