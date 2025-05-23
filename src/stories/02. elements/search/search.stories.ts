import { StoryFn, Meta } from '@storybook/web-components';
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
} satisfies Meta;

const Template: StoryFn = () => {
    return `
        <main>
            <form class="form" action="#" role="search">
              <toujou-search class="search">
                <label for="search-input" class="search__label" is-visually-hidden>Search</label>
                <input
                    id="search-input"
                    name="search-input"
                    class="input input--search"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                >
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
        </main>
    `;
};

export const Search = Template.bind({});
