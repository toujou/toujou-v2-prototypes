import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as c}from"./index-D_Kao2mr.js";import"./iframe-B7QF7yTA.js";import"./preload-helper-C1FmrZbK.js";function a(i){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"hero-media",children:"<hero-media>"}),`
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
`]})]})}function r(i={}){const{wrapper:o}={...c(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(a,{...i})}):a(i)}const p={title:"COMPONENTS/Media",parameters:{docs:{page:r},layout:"fullscreen"},argTypes:{headerSize:{table:{category:"Hero Media settings",defaultValue:{summary:"default"}},name:"Header size",description:"Choose header size",options:["default","alpha","beta","gamma","delta","epsilon","omega"],control:{type:"radio"},required:!0},headerAlignment:{table:{category:"Hero Media settings",defaultValue:{summary:"default"}},name:"Header alignment",description:"Choose header alignment",options:["default","center","right","left"],control:{type:"radio"},required:!0}}},d=i=>`
        <main>
            <a href="#" class="hero-media" headline-alignment="${i.headerAlignment}">
                <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="hero-media__media">
                <div class="hero-media__content">
                    <h3 class="hero-media__title font--${i.headerSize}">Hero Media</h3>
                </div>

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
    `,n=d.bind({});n.args={headerSize:"default",headerAlignment:"default"};var t,s,l;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`(args: HeroMediaStoryProps) => {
  return \`
        <main>
            <a href="#" class="hero-media" headline-alignment="\${args.headerAlignment}">
                <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="hero-media__media">
                <div class="hero-media__content">
                    <h3 class="hero-media__title font--\${args.headerSize}">Hero Media</h3>
                </div>

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
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const f=["HeroMedia"];export{n as HeroMedia,f as __namedExportsOrder,p as default};
