import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/badgeCustomConfig.js'

// @ts-ignore
import ToujouContentCardDocs from './toujou-content-card.docs.mdx';

export default {
    title: 'COMPONENTS/Content Card',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/3d1d0926-79e2-4ae4-aa1c-162dcd451a3a-684e/screen/f783e300-5752-4a6a-8ed9-05047ec22750/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: ToujouContentCardDocs,
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

interface ToujouImageCardStoryProps {
    columnCount: number;
    imageFormat: string;
    cardsAreLinks: boolean,
    cardVariant: string
}

const Template: Story<ToujouImageCardStoryProps> = (args: ToujouImageCardStoryProps) => {

    const toujouImageCardGrid = document.createElement('toujou-content-card-grid');
    toujouImageCardGrid.classList.add('toujou-content-card-grid');

    // for (let i = 0; i < args.columnCount; i++) {
    //     // const imageCard = args.cardsAreLinks
    //     //     ? createImageCardLink(args.imageFormat, args.cardVariant)
    //     //     : createImageCardElement(args.imageFormat, args.cardVariant);
    //
    //
    // }

    const contentCard = `
            <toujou-content-card class="toujou-content-card" href="#">
                <figure class="toujou-content-card__figure">
                    <img src="https://picsum.photos/400/400" alt="beautiful image" class="toujou-content-card__image">
                </figure>
                <div class="toujou-content-card__content">
                    <h3 class="toujou-content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                    <p class="toujou-content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                    <a href="#" class="toujou-content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                        <toujou-icon class="toujou-icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </a>
                </div>
            </toujou-content-card>
            <toujou-content-card class="toujou-content-card" href="#">
                <figure class="toujou-content-card__figure">
                    <img src="https://picsum.photos/400/400" alt="beautiful image" class="toujou-content-card__image">
                </figure>
                <div class="toujou-content-card__content">
                    <h3 class="toujou-content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                    <p class="toujou-content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                    <a href="#" class="toujou-content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                        <toujou-icon class="toujou-icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </a>
                </div>
            </toujou-content-card>
            <toujou-content-card class="toujou-content-card" href="#">
                <figure class="toujou-content-card__figure">
                    <img src="https://picsum.photos/400/400" alt="beautiful image" class="toujou-content-card__image">
                </figure>
                <div class="toujou-content-card__content">
                    <h3 class="toujou-content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                    <p class="toujou-content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                    <a href="#" class="toujou-content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                        <toujou-icon class="toujou-icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </a>
                </div>
            </toujou-content-card>
            <toujou-content-card class="toujou-content-card" href="#">
                <figure class="toujou-content-card__figure">
                    <img src="https://picsum.photos/400/400" alt="beautiful image" class="toujou-content-card__image">
                </figure>
                <div class="toujou-content-card__content">
                    <h3 class="toujou-content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                    <p class="toujou-content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                    <a href="#" class="toujou-content-card__button" button-variant="primary" button-type="ghost" button-size="normal">
                        <toujou-icon class="toujou-icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </a>
                </div>
            </toujou-content-card>
        `

    toujouImageCardGrid.insertAdjacentHTML('beforeend', contentCard);

    return toujouImageCardGrid;
};

export const ContentCard = Template.bind({});

ContentCard.args = {
    imageFormat: '16-9',
    columnCount: 4,
    cardsAreLinks: true,
    cardVariant: 'default',
}

