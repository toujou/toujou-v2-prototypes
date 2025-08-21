import { Meta } from '@storybook/web-components-vite';

// @ts-ignore
import personDocs from './person.docs.mdx';

export default {
    title: 'PAGES/Person',
    parameters: {
        docs: {
            page: personDocs,
        },
    },
} satisfies Meta;

const Template = () => {
    return `
       <h1>Person page - with content</h1>
    `;
};

export const PersonWithContent = Template.bind({});
