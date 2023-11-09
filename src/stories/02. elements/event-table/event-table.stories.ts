import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import eventTableDocs from './event-table.docs.mdx';

export default {
    title: 'COMPONENTS/EventTable',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: eventTableDocs,
        },
    },
    tags: ['autodocs']
} as Meta;

const Template = () => {
    return `
        <ol class="item-collection">
            <li class="item-collection__item">
                <div class="event-table-card">
                    <div
                        class="calendar-pages event-table-card__calendar-pages"
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
                    <div
                        class="calendar-pages event-table-card__calendar-pages"
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
                    <div
                        class="calendar-pages event-table-card__calendar-pages"
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
                    <div
                        class="calendar-pages event-table-card__calendar-pages"
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

