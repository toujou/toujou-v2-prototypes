import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import organizationDocs from './organization.docs.mdx';

export default {
    title: 'PAGES/Organization',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: organizationDocs,
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
                            <img class="schema__intro-logo" src="https://picsum.photos/360" alt="Nice image">
                            <h1 class="schema__intro-title" type-alignment="center">adidas AG</h1>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
        
                <toujou-text-block class="text-block" text-block-media-position="beside-right">
                    <toujou-text-block-column class="text-block-column">
                        <figure class="text-block__figure">
                            <img src="https://picsum.photos/1200/1200" alt="beautiful image"
                                 class="text-block__image text-block__image--golden">
                        </figure>
                        <div class="text-block__content">
                            <h2>Über mich</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.</p>
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
                                        <toujou-icon class="icon" icon-name="telephone" icon-color="font"
                                                     icon-size="m"></toujou-icon>
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
                                        <toujou-icon class="icon" icon-name="globe" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        www.abcdef.com
                                    </a>
                                </p>
                                <p class="address__item">
                                    <a href="#" class="address__link">
                                        <toujou-icon class="icon" icon-name="email" icon-color="font"
                                                     icon-size="m"></toujou-icon>
                                        max@abcdef.com
                                    </a>
                                </p>
                            </address>
                            <toujou-social-media-bar class="social-media-bar" element-design="default" inline no-headline>
                                <div class="social-media-bar__links">
                                    <a href="#" class="social-media-bar__link" aria-label="Our facebook account">
                                        <toujou-icon class="icon" icon-name="sm-facebook" icon-size="xl" icon-color="primary"
                                                     aria-hidden=""></toujou-icon>
                                    </a>
                                    <a href="#" class="social-media-bar__link" aria-label="Our twitter account">
                                        <toujou-icon class="icon" icon-name="sm-twitter" icon-size="xl" icon-color="primary"
                                                     aria-hidden=""></toujou-icon>
                                    </a>
                                    <a href="#" class="social-media-bar__link" aria-label="Our instagram account">
                                        <toujou-icon class="icon" icon-name="sm-instagram" icon-size="xl" icon-color="primary"
                                                     aria-hidden=""></toujou-icon>
                                    </a>
                                    <a href="#" class="social-media-bar__link" aria-label="Our youtube account">
                                        <toujou-icon class="icon" icon-name="sm-youtube" icon-size="xl" icon-color="primary"
                                                     aria-hidden=""></toujou-icon>
                                    </a>
                                </div>
                            </toujou-social-media-bar>
                        </div>
                    </toujou-text-block-column>
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <h3>Öffnungszeiten</h3>
                            <toujou-opening-hours class="opening-hours">
                                <time
                                    class="opening-hours__row"
                                    datetime="T09:00P11H"
                                >
                                    <span class="opening-hours__day">Montag</span>
                                    <span class="opening-hours__time">09:00 - 20:00</span>
                                </time>
                                <time
                                    class="opening-hours__row"
                                    datetime="T09:00P11H"
                                >
                                    <span class="opening-hours__day">Dienstag</span>
                                    <span class="opening-hours__time">09:00 - 20:00</span>
                                </time>
                                <time
                                    class="opening-hours__row"
                                    datetime="T09:00P11H"
                                >
                                    <span class="opening-hours__day">Mittwoch</span>
                                    <span class="opening-hours__time">09:00 - 20:00</span>
                                </time>
                                <time
                                    class="opening-hours__row"
                                    datetime="T09:00P11H"
                                >
                                    <span class="opening-hours__day">Donnerstag</span>
                                    <span class="opening-hours__time">09:00 - 20:00</span>
                                </time>
                                <time
                                    class="opening-hours__row"
                                    datetime="T09:00P11H"
                                >
                                    <span class="opening-hours__day">Freitag</span>
                                    <span class="opening-hours__time">09:00 - 20:00</span>
                                </time>
                                <time
                                    class="opening-hours__row"
                                    datetime="P0H"
                                >
                                    <span class="opening-hours__day">Sonntag</span>
                                    <span class="opening-hours__time">Geschlossen</span>
                                </time>
                            </toujou-opening-hours>
                        </div>
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
                        access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg"
                        map-position="relative">
                </toujou-map>
            </section>
            <section class="chapter">
                <h2>Mitarbeiter</h2>
                <ul class="card-collection">
                    <li class="card-collection__item">
                        <toujou-collection-item class="collection-item" item-type="person" item-design="default" item-orientation="vertical" role="article">
                            <div class="collection-item__top">
                                <figure class="collection-item__figure">
                                    <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                                </figure>
                            </div>
                            <div class="collection-item__bottom">
                                <h3 class="collection-item__title">Dr. Max Mustermann</h3>
                                <p class="collection-item__subtitles">
                                    <span class="collection-item__subtitle">Team-Lead</span>
                                </p>
                                <address class="address collection-item__address">
                                    <p class="address__item">
                                        <a href="#" class="address__link">
                                            <toujou-icon class="icon" icon-name="telephone" icon-color="font"
                                                         icon-size="m"></toujou-icon>
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
                                            <toujou-icon class="icon" icon-name="globe" icon-color="font"
                                                         icon-size="m"></toujou-icon>
                                            www.abcdef.com
                                        </a>
                                    </p>
                                    <p class="address__item">
                                        <a href="#" class="address__link">
                                            <toujou-icon class="icon" icon-name="email" icon-color="font"
                                                         icon-size="m"></toujou-icon>
                                            max@abcdef.com
                                        </a>
                                    </p>
                                </address>
                                <a href="#" class="collection-item__button">
                                    <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                    Mehr erfahren
                                </a>
                            </div>
                        </toujou-collection-item>
                    </li>
                    <li class="card-collection__item">
                        <toujou-collection-item class="collection-item" item-type="person" item-design="default" item-orientation="vertical" role="article">
                            <div class="collection-item__top">
                                <figure class="collection-item__figure">
                                    <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                                </figure>
                            </div>
                            <div class="collection-item__bottom">
                                <h3 class="collection-item__title">Dr. Max Mustermann</h3>
                                <p class="collection-item__subtitles">
                                    <span class="collection-item__subtitle">Team-Lead</span>
                                </p>
                                <address class="address collection-item__address">
                                    <p class="address__item">
                                        <a href="#" class="address__link">
                                            <toujou-icon class="icon" icon-name="telephone" icon-color="font"
                                                         icon-size="m"></toujou-icon>
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
                                            <toujou-icon class="icon" icon-name="globe" icon-color="font"
                                                         icon-size="m"></toujou-icon>
                                            www.abcdef.com
                                        </a>
                                    </p>
                                    <p class="address__item">
                                        <a href="#" class="address__link">
                                            <toujou-icon class="icon" icon-name="email" icon-color="font"
                                                         icon-size="m"></toujou-icon>
                                            max@abcdef.com
                                        </a>
                                    </p>
                                </address>
                                <a href="#" class="collection-item__button">
                                    <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                    Mehr erfahren
                                </a>
                            </div>
                        </toujou-collection-item>
                    </li>
                    <li class="card-collection__item">
                        <toujou-collection-item class="collection-item" item-type="person" item-design="default" item-orientation="vertical" role="article">
                            <div class="collection-item__top">
                                <figure class="collection-item__figure">
                                    <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                                </figure>
                            </div>
                            <div class="collection-item__bottom">
                                <h3 class="collection-item__title">Dr. Max Mustermann</h3>
                                <p class="collection-item__subtitles">
                                    <span class="collection-item__subtitle">Team-Lead</span>
                                </p>
                                <address class="address collection-item__address">
                                    <p class="address__item">
                                        <a href="#" class="address__link">
                                            <toujou-icon class="icon" icon-name="telephone" icon-color="font"
                                                         icon-size="m"></toujou-icon>
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
                                            <toujou-icon class="icon" icon-name="globe" icon-color="font"
                                                         icon-size="m"></toujou-icon>
                                            www.abcdef.com
                                        </a>
                                    </p>
                                    <p class="address__item">
                                        <a href="#" class="address__link">
                                            <toujou-icon class="icon" icon-name="email" icon-color="font"
                                                         icon-size="m"></toujou-icon>
                                            max@abcdef.com
                                        </a>
                                    </p>
                                </address>
                                <a href="#" class="collection-item__button">
                                    <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                    Mehr erfahren
                                </a>
                            </div>
                        </toujou-collection-item>
                    </li>
                    <li class="card-collection__item">
                        <toujou-collection-item class="collection-item" item-type="person" item-design="default" item-orientation="vertical" role="article">
                            <div class="collection-item__top">
                                <figure class="collection-item__figure">
                                    <img src="https://picsum.photos/id/64/200/300" alt="nice image" class="collection-item__image">
                                </figure>
                            </div>
                            <div class="collection-item__bottom">
                                <h3 class="collection-item__title">Dr. Max Mustermann</h3>
                                <p class="collection-item__subtitles">
                                    <span class="collection-item__subtitle">Team-Lead</span>
                                </p>
                                <address class="address collection-item__address">
                                    <p class="address__item">
                                        <a href="#" class="address__link">
                                            <toujou-icon class="icon" icon-name="telephone" icon-color="font"
                                                         icon-size="m"></toujou-icon>
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
                                            <toujou-icon class="icon" icon-name="globe" icon-color="font"
                                                         icon-size="m"></toujou-icon>
                                            www.abcdef.com
                                        </a>
                                    </p>
                                    <p class="address__item">
                                        <a href="#" class="address__link">
                                            <toujou-icon class="icon" icon-name="email" icon-color="font"
                                                         icon-size="m"></toujou-icon>
                                            max@abcdef.com
                                        </a>
                                    </p>
                                </address>
                                <a href="#" class="collection-item__button">
                                    <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                    Mehr erfahren
                                </a>
                            </div>
                        </toujou-collection-item>
                    </li>
                </ul>
            </section>
        </div>
    `;
};

export const OrganizationNoContent = Template.bind({});
