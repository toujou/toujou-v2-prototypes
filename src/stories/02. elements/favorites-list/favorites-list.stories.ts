import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import favoritesListDocs from './favorites-list.docs.mdx';

export default {
    title: 'COMPONENTS/Favorites List',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: favoritesListDocs,
        },
    },
    tags: ['autodocs']
} as Meta;

const Template = () => {
    return `
        <toujou-fav-list class="fav-list" teaser-url="/teaser.html" empty-list-message="Es befinden sich keine Objekte auf Ihrem Merkzettel">
            <div class="fav-list__content">
                <toujou-collection-item class="collection-item" item-type="poi" element-design="default" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img class="collection-item__image" alt="Öffentliche Toilette am Schützenplatz in Peine" loading="lazy" src="https://picsum.photos/640">
                            <toujou-fav-item tabindex="0" class="collection-item__fav-item" code="t3://d1i?itemtype=5&amp;itemid=100179159" add-label="Add to favorites" remove-label="Add to favorites" role="switch" aria-checked="true" aria-label="Add to favorites"></toujou-fav-item>
                            <span class="collection-item__type-icon" aria-hidden="true">
                                <toujou-icon class="icon" icon-color="background" icon-size="normal" icon-name="location"></toujou-icon>
                            </span>
                        </figure>
                    </header>
                    <div class="collection-item__bottom">
                        <a href="/d1i-item-page/oeffentliche-toilette-am-schuetzenplatz-peine-100179159/?tx_toujoudestinationoneintegration_item%5Btype%5D=5&amp;cHash=bf799f607c189cbfe9909f343a2476b9" class="collection-item__figure-link">
                            <h3 class="collection-item__title">Öffentliche Toilette am Schützenplatz Peine</h3>
                        </a>

                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">Die Toilette liegt am südlichen Ende des Schützenplatzes direkt am Zelt des Corps der Bürgersöhne.</span>
                        </p>

                        <div class="collection-item__chips">
                            <toujou-chip class="chip" chip-bg-color="font-very-light" chip-size="extra-small">WC barrierefrei</toujou-chip>
                            <toujou-chip class="chip" chip-bg-color="font-very-light" chip-size="extra-small">WC öffentlich</toujou-chip>
                        </div>

                        <div class="card-collection__infos">

                            <p class="collection-item__info collection-item__info--with-icon collection-item__info--location">
                                <toujou class="icon" icon-name="location" icon-color="font-color" icon-size="ms"></toujou>
                                <span class="collection-item__info-text">
                                    Schützenplatz, Peine
                                </span>
                            </p>
                        </div>
                    </div>
                </toujou-collection-item>
                <toujou-collection-item class="collection-item" item-type="poi" element-design="default" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img class="collection-item__image" alt="Öffentliche Toilette am Schützenplatz in Peine" loading="lazy" src="https://picsum.photos/640">
                            <toujou-fav-item tabindex="0" class="collection-item__fav-item" code="t3://d1i?itemtype=5&amp;itemid=100179159" add-label="Add to favorites" remove-label="Add to favorites" role="switch" aria-checked="true" aria-label="Add to favorites"></toujou-fav-item>
                            <span class="collection-item__type-icon" aria-hidden="true">
                                <toujou-icon class="icon" icon-color="background" icon-size="normal" icon-name="location"></toujou-icon>
                            </span>
                        </figure>
                    </header>
                    <div class="collection-item__bottom">
                        <a href="/d1i-item-page/oeffentliche-toilette-am-schuetzenplatz-peine-100179159/?tx_toujoudestinationoneintegration_item%5Btype%5D=5&amp;cHash=bf799f607c189cbfe9909f343a2476b9" class="collection-item__figure-link">
                            <h3 class="collection-item__title">Öffentliche Toilette am Schützenplatz Peine</h3>
                        </a>

                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">Die Toilette liegt am südlichen Ende des Schützenplatzes direkt am Zelt des Corps der Bürgersöhne.</span>
                        </p>

                        <div class="collection-item__chips">
                            <toujou-chip class="chip" chip-bg-color="font-very-light" chip-size="extra-small">WC barrierefrei</toujou-chip>
                            <toujou-chip class="chip" chip-bg-color="font-very-light" chip-size="extra-small">WC öffentlich</toujou-chip>
                        </div>

                        <div class="card-collection__infos">

                            <p class="collection-item__info collection-item__info--with-icon collection-item__info--location">
                                <toujou class="icon" icon-name="location" icon-color="font-color" icon-size="ms"></toujou>
                                <span class="collection-item__info-text">
                                    Schützenplatz, Peine
                                </span>
                            </p>
                        </div>
                    </div>
                </toujou-collection-item>
                <toujou-collection-item class="collection-item" item-type="poi" element-design="default" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img class="collection-item__image" alt="Öffentliche Toilette am Schützenplatz in Peine" loading="lazy" src="https://picsum.photos/640">
                            <toujou-fav-item tabindex="0" class="collection-item__fav-item" code="t3://d1i?itemtype=5&amp;itemid=100179159" add-label="Add to favorites" remove-label="Add to favorites" role="switch" aria-checked="true" aria-label="Add to favorites"></toujou-fav-item>
                            <span class="collection-item__type-icon" aria-hidden="true">
                                <toujou-icon class="icon" icon-color="background" icon-size="normal" icon-name="location"></toujou-icon>
                            </span>
                        </figure>
                    </header>
                    <div class="collection-item__bottom">
                        <a href="/d1i-item-page/oeffentliche-toilette-am-schuetzenplatz-peine-100179159/?tx_toujoudestinationoneintegration_item%5Btype%5D=5&amp;cHash=bf799f607c189cbfe9909f343a2476b9" class="collection-item__figure-link">
                            <h3 class="collection-item__title">Öffentliche Toilette am Schützenplatz Peine</h3>
                        </a>

                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">Die Toilette liegt am südlichen Ende des Schützenplatzes direkt am Zelt des Corps der Bürgersöhne.</span>
                        </p>

                        <div class="collection-item__chips">
                            <toujou-chip class="chip" chip-bg-color="font-very-light" chip-size="extra-small">WC barrierefrei</toujou-chip>
                            <toujou-chip class="chip" chip-bg-color="font-very-light" chip-size="extra-small">WC öffentlich</toujou-chip>
                        </div>

                        <div class="card-collection__infos">

                            <p class="collection-item__info collection-item__info--with-icon collection-item__info--location">
                                <toujou class="icon" icon-name="location" icon-color="font-color" icon-size="ms"></toujou>
                                <span class="collection-item__info-text">
                                    Schützenplatz, Peine
                                </span>
                            </p>
                        </div>
                    </div>
                </toujou-collection-item>
                <toujou-collection-item class="collection-item" item-type="poi" element-design="default" item-orientation="vertical" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img class="collection-item__image" alt="Öffentliche Toilette am Schützenplatz in Peine" loading="lazy" src="https://picsum.photos/640">
                            <toujou-fav-item tabindex="0" class="collection-item__fav-item" code="t3://d1i?itemtype=5&amp;itemid=100179159" add-label="Add to favorites" remove-label="Add to favorites" role="switch" aria-checked="true" aria-label="Add to favorites"></toujou-fav-item>
                            <span class="collection-item__type-icon" aria-hidden="true">
                                <toujou-icon class="icon" icon-color="background" icon-size="normal" icon-name="location"></toujou-icon>
                            </span>
                        </figure>
                    </header>
                    <div class="collection-item__bottom">
                        <a href="/d1i-item-page/oeffentliche-toilette-am-schuetzenplatz-peine-100179159/?tx_toujoudestinationoneintegration_item%5Btype%5D=5&amp;cHash=bf799f607c189cbfe9909f343a2476b9" class="collection-item__figure-link">
                            <h3 class="collection-item__title">Öffentliche Toilette am Schützenplatz Peine</h3>
                        </a>

                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">Die Toilette liegt am südlichen Ende des Schützenplatzes direkt am Zelt des Corps der Bürgersöhne.</span>
                        </p>

                        <div class="collection-item__chips">
                            <toujou-chip class="chip" chip-bg-color="font-very-light" chip-size="extra-small">WC barrierefrei</toujou-chip>
                            <toujou-chip class="chip" chip-bg-color="font-very-light" chip-size="extra-small">WC öffentlich</toujou-chip>
                        </div>

                        <div class="card-collection__infos">

                            <p class="collection-item__info collection-item__info--with-icon collection-item__info--location">
                                <toujou class="icon" icon-name="location" icon-color="font-color" icon-size="ms"></toujou>
                                <span class="collection-item__info-text">
                                    Schützenplatz, Peine
                                </span>
                            </p>
                        </div>
                    </div>
                </toujou-collection-item>
            </div>
            <div class="fav-list__empty-message">
                <p>Es befinden sich keine Objekte auf Ihrem Merkzettel</p>
            </div>
        </toujou-fav-list>
    `;
};

export const FavoritesList = Template.bind({});
