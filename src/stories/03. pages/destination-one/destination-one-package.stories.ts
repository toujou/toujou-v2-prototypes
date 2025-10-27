import { Meta, StoryFn } from '@storybook/web-components-vite';
import { renderDi1PageIntroSection } from "./blocks/destinationOneIntroSection";
import { renderBreadcrumbExampleBlock } from "../../02. elements/breadrumb/example-block/breadcrumb-example";

export default {
    title: 'PAGES/DestinationOne',
    parameters: {
        layout: 'fullwidth',
    },
    argTypes: {
        mapAspectRatio: {
            table: {
                category: "D1I Package Page Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Map Aspect Ratio',
            description: "Set the map's aspect ratio",
            options: ['default', '3-1'],
            control: { type: 'radio' },
            required: true,
        },
    }
} satisfies Meta;

interface DestinationOnePackageProps {
    mapAspectRatio: string;
}

const renderPageFragment = () => {
    return `
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
    `;
}

const renderMapSection = () => {
    return `
        <toujou-grid class="grid fragment__map-section" number-of-columns="1" grid-type="medium" column-layout="default">
            <toujou-grid-column class="grid-column">
                <toujou-map
                    class="fragment__map"
                    center="[11.0762549, 49.4579779]"
                    zoom="14"
                    map-style="mapbox://styles/mapbox/light-v10"
                    interactive
                    access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg">
                    <toujou-map-marker coordinates="[11.0762549, 49.4579779]" color="#0079A8"></toujou-map-marker>
                </toujou-map>
            </toujou-grid-column>
        </toujou-grid>`
}

const renderPageContent = () => {
    return `
        <h2>Section Prices</h2>
        <p>prices, priceInfo, acceptedPaymentTypes</p>
        
        <h2>Section Directions</h2>
        <p>bundledDirections, directionsLink, parkingFee</p>
        
        <h2>Section Itinerary</h2>
        <p>itinerary</p>
        
        <h2>Section Media</h2>
        <p>media</p>
        
        <h2>Section Services</h2>
        <p>packageFeatures, services</p>
        
        <h2>Section Certificates</h2>
        <p>certificates</p>
    `;
}

const renderMain = (args: DestinationOnePackageProps) => {
    return `
        <main id="main" skippy-links-label="Main content">
            ${renderBreadcrumbExampleBlock()}
            <div class="fragment" fragment-type="d1i-package" map-aspect-ratio="${args.mapAspectRatio}">
                ${renderDi1PageIntroSection('PACKAGE')}
                ${renderPageFragment()}
                ${renderMapSection()}
            </div>
            ${renderPageContent()}
        </main>
    `;
}

const Template: StoryFn<DestinationOnePackageProps> = (args: DestinationOnePackageProps)=> {
    return `
       ${renderMain(args)}
    `;
};

export const DestinationOnePackage = Template.bind({});

DestinationOnePackage.args = {
    mapAspectRatio: 'default',
}
