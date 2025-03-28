import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import localBusinessDocs from './local-business.docs.mdx';

export default {
    title: 'PAGES/LocalBusiness',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: localBusinessDocs,
        },
    },
} satisfies Meta;

const Template = () => {
    return `
       <h1>Local business page - no content</h1>
    `;
};

export const LocalBusinessNoContent = Template.bind({});
