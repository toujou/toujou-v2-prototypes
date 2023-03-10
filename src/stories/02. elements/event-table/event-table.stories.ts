import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import eventTableDocs from './event-table.docs.mdx';

export default {
    title: 'COMPONENTS/EventTable',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: eventTableDocs,
        },
    },
} as Meta;

const Template = () => {
    return `
        <ol class="item-collection">
            <li class="item-collection__item">
                <div class="event-table-card">
                    <time datetime="2023-06-14" class="media-date event-table-card__media-date" inline>
                        <div class="media-date__months">
                            <span class="media-date__month">Jun</span>
                                <span class="media-date__month-separator">-</span>
                                <span class="media-date__month">Jul</span> 
                        </div>
                        <div class="media-date__days">
                            <span class="media-date__day">14</span>
                                <span class="media-date__day-separator">-</span>
                                <span class="media-date__day">16</span>
                        </div>
                        <div class="media-date__years">
                            <span class="media-date__year">2023</span>                                
                        </div>
                    </time>
                    
                    <div class="event-table-card__content">
                        <h3 class="event-table-card__title">The artist formerly known as Prince</h3>
                        <p class="event-table-card__info">
                            <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                            <span class="event-table-card__info-text">Meistersingerhalle - Nürnberg</span>
                        </p>
                        <a href="#" class="event-table-card__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>
                    
                    <toujou-chip class="chip event-table-card__chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>

                </div>
            </li>
            
            <li class="item-collection__item">
                <div class="event-table-card">
                    <time datetime="2023-06-14" class="media-date event-table-card__media-date" inline>
                        <div class="media-date__months">
                            <span class="media-date__month">Jun</span>
                        </div>
                        <div class="media-date__days">
                            <span class="media-date__day">14</span>
                        </div>
                        <div class="media-date__years">
                            <span class="media-date__year">2023</span>                                
                        </div>
                    </time>
                    
                    <div class="event-table-card__content">
                        <h3 class="event-table-card__title">The artist formerly known as Prince</h3>
                        <p class="event-table-card__info">
                            <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                            <span class="event-table-card__info-text">Meistersingerhalle - Nürnberg</span>
                        </p>
                        <a href="#" class="event-table-card__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>
                </div>
            </li>
            
            <li class="item-collection__item">
                <div class="event-table-card">
                    <time datetime="2023-06-14" class="media-date event-table-card__media-date" inline>
                        <div class="media-date__months">
                            <span class="media-date__month">Jun</span>
                                <span class="media-date__month-separator">-</span>
                                <span class="media-date__month">Jul</span> 
                        </div>
                        <div class="media-date__days">
                            <span class="media-date__day">14</span>
                                <span class="media-date__day-separator">-</span>
                                <span class="media-date__day">16</span>
                        </div>
                        <div class="media-date__years">
                            <span class="media-date__year">2023</span>                                
                        </div>
                    </time>
                    
                    <div class="event-table-card__content">
                        <h3 class="event-table-card__title">The artist formerly known as Prince</h3>
                        <p class="event-table-card__info">
                            <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                            <span class="event-table-card__info-text">Meistersingerhalle - Nürnberg</span>
                        </p>
                        <a href="#" class="event-table-card__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>
                    
                    <toujou-chip class="chip event-table-card__chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>

                </div>
            </li>
            
            <li class="item-collection__item">
                <div class="event-table-card">
                    <time datetime="2023-06-14" class="media-date event-table-card__media-date" inline>
                        <div class="media-date__months">
                            <span class="media-date__month">Jun</span>
                                <span class="media-date__month-separator">-</span>
                                <span class="media-date__month">Jul</span> 
                        </div>
                        <div class="media-date__days">
                            <span class="media-date__day">14</span>
                                <span class="media-date__day-separator">-</span>
                                <span class="media-date__day">16</span>
                        </div>
                        <div class="media-date__years">
                            <span class="media-date__year">2023</span>                                
                        </div>
                    </time>
                    
                    <div class="event-table-card__content">
                        <h3 class="event-table-card__title">The artist formerly known as Prince</h3>
                        <p class="event-table-card__info">
                            <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                            <span class="event-table-card__info-text">Meistersingerhalle - Nürnberg</span>
                        </p>
                        <a href="#" class="event-table-card__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>
                </div>
            </li>
        </ol>
    `
};

export const EventTable = Template.bind({});

