import{T as c}from"./badgeCustomConfig-e7a687d5.js";import{j as o}from"./jsx-runtime-ccada58e.js";import{u as s}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function n(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},s(),e.components);return o.jsxs(o.Fragment,{children:[o.jsx(t.h1,{id:"header-3-1",children:"Header 3-1"}),`
`,o.jsx(t.p,{children:"Header element in a 3 to 1 format"}),`
`,o.jsx(t.h2,{id:"markup-example",children:"Markup example"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-html",children:`<header class="header" image-height="3-1">
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
`})})]})}function d(e={}){const{wrapper:t}=Object.assign({},s(),e.components);return t?o.jsx(t,Object.assign({},e,{children:o.jsx(n,e)})):n(e)}const y={title:"COMPONENTS/Header",parameters:{badges:[c.DONE],docs:{page:d},layout:"fullscreen"},argTypes:{isTitleOnly:{table:{category:"Header Settings",defaultValue:{summary:!1}},name:"Title only",description:"Show only the title",control:{type:"boolean"},defaultValue:!1,required:!0},headerVerticalPos:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header vertical position",description:"Set the header's vertical position",options:["top","mid","bottom"],control:{type:"select"},defaultValue:["mid"],required:!0},headerHorizontalPos:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header horizontal position",description:"Set the header's horizontal position",options:["left","center","right"],control:{type:"select"},defaultValue:["center"],required:!0},headerContentSize:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header content size",description:"Set the header's content width",options:["full","half","third","quarter"],control:{type:"select"},defaultValue:["half"],required:!0},headlineSize:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Headline size",description:"Set the header's headline size",options:["default","alpha","beta","gamma","delta","epsilon","omega"],control:{type:"select"},defaultValue:["default"],required:!0},headerTextAlignment:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header alignment",description:"Set the header alignment",options:["default","center","left","right"],control:{type:"select"},defaultValue:["default"],required:!0},accentColor:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Accent color",description:"Set the header's accent color",options:["default","primary","secondary","font"],control:{type:"select"},defaultValue:["default"],required:!0}},tags:["autodocs"]};function u(e){return`
        <p class="header-content__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <a href="#" class="button header-content__cta" button-variant="${e==="default"?"primary":e==="grey"?"font":e}">Let's go</a>
    `}const h=e=>`
        <header class="header" image-height="3-1">
            <img class="header__image" src="https://picsum.photos/2000" alt="quote image" />

            <div class="header-content"
                accent-color="${e.accentColor}"
                vertical-position="${e.headerVerticalPos}"
                horizontal-position="${e.headerHorizontalPos}"
                content-size="${e.headerContentSize}"
                text-alignment="${e.headerTextAlignment}"
                ${e.isTitleOnly?"is-title-only":""}>
                <h1 class="header-content__title font--${e.headlineSize}">This is a headline</h1>
                ${e.isTitleOnly?"":u(e.accentColor)}
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
    `,a=h.bind({});a.args={isTitleOnly:!1,headerVerticalPos:"mid",headerHorizontalPos:"center",headerContentSize:"half",headlineSize:"default",headerTextAlignment:"default",accentColor:"default"};var i,r,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`(args: HeaderThreeToOneStoryProps) => {
  return \`
        <header class="header" image-height="3-1">
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
}`,...(l=(r=a.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const _=["HeaderThreeToOne"];export{a as HeaderThreeToOne,_ as __namedExportsOrder,y as default};
//# sourceMappingURL=header-3-1.stories-79176ea7.js.map