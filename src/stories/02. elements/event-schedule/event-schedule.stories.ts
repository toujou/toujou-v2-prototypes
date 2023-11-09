import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import eventScheduleDocs from './event-schedule.docs.mdx';

export default {
    title: 'COMPONENTS/EventSchedule',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: eventScheduleDocs,
        },
    },
    tags: ['autodocs']
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
                    <div class="event-schedule-card">
                        <div class="event-schedule-card__top">
                            <div
                                class="calendar-pages"
                                aria-label="calendar page with date / time information"
                            >
                                <time class="calendar-page" datetime="2025-11-14">
                                    <div class="calendar-page__date">
                                        <p class="calendar-page__month">Nov</p>
                                        <p class="calendar-page__day">14</p>
                                        <p class="calendar-page__year">2025</p>
                                    </div>
                                </time>

                                <span class="calendar-pages__until" aria-hidden="true">
                                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                                </span>

                                <time class="calendar-page" datetime="2025-11-16">
                                    <div class="calendar-page__date">
                                        <p class="calendar-page__month">Nov</p>
                                        <p class="calendar-page__day">16</p>
                                        <p class="calendar-page__year">2025</p>
                                    </div>
                                </time>
                            </div>
                            <toujou-chip class="chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>
                        </div>
                        <div class="event-schedule-card__content">
                            <h3 class="event-schedule-card__title">The artist formerly known as Prince</h3>
                            <p class="event-schedule-card__info">
                                <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                                <span class="event-schedule-card__info-text">Meistersingerhalle - Nürnberg</span>
                            </p>
                        </div>
                        <a href="#" class="event-schedule-card__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>

                </toujou-collection-item>
            </li>

            <li class="card-collection__item">
                <toujou-collection-item
                    class="collection-item"
                    item-type="event-schedule-card"
                    element-design="default"
                    item-orientation="vertical"
                    role="article"
                >
                    <div class="event-schedule-card">
                        <div class="event-schedule-card__top">
                            <div
                                class="calendar-pages"
                                aria-label="calendar page with date / time information"
                            >
                                <time class="calendar-page" datetime="2025-11-14">
                                    <div class="calendar-page__date">
                                        <p class="calendar-page__month">Nov</p>
                                        <p class="calendar-page__day">14</p>
                                        <p class="calendar-page__year">2025</p>
                                    </div>
                                    <div class="calendar-page__times">
                                        <p class="calendar-page__time calendar-page__time--start">12:30</p>
                                        <p class="calendar-page__time-separator" aria-label="until">-</p>
                                        <p class="calendar-page__time calendar-page__time--end">22:00</p>
                                    </div>
                                </time>
                            </div>
                            <toujou-chip class="chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>
                        </div>
                        <div class="event-schedule-card__content">
                            <h3 class="event-schedule-card__title">The artist formerly known as Prince</h3>
                            <p class="event-schedule-card__info">
                                <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                                <span class="event-schedule-card__info-text">Meistersingerhalle - Nürnberg</span>
                            </p>
                        </div>
                        <a href="#" class="event-schedule-card__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>

                </toujou-collection-item>
            </li>

            <li class="card-collection__item">
                <toujou-collection-item
                    class="collection-item"
                    item-type="event-schedule-card"
                    element-design="default"
                    item-orientation="vertical"
                    role="article"
                >
                    <div class="event-schedule-card">
                        <div class="event-schedule-card__top">
                            <div
                                class="calendar-pages"
                                aria-label="calendar page with date / time information"
                            >
                                <time class="calendar-page" datetime="2025-11-14">
                                    <div class="calendar-page__date">
                                        <p class="calendar-page__month">Nov</p>
                                        <p class="calendar-page__day">14</p>
                                        <p class="calendar-page__year">2025</p>
                                    </div>
                                </time>

                                <span class="calendar-pages__until" aria-hidden="true">
                                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                                </span>

                                <time class="calendar-page" datetime="2025-11-16">
                                    <div class="calendar-page__date">
                                        <p class="calendar-page__month">Nov</p>
                                        <p class="calendar-page__day">16</p>
                                        <p class="calendar-page__year">2025</p>
                                    </div>
                                </time>
                            </div>
                            <toujou-chip class="chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>
                        </div>
                        <div class="event-schedule-card__content">
                            <h3 class="event-schedule-card__title">The artist formerly known as Prince</h3>
                            <p class="event-schedule-card__info">
                                <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                                <span class="event-schedule-card__info-text">Meistersingerhalle - Nürnberg</span>
                            </p>
                        </div>
                        <a href="#" class="event-schedule-card__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            Mehr Informationen
                        </a>
                    </div>

                </toujou-collection-item>
            </li>

            <li class="card-collection__item">
                <toujou-collection-item
                    class="collection-item"
                    item-type="event-schedule-card"
                    element-design="default"
                    item-orientation="vertical"
                    role="article"
                >
                    <div class="event-schedule-card">
                        <div class="event-schedule-card__top">
                            <div
                                class="calendar-pages"
                                aria-label="calendar page with date / time information"
                            >
                                <time class="calendar-page" datetime="2025-11-14">
                                    <div class="calendar-page__date">
                                        <p class="calendar-page__month">Nov</p>
                                        <p class="calendar-page__day">14</p>
                                        <p class="calendar-page__year">2025</p>
                                    </div>
                                </time>
                            </div>
                            <toujou-chip class="chip" chip-size="small" chip-bg-color="error">Event abgesagt</toujou-chip>
                        </div>
                        <div class="event-schedule-card__content">
                            <h3 class="event-schedule-card__title">The artist formerly known as Prince</h3>
                            <p class="event-schedule-card__info">
                                <toujou-icon class="icon" icon-name="info" icon-color="primary" icon-size="ms"></toujou-icon>
                                <span class="event-schedule-card__info-text">Meistersingerhalle - Nürnberg</span>
                            </p>
                        </div>
                        <a href="#" class="event-schedule-card__button">
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

