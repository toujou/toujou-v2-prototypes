import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import tripDocs from './trip.docs.mdx';

export default {
    title: 'PAGES/Trip',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: tripDocs,
        },
    },
} satisfies Meta;

const Template = () => {
    return `
       <h1>Individual trip page</h1>
    `;
};

export const IndividualTrip = Template.bind({});
