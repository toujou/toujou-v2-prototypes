import {  Meta, StoryFn } from '@storybook/web-components-vite';

// @ts-ignore
import mediaPlaceholderDocs from './media-placeholder.docs.mdx';

export default {
    title: 'COMPONENTS/MediaPlaceholder',
    parameters: {
        docs: {
            page: mediaPlaceholderDocs,
        },
    },
    argTypes: {
        mediaType: {
            table: {
                category: "Single media settings",
            },
            name: 'Media type',
            description: "Choose media type to display",
            options: ['image', 'video', 'audio'],
            control: { type: 'radio' },
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface MediaPlaceholdderStoryProps {
    mediaType: string,
}

const Template: StoryFn<MediaPlaceholdderStoryProps> = (args: MediaPlaceholdderStoryProps) => {
    return `
        <main>
            <div class="demo-media-placeholder-container">
                <toujou-media-placeholder media-type="${args.mediaType}" class="media-placeholder"></toujou-media-placeholder>
            </div>
        </main>
    `;
};

export const MediaPlaceholder = Template.bind({});

MediaPlaceholder.args = {
    mediaType: 'image'
}
