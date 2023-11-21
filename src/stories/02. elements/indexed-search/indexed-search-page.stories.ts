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

        <div class="indexedsearch-page">
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
                        value="toujou"
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

            <div class="indexedsearch-header">
                <p class="indexedsearch-header__headline">
                    Suchergebnisse für <span class="indexedsearch-header__headline-word">"toujou"</span>
                </p>
                <p class="indexedsearch-header__amount">
                    Ergebnisse: <span class="indexedsearch-header__amount-count">512</span>
                </p>
            </div>

            <ul class="indexedsearch-results">
                <li class="indexedsearch-result">
                    <div class="indexedsearch-result__infos">
                        <h4 class="indexedsearch-result__title">
                            <a href="#" class="indexedsearch-result__title-link">toujou-Workshop für Partner</a>
                        </h4>
                        <div class="indexedsearch-result__metas">
                            <p class="indexedsearch-result__meta">
                                <span class="indexedsearch-result__meta-name">Seite:</span>
                                /toujou/toujou-workshop
                            </p>
                            <p class="indexedsearch-result__meta">
                                <span class="indexedsearch-result__meta-name">Datum:</span>
                                08.07.2021
                            </p>
                        </div>
                        <p class="indexedsearch-result__description">
                            <span class="indexedsearch-result__description-word">toujou</span> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim <span class="indexedsearch-result__description-word">toujou</span>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in <span class="indexedsearch-result__description-word">toujou<span in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <figure class="indexedsearch-result__figure">
                        <img class="indexedsearch-result__image" src="https://picsum.photos/1600/900" alt="Nice image">
                    </figure>
                </li>

                <li class="indexedsearch-result">
                    <div class="indexedsearch-result__infos">
                        <h4 class="indexedsearch-result__title">
                            <a href="#" class="indexedsearch-result__title-link">toujou-Workshop für Partner</a>
                        </h4>
                        <div class="indexedsearch-result__metas">
                            <p class="indexedsearch-result__meta">
                                <span class="indexedsearch-result__meta-name">Seite:</span>
                                /toujou/toujou-workshop
                            </p>
                            <p class="indexedsearch-result__meta">
                                <span class="indexedsearch-result__meta-name">Datum:</span>
                                08.07.2021
                            </p>
                        </div>
                        <p class="indexedsearch-result__description">
                            <span class="indexedsearch-result__description-word">toujou</span> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim <span class="indexedsearch-result__description-word">toujou</span>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in <span class="indexedsearch-result__description-word">toujou<span in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </li>

                <li class="indexedsearch-result">
                    <div class="indexedsearch-result__infos">
                        <h4 class="indexedsearch-result__title">
                            <a href="#" class="indexedsearch-result__title-link">toujou-Workshop für Partner</a>
                        </h4>
                        <div class="indexedsearch-result__metas">
                            <p class="indexedsearch-result__meta">
                                <span class="indexedsearch-result__meta-name">Seite:</span>
                                /toujou/toujou-workshop
                            </p>
                            <p class="indexedsearch-result__meta">
                                <span class="indexedsearch-result__meta-name">Datum:</span>
                                08.07.2021
                            </p>
                        </div>
                        <p class="indexedsearch-result__description">
                            <span class="indexedsearch-result__description-word">toujou</span> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim <span class="indexedsearch-result__description-word">toujou</span>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in <span class="indexedsearch-result__description-word">toujou<span in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <figure class="indexedsearch-result__figure">
                        <img class="indexedsearch-result__image" src="https://picsum.photos/1600/900" alt="Nice image">
                    </figure>
                </li>

                <li class="indexedsearch-result">
                    <div class="indexedsearch-result__infos">
                        <h4 class="indexedsearch-result__title">
                            <a href="#" class="indexedsearch-result__title-link">toujou-Workshop für Partner</a>
                        </h4>
                        <div class="indexedsearch-result__metas">
                            <p class="indexedsearch-result__meta">
                                <span class="indexedsearch-result__meta-name">Seite:</span>
                                /toujou/toujou-workshop
                            </p>
                            <p class="indexedsearch-result__meta">
                                <span class="indexedsearch-result__meta-name">Datum:</span>
                                08.07.2021
                            </p>
                        </div>
                        <p class="indexedsearch-result__description">
                            <span class="indexedsearch-result__description-word">toujou</span> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim <span class="indexedsearch-result__description-word">toujou</span>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in <span class="indexedsearch-result__description-word">toujou<span in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </li>

            </ul>

            <ul class="pagination indexedsearch-page__pagination">
            PAGINATION
            </ul>

        </div>
    `;
};

export const IndexedSearchPage = Template.bind({});
