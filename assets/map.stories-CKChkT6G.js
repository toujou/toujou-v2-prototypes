const i={title:"COMPONENTS/Map",argTypes:{direction:{table:{category:"Map Contact Settings",defaultValue:{summary:"normal"}},name:"Direction",description:"Set the element's direction",options:["normal","reverse"],control:{type:"radio"},required:!0},mapAspectRatio:{table:{category:"Map Contact Settings",defaultValue:{summary:"1-1"}},name:"Map aspect ratio",description:"Set the map's aspect ration",options:["1-1","16-9"],control:{type:"radio"},required:!0},elementDesign:{table:{category:"Map Contact Settings",defaultValue:{summary:"default"}},name:"Element design",description:"Set the design for the element",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}}},e=a=>`
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
    `,s=a=>`
        <main>
            ${e(a)}

            <section class="chapter" background-color="primary">
                ${e(a)}
            </section>
        </main>
    `,t=s.bind({});t.args={direction:"normal",mapAspectRatio:"1-1",elementDesign:"default"};var o,c,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`(args: mapStoryProps) => {
  return \`
        <main>
            \${mapComponent(args)}

            <section class="chapter" background-color="primary">
                \${mapComponent(args)}
            </section>
        </main>
    \`;
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const r=["Map"];export{t as Map,r as __namedExportsOrder,i as default};
