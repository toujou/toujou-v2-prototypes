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
} satisfies Meta;

const Template = () => {
    return `
        <ol class="item-collection">
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="event-table" element-design="default" item-orientation="horizontal" role="article">
                    <a href="#" class="event-table-card">
                        <div
                            class="calendar-pages event-table-card__calendar-pages"
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
                        <div class="event-table-card__content">
                            <h3 class="event-table-card__title">The artist formerly known as Prince</h3>
                        </div>

                        <toujou-chip class="chip event-table-card__chip" chip-size="extra-small" chip-bg-color="error">Abgesagt</toujou-chip>
                    </a>
                </toujou-collection-item>
            </li>

            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="event-table" element-design="default" item-orientation="horizontal" role="article">
                    <a href="#" class="event-table-card">
                        <div
                            class="calendar-pages event-table-card__calendar-pages"
                            aria-label="calendar page with date / time information"
                        >
                            <time class="calendar-page" datetime="2025-11-14" single-day>
                                <div class="calendar-page__date">
                                    <p class="calendar-page__month">Nov</p>
                                    <p class="calendar-page__day">14</p>
                                </div>
                                <div class="calendar-page__times">
                                    <p class="calendar-page__time-separator calendar-page__time-separator--word" aria-label="from">from</p>
                                    <p class="calendar-page__time calendar-page__time--start">12:30</p>
                                </div>
                            </time>
                        </div>
                        <div class="event-table-card__content">
                            <h3 class="event-table-card__title">The artist formerly known as Prince with a nice long description with a nice long description with a nice long description</h3>
                        </div>
                    </a>
                </toujou-collection-item>
            </li>

            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="event-table" element-design="default" item-orientation="horizontal" role="article">
                    <a href="#" class="event-table-card">
                        <div class="calendar-pages event-table-card__calendar-pages" aria-label="calendar page with date / time information">
                            <time class="calendar-page" datetime="2025-11-14">
                                <div class="calendar-page__date">
                                    <p class="calendar-page__month">Nov</p>
                                    <p class="calendar-page__day">14</p>
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
                            </time>
                        </div>
                        <div class="event-table-card__content">
                            <h3 class="event-table-card__title">Nice title</h3>
                        </div>

                        <toujou-chip class="chip event-table-card__chip" chip-size="extra-small" chip-bg-color="error">Abgesagt</toujou-chip>
                    </a>
                </toujou-collection-item>
            </li>

            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="event-table" element-design="default" item-orientation="horizontal" role="article">
                    <a href="#" class="event-table-card">
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
                        </div>
                    </a>
                </toujou-collection-item>
            </li>
        </ol>

        <section class="chapter" background-color="primary" font-color="primary-light">
            <ol class="item-collection">
                <li class="item-collection__item">
                    <toujou-collection-item class="collection-item" item-type="event-table" element-design="default" item-orientation="horizontal" role="article">
                        <a href="#" class="event-table-card">
                            <div
                                class="calendar-pages event-table-card__calendar-pages"
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
                            <div class="event-table-card__content">
                                <h3 class="event-table-card__title">The artist formerly known as Prince</h3>
                            </div>

                            <toujou-chip class="chip event-table-card__chip" chip-size="extra-small" chip-bg-color="error">Abgesagt</toujou-chip>
                        </a>
                    </toujou-collection-item>
                </li>

                <li class="item-collection__item">
                    <toujou-collection-item class="collection-item" item-type="event-table" element-design="default" item-orientation="horizontal" role="article">
                        <a href="#" class="event-table-card">
                            <div
                                class="calendar-pages event-table-card__calendar-pages"
                                aria-label="calendar page with date / time information"
                            >
                                <time class="calendar-page" datetime="2025-11-14" single-day>
                                    <div class="calendar-page__date">
                                        <p class="calendar-page__month">Nov</p>
                                        <p class="calendar-page__day">14</p>
                                    </div>
                                    <div class="calendar-page__times">
                                        <p class="calendar-page__time-separator calendar-page__time-separator--word" aria-label="from">from</p>
                                        <p class="calendar-page__time calendar-page__time--start">12:30</p>
                                    </div>
                                </time>
                            </div>
                            <div class="event-table-card__content">
                                <h3 class="event-table-card__title">The artist formerly known as Prince with a nice long description with a nice long description with a nice long description</h3>
                            </div>
                        </a>
                    </toujou-collection-item>
                </li>

                <li class="item-collection__item">
                    <toujou-collection-item class="collection-item" item-type="event-table" element-design="default" item-orientation="horizontal" role="article">
                        <a href="#" class="event-table-card">
                            <div class="calendar-pages event-table-card__calendar-pages" aria-label="calendar page with date / time information">
                                <time class="calendar-page" datetime="2025-11-14">
                                    <div class="calendar-page__date">
                                        <p class="calendar-page__month">Nov</p>
                                        <p class="calendar-page__day">14</p>
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
                                </time>
                            </div>
                            <div class="event-table-card__content">
                                <h3 class="event-table-card__title">Nice title</h3>
                            </div>

                            <toujou-chip class="chip event-table-card__chip" chip-size="extra-small" chip-bg-color="error">Abgesagt</toujou-chip>
                        </a>
                    </toujou-collection-item>
                </li>

                <li class="item-collection__item">
                    <toujou-collection-item class="collection-item" item-type="event-table" element-design="default" item-orientation="horizontal" role="article">
                        <a href="#" class="event-table-card">
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
                            </div>
                        </a>
                    </toujou-collection-item>
                </li>
            </ol>
        </section>
    `
};

export const EventTable = Template.bind({});

