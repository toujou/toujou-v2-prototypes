import { StoryFn, Meta } from '@storybook/web-components-vite';
// @ts-ignore
import calendarPagesDocs from './calendar-pages.docs.mdx';

export default {
    title: 'COMPONENTS/Calendar Pages',
    parameters: {
        docs: {
            page: calendarPagesDocs,
        },
    },
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta;

interface CalendarPagesStoryProps {
}

const Template: StoryFn<CalendarPagesStoryProps> = () => {
    return `
        <style>
            .calendar-pages-tests__pages-group {
                display: flex;
                flex-flow: row wrap;
                gap: var(--spacing-xxl);
            }
        </style>

        <div class="calendar-pages-tests">
            <h3>Different variant of the calendar-pages</h3>
            <h6 style="color: var(--color-font);">Single day inline</h6>

            <div class="calendar-pages-tests__pages-group">
                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                        inline
                    >
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                        </div>
                    </time>
                </div>
            </div>

            <h6 style="color: var(--color-font);">Single day without time</h6>

            <div class="calendar-pages-tests__pages-group">
                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                    >
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                            <p class="calendar-page__year">2025</p>
                        </div>
                    </time>
                </div>

                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                    >
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                        </div>
                    </time>
                </div>

            </div>

            <h6 style="color: var(--color-font);">Single day with time</h6>

            <div class="calendar-pages-tests__pages-group">
                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                    >
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

                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                    >
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                            <p class="calendar-page__time-separator" aria-label="until">-</p>
                            <p class="calendar-page__time calendar-page__time--end">22:00</p>
                        </div>
                    </time>
                </div>

                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                    >
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time-separator calendar-page__time-separator--word" aria-label="until">until</p>
                            <p class="calendar-page__time calendar-page__time--end">22:00</p>
                        </div>
                    </time>
                </div>

                <div
                    class="calendar-pages"
                    aria-label="calendar page with date / time information"
                >
                    <time
                        class="calendar-page"
                        datetime="2025-11-14"
                        single-day
                    >
                        <div class="calendar-page__date">
                            <p class="calendar-page__month">Nov</p>
                            <p class="calendar-page__day">14</p>
                            <p class="calendar-page__year">2025</p>
                        </div>
                        <div class="calendar-page__times">
                            <p class="calendar-page__time-separator calendar-page__time-separator--word" aria-label="until">from</p>
                            <p class="calendar-page__time calendar-page__time--end">22:00</p>
                        </div>
                    </time>
                </div>
            </div>

            <h6 style="color: var(--color-font);">Multiday without time</h6>

            <div class="calendar-pages-tests__pages-group">
                <div class="calendar-pages" aria-label="calendar page with date / time information">
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
                <div class="calendar-pages" aria-label="calendar page with date / time information">
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
            </div>

            <h6 style="color: var(--color-font);">Multiday with time</h6>

            <div class="calendar-pages-tests__pages-group">
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
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                        </div>
                    </time>
                </div>

                <div
                    class="calendar-pages"
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

                <div
                    class="calendar-pages"
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
                    </time>
                </div>

            </div>
        </div>

    `
};

export const CalendarPages = Template.bind({});

CalendarPages.args = {}
