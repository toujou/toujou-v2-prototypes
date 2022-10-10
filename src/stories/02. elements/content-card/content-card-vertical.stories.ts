import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import contentCardDocs from './content-card.docs.mdx';

export default {
    title: 'COMPONENTS/Content Card',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/3d1d0926-79e2-4ae4-aa1c-162dcd451a3a-684e/screen/f783e300-5752-4a6a-8ed9-05047ec22750/Desktop',
        },
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: contentCardDocs,
        }
    },
    argTypes: {
        columnCount: {
            table: {
                category: "Content card settings",
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
                category: "Content card settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Card variant',
            description: "Set the content  card element design",
            options: ['default', 'primary', 'secondary', 'inverted'],
            control: { type: 'radio' },
            defaultValue: ['default'],
            required: true,
        },
        hasLink: {
            table: {
                category: "Content card settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Has link',
            description: "Set a link for the card",
            control: { type: 'boolean' },
            defaultValue: false,
            required: true,
        },
    }
} as Meta;

interface ContentCardStoryProps {
    columnCount: number;
    cardVariant: string;
    hasLink: boolean;
}

const Template: Story<ContentCardStoryProps> = (args: ContentCardStoryProps) => {

    const contentCardGrid = document.createElement('toujou-content-card-grid');
    contentCardGrid.classList.add('content-card-grid');

    for (let i = 0; i < args.columnCount; i++) {
        const contentCard = document.createElement(args.hasLink ? 'a' : 'toujou-content-card');
        contentCard.classList.add('content-card');
        contentCard.setAttribute('card-variant', args.cardVariant);
        contentCard.setAttribute('card-direction', 'vertical');

        if (args.hasLink) {
            contentCard.setAttribute('href', '#');
        }

        contentCard.innerHTML = `
            <figure class="content-card__figure">
                <img src="https://picsum.photos/640/640" alt="beautiful image" class="content-card__image">
            </figure>
            <div class="content-card__content">
                <h3 class="content-card__title">Eine etwas längere Headline über zwei Zeilen</h3>
                ${i == 2 ? `
                    <p class="content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                ` : `
                    <p class="content-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur excepturi officiis.</p>
                `}
                
                ${args.hasLink ? `
                    <span class="content-card__button">
                        <toujou-icon class="icon" icon-name="arrow-right" icon-color="primary"></toujou-icon>
                        zur Beschreibung
                    </span>
                `: ''}
            </div>
        `

        contentCardGrid.appendChild(contentCard);
    }

    return contentCardGrid;
};

export const VerticalContentCard = Template.bind({});

VerticalContentCard.args = {
    columnCount: 4,
    cardVariant: 'default',
    hasLink: false
}

