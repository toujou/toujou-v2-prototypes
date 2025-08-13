import { Meta } from '@storybook/web-components-vite';

// @ts-ignore
import localBusinessDocs from './local-business.docs.mdx';

export default {
    title: 'PAGES/LocalBusiness',
    parameters: {
        docs: {
            page: localBusinessDocs,
        },
    },
} satisfies Meta;

const Template = () => {
    return `
       <h1>Local business page - with content</h1>
    `;
};

export const LocalBusinessWithContent = Template.bind({});
