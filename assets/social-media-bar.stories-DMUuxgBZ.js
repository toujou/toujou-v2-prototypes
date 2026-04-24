const s={title:"COMPONENTS/Social Media Bar",argTypes:{elementDesign:{table:{category:"Social media bar settings",defaultValue:{summary:"default"}},name:"Element design",description:"Set the social media bar's design color",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0},hideHeadline:{table:{category:"Social media bar settings"},name:"Hide headline",description:"Hide the social media bar's headline",control:{type:"boolean"},required:!0},isInline:{table:{category:"Social media bar settings"},name:'Add the "inline" attribute',description:'Adding the "inline" attribute allows us to place the social-media-bar inside other elements',control:{type:"boolean"},required:!0}}},r=i=>{const e=i.isInline?"xl":"xxl";return`
        <toujou-social-media-bar class="social-media-bar" element-design="${i.elementDesign}" ${i.hideHeadline?"no-headline":""} ${i.isInline?"inline":""}>
            ${i.hideHeadline?"":'<h3 class="social-media-bar__headline">Get in touch</h3>'}
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
     `},a=r.bind({});a.args={elementDesign:"default",hideHeadline:!1,isInline:!1};var o,n,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`(args: SliderStoryProps) => {
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
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const l=["SocialMediaBar"];export{a as SocialMediaBar,l as __namedExportsOrder,s as default};
