const d={title:"PAGES/DestinationOne",parameters:{layout:"fullwidth"}},s=()=>`
        <header class="header" image-height="half">
            <img class="header__image" src="https://picsum.photos/2000" alt="quote image" />

            <div class="header__content">
                <div
                    class="header-content"
                    accent-color="default"
                    vertical-position="mid"
                    horizontal-position="center"
                    content-size="half"
                    text-alignment
                    is-title-only
                >
                    <h1 class="header-content__title font--default">This is a headline</h1>
                </div>
            </div>
        </header>
    `,i=()=>`
        <toujou-breadcrumb role="navigation" aria-label="Breadcrumb" class="breadcrumb">
            <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open" aria-label="Open breadcrumb menu">
                <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
            </button>

            <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close" aria-label="Close breadcrumb menu">
                <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
            </button>

            <ol class="breadcrumb__list" slot="list">
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Home</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item One</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item Two</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link" aria-current="page">Item Three</a>
                </li>
            </ol>
        </toujou-breadcrumb>
    `,n=()=>`
        <section class="chapter" background-color="background" chapter-margin-top="none" style="margin-top: 0 !important;">
            <h3>Destination One POI page</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>
    `,l=()=>`
        <div class="fragment" fragment-type="event">
            <section class="chapter fragment__section" background-color="primary-o-10">
                <toujou-fragment-teaser class="fragment-teaser" role="article">
                    <div class="fragment-teaser__content">

                        <div class="fragment-teaser__block" number-of-columns="1">
                            <div class="fragment-teaser__column">
                                <toujou-icon class="icon " icon-name="star" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="fragment-teaser__column-content">
                                    <p class="fragment-teaser__info">POI</p>
                                </div>
                            </div>
                        </div>

                        <div class="fragment-teaser__block" number-of-columns="1">
                            <div class="fragment-teaser__column">
                                <toujou-icon class="icon " icon-name="location" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="fragment-teaser__column-content">
                                    <address class="address">
                                        <span class="fragment-teaser__address-line">Nice street</span>
                                        <span class="fragment-teaser__address-line">Home town</span>
                                        <span class="fragment-teaser__address-line">Nationality</span>
                                    </address>
                                </div>
                            </div>
                        </div>
                        
                        <div class="fragment-teaser__block" number-of-columns="1">
                            <div class="fragment-teaser__column">
                                <toujou-icon class="icon" icon-name="telephone" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="fragment-teaser__column-content">
                                    <address class="address">
                                        <a href="tel:123456789" class="fragment-teaser__link">123456789</a>
                                    </address>
                                </div>
                            </div>
                        </div>
                        
                        <div class="fragment-teaser__block" number-of-columns="1">
                            <div class="fragment-teaser__column">
                                <toujou-icon class="icon" icon-name="email" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="fragment-teaser__column-content">
                                    <address class="address">
                                        <a href="mailto:test@test.com" class="fragment-teaser__link">test@test.com</a>
                                    </address>
                                </div>
                            </div>
                        </div>

                    </div>
            

                    <figure class="fragment-teaser__figure">
                        <toujou-map
                            class="map"
                            center="[11.0762549, 49.4579779]"
                            zoom="14"
                            map-style="mapbox://styles/mapbox/light-v10"
                            interactive=""
                            access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg"
                        >
                            <toujou-map-marker coordinates="[11.0762549, 49.4579779]" color="var(--color-primary)"></toujou-map-marker>
                        </toujou-map>
                    </figure>    
                </toujou-fragment-teaser>
            </section>
        </div>
    `,c=()=>`
        <section class="chapter" background-color="background" chapter-margin-top="none" style="margin-top: 0 !important;">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            <h2>This is a H2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            <h3>This is a H3</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
            <h3>Example features</h3>
            <toujou-details-accordion class="details-accordion">
                <toujou-details id="details-1" class="details" element-design="default">
                    <h3 slot="summary" class="details__title">Hotel</h3>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-column-count="1">
                            <toujou-text-block-column class="text-block-column">
                                <div class="text-block__content">
                                    <ul class="list">
                                        <li class="list-item">Breakfast</li>
                                        <li class="list-item">Sauna</li>
                                        <li class="list-item">Swimming pool</li>
                                        <li class="list-item">Vegetarian Meals</li>
                                    </ul>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>
                <toujou-details id="details-1" class="details" element-design="default">
                    <h3 slot="summary" class="details__title">City</h3>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-column-count="1">
                            <toujou-text-block-column class="text-block-column">
                                <div class="text-block__content">
                                    <ul class="list">
                                        <li class="list-item">Sightseeing tours</li>
                                        <li class="list-item">Medieval castle</li>
                                        <li class="list-item">Beach</li>
                                    </ul>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>
                <toujou-details id="details-1" class="details" element-design="default">
                    <h3 slot="summary" class="details__title">Other</h3>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-column-count="1">
                            <toujou-text-block-column class="text-block-column">
                                <div class="text-block__content">
                                    <ul class="list">
                                        <li class="list-item">Free parking</li>
                                        <li class="list-item">Wi-Fi</li>
                                    </ul>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>
            </toujou-details-accordion>
        </section>
    `,r=()=>`
        <main id="main" skippy-links-label="Main content">
            ${i()}
            ${n()}
            ${l()}
            ${c()}
        </main>
    `,u=()=>`
       ${s()}
       ${r()}
    `,e=u.bind({});var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return \`
       \${renderHeader()}
       \${renderMain()}
    \`;
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const m=["DestinationOnePOI"];export{e as DestinationOnePOI,m as __namedExportsOrder,d as default};
