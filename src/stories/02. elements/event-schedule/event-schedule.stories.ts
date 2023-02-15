import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import eventScheduleDocs from './event-schedule.docs.mdx';

export default {
    title: 'COMPONENTS/EventSchedule',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: eventScheduleDocs,
        },
    },
} as Meta;

const Template = () => {
    return `
        <ul class="card-collection">
            <li class="card-collection__item">
                <toujou-collection-item
                    class="collection-item"
                    item-type="event-schedule"
                    element-design="default"
                    item-orientation="vertical"
                    role="article"
                >
                    <div class="event-schedule">
                        <div class="event-schedule__top">
                            <time datetime="2023-06-14" class="media-date" aria-label="2023-06-14" inline>
                                <div class="media-date__months" aria-hidden="true">
                                    <span class="media-date__month">Jun</span>
                                        <span class="media-date__month-separator">-</span>
                                        <span class="media-date__month">Jul</span> 
                                </div>
                                <div class="media-date__days" aria-hidden="true">
                                    <span class="media-date__day">14</span>
                                        <span class="media-date__day-separator">-</span>
                                        <span class="media-date__day">16</span>
                                </div>
                                <div class="media-date__years" aria-hidden="true">
                                    <span class="media-date__year">2023</span>                                
                                </div>
                            </time>
                            <toujou-chip class="chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>
                        </div>
                        <div class="event-schedule__content">
                            <h3 class="event-schedule__title">The artist formerly known as Prince</h3>
                            <p class="event-schedule__info">
                                <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                                <span class="event-schedule__info-text">Meistersingerhalle - Nürnberg</span>
                            </p>
                        </div>
                        <a href="#" class="event-schedule__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>

                </toujou-collection-item>
            </li>
            
            <li class="card-collection__item">
                <toujou-collection-item
                    class="collection-item"
                    item-type="event-schedule"
                    element-design="default"
                    item-orientation="vertical"
                    role="article"
                >
                    <div class="event-schedule">
                        <div class="event-schedule__top">
                            <time datetime="2023-06-14" class="media-date" aria-label="2023-06-14" inline>
                                <div class="media-date__months" aria-hidden="true">
                                    <span class="media-date__month">Jun</span>
                                        <span class="media-date__month-separator">-</span>
                                        <span class="media-date__month">Jul</span> 
                                </div>
                                <div class="media-date__days" aria-hidden="true">
                                    <span class="media-date__day">14</span>
                                        <span class="media-date__day-separator">-</span>
                                        <span class="media-date__day">16</span>
                                </div>
                                <div class="media-date__years" aria-hidden="true">
                                    <span class="media-date__year">2023</span>                                
                                </div>
                            </time>
                            <toujou-chip class="chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>
                        </div>
                        <div class="event-schedule__content">
                            <h3 class="event-schedule__title">The artist formerly known as Prince</h3>
                            <p class="event-schedule__info">
                                <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                                <span class="event-schedule__info-text">Meistersingerhalle - Nürnberg</span>
                            </p>
                        </div>
                        <a href="#" class="event-schedule__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>

                </toujou-collection-item>
            </li>
            
            <li class="card-collection__item">
                <toujou-collection-item
                    class="collection-item"
                    item-type="event-schedule"
                    element-design="default"
                    item-orientation="vertical"
                    role="article"
                >
                    <div class="event-schedule">
                        <div class="event-schedule__top">
                            <time datetime="2023-06-14" class="media-date" aria-label="2023-06-14" inline>
                                <div class="media-date__months" aria-hidden="true">
                                    <span class="media-date__month">Jun</span>
                                        <span class="media-date__month-separator">-</span>
                                        <span class="media-date__month">Jul</span> 
                                </div>
                                <div class="media-date__days" aria-hidden="true">
                                    <span class="media-date__day">14</span>
                                        <span class="media-date__day-separator">-</span>
                                        <span class="media-date__day">16</span>
                                </div>
                                <div class="media-date__years" aria-hidden="true">
                                    <span class="media-date__year">2023</span>                                
                                </div>
                            </time>
                            <toujou-chip class="chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>
                        </div>
                        <div class="event-schedule__content">
                            <h3 class="event-schedule__title">The artist formerly known as Prince</h3>
                            <p class="event-schedule__info">
                                <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                                <span class="event-schedule__info-text">Meistersingerhalle - Nürnberg</span>
                            </p>
                        </div>
                        <a href="#" class="event-schedule__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>

                </toujou-collection-item>
            </li>
            
            <li class="card-collection__item">
                <toujou-collection-item
                    class="collection-item"
                    item-type="event-schedule"
                    element-design="default"
                    item-orientation="vertical"
                    role="article"
                >
                    <div class="event-schedule">
                        <div class="event-schedule__top">
                            <time datetime="2023-06-14" class="media-date" aria-label="2023-06-14" inline>
                                <div class="media-date__months" aria-hidden="true">
                                    <span class="media-date__month">Jun</span>
                                        <span class="media-date__month-separator">-</span>
                                        <span class="media-date__month">Jul</span> 
                                </div>
                                <div class="media-date__days" aria-hidden="true">
                                    <span class="media-date__day">14</span>
                                        <span class="media-date__day-separator">-</span>
                                        <span class="media-date__day">16</span>
                                </div>
                                <div class="media-date__years" aria-hidden="true">
                                    <span class="media-date__year">2023</span>                                
                                </div>
                            </time>
                            <toujou-chip class="chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>
                        </div>
                        <div class="event-schedule__content">
                            <h3 class="event-schedule__title">The artist formerly known as Prince</h3>
                            <p class="event-schedule__info">
                                <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                                <span class="event-schedule__info-text">Meistersingerhalle - Nürnberg</span>
                            </p>
                        </div>
                        <a href="#" class="event-schedule__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>

                </toujou-collection-item>
            </li>
        </ul> 
    `
};

export const EventSchedule = Template.bind({});

