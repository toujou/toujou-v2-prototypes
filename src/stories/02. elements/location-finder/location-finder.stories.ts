import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import locationFinderDocs from './location-finder.docs.mdx';

export default {
    title: 'COMPONENTS/LocationFinder',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: locationFinderDocs,
        },
    },
} as Meta;

const Template = () => {
    return `
       <toujou-location-finder
        class="location-finder"
       ></toujou-location-finder>
    `;
};

export const LocationFinder = Template.bind({});
