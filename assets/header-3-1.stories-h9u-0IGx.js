import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-D5--q1_Y.js";import"./iframe-DiHdXGRs.js";import"./preload-helper-C1FmrZbK.js";function n(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(a.h1,{id:"header-3-1",children:"Header 3-1"}),`
`,o.jsx(a.p,{children:"Header element in a 3 to 1 format"}),`
`,o.jsx(a.h2,{id:"markup-example",children:"Markup example"}),`
`,o.jsx(a.pre,{children:o.jsx(a.code,{className:"language-html",children:`<header class="header" image-height="3-1">
    <img class="header__image" src="https://picsum.photos/2000" alt="quote image" />

    <div class="header-content"
        accent-color="primary"
        vertical-position="mid"
        horizontal-position="center"
        content-size="half"
        text-alignment="default"
        <h1 class="header-content__title font--\${args.headlineSize}">This is a headline</h1>
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
</header>
`})})]})}function l(e={}){const{wrapper:a}={...r(),...e.components};return a?o.jsx(a,{...e,children:o.jsx(n,{...e})}):n(e)}const p={title:"COMPONENTS/Header",parameters:{docs:{page:l},layout:"fullscreen"},argTypes:{headerSize:{table:{category:"Hero Media settings",defaultValue:{summary:"default"}},name:"Header size",description:"Choose header size",options:["default","alpha","beta","gamma","delta","epsilon","omega"],control:{type:"radio"},required:!0},headerAlignment:{table:{category:"Hero Media settings",defaultValue:{summary:"default"}},name:"Header alignment",description:"Choose header alignment",options:["default","center","right","left"],control:{type:"radio"},required:!0}},tags:["autodocs"]},d=e=>`
        <header class="header" image-height="3-1">
            <a href="#" class="hero-media" headline-alignment="${e.headerAlignment}">
                <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="hero-media__media">
                <div class="hero-media__content">
                    <h3 class="hero-media__title font--${e.headerSize}">Hero Media</h3>
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
        </header>
    `,i=d.bind({});i.args={headerSize:"default",headerAlignment:"default"};var t,s,c;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`(args: HeaderThreeToOneStoryProps) => {
  return \`
        <header class="header" image-height="3-1">
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
        </header>
    \`;
}`,...(c=(s=i.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const f=["HeaderThreeToOne"];export{i as HeaderThreeToOne,f as __namedExportsOrder,p as default};
