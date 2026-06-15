/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { StoryFn, Meta } from '@storybook/web-components-vite';
import '../../../shared/js/utils/video-autoplay/video-autoplay'

export default {
    title: 'COMPONENTS/Media',
    argTypes: {
        autoplay: {
            table: {
                category: "Video settings",
            },
            name: 'Video autoplay',
            description: "Choose autoplay setting for the video element",
            control: { type: 'boolean' },
            required: true,
        },
    },
} satisfies Meta;

interface VideoAutoplayProps {
    autoplay: boolean;
}

const Template: StoryFn<VideoAutoplayProps> = (args: VideoAutoplayProps) => {
    return `
        <video
            playsinline
            poster
            loop
            class="video"
            controls
            ${args.autoplay ? 'data-is-autoplay="1"' : ''}
            ${args.autoplay ? 'muted' : ''}
            src="https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4"
        ></video>
`;
};

export const VideoAutoplay = Template.bind({});

VideoAutoplay.args = {
    autoplay: true,
}
