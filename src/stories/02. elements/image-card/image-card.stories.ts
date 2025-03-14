/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import imageCardDocs from './image-card.docs.mdx';

export default {
    title: 'COMPONENTS/Image Card',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: imageCardDocs,
        }
    },
    argTypes: {
        imageFormat: {
            table: {
                category: "Image card settings",
                defaultValue: { summary: '16-9' },
            },
            name: 'Image format',
            description: "Set the image card's image format",
            options: ['16-9', 'square'],
            control: { type: 'radio' },
            required: true,
        },
        cardsAreLinks: {
            table: {
                category: "Image card settings",
            },
            name: 'Cards are links',
            description: "Choose if the cards should be a link or not",
            control: { type: 'boolean' },
            required: true,
        },
        columnCount: {
            table: {
                category: "Image card settings",
            },
            name: 'Column count',
            description: "Number of columns",
            options: [1, 2, 3, 4],
            control: { type: 'radio' },
            required: true,
        },
        cardVariant: {
            table: {
                category: "Image card settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Card variant',
            description: "Set the image card element design",
            options: ['default', 'primary', 'secondary', 'inverted'],
            control: { type: 'radio' },
            required: true,
        },
    },
} satisfies Meta;

function createImageCardLink(imageFormat: string, cardVariant: string): string {
    return `
        <a class="image-card" href="#" image-format="${imageFormat}" card-variant="${cardVariant}">
            <figure class="image-card__figure">
                <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
            </figure>
            <h3 class="image-card__title">
                <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                Beautiful title
            </h3>
        </a>
    `;
}

function createImageCardElement(imageFormat: string, cardVariant: string): string {
    return `
        <toujou-image-card class="image-card" image-format="${imageFormat}" card-variant="${cardVariant}">
            <figure class="image-card__figure">
                <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
            </figure>
            <h3 class="image-card__title">
                <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                Beautiful title
            </h3>
        </toujou-image-card>
    `;
}

interface ToujouImageCardStoryProps {
    columnCount: number;
    imageFormat: string;
    cardsAreLinks: boolean,
    cardVariant: string
}

const Template: StoryFn<ToujouImageCardStoryProps> = (args: ToujouImageCardStoryProps) => {
    const toujouImageCardGrid = document.createElement('toujou-image-card-grid');
    toujouImageCardGrid.classList.add('image-card-grid');

    for (let i = 0; i < args.columnCount; i++) {
        const imageCard = args.cardsAreLinks
            ? createImageCardLink(args.imageFormat, args.cardVariant)
            : createImageCardElement(args.imageFormat, args.cardVariant);
        toujouImageCardGrid.insertAdjacentHTML('beforeend', imageCard);
    }

    const mainEl = document.createElement('main');
    mainEl.appendChild(toujouImageCardGrid);

    return mainEl;
};

export const ImageCard = Template.bind({});

ImageCard.args = {
    imageFormat: '16-9',
    columnCount: 4,
    cardsAreLinks: true,
    cardVariant: 'default',
}
