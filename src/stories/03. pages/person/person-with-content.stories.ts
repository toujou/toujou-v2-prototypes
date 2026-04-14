import { Meta } from '@storybook/web-components-vite';

export default {
    title: 'PAGES/Person',
} satisfies Meta;

const Template = () => {
    return `
       <h1>Person page - with content</h1>
    `;
};

export const PersonWithContent = Template.bind({});
