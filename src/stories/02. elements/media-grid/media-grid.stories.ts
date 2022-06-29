import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import mediaGridDocs from "./media-grid.docs.mdx";

export default {
    title: 'COMPONENTS/Media',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/3d1d0926-79e2-4ae4-aa1c-162dcd451a3a-684e/screen/61e6af1e-563f-4ce8-92ba-ac3b191c5f0c/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: mediaGridDocs,
        }
    },
    argTypes: {
        mediaType: {
            table: {
                category: "Single media settings",
                defaultValue: { summary: 2 },
            },
            name: 'Media type',
            description: "Choose media type to display",
            options: ['image', 'video'],
            control: { type: 'radio' },
            defaultValue: [2],
            required: true,
        },
        numberOfCols: {
            table: {
                category: "Single media settings",
                defaultValue: { summary: '2' },
            },
            name: 'Number of columns',
            description: "Choose the number of columns for the media grid",
            options: [1, 2, 3, 4],
            control: { type: 'radio' },
            defaultValue: ['image'],
            required: true,
        },
    }
} as Meta;

interface SingleMediaStoryProps {
    mediaType: string;
    numberOfCols: number;
}

function createMediaElement(mediaType: string) {
    const singleMedia = document.createElement('toujou-single-media');
    singleMedia.classList.add('single-media');

    if (mediaType === 'image') {
        const mediaImage = document.createElement('img');
        mediaImage.classList.add('single-media__image');
        mediaImage.setAttribute('src', 'https://picsum.photos/1600/900');
        mediaImage.setAttribute('alt', 'Nice image');
        singleMedia.appendChild(mediaImage);
    } else {
        const mediaVideo = document.createElement('video');
        mediaVideo.classList.add('single-media__video');
        mediaVideo.setAttribute('type', 'video/mp4');
        mediaVideo.setAttribute('controls', '');
        mediaVideo.setAttribute('src', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4');
        singleMedia.appendChild(mediaVideo);
    }

    return singleMedia;
}

const Template: Story<SingleMediaStoryProps> = (args: SingleMediaStoryProps) => {
    const mediaGrid = document.createElement('div');
    mediaGrid.classList.add('media-grid');
    mediaGrid.setAttribute('media-grid-column-number', args.numberOfCols.toString());

    for(let i = 0; i < args.numberOfCols; i++) {
        const mediaEl = createMediaElement(args.mediaType);
        mediaGrid.appendChild(mediaEl)
    }

    return mediaGrid;
};

export const MediaGrid = Template.bind({});

MediaGrid.args = {
    mediaType: 'image',
    numberOfCols: 2,
}