import{M as s}from"./content-card-with-text.docs-D3ZXHLPi.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-80Dqk9oN.js";import"./iframe-CrgwuxQM.js";import"./preload-helper-C1FmrZbK.js";const p={title:"COMPONENTS/Image Card",parameters:{docs:{page:s}},argTypes:{direction:{table:{category:"Image card settings"},name:"Direction",description:"Set the column where the text will be shown",options:["left","right"],control:{type:"radio"},required:!0}},tags:["autodocs"]};function t(){return`
        <h1>Please insert your Heading here!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis blandit turpis cursus in hac habitasse. Integer quis auctor elit sed vulputate mi sit amet mauris. Dictum at tempor commodo ullamcorper. At auctor urna nunc id cursus metus. Non blandit massa enim nec dui nunc mattis enim ut. Placerat vestibulum lectus mauris ultrices eros in cursus. Id porta nibh venenatis cras sed. Est velit egestas dui id ornare arcu odio ut. Praesent semper feugiat nibh sed pulvinar proin gravida. Nec dui nunc mattis enim ut tellus elementum sagittis. Urna duis convallis convallis tellus. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Adipiscing enim eu turpis egestas pretium. At elementum eu facilisis sed odio morbi quis commodo odio. Diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Sed faucibus turpis in eu mi bibendum neque egestas. Elementum eu facilisis sed odio morbi quis. Quisque id diam vel quam elementum pulvinar etiam non quam.</p>
    `}function r(){return`
        <toujou-content-card-grid class="content-card-grid" fullwidth="">
            <a href="/" class="image-card" image-format="16-9" card-variant="secondary">
                <figure class="image-card__figure">
                    <img class="image-card__image" src="https://picsum.photos/640/640" alt="Nice image">
                </figure>

                <h3 class="image-card__title">
                    <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                    Title one secondary
                </h3>
            </a>
        </toujou-content-card-grid>
    `}const n=i=>`
        <main>
            <toujou-grid class="grid" number-of-columns="2" grid-type="default" column-layout="${i.direction==="left"?"third-right":"third-left"}">
                 <toujou-grid-column class="grid-column">
                    ${i.direction==="left"?t():r()}
                </toujou-grid-column>
                <toujou-grid-column class="grid-column">
                    ${i.direction==="left"?r():t()}
                </toujou-grid-column>
            </toujou-grid>
        </main>
    `,e=n.bind({});e.args={direction:"left"};var u,o,a;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`(args: ImageCardWithTextStoryProps) => {
  return \`
        <main>
            <toujou-grid class="grid" number-of-columns="2" grid-type="default" column-layout="\${args.direction === 'left' ? 'third-right' : 'third-left'}">
                 <toujou-grid-column class="grid-column">
                    \${args.direction === 'left' ? renderTextColumn() : renderCardColumn()}
                </toujou-grid-column>
                <toujou-grid-column class="grid-column">
                    \${args.direction === 'left' ? renderCardColumn() : renderTextColumn()}
                </toujou-grid-column>
            </toujou-grid>
        </main>
    \`;
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const f=["ImageCardWithText"];export{e as ImageCardWithText,f as __namedExportsOrder,p as default};
