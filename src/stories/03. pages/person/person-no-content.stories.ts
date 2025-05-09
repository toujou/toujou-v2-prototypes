import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import personDocs from './person.docs.mdx';

export default {
    title: 'PAGES/Person',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: personDocs,
        },
        layout: "fullwidth"
    },
} satisfies Meta;

const Template = () => {
    return `
        <div class="fragment">
            <section class="chapter chapter--background fragment__section">
                <toujou-text-block class="text-block" text-block-column-count="1">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <h1 class="fragment__intro-title" type-alignment="center">Dr. Max Mustermann</h1>
                            <p class="fragment__intro-subtitle" type-alignment="center" type-weight="bold">Produktmanager / Digitales Produktmanagement</p>
                            <div class="fragment__intro-description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
            </section>

            <section class="chapter chapter--default fragment__section">
                <toujou-fragment-teaser role="article" class="fragment-teaser">
                    <div class="fragment-teaser__content">
                        <div class="fragment-teaser__block" number-of-columns="2">
                            <div class="fragment-teaser__column">
                                <toujou-icon class="icon" icon-name="telephone" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="fragment-teaser__column-content">
                                    <address class="address">
                                        <span class="fragment-teaser__address-line">
                                            <a href="#" class="fragment-teaser__link">1234456789</a>
                                        </span>
                                    </address>
                                </div>
                            </div>
                            <div class="fragment-teaser__column">
                                <toujou-icon class="icon" icon-name="fax" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="fragment-teaser__column-content">
                                    <address class="address">
                                        <span class="fragment-teaser__address-line">
                                            <a href="#" class="fragment-teaser__link">987654321</a>
                                        </span>
                                    </address>
                                </div>
                            </div>
                            <div class="fragment-teaser__column">
                                <toujou-icon class="icon" icon-name="email" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="fragment-teaser__column-content">
                                    <address class="address">
                                        <span class="fragment-teaser__address-line">
                                            <a href="#" class="fragment-teaser__link">info@mustermann.de</a>
                                        </span>
                                    </address>
                                </div>
                            </div>
                            <div class="fragment-teaser__column">
                                <toujou-icon class="icon" icon-name="globe" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="fragment-teaser__column-content">
                                    <address class="address">
                                        <span class="fragment-teaser__address-line">
                                            <a href="#" class="fragment-teaser__link">987654321</a>
                                        </span>
                                    </address>
                                </div>
                            </div>
                        </div>
                        <div class="fragment-teaser__block" number-of-columns="1">
                            <div class="fragment-teaser__column">
                                <toujou-icon class="icon" icon-name="location" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="fragment-teaser__column-content">
                                    <address class="address">
                                        <span class="fragment-teaser__address-line">Firmenname GmbH</span>
                                        <span class="fragment-teaser__address-line">Michael-Schumacher-Straße 132</span>
                                        <span class="fragment-teaser__address-line">Nordhein-Westfalen</span>
                                        <span class="fragment-teaser__address-line">Deutschland</span>
                                    </address>
                                </div>
                            </div>
                        </div>
                        <div class="fragment-teaser__block" number-of-columns="1">
                            <div class="fragment-teaser__column" no-icon>
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
                    <figure class="fragment-teaser__figure">
                        <img src="https://picsum.photos/1200/1200" alt="beau" class="fragment-teaser__image">
                    </figure>
                </toujou-fragment-teaser>
            </section>
        </div>
    `;
};

export const PersonNoContent = Template.bind({});
