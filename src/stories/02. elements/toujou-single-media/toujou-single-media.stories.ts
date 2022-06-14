import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import ToujouSingleMediaDocs from "./toujou-single-media.docs.mdx";

export default {
    title: 'COMPONENTS/Media',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/3d1d0926-79e2-4ae4-aa1c-162dcd451a3a-684e/screen/61e6af1e-563f-4ce8-92ba-ac3b191c5f0c/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: ToujouSingleMediaDocs,
        }
    },
    argTypes: {
        mediaType: {
            table: {
                category: "Single media settings",
                defaultValue: { summary: 'image' },
            },
            name: 'Media type',
            description: "Choose media type to display",
            options: ['image', 'video'],
            control: { type: 'radio' },
            defaultValue: ['image'],
            required: true,
        },
    }
} as Meta;

interface ToujouSingleMediaStoryProps {
    mediaType: string;
}

const Template: Story<ToujouSingleMediaStoryProps> = (args: ToujouSingleMediaStoryProps) => {
    const singleMedia = document.createElement('toujou-single-media');
    singleMedia.classList.add('toujou-single-media');

    if (args.mediaType === 'image') {
        const mediaImage = document.createElement('img');
        mediaImage.classList.add('toujou-single-media__image');
        mediaImage.setAttribute('src', 'https://picsum.photos/1600/900');
        mediaImage.setAttribute('alt', 'Nice image');
        singleMedia.appendChild(mediaImage);
    } else {
        const mediaVideo = document.createElement('video');
        mediaVideo.classList.add('toujou-single-media__video');
        mediaVideo.setAttribute('type', 'video/mp4');
        mediaVideo.setAttribute('controls', '');
        mediaVideo.setAttribute('src', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4');
        singleMedia.appendChild(mediaVideo);
    }


    return singleMedia;
};

export const SingleMedia = Template.bind({});

SingleMedia.args = {
    mediaType: 'image',
}