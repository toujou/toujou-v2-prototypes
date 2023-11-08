import{T as r}from"./badgeCustomConfig-e7a687d5.js";import{j as a}from"./jsx-runtime-ccada58e.js";import{u as l}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function o(n){const e=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",pre:"pre",code:"code",h3:"h3"},l(),n.components);return a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"map-contact",children:"Map contact"}),`
`,a.jsx(e.p,{children:'The "map contact" elements can be added in the backend.'}),`
`,a.jsx(e.p,{children:"There are a couple of different elements, which render slightly different content:"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsx(e.li,{children:"Map with contact information"}),`
`,a.jsx(e.li,{children:"Map of address"}),`
`,a.jsx(e.li,{children:"Map image"}),`
`,a.jsx(e.li,{children:"Map of coordinates"}),`
`]}),`
`,a.jsx(e.p,{children:"Each of these versions exists with"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsx(e.li,{children:"Map right or map left"}),`
`,a.jsx(e.li,{children:"Square or 16 / 9 map"}),`
`]}),`
`,a.jsx(e.h2,{id:"markup-example",children:"Markup example"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-html",children:`<toujou-map-contact class="map-contact" direction="normal" map-aspect-ratio="1-1" element-design="default">
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
`,a.jsx(e.h2,{id:"attributes",children:"Attributes"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"toujou-map-contact"})," element can take a couple of attributes which change how the element is rendered"]}),`
`,a.jsxs(e.h3,{id:"direction-required",children:[a.jsx(e.code,{children:"direction"})," ",a.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"direction"})," attribute defines the order of the columns on desktop devices."]}),`
`,a.jsxs(e.p,{children:["Possible values are ",a.jsx(e.code,{children:"normal"})," and ",a.jsx(e.code,{children:"reverse"}),"."]}),`
`,a.jsxs(e.h3,{id:"map-aspect-ratio-required",children:[a.jsx(e.code,{children:"map-aspect-ratio"})," ",a.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"map-aspect-ratio"})," defines the aspect ratio of the map element (the container and the map itself)."]}),`
`,a.jsxs(e.p,{children:["Possible values are ",a.jsx(e.code,{children:"1-1"})," and ",a.jsx(e.code,{children:"16-9"}),"."]}),`
`,a.jsxs(e.h3,{id:"element-design-required",children:[a.jsx(e.code,{children:"element-design"})," ",a.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"element-design"})," defines the design (background color and text color) for the element"]}),`
`,a.jsx(e.p,{children:"Possible values are:"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsx(e.li,{children:a.jsx(e.code,{children:"default"})}),`
`,a.jsx(e.li,{children:a.jsx(e.code,{children:"primary"})}),`
`,a.jsx(e.li,{children:a.jsx(e.code,{children:"secondary"})}),`
`,a.jsx(e.li,{children:a.jsx(e.code,{children:"inverted"})}),`
`]})]})}function d(n={}){const{wrapper:e}=Object.assign({},l(),n.components);return e?a.jsx(e,Object.assign({},n,{children:a.jsx(o,n)})):o(n)}const f={title:"COMPONENTS/Map",parameters:{badges:[r.DONE],docs:{page:d}},argTypes:{direction:{table:{category:"Map Contact Settings",defaultValue:{summary:"normal"}},name:"Direction",description:"Set the element's direction",options:["normal","reverse"],control:{type:"radio"},defaultValue:["normal"],required:!0},mapAspectRatio:{table:{category:"Map Contact Settings",defaultValue:{summary:"1-1"}},name:"Map aspect ratio",description:"Set the map's aspect ration",options:["1-1","16-9"],control:{type:"radio"},defaultValue:["normal"],required:!0},elementDesign:{table:{category:"Map Contact Settings",defaultValue:{summary:"default"}},name:"Element design",description:"Set the design for the element",options:["default","primary","secondary","inverted"],control:{type:"radio"},defaultValue:["default"],required:!0}},tags:["autodocs"]},p=n=>`
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
    `,c=p.bind({});c.args={direction:"normal",mapAspectRatio:"1-1",elementDesign:"default"};var t,s,i;c.parameters={...c.parameters,docs:{...(t=c.parameters)==null?void 0:t.docs,source:{originalSource:`(args: mapStoryProps) => {
  return \`
        <toujou-map-contact class="map-contact" direction="\${args.direction}" map-aspect-ratio="\${args.mapAspectRatio}" element-design="\${args.elementDesign}">
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
    \`;
}`,...(i=(s=c.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const x=["Map"];export{c as Map,x as __namedExportsOrder,f as default};
//# sourceMappingURL=map.stories-7aff3d99.js.map
