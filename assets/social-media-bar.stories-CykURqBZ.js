import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-C5208tH8.js";import"./iframe-r6akNsGl.js";import"./preload-helper-C1FmrZbK.js";function o(a){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...a.components};return i.jsxs(i.Fragment,{children:[i.jsx(e.h1,{id:"social-media-bar",children:"Social media bar"}),`
`,i.jsx(e.p,{children:'The social media bar element is rendered when the "Social Media Bar" content element is used.'}),`
`,i.jsx(e.p,{children:"It renders a section on the page containing a headline (optional) and links for social media accounts."}),`
`,i.jsx(e.p,{children:"It can be displayed in the default, 'primary', 'secondary' or 'inverted' designs, which are selected on the BE."}),`
`,i.jsx(e.h2,{id:"markup-example",children:"Markup example:"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<toujou-social-media-bar class="social-media-bar" element-design="default">
    <h3 class="social-media-bar__headline">Get in touch</h3>
    <div class="social-media-bar__links">
        <a href="#" class="social-media-bar__link" aria-label="Our facebook account">
            <toujou-icon class="icon" icon-name="sm-facebook" icon-size="xxl" icon-color="primary" aria-hidden></toujou-icon>
        </a>
        <a href="#" class="social-media-bar__link" aria-label="Our twitter account">
            <toujou-icon class="icon" icon-name="sm-twitter" icon-size="xxl" icon-color="primary" aria-hidden></toujou-icon>
        </a>
    </div>
</toujou-social-media-bar>
`})}),`
`,i.jsx(e.h2,{id:"attributes",children:"Attributes"}),`
`,i.jsx(e.h3,{id:"no-headline",children:"No headline"}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"no-headline"})," attribute should be added to the element if relevant."]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<toujou-social-media-bar class="social-media-bar" element-design="default" no-headline>
    <div class="social-media-bar__links">
        <a href="#" class="social-media-bar__link" aria-label="Our facebook account">
            <toujou-icon class="icon" icon-name="sm-facebook" icon-size="xxl" icon-color="primary" aria-hidden></toujou-icon>
        </a>
    </div>
