import { Meta } from '@storybook/web-components-vite';

// @ts-ignore
import accommodationDocs from './accommodation.docs.mdx';

export default {
    title: 'PAGES/Accommodation',
    parameters: {
        docs: {
            page: accommodationDocs,
        },
    },
} satisfies Meta;

const Template = () => {
    return `
       <h1>Accommodation page - with content</h1>
    `;
};

export const AccommodationWithContent = Template.bind({});
