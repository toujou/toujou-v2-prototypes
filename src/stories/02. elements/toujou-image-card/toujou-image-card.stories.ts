import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/badgeCustomConfig.js'

// @ts-ignore
import ToujouImageCardDocs from './toujou-image-card.docs.mdx';

export default {
    title: 'COMPONENTS/Image Card',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/3d1d0926-79e2-4ae4-aa1c-162dcd451a3a-684e/screen/f783e300-5752-4a6a-8ed9-05047ec22750/Desktop',
        },
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: ToujouImageCardDocs,
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
            defaultValue: ['cinema'],
            required: true,
        },
        cardsAreLinks: {
            table: {
                category: "Image card settings",
                defaultValue: { summary: true },
            },
            name: 'Cards are links',
            description: "Choose if the cards should be a link or not",
            control: { type: 'boolean' },
            defaultValue: true,
            required: true,
        },
        columnCount: {
            table: {
                category: "Image card settings",
                defaultValue: { summary: 4},
            },
            name: 'Column count',
            description: "Number of columns",
            options: [1, 2, 3, 4],
            control: { type: 'radio' },
            defaultValue: [1],
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
            defaultValue: ['default'],
            required: true,
        },
    }
} as Meta;

function createImageCardLink(imageFormat: string, cardVariant: string): string {
    return `
        <a class="toujou-image-card" href="#" image-format="${imageFormat}" card-variant="${cardVariant}">
            <figure class="toujou-image-card__figure">
                <img src="https://picsum.photos/400/400" alt="beautiful image" class="toujou-image-card__image">
            </figure>
            <h3 class="toujou-image-card__title">
                <toujou-icon class="toujou-icon" icon-name="arrow-right"></toujou-icon>
                Beautiful title
            </h3>
        </a>
    `;
}
function createImageCardElement(imageFormat: string, cardVariant: string): string {
    return `
        <toujou-image-card class="toujou-image-card" image-format="${imageFormat}" card-variant="${cardVariant}">
            <figure class="toujou-image-card__figure">
                <img src="https://picsum.photos/400/400" alt="beautiful image" class="toujou-image-card__image">
            </figure>
            <h3 class="toujou-image-card__title">
                <toujou-icon class="toujou-icon" icon-name="arrow-right"></toujou-icon>
                Beautiful title
            </h3>
        </toujou-image-card>
    `;
}

const Template = (args: { columnCount: number; imageFormat: string; cardsAreLinks: boolean, cardVariant: string}) => {

    const toujouImageCardGrid = document.createElement('toujou-image-card-grid');
    toujouImageCardGrid.classList.add('toujou-image-card-grid');

    for (let i = 0; i < args.columnCount; i++) {
        const imageCard = args.cardsAreLinks
            ? createImageCardLink(args.imageFormat, args.cardVariant)
            : createImageCardElement(args.imageFormat, args.cardVariant);
        toujouImageCardGrid.insertAdjacentHTML('beforeend', imageCard);
    }

    return toujouImageCardGrid;
};

export const ImageCard = Template.bind({});

ImageCard.args = {
    imageFormat: '16-9',
    columnCount: 4,
    cardsAreLinks: true,
    cardVariant: 'default',
}

