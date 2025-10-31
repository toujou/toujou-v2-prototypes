import { Meta, StoryFn } from '@storybook/web-components-vite';
import { renderMvkPageIntroSection } from "./blocks/MvkIntroSection";
import { renderBreadcrumbExampleBlock } from "../../02. elements/breadrumb/example-block/breadcrumb-example";

export default {
    title: 'PAGES/MVK',
    parameters: {
        layout: 'fullwidth',
    },
    argTypes: {
        mapAspectRatio: {
            table: {
                category: "D1I Event Page Settings",
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

interface MvkEventProps {
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
                    
                    <div class="fragment-teaser__block" number-of-columns="2" expand-first>
                        <div class="fragment-teaser__column">
                            <div class="fragment-teaser__column-content">
                                <div
                                    class="calendar-pages collection-item__date"
                                    aria-label="calendar page with date / time information"
                                >
                                    <time class="calendar-page" datetime="2025-11-14">
                                        <div class="calendar-page__date">
                                            <p class="calendar-page__month">Nov</p>
                                            <p class="calendar-page__day">14</p>
                                        </div>
                                        <div class="calendar-page__times">
                                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                                        </div>
                                    </time>
                                    <span class="calendar-pages__until" aria-hidden="true">
                                        <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                                    </span>
                                    <time class="calendar-page" datetime="2025-11-16">
                                        <div class="calendar-page__date">
                                            <p class="calendar-page__month">Nov</p>
                                            <p class="calendar-page__day">16</p>
                                        </div>
                                        <div class="calendar-page__times">
                                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                                        </div>
                                    </time>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="fragment-teaser__block" number-of-columns="1">
                        <div class="fragment-teaser__column">
                            <toujou-icon class="icon" icon-name="clock-circle-filled" icon-color="font" icon-size="m"></toujou-icon>
                            <div class="fragment-teaser__column-content" number-of-columns="3~">
                                <p class="fragment-teaser__info"><strong>Beginn:</strong>
                                    <time class="opening-hours__row" datetime="T09:00P11H">
                                        <span class="opening-hours__time">20:00</span>
                                    </time>
                                </p>
                                <p class="fragment-teaser__info"><strong>Ende:</strong>
                                    <time class="opening-hours__row" datetime="T09:00P11H">
                                        <span class="opening-hours__time">23:00</span>
                                    </time>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="fragment-teaser__block" number-of-columns="1">
                        <div class="fragment-teaser__column">
                            <toujou-icon class="icon" icon-name="star" icon-color="font" icon-size="m"></toujou-icon>
                            <div class="fragment-teaser__column-content">
                                <p class="fragment-teaser__info">Businessevent</p>
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

                    <div class="fragment-teaser__block" number-of-columns="2">
                        <div class="fragment-teaser__column">
                            <toujou-icon class="icon" icon-name="company" icon-color="font" icon-size="m"></toujou-icon>
                            <div class="fragment-teaser__column-content">
                                <address class="address">
                                    <span class="fragment-teaser__address-line">Veranstalter GmbH</span>
                                    <span class="fragment-teaser__address-line">Gustav-Weißkopf-Straße 5</span>
                                    <span class="fragment-teaser__address-line">90768 Fürth</span>
                                </address>
                            </div>
                        </div>
                        <div class="fragment-teaser__column">
                            <toujou-icon class="icon" icon-name="star" icon-color="font" icon-size="m"></toujou-icon>
                            <div class="fragment-teaser__column-content">
                                <address class="address">
                                    <a href="#" class="fragment-teaser__link">123456789</a>
                                    <a href="#" class="fragment-teaser__link">info@veranstalter.de</a>
                                    <a href="#" class="fragment-teaser__link">www.veranstalter.de</a>
                                </address>
                            </div>
                        </div>
                    </div>

                    <div class="fragment-teaser__block" number-of-columns="1">
                        <div class="fragment-teaser__column">
                            <toujou-icon class="icon" icon-name="info" icon-color="font" icon-size="m"></toujou-icon>
                            <div class="fragment-teaser__column-content">
                                <p class="fragment-teaser__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p class="fragment-teaser__info"><a href="#" class="fragment-teaser__link">Wichtiger Hinweis zum Einlass</a></p>
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
                    fullscreen-control
                    access-token="pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg">
                    <toujou-map-marker coordinates="[11.0762549, 49.4579779]" color="#0079A8"></toujou-map-marker>
                </toujou-map>
            </toujou-grid-column>
        </toujou-grid>`
}

const renderContentEventDatesSection = () => {
    return `
        <section class="chapter mvk-event-dates" id="mvkEventDatesSection" background-color="background">
            <h3>Termine</h3>

            <div class="mvk-event-dates__table">
                <div class="mvk-event-dates__table-row">
                    <p class="mvk-event-dates__dates">
                        <span class="mvk-event-dates__start-day">21.11.2025 (Freitag)</span>
                        <span class="mvk-event-dates__separator"> bis </span>
                        <span class="mvk-event-dates__end-day">22.11.2025 (Samstag)</span>
                    </p>

                    <p class="mvk-event-dates__times">
                        <span class="mvk-event-dates__start-day">21:00</span>
                        <span class="mvk-event-dates__separator"> - </span>
                        <span class="mvk-event-dates__end-day">02:00</span>
                    </p>
                </div>

                <div class="mvk-event-dates__table-row">
                    <p class="mvk-event-dates__dates">
                        <span class="mvk-event-dates__start-day">20.12.2025 (Samstag)</span>
                        <span class="mvk-event-dates__separator"> bis </span>
                        <span class="mvk-event-dates__end-day">21.12.2025 (Sonntag)</span>
                    </p>

                    <p class="mvk-event-dates__times">
                        <span class="mvk-event-dates__start-day">21:30</span>
                        <span class="mvk-event-dates__separator"> - </span>
                        <span class="mvk-event-dates__end-day">02:00</span>
                    </p>
                </div>
            </div>
        </section>
    `
}

const renderContentAgeRecommendationSection = () => {
    return `
        <section id="mvkAgeRecommendationSection" class="chapter mvk-age-recommendation" background-color="background">
            <h3>Altersempfehlung</h3>
            <p class="mvk-age-recommendation__message">Keine Altersempfehlung vorhanden</p>
        </section>
    `
}

const renderContentGettingThereSection = () => {
    return `
        <section id="mvkGettingThereSection" class="chapter mvk-getting-there" background-color="background" chapter-margin-top="none">
            <h3>Anreise</h3>
            <p class="mvk-getting-there__direction">
                <span class="mvk-getting-there__direction-title" type-weight="bold">Nächster Bahnhof</span>:
                <span class="mvk-getting-there__direction-value">U-Bahn-Haltestelle Stadtgrenze oder Jakobinenstraße</span>
            </p>
        </section>
    `
}

const renderContentA11ySection = () => {
    return `
        <section id="mvkAccessibilitySection" class="chapter mvk-accessibility" background-color="background">
            <h3>Barrierefreiheit</h3>
            <p>Mit einer Rampe oder ebenerdig zugänglich. Eine barrierefreie Toilette, jedoch nur über eine schmalere Tür zugänglich. Hilfe erforderlich.</p>
        </section>
    `
}

const renderContentPricesSection = () => {
    return `
        <section id="mvkPricesSection" class="chapter mvk-prices" background-color="background">
            <h3>Preise</h3>

            <h4 class="mvk-prices__label" type-size="font--omega">Kategorie 1</h4>
            <p class="mvk-prices__name">
                <span class="mvk-prices__info" type-weight="bold">Führung</span>:
                <span class="mvk-prices__price">0,00 €</span>
            </p>

            <h4 class="mvk-prices__label" type-size="font--omega">Kategorie 1</h4>
            <p class="mvk-prices__name">
                <span class="mvk-prices__info" type-weight="bold">Führung</span> (Schüler, Studenten, Bundesfreiwilligendienstleistende, Azubis, Schwerbehinderte (bei Schwerbehinderten mit dem Eintrag "B" kann die notwendige Begleitperson kostenlos dabei sein), Besitzer der Ehrenamtskarte, der ZAC-Karte (gilt für zwei Personen) und Kinder ab 13 Jahre in Begleitung Erwachsener. Inhaber eines "Fürth-Passes" erhalten 50 % Ermäßigung. Tickets sind ausschließlich in der Tourist-Information erhältlich.):
                <span class="mvk-prices__price">0,00 €</span>
            </p>
        </section>
    `
}

const renderContentMediaSection = () => {
    return `
        <section class="chapter mvk-media" id="mvkMediaSection" background-color="background">

            <h3>Bilder</h3>

            <toujou-media-grid class="media-grid" media-grid-column-number="1">
                <toujou-single-media class="single-media">
                    <img src="https://picsum.photos/1600/900" class="single-media__image" alt="Bild zur Veranstaltung" loading="lazy">

                    <toujou-media-info class="media-info">
                        <button slot="open-button" class="media-info__toggle" aria-label="Medien Beschriftung / Copyright umschalten">
                            <toujou-icon class="icon " icon-name="info" icon-color="background" icon-size="ms"></toujou-icon>
                        </button>
                        <button slot="close-button" class="media-info__toggle" aria-label="Medien Beschriftung / Copyright umschalten">
                            <toujou-icon class="icon " icon-name="close" icon-color="background" icon-size="ms"></toujou-icon>
                        </button>
                        <figpaction slot="figcaption" class="media-info__figcaption">Bild zur Veranstaltung</figpaction>
                    </toujou-media-info>
                </toujou-single-media>
            </toujou-media-grid>
    </section>
    `
}

const renderPageContent = () => {
    return `
        ${renderContentEventDatesSection()}
        ${renderContentAgeRecommendationSection()}
        ${renderContentGettingThereSection()}
        ${renderContentA11ySection()}
        ${renderContentPricesSection()}
        ${renderContentMediaSection()}
    `;
}

const renderMain = (args: MvkEventProps) => {
    return `
        <main id="main" skippy-links-label="Main content">
            ${renderBreadcrumbExampleBlock()}
            <div class="fragment" fragment-type="d1i-event" map-aspect-ratio="${args.mapAspectRatio}">
                ${renderMvkPageIntroSection('EVENT')}
                ${renderPageFragment()}
                ${renderMapSection()}
            </div>
            ${renderPageContent()}
        </main>
    `;
}

const Template: StoryFn<MvkEventProps> = (args: MvkEventProps)=> {
    return `
       ${renderMain(args)}
    `;
};

export const MvkEvent = Template.bind({});

MvkEvent.args = {
    mapAspectRatio: '3-1',
}
