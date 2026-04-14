import { Meta } from '@storybook/web-components-vite';

export default {
    title: 'PAGES/Accommodation',
} satisfies Meta;

const Template = () => {
    return `
       <h1>Accommodation page - with content</h1>
    `;
};

export const AccommodationWithContent = Template.bind({});
