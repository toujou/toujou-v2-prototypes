import{M as l}from"./details-accordion.docs-Bpg2nHsh.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-kYMsDC90.js";import"./iframe-DILOFI4D.js";import"./preload-helper-C1FmrZbK.js";const m={title:"COMPONENTS/Accordion",parameters:{docs:{page:l}},argTypes:{singleExpandMode:{table:{category:"Details accordion Settings",defaultValue:{summary:"false"}},name:"Single expand mode",description:"Allow just one accordion items to be open at a time",control:{type:"boolean"},required:!0},expandedItem:{table:{category:"Details accordion Settings",defaultValue:{summary:"first"}},name:"Expanded items",description:"Define which accordion items are open when the page loads",options:["none","first","all"],control:{type:"radio"},required:!0},elementDesign:{table:{category:"Details Settings",defaultValue:{summary:"default"}},name:"Accordion element design",description:"Set the element design for the accordion element",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}},tags:["autodocs"]},o=e=>`
        <main>
            <toujou-details-accordion class="details-accordion" ${e.singleExpandMode?"single-expand-mode":""}>
                <toujou-details id="details-1" class="details" ${e.expandedItem==="first"||e.expandedItem==="all"?"is-open":""} element-design="${e.elementDesign}">
                    <h3 slot="summary" class="details__title">This is the summary</h3>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-media-position="inside-right">
                            <toujou-text-block-column class="text-block-column">
                                <figure class="text-block__figure">
                                    <img class="text-block__image" src="https://picsum.photos/800/800" alt="nice image">
                                </figure>
                                <div class="text-block__content">
                                    <h2>Headline</h2>
                                    <p>Id neque aliquam vestibulum morbi blandit. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Mattis enim ut tellus elementum sagittis vitae et. Nibh praesent tristique magna sit amet purus gravida quis. Senectus et netus et malesuada fames ac turpis. A arcu cursus vitae congue mauris rhoncus aenean vel. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Nec nam aliquam sem et tortor consequat id porta. Sit amet nisl suscipit adipiscing bibendum est. Congue mauris rhoncus aenean vel elit. Amet dictum sit amet justo donec enim. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Amet est placerat in egestas erat imperdiet sed euismod. In nibh mauris cursus mattis molestie a iaculis at.</p>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>

                <toujou-details id="details-2" class="details" ${e.expandedItem==="all"?"is-open":""} element-design="${e.elementDesign}">
                    <h3 slot="summary" class="details__title">Text with image</h3>
                    <p slot="summary" class="details__subtitle">I am a subtitle which complements the title</p>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>

                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-media-position="inside-right">
                            <toujou-text-block-column class="text-block-column">
                                <figure class="text-block__figure">
                                    <img class="text-block__image" src="https://picsum.photos/800/800" alt="another nice image">
                                </figure>
                                <div class="text-block__content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vulputate ut pharetra sit amet. A pellentesque sit amet porttitor eget. Feugiat nisl pretium fusce id velit. Justo donec enim diam vulputate ut pharetra sit. Enim diam vulputate ut pharetra sit amet aliquam. Viverra nam libero justo laoreet sit amet cursus. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Magna etiam tempor orci eu lobortis elementum. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Massa vitae tortor condimentum lacinia. Sed risus pretium quam vulputate dignissim. Et ultrices neque ornare aenean euismod elementum nisi.</p>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>
                
                <toujou-details id="details-2" class="details" ${e.expandedItem==="all"?"is-open":""} element-design="${e.elementDesign}">
                    <h3 slot="summary" class="details__title">Item with slider</h3>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>

                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-media-position="inside-right">
                            <toujou-text-block-column class="text-block-column">
                                <figure class="text-block__figure">
                                    <toujou-slider
            class="slider"
            aria-label="Toujou slider example"
            element-design="primary"
            slides-to-show="1"
            slider-type="default"
            slider-gap="var(--slider-slides-gap)"
            slider-aspect-ratio="0.5625"
            arrow-first-aria-label="Go to first slide"
            arrow-last-aria-label="Go to last slide"
            arrow-prev-aria-label="Go to previous slide"
            arrow-next-aria-label="Go to next slide"
            content-type="accordion"
        >
            <div class="splide slider__slider">
                <div class="splide__arrows slider-controls">
                    <button class="splide__arrow splide__arrow--prev slider-control slider-control--prev">
                        <toujou-icon class="icon slider-control__icon slider-control__icon--prev" icon-name="arrow-left"></toujou-icon>
                    </button>
                    <button class="splide__arrow splide__arrow--next slider-control slider-control--next">
                        <toujou-icon class="icon slider-control__icon slider-control__icon--next" icon-name="arrow-right"></toujou-icon>
                    </button>
                </div>

                <div class="splide__track slider__track">
                    <ul class="splide__list slider__list">
                        <li class="splide__slide slider-slide"">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide"">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1600/901" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide"">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/400/200" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide"">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1603/904" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide"">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1600/910" alt="Nice image">
                            </toujou-single-media>
                        </li>
                    </ul>
                </div>

                <div class="splide__progress slider-progress">
                    <div class="splide__progress__bar slider-progress__bar"></div>
                </div>
            </div>

            <toujou-slider-count class="slider-count">
                <span class="slider-count__current"></span>
                <span class="slider-count__separator">of</span>
                <span class="slider-count__total"></span>
            </toujou-slider-count>
        </toujou-slider>
                                </figure>
                                <div class="text-block__content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vulputate ut pharetra sit amet. A pellentesque sit amet porttitor eget. Feugiat nisl pretium fusce id velit. Justo donec enim diam vulputate ut pharetra sit. Enim diam vulputate ut pharetra sit amet aliquam. Viverra nam libero justo laoreet sit amet cursus. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Magna etiam tempor orci eu lobortis elementum. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Massa vitae tortor condimentum lacinia. Sed risus pretium quam vulputate dignissim. Et ultrices neque ornare aenean euismod elementum nisi.</p>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>

                <toujou-details id="details-3" class="details" ${e.expandedItem==="all"?"is-open":""} element-design="${e.elementDesign}">
                    <h3 slot="summary" class="details__title">I am just another simple title</h3>
                    <ul slot="summary" class="details__subtitle details__subtitle-list">
                        <li class="details__subtitle-list-item">Fruit</li>
                        <li class="details__subtitle-list-item">Apple</li>
                        <li class="details__subtitle-list-item">Pink Lady</li>
                    </ul>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-media-position="inside-right">
                            <toujou-text-block-column class="text-block-column">
                                <div class="text-block__content">
                                    <p>Aufgrund der aktuell nach wie vor herrschenden Corona-Pandemie und der Regelungen durch den Freistaat Bayern (<a href="https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/" target="toujou-exit-warning" rel="noreferrer">https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/</a>), ist ein normaler Betrieb der Dienststellen und Ämter der Stadt Fürth zum gegenwärtigen Zeitpunkt noch nicht möglich. Auch um die städtischen Bediensteten zu schützen, können derzeit Behördengänge nur durch vorherige Terminvereinbarungen erfolgen. Ein spontaner Besuch im Amt ist daher grundsätzlich nicht möglich. Auch können außerhalb des Onlinesystems keine Termine individuell nach Wunsch vereinbart oder verändert werden.</p>
                                    <p>Viele Leistungen können aktuell schon online und bequem von zu Hause aus erledigt werden, wie zum Beispiel die Beantragung eines Führungszeugnisses, einer Meldebescheinigung oder die Zulassung von Fahrzeugen. Aufgrund gesetzlicher Vorgaben, die für alle Behörden in Deutschland gelten, sind dafür Maßnahmen zur Authentifizierung erforderlich, die der Sicherheit der persönlichen Daten dienen. Eine Authentifizierung kann beispielsweise kostenfrei per Handy-App oder über ein Lesegerät erfolgen, das für wenig Geld im Handel erhältlich ist.</p>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>

                <toujou-details id="details-4" class="details" ${e.expandedItem==="all"?"is-open":""} element-design="${e.elementDesign}">
                    <h3 slot="summary" class="details__title">This is the summary</h3>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-media-position="inside-right">
                            <toujou-text-block-column class="text-block-column">
                                <div class="text-block__content">
                                    <p>Aufgrund der aktuell nach wie vor herrschenden Corona-Pandemie und der Regelungen durch den Freistaat Bayern (<a href="https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/" target="toujou-exit-warning" rel="noreferrer">https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/</a>), ist ein normaler Betrieb der Dienststellen und Ämter der Stadt Fürth zum gegenwärtigen Zeitpunkt noch nicht möglich. Auch um die städtischen Bediensteten zu schützen, können derzeit Behördengänge nur durch vorherige Terminvereinbarungen erfolgen. Ein spontaner Besuch im Amt ist daher grundsätzlich nicht möglich. Auch können außerhalb des Onlinesystems keine Termine individuell nach Wunsch vereinbart oder verändert werden.</p>
                                    <p>Viele Leistungen können aktuell schon online und bequem von zu Hause aus erledigt werden, wie zum Beispiel die Beantragung eines Führungszeugnisses, einer Meldebescheinigung oder die Zulassung von Fahrzeugen. Aufgrund gesetzlicher Vorgaben, die für alle Behörden in Deutschland gelten, sind dafür Maßnahmen zur Authentifizierung erforderlich, die der Sicherheit der persönlichen Daten dienen. Eine Authentifizierung kann beispielsweise kostenfrei per Handy-App oder über ein Lesegerät erfolgen, das für wenig Geld im Handel erhältlich ist.</p>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>
            </toujou-details-accordion>
        </main>
    `,i=o.bind({});i.args={singleExpandMode:!1,expandedItem:"first",elementDesign:"default"};var t,s,n;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`(args: DetailsAccordionStoryProps) => {
  return \`
        <main>
            <toujou-details-accordion class="details-accordion" \${args.singleExpandMode ? 'single-expand-mode' : ''}>
                <toujou-details id="details-1" class="details" \${args.expandedItem === 'first' || args.expandedItem === 'all' ? 'is-open' : ''} element-design="\${args.elementDesign}">
                    <h3 slot="summary" class="details__title">This is the summary</h3>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-media-position="inside-right">
                            <toujou-text-block-column class="text-block-column">
                                <figure class="text-block__figure">
                                    <img class="text-block__image" src="https://picsum.photos/800/800" alt="nice image">
                                </figure>
                                <div class="text-block__content">
                                    <h2>Headline</h2>
                                    <p>Id neque aliquam vestibulum morbi blandit. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Mattis enim ut tellus elementum sagittis vitae et. Nibh praesent tristique magna sit amet purus gravida quis. Senectus et netus et malesuada fames ac turpis. A arcu cursus vitae congue mauris rhoncus aenean vel. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Nec nam aliquam sem et tortor consequat id porta. Sit amet nisl suscipit adipiscing bibendum est. Congue mauris rhoncus aenean vel elit. Amet dictum sit amet justo donec enim. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Amet est placerat in egestas erat imperdiet sed euismod. In nibh mauris cursus mattis molestie a iaculis at.</p>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>

                <toujou-details id="details-2" class="details" \${args.expandedItem === 'all' ? 'is-open' : ''} element-design="\${args.elementDesign}">
                    <h3 slot="summary" class="details__title">Text with image</h3>
                    <p slot="summary" class="details__subtitle">I am a subtitle which complements the title</p>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>

                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-media-position="inside-right">
                            <toujou-text-block-column class="text-block-column">
                                <figure class="text-block__figure">
                                    <img class="text-block__image" src="https://picsum.photos/800/800" alt="another nice image">
                                </figure>
                                <div class="text-block__content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vulputate ut pharetra sit amet. A pellentesque sit amet porttitor eget. Feugiat nisl pretium fusce id velit. Justo donec enim diam vulputate ut pharetra sit. Enim diam vulputate ut pharetra sit amet aliquam. Viverra nam libero justo laoreet sit amet cursus. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Magna etiam tempor orci eu lobortis elementum. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Massa vitae tortor condimentum lacinia. Sed risus pretium quam vulputate dignissim. Et ultrices neque ornare aenean euismod elementum nisi.</p>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>
                
                <toujou-details id="details-2" class="details" \${args.expandedItem === 'all' ? 'is-open' : ''} element-design="\${args.elementDesign}">
                    <h3 slot="summary" class="details__title">Item with slider</h3>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>

                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-media-position="inside-right">
                            <toujou-text-block-column class="text-block-column">
                                <figure class="text-block__figure">
                                    <toujou-slider
            class="slider"
            aria-label="Toujou slider example"
            element-design="primary"
            slides-to-show="1"
            slider-type="default"
            slider-gap="var(--slider-slides-gap)"
            slider-aspect-ratio="0.5625"
            arrow-first-aria-label="Go to first slide"
            arrow-last-aria-label="Go to last slide"
            arrow-prev-aria-label="Go to previous slide"
            arrow-next-aria-label="Go to next slide"
            content-type="accordion"
        >
            <div class="splide slider__slider">
                <div class="splide__arrows slider-controls">
                    <button class="splide__arrow splide__arrow--prev slider-control slider-control--prev">
                        <toujou-icon class="icon slider-control__icon slider-control__icon--prev" icon-name="arrow-left"></toujou-icon>
                    </button>
                    <button class="splide__arrow splide__arrow--next slider-control slider-control--next">
                        <toujou-icon class="icon slider-control__icon slider-control__icon--next" icon-name="arrow-right"></toujou-icon>
                    </button>
                </div>

                <div class="splide__track slider__track">
                    <ul class="splide__list slider__list">
                        <li class="splide__slide slider-slide"">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide"">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1600/901" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide"">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/400/200" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide"">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1603/904" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide"">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1600/910" alt="Nice image">
                            </toujou-single-media>
                        </li>
                    </ul>
                </div>

                <div class="splide__progress slider-progress">
                    <div class="splide__progress__bar slider-progress__bar"></div>
                </div>
            </div>

            <toujou-slider-count class="slider-count">
                <span class="slider-count__current"></span>
                <span class="slider-count__separator">of</span>
                <span class="slider-count__total"></span>
            </toujou-slider-count>
        </toujou-slider>
                                </figure>
                                <div class="text-block__content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vulputate ut pharetra sit amet. A pellentesque sit amet porttitor eget. Feugiat nisl pretium fusce id velit. Justo donec enim diam vulputate ut pharetra sit. Enim diam vulputate ut pharetra sit amet aliquam. Viverra nam libero justo laoreet sit amet cursus. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Magna etiam tempor orci eu lobortis elementum. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Massa vitae tortor condimentum lacinia. Sed risus pretium quam vulputate dignissim. Et ultrices neque ornare aenean euismod elementum nisi.</p>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>

                <toujou-details id="details-3" class="details" \${args.expandedItem === 'all' ? 'is-open' : ''} element-design="\${args.elementDesign}">
                    <h3 slot="summary" class="details__title">I am just another simple title</h3>
                    <ul slot="summary" class="details__subtitle details__subtitle-list">
                        <li class="details__subtitle-list-item">Fruit</li>
                        <li class="details__subtitle-list-item">Apple</li>
                        <li class="details__subtitle-list-item">Pink Lady</li>
                    </ul>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-media-position="inside-right">
                            <toujou-text-block-column class="text-block-column">
                                <div class="text-block__content">
                                    <p>Aufgrund der aktuell nach wie vor herrschenden Corona-Pandemie und der Regelungen durch den Freistaat Bayern (<a href="https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/" target="toujou-exit-warning" rel="noreferrer">https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/</a>), ist ein normaler Betrieb der Dienststellen und Ämter der Stadt Fürth zum gegenwärtigen Zeitpunkt noch nicht möglich. Auch um die städtischen Bediensteten zu schützen, können derzeit Behördengänge nur durch vorherige Terminvereinbarungen erfolgen. Ein spontaner Besuch im Amt ist daher grundsätzlich nicht möglich. Auch können außerhalb des Onlinesystems keine Termine individuell nach Wunsch vereinbart oder verändert werden.</p>
                                    <p>Viele Leistungen können aktuell schon online und bequem von zu Hause aus erledigt werden, wie zum Beispiel die Beantragung eines Führungszeugnisses, einer Meldebescheinigung oder die Zulassung von Fahrzeugen. Aufgrund gesetzlicher Vorgaben, die für alle Behörden in Deutschland gelten, sind dafür Maßnahmen zur Authentifizierung erforderlich, die der Sicherheit der persönlichen Daten dienen. Eine Authentifizierung kann beispielsweise kostenfrei per Handy-App oder über ein Lesegerät erfolgen, das für wenig Geld im Handel erhältlich ist.</p>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>

                <toujou-details id="details-4" class="details" \${args.expandedItem === 'all' ? 'is-open' : ''} element-design="\${args.elementDesign}">
                    <h3 slot="summary" class="details__title">This is the summary</h3>
                    <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-media-position="inside-right">
                            <toujou-text-block-column class="text-block-column">
                                <div class="text-block__content">
                                    <p>Aufgrund der aktuell nach wie vor herrschenden Corona-Pandemie und der Regelungen durch den Freistaat Bayern (<a href="https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/" target="toujou-exit-warning" rel="noreferrer">https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/</a>), ist ein normaler Betrieb der Dienststellen und Ämter der Stadt Fürth zum gegenwärtigen Zeitpunkt noch nicht möglich. Auch um die städtischen Bediensteten zu schützen, können derzeit Behördengänge nur durch vorherige Terminvereinbarungen erfolgen. Ein spontaner Besuch im Amt ist daher grundsätzlich nicht möglich. Auch können außerhalb des Onlinesystems keine Termine individuell nach Wunsch vereinbart oder verändert werden.</p>
                                    <p>Viele Leistungen können aktuell schon online und bequem von zu Hause aus erledigt werden, wie zum Beispiel die Beantragung eines Führungszeugnisses, einer Meldebescheinigung oder die Zulassung von Fahrzeugen. Aufgrund gesetzlicher Vorgaben, die für alle Behörden in Deutschland gelten, sind dafür Maßnahmen zur Authentifizierung erforderlich, die der Sicherheit der persönlichen Daten dienen. Eine Authentifizierung kann beispielsweise kostenfrei per Handy-App oder über ein Lesegerät erfolgen, das für wenig Geld im Handel erhältlich ist.</p>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>
            </toujou-details-accordion>
        </main>
    \`;
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const g=["DetailsAccordion"];export{i as DetailsAccordion,g as __namedExportsOrder,m as default};
