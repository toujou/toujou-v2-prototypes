import { Meta } from '@storybook/web-components-vite';

// @ts-ignore
import toujouCollectionItemDocs from '../toujou-collection-item.docs.mdx';
import { renderCardCategoryChips } from "../01. helpers/_renderCardCategoriChips";

export default {
    title: 'COMPONENTS/CollectionLists',
    parameters: {
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
                    <toujou-collection-item class="collection-item" item-type="event" element-design="default" item-orientation="horizontal" role="article">
                        <header class="collection-item__top">
                            <figure class="collection-item__figure">
                                <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                            </figure>

                            <div class="collection-item__categories">
                                ${renderCardCategoryChips(['Tutorials'], 'primary')}
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

                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">FourEver Tournee</span>
                            </p>

                            <time class="collection-item__date" datetime="2025-11-14" inline single-day>
                                <toujou-icon class="icon" icon-color="font" icon-name="calendar-lines" icon-size="ms" aria-hidden="true"></toujou-icon>
                                <span class="collection-item__date-text">24.12.2025</span>
                            </time>

                            <p class="collection-item__status">
                                <toujou-chip class="chip" chip-bg-color="error" chip-border-radius="normal" chip-size="small">Event abgesagt</toujou-chip>
                            </p>
                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel and some more text to make sure it is long enough.
                                </span>
                            </p>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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

                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">FourEver Tournee</span>
                            </p>

                            <time class="collection-item__date" datetime="2025-11-14" inline single-day>
                                <toujou-icon class="icon" icon-color="font" icon-name="calendar-lines" icon-size="ms" aria-hidden="true"></toujou-icon>
                                <span class="collection-item__date-text">24.12.2025, 08:30 - 22:00</span>
                            </time>

                            <p class="collection-item__status">
                                <toujou-chip class="chip" chip-bg-color="error" chip-border-radius="normal" chip-size="small">Event abgesagt</toujou-chip>
                            </p>
                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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

                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                            <p class="collection-item__subtitles">
                                <span class="collection-item__subtitle">FourEver Tournee</span>
                            </p>
                            <time class="collection-item__date" datetime="2025-11-14" inline single-day>
                                <toujou-icon class="icon" icon-color="font" icon-name="calendar-lines" icon-size="ms" aria-hidden="true"></toujou-icon>
                                <span class="collection-item__date-text">24.12.2025 - 30.12.2025</span>
                            </time>
                            <p class="collection-item__status">
                                <toujou-chip class="chip" chip-bg-color="error" chip-border-radius="normal" chip-size="small">Event abgesagt</toujou-chip>
                            </p>
                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
                            </p>
                            <a href="#" class="collection-item__button">
                                <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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
                            <toujou-fav-item class="fav-item"></toujou-fav-item>
                        </header>
                        <div class="collection-item__bottom">
                            <h3 class="collection-item__title">Eine etwas längere Headline über zwei Zeilen</h3>
                            <time class="collection-item__date" datetime="2025-11-14" inline single-day>
                                <toujou-icon class="icon" icon-color="font" icon-name="calendar-lines" icon-size="ms" aria-hidden="true"></toujou-icon>
                                <span class="collection-item__date-text">24.12.2025, 08:30 - 30.12.2025, 22:00</span>
                            </time>
                            <p class="collection-item__abstract">
                                <span class="collection-item__abstract-text">
                                    Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen.
                                </span>
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

export const ListItemEvent = Template.bind({});
