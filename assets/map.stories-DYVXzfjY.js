import{T as d}from"./badgeCustomConfig-DUXiHpL4.js";import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as l}from"./index-BcJeOPUZ.js";import"./index-B6tQ6Rz7.js";import"./_commonjsHelpers-Cpj98o6Y.js";function o(n){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"map-contact",children:"Map contact"}),`
`,e.jsx(a.p,{children:'The "map contact" elements can be added in the backend.'}),`
`,e.jsx(a.p,{children:"There are a couple of different elements, which render slightly different content:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"Map with contact information"}),`
`,e.jsx(a.li,{children:"Map of address"}),`
`,e.jsx(a.li,{children:"Map image"}),`
`,e.jsx(a.li,{children:"Map of coordinates"}),`
`]}),`
`,e.jsx(a.p,{children:"Each of these versions exists with"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"Map right or map left"}),`
`,e.jsx(a.li,{children:"Square or 16 / 9 map"}),`
`]}),`
`,e.jsx(a.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-html",children:`<toujou-map-contact class="map-contact" direction="normal" map-aspect-ratio="1-1" element-design="default">
    <div class="map-contact__map-container">
        <img src="https://via.placeholder.com/600x600.png?text=Map" alt="beautiful image" class="map-contact__image">
    </div>
    <div class="map-contact__content">
        <h2 class="map-contact__headline">Wildlife adventures</h2>
        <address class="map-contact__address">
            Gustav-Weißkopf-Straße 5<br>
            90768 Fürth<br>
            <span class="map-contact__label">Tel:</span> <a href="tel:0911 123456789">0911 123456789</a><br>
            <span class="map-contact__label">E-Mail:</span> <a href="mailto:hello@dfau.de">hello@dfau.de</a>
        </address>
        <div class="map-contact__socials">
            <a href="#" class="map-contact__social">
                <toujou-icon class="icon map-contact__social-icon" icon-color="font" icon-name="sm-facebook" icon-size="m"></toujou-icon>
            </a>
            <a href="#" class="map-contact__social">
                <toujou-icon class="icon map-contact__social-icon" icon-color="font" icon-name="sm-instagram" icon-size="m"></toujou-icon>
            </a>
            <a href="#" class="map-contact__social">
                <toujou-icon class="icon map-contact__social-icon" icon-color="font" icon-name="sm-youtube" icon-size="m"></toujou-icon>
            </a>
        </div>
    </div>
</toujou-map-contact>
`})}),`
`,e.jsx(a.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"toujou-map-contact"})," element can take a couple of attributes which change how the element is rendered"]}),`
`,e.jsxs(a.h3,{id:"direction-required",children:[e.jsx(a.code,{children:"direction"})," ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"direction"})," attribute defines the order of the columns on desktop devices."]}),`
`,e.jsxs(a.p,{children:["Possible values are ",e.jsx(a.code,{children:"normal"})," and ",e.jsx(a.code,{children:"reverse"}),"."]}),`
`,e.jsxs(a.h3,{id:"map-aspect-ratio-required",children:[e.jsx(a.code,{children:"map-aspect-ratio"})," ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"map-aspect-ratio"})," defines the aspect ratio of the map element (the container and the map itself)."]}),`
`,e.jsxs(a.p,{children:["Possible values are ",e.jsx(a.code,{children:"1-1"})," and ",e.jsx(a.code,{children:"16-9"}),"."]}),`
`,e.jsxs(a.h3,{id:"element-design-required",children:[e.jsx(a.code,{children:"element-design"})," ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"element-design"})," defines the design (background color and text color) for the element"]}),`
`,e.jsx(a.p,{children:"Possible values are:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.code,{children:"default"})}),`
`,e.jsx(a.li,{children:e.jsx(a.code,{children:"primary"})}),`
`,e.jsx(a.li,{children:e.jsx(a.code,{children:"secondary"})}),`
`,e.jsx(a.li,{children:e.jsx(a.code,{children:"inverted"})}),`
`]})]})}function p(n={}){const{wrapper:a}={...l(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(o,{...n})}):o(n)}const f={title:"COMPONENTS/Map",parameters:{badges:[d.DONE],docs:{page:p}},argTypes:{direction:{table:{category:"Map Contact Settings",defaultValue:{summary:"normal"}},name:"Direction",description:"Set the element's direction",options:["normal","reverse"],control:{type:"radio"},required:!0},mapAspectRatio:{table:{category:"Map Contact Settings",defaultValue:{summary:"1-1"}},name:"Map aspect ratio",description:"Set the map's aspect ration",options:["1-1","16-9"],control:{type:"radio"},required:!0},elementDesign:{table:{category:"Map Contact Settings",defaultValue:{summary:"default"}},name:"Element design",description:"Set the design for the element",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}}},t=n=>`
        <toujou-map-contact class="map-contact" direction="${n.direction}" map-aspect-ratio="${n.mapAspectRatio}" element-design="${n.elementDesign}">
            <div class="map-contact__map-container">
                <img src="https://via.placeholder.com/600x600.png?text=Map" alt="beautiful image" class="map-contact__image">
            </div>
            <div class="map-contact__content">
                <h2 class="map-contact__headline">Wildlife adventures</h2>
                <address class="map-contact__address">
                    Gustav-Weißkopf-Straße 5<br>
                    90768 Fürth<br>
                    <span class="map-contact__label">Tel:</span> <a href="tel:0911 123456789">0911 123456789</a><br>
                    <span class="map-contact__label">E-Mail:</span> <a href="mailto:hello@dfau.de">hello@dfau.de</a>
                </address>
                <div class="map-contact__socials">
                    <a href="#" class="map-contact__social" aria-label="Facebook account">
                        <toujou-icon class="icon map-contact__social-icon" icon-color="font" icon-name="sm-facebook" icon-size="l"></toujou-icon>
                    </a>
                    <a href="#" class="map-contact__social" aria-label="Instagram account">
                        <toujou-icon class="icon map-contact__social-icon" icon-color="font" icon-name="sm-instagram" icon-size="l"></toujou-icon>
                    </a>
                    <a href="#" class="map-contact__social" aria-label="Youtube account">
                        <toujou-icon class="icon map-contact__social-icon" icon-color="font" icon-name="sm-youtube" icon-size="l"></toujou-icon>
                    </a>
                </div>
            </div>
        </toujou-map-contact>
    `,m=n=>`
        <main>
            ${t(n)}

            <section class="chapter" background-color="primary">
                ${t(n)}
            </section>
        </main>
    `,c=m.bind({});c.args={direction:"normal",mapAspectRatio:"1-1",elementDesign:"default"};var i,s,r;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`(args: mapStoryProps) => {
  return \`
        <main>
            \${mapComponent(args)}

            <section class="chapter" background-color="primary">
                \${mapComponent(args)}
            </section>
        </main>
    \`;
}`,...(r=(s=c.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const g=["Map"];export{c as Map,g as __namedExportsOrder,f as default};
