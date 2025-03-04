import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import personDocs from './person.docs.mdx';

export default {
    title: 'PAGES/Person',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
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
