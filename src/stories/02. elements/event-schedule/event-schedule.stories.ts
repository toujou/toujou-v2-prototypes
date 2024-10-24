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
} satisfies Meta;

const eventScheduleComponent = () => {
    return `
        <event-schedule class="event-schedule">

            <event-schedule-year class="event-schedule-year">
                <h3 class="event-schedule-year__headline">2023</h3>

                <event-schedule-day class="event-schedule-day">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Nov</p>
                                <p class="calendar-page__day">14</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">von 10:30</p>
                                <h4 class="event-schedule-item__title">Hackathon for freedom <span class="event-schedule-item__title-step">(1/3)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">von 08:30</p>
                                <h4 class="event-schedule-item__title">Guitar lessons for beginners <span class="event-schedule-item__title-step">(1/2)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">bis 18:30</p>
                                <h4 class="event-schedule-item__title">Ted Talk: Reef fish and pollution causing the decline of nature</h4>
                                <toujou-chip class="chip event-schedule-item__chip" chip-size="extra-small" chip-bg-color="error">Abgesagt</toujou-chip>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

                <event-schedule-day class="event-schedule-day">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Nov</p>
                                <p class="calendar-page__day">15</p>
                                <p class="calendar-page__year">2025</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">All day</p>
                                <h4 class="event-schedule-item__title">Hackathon for freedom <span class="event-schedule-item__title-step">(2/3)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">bis 20:30</p>
                                <h4 class="event-schedule-item__title">Guitar lessons for beginners <span class="event-schedule-item__title-step">(2/2)</span></h4>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

                <event-schedule-day class="event-schedule-day">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Nov</p>
                                <p class="calendar-page__day">16</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">bis 16:30</p>
                                <h4 class="event-schedule-item__title">Hackathon for freedom <span class="event-schedule-item__title-step">(3/3)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">08:30 - 14:30</p>
                                <h4 class="event-schedule-item__title">Discussion group for the new house</h4>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

            </event-schedule-year>

            <event-schedule-year class="event-schedule-year">
                <h3 class="event-schedule-year__headline">2024</h3>

                <event-schedule-day class="event-schedule-day">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Jan</p>
                                <p class="calendar-page__day">04</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">von 10:300</p>
                                <h4 class="event-schedule-item__title">Hackathon for freedom <span class="event-schedule-item__title-step">(1/3)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">von 08:30</p>
                                <h4 class="event-schedule-item__title">Guitar lessons for beginners <span class="event-schedule-item__title-step">(1/4)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">bis 18:30</p>
                                <h4 class="event-schedule-item__title">Ted Talk: Reef fish and pollution causing the decline of nature</h4>
                                <toujou-chip class="chip event-schedule-item__chip" chip-size="extra-small" chip-bg-color="error">Abgesagt</toujou-chip>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

                <event-schedule-day class="event-schedule-day">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Jan</p>
                                <p class="calendar-page__day">05</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">All day</p>
                                <h4 class="event-schedule-item__title">Hackathon for freedom <span class="event-schedule-item__title-step">(2/3)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">All day</p>
                                <h4 class="event-schedule-item__title">Guitar lessons for beginners <span class="event-schedule-item__title-step">(2/4)</span></h4>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

                <event-schedule-day class="event-schedule-day">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Jan</p>
                                <p class="calendar-page__day">06</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">bis 18:30</p>
                                <h4 class="event-schedule-item__title">Hackathon for freedom <span class="event-schedule-item__title-step">(3/3)</span></h4>
                            </a>
                        </li>
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">All day</p>
                                <h4 class="event-schedule-item__title">Guitar lessons for beginners <span class="event-schedule-item__title-step">(3/4)</span></h4>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

                <event-schedule-day class="event-schedule-day">
                    <div class="calendar-pages event-schedule-day__calendar-page" aria-label="calendar page with date / time information">
                        <time class="calendar-page" datetime="2025-11-14" single-day>
                            <div class="calendar-page__date">
                                <p class="calendar-page__month">Jan</p>
                                <p class="calendar-page__day">07</p>
                            </div>
                        </time>
                    </div>

                    <ul class="event-schedule-day__list">
                        <li class="event-schedule-day__item">
                            <a href="#" class="event-schedule-item">
                                <p class="event-schedule-item__time">bis 20:00</p>
                                <h4 class="event-schedule-item__title">Guitar lessons for beginners <span class="event-schedule-item__title-step">(4/4)</span></h4>
                            </a>
                        </li>
                    </ul>
                </event-schedule-day>

            </event-schedule-year>

        </event-schedule>
    `;
}

const Template = () => {
    return `
        <main>
            ${eventScheduleComponent()}

            <section class="chapter" background-color="primary" font-color="primary-light">
                ${eventScheduleComponent()}
            </section>
        </main>
    `
};

export const EventSchedule = Template.bind({});

