import { Story, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import mediaDateDocs from './media-date.docs.mdx';

export default {
    title: 'COMPONENTS/MediaDate',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: mediaDateDocs,
        },
        layout: 'fullscreen'
    },
    argTypes: {
        singleMonth: {
            table: {
                category: "Media date Settings",
                defaultValue: { summary: false },
            },
            name: 'Single month',
            description: "Toggle between single oder multiple month",
            control: { type: 'boolean' },
            defaultValue: [false],
            required: true,
        },
        singleDay: {
            table: {
                category: "Media date Settings",
                defaultValue: { summary: false },
            },
            name: 'Single day',
            description: "Toggle between single oder multiple days",
            control: { type: 'boolean' },
            defaultValue: [false],
            required: true,
        },
        singleYear: {
            table: {
                category: "Media date Settings",
                defaultValue: { summary: false },
            },
            name: 'Single year',
            description: "Toggle between single oder multiple years",
            control: { type: 'boolean' },
            defaultValue: [false],
            required: true,
        },
    }
} as Meta;

interface MediaDateStoryProps {
    singleMonth: boolean;
    singleDay: boolean;
    singleYear: boolean;
}

const Template: Story<MediaDateStoryProps> = (args: MediaDateStoryProps) => {
    return `
        <style>
            body {
                background-color: var(--color-primary-dark);
            }
        </style>
        <div class="media-date">
            <div class="media-date__months">
                <span class="media-date__month">Jun</span>
                ${args.singleMonth || args.singleDay ? `` : `
                    <span class="media-date__month">Sep</span>
                `}
            </div>
            <div class="media-date__days">
                <span class="media-date__day">25</span>
                ${args.singleDay ? `` : `
                    <span class="media-date__day-separator">-</span>
                    <span class="media-date__day">12</span>
                `}
            </div>
            <div class="media-date__years">
                <span class="media-date__year">2023</span>
                ${args.singleYear || args.singleDay ? `` : `
                    <span class="media-date__year">2025</span>
                `}
            </div>
        </div>
    `;
};

export const MediaDate = Template.bind({});

MediaDate.args = {
    singleMonth: false,
    singleDay: false,
    singleYear: false
}

