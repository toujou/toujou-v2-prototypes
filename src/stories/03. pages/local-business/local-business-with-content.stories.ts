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
    tags: ['autodocs']
} as Meta;

const Template = () => {
    return `
       <h1>Local business page - with content</h1>
    `;
};

export const LocalBusinessWithContent = Template.bind({});
