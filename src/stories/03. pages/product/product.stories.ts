import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import productDocs from './product.docs.mdx';

export default {
    title: 'PAGES/Product',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: productDocs,
        },
    },
} as Meta;

const Template = () => {
    return `
       <h1>Product page</h1>
    `;
};

export const Product = Template.bind({});
