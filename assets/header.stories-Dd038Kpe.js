import{T as n}from"./badgeCustomConfig-DUXiHpL4.js";import{M as r}from"./header.docs-BfwFSSQt.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-DpH9cx3q.js";import"./index-DO8khQO4.js";import"./_commonjsHelpers-Cpj98o6Y.js";const f={title:"COMPONENTS/Header",parameters:{badges:[n.DONE],docs:{page:r},layout:"fullscreen"},argTypes:{isTitleOnly:{table:{category:"Header Settings"},name:"Title only",description:"Show only the title",control:{type:"boolean"},required:!0},imageHeight:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header image height",description:"Set the header image height",options:["default","full","half","quarter","3-1"],control:{type:"select"},required:!0},headerVerticalPos:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header vertical position",description:"Set the header's vertical position",options:["top","mid","bottom"],control:{type:"select"},required:!0},headerHorizontalPos:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header horizontal position",description:"Set the header's horizontal position",options:["left","center","right"],control:{type:"select"},required:!0},headerContentSize:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header content size",description:"Set the header's content width",options:["full","half","third","quarter"],control:{type:"select"},required:!0},headlineSize:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Headline size",description:"Set the header's headline size",options:["default","alpha","beta","gamma","delta","epsilon","omega"],control:{type:"select"},required:!0},headerTextAlignment:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header alignment",description:"Set the header alignment",options:["default","center","left","right"],control:{type:"select"},required:!0},accentColor:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Accent color",description:"Set the header's accent color",options:["default","primary","secondary","font"],control:{type:"select"},required:!0}}};function l(e){return`
        <p class="header-content__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <a href="#" class="button header-content__cta" button-variant="${e==="default"?"primary":e==="grey"?"font":e}">Let's go</a>
    `}const s=e=>`
        <header class="header" image-height="${e.imageHeight}">
            <img class="header__image" src="https://picsum.photos/2000" alt="quote image" />

            <div class="header-content"
                accent-color="${e.accentColor}"
                vertical-position="${e.headerVerticalPos}"
                horizontal-position="${e.headerHorizontalPos}"
                content-size="${e.headerContentSize}"
                text-alignment="${e.headerTextAlignment}"
                ${e.isTitleOnly?"is-title-only":""}>
                <h1 class="header-content__title font--${e.headlineSize}">This is a headline</h1>
                ${e.isTitleOnly?"":l(e.accentColor)}
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
    `,t=s.bind({});t.args={isTitleOnly:!1,imageHeight:"default",headerVerticalPos:"mid",headerHorizontalPos:"center",headerContentSize:"half",headlineSize:"default",headerTextAlignment:"default",accentColor:"default"};var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`(args: HeaderStoryProps) => {
  return \`
        <header class="header" image-height="\${args.imageHeight}">
            <img class="header__image" src="https://picsum.photos/2000" alt="quote image" />

            <div class="header-content"
                accent-color="\${args.accentColor}"
                vertical-position="\${args.headerVerticalPos}"
                horizontal-position="\${args.headerHorizontalPos}"
                content-size="\${args.headerContentSize}"
                text-alignment="\${args.headerTextAlignment}"
                \${args.isTitleOnly ? 'is-title-only' : ''}>
                <h1 class="header-content__title font--\${args.headlineSize}">This is a headline</h1>
                \${args.isTitleOnly ? '' : getHeaderContentText(args.accentColor)}
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
    \`;
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const y=["Header"];export{t as Header,y as __namedExportsOrder,f as default};
