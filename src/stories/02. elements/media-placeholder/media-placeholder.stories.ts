import {  Meta, Story } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import mediaPlaceholderDocs from './media-placeholder.docs.mdx';

export default {
    title: 'COMPONENTS/MediaPlaceholder',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: mediaPlaceholderDocs,
        },
    },
    argTypes: {
        mediaType: {
            table: {
                category: "Single media settings",
                defaultValue: { summary: 2 },
            },
            name: 'Media type',
            description: "Choose media type to display",
            options: ['image', 'video', 'audio'],
            control: { type: 'radio' },
            defaultValue: [2],
            required: true,
        },
    }
} as Meta;

interface MediaPlaceholdderStoryProps {
    mediaType: string,
}

const Template: Story<MediaPlaceholdderStoryProps> = (args: MediaPlaceholdderStoryProps) => {
    return `
        <div class="demo-media-placeholder-container">
            <toujou-media-placeholder media-type="${args.mediaType}" class="media-placeholder"></toujou-media-placeholder>
        </div>
    `;
};

export const MediaPlaceholder = Template.bind({});

MediaPlaceholder.args = {
    mediaType: 'image'
}
