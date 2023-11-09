import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import calendarPagesDocs from './calendar-pages.docs.mdx';

export default {
    title: 'COMPONENTS/Calendar Pages',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: calendarPagesDocs,
        },
        layout: 'centered'
    },
    argTypes: {
        asGroup: {
            table: {
                category: "Calendar pages Settings",
                defaultValue: { summary: 'normal' },
            },
            name: 'Show as group',
            description: "Show the whole element as a group",
            control: { type: 'boolean' },
            required: true,
        },
        showTimes: {
            table: {
                category: "Calendar pages Settings",
                defaultValue: { summary: 'normal' },
            },
            name: 'Show times',
            description: "Show the time elements on the calendar pages",
            control: { type: 'boolean' },
            required: true,
        },
        singleDate: {
            table: {
                category: "Calendar pages Settings",
                defaultValue: { summary: 'normal' },
            },
            name: 'Show single date',
            description: "Show a single date",
            control: { type: 'boolean' },
            required: true,
        },
    },
    tags: ['autodocs']
} as Meta;

interface CalendarPagesStoryProps {
    asGroup: boolean;
    showTimes: boolean;
    singleDate: boolean;
}

const Template: StoryFn<CalendarPagesStoryProps> = (args: CalendarPagesStoryProps) => {
    return `
        <div
            class="calendar-pages"
            ${args.asGroup ? 'as-group' : ''}
            aria-label="calendar page with date / time information"
        >
            <time class="calendar-page" datetime="2025-11-14">
                <div class="calendar-page__date">
                    <p class="calendar-page__month">Nov</p>
                    <p class="calendar-page__day">14</p>
                    <p class="calendar-page__year">2025</p>
                </div>
                ${args.showTimes ? `
                    <div class="calendar-page__times">
                        <p class="calendar-page__time calendar-page__time--start">12:30</p>
                        <p class="calendar-page__time-separator" aria-label="until">-</p>
                        <p class="calendar-page__time calendar-page__time--end">22:00</p>
                    </div>
                ` : ''}
            </time>
            ${args.singleDate ? '' : `
                <span class="calendar-pages__until" aria-hidden="true">
                    <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                </span>
                <time class="calendar-page" datetime="2025-11-16">
                    <div class="calendar-page__date">
                        <p class="calendar-page__month">Nov</p>
                        <p class="calendar-page__day">16</p>
                        <p class="calendar-page__year">2025</p>
                    </div>
                    ${args.showTimes ? `
                        <div class="calendar-page__times">
                            <p class="calendar-page__time calendar-page__time--start">12:30</p>
                            <p class="calendar-page__time-separator" aria-label="until">-</p>
                            <p class="calendar-page__time calendar-page__time--end">22:00</p>
                        </div>
                    ` : ''}
                </time>
            `}
        </div>
    `
};

export const CalendarPages = Template.bind({});

CalendarPages.args = {
    asGroup: false,
    showTimes: true,
    singleDate: false,
}
