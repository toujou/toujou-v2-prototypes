import{T as n}from"./badgeCustomConfig-e7a687d5.js";import{M as l}from"./header.docs-4e546221.js";import"./jsx-runtime-87b2c1dd.js";import"./index-afb52020.js";import"./_commonjsHelpers-725317a4.js";import"./index-af127bdc.js";const f={title:"COMPONENTS/Header",parameters:{badges:[n.DONE],docs:{page:l},layout:"fullscreen"},argTypes:{isTitleOnly:{table:{category:"Header Settings",defaultValue:{summary:!1}},name:"Title only",description:"Show only the title",control:{type:"boolean"},defaultValue:!1,required:!0},imageHeight:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header image height",description:"Set the header image height",options:["default","full","half","quarter","3-1"],control:{type:"select"},defaultValue:["default"],required:!0},headerVerticalPos:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header vertical position",description:"Set the header's vertical position",options:["top","mid","bottom"],control:{type:"select"},defaultValue:["mid"],required:!0},headerHorizontalPos:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header horizontal position",description:"Set the header's horizontal position",options:["left","center","right"],control:{type:"select"},defaultValue:["center"],required:!0},headerContentSize:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header content size",description:"Set the header's content width",options:["full","half","third","quarter"],control:{type:"select"},defaultValue:["half"],required:!0},headlineSize:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Headline size",description:"Set the header's headline size",options:["default","alpha","beta","gamma","delta","epsilon","omega"],control:{type:"select"},defaultValue:["default"],required:!0},headerTextAlignment:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header alignment",description:"Set the header alignment",options:["default","center","left","right"],control:{type:"select"},defaultValue:["default"],required:!0},accentColor:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Accent color",description:"Set the header's accent color",options:["default","primary","secondary","font"],control:{type:"select"},defaultValue:["default"],required:!0}},tags:["autodocs"]};function r(e){return`
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
                ${e.isTitleOnly?"":r(e.accentColor)}
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
    `,t=s.bind({});t.args={isTitleOnly:!1,imageHeight:"default",headerVerticalPos:"mid",headerHorizontalPos:"center",headerContentSize:"half",headlineSize:"default",headerTextAlignment:"default",accentColor:"default"};var a,o,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(args: HeaderStoryProps) => {
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const y=["Header"];export{t as Header,y as __namedExportsOrder,f as default};
