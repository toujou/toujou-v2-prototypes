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
    tags: ['autodocs']
} satisfies Meta;

const Template = () => {
    return `
       <h1>Event page - with content</h1>
    `;
};

export const AccommodationWithContent = Template.bind({});
