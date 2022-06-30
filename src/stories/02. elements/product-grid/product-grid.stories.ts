import { Meta } from '@storybook/web-components';
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
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: productGridDocs,
        },
    },
} as Meta;

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

const Template = () => {
    const colNumber = 4;
        const toujouImageCardGrid = document.createElement('toujou-image-card-grid');
        toujouImageCardGrid.classList.add('image-card-grid');

        for (let i = 0; i < colNumber; i++) {
            const imageCard = createImageCardLink('16-9', 'default')
            toujouImageCardGrid.insertAdjacentHTML('beforeend', imageCard);
        }

        return toujouImageCardGrid;
};

export const ProductGrid = Template.bind({});
