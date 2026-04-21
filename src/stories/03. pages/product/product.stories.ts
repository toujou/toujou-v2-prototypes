import { Meta } from '@storybook/web-components-vite';

export default {
    title: 'PAGES/Product',
} satisfies Meta;

const Template = () => {
    return `
       <h1>Product page</h1>
    `;
};

export const Product = Template.bind({});
