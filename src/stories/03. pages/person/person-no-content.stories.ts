import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import personDocs from './person.docs.mdx';

export default {
    title: 'PAGES/Person',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: personDocs,
        },
        layout: "fullwidth"
    },
} as Meta;

const Template = () => {
    return `
        <div class="schema">
            <section class="chapter chapter--default schema__section">
                <toujou-text-block class="text-block" text-block-column-count="1">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <h1 class="schema__intro-title" type-alignment="center">Dr. Max Mustermann</h1>
                            <p class="schema__intro-subtitle" type-alignment="center" type-weight="bold">Productmanager / Digitales Produktmanagement</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
                
                <toujou-text-block class="text-block" text-block-media-position="beside-right">
                    <toujou-text-block-column class="text-block-column">
                        <figure class="text-block__figure">
                            <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="text-block__image text-block__image--golden">
                        </figure>
                        <div class="text-block__content">
                            <h2>Über mich</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
           </section>
           <section class="chapter chapter--background">
               <toujou-text-block class="text-block" text-block-column-count="3">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <h3>Adresse</h3>
                            <address class="address">
                                <p class="address__item">
                                    Firmenname Gmbh <br>
                                    Michael_Schumacher-Straße 132 <br>
                                    56897 Köln <br>
                                    Nordhein-Westfalen <br>
                                    Deutschland
                                </p>
                            </address>
                        </div>
                    </toujou-text-block-column>
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <h3>Kontakt</h3>
                            <address class="address">
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="telephone" icon-color="font" icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="fax" icon-color="font" icon-size="m"></toujou-icon>
                                        0123 123456789
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="globe" icon-color="font" icon-size="m"></toujou-icon>
                                        www.abcdef.com
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="email" icon-color="font" icon-size="m"></toujou-icon>
                                        max@abcdef.com
                                    </a>
                                </p>
                            </address>
                            <toujou-social-media-bar class="social-media-bar" element-design="default" inline no-headline>
                                <div class="social-media-bar__links">
                                    <a href="#" class="social-media-bar__link" aria-label="Our facebook account">
                                        <toujou-icon class="icon" icon-name="sm-facebook" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                                    </a>
                                    <a href="#" class="social-media-bar__link" aria-label="Our twitter account">
                                        <toujou-icon class="icon" icon-name="sm-twitter" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                                    </a>
                                    <a href="#" class="social-media-bar__link" aria-label="Our instagram account">
                                        <toujou-icon class="icon" icon-name="sm-instagram" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                                    </a>
                                    <a href="#" class="social-media-bar__link" aria-label="Our youtube account">
                                        <toujou-icon class="icon" icon-name="sm-youtube" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                                    </a>
                                </div>
                            </toujou-social-media-bar>
                        </div>
                    </toujou-text-block-column>
                    <toujou-text-block-column class="text-block-column">
                    </toujou-text-block-column>
                </toujou-text-block>
           </section>
           <section class="chapter" no-padding>
               <toujou-map
                   class="map schema__map"
                   center="[11.0762549, 49.4579779]"
                   zoom="8"
                   map-style="mapbox://styles/mapbox/light-v10"
                   interactive
                   access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg">            
                </toujou-map>
            </section>
       </div>
    `;
};

export const PersonNoContent = Template.bind({});
