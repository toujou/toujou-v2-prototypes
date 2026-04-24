const s={title:"COMPONENTS/Media",parameters:{layout:"fullscreen"},argTypes:{headerSize:{table:{category:"Hero Media settings",defaultValue:{summary:"default"}},name:"Header size",description:"Choose header size",options:["default","alpha","beta","gamma","delta","epsilon","omega"],control:{type:"radio"},required:!0},headerAlignment:{table:{category:"Hero Media settings",defaultValue:{summary:"default"}},name:"Header alignment",description:"Choose header alignment",options:["default","center","right","left"],control:{type:"radio"},required:!0}}},n=o=>`
        <main>
            <a href="#" class="hero-media" headline-alignment="${o.headerAlignment}">
                <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="hero-media__media">
                <div class="hero-media__content">
                    <h3 class="hero-media__title font--${o.headerSize}">Hero Media</h3>
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
    `,e=n.bind({});e.args={headerSize:"default",headerAlignment:"default"};var a,i,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args: HeroMediaStoryProps) => {
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
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const r=["HeroMedia"];export{e as HeroMedia,r as __namedExportsOrder,s as default};
