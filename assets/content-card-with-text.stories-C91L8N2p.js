import{M as u}from"./content-card-with-text.docs-CBUhx_dx.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-DiBHS0bC.js";import"./iframe-Cx1EYarR.js";import"./preload-helper-C1FmrZbK.js";const h={title:"COMPONENTS/Content Card",parameters:{docs:{page:u}},argTypes:{direction:{table:{category:"Content card settings",defaultValue:{summary:"left"}},name:"Direction",description:"Set the column where the text will be shown",options:["left","right"],control:{type:"radio"},required:!0}},tags:["autodocs"]};function i(){return`
        <h1>Please insert your Heading here!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis blandit turpis cursus in hac habitasse. Integer quis auctor elit sed vulputate mi sit amet mauris. Dictum at tempor commodo ullamcorper. At auctor urna nunc id cursus metus. Non blandit massa enim nec dui nunc mattis enim ut. Placerat vestibulum lectus mauris ultrices eros in cursus. Id porta nibh venenatis cras sed. Est velit egestas dui id ornare arcu odio ut. Praesent semper feugiat nibh sed pulvinar proin gravida. Nec dui nunc mattis enim ut tellus elementum sagittis. Urna duis convallis convallis tellus. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Adipiscing enim eu turpis egestas pretium. At elementum eu facilisis sed odio morbi quis commodo odio. Diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Sed faucibus turpis in eu mi bibendum neque egestas. Elementum eu facilisis sed odio morbi quis. Quisque id diam vel quam elementum pulvinar etiam non quam.</p>
    `}function n(){return`
        <toujou-content-card-grid class="content-card-grid" fullwidth>
            <a href="/" class="content-card" card-direction="vertical" card-variant="default" fullwidth>
                <figure class="content-card__figure">
                    <img class="content-card__image" src="https://picsum.photos/640/640" alt="nice image">
                </figure>

                <div class="content-card__content">
                    <h3 class="content-card__title">Lorem Ipsum</h3>
                    <p class=" content-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <span class="content-card__button">
                        <toujou-icon class="icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        more
                    </span>
                </div>
            </a>
        </toujou-content-card-grid>
    `}const o=t=>`
        <toujou-grid class="grid" number-of-columns="2" grid-type="default" column-layout="${t.direction==="left"?"third-right":"third-left"}">
             <toujou-grid-column class="grid-column">
                ${t.direction==="left"?i():n()}
            </toujou-grid-column>
            <toujou-grid-column class="grid-column">
                ${t.direction==="left"?n():i()}
            </toujou-grid-column>
        </toujou-grid>
    `,c=t=>`
        <main>
            ${o(t)}

            <section class="chapter" background-color="primary">
                ${o(t)}
            </section>
        </main>
    `,e=c.bind({});e.args={direction:"left"};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: ContentCardWithTextStoryProps) => {
  return \`
        <main>
            \${contentCardWithTextBLock(args)}

            <section class="chapter" background-color="primary">
                \${contentCardWithTextBLock(args)}
            </section>
        </main>
    \`;
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const f=["ContentCardWithText"];export{e as ContentCardWithText,f as __namedExportsOrder,h as default};
