import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import tripDatesByPersonDocs from './trip-dates-by-person.docs.mdx';

export default {
    title: 'COMPONENTS/Tourism/Trip Dates By Person',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: tripDatesByPersonDocs,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface DepartureByPersonCountry {
    value: string;
    label: string;
}

interface DepartureByPersonDate {
    value: string;
    label: string;
}

interface DepartureByPersonPrice {
    value: string;
    label: string;
}

interface DepartureByPersonStatus {
    text: string;
    type: 'success' | 'warning' | 'error';
    message?: string;
}

interface DepartureByPersonProps {
    tripName: string;
    country: DepartureByPersonCountry;
    date: DepartureByPersonDate;
    status: DepartureByPersonStatus;
    price: DepartureByPersonPrice;
    footnote?: string;
}

function renderDepartureByPerson(departure: DepartureByPersonProps) {
    return `
        <toujou-departure class="departure" role="row" aria-rowindex="2">
            <p class="departure__cell departure__title" role="cell" aria-colindex="1">${departure.tripName}</p>
            
                      
            <div class="departure__infos">
                <p class="departure__cell departure__info" role="cell" aria-colindex="2">
                    <span class="departure__info-label">${departure.country.label}</span>
                    <span class="departure__info-value">${departure.country.value}</span>
                </p>  
            
                <p class="departure__cell departure__info" role="cell" aria-colindex="3">
                    <span class="departure__info-label">${departure.date.label}</span>
                    <time class="departure__info-value" role="cell" datetime="${departure.date.value}">${departure.date.value}</time>
                </p> 
                
                <p class="departure__cell departure__info" role="cell" aria-colindex="5">
                    <span class="departure__info-label">${departure.price.label}</span>
                    <time class="departure__info-value" role="cell" datetime="${departure.date.value}">${departure.price.value}</time>
                </p>
            </div>
             
            <p class="departure__cell departure__status" role="cell" aria-colindex="4">
                <span class="departure__status-text departure__status-text--${departure.status.type}">${departure.status.text}</span>
                ${departure.status.message ? `
                    <span class="departure__status-info">${departure.status.message}</span>
                ` : ''}
            </p>
            
            <div class="departure__cell departure__cta" role="cell" aria-colindex="6">
                <button class="button departure__cta-button" button-size="small">Anfragen</button>
            </div>
            
            ${departure.footnote ? `
                <p class="additional-info" no-margins>
                    <toujou-icon class="icon" icon-color="font" icon-size="m" icon-name="campaign"></toujou-icon>
                    ${departure.footnote}
                </p>
            ` : ''}
        </toujou-departure>
    `;
}

const Template = () => {
    return `
        <main>
            <toujou-departures class="departures departures-by-person" role="table" aria-label="Departure Dates">
                <div class="departures__header-group" role="rowgroup">
                    <toujou-departures-header role="row" class="departures-header">
                        <div role="columnheader" aria-colindex="1">
                            <span class="departures-header__text departures-header__text--appointment">Reise</span>
                        </div>
                        <div class="departures-header__prices">
                            <div role="columnheader" aria-colindex="2">
                                <span class="departures-header__text"><span class="departures-header__note">Land</span></span>
                            </div>
                            
                            <div role="columnheader" aria-colindex="3">
                                <span class="departures-header__text departures-header__text--status departures-header__text">Termin</span>
                            </div>
                            
                            <div role="columnheader" aria-colindex="5">
                                <span class="departures-header__text departures-header__text--action departures-header__text">Reisepreis</span>
                            </div>
                        </div>
                        
                        <div role="columnheader" aria-colindex="4">
                            <span class="departures-header__text departures-header__text--action departures-header__text">Verfügbarkeit</span>
                        </div>
                        
                        <div role="columnheader" aria-colindex="6">
                            <span class="departures-header__text departures-header__text--action departures-header__text--hidden">Action</span>
                        </div>
                    </toujou-departures-header>
                </div>
                
                <div role="rowgroup" class="departures__dates">
                    ${renderDepartureByPerson(
                        {
                            tripName: 'Trip A',
                            country: {
                                value: 'Portugal',
                                label: 'Country'
                            },
                            date: {
                                value: '01.02. - 15.02.2025',
                                label: 'Date'
                            },
                            status: {
                                text: 'Buchbar',
                                type: 'success',
                                message: 'Garantiert - nur wenig Plätze'
                            },
                            price: {
                                value: '64€',
                                label: 'Price'
                            },
                        })
                    }
                    
                    ${renderDepartureByPerson(
                        {
                            tripName: 'Trip B',
                            country: {
                                value: 'Spain',
                                label: 'Country'
                            },
                            date: {
                                value: '12.02. - 20.02.2025',
                                label: 'Date'
                            },
                            status: {
                                text: 'Buchbar',
                                type: 'success',
                                message: 'Garantiert - nur wenig Plätze'
                            },
                            price: {
                                value: '124€',
                                label: 'Price'
                            },
                        })
                    }
                    
                    ${renderDepartureByPerson(
                        {
                            tripName: 'Trip C',
                            country: {
                                value: 'France',
                                label: 'Country'
                            },
                            date: {
                                value: '01.03. - 15.03.2025',
                                label: 'Date'
                            },
                            status: {
                                text: 'Auf Anfrage',
                                type: 'warning',
                                message: 'Warteliste'
                            },
                            price: {
                                value: '124€',
                                label: 'Price'
                            },
                        })
                    }
                </div>
            </toujou-departures>
        </main>
    `;
};

export const TripdatesByPerson = Template.bind({});
