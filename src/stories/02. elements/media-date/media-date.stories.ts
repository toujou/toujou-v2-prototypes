import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import mediaDateDocs from './media-date.docs.mdx';

export default {
    title: 'COMPONENTS/MediaDate',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
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
    },
    tags: ['autodocs']
} as Meta;

interface MediaDateStoryProps {
    singleMonth: boolean;
    singleDay: boolean;
    singleYear: boolean;
}

const Template: StoryFn<MediaDateStoryProps> = (args: MediaDateStoryProps) => {
    return `
        <style>
            body {
                background-color: var(--color-primary-dark);
            }
        </style>
        <time datetime="2023-06-14" class="media-date">
            <div class="media-date__months">
                <span class="media-date__month">Jun</span>
                ${args.singleMonth || args.singleDay ? `` : `
                    <span class="media-date__month-separator">-</span>
                    <span class="media-date__month">Jul</span>
                `}
            </div>
            <div class="media-date__days">
                <span class="media-date__day">14</span>
                ${args.singleDay ? `` : `
                    <span class="media-date__day-separator">-</span>
                    <span class="media-date__day">16</span>
                `}
            </div>
            <div class="media-date__years">
                <span class="media-date__year">2023</span>
                ${args.singleYear || args.singleDay ? `` : `
                    <span class="media-date__year-separator">-</span>
                    <span class="media-date__year">2023</span>
                `}
            </div>
        </time>
    `;
};

export const MediaDate = Template.bind({});

MediaDate.args = {
    singleMonth: false,
    singleDay: false,
    singleYear: false
}

