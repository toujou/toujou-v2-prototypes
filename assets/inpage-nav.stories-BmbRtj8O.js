import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-C8UMMqGO.js";import"./iframe-DKUsPnHS.js";import"./preload-helper-C1FmrZbK.js";function s(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return i.jsxs(i.Fragment,{children:[i.jsx(e.h1,{id:"inpage-nav",children:"Inpage nav"}),`
`,i.jsx(e.p,{children:"Display a inpage navigation bar on the page. There are different options that the users can set on the BE"}),`
`,i.jsx(e.h2,{id:"markup-example",children:"Markup example"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<toujou-inpage-nav class="inpage-nav" element-design="default" element-width="wide">
    <button class="inpage-nav__toggle" aria-label="Toggle the inpage navigation" aria-expanded="false" aria-hidden="false" aria-controls="nav-uid">
        <toujou-icon class="icon" icon-size="m" icon-color="primary" icon-name="chevron-down"></toujou-icon>
    </button>

    <span class="inpage-nav__label">Beautiful label</span>

    <nav id="nav-uid" class="inpage-nav__nav">
        <ul class="inpage-nav__list">
            <li class="inpage-nav__item" active="">
                <a class="inpage-nav__link" href="one">Link one</a>
            </li>
            <li class="inpage-nav__item">
                <a class="inpage-nav__link" href="two">Link two</a>
            </li>
            <li class="inpage-nav__item">
                <a class="inpage-nav__link" href="three">Link three</a>
            </li>
        </ul>
    </nav>

    <a href="#" slot="cta" class="button inpage-nav__cta">Buy now</a>
</toujou-inpage-nav>
`})}),`
`,i.jsx(e.h2,{id:"backend-options",children:"Backend options:"}),`
`,i.jsx(e.h4,{id:"label-text",children:"Label text"}),`
`,i.jsx(e.p,{children:'When no "label text" is selected, a default label will be shown'}),`
`,i.jsx(e.h4,{id:"scroll-type",children:"Scroll type"}),`
`,i.jsx(e.p,{children:"Choose between sticky or scrollable position"}),`
`,i.jsx(e.h4,{id:"element-width",children:"Element width"}),`
`,i.jsx(e.p,{children:"Toggle between content and full width"}),`
`,i.jsx(e.h4,{id:"alignment",children:"Alignment:"}),`
`,i.jsx(e.p,{children:"Align the inpage nav items to the left or to the center"}),`
`,i.jsx(e.h4,{id:"cta",children:"CTA"}),`
`,i.jsxs(e.p,{children:["Users can add a CTA button consisting of a text and a link. it will be rendered as a ",i.jsx(e.code,{children:".button"})]}),`
`,i.jsx(e.h4,{id:"element-design",children:"Element design:"}),`
`,i.jsx(e.p,{children:"Choose between default, primary, secondary and inverted styles"}),`
`,i.jsx(e.h2,{id:"attributes",children:"Attributes"}),`
`,i.jsxs(e.h3,{id:"element-design-required",children:["element design ",i.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"element-design"})," attribute defines the style in which the element will be rendered. It is set by the users in the BE."]}),`
`,i.jsx(e.p,{children:"Possible values are:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:i.jsx(e.code,{children:"default"})}),`
`,i.jsx(e.li,{children:i.jsx(e.code,{children:"primary"})}),`
`,i.jsx(e.li,{children:i.jsx(e.code,{children:"secondary"})}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"inverted"}),"."]}),`
`]}),`
`,i.jsx(e.h3,{id:"is-sticky",children:"is-sticky"}),`
`,i.jsxs(e.p,{children:["Is added to the element when the user choose ",i.jsx(e.code,{children:"sticky"})," as the scroll type"]}),`
`,i.jsxs(e.h3,{id:"alignment-required",children:["alignment ",i.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"alignment"})," attribute set how the text is aligned inside the element. It is set by the users on the BE."]}),`
`,i.jsx(e.p,{children:"Possible values are:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:i.jsx(e.code,{children:"left"})}),`
`,i.jsx(e.li,{children:i.jsx(e.code,{children:"center"})}),`
`]}),`
`,i.jsx(e.h3,{id:"ismobile",children:"ismobile"}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"ismobile"}),` attribute is added with JS when the list items don't all fit side by side on the element. Sets the element's "view type" to mobile`]}),`
`,i.jsx(e.h3,{id:"mobileopen",children:"mobileopen"}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"mobileopen"})," attribute is added with JS when the mobile menu is open"]}),`
`,i.jsx(e.h3,{id:"active",children:"active"}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"active"})," attribute is added to the list item that corresponds to the current active section on the page"]}),`
`,i.jsx(e.h3,{id:"element-width-1",children:"element-width"}),`
`,i.jsx(e.p,{children:"Set the inpage nav element's width"}),`
`,i.jsx(e.p,{children:"Possible values are:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"text (as wide as the normal text elements)"}),`
`,i.jsx(e.li,{children:"wide (as wide as the wide layout elements, like the teaser with text right)"}),`
`,i.jsx(e.li,{children:"fullwidth (fullwidth of the page)"}),`
`]})]})}function u(t={}){const{wrapper:e}={...r(),...t.components};return e?i.jsx(e,{...t,children:i.jsx(s,{...t})}):s(t)}const x={title:"COMPONENTS/Inpage Nav",parameters:{docs:{page:u}},argTypes:{width:{table:{category:"Inpage nav width",defaultValue:{summary:"text"}},name:"Width",description:"Set the element's width",options:["text","wide","fullwidth"],control:{type:"radio"},required:!0},alignment:{table:{category:"Inpage nav settings",defaultValue:{summary:"left"}},name:"Alignment",description:"Set the Inpage nav alignment",options:["left","center"],control:{type:"radio"},required:!0},showLabel:{table:{category:"Inpage nav settings"},name:"Show label",description:"Toggle the label's visibility",control:{type:"boolean"},required:!0},showCTA:{table:{category:"Inpage nav settings"},name:"Show CTA",description:"Toggle the CTA button visibility",control:{type:"boolean"},required:!0},isSticky:{table:{category:"Inpage nav settings"},name:"Is sticky",description:"Should the inpage nav scroll with the content or stay sticky. PLease test on a page with a topbar and content",control:{type:"boolean"},required:!0},elementDesign:{table:{category:"Inpage nav settings",defaultValue:{summary:"default"}},name:"Element design",description:"set the element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}}},d=[{id:"one",label:"Section One",bgColor:"primary-light"},{id:"two",label:"Section Two",bgColor:"secondary-light"},{id:"three",label:"Section three",bgColor:"font-light"}],m=t=>`
        <toujou-inpage-nav
            class="inpage-nav"
            element-width="${t.width}"
            alignment="${t.alignment}"
            ${t.isSticky?"is-sticky":""}
            element-design="${t.elementDesign}"
        >
            <button class="inpage-nav__toggle"
                    aria-label="Toggle the inpage navigation"
                    aria-expanded="false"
                    aria-hidden="false"
                    aria-controls="nav-uid">
                <toujou-icon class="icon" icon-size="m" icon-color="primary" icon-name="chevron-down"></toujou-icon>
            </button>

            ${t.showLabel?'<span class="inpage-nav__label">Auf dieser Seite</span>':'<span class="inpage-nav__label">Default label</span>'}

            <nav id="nav-uid" class="inpage-nav__nav">
                <ul class="inpage-nav__list">
                    ${d.map(e=>`
                            <li class="inpage-nav__item">
                                <a class="inpage-nav__link" href="#${e.id}">${e.label}</a>
                            </li>
                        `).join("")}
                </ul>
            </nav>

            ${t.showCTA?`
                <a href="#" slot="cta" class="button inpage-nav__cta">Buy now</a>
            `:""}

        </toujou-inpage-nav>
    `,c=()=>`
        ${d.map(t=>`
                <section id="${t.id}" class="chapter"  background-color="${t.bgColor}">
                    <toujou-text-block class="text-block" text-blocks-column-count="1">
                        <toujou-text-block-column class="text-block-column">
                            <div class="text-block__content">
                                <h2>${t.label}</h2>
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
    `,p=t=>`
        <main>
            ${m(t)}
            ${c()}
        </main>
    `,n=p.bind({});n.args={width:"text",alignment:"left",showLabel:!0,showCTA:!0,isSticky:!1,elementDesign:"default"};var o,a,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`(args: InpageNavStoryProps) => {
  return \`
        <main>
            \${renderInpageNav(args)}
            \${renderDummySections()}
        </main>
    \`;
}`,...(l=(a=n.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const f=["InpageNav"];export{n as InpageNav,f as __namedExportsOrder,x as default};
