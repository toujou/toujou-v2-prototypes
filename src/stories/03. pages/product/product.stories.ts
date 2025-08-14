import { Meta } from '@storybook/web-components-vite';

// @ts-ignore
import productDocs from './product.docs.mdx';

export default {
    title: 'PAGES/Product',
    parameters: {
        docs: {
            page: productDocs,
        },
    },
} satisfies Meta;

const Template = () => {
    return `
       <h1>Product page</h1>
    `;
};

export const Product = Template.bind({});
