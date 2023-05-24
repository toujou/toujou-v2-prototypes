import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import eventDocs from './event.docs.mdx';

export default {
    title: 'PAGES/Event',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: eventDocs,
        },
    },
} as Meta;

const Template = () => {
    return `
       <h1>Event page - with content</h1>
    `;
};

export const EventWithContent = Template.bind({});
