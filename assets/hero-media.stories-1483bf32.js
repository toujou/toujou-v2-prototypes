import{T as r}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-ac05983f.js";import{u as c}from"./index-a9a8c754.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";function a(i){const o=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3",ul:"ul",li:"li"},c(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"hero-media",children:"<hero-media>"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"hero-media"})," element renders media with a headline in a 3 / 1 format."]}),`
`,e.jsx(o.p,{children:"If the element is linked, the whole element is clickable"}),`
`,e.jsx(o.p,{children:"Example:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<a href="#" class="hero-media" headline-alignment="center">
    <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="hero-media__media">
    <h3 class="hero-media__title font--alpha">Hero Media</h3>

    <toujou-media-info class="media-info">
        <button slot="open-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
            <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
        </button>
        <button slot="close-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
            <toujou-icon class="icon" icon-color="background" icon-name="close" icon-size="ms"></toujou-icon>
        </button>
        <figpaction slot="figcaption" class="media-info__figcaption">This is a beautiful description</figpaction>
        <small slot="copyright" class="media-info__copyright">@Nice photographer</small>
    </toujou-media-info>
</a>
`})}),`
`,e.jsx(o.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"hero-media"})," element has some attributes that allow us to configure how it is rendered"]}),`
`,e.jsx(o.h3,{id:"headline-alignment",children:"headline-alignment"}),`
`,e.jsx(o.p,{children:"This attribute allows us to define how to align the headline inside the element"}),`
`,e.jsx(o.p,{children:"Valid values are:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"center"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"right"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"left"})}),`
`]})]})}function d(i={}){const{wrapper:o}=Object.assign({},c(),i.components);return o?e.jsx(o,Object.assign({},i,{children:e.jsx(a,i)})):a(i)}const b={title:"COMPONENTS/Media",parameters:{badges:[r.DONE],docs:{page:d}},argTypes:{headerSize:{table:{category:"Hero Media settings",defaultValue:{summary:"default"}},name:"Header size",description:"Choose header size",options:["default","alpha","beta","gamma","delta","epsilon","omega"],control:{type:"radio"},defaultValue:["default"],required:!0},headerAlignment:{table:{category:"Hero Media settings",defaultValue:{summary:"default"}},name:"Header alignment",description:"Choose header alignment",options:["default","center","right","left"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},m=i=>`
        <main>
            <a href="#" class="hero-media" headline-alignment="${i.headerAlignment}">
                <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="hero-media__media">
                <h3 class="hero-media__title font--${i.headerSize}">Hero Media</h3>
                
                <toujou-media-info class="media-info">
                    <button slot="open-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                        <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
                    </button>
                    <button slot="close-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                        <toujou-icon class="icon" icon-color="background" icon-name="close" icon-size="ms"></toujou-icon>
                    </button>
                    <figpaction slot="figcaption" class="media-info__figcaption">This is a beautiful description</figpaction>
                    <small slot="copyright" class="media-info__copyright">@Nice photographer</small>
                </toujou-media-info>
            </a>
        </main>
    `,n=m.bind({});n.args={headerSize:"default",headerAlignment:"default"};var t,s,l;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`(args: HeroMediaStoryProps) => {
  return \`
        <main>
            <a href="#" class="hero-media" headline-alignment="\${args.headerAlignment}">
                <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="hero-media__media">
                <h3 class="hero-media__title font--\${args.headerSize}">Hero Media</h3>
                
                <toujou-media-info class="media-info">
                    <button slot="open-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                        <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
                    </button>
                    <button slot="close-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                        <toujou-icon class="icon" icon-color="background" icon-name="close" icon-size="ms"></toujou-icon>
                    </button>
                    <figpaction slot="figcaption" class="media-info__figcaption">This is a beautiful description</figpaction>
                    <small slot="copyright" class="media-info__copyright">@Nice photographer</small>
                </toujou-media-info>
            </a>
        </main>
    \`;
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const j=["HeroMedia"];export{n as HeroMedia,j as __namedExportsOrder,b as default};
//# sourceMappingURL=hero-media.stories-1483bf32.js.map