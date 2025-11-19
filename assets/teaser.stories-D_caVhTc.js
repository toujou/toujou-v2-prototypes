import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as c}from"./index-CmNjUc4s.js";import"./iframe-DzhpqLoE.js";import"./preload-helper-C1FmrZbK.js";function n(i){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"teaser",children:"teaser"}),`
`,e.jsx(t.p,{children:"The teaser element render an image and a text side by side (in a column on mobile)."}),`
`,e.jsx(t.h2,{id:"markup-example",children:"Markup Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<toujou-teaser class="teaser" teaser-type="cinema" image-width="50" image-side="left" element-design="primary">
    <div class="teaser__figure">
        <img class="teaser__image" src="https://picsum.photos/1024" alt="nice image" />
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
    </div>
    <div class="teaser__content">
        <h3>Nice headline</h3>
        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
    </div>
</toujou-teaser>
`})}),`
`,e.jsx(t.h2,{id:"attribute",children:"Attribute"}),`
`,e.jsx(t.p,{children:"There are a couple of attributes that allow us to customize the teasers"}),`
`,e.jsx(t.h3,{id:"teaser-type",children:"teaser-type"}),`
`,e.jsxs(t.p,{children:["When the ",e.jsx(t.code,{children:"teaser-type"})," is set to ",e.jsx(t.code,{children:"cinema"})," the teaser image will have a 16:9 format. If it is set to ",e.jsx(t.code,{children:"media"})," the teaser image will have its natural format."]}),`
`,e.jsxs(t.p,{children:["Possible values are ",e.jsx(t.code,{children:"cinema"})," and ",e.jsx(t.code,{children:"media"}),"."]}),`
`,e.jsx(t.p,{children:"This attribute is set depending on the chosen content element."}),`
`,e.jsx(t.h3,{id:"image-width",children:"image-width"}),`
`,e.jsx(t.p,{children:"This attribute defines how wide the teaser image in relation to the teaser it self."}),`
`,e.jsxs(t.p,{children:["Possible values are ",e.jsx(t.code,{children:"50"}),", ",e.jsx(t.code,{children:"33"}),", ",e.jsx(t.code,{children:"66"})," (which refer to width percentage)"]}),`
`,e.jsx(t.p,{children:"This attribute is set depending on the chosen content element."}),`
`,e.jsx(t.h3,{id:"image-side",children:"image-side"}),`
`,e.jsx(t.p,{children:"This attribute changes if the image is rendered on the right or left side of the teaser."}),`
`,e.jsxs(t.p,{children:["Possible values are ",e.jsx(t.code,{children:"left"})," and ",e.jsx(t.code,{children:"right"}),"."]}),`
`,e.jsx(t.p,{children:"This attribute is set depending on the chosen content element."}),`
`,e.jsx(t.h3,{id:"element-design",children:"element-design"}),`
`,e.jsx(t.p,{children:"This attribute changes the design of the teaser element, by changing the background and text colors"}),`
`,e.jsxs(t.p,{children:["Possible values are ",e.jsx(t.code,{children:"default"}),", ",e.jsx(t.code,{children:"primary"}),", ",e.jsx(t.code,{children:"secondary"})," and  ",e.jsx(t.code,{children:"inverted"})]})]})}function l(i={}){const{wrapper:t}={...c(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}const p={title:"COMPONENTS/Teaser",parameters:{docs:{page:l}},argTypes:{teaserType:{table:{category:"Teaser settings",defaultValue:{summary:"cinema"}},name:"Teaser type",description:"Choose the teaser type",options:["cinema","media"],control:{type:"radio"},required:!0},imageWidth:{table:{category:"Teaser settings",defaultValue:{summary:"50"}},name:"Image width",description:"Choose the teaser's image width",options:["50","33","66"],control:{type:"radio"},required:!0},imageSide:{table:{category:"Teaser settings",defaultValue:{summary:"left"}},name:"Image side",description:"Choose the teaser's image side",options:["left","right"],control:{type:"radio"},required:!0},elementDesign:{table:{category:"Teaser settings",defaultValue:{summary:"default"}},name:"Element design",description:"Choose the teaser's element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}}},d=i=>`
        <main>
            <toujou-teaser class="teaser" teaser-type="${i.teaserType}" image-width="${i.imageWidth}" image-side="${i.imageSide}" element-design="${i.elementDesign}">
                <div class="teaser__figure">
                    <img class="teaser__image" src="https://picsum.photos/1024/1480" alt="nice image" />
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
                </div>
                <div class="teaser__content">
                    <h3>Nice headline</h3>
                    <p>This is a simple element containing a <a href="#">headline and this text</a>. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                </div>
            </toujou-teaser>
        </main>
    `,o=d.bind({});o.args={teaserType:"cinema",imageWidth:"50",imageSide:"left",elementDesign:"default"};var a,s,r;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`(args: ToujouImageCardStoryProps) => {
  return \`
        <main>
            <toujou-teaser class="teaser" teaser-type="\${args.teaserType}" image-width="\${args.imageWidth}" image-side="\${args.imageSide}" element-design="\${args.elementDesign}">
                <div class="teaser__figure">
                    <img class="teaser__image" src="https://picsum.photos/1024/1480" alt="nice image" />
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
                </div>
                <div class="teaser__content">
                    <h3>Nice headline</h3>
                    <p>This is a simple element containing a <a href="#">headline and this text</a>. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                </div>
            </toujou-teaser>
        </main>
    \`;
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const f=["Teaser"];export{o as Teaser,f as __namedExportsOrder,p as default};
