import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import personDocs from './person.docs.mdx';

export default {
    title: 'PAGES/Person',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: personDocs,
        },
    },
} as Meta;

const Template = () => {
    return `
       <h1>Person page - no content</h1>
    `;
};

export const PersonNoContent = Template.bind({});