</toujou-social-media-bar>
`})}),`
`,i.jsx(e.h3,{id:"element-design",children:"Element design"}),`
`,i.jsxs(e.p,{children:["With the ",i.jsx(e.code,{children:"element-design"})," element we can set element's colors. Accepted values are:"]}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:i.jsx(e.code,{children:"default"})}),`
`,i.jsx(e.li,{children:i.jsx(e.code,{children:"primary"})}),`
`,i.jsx(e.li,{children:i.jsx(e.code,{children:"secondary"})}),`
`,i.jsx(e.li,{children:i.jsx(e.code,{children:"inverted"})}),`
`]}),`
`,i.jsx(e.h3,{id:"inline",children:"inline"}),`
`,i.jsxs(e.p,{children:["With the ",i.jsx(e.code,{children:"inline"})," attribute we can place the social-media-bar inline with other elements, like for instance inside the address element."]}),`
`,i.jsx(e.p,{children:"This attribute adds styles to remove padding, margins, and alignment."}),`
`,i.jsxs(e.p,{children:["Works well combined with the ",i.jsx(e.code,{children:"no-headline"})," attribute."]}),`
`,i.jsxs(e.blockquote,{children:[`
`,i.jsxs(e.p,{children:["Icon inside the ",i.jsx(e.code,{children:"inline"})," social-media-bar are only ",i.jsx(e.code,{children:"l"})," in size, instead of ",i.jsx(e.code,{children:"xxl"})," in the normal social-media-bar"]}),`
`]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<toujou-social-media-bar class="social-media-bar" element-design="default" no-headline inline>
    <div class="social-media-bar__links">
        <a href="#" class="social-media-bar__link" aria-label="Our facebook account">
            <toujou-icon class="icon" icon-name="sm-facebook" icon-size="l" icon-color="primary" aria-hidden></toujou-icon>
        </a>
    </div>
</toujou-social-media-bar>
`})})]})}function t(a={}){const{wrapper:e}={...r(),...a.components};return e?i.jsx(e,{...a,children:i.jsx(o,{...a})}):o(a)}const j={title:"COMPONENTS/Social Media Bar",parameters:{docs:{page:t}},argTypes:{elementDesign:{table:{category:"Social media bar settings",defaultValue:{summary:"default"}},name:"Element design",description:"Set the social media bar's design color",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0},hideHeadline:{table:{category:"Social media bar settings"},name:"Hide headline",description:"Hide the social media bar's headline",control:{type:"boolean"},required:!0},isInline:{table:{category:"Social media bar settings"},name:'Add the "inline" attribute',description:'Adding the "inline" attribute allows us to place the social-media-bar inside other elements',control:{type:"boolean"},required:!0}},tags:["autodocs"]},d=a=>{const e=a.isInline?"xl":"xxl";return`
        <toujou-social-media-bar class="social-media-bar" element-design="${a.elementDesign}" ${a.hideHeadline?"no-headline":""} ${a.isInline?"inline":""}>
            ${a.hideHeadline?"":'<h3 class="social-media-bar__headline">Get in touch</h3>'}
            <div class="social-media-bar__links">
                <a href="#" class="social-media-bar__link" aria-label="Our facebook account">
                    <toujou-icon class="icon" icon-name="sm-facebook" icon-size="${e}" icon-color="primary" aria-hidden></toujou-icon>
                </a>
                <a href="#" class="social-media-bar__link" aria-label="Our twitter account">
                    <toujou-icon class="icon" icon-name="sm-twitter" icon-size="${e}" icon-color="primary" aria-hidden></toujou-icon>
                </a>
                <a href="#" class="social-media-bar__link" aria-label="Our instagram account">
                    <toujou-icon class="icon" icon-name="sm-instagram" icon-size="${e}" icon-color="primary" aria-hidden></toujou-icon>
                </a>
                <a href="#" class="social-media-bar__link" aria-label="Our youtube account">
                    <toujou-icon class="icon" icon-name="sm-youtube" icon-size="${e}" icon-color="primary" aria-hidden></toujou-icon>
                </a>
            </div>
        </toujou-social-media-bar>
     `},n=d.bind({});n.args={elementDesign:"default",hideHeadline:!1,isInline:!1};var c,l,s;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`(args: SliderStoryProps) => {
  const iconSize = args.isInline ? 'xl' : 'xxl';
  return \`
        <toujou-social-media-bar class="social-media-bar" element-design="\${args.elementDesign}" \${args.hideHeadline ? 'no-headline' : ''} \${args.isInline ? 'inline' : ''}>
            \${args.hideHeadline ? '' : \`<h3 class="social-media-bar__headline">Get in touch</h3>\`}
            <div class="social-media-bar__links">
                <a href="#" class="social-media-bar__link" aria-label="Our facebook account">
                    <toujou-icon class="icon" icon-name="sm-facebook" icon-size="\${iconSize}" icon-color="primary" aria-hidden></toujou-icon>
                </a>
                <a href="#" class="social-media-bar__link" aria-label="Our twitter account">
                    <toujou-icon class="icon" icon-name="sm-twitter" icon-size="\${iconSize}" icon-color="primary" aria-hidden></toujou-icon>
                </a>
                <a href="#" class="social-media-bar__link" aria-label="Our instagram account">
                    <toujou-icon class="icon" icon-name="sm-instagram" icon-size="\${iconSize}" icon-color="primary" aria-hidden></toujou-icon>
                </a>
                <a href="#" class="social-media-bar__link" aria-label="Our youtube account">
                    <toujou-icon class="icon" icon-name="sm-youtube" icon-size="\${iconSize}" icon-color="primary" aria-hidden></toujou-icon>
                </a>
            </div>
        </toujou-social-media-bar>
     \`;
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const p=["SocialMediaBar"];export{n as SocialMediaBar,p as __namedExportsOrder,j as default};
