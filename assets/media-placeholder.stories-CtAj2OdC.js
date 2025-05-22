import{T as s}from"./badgeCustomConfig-DUXiHpL4.js";import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as l}from"./index-BcJeOPUZ.js";import"./index-B6tQ6Rz7.js";import"./_commonjsHelpers-Cpj98o6Y.js";function o(d){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"media-placeholder",children:"Media placeholder"}),`
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
`]})]})}function c(d={}){const{wrapper:a}={...l(),...d.components};return a?e.jsx(a,{...d,children:e.jsx(o,{...d})}):o(d)}const g={title:"COMPONENTS/MediaPlaceholder",parameters:{badges:[s.DONE],docs:{page:c}},argTypes:{mediaType:{table:{category:"Single media settings"},name:"Media type",description:"Choose media type to display",options:["image","video","audio"],control:{type:"radio"},required:!0}},tags:["autodocs"]},m=d=>`
        <main>
            <div class="demo-media-placeholder-container">
                <toujou-media-placeholder media-type="${d.mediaType}" class="media-placeholder"></toujou-media-placeholder>
            </div>
        </main>
    `,i=m.bind({});i.args={mediaType:"image"};var r,n,t;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`(args: MediaPlaceholdderStoryProps) => {
  return \`
        <main>
            <div class="demo-media-placeholder-container">
                <toujou-media-placeholder media-type="\${args.mediaType}" class="media-placeholder"></toujou-media-placeholder>
            </div>
        </main>
    \`;
}`,...(t=(n=i.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const y=["MediaPlaceholder"];export{i as MediaPlaceholder,y as __namedExportsOrder,g as default};
