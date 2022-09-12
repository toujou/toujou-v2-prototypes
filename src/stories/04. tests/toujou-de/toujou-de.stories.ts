import {Meta} from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

export default {
    title: 'TESTS/toujou.de',
    decorators: [withXD],
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        layout: 'fullscreen',
    },
} as Meta;

const Template = () => {
    return `
        <header class="header" image-height="default">
            <img class="header__image" src="https://picsum.photos/2000" alt="quote image" />

            <div class="header-content"
                accent-color="default"
                vertical-position="center"
                horizontal-position="mid"
                content-size="half"
                text-alignment="default">
                <h2 class="header-content__title font--default">medatsu: Die nächste Stufe einfacher Website-Gestaltung</h2>
                <p class="infotext header-content__text">Storytelling in großem Gewand – bildgewaltig und emotional. Für Agenturen und Unternehmen, die eine Vision verfolgen und das auch zeigen wollen. Medien, Content, noch individuellere Designeinstellungen.</p>
                <a href="#" class="button header-content__cta" button-variant="secondary">Jetzt Medatsu kennenlernen</a>
            </div>

        </header>
        
        <main>
            <toujou-text-block class="text-block" text-block-media-position="beside-right">
                <toujou-text-block-column class="text-block-column">
                    <figure class="text-block__figure">
                        <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="text-block__image text-block__image--4-3">
                    </figure>
                    <div class="text-block__content">
                        <h2>Individuell gestaltet, selbständig verwaltet</h2>
                        <h1>Ihre professionelle Website mit toujou</h1>
                        <p class="infotext">
                            <strong>Starten Sie sofort</strong>:
                            <strong> </strong>Erstellen Sie Ihre Website innerhalb kürzester Zeit. <strong>Bleiben&nbsp;Sie unabhängig</strong>: Aktualisieren Sie Ihre Website jederzeit bequem und schnell.&nbsp;<strong>Werden Sie effizient</strong>: Positionieren Sie Ihre Botschaft dank toujou-Themes auf allen Endgeräten. <strong>Der toujou-Bonus</strong>: <a href="#c1012401">Lassen Sie sich menschlich beraten</a>.
                        </p>
                        <p>
                        <a href="/loesungen/unternehmen/" class="button" button-variant="font" button-size="normal" button-type="shadow">Für Ihr Unternehmen</a>
                        <a href="/loesungen/agenturen/" class="button" button-variant="font" button-size="normal" button-type="shadow">Als Tool für Agenturen</a></p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
            
            <toujou-slider
                class="slider"
                aria-label="Toujou slider example"
                slider-design="primary"
                slides-to-show="1"
                slider-gap="0"
                slider-aspect-ratio="0.5625"
                slider-type="loop"
                content-type="teaser"
                slides-per-move="1"
                autoplay-interval="6000"
                slider-padding="0"
                slider-focus-center="false"
            >
                <div class="splide slider__slider splide--loop splide--ltr splide--draggable is-active is-initialized"
                    id="splide01"
                    role="region"
                    aria-roledescription="carousel"
                >
                    <div class="splide__arrows splide__arrows--ltr">
                        <button class="splide__arrow splide__arrow--prev slider-control slider-control--prev" aria-label="Go to last slide" aria-controls="splide01-track">
                            <toujou-icon class="icon slider-control__icon slider-control__icon--prev" icon-name="arrow-left"></toujou-icon>
                        </button>
                        <button class="splide__arrow splide__arrow--next slider-control slider-control--next" aria-label="Next slide" aria-controls="splide01-track">
                            <toujou-icon class="icon slider-control__icon slider-control__icon--next" icon-name="arrow-right"></toujou-icon>
                        </button>
                    </div>
                
                    <div class="splide__track slider__track splide__track--loop splide__track--ltr splide__track--draggable" id="splide01-track" aria-live="polite" aria-atomic="true" style="padding-left: 0px; padding-right: 0px;">
                        <ul class="splide__list slider__list" id="splide01-list" role="presentation" style="transform: translateX(-926px);">
                            <li class="splide__slide slider-slide splide__slide--clone" data-splide-interval="1000" id="splide01-clone01" role="tabpanel" aria-roledescription="slide" aria-label="3 of 4" style="margin-right: 0px; height: 260.438px;" aria-hidden="true">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1026" alt="nice image">
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div> 
                                </toujou-teaser>
                            </li><li class="splide__slide slider-slide splide__slide--clone is-prev" data-splide-interval="1000" id="splide01-clone02" role="tabpanel" aria-roledescription="slide" aria-label="4 of 4" style="margin-right: 0px; height: 260.438px;" aria-hidden="true">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1027" alt="nice image">
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div> 
                                </toujou-teaser>
                            </li><li class="splide__slide slider-slide is-active is-visible" data-splide-interval="1000" id="splide01-slide01" role="tabpanel" aria-roledescription="slide" aria-label="1 of 4" style="margin-right: 0px; height: 260.438px;">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1025" alt="nice image">
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div> 
                                </toujou-teaser>
                            </li>
                            <li class="splide__slide slider-slide is-next" data-splide-interval="1000" id="splide01-slide02" role="tabpanel" aria-roledescription="slide" aria-label="2 of 4" style="margin-right: 0px; height: 260.438px;" aria-hidden="true">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1025" alt="nice image">
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div> 
                                </toujou-teaser>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="1000" id="splide01-slide03" role="tabpanel" aria-roledescription="slide" aria-label="3 of 4" style="margin-right: 0px; height: 260.438px;" aria-hidden="true">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1026" alt="nice image">
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div> 
                                </toujou-teaser>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="1000" id="splide01-slide04" role="tabpanel" aria-roledescription="slide" aria-label="4 of 4" style="margin-right: 0px; height: 260.438px;" aria-hidden="true">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1027" alt="nice image">
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div> 
                                </toujou-teaser>
                            </li>
                        <li class="splide__slide slider-slide splide__slide--clone is-active" data-splide-interval="1000" id="splide01-clone03" role="tabpanel" aria-roledescription="slide" aria-label="1 of 4" style="margin-right: 0px; height: 260.438px;" aria-hidden="true">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1025" alt="nice image">
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div> 
                                </toujou-teaser>
                            </li><li class="splide__slide slider-slide splide__slide--clone" data-splide-interval="1000" id="splide01-clone04" role="tabpanel" aria-roledescription="slide" aria-label="2 of 4" style="margin-right: 0px; height: 260.438px;" aria-hidden="true">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1025" alt="nice image">
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div> 
                                </toujou-teaser>
                            </li></ul>
                    </div>      
                    <div class="splide__progress slider-progress">
                        <div class="splide__progress__bar slider-progress__bar"></div>
                    </div>
                <ul class="splide__pagination slider-bullets splide__pagination--ltr" role="tablist" aria-label="Select a slide to show"><li role="presentation"><button class="splide__pagination__page slider-bullets__bullet is-active" type="button" role="tab" aria-controls="splide01-slide01" aria-label="Go to slide 1" aria-selected="true"></button></li><li role="presentation"><button class="splide__pagination__page slider-bullets__bullet" type="button" role="tab" aria-controls="splide01-slide02 splide01-slide03 splide01-slide04 splide01-clone03 splide01-clone04" aria-label="Go to slide 2" tabindex="-1"></button></li><li role="presentation"><button class="splide__pagination__page slider-bullets__bullet" type="button" role="tab" aria-controls="splide01-slide03 splide01-slide04 splide01-clone03 splide01-clone04" aria-label="Go to slide 3" tabindex="-1"></button></li><li role="presentation"><button class="splide__pagination__page slider-bullets__bullet" type="button" role="tab" aria-controls="splide01-slide04 splide01-clone03 splide01-clone04" aria-label="Go to slide 4" tabindex="-1"></button></li></ul></div>
            
                <toujou-slider-count class="slider-count">
                    <span class="slider-count__current">1</span>
                    <span class="slider-count__separator">of</span>
                    <span class="slider-count__total">4</span>
                </toujou-slider-count>
            </toujou-slider>
        </main>
    `;
};

export const ToujouHomepage = Template.bind({});


