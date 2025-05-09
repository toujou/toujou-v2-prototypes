import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import accommodationDocs from './accommodation.docs.mdx';

export default {
    title: 'PAGES/Accommodation',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: accommodationDocs,
        },
    },
} satisfies Meta;

const Template = () => {
    return `
       <h1>Accommodation page - no content</h1>
    `;
};

export const AccommodationNoContent = Template.bind({});
