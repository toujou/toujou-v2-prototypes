import { Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import toujouCollectionItemDocs from '../toujou-collection-item.docs.mdx';

export default {
    title: 'COMPONENTS/Collections',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/0bd327cf-3d4a-42b8-b2a2-6e5f149165f8-5e80/screen/92a6d427-39e9-4fd3-841d-fd46681307a1/Desktop',
        },
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: toujouCollectionItemDocs,
        },
    },
} as Meta;

const Template = () => {
    return `
        <ol class="item-collection">
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="default" item-orientation="horizontal" role="article">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__date media-date">
                            <div class="media-date__months">
                                <span class="media-date__month">Jun</span>
                            </div>
                            <div class="media-date__days">
                                <span class="media-date__day">24</span>
                            </div>
                            <div class="media-date__years">
                                <span class="media-date__year">2023</span>
                            </div>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__extension">Verlängert bis 26.09.2023</p>
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="default" item-orientation="horizontal" role="article">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__date media-date">
                            <div class="media-date__months">
                                <span class="media-date__month">Jun</span>
                            </div>
                            <div class="media-date__days">
                                <span class="media-date__day">25</span>
                                <span class="media-date__day-separator">-</span>
                                <span class="media-date__day">12</span>
                            </div>
                            <div class="media-date__years">
                                <span class="media-date__year">2023</span>
                            </div>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__extension">Verlängert bis 26.09.2023</p>
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="default" item-orientation="horizontal" role="article">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__date media-date">
                            <div class="media-date__months">
                                <span class="media-date__month">Jun</span>
                                <span class="media-date__month">Sep</span>
                            </div>
                            <div class="media-date__days">
                                <span class="media-date__day">25</span>
                                <span class="media-date__day-separator">-</span>
                                <span class="media-date__day">12</span>
                            </div>
                            <div class="media-date__years">
                                <span class="media-date__year">2023</span>
                            </div>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__extension">Verlängert bis 26.09.2023</p>
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="default" item-orientation="horizontal" role="article">
                    <div class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div class="collection-item__date media-date">
                            <div class="media-date__months">
                                <span class="media-date__month">Jun</span>
                                <span class="media-date__month">Sep</span>
                            </div>
                            <div class="media-date__days">
                                <span class="media-date__day">25</span>
                                <span class="media-date__day-separator">-</span>
                                <span class="media-date__day">12</span>
                            </div>
                            <div class="media-date__years">
                                <span class="media-date__year">2023</span>
                                <span class="media-date__year">2025</span>
                            </div>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </div>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__extension">Verlängert bis 26.09.2023</p>
                        <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
        </ol>
    `
};

export const ListItemEvent = Template.bind({});
