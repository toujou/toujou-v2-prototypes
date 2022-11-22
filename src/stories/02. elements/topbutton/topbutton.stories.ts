import { Story, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import topbuttonDocs from './topbutton.docs.mdx';

export default {
    title: 'COMPONENTS/Topbutton',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: topbuttonDocs,
        },
    },
} as Meta;

const Template: Story = () => {
    return `
        <toujou-top-button
            title="Nach oben"
            aria-label="Nach oben"
            class="topbutton topbutton--visible"
            role="button"
            aria-hidden="false"
            visible=""
            tabindex="0"
        >
            <toujou-icon class="icon" icon-name="arrow-up" icon-size="m" icon-color="primary"></toujou-icon>
        </toujou-top-button>
    `;
};

export const Topbutton = Template.bind({});
