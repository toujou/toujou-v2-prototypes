const m={title:"COMPONENTS/Inpage Nav",argTypes:{width:{table:{category:"Inpage nav width",defaultValue:{summary:"text"}},name:"Width",description:"Set the element's width",options:["text","wide","fullwidth"],control:{type:"radio"},required:!0},alignment:{table:{category:"Inpage nav settings",defaultValue:{summary:"left"}},name:"Alignment",description:"Set the Inpage nav alignment",options:["left","center"],control:{type:"radio"},required:!0},showLabel:{table:{category:"Inpage nav settings"},name:"Show label",description:"Toggle the label's visibility",control:{type:"boolean"},required:!0},showCTA:{table:{category:"Inpage nav settings"},name:"Show CTA",description:"Toggle the CTA button visibility",control:{type:"boolean"},required:!0},isSticky:{table:{category:"Inpage nav settings"},name:"Is sticky",description:"Should the inpage nav scroll with the content or stay sticky. PLease test on a page with a topbar and content",control:{type:"boolean"},required:!0},elementDesign:{table:{category:"Inpage nav settings",defaultValue:{summary:"default"}},name:"Element design",description:"set the element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}}},l=[{id:"one",label:"Section One",bgColor:"primary-light"},{id:"two",label:"Section Two",bgColor:"secondary-light"},{id:"three",label:"Section three",bgColor:"font-light"}],r=i=>`
        <toujou-inpage-nav
            class="inpage-nav"
            element-width="${i.width}"
            alignment="${i.alignment}"
            ${i.isSticky?"is-sticky":""}
            element-design="${i.elementDesign}"
        >
            <button class="inpage-nav__toggle"
                    aria-label="Toggle the inpage navigation"
                    aria-expanded="false"
                    aria-hidden="false"
                    aria-controls="nav-uid">
                <toujou-icon class="icon" icon-size="m" icon-color="primary" icon-name="chevron-down"></toujou-icon>
            </button>

            ${i.showLabel?'<span class="inpage-nav__label">Auf dieser Seite</span>':'<span class="inpage-nav__label">Default label</span>'}

            <nav id="nav-uid" class="inpage-nav__nav">
                <ul class="inpage-nav__list">
                    ${l.map(t=>`
                            <li class="inpage-nav__item">
                                <a class="inpage-nav__link" href="#${t.id}">${t.label}</a>
                            </li>
                        `).join("")}
                </ul>
            </nav>

            ${i.showCTA?`
                <a href="#" slot="cta" class="button inpage-nav__cta">Buy now</a>
            `:""}

        </toujou-inpage-nav>
    `,n=()=>`
        ${l.map(i=>`
                <section id="${i.id}" class="chapter"  background-color="${i.bgColor}">
                    <toujou-text-block class="text-block" text-blocks-column-count="1">
                        <toujou-text-block-column class="text-block-column">
                            <div class="text-block__content">
                                <h2>${i.label}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <h3>More content</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <h3>More extra content</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis dolore dolorem ea est eum facilis fuga harum impedit magni, molestiae nihil nisi optio porro quibusdam repellendus rerum sit voluptas!</p>
                            </div>
                        </toujou-text-block-column>
                    </toujou-text-block>
                </section>
            `).join("")}
    `,u=i=>`
        <main>
            ${r(i)}
            ${n()}
        </main>
    `,e=u.bind({});e.args={width:"text",alignment:"left",showLabel:!0,showCTA:!0,isSticky:!1,elementDesign:"default"};var o,a,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`(args: InpageNavStoryProps) => {
  return \`
        <main>
            \${renderInpageNav(args)}
            \${renderDummySections()}
        </main>
    \`;
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const d=["InpageNav"];export{e as InpageNav,d as __namedExportsOrder,m as default};
