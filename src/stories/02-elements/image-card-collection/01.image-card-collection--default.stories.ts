/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { StoryFn, Meta } from '@storybook/web-components-vite';

export default {
    title: 'COMPONENTS/CollectionImageCards',
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

function createMediaInfoElement() {
    return `
        <toujou-media-info class="media-info">
            <button slot="open-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
            </button>
            <button slot="close-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                <toujou-icon class="icon" icon-color="background" icon-name="close" icon-size="ms"></toujou-icon>
            </button>
            <figcaption slot="figcaption" class="media-info__figcaption">This is a beautiful description</figcaption>
            <small slot="copyright" class="media-info__copyright">@Nice photographer</small>
        </toujou-media-info>
    `;
}

function createImageCardLink(imageFormat: string, cardVariant: string): string {
    return `
        <a class="image-card" href="#" image-format="${imageFormat}" card-variant="${cardVariant}">
            <figure class="image-card__figure">
                <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
                ${createMediaInfoElement()}
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
                ${createMediaInfoElement()}
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

export const ImageCardDefault = Template.bind({});

ImageCardDefault.args = {
    imageFormat: '16-9',
    columnCount: 4,
    cardsAreLinks: true,
    cardVariant: 'default',
}
