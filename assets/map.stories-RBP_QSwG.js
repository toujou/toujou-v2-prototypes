import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as l}from"./index-ClaxMbVG.js";import"./iframe-CECX_RdO.js";import"./preload-helper-C1FmrZbK.js";function o(a){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"map-contact",children:"Map contact"}),`
`,e.jsx(n.p,{children:'The "map contact" elements can be added in the backend.'}),`
`,e.jsx(n.p,{children:"There are a couple of different elements, which render slightly different content:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Map with contact information"}),`
`,e.jsx(n.li,{children:"Map of address"}),`
`,e.jsx(n.li,{children:"Map image"}),`
`,e.jsx(n.li,{children:"Map of coordinates"}),`
`]}),`
`,e.jsx(n.p,{children:"Each of these versions exists with"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Map right or map left"}),`
`,e.jsx(n.li,{children:"Square or 16 / 9 map"}),`
`]}),`
`,e.jsx(n.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<toujou-map-contact class="map-contact" direction="normal" map-aspect-ratio="1-1" element-design="default">
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
`,e.jsx(n.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"toujou-map-contact"})," element can take a couple of attributes which change how the element is rendered"]}),`
`,e.jsxs(n.h3,{id:"direction-required",children:[e.jsx(n.code,{children:"direction"})," ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"direction"})," attribute defines the order of the columns on desktop devices."]}),`
`,e.jsxs(n.p,{children:["Possible values are ",e.jsx(n.code,{children:"normal"})," and ",e.jsx(n.code,{children:"reverse"}),"."]}),`
`,e.jsxs(n.h3,{id:"map-aspect-ratio-required",children:[e.jsx(n.code,{children:"map-aspect-ratio"})," ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"map-aspect-ratio"})," defines the aspect ratio of the map element (the container and the map itself)."]}),`
`,e.jsxs(n.p,{children:["Possible values are ",e.jsx(n.code,{children:"1-1"})," and ",e.jsx(n.code,{children:"16-9"}),"."]}),`
`,e.jsxs(n.h3,{id:"element-design-required",children:[e.jsx(n.code,{children:"element-design"})," ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"element-design"})," defines the design (background color and text color) for the element"]}),`
`,e.jsx(n.p,{children:"Possible values are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"default"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"primary"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"secondary"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"inverted"})}),`
`]})]})}function d(a={}){const{wrapper:n}={...l(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(o,{...a})}):o(a)}const x={title:"COMPONENTS/Map",parameters:{docs:{page:d}},argTypes:{direction:{table:{category:"Map Contact Settings",defaultValue:{summary:"normal"}},name:"Direction",description:"Set the element's direction",options:["normal","reverse"],control:{type:"radio"},required:!0},mapAspectRatio:{table:{category:"Map Contact Settings",defaultValue:{summary:"1-1"}},name:"Map aspect ratio",description:"Set the map's aspect ration",options:["1-1","16-9"],control:{type:"radio"},required:!0},elementDesign:{table:{category:"Map Contact Settings",defaultValue:{summary:"default"}},name:"Element design",description:"Set the design for the element",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}}},t=a=>`
        <toujou-map-contact class="map-contact" direction="${a.direction}" map-aspect-ratio="${a.mapAspectRatio}" element-design="${a.elementDesign}">
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
    `,p=a=>`
        <main>
            ${t(a)}

            <section class="chapter" background-color="primary">
                ${t(a)}
            </section>
        </main>
    `,c=p.bind({});c.args={direction:"normal",mapAspectRatio:"1-1",elementDesign:"default"};var i,s,r;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`(args: mapStoryProps) => {
  return \`
        <main>
            \${mapComponent(args)}

            <section class="chapter" background-color="primary">
                \${mapComponent(args)}
            </section>
        </main>
    \`;
}`,...(r=(s=c.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const _=["Map"];export{c as Map,_ as __namedExportsOrder,x as default};
