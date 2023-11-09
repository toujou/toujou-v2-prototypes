import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import toujouCollectionItemDocs from '../toujou-collection-item.docs.mdx';

export default {
    title: 'COMPONENTS/Collections',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: toujouCollectionItemDocs,
        },
    },
    tags: ['autodocs']
} as Meta;

const Template = () => {
    return `
        <ol class="item-collection">
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="default" item-orientation="horizontal" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
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

                        <div
                            class="calendar-pages collection-item__date"
                            aria-label="calendar page with date / time information"
                            as-group
                        >
                            <time class="calendar-page" datetime="2025-11-14">
                                <div class="calendar-page__date">
                                    <p class="calendar-page__month">Nov</p>
                                    <p class="calendar-page__day">14</p>
                                    <p class="calendar-page__year">2025</p>
                                </div>
                            </time>

                            <span class="calendar-pages__until" aria-hidden="true">
                                <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                            </span>

                            <time class="calendar-page" datetime="2025-11-16">
                                <div class="calendar-page__date">
                                    <p class="calendar-page__month">Nov</p>
                                    <p class="calendar-page__day">16</p>
                                    <p class="calendar-page__year">2025</p>
                                </div>
                            </time>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="error" chip-border-radius="normal" chip-size="normal">Event abgesagt</toujou-chip>
                        </p>
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel and some more text to make sure it is long enough.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="default" item-orientation="horizontal" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>

                        <div
                            class="calendar-pages collection-item__date"
                            aria-label="calendar page with date / time information"
                            as-group
                        >
                            <time class="calendar-page" datetime="2025-11-14">
                                <div class="calendar-page__date">
                                    <p class="calendar-page__month">Nov</p>
                                    <p class="calendar-page__day">14</p>
                                    <p class="calendar-page__year">2025</p>
                                </div>
                                <div class="calendar-page__times">
                                    <p class="calendar-page__time calendar-page__time--start">12:30</p>
                                    <p class="calendar-page__time-separator" aria-label="until">-</p>
                                    <p class="calendar-page__time calendar-page__time--end">22:00</p>
                                </div>
                            </time>
                        </div>

                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <div class="collection-item__info">
                            <toujou-icon icon-size="ms" icon-color="primary" icon-name="info" class="icon collection-item__info-icon"></toujou-icon>
                            <p class="collection-item__info-text">Meistersingerhalle - Nürnberg 19.30 - 23.00 Uhr, ab 50,00 €</p>
                        </div>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="error" chip-border-radius="normal" chip-size="normal">Event abgesagt</toujou-chip>
                        </p>
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="default" item-orientation="horizontal" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>

                        <div
                            class="calendar-pages collection-item__date"
                            aria-label="calendar page with date / time information"
                            as-group
                        >
                            <time class="calendar-page" datetime="2025-11-14">
                                <div class="calendar-page__date">
                                    <p class="calendar-page__month">Nov</p>
                                    <p class="calendar-page__day">14</p>
                                    <p class="calendar-page__year">2025</p>
                                </div>
                            </time>

                            <span class="calendar-pages__until" aria-hidden="true">
                                <toujou-icon class="icon" icon-size="l" icon-name="chevron-right" icon-color="background"></toujou-icon>
                            </span>

                            <time class="calendar-page" datetime="2025-11-16">
                                <div class="calendar-page__date">
                                    <p class="calendar-page__month">Nov</p>
                                    <p class="calendar-page__day">16</p>
                                    <p class="calendar-page__year">2025</p>
                                </div>
                            </time>
                        </div>

                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__subtitles">
                            <span class="collection-item__subtitle">FourEver Tournee</span>
                        </p>
                        <p class="collection-item__status">
                            <toujou-chip class="chip" chip-bg-color="error" chip-border-radius="normal" chip-size="normal">Event abgesagt</toujou-chip>
                        </p>
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                            </span>
                        </p>
                        <a href="#" class="collection-item__button">
                            <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                            zur Beschreibung
                        </a>
                    </div>
                </toujou-collection-item>
            </li>
            <li class="item-collection__item">
                <toujou-collection-item class="collection-item" item-type="event" element-design="default" item-orientation="horizontal" role="article">
                    <header class="collection-item__top">
                        <figure class="collection-item__figure">
                            <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                        </figure>
                        <div
                            class="calendar-pages collection-item__date"
                            aria-label="calendar page with date / time information"
                            as-group
                        >
                            <time class="calendar-page" datetime="2025-11-14">
                                <div class="calendar-page__date">
                                    <p class="calendar-page__month">Nov</p>
                                    <p class="calendar-page__day">14</p>
                                    <p class="calendar-page__year">2025</p>
                                </div>
                            </time>
                        </div>
                        <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                    </header>
                    <div class="collection-item__bottom">
                        <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                        <p class="collection-item__abstract">
                            <span class="collection-item__abstract-text">
                                Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                            </span>
                        </p>
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
