import { Meta } from '@storybook/web-components-vite';

export default {
    title: 'PAGES/DestinationOne',
    parameters: {
        layout: 'fullwidth'
    },
} satisfies Meta;

const renderBreadcrumb = () => {
    return `
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
    `;
}

const renderIntroSection = () => {
    return `
        <div class="fragment" fragment-type="d1i-gastro" map-aspect-ratio="default">
            <section class="chapter fragment__section" background-color="background">
            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1 class="fragment__intro-title" type-alignment="center">Destination One GASTRO page</h1>
                        <p class="fragment__intro-description" type-alignment="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
            </section>
        </div>
    `;
}

const renderPageFragment = () => {
    return `
        <div class="fragment" fragment-type="event">
            <section class="chapter fragment__section" background-color="primary-o-10">
                <toujou-fragment-teaser class="fragment-teaser" role="article">
                    <div class="fragment-teaser__content">

                        <div class="fragment-teaser__block" number-of-columns="1">
                            <div class="fragment-teaser__column">
                                <toujou-icon class="icon " icon-name="bookmark" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="fragment-teaser__column-content" data-is-flex>
                                    <toujou-chip class="chip" chip-bg-color="font-light" chip-border-radius="round" chip-size="s">
                                        Category 1
                                    </toujou-chip>
                                    <toujou-chip class="chip" chip-bg-color="font-light" chip-border-radius="round" chip-size="s">
                                        Category 2
                                    </toujou-chip>
                                </div>
                            </div>
                        </div>
                        
                        <div class="fragment-teaser__block" number-of-columns="2">
                            <div class="fragment-teaser__column">
                                <toujou-icon class="icon" icon-name="telephone" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="fragment-teaser__column-content">
                                    <address class="address">
                                        <a href="tel:123456789" class="fragment-teaser__link">123456789</a>
                                    </address>
                                </div>
                            </div>
                            <div class="fragment-teaser__column">
                                <toujou-icon class="icon" icon-name="fax" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="fragment-teaser__column-content">
                                    <address class="address">
                                        <a href="tel:987654321" class="fragment-teaser__link">987654321</a>
                                    </address>
                                </div>
                            </div>
                            <div class="fragment-teaser__column">
                                <toujou-icon class="icon" icon-name="email" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="fragment-teaser__column-content">
                                    <address class="address">
                                        <a href="mailto:test@test.com" class="fragment-teaser__link">test@test.com</a>
                                    </address>
                                </div>
                            </div>
                        </div>

                        <div class="fragment-teaser__block" number-of-columns="1">
                            <div class="fragment-teaser__column">
                                <toujou-icon class="icon " icon-name="link" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="fragment-teaser__column-content" data-is-flex>
                                    <a href="#facebook" class="fragment-teaser__link" aria-label="Follow us on facebook">
                                        <toujou-icon class="icon " icon-name="sm-facebook-circle" icon-color="primary" icon-size="m"></toujou-icon>
                                    </a>
                                    <a href="#instagram" class="fragment-teaser__link" aria-label="Follow us on instagram">
                                        <toujou-icon class="icon " icon-name="sm-instagram-circle" icon-color="primary" icon-size="m"></toujou-icon>
                                    </a>
                                    <a href="#youtube" class="fragment-teaser__link" aria-label="Follow us on youtube">
                                        <toujou-icon class="icon " icon-name="sm-youtube-circle" icon-color="primary" icon-size="m"></toujou-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="fragment-teaser__block" number-of-columns="2">
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
                            
                            <div class="fragment-teaser__column">
                                <toujou-icon class="icon" icon-name="account" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="fragment-teaser__column-content">
                                    <address class="address">
                                        <span class="fragment-teaser__address-line">Ansprechpartner Name</span>
                                        <span class="fragment-teaser__address-line">Home town</span>
                                        <span class="fragment-teaser__address-line">Nationality</span>
                                        <a href="tel:123456789" class="fragment-teaser__address-link">123456789</a>
                                    </address>
                                </div>
                            </div>
                        </div>
                        
                        <div class="fragment-teaser__block" number-of-columns="1">
                            <div class="fragment-teaser__column">
                                <toujou-icon class="icon " icon-name="clock-circle-filled" icon-color="font" icon-size="m"></toujou-icon>
         
                                <div class="fragment-teaser__column-content">
                                    <toujou-opening-hours class="opening-hours">
                                        <time class="opening-hours__row" datetime="T09:00P11H">
                                            <span class="opening-hours__day">Montag</span>
                                            <span class="opening-hours__time">08:00 - 18:00</span>
                                        </time>
                                    
                                        <time class="opening-hours__row" datetime="T09:00P11H">
                                            <span class="opening-hours__day">Dienstag</span>
                                            <span class="opening-hours__time">08:00 - 18:00</span>
                                        </time>
                                    
                                        <time class="opening-hours__row" datetime="T09:00P11H">
                                            <span class="opening-hours__day">Mittwoch</span>
                                            <span class="opening-hours__time">08:00 - 18:00</span>
                                        </time>
                                    
                                        <time class="opening-hours__row" datetime="T09:00P11H">
                                            <span class="opening-hours__day">Donnerstag</span>
                                            <span class="opening-hours__time">08:00 - 18:00</span>
                                        </time>
                                    
                                        <time class="opening-hours__row" datetime="T09:00P11H">
                                            <span class="opening-hours__day">Freitag</span>
                                            <span class="opening-hours__time">08:00 - 18:00</span>
                                        </time>
                                    
                                        <time class="opening-hours__row" datetime="T09:00P11H">
                                            <span class="opening-hours__day">Samstag</span>
                                            <span class="opening-hours__time">08:00 - 18:00</span>
                                        </time>
                                    </toujou-opening-hours>
                        
                                    <p class="fragment-teaser__opening-hours-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="fragment-teaser__block" number-of-columns="1">
                            <div class="fragment-teaser__column">
                                <toujou-icon class="icon " icon-name="map" icon-color="font" icon-size="m"></toujou-icon>
                                <div class="fragment-teaser__column-content">
                                    <span class="fragment-teaser__info">Anreise planen</span>
                                    <span class="fragment-teaser__info">
                                        <a href="#" class="fragment-teaser__link">Google Maps</a>
                                    </span>
                                    <span class="fragment-teaser__info">
                                        <a href="#" class="fragment-teaser__link">Open Street Map</a>
                                    </span>
                                    <span class="fragment-teaser__info">
                                        <a href="#" class="fragment-teaser__link">Dutsche Bahm</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
            

                    <figure class="fragment-teaser__figure">
                        <img
                            class="fragment-teaser__image"
                            src="https://picsum.photos/1280"
                            alt=""
                            loading="lazy"
                        >
                    </figure>    
                </toujou-fragment-teaser>
            </section>
        </div>
    `;
}

const renderPageContent = () => {
    return `
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
    `;
}

const renderMain = () => {
    return `
        <main id="main" skippy-links-label="Main content">
            ${renderBreadcrumb()}
            ${renderIntroSection()}
            ${renderPageFragment()}
            ${renderPageContent()}
        </main>
    `;
}

const Template = () => {
    return `
       ${renderMain()}
    `;
};

export const DestinationOneGastro = Template.bind({});
