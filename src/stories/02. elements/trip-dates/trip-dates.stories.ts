import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import tripDatesDocs from './trip-dates.docs.mdx';

export default {
    title: 'COMPONENTS/Tourism/Trip Dates',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: tripDatesDocs,
        },
    },
    argTypes: {
        roomCount: {
            table: {
                category: "Trip dates settings",
            },
            name: 'Room count',
            description: "Number of rooms on the table",
            control: {
                type: 'range',
                min: 1,
                max: 4,
                step: 1,
            },
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface DeparturePrice {
    value: string;
    label: string;
}

interface DepartureStatus {
    text: string;
    type: 'success' | 'warning' | 'error';
    message?: string;
}

interface DepartureProps {
    date: string;
    prices: DeparturePrice[];
    status: DepartureStatus;
    footnote?: string;
}

function renderDeparture(departure: DepartureProps, roomCount: number) {
    return `
        <toujou-departure class="departure" role="row" aria-rowindex="2">
            <time class="departure__cell departure__date" role="cell" aria-colindex="1" datetime="01.01.1999">${departure.date}</time>
            
            <div class="departure__prices">
                ${departure.prices.map((price: DeparturePrice, i) => {
                    if (i >= roomCount) return;
                    return price.value
                        ? `
                            <p class="departure__cell departure__price" role="cell" aria-colindex="${i + 1}">
                                <span class="departure__price-label">${price.label}</span>
                                <span class="departure__price-value">${price.value}</span>
                            </p>
                        `
                        : `
                            <p class="departure__cell departure__price" role="cell" aria-colindex="${i + 1}" aria-hidden="true"></p>
                        `;               
                }).join('')}
            </div>
            
            <p class="departure__cell departure__status" role="cell" aria-colindex="4">
                <span class="departure__status-text departure__status-text--${departure.status.type}">${departure.status.text}</span>
                ${departure.status.message ? `
                    <span class="departure__status-info">${departure.status.message}</span>
                ` : ''}
            </p>
            
            <div class="departure__cell departure__cta" role="cell" aria-colindex="5">
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

interface TripDatesStoryProps {
    roomCount: number;
}

enum ROOM_TYPE {
    A = 'Room Type A',
    B = 'Room Type B',
    C = 'Room Type C',
    D = 'Room Type D',
}

const Template: StoryFn<TripDatesStoryProps> = (args: TripDatesStoryProps) => {
    return `
        <main>
            <toujou-departures class="departures" role="table" price-count="${args.roomCount}" aria-label="Departure Dates">
                <div class="departures__header-group" role="rowgroup">
                    <toujou-departures-header role="row" class="departures-header">
                        <div role="columnheader" aria-colindex="1">
                            <span class="departures-header__text departures-header__text--appointment">Departure Dates</span>
                        </div>
                        <div class="departures-header__prices">
                            <div role="columnheader" aria-colindex="2">
                                <span class="departures-header__text">${ROOM_TYPE.A}<span class="departures-header__note">(Pro Person)</span></span>
                            </div>
                            
                            ${args.roomCount > 1 ? `
                                <div role="columnheader" aria-colindex="3">
                                    <span class="departures-header__text">${ROOM_TYPE.B}<span class="departures-header__note">(Pro Person)</span></span>
                                </div>
                            ` : ''}
                            
                            ${args.roomCount > 2 ? `
                                <div role="columnheader" aria-colindex="4">
                                    <span class="departures-header__text">${ROOM_TYPE.C}<span class="departures-header__note">(Pro Person)</span></span>
                                </div>
                            ` : ''}
                            
                            ${args.roomCount > 3 ? `
                                <div role="columnheader" aria-colindex="5">
                                    <span class="departures-header__text">${ROOM_TYPE.D}<span class="departures-header__note">(Pro Person)</span></span>
                                </div>
                            ` : ''}
                        </div>
                        <div role="columnheader" aria-colindex="${2 + args.roomCount}">
                            <span class="departures-header__text departures-header__text--status departures-header__text--hidden">Status</span>
                        </div>
                        <div role="columnheader" aria-colindex="${3 + args.roomCount}">
                            <span class="departures-header__text departures-header__text--action departures-header__text--hidden">Action</span>
                        </div>
                    </toujou-departures-header>
                </div>
                
                <div role="rowgroup" class="departures__dates">
                    ${renderDeparture(
                        {
                            date: '01.06 - 30.06.2026',
                            prices: [
                                { label: ROOM_TYPE.A, value: '60€' },
                                { label: ROOM_TYPE.B, value: '83€' },
                                { label: ROOM_TYPE.C, value: '83€' },
                                { label: ROOM_TYPE.D, value: '83€' },
                            ],
                            status: {
                                text: 'Buchbar',
                                type: 'success'
                            }
                        },
                        args.roomCount
                    )}
                    
                    ${renderDeparture(
                        {
                            date: '01.07 - 15.07.2026',
                            prices: [
                                { label: ROOM_TYPE.A, value: '48€' },
                                { label: ROOM_TYPE.B, value: '' },
                                { label: ROOM_TYPE.C, value: '' },
                                { label: ROOM_TYPE.D, value: '' },
                            ],
                            status: {
                                text: 'Buchbar',
                                type: 'success',
                                message: 'Garantiert - nur wenig Plätze'
                            }
                        },
                        args.roomCount
                    )}
                    
                    ${renderDeparture(
                        {
                            date: '28.12.2025 - 10.01.2026',
                            prices: [
                                { label: ROOM_TYPE.A, value: '' },
                                { label: ROOM_TYPE.B, value: '120€' },
                                { label: ROOM_TYPE.C, value: '' },
                                { label: ROOM_TYPE.D, value: '83€' },
                            ],
                            status: {
                                text: 'Warteliste',
                                type: 'warning',
                                message: 'Auf Anfrage'
                            },
                            footnote: 'This is a simple footnote!'
                        },
                        args.roomCount
                    )}
                    
                    ${renderDeparture(
                        {
                            date: '10.01 - 15.01.2026',
                            prices: [
                                { label: ROOM_TYPE.A, value: '87€' },
                                { label: ROOM_TYPE.B, value: '' },
                                { label: ROOM_TYPE.C, value: '83€' },
                                { label: ROOM_TYPE.D, value: '' },
                            ],
                            status: {
                                text: 'Nicht mehr buchbar',
                                type: 'error',
                            }
                        },
                        args.roomCount
                    )}
                    
                    ${renderDeparture(
                        {
                            date: '01.02 - 08.02.2026',
                            prices: [
                                { label: ROOM_TYPE.A, value: '' },
                                { label: ROOM_TYPE.B, value: '120€' },
                                { label: ROOM_TYPE.C, value: '83€' },
                                { label: ROOM_TYPE.D, value: '' },
                            ],
                            status: {
                                text: 'Buchbar',
                                type: 'success',
                                message: 'Garantiert - nur wenig Plätze'
                            }
                        },
                        args.roomCount
                    )}
                    
                    ${renderDeparture(
                        {
                            date: '15.02 - 28.02.2026',
                            prices: [
                                { label: ROOM_TYPE.A, value: '130€' },
                                { label: ROOM_TYPE.B, value: '' },
                                { label: ROOM_TYPE.C, value: '83€' },
                                { label: ROOM_TYPE.D, value: '83€' },
                            ],
                            status: {
                                text: 'Buchbar',
                                type: 'success',
                            },
                            footnote: 'Unser Lufthansa-Angebot: Direktflug Frankfurt - Windhoek, Hin- & Rückflug 1.499€ p.P. & 1.199€ pro Kind'
                        },
                        args.roomCount
                    )}
                    
                    ${renderDeparture(
                        {
                            date: '08.04 - 21.04.2026',
                            prices: [
                                { label: ROOM_TYPE.A, value: '' },
                                { label: ROOM_TYPE.B, value: '67€' },
                                { label: ROOM_TYPE.C, value: '83€' },
                                { label: ROOM_TYPE.D, value: '83€' },
                            ],
                            status: {
                                text: 'Nicht mehr buchbar',
                                type: 'error',
                            }
                        },
                        args.roomCount
                    )}
                </div>
            </toujou-departures>
        </main>
    `;
};

export const Tripdates = Template.bind({});

Tripdates.args = {
    roomCount: 2
}
