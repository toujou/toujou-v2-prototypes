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
            <section class="chapter chapter--background schema__section">
                <toujou-text-block class="text-block" text-block-column-count="1">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <img class="schema__intro-logo" src="https://picsum.photos/360" alt="Nice image">
                            <h1 class="schema__intro-title" type-alignment="center">Adidas</h1>
                            <p class="schema__intro-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
            </section>
            
            <section class="chapter chapter--default schema__section">
                <toujou-schema-teaser role="article" class="schema-teaser">
                    <div class="schema-teaser__content">
                        <div class="schema-teaser__block" number-of-columns="2">
                            <div class="schema-teaser__column">
                                <toujou-icon class="icon" icon-name="telephone" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="schema-teaser__column-content">
                                    <address class="address">
                                        <a href="#" class="schema-teaser__link">1234456789</a>
                                    </address>
                                </div>
                            </div>
                            <div class="schema-teaser__column">
                                <toujou-icon class="icon" icon-name="fax" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="schema-teaser__column-content">
                                    <address class="address">
                                        <a href="#" class="schema-teaser__link">987654321</a>
                                    </address>
                                </div>
                            </div>
                            <div class="schema-teaser__column">
                                <toujou-icon class="icon" icon-name="email" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="schema-teaser__column-content">
                                    <address class="address">
                                        <a href="#" class="schema-teaser__link">info@mustermann.de</a>
                                    </address>
                                </div>
                            </div>
                            <div class="schema-teaser__column">
                                <toujou-icon class="icon" icon-name="globe" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="schema-teaser__column-content">
                                    <address class="address">
                                        <a href="#" class="schema-teaser__link">987654321</a>
                                    </address>
                                </div>
                            </div>
                        </div>
                        <div class="schema-teaser__block" number-of-columns="1">
                            <div class="schema-teaser__column">
                                <toujou-icon class="icon" icon-name="location" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="schema-teaser__column-content">
                                    <address class="address">
                                        Firmenname GmbH <br>
                                        Michael-Schumacher-Straße 132 <br>
                                        Nordhein-Westfalen <br>
                                        Deutschland
                                    </address>
                                </div>
                            </div>
                        </div>
                        <div class="schema-teaser__block" number-of-columns="1">
                            <div class="schema-teaser__column">
                                <toujou-icon class="icon" icon-name="clock-circle-filled" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="schema-teaser__column-content">
                                    <toujou-opening-hours class="opening-hours">
                                        <time class="opening-hours__row" datetime="T09:00P11H">
                                            <span class="opening-hours__day">Montag</span>
                                            <span class="opening-hours__time">09:00 - 20:00</span>
                                        </time>
                                        <time class="opening-hours__row" datetime="T09:00P11H">
                                            <span class="opening-hours__day">Dienstag</span>
                                            <span class="opening-hours__time">09:00 - 20:00</span>
                                        </time>
                                        <time class="opening-hours__row" datetime="T09:00P11H">
                                            <span class="opening-hours__day">Mittwoch</span>
                                            <span class="opening-hours__time">09:00 - 20:00</span>
                                        </time>
                                        <time class="opening-hours__row" datetime="T09:00P11H">
                                            <span class="opening-hours__day">Donnerstag</span>
                                            <span class="opening-hours__time">09:00 - 20:00</span>
                                        </time>
                                        <time class="opening-hours__row" datetime="T09:00P11H">
                                            <span class="opening-hours__day">Freitag</span>
                                            <span class="opening-hours__time">09:00 - 20:00</span>
                                        </time>
                                        <time class="opening-hours__row" datetime="P0H">
                                            <span class="opening-hours__day">Sonntag</span>
                                            <span class="opening-hours__time">Geschlossen</span>
                                        </time>
                                    </toujou-opening-hours>
                                </div>
                            </div>
                        </div>
                        <div class="schema-teaser__block" number-of-columns="1">
                            <div class="schema-teaser__column" no-icon>
                                <toujou-social-media-bar class="social-media-bar" element-design="default" no-headline inline no-margins>
                                    <div class="social-media-bar__links">
                                        <a href="#" class="social-media-bar__link" aria-label="Our facebook account">
                                            <toujou-icon class="icon" icon-name="sm-facebook" icon-size="xl" icon-color="primary" aria-hidden=""></toujou-icon>
                                        </a>
                                        <a href="#" class="social-media-bar__link" aria-label="Our twitter account">
                                            <toujou-icon class="icon" icon-name="sm-twitter" icon-size="xl" icon-color="primary" aria-hidden=""></toujou-icon>
                                        </a>
                                        <a href="#" class="social-media-bar__link" aria-label="Our instagram account">
                                            <toujou-icon class="icon" icon-name="sm-instagram" icon-size="xl" icon-color="primary" aria-hidden=""></toujou-icon>
                                        </a>
                                        <a href="#" class="social-media-bar__link" aria-label="Our youtube account">
                                            <toujou-icon class="icon" icon-name="sm-youtube" icon-size="xl" icon-color="primary" aria-hidden=""></toujou-icon>
                                        </a>
                                    </div>
                                </toujou-social-media-bar>
                            </div>
                        </div>
                    </div>
                    <figure class="schema-teaser__figure">
                        <img src="https://picsum.photos/1200/1200" alt="beau" class="schema-teaser__image">
                    </figure>
                </toujou-schema-teaser>
            </section>
        </div>
    `;
};

export const OrganizationNoContent = Template.bind({});
