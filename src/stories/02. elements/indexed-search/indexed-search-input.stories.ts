import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import alertDocs from './indexed-search.docs.mdx';

export default {
    title: 'COMPONENTS/Indexed Search',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: alertDocs,
        },
    },
    tags: ['autodocs']
} as Meta;

const Template = () => {
    return `
        <form
            method="post"
            id="tx_indexedsearch_panel"
            action="#"
            class="indexedsearch-form"
            action="#"
        >
            <toujou-search class="search">
                <input
                    class="input input--search indexedsearch-form__input"
                    name="tx_indexedsearch_pi2[search][sword]"
                    type="search"
                    placeholder="Search..."
                >
                <button
                    is="toujou-button"
                    class="button button--search indexedsearch-form__button"
                    button-variant="primary"
                    button-type="default"
                    button-size="normal"
                    aria-label="Search"
                    name="tx_indexedsearch_pi2[search][submitButton]]"
                >
                    <span class="search__button-text">Search</span>
                    <toujou-icon class="icon" icon-name="search" icon-size="l" icon-color="white"></toujou-icon>
                </button>
            </toujou-search>
        </form>
    `;
};

export const IndexedSearchInput = Template.bind({});

IndexedSearchInput.args = {
    alertVariant: 'primary'
}

