import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import blockquoteTagDocs from './blockquote-tag.docs.mdx';

export default {
    title: 'COMPONENTS/Blockquote',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
    },
} as Meta;

const Template = () => {
    return `
        <blockquote>
            <p>This is a simple element containing a blockquote. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
        </blockquote>
        <p class="blockquote__author">Your Name</p>
    `;
};

export const BlockquoteTag = Template.bind({});
