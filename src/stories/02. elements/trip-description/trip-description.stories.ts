import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import tripDescriptionDocs from './trip-description.docs.mdx';

export default {
    title: 'COMPONENTS/Tourism/Trip Description',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: tripDescriptionDocs,
        },
    },
    argTypes: {
        showDayDate: {
            table: {
                category: "Trip Description Settings",
                defaultValue: { summary: 'false' },
            },
            name: 'Show day date',
            description: "Show the date for each day",
            control: { type: 'boolean' },
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface TripDescriptionIncludedOption {
    iconName: string;
    text: string;
}

interface TripDescriptionFile {
    title: string;
    description?: string;
}

interface TripDescriptionProps {
    showDayDate: boolean
}

const renderTripDescriptionCalendar = (dayText: string) => {
    return `
        <toujou-trip-description-day slot="day" class="trip-description-day">
            <p class="trip-description-day__title">Day</p>
            <p class="trip-description-day__day">${dayText}</p>
        </toujou-trip-description-day>
    `;
}

const renderTripDescriptionIncludedOptions = (includedOptions: TripDescriptionIncludedOption[]) => {
    return `
        <trip-description-options class="trip-description-options">
            <ul class="separated-list trip-description-options__list" list-separator="dot" list-spacing="wide">
                ${includedOptions.map((includedOption: TripDescriptionIncludedOption) => {
                    return `
                        <li class="separated-list__item trip-description-options__item">
                            <toujou-icon class="icon trip-description-options__icon" icon-color="font" icon-name="${includedOption.iconName}" icon-size="m"></toujou-icon>
                            <span class="trip-description-options__text">${includedOption.text}</span>
                        </li>
                    `    
                }).join('')}
            </ul>
        </trip-description-options>
    `
}

const renderTripDescriptionFiles = (files: TripDescriptionFile[]) => {
    return `
        <p class="trip-description__files">
            ${files.map((file: TripDescriptionFile) => {
                return `
                    <a href="#" class="file-link trip-description__file-link" download>
                        <toujou-icon class="icon file-link__icon" icon-size="m" icon-name="file-download" icon-color="font"></toujou-icon>
                        <span class="file-link__texts">
                            <span class="file-link__title">${file.title}</span>
                            ${file.description ? `<span class="file-link__description">${file.description}</span>`: ''}
                        </span>
                    </a>
                `
            }).join('')}
        </p>
    `
}

const Template: StoryFn<TripDescriptionProps> = (args: TripDescriptionProps) => {
    return `
        <main>
            <toujou-trip-description class="trip-description">
                <toujou-details-accordion class="details-accordion" is-trip-description>
                    <toujou-details id="details-1" class="details" element-design="default">
                        <div class="trip-description__summary" slot="summary">
                            ${renderTripDescriptionCalendar('1')}
                            <h3 class="details__title">
                            ${args.showDayDate ? `<time class="trip-description__title-date" datetime="2024-02-01">01. Feb 2025</time>` : ''}
                            Anreise
                            </h3>
                            <p class="details__subtitle">Flug nach Bangkok (nicht inkludiert - persönliches flugangebot auf Anfrage)</p>
                        </div>
                        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                        <div slot="content">
                            <toujou-text-block class="text-block" text-block-media-position="beside-left" column-layout="third">
                                <toujou-text-block-column class="text-block-column">
                                    <figure class="text-block__figure">
                                        <img class="text-block__image" src="https://picsum.photos/800/800" alt=""/>
                                    </figure>
                                    <div class="text-block__content">
                                        <h2>Headline</h2>
                                        <p>Id neque aliquam vestibulum morbi blandit. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Mattis enim ut tellus elementum sagittis vitae et. Nibh praesent tristique magna sit amet purus gravida quis. Senectus et netus et malesuada fames ac turpis. A arcu cursus vitae congue mauris rhoncus aenean vel. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Nec nam aliquam sem et tortor consequat id porta. Sit amet nisl suscipit adipiscing bibendum est. Congue mauris rhoncus aenean vel elit. Amet dictum sit amet justo donec enim. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Amet est placerat in egestas erat imperdiet sed euismod. In nibh mauris cursus mattis molestie a iaculis at.</p>
                                        ${renderTripDescriptionIncludedOptions([
                                            {iconName: 'coffee', text: 'Breakfast'},
                                        ])}
                                        
                                        ${renderTripDescriptionFiles([
                                            {title: 'Itinerary'},
                                        ])}
                                    </div>
                                </toujou-text-block-column>
                            </toujou-text-block>
                        </div>
                    </toujou-details>
    
                    <toujou-details id="details-2" class="details" is-open element-design="default">
                         <div class="trip-description__summary" slot="summary">
                            ${renderTripDescriptionCalendar('2-4')}
                            <h3 class="details__title">
                            ${args.showDayDate ? `<time class="trip-description__title-date" datetime="2024-02-01">02. - 04 Feb 2025</time>` : ''}
                            Ankunft in Bangkok
                            </h3>
                            <ul class="details__subtitle details__subtitle-list">
                                <li class="details__subtitle-list-item">Ankunft in Bangkok</li>
                                <li class="details__subtitle-list-item">Begrüßung durch die REiseleitung</li>
                                <li class="details__subtitle-list-item">Freizeit im Pool auf der Dachterrasse des Hotels</li>
                                <li class="details__subtitle-list-item">Wilkommensabendessen</li>
                            </ul>
                        </div>
                        
                        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
    
                        <div slot="content">
                            <toujou-text-block class="text-block" text-block-media-position="beside-left" column-layout="third">
                                <toujou-text-block-column class="text-block-column">
                                    <figure class="text-block__figure">
                                        <img class="text-block__image" src="https://picsum.photos/800/540">
                                    </figure>
                                    <div class="text-block__content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vulputate ut pharetra sit amet. A pellentesque sit amet porttitor eget. Feugiat nisl pretium fusce id velit. Justo donec enim diam vulputate ut pharetra sit. Enim diam vulputate ut pharetra sit amet aliquam. Viverra nam libero justo laoreet sit amet cursus. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.</p>
                                        ${renderTripDescriptionIncludedOptions([
                                            {iconName: 'coffee', text: 'Breakfast'},
                                            {iconName: 'food', text: 'Lunch'},
                                            {iconName: 'drink', text: 'Dinner'}
                                        ])}
                                        
                                        ${renderTripDescriptionFiles([
                                            {title: 'File title', description: 'This is a nice file description'},    
                                            {title: 'Our Guide'},    
                                            {title: 'Trip Infos', description: 'Detailed information about your trip'},    
                                        ])}
                                    </div>
                                </toujou-text-block-column>
                            </toujou-text-block>
                        </div>
                    </toujou-details>
    
                    <toujou-details id="details-3" class="details" element-design="default">
                         <div class="trip-description__summary" slot="summary">
                            ${renderTripDescriptionCalendar('5-12')}
                            <h3 class="details__title">
                            ${args.showDayDate ? `<time class="trip-description__title-date" datetime="2024-02-01">05. - 12. Feb 2025</time>` : ''}
                            Auf Entdeckungstour durch Bangkok
                            </h3>
                            <ul class="details__subtitle details__subtitle-list">
                                <li class="details__subtitle-list-item">Besuch des Kaiserpalastes</li>
                                <li class="details__subtitle-list-item">Schlafender Buddha Wat Po</li>
                                <li class="details__subtitle-list-item">Nachmittags Fahrt mit dem Longtailboot auf den Kanälen</li>
                                <li class="details__subtitle-list-item">Besuch des Blumensmarktes</li>
                                <li class="details__subtitle-list-item">Fahrt mit dem Tuk Tuk</li>
                            </ul>
                        </div>
                        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                        <div slot="content">
                            <toujou-text-block class="text-block">
                                <toujou-text-block-column class="text-block-column">
                                    <div class="text-block__content">
                                        <p>Aufgrund der aktuell nach wie vor herrschenden Corona-Pandemie und der Regelungen durch den Freistaat Bayern (<a href="https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/" target="toujou-exit-warning" rel="noreferrer">https://www.stmgp.bayern.de/coronavirus/rechtsgrundlagen/</a>), ist ein normaler Betrieb der Dienststellen und Ämter der Stadt Fürth zum gegenwärtigen Zeitpunkt noch nicht möglich. Auch um die städtischen Bediensteten zu schützen, können derzeit Behördengänge nur durch vorherige Terminvereinbarungen erfolgen. Ein spontaner Besuch im Amt ist daher grundsätzlich nicht möglich. Auch können außerhalb des Onlinesystems keine Termine individuell nach Wunsch vereinbart oder verändert werden.</p>
                                        <p>Viele Leistungen können aktuell schon online und bequem von zu Hause aus erledigt werden, wie zum Beispiel die Beantragung eines Führungszeugnisses, einer Meldebescheinigung oder die Zulassung von Fahrzeugen. Aufgrund gesetzlicher Vorgaben, die für alle Behörden in Deutschland gelten, sind dafür Maßnahmen zur Authentifizierung erforderlich, die der Sicherheit der persönlichen Daten dienen. Eine Authentifizierung kann beispielsweise kostenfrei per Handy-App oder über ein Lesegerät erfolgen, das für wenig Geld im Handel erhältlich ist.</p>
                                    </div>
                                </toujou-text-block-column>
                            </toujou-text-block>
                        </div>
                    </toujou-details>
    
                    <toujou-details id="details-4" class="details" element-design="default">
                         <div class="trip-description__summary" slot="summary">
                            ${renderTripDescriptionCalendar('13-18')}
                            <h3 class="details__title">
                            ${args.showDayDate ? `<time class="trip-description__title-date" datetime="2024-02-01">13. - 18. Feb 2025</time>` : ''}
                            Brücke am Kwai & Elefantenerlebnis
                            </h3>
                            <ul class="details__subtitle details__subtitle-list">
                                <li class="details__subtitle-list-item">Fahrt Richtung Kanchanaburi</li>
                                <li class="details__subtitle-list-item">Stopp an der Brücke am Kwai</li>
                                <li class="details__subtitle-list-item">Unvergesslicher Besuch einer Elefanten-Auffangsstation</li>
                                <li class="details__subtitle-list-item">Abenteurliche Fahrt mit der historischen "Todeseisenbahn"</li>
                                <li class="details__subtitle-list-item">Ankunft im Hotel in der Oase am Kwai Fluss"</li>
                                <li class="details__subtitle-list-item">Baden im Pool"</li>
                            </ul>
                        </div>
                        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                        <div slot="content">
                            <toujou-text-block class="text-block">
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
            </toujou-trip-description>
        </main>
    `;
};

export const TripDescription = Template.bind({});

TripDescription.args = {
    showDayDate: false,
}
