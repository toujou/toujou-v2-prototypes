import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import accommodationDocs from './accommodation.docs.mdx';

export default {
    title: 'PAGES/Accommodation',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: accommodationDocs,
        },
    },
} as Meta;

const Template = () => {
    return `
       <h1>Event page - no content</h1>
    `;
};

export const AccommodationNoContent = Template.bind({});