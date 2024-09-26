import{T as d}from"./badgeCustomConfig-oxGPBDYz.js";import{j as e}from"./jsx-runtime-DPda6Ybg.js";import{useMDXComponents as r}from"./index-4_AlzpT7.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"inpage-nav",children:"Inpage nav"}),`
`,e.jsx(n.p,{children:"Display a inpage navigation bar on the page. There are different options that the users can set on the BE"}),`
`,e.jsx(n.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<toujou-inpage-nav class="inpage-nav" element-design="default" element-width="wide">
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
`,e.jsx(n.h2,{id:"backend-options",children:"Backend options:"}),`
`,e.jsx(n.h4,{id:"label-text",children:"Label text"}),`
`,e.jsx(n.p,{children:'When no "label text" is selected, a default label will be shown'}),`
`,e.jsx(n.h4,{id:"scroll-type",children:"Scroll type"}),`
`,e.jsx(n.p,{children:"Choose between sticky or scrollable position"}),`
`,e.jsx(n.h4,{id:"element-width",children:"Element width"}),`
`,e.jsx(n.p,{children:"Toggle between content and full width"}),`
`,e.jsx(n.h4,{id:"alignment",children:"Alignment:"}),`
`,e.jsx(n.p,{children:"Align the inpage nav items to the left or to the center"}),`
`,e.jsx(n.h4,{id:"cta",children:"CTA"}),`
`,e.jsxs(n.p,{children:["Users can add a CTA button consisting of a text and a link. it will be rendered as a ",e.jsx(n.code,{children:".button"})]}),`
`,e.jsx(n.h4,{id:"element-design",children:"Element design:"}),`
`,e.jsx(n.p,{children:"Choose between default, primary, secondary and inverted styles"}),`
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(n.h3,{id:"element-design-required",children:["element design ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"element-design"})," attribute defines the style in which the element will be rendered. It is set by the users in the BE."]}),`
`,e.jsx(n.p,{children:"Possible values are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"default"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"primary"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"secondary"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"inverted"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"is-sticky",children:"is-sticky"}),`
`,e.jsxs(n.p,{children:["Is added to the element when the user choose ",e.jsx(n.code,{children:"sticky"})," as the scroll type"]}),`
`,e.jsxs(n.h3,{id:"alignment-required",children:["alignment ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"alignment"})," attribute set how the text is aligned inside the element. It is set by the users on the BE."]}),`
`,e.jsx(n.p,{children:"Possible values are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"left"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"center"})}),`
`]}),`
`,e.jsx(n.h3,{id:"ismobile",children:"ismobile"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ismobile"}),` attribute is added with JS when the list items don't all fit side by side on the element. Sets the element's "view type" to mobile`]}),`
`,e.jsx(n.h3,{id:"mobileopen",children:"mobileopen"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"mobileopen"})," attribute is added with JS when the mobile menu is open"]}),`
`,e.jsx(n.h3,{id:"active",children:"active"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"active"})," attribute is added to the list item that corresponds to the current active section on the page"]}),`
`,e.jsx(n.h3,{id:"element-width-1",children:"element-width"}),`
`,e.jsx(n.p,{children:"Set the inpage nav element's width"}),`
`,e.jsx(n.p,{children:"Possible values are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"text (as wide as the normal text elements)"}),`
`,e.jsx(n.li,{children:"wide (as wide as the wide layout elements, like the teaser with text right)"}),`
`,e.jsx(n.li,{children:"fullwidth (fullwidth of the page)"}),`
`]})]})}function c(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}const x={title:"COMPONENTS/Inpage Nav",parameters:{badges:[d.DONE],docs:{page:c}},argTypes:{width:{table:{category:"Inpage nav width",defaultValue:{summary:"text"}},name:"Width",description:"Set the element's width",options:["text","wide","fullwidth"],control:{type:"radio"},defaultValue:["text"],required:!0},alignment:{table:{category:"Inpage nav settings",defaultValue:{summary:"left"}},name:"Alignment",description:"Set the Inpage nav alignment",options:["left","center"],control:{type:"radio"},defaultValue:["left"],required:!0},showLabel:{table:{category:"Inpage nav settings"},name:"Show label",description:"Toggle the label's visibility",control:{type:"boolean"},defaultValue:[!0],required:!0},showCTA:{table:{category:"Inpage nav settings"},name:"Show CTA",description:"Toggle the CTA button visibility",control:{type:"boolean"},defaultValue:[!0],required:!0},isSticky:{table:{category:"Inpage nav settings"},name:"Is sticky",description:"Should the inpage nav scroll with the content or stay sticky. PLease test on a page with a topbar and content",control:{type:"boolean"},defaultValue:[!1],required:!0},elementDesign:{table:{category:"Inpage nav settings",defaultValue:{summary:"default"}},name:"Element design",description:"set the element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},h=i=>`
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
                    <li class="inpage-nav__item" active>
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

            ${i.showCTA?`
                <a href="#" slot="cta" class="button inpage-nav__cta">Buy now</a>
            `:""}

        </toujou-inpage-nav>

        <section style="opacity: 0; pointer-events: none;">
            <p id="one"></p>
            <p id="two"></p>
            <p id="three"></p>
            <p id="four"></p>
            <p id="five"></p>
        </section>
    `,a=h.bind({});a.args={width:"text",alignment:"left",showLabel:!0,showCTA:!0,isSticky:!1,elementDesign:"default"};var s,l,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`(args: InpageNavStoryProps) => {
  return \`
        <toujou-inpage-nav
            class="inpage-nav"
            element-width="\${args.width}"
            alignment="\${args.alignment}"
            \${args.isSticky ? 'is-sticky' : ''}
            element-design="\${args.elementDesign}"
        >
            <button class="inpage-nav__toggle"
                    aria-label="Toggle the inpage navigation"
                    aria-expanded="false"
                    aria-hidden="false"
                    aria-controls="nav-uid">
                <toujou-icon class="icon" icon-size="m" icon-color="primary" icon-name="chevron-down"></toujou-icon>
            </button>

            \${args.showLabel ? \`<span class="inpage-nav__label">Auf dieser Seite</span>\` : \`<span class="inpage-nav__label">Default label</span>\`}

            <nav id="nav-uid" class="inpage-nav__nav">
                <ul class="inpage-nav__list">
                    <li class="inpage-nav__item" active>
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

            \${args.showCTA ? \`
                <a href="#" slot="cta" class="button inpage-nav__cta">Buy now</a>
            \` : ''}

        </toujou-inpage-nav>

        <section style="opacity: 0; pointer-events: none;">
            <p id="one"></p>
            <p id="two"></p>
            <p id="three"></p>
            <p id="four"></p>
            <p id="five"></p>
        </section>
    \`;
}`,...(o=(l=a.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const j=["InpageNav"];export{a as InpageNav,j as __namedExportsOrder,x as default};
