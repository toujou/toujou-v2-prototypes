/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import mediaGridDocs from "./media-grid.docs.mdx";

export default {
    title: 'COMPONENTS/Media',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: mediaGridDocs,
        }
    },
    argTypes: {
        mediaType: {
            table: {
                category: "Single media settings",
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
    },
    tags: ['autodocs']
} satisfies Meta;

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

    const mediaInfo = `
        <toujou-media-info class="media-info">
            <button slot="open-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
            </button>
            <button slot="close-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                <toujou-icon class="icon" icon-color="background" icon-name="close" icon-size="ms"></toujou-icon>
            </button>
            <figpaction slot="figcaption" class="media-info__figcaption">This is a beautiful description</figpaction>
            <small slot="copyright" class="media-info__copyright">@Nice photographer</small>
        </toujou-media-info>
    `;

    singleMedia.innerHTML += mediaInfo;

    return singleMedia;
}

const Template: StoryFn<SingleMediaStoryProps> = (args: SingleMediaStoryProps) => {
    const mainEl = document.createElement('main');
    const mediaGrid = document.createElement('toujou-media-grid');
    mediaGrid.classList.add('media-grid');
    mediaGrid.setAttribute('media-grid-column-number', args.numberOfCols.toString());

    for(let i = 0; i < args.numberOfCols; i++) {
        const mediaEl = createMediaElement(args.mediaType);
        mediaGrid.appendChild(mediaEl)
    }

    mainEl.appendChild(mediaGrid);

    return mainEl;
};

export const MediaGrid = Template.bind({});

MediaGrid.args = {
    mediaType: 'image',
    numberOfCols: 2,
}
