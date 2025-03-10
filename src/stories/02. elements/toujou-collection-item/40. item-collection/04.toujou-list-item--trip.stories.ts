import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import toujouCollectionItemDocs from '../toujou-collection-item.docs.mdx';
import { renderCardCategoryChips } from "../01. helpers/_renderCardCategoriChips";

export default {
    title: 'COMPONENTS/CollectionLists',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: toujouCollectionItemDocs,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

const Template = () => {
    return `
        <main>
            <ol class="item-collection">
                <li class="item-collection__item">
                    <toujou-collection-item class="collection-item" item-type="trip" element-design="default" item-orientation="horizontal" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>

                            <div class="collection-item__categories">
                                ${renderCardCategoryChips(['Tutorials', 'New'], 'primary')}
                            </div>

                            <toujou-media-info class="media-info">
                                <button slot="open-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                                    <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
                                </button>
                                <button slot="close-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                                    <toujou-icon class="icon" icon-color="background" icon-name="close" icon-size="ms"></toujou-icon>
                                </button>
                                <figpaction slot="figcaption" class="media-info__figcaption">This is a beautiful description</figpaction>
                                <small slot="copyright" class="media-info__copyright">@Nice photographer</small>
                            </toujou-media-info>
                            <div class="collection-item__location">
                                <h4 class="collection-item__location-city">
                                    Marbella
                                </h4>
                                <h5 class="collection-item__location-country">
                                    Spanien
                                </h5>
                            </div>
                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Hotel name</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel and some more text to make sure it is long enough.
                                </span>
                            </p>

                            <div class="collection-item__trip-infos">
                                <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                                <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                            </div>

                            <p class="collection-item__trip-price">
                                <span class="collection-item__trip-price-prefix">ab</span>
                                <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                            </p>

                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="item-collection__item">
                    <toujou-collection-item class="collection-item" item-type="trip" element-design="default" item-orientation="horizontal" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                ${renderCardCategoryChips(['Tutorials'], 'primary')}
                            </div>
                            <div class="collection-item__location">
                                <h4 class="collection-item__location-city">
                                    Marbella
                                </h4>
                                <h5 class="collection-item__location-country">
                                    Spanien
                                </h5>
                            </div>
                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Hotel name</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>

                            <div class="collection-item__trip-infos">
                                <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                                <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                            </div>

                            <p class="collection-item__trip-price">
                                <span class="collection-item__trip-price-prefix">ab</span>
                                <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                            </p>

                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="item-collection__item">
                    <toujou-collection-item class="collection-item" item-type="trip" element-design="default" item-orientation="horizontal" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                ${renderCardCategoryChips(['Tutorials'], 'primary')}
                            </div>
                            <div class="collection-item__location">
                                <h4 class="collection-item__location-city">
                                    Marbella
                                </h4>
                                <h5 class="collection-item__location-country">
                                    Spanien
                                </h5>
                            </div>
                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">Hotel name</span>
                            </p>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>

                            <p class="collection-item__trip-price">
                                <span class="collection-item__trip-price-prefix">ab</span>
                                <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                            </p>

                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
                <li class="item-collection__item">
                    <toujou-collection-item class="collection-item" item-type="trip" element-design="default" item-orientation="horizontal" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>
                            <div class="collection-item__categories">
                                ${renderCardCategoryChips(['Tutorials'], 'primary')}
                            </div>
                            <div class="collection-item__location">
                                <h4 class="collection-item__location-city">
                                    Marbella
                                </h4>
                                <h5 class="collection-item__location-country">
                                    Spanien
                                </h5>
                            </div>
                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>

                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>

                            <p class="collection-item__trip-price">
                                <span class="collection-item__trip-price-prefix">ab</span>
                                <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                            </p>

                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                zur Beschreibung
                            </a>
                        </div>
                    </toujou-collection-item>
                </li>
            </ol>
        </main>
    `
};

export const ListItemTrip = Template.bind({});
