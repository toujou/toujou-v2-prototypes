import { Story, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import searchDocs from './search.docs.mdx';

export default {
    title: 'COMPONENTS/Search',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: searchDocs,
        },
    },
    tags: ['autodocs']
} as Meta;

const Template: Story = () => {
    return `
        <form class="form" action="#">
          <toujou-search class="search">
            <input class="input input--search" type="search" placeholder="Search...">
            <button
                is="toujou-button"
                class="button button--search"
                button-variant="primary"
                button-type="default"
                button-size="normal"
                aria-label="Search"
                >
                <span class="search__button-text">Search</span>
                <toujou-icon class="icon" icon-name="search" icon-size="l" icon-color="white"></toujou-icon>
            </button>
          </toujou-search>
        </form>
    `;
};

export const Search = Template.bind({});
