import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import productGridDocs from './product-grid.docs.mdx';

export default {
    title: 'COMPONENTS/Product Grid',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/3edbd260-09a0-4b35-ad8a-73b46782965e/Desktop',
        },
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: productGridDocs,
        },
    },
    argTypes: {
        imageFormat: {
            table: {
                category: "Product grid card settings",
                defaultValue: { summary: '16-9' },
            },
            name: 'Image format',
            description: "Set the product grid cards image format",
            options: ['16-9', 'square'],
            control: { type: 'radio' },
            defaultValue: ['cinema'],
            required: true,
        },
        cardVariant: {
            table: {
                category: "Product grid card settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Card variant',
            description: "Set the product grid cards element design",
            options: ['default', 'primary', 'secondary', 'inverted'],
            control: { type: 'radio' },
            defaultValue: ['default'],
            required: true,
        },
    }
} as Meta;

interface ProductGridStoryProps {
    imageFormat: string,
    cardVariant: string
}

function createImageCardLink(imageFormat: string, cardVariant: string): string {
    return `
        <a class="image-card" href="#" image-format="${imageFormat}" card-variant="${cardVariant}">
            <figure class="image-card__figure">
                <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
            </figure>
            <h3 class="image-card__title">
                <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                Product name
            </h3>
        </a>
    `;
}

const Template: Story<ProductGridStoryProps> = (args: ProductGridStoryProps) => {
    const colNumber = 4;
        const toujouImageCardGrid = document.createElement('toujou-image-card-grid');
        toujouImageCardGrid.classList.add('image-card-grid');

        for (let i = 0; i < colNumber; i++) {
            const imageCard = createImageCardLink(args.imageFormat, args.cardVariant)
            toujouImageCardGrid.insertAdjacentHTML('beforeend', imageCard);
        }

        return toujouImageCardGrid;
};

export const ProductGrid = Template.bind({});

ProductGrid.args = {
    imageFormat: '16-9',
    cardVariant: 'default',
}